# Elements — Interactive Periodic Table

A stunning, interactive periodic table of the elements built with Next.js and Three.js. Explore all 118 elements with beautiful 3D atom visualizations, detailed information, and smooth animations.

## ✨ Features

- **Interactive Periodic Table** — Full 18-column standard layout with all 118 elements
- **3D Atom Visualizations** — Three.js-powered electron orbital animations with 2D/3D toggle
- **Element Detail Pages** — Comprehensive information organized into clear sections
- **Category Filters** — Highlight elements by group (Noble Gases, Transition Metals, etc.)
- **Element Search** — Instant search by name, symbol, or atomic number
- **Side Navigation** — Browse between elements without returning to the table
- **Keyboard Shortcuts** — Full keyboard navigation (press `?` to see all shortcuts)
- **Dark Theme** — Sleek black aesthetic with cyan-purple accent gradient
- **Responsive Design** — Works beautifully on desktop, tablet, and mobile
- **SEO Optimized** — Schema.org markup, dynamic sitemap, and per-page metadata

## 🎮 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `?` | Show shortcuts help |
| `F` | Toggle filter panel |
| `1-9` | Quick category filter |
| `0` | Clear all filters |
| `Space` | Pause/play animation |
| `D` | Toggle 2D/3D mode |
| `←` `→` | Navigate between elements |
| `Esc` | Return to periodic table |

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Styling**: CSS Modules with custom properties
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── [element]/    # Dynamic element detail pages
│   ├── layout.tsx    # Root layout with SEO
│   ├── page.tsx      # Periodic table home page
│   ├── sitemap.ts    # Dynamic sitemap
│   └── robots.ts     # Robots configuration
├── components/
│   ├── AtomVisualization.tsx  # Three.js atom renderer
│   └── ElementClient.tsx      # Element detail client component
└── data/
    └── elements.ts   # All 118 elements with properties
```

## 🎨 Favicon Prompt

> A minimalist atomic symbol icon on a pure black background. A small glowing cyan nucleus at the center with two thin orbital rings crossing at angles, each with a tiny bright dot representing an electron. The orbits should glow with a gradient from cyan (#00D4FF) to purple (#7B2FBE). Ultra-clean, geometric, suitable for a 32×32 and 512×512 favicon. No text.

---

Developed by **Henry Tolenaar**
