'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { elements, CATEGORIES, ElementCategory, ElementData } from '@/data/elements';
import styles from './page.module.css';

const AtomVisualization = dynamic(() => import('@/components/AtomVisualization'), { ssr: false });

// Standard periodic table layout positions
const GRID_POSITIONS: Record<number, [number, number]> = {};

// Helper to set positions
function setPos(atomicNum: number, row: number, col: number) {
  GRID_POSITIONS[atomicNum] = [row, col];
}

// Row 1
setPos(1, 1, 1); setPos(2, 1, 18);
// Row 2
setPos(3, 2, 1); setPos(4, 2, 2);
for (let i = 5; i <= 10; i++) setPos(i, 2, i + 8);
// Row 3
setPos(11, 3, 1); setPos(12, 3, 2);
for (let i = 13; i <= 18; i++) setPos(i, 3, i);
// Row 4
for (let i = 19; i <= 36; i++) setPos(i, 4, i - 18);
// Row 5
for (let i = 37; i <= 54; i++) setPos(i, 5, i - 36);
// Row 6
setPos(55, 6, 1); setPos(56, 6, 2);
// La-Lu go to row 9 (lanthanides)
for (let i = 57; i <= 71; i++) setPos(i, 9, i - 54);
setPos(72, 6, 4); setPos(73, 6, 5); setPos(74, 6, 6); setPos(75, 6, 7);
setPos(76, 6, 8); setPos(77, 6, 9); setPos(78, 6, 10); setPos(79, 6, 11);
setPos(80, 6, 12); setPos(81, 6, 13); setPos(82, 6, 14); setPos(83, 6, 15);
setPos(84, 6, 16); setPos(85, 6, 17); setPos(86, 6, 18);
// Row 7
setPos(87, 7, 1); setPos(88, 7, 2);
// Ac-Lr go to row 10 (actinides)
for (let i = 89; i <= 103; i++) setPos(i, 10, i - 86);
setPos(104, 7, 4); setPos(105, 7, 5); setPos(106, 7, 6); setPos(107, 7, 7);
setPos(108, 7, 8); setPos(109, 7, 9); setPos(110, 7, 10); setPos(111, 7, 11);
setPos(112, 7, 12); setPos(113, 7, 13); setPos(114, 7, 14); setPos(115, 7, 15);
setPos(116, 7, 16); setPos(117, 7, 17); setPos(118, 7, 18);

const categoryKeys = Object.keys(CATEGORIES) as ElementCategory[];

