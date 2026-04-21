# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # start dev server (Vite)
bun run build     # production build
bun run lint      # run ESLint
bun run deploy    # build + push to GitHub Pages via gh-pages
```

## Architecture

Single-page React 18 portfolio deployed to GitHub Pages (`akosinoan.github.io/portfolio/`). Built with Vite, Tailwind CSS v3, and Framer Motion.

**Component tree:**
```
App  (provides ActiveNavContext)
├── Header  (hero image + NavBar)
├── MainComponent
│   ├── About        (bio, skill bars)
│   ├── Portfolio    (project cards with tech icon list)
│   └── WorkHistory  (career timeline — alternating card layout)
└── Footer
```

**Scroll animations:** `src/util/useIsVisible.jsx` wraps `IntersectionObserver` and returns a boolean that toggles Tailwind animation classes (`animate-fadeLeftToRight`, `animate-fadeIn`, etc.). Custom keyframes live in `tailwind.config.js`.  Framer Motion (`motion`, `useInView`) is also available for more complex per-element animations inside WorkHistory.

**Active nav:** `ActiveNavContext` (created in `NavBar.jsx`, provided in `App.jsx`) holds the current section ID string. The NavBar scroll listener updates it; nav links highlight in yellow when active.

**Routing:** No router — anchor IDs with `scrollIntoView`. All sections carry `scroll-mt-16` to account for the fixed 64 px navbar.

**Theming:** Dark crimson gradient (`red-950 → red-300`) is the primary color identity, used in headings and accents throughout.

**Deployment:** `vite.config.js` sets `base: "/"`. GitHub Actions (`.github/workflows/jekyll-gh-pages.yml`) runs CI/CD on push to main.
