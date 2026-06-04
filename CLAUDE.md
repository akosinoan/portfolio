# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # start dev server (Vite) — serves / (frontend) and /backend/
bun run build     # tsc --noEmit (strict, both apps) + production build
bun run lint      # ESLint (flat config in eslint.config.js; lints **/*.{ts,tsx})
bun run preview   # serve the production build locally
bun run deploy    # build + push to GitHub Pages via gh-pages
```

## Two apps, one Vite project

This repo builds **two independent single-page apps** from two HTML entries
(`vite.config.ts` → `build.rollupOptions.input`):

1. **Root portfolio** (`/`) — `index.html` → `src/main.tsx` → `src/App.tsx`. The
   public, indexed "Web Developer & U.S. Navy Veteran" site. Crimson theme
   (`red-950 → red-300`). React 18 + TypeScript + Tailwind v3 + Framer Motion.
2. **Backend rebuild** (`/backend/`) — `backend/index.html` → `src/backend/main.tsx`.
   A `noindex` "Software Engineer (Rust, Backend)" rebrand with a dark,
   Geist / CSS-variable design system. Uses the `@/` path alias (`@/* → src/backend/*`).

The two apps share no code (different design languages); each is self-contained
with its own `lib/cn.ts`, `components/ui`, `data`, etc. `tsconfig.json` includes
all of `src`, so both apps are type-checked under `strict`.

## Root portfolio architecture (`src/`)

```
src/
├── main.tsx / App.tsx        # entry + root layout (provides ActiveNavContext)
├── index.css                 # @tailwind directives only
├── components/
│   ├── ui/                   # reusable primitives (barrel: index.ts):
│   │                         #   Section, Container, SectionHeading, Card,
│   │                         #   GradientBar, Badge, Button, IconImg, TimelineDot
│   ├── layout/               # Header (hero), NavBar, Footer
│   └── sections/             # one folder per section, each split into <150-line files
│       about/  portfolio/  work-history/  education/
├── context/ActiveNavContext.ts   # typed [active, setActive] tuple + useActiveNav()
├── data/                     # ALL content — nav, skills, projects, work-history,
│                             # education, certifications, socials, site, about
├── hooks/useIsVisible.ts     # IntersectionObserver scroll-reveal
├── lib/cn.ts                 # clsx class merger
├── types/index.ts            # shared domain types
└── utils/firstLetter.ts
```

Components are presentational and consume imported `data` — no hardcoded content
arrays live inside components. Sections decompose into a folder of small,
single-responsibility components (e.g. `work-history/` = `WorkHistory` +
`TimelineEntry` + `WorkCard`).

**Scroll animations:** two mechanisms, kept from the original design —
`useIsVisible` (About, Portfolio) toggles Tailwind keyframe classes
(`animate-fadeLeftToRight`, `animate-fadeIn`; custom keyframes in
`tailwind.config.js`); Framer Motion `useInView` drives the WorkHistory /
Education timelines.

**Active nav:** `ActiveNavContext` (typed in `src/context`, provided in `App.tsx`)
holds the current section id; the NavBar scroll listener updates it and highlights
the active link in yellow. No router — anchors + `scrollIntoView`; every section
carries `scroll-mt-16` (via the `Section` primitive) for the fixed 64px navbar.

**Theming:** crimson gradient (`red-950 → red-300`) is the primary identity, used
in `SectionHeading`, `Button` (primary), and card accents.

## Deployment

`vite.config.ts` sets `base: "/"`. GitHub Actions
(`.github/workflows/jekyll-gh-pages.yml`) runs `bun install && bun run build` on
push to `main` and deploys `dist/` to GitHub Pages.
