'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

interface AtomSceneProps {
  electronsPerShell: number[];
  is3D: boolean;
  isPlaying: boolean;
  color?: string;
}

function Nucleus({ color, isPlaying }: { color: string; isPlaying: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const col = new THREE.Color(color);

  useFrame((_, delta) => {
    if (!isPlaying) return;
    if (ref.current) {
      ref.current.rotation.x += delta * 0.3;
      ref.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={ref}>
      {[...Array(6)].map((_, i) => {
        const phi = Math.acos(-1 + (2 * i + 1) / 6);
        const theta = Math.sqrt(6 * Math.PI) * phi;
        return (
          <mesh
            key={`p${i}`}
            position={[
              0.15 * Math.cos(theta) * Math.sin(phi),
              0.15 * Math.sin(theta) * Math.sin(phi),
              0.15 * Math.cos(phi),
            ]}
          >
            <sphereGeometry args={[0.12, 12, 12]} />
            <meshStandardMaterial color={col} emissive={col} emissiveIntensity={0.5} />
          </mesh>
        );
      })}
      <mesh>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color={col} transparent opacity={0.15} emissive={col} emissiveIntensity={0.3} />
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
      electronsRef.current.rotation.z += delta * speed;
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

function AtomScene({ electronsPerShell, is3D, isPlaying, color = '#00d4ff' }: AtomSceneProps) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color={color} />

      <Nucleus color={color} isPlaying={isPlaying} />

      {electronsPerShell.map((count, i) => (
        <ElectronShell
          key={i}
          shellIndex={i}
          electronCount={Math.min(count, 8)}
          radius={0.8 + i * 0.55}
          is3D={is3D}
          isPlaying={isPlaying}
          color={color}
        />
      ))}
    </>
  );
}

interface AtomVisualizationProps {
  electronsPerShell: number[];
  is3D: boolean;
  isPlaying: boolean;
  color?: string;
  height?: string;
  compact?: boolean;
}

export default function AtomVisualization({
  electronsPerShell,
  is3D,
  isPlaying,
  color = '#00d4ff',
  height = '350px',
  compact = false,
}: AtomVisualizationProps) {
  const maxShells = electronsPerShell.length;
  // For compact mode (hover previews), zoom in more
  const camZ = compact ? 2.5 + maxShells * 0.4 : 2 + maxShells * 0.6;

  return (
    <div style={{ width: '100%', height, borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <Canvas
        camera={{ position: [0, 0, camZ], fov: compact ? 45 : 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <AtomScene
          electronsPerShell={electronsPerShell}
          is3D={is3D}
          isPlaying={isPlaying}
          color={color}
        />
      </Canvas>
    </div>
  );
}
