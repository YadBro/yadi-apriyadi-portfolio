# Yadi Apriyadi — Personal Portfolio

Personal developer portfolio website showcasing Yadi Apriyadi's profile, featured web and mobile projects, technical skills, achievements, and contact information.

- **Live Website**: https://yadi-apriyadi-portfolio.vercel.app/

---

## Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) | `16.4.5` |
| UI Library | [React](https://react.dev/) & React DOM (Server Components) | `19.3.1` |
| Language | [TypeScript](https://www.typescriptlang.org/) | `5.9.3` |
| Styling | [Tailwind CSS](https://tailwindcss.com/) (`@tailwindcss/postcss`) | `4.3.5` |
| Linting | [ESLint](https://eslint.org/) + `eslint-config-next` (Flat Config) | `9.39.5` / `16.4.5` |
| Runtime | [Node.js](https://nodejs.org/) | `>= 22.0.0` LTS |

---

## Project Architecture

```text
yadi-apriyadi-portfolio/
├── app/
│   ├── api/hello/route.ts      # GET /api/hello Route Handler
│   ├── error.tsx               # Client error boundary
│   ├── globals.css             # Tailwind CSS v4 @theme, @utility container, custom utilities
│   ├── layout.tsx              # Root layout, Google Font (Inter), Metadata API & JSON-LD
│   ├── not-found.tsx           # Custom 404 Not Found page
│   ├── page.tsx                # Main portfolio page (React Server Component)
│   ├── robots.ts               # Generated /robots.txt
│   └── sitemap.ts              # Generated /sitemap.xml
├── components/
│   ├── component-home/         # Modular page sections
│   │   ├── HeaderSection.tsx   # Sticky scroll navbar & mobile hamburger menu ("use client")
│   │   ├── HeroSection.tsx     # Hero banner, profile photo & illustration
│   │   ├── AboutSection.tsx    # About Me & social links
│   │   ├── PortfolioSection.tsx# Featured portfolio grid
│   │   ├── SkillsSection.tsx   # Categorized technical skills
│   │   ├── AchievementSection.tsx # Graduation certificate showcase
│   │   ├── ContactSection.tsx  # Validated mailto contact form ("use client")
│   │   └── FooterSection.tsx   # Contact details & credits
│   ├── component-icon/
│   │   └── index.tsx           # Tech-stack & social media icon components
│   ├── BlobBackground.tsx      # Decorative SVG blob background
│   └── PortfolioItem.tsx       # Reusable portfolio project card
├── docs/
│   └── ROADMAP.md              # Technical debt & future enhancement roadmap
├── lib/
│   └── portfolio-data.tsx      # Typed portfolio project entries
├── public/
│   ├── assets/                 # Static icons, profile photos & project screenshots
│   └── maskot.ico              # Site favicon
├── types/
│   └── portfolio.ts            # TypeScript interfaces for portfolio models
├── AGENTS.md                   # Conventions & instructions for developers and AI agents
├── CHANGELOG.md                # Release history & modernization log
├── eslint.config.mjs           # ESLint v9 Flat Config
├── next.config.ts              # Next.js TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration (@tailwindcss/postcss)
└── tsconfig.json               # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** `22.x` LTS or newer
- **npm** `10.x` or newer

### Installation

```bash
npm install
```

### Development Commands

```bash
# Start local development server at http://localhost:3000
npm run dev

# Run TypeScript route type generation and static type checking
npm run typecheck

# Run ESLint across the repository
npm run lint
```

### Production Build & Preview

```bash
# Create an optimized production build
npm run build

# Start the production server locally
npm run start
```

---

## Environment Variables

This application currently requires **no environment variables** for local development or production deployment. Contact submissions use validated `mailto:` links on the client without exposing external API keys.

---

## Deployment

The project is configured for zero-configuration deployment on [Vercel](https://vercel.com/) using the standard Next.js preset (`npm run build`, Node.js 22+ runtime).
