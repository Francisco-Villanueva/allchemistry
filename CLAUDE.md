# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — TypeScript check (`tsc -b`) then Vite production build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build locally

## Tech Stack

React 19 + TypeScript + Vite + Tailwind CSS 4. SWC used for fast transpilation. shadcn/ui (New York style) with Radix UI primitives for components. GSAP for animations. FontAwesome and Lucide for icons.

## Architecture

Landing page for AllChemistry (chemical products distributor). Single-page app with React Router.

- **`src/pages/`** — Page-level components. `home/home-page.tsx` is the main layout composing all landing sections.
- **`src/components/`** — Shared components (navbar, footer, FAQ, contact button). `ui/` contains shadcn/ui primitives.
- **`src/mock/products.json`** — Static product data (no API).
- **`src/lib/utils.ts`** — `cn()` helper (clsx + tailwind-merge).
- **Path alias:** `@` maps to `src/` (configured in vite.config.ts and tsconfig).

## Key Patterns

- Tailwind responsive breakpoints use `max-md:` for mobile-first overrides
- Component styling uses Class Variance Authority (CVA)
- Navbar has scroll-based sticky behavior
- Spanish language content throughout