function getCategoryColor(cat: ElementCategory): string {
  const map: Record<ElementCategory, string> = {
    'alkali-metal': '#ff6b6b',
    'alkaline-earth': '#ffa94d',
    'transition-metal': '#ffd43b',
    'post-transition': '#69db7c',
    'metalloid': '#38d9a9',
    'nonmetal': '#4dabf7',
    'halogen': '#748ffc',
    'noble-gas': '#da77f2',
    'lanthanide': '#f783ac',
    'actinide': '#e599f7',
    'unknown': '#868e96',
  };
  return map[cat];
}

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<ElementCategory | null>(null);
  const [hoveredElement, setHoveredElement] = useState<ElementData | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const tableRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === '?' && !e.ctrlKey) {
      e.preventDefault();
      setShowShortcuts(s => !s);
    }
    if (e.key === 'Escape') setShowShortcuts(false);
    if (e.key === 'f' && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      setActiveFilter(f => f ? null : categoryKeys[0]);
    }
    if (e.key >= '1' && e.key <= '9' && !e.ctrlKey) {
      const idx = parseInt(e.key) - 1;
      if (idx < categoryKeys.length) {
        setActiveFilter(f => f === categoryKeys[idx] ? null : categoryKeys[idx]);
      }
    }
    if (e.key === '0') setActiveFilter(null);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const filteredBySearch = searchQuery
    ? elements.filter(el =>
        el.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(el.number).includes(searchQuery)
      )
    : null;

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      {/* Background effect */}
      <div
        className={styles.bgGlow}
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,212,255,0.04), transparent 40%)`,
        }}
      />

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            <span className="gradient-text">Elements</span>
          </h1>
          <p className={styles.subtitle}>Interactive Periodic Table</p>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search elements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search elements"
            />
            {searchQuery && (
              <button
                className={styles.searchClear}
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
          <button
            className={styles.shortcutBtn}
            onClick={() => setShowShortcuts(true)}
            aria-label="Keyboard shortcuts"
            title="Keyboard shortcuts (?)"
          >
            <kbd>?</kbd>
          </button>
        </div>
      </header>

      {/* Filter Controls */}
      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${activeFilter === null ? styles.filterActive : ''}`}
          onClick={() => setActiveFilter(null)}
        >
          All
        </button>
        {categoryKeys.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter(f => f === cat ? null : cat)}
            style={{
              '--cat-color': getCategoryColor(cat),
            } as React.CSSProperties}
          >
            <span
              className={styles.filterDot}
              style={{ background: getCategoryColor(cat) }}
            />
            {CATEGORIES[cat].label}
          </button>
        ))}
      </div>

      {/* Periodic Table Grid */}
      <div className={styles.tableWrapper} ref={tableRef}>
        <div className={styles.table}>
          {elements.map((el) => {
            const pos = GRID_POSITIONS[el.number];
            if (!pos) return null;
            const [row, col] = pos;
            const isFiltered = activeFilter && el.category !== activeFilter;
            const isSearchMatch = filteredBySearch ? filteredBySearch.includes(el) : true;
            const dimmed = isFiltered || !isSearchMatch;

            return (
              <Link
                href={`/${el.slug}`}
                key={el.number}
                className={`${styles.cell} ${dimmed ? styles.cellDimmed : ''}`}
                style={{
                  gridRow: row,
                  gridColumn: col,
                  '--el-color': getCategoryColor(el.category),
                } as React.CSSProperties}
                onMouseEnter={() => setHoveredElement(el)}
                onMouseLeave={() => setHoveredElement(null)}
                id={`element-${el.number}`}
              >
                <span className={styles.cellNumber}>{el.number}</span>
                <span className={styles.cellSymbol}>{el.symbol}</span>
                <span className={styles.cellName}>{el.name}</span>
                <span className={styles.cellMass}>{el.mass}</span>
              </Link>
            );
          })}

          {/* Lanthanide/Actinide labels */}
          <div className={styles.seriesLabel} style={{ gridRow: 9, gridColumn: '1 / 2' }}>
            *
          </div>
          <div className={styles.seriesLabel} style={{ gridRow: 10, gridColumn: '1 / 2' }}>
            **
          </div>
          <div className={styles.seriesIndicator} style={{ gridRow: 6, gridColumn: 3 }}>
            *
          </div>
          <div className={styles.seriesIndicator} style={{ gridRow: 7, gridColumn: 3 }}>
            **
          </div>
        </div>
      </div>

      {/* Hover Tooltip */}
      <AnimatePresence>
        {hoveredElement && (
          <motion.div
            className={styles.tooltip}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              left: Math.min(mousePos.x + 16, typeof window !== 'undefined' ? window.innerWidth - 320 : 600),
              top: Math.min(mousePos.y + 16, typeof window !== 'undefined' ? window.innerHeight - 200 : 400),
            }}
          >
            <div className={styles.tooltipHeader}>
              <span
                className={styles.tooltipSymbol}
                style={{ color: getCategoryColor(hoveredElement.category) }}
              >
                {hoveredElement.symbol}
              </span>
              <div>
                <div className={styles.tooltipName}>{hoveredElement.name}</div>
                <div className={styles.tooltipCategory}>
                  {CATEGORIES[hoveredElement.category].label}
                </div>
              </div>
            </div>
            <div className={styles.tooltipAtom}>
              <AtomVisualization
                electronsPerShell={hoveredElement.electronsPerShell}
                is3D={false}
                isPlaying={true}
                color={getCategoryColor(hoveredElement.category)}
                height="120px"
                compact={true}
              />
            </div>
            <p className={styles.tooltipDesc}>{hoveredElement.description}</p>
            <div className={styles.tooltipMeta}>
              <span>Atomic #: {hoveredElement.number}</span>
              <span>Mass: {hoveredElement.mass}</span>
              <span>Phase: {hoveredElement.phase}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Modal */}
      <AnimatePresence>
        {showShortcuts && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowShortcuts(false)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className={styles.modalTitle}>Keyboard Shortcuts</h2>
              <div className={styles.shortcutList}>
                <div className={styles.shortcutItem}>
                  <kbd>?</kbd><span>Toggle shortcuts help</span>
                </div>
                <div className={styles.shortcutItem}>
                  <kbd>F</kbd><span>Toggle filter panel</span>
                </div>
                <div className={styles.shortcutItem}>
                  <kbd>1-9</kbd><span>Quick category filter</span>
                </div>
                <div className={styles.shortcutItem}>
                  <kbd>0</kbd><span>Clear all filters</span>
                </div>
                <div className={styles.shortcutItem}>
                  <kbd>Esc</kbd><span>Close modal / Clear</span>
                </div>
                <div className={styles.shortcutItem}>
                  <kbd>Space</kbd><span>Pause/play animation (detail page)</span>
                </div>
                <div className={styles.shortcutItem}>
                  <kbd>D</kbd><span>Toggle 2D/3D mode (detail page)</span>
                </div>
                <div className={styles.shortcutItem}>
                  <kbd>←→</kbd><span>Navigate elements (detail page)</span>
                </div>
              </div>
              <button className={styles.modalClose} onClick={() => setShowShortcuts(false)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
