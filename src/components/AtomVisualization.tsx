'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

interface AtomSceneProps {
  protons: number;
  neutrons: number;
  electronsPerShell: number[];
  is3D: boolean;
  isPlaying: boolean;
  color?: string;
  compact?: boolean;
  speed?: number;
}

function Nucleus({ protons, neutrons, color, isPlaying, speed = 1 }: { protons: number; neutrons: number; color: string; isPlaying: boolean; speed: number }) {
  const ref = useRef<THREE.Group>(null);
  const col = new THREE.Color(color);
  const neutronCol = new THREE.Color('#aaaaaa');

  useFrame((_, delta) => {
    if (!isPlaying) return;
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2 * speed;
      ref.current.rotation.y += delta * 0.3 * speed;
    }
  });

  const nucleons = useMemo(() => {
    const total = protons + neutrons;
    const pts: { pos: [number, number, number]; isProton: boolean }[] = [];
    
    // Scale radius based on number of nucleons
    const radius = Math.pow(total, 1/3) * 0.055;
    
    // Deterministic shuffle for protons vs neutrons
    const types = Array(total).fill(false);
    for (let i = 0; i < protons; i++) types[i] = true;
    for (let i = total - 1; i > 0; i--) {
      const j = Math.floor(Math.abs(Math.sin((i + 1) * 123.45)) * (i + 1));
      [types[i], types[j]] = [types[j], types[i]];
    }

    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    for (let i = 0; i < total; i++) {
      const y = 1 - (i / (total - 1)) * 2; // y goes from 1 to -1
      const r = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i;

      // Pack interior to make it a solid ball
      const d = radius * Math.cbrt((i + 1) / total); 
      
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      
      pts.push({
        pos: [x * d, y * d, z * d],
        isProton: types[i]
      });
    }
    return pts;
  }, [protons, neutrons]);

  return (
    <group ref={ref}>
      {nucleons.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial 
            color={n.isProton ? col : neutronCol} 
            emissive={n.isProton ? col : neutronCol} 
            emissiveIntensity={n.isProton ? 0.4 : 0.1} 
          />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[Math.pow(protons + neutrons, 1/3) * 0.06, 16, 16]} />
        <meshStandardMaterial color={col} transparent opacity={0.15} emissive={col} emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

function ElectronShell({
  shellIndex,
  electronCount,
  radius,
  is3D,
  isPlaying,
  color,
}: {
  shellIndex: number;
  electronCount: number;
  radius: number;
  is3D: boolean;
  isPlaying: boolean;
  color: string;
  speed: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const electronsRef = useRef<THREE.Group>(null);
  const col = new THREE.Color(color);
  const speed = 0.8 / (shellIndex + 1);
  const tiltX = is3D ? (shellIndex * Math.PI) / (shellIndex + 3) : 0;
  const tiltZ = is3D ? (shellIndex * Math.PI) / 4 : 0;

  const orbitPoints = useMemo(() => {
    const pts: [number, number, number][] = [];
    const segs = 64;
    for (let i = 0; i <= segs; i++) {
      const angle = (i / segs) * Math.PI * 2;
      pts.push([Math.cos(angle) * radius, Math.sin(angle) * radius, 0]);
    }
    return pts;
  }, [radius]);

  useFrame((state, delta) => {
    if (!isPlaying) return;
    if (electronsRef.current) {
      electronsRef.current.rotation.z += delta * speed * speed; // First speed is local multiplier, second is prop
    }
  });

  return (
    <group ref={groupRef} rotation={[tiltX, 0, tiltZ]}>
      <Line points={orbitPoints} color={col} transparent opacity={0.15} lineWidth={1} />
      <group ref={electronsRef}>
        {Array.from({ length: electronCount }).map((_, i) => {
          const angle = (i / electronCount) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            >
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial
                color="#ffffff"
                emissive={col}
                emissiveIntensity={0.8}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

function AtomScene({ protons, neutrons, electronsPerShell, is3D, isPlaying, color = '#00d4ff', compact, speed = 1 }: AtomSceneProps) {
  const maxShells = electronsPerShell.length;
  const maxRadius = 0.8 + (maxShells - 1) * 0.55;
  // Calculate scale so radius fits within camera frustum (fov45, z=4 -> height~3.3)
  const scale = compact ? 1.0 / maxRadius : 1.4 / maxRadius;

  return (
    <group scale={scale}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color={color} />

      <Nucleus protons={protons} neutrons={neutrons} color={color} isPlaying={isPlaying} speed={speed} />

      {electronsPerShell.map((count, i) => (
        <ElectronShell
          key={i}
          shellIndex={i}
          electronCount={Math.min(count, 32)}
          radius={0.8 + i * 0.55}
          is3D={is3D}
          isPlaying={isPlaying}
          color={color}
          speed={speed}
        />
      ))}
    </group>
  );
}

interface AtomVisualizationProps {
  protons: number;
  neutrons: number;
  electronsPerShell: number[];
  is3D: boolean;
  isPlaying: boolean;
  color?: string;
  height?: string;
  compact?: boolean;
  speed?: number;
  enableControls?: boolean;
}

import { OrbitControls } from '@react-three/drei';

export default function AtomVisualization({
  protons,
  neutrons,
  electronsPerShell,
  is3D,
  isPlaying,
  color = '#00d4ff',
  height = '350px',
  compact = false,
  speed = 1,
  enableControls = false,
}: AtomVisualizationProps) {
  return (
    <div style={{ width: '100%', height, borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, compact ? 3.5 : 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <AtomScene
          protons={protons}
          neutrons={neutrons}
          electronsPerShell={electronsPerShell}
          is3D={is3D}
          isPlaying={isPlaying}
          color={color}
          compact={compact}
          speed={speed}
        />
        {enableControls && <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />}
      </Canvas>
    </div>
  );
}
