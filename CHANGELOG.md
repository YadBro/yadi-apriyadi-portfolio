# Changelog

All notable changes to this project are documented in this file.

---

## [3.0.0] — 2026-11-07

### Full Technical Modernization (Next.js 16, React 19, App Router, Tailwind CSS v4)

This release modernizes the entire engineering foundation of the portfolio while preserving 100% of its original visual identity, content, sections, and user experience.

### Upgraded Dependencies

| Dependency | Previous | Updated |
|---|---|---|
| `next` | `12.3.1` | `16.4.5` |
| `react` | `18.2.0` | `19.3.1` |
| `react-dom` | `18.2.0` | `19.3.1` |
| `tailwindcss` | `^3.1.8` | `4.3.5` |
| `@tailwindcss/postcss` | — | `4.3.5` |
| `typescript` | `4.8.3` | `5.9.3` |
| `eslint` | `8.23.1` | `9.39.5` |
| `eslint-config-next` | `12.3.1` | `16.4.5` |
| `@types/react` | `18.0.20` | `19.3.0` |
| `@types/react-dom` | `18.0.6` | `19.3.0` |
| `@types/node` | `18.7.18` | `22.20.5` |

### Removed Obsolete Dependencies & Files
- Removed `autoprefixer` (vendor prefixing is built into Tailwind CSS v4 via Lightning CSS).
- Removed direct `postcss` dependency (provided by `@tailwindcss/postcss` and Next.js).
- Removed legacy Pages Router directory (`pages/_app.tsx`, `pages/index.tsx`, `pages/api/hello.ts`), `components/PageTitle.tsx` (`next/head`), unused `styles/Home.module.css`, `styles/globals.css`, `tailwind.config.js`, `postcss.config.js`, `next.config.js`, and `.eslintrc.json`.

### Pages Router to App Router Migration
- Created `app/layout.tsx` as a React Server Component loading Google Font `Inter` via `next/font/google`, configuring SEO, Open Graph, Twitter Card, canonical URL, favicon, viewport metadata via the Next.js Metadata API, and embedding Schema.org `Person` JSON-LD structured data.
- Created `app/page.tsx` as a pure React Server Component rendering all seven portfolio sections in their original order.
- Isolated client-side interactivity (`"use client"`) strictly to `HeaderSection.tsx` (sticky scroll navbar + mobile hamburger menu) and `ContactSection.tsx` (controlled form validation + `mailto:` handler).
- Migrated `pages/api/hello.ts` to App Router Route Handler `app/api/hello/route.ts`.
- Added `app/not-found.tsx`, `app/error.tsx`, `app/robots.ts`, and `app/sitemap.ts`.
- Extracted typed portfolio entries into `lib/portfolio-data.tsx` and interfaces into `types/portfolio.ts`.

### Tailwind CSS v3 to v4 Migration
- Replaced `@tailwind base; @tailwind components; @tailwind utilities;` and `tailwind.config.js` with `@import "tailwindcss";` and `@theme` tokens (`--color-primary: #84cc16`, `--color-secondary: #64748b`, `--color-dark: #0f172a`, `--breakpoint-2xl: 82.5rem` / `1320px`, plus preserved Tailwind v3 RGB/hex palette values) in `app/globals.css`.
- Migrated custom `.container` configuration (`center: true`, `padding: '5px'`) using `@utility container { margin-inline: auto; padding-inline: 5px; }`.
- Replaced removed `bg-opacity-70` utility in `.navbar-fixed` with Tailwind v4 opacity syntax (`bg-white/70`).
- Updated leading important modifier `!bg-dark` to Tailwind v4 trailing syntax `bg-dark!`.
- Restored Tailwind v3 Preflight `cursor: pointer`, default `#e5e7eb` border color, and `#9ca3af` input placeholder color in `@layer base`.
- Configured `postcss.config.mjs` with `@tailwindcss/postcss`.

### Breaking Changes & Compatibility Fixes
- Replaced deprecated `swcMinify` option and `next.config.js` with typed `next.config.ts`.
- Replaced removed `next lint` command and legacy `.eslintrc.json` with ESLint v9 CLI (`"lint": "eslint"`) and Flat Config (`eslint.config.mjs`).
- Added `"typecheck": "next typegen && tsc --noEmit"` script and updated `tsconfig.json` to `moduleResolution: "bundler"` and `jsx: "react-jsx"`.
- Replaced raw `<img>` elements on local raster photos/screenshots (`HeroSection`, `HeaderSection`, `PortfolioItem`, `AchievementSection`) with `next/image` (`<Image>`), optimizing multi-megabyte hero images into modern formats and preventing layout shifts.
- Fixed an accidental empty `<a href="https://heroku.com">` anchor inside `GolangIcon`, corrected copy-paste `alt` attributes on `LaravelIcon` and `ReduxIcon`, added `aria-label` attributes to icon-only social links and mobile navigation controls, and added `rel="noopener noreferrer"` across external links.
- URL-encoded `subject` and `body` parameters in `ContactSection.tsx` `mailto:` submissions so special characters and line breaks are preserved safely.
