'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { elements, CATEGORIES, ElementData, ElementCategory } from '@/data/elements';
import dynamic from 'next/dynamic';
import styles from './element.module.css';

const AtomVisualization = dynamic(() => import('@/components/AtomVisualization'), { ssr: false });

function getCategoryColor(cat: ElementCategory): string {
  const map: Record<ElementCategory, string> = {
    'alkali-metal': '#ff6b6b', 'alkaline-earth': '#ffa94d', 'transition-metal': '#ffd43b',
    'post-transition': '#69db7c', 'metalloid': '#38d9a9', 'nonmetal': '#4dabf7',
    'halogen': '#748ffc', 'noble-gas': '#da77f2', 'lanthanide': '#f783ac',
    'actinide': '#e599f7', 'unknown': '#868e96',
  };
  return map[cat];
}

function formatTemp(val: number | null): string {
  if (val === null) return 'Unknown';
  return `${val}°C`;
}

export default function ElementClient({ element }: { element: ElementData }) {
  const router = useRouter();
  const [is3D, setIs3D] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState('');
  const color = getCategoryColor(element.category);

  const protons = element.number;
  const neutrons = Math.max(0, Math.round(element.mass) - element.number);

  const currentIdx = elements.findIndex(e => e.number === element.number);
  const prevEl = currentIdx > 0 ? elements[currentIdx - 1] : null;
  const nextEl = currentIdx < elements.length - 1 ? elements[currentIdx + 1] : null;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement) return;
    if (e.key === ' ') { e.preventDefault(); setIsPlaying(p => !p); }
    if (e.key === 'd' || e.key === 'D') setIs3D(d => !d);
    if (e.key === 'ArrowLeft' && prevEl) router.push(`/${prevEl.slug}`);
    if (e.key === 'ArrowRight' && nextEl) router.push(`/${nextEl.slug}`);
    if (e.key === 'Escape' || e.key === 'h' || e.key === 'H') router.push('/');
  }, [prevEl, nextEl, router]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const filteredElements = sidebarSearch
    ? elements.filter(el =>
        el.name.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
        el.symbol.toLowerCase().includes(sidebarSearch.toLowerCase())
      )
    : elements;

  const grouped = filteredElements.reduce((acc, el) => {
    if (!acc[el.category]) acc[el.category] = [];
    acc[el.category].push(el);
    return acc;
  }, {} as Record<string, ElementData[]>);

  const wikiUrl = `https://en.wikipedia.org/wiki/${element.name}`;

  return (
    <div className={styles.layout}>
      {/* Sidebar Toggle (Mobile) */}
      <button
        className={styles.sidebarToggle}
        onClick={() => setSidebarOpen(s => !s)}
        aria-label="Toggle element navigation"
      >
        ☰
      </button>

      {/* Main Content and TOC */}
      <div className={styles.layoutWrapper}>
        {/* Sidebar */}
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
          <div className={styles.sidebarHeader}>
            <input
              type="text"
              placeholder="Filter elements..."
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              className={styles.sidebarSearch}
            />
          </div>
          <nav className={styles.sidebarNav}>
            {Object.entries(grouped).map(([cat, els]) => (
              <div key={cat} className={styles.sidebarGroup}>
                <div
                  className={styles.sidebarGroupTitle}
                  style={{ color: getCategoryColor(cat as ElementCategory) }}
                >
                  {CATEGORIES[cat as ElementCategory]?.label || cat}
                </div>
                {els.map(el => (
                  <Link
                    key={el.number}
                    href={`/${el.slug}`}
                    className={`${styles.sidebarItem} ${el.number === element.number ? styles.sidebarActive : ''}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className={styles.sidebarSymbol}>{el.symbol}</span>
                    <span className={styles.sidebarName}>{el.name}</span>
                    <span className={styles.sidebarNum}>#{el.number}</span>
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </aside>
        <main className={styles.main}>
          {/* Top bar — nav arrows on right */}
          <div className={styles.topBar}>
            <div className={styles.navArrows}>
              {prevEl && (
                <Link href={`/${prevEl.slug}`} className={styles.navArrow} title={prevEl.name}>
                  ← {prevEl.symbol}
                </Link>
              )}
              {nextEl && (
                <Link href={`/${nextEl.slug}`} className={styles.navArrow} title={nextEl.name}>
                  {nextEl.symbol} →
                </Link>
              )}
            </div>
          </div>

        {/* Hero Section */}
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.heroInfo}>
            <span className={styles.heroNumber} style={{ color }}>#{element.number}</span>
            <h1 className={styles.heroTitle}>{element.name}</h1>
            <span className={styles.heroSymbol} style={{ color }}>{element.symbol}</span>
            <p className={styles.heroDesc}>{element.description}</p>
            <div className={styles.heroBadges}>
              <span className={styles.badge} style={{ borderColor: color, color }}>
                {CATEGORIES[element.category].label}
              </span>
              <span className={styles.badge}>{element.phase}</span>
              <span className={styles.badge}>{element.electronConfig}</span>
            </div>
            <a
              href={wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.wikiLink}
            >
              Read more on Wikipedia ↗
            </a>
          </div>

          <div className={styles.heroViz}>
            <AtomVisualization
              protons={protons}
              neutrons={neutrons}
              electronsPerShell={element.electronsPerShell}
              is3D={is3D}
              isPlaying={isPlaying}
              color={color}
              height="300px"
            />
            <div className={styles.vizControls}>
              <button
                className={`${styles.vizBtn} ${!is3D ? styles.vizBtnActive : ''}`}
                onClick={() => setIs3D(false)}
              >
                2D
              </button>
              <button
                className={`${styles.vizBtn} ${is3D ? styles.vizBtnActive : ''}`}
                onClick={() => setIs3D(true)}
              >
                3D
              </button>
              <button
                className={styles.vizBtn}
                onClick={() => setIsPlaying(p => !p)}
              >
                {isPlaying ? '⏸ Pause' : '▶ Play'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Information Sections */}
        <div className={styles.sections}>
          <motion.section id="overview" className={styles.section} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.grid}>
              <div className={styles.stat}><span className={styles.statLabel}>Atomic Number</span><span className={styles.statValue} style={{ color }}>{element.number}</span></div>
              <div className={styles.stat}><span className={styles.statLabel}>Atomic Mass</span><span className={styles.statValue}>{element.mass} u</span></div>
              <div className={styles.stat}><span className={styles.statLabel}>Period</span><span className={styles.statValue}>{element.period}</span></div>
              <div className={styles.stat}><span className={styles.statLabel}>Group</span><span className={styles.statValue}>{element.group || '—'}</span></div>
              <div className={styles.stat}><span className={styles.statLabel}>Category</span><span className={styles.statValue}>{CATEGORIES[element.category].label}</span></div>
              <div className={styles.stat}><span className={styles.statLabel}>Phase</span><span className={styles.statValue}>{element.phase}</span></div>
            </div>
          </motion.section>

          <motion.section id="atomic-properties" className={styles.section} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <h2 className={styles.sectionTitle}>Atomic Properties</h2>
            <div className={styles.grid}>
              <div className={styles.stat}><span className={styles.statLabel}>Electron Configuration</span><span className={styles.statValue} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{element.electronConfig}</span></div>
              <div className={styles.stat}><span className={styles.statLabel}>Electrons per Shell</span><span className={styles.statValue} style={{ fontFamily: 'var(--font-mono)' }}>{element.electronsPerShell.join(', ')}</span></div>
            </div>
            <div className={styles.shellViz}>
              {element.electronsPerShell.map((count, i) => (
                <div key={i} className={styles.shellBar}>
                  <span className={styles.shellLabel}>Shell {i + 1}</span>
                  <div className={styles.shellBarTrack}>
                    <div className={styles.shellBarFill} style={{ width: `${(count / 32) * 100}%`, background: color }} />
                  </div>
                  <span className={styles.shellCount}>{count}e⁻</span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section id="physical-properties" className={styles.section} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className={styles.sectionTitle}>Physical Properties</h2>
            <div className={styles.grid}>
              <div className={styles.stat}><span className={styles.statLabel}>Density</span><span className={styles.statValue}>{element.density ? `${element.density} g/cm³` : 'Unknown'}</span></div>
              <div className={styles.stat}><span className={styles.statLabel}>Melting Point</span><span className={styles.statValue}>{formatTemp(element.meltingPoint)}</span></div>
              <div className={styles.stat}><span className={styles.statLabel}>Boiling Point</span><span className={styles.statValue}>{formatTemp(element.boilingPoint)}</span></div>
            </div>
          </motion.section>

          <motion.section id="history-discovery" className={styles.section} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <h2 className={styles.sectionTitle}>History & Discovery</h2>
            <div className={styles.grid}>
              <div className={styles.stat}><span className={styles.statLabel}>Discovered By</span><span className={styles.statValue}>{element.discoverer}</span></div>
              <div className={styles.stat}><span className={styles.statLabel}>Year Discovered</span><span className={styles.statValue}>{element.yearDiscovered}</span></div>
            </div>
          </motion.section>

          <motion.section id="applications-uses" className={styles.section} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className={styles.sectionTitle}>Applications & Uses</h2>
            <div className={styles.usesList}>
              {element.uses.map((use, i) => (
                <span key={i} className={styles.useTag} style={{ borderColor: `${color}40` }}>{use}</span>
              ))}
            </div>
          </motion.section>
        </div>
        </main>

        {/* Right TOC Sidebar */}
        <aside className={styles.tocSidebar}>
          <div className={styles.tocTitle}>On this page</div>
          <nav className={styles.tocNav}>
            <a href="#overview" className={styles.tocLink}>Overview</a>
            <a href="#atomic-properties" className={styles.tocLink}>Atomic Properties</a>
            <a href="#physical-properties" className={styles.tocLink}>Physical Properties</a>
            <a href="#history-discovery" className={styles.tocLink}>History & Discovery</a>
            <a href="#applications-uses" className={styles.tocLink}>Applications & Uses</a>
          </nav>
        </aside>
      </div>

      {sidebarOpen && (
        <div className={styles.sidebarBackdrop} onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}
