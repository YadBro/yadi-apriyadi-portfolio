# AGENTS.md — Developer & AI Agent Guide

This document defines the architecture, conventions, and engineering rules for **Yadi Apriyadi's Personal Portfolio** (`portofolio-2024`). Future developers and AI coding agents should read this guide before modifying the repository.

---

## 1. Core Engineering Principle

> **Modernize the engineering, preserve the visual identity.**

Do **not** replace the portfolio design with generic templates, alter the color palette, or fabricate projects, certifications, or experience. Content updates must reflect real, verified information provided by Yadi Apriyadi.

---

## 2. Technology Stack

- **Framework**: Next.js `16.4.5` (App Router)
- **UI Library**: React `19.3.1` & React DOM `19.3.1` (React Server Components by default)
- **Language**: TypeScript `5.9.3` (`strict: true`, `moduleResolution: "bundler"`)
- **Styling**: Tailwind CSS `4.3.5` via `@tailwindcss/postcss` (CSS-first configuration in `app/globals.css`)
- **Linting**: ESLint `9.39.5` + `eslint-config-next` `16.4.5` (Flat Config in `eslint.config.mjs`)
- **Runtime**: Node.js `>=22.0.0` LTS

---

## 3. Project Architecture

```text
app/
  api/hello/route.ts   # GET /api/hello Route Handler
  error.tsx            # Client error boundary
  globals.css          # Tailwind CSS v4 @theme, @utility container, custom classes
  layout.tsx           # Root Server Component layout, Inter font, Metadata API, JSON-LD
  not-found.tsx        # Custom 404 page
  page.tsx             # Home page (Server Component)
  robots.ts            # /robots.txt metadata route
  sitemap.ts           # /sitemap.xml metadata route
components/
  component-home/      # Page sections (Header, Hero, About, Portfolio, Skills, Achievement, Contact, Footer)
  component-icon/      # Tech-stack and social media SVG/image icon components
  BlobBackground.tsx   # Decorative hero SVG blob
  PortfolioItem.tsx    # Reusable portfolio project card (Server Component)
lib/
  portfolio-data.tsx   # Typed portfolio project entries and metadata
types/
  portfolio.ts         # Shared TypeScript interfaces for portfolio items
public/
  assets/              # Static icons, profile photos, and portfolio screenshots
  maskot.ico           # Site favicon
docs/
  ROADMAP.md           # Future improvements and technical debt notes
```

---

## 4. Coding Standards & Conventions

### Server vs. Client Components
- Default to **React Server Components**. Do **not** add `"use client"` to `app/page.tsx`, `app/layout.tsx`, or static sections.
- Currently, only interactive components use `"use client"`:
  - `components/component-home/HeaderSection.tsx` (scroll-fixed header state & mobile hamburger menu toggle)
  - `components/component-home/ContactSection.tsx` (controlled form state, validation, and `mailto:` submission)
  - `app/error.tsx` (required by Next.js Error Boundaries)
- Keep client boundaries leaf-level if adding new interactive widgets.

### Styling & Tailwind CSS v4 Rules
- All theme tokens live in `app/globals.css` under `@theme`:
  - `--color-primary: #84cc16`
  - `--color-secondary: #64748b`
  - `--color-dark: #0f172a`
  - `--breakpoint-2xl: 82.5rem` (`1320px` — expressed in `rem` so Tailwind v4 orders `82.5rem` after `80rem`)
  - Exact Tailwind v3 hex values for `slate-*`, `yellow-400`, `teal-400`, `sky-500`, `blue-600`, `green-600`, and `red-600` to preserve 100% color parity.
- Never concatenate template expressions directly onto class names without whitespace (e.g., avoid `` `z-[9999]${...}` ``); always separate dynamic class tokens with spaces so Tailwind v4's Oxide scanner detects every utility.
- `.container` is customized via `@utility container` (`margin-inline: auto; padding-inline: 5px;`) to preserve visual parity with the original layout. Do not remove this rule.
- Use Tailwind CSS v4 syntax:
  - Opacity modifiers (`bg-white/70`) instead of removed `bg-opacity-*` utilities.
  - Trailing important modifier (`bg-dark!`) instead of leading `!bg-dark`.
- Do **not** reintroduce a legacy `tailwind.config.js` or `autoprefixer`.

### Images & Assets
- Local raster images (`public/assets/images/**`) should use `next/image` (`<Image>`) with explicit `width`, `height`, `sizes`, and `className="... h-auto"` to prevent layout shift.
- Note that `public/assets/images/maskot.png` (`96x96`) and `public/assets/images/portfolio/pintar-edu-mobile.png` (`416x203`) are WebP-encoded files with `.png` extensions; preserve their filenames unless updating all references simultaneously.
- Third-party SVG tech badges in `components/component-icon/index.tsx` intentionally use native `<img>` tags with `loading="lazy"` and `decoding="async"` so external SVG hosts are not proxied through `/_next/image`.

### Accessibility & SEO
- Every icon-only anchor (`<a>`) or button (`<button>`) must include a descriptive `aria-label`.
- External links opening in a new tab (`target="_blank"`) must include `rel="noopener noreferrer"`.
- Manage SEO metadata through Next.js App Router's `Metadata` / `Viewport` exports in `app/layout.tsx` — never use `next/head`.

---

## 5. Verification Commands

Run all three checks before concluding any task:

```bash
npm run typecheck   # Generates Next.js route types and runs tsc --noEmit
npm run lint        # Runs ESLint 9 flat config across the repository
npm run build       # Verifies full Next.js production build and static generation
```

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
