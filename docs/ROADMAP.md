# Project Roadmap & Technical Debt

This document outlines verified technical debt remaining after the Next.js 16 / React 19 / Tailwind CSS v4 modernization, along with practical future improvements that preserve the portfolio's identity.

---

## 1. Current Technical Debt

1. **External Third-Party Tech Stack Icons (`components/component-icon/index.tsx`)**
   - Several skill and project tech-stack icons load SVGs/PNGs from external CDNs (`raw.githubusercontent.com/devicons`, `vectorlogo.zone`, `wikimedia.org`, `worldvectorlogo.com`, `cloudfront.net`, `php.net`, `laravel.com`, `socket.io`, `reactnative.dev`).
   - **Risk**: Upstream URL changes, rate limits, or offline environments can cause individual skill badges to fail to load.
   - **Recommendation**: Vendor these SVGs locally under `public/assets/icons/` so all icons are self-hosted, immutable, and served from the same origin.

2. **WebP Files with `.png` Extensions**
   - `public/assets/images/maskot.png` (`96x96`) and `public/assets/images/portfolio/pintar-edu-mobile.png` (`416x203`) contain WebP image data under a `.png` file extension, and `public/assets/images/graduation-dumbways.PNG` uses an uppercase `.PNG` extension.
   - **Risk**: Minor confusion for image editing tools or case-sensitive Linux/Vercel asset links if referenced inconsistently.
   - **Recommendation**: Normalize extensions (`.webp` / lowercase `.png`) in a dedicated asset-cleanup pass while updating corresponding paths in `HeaderSection.tsx`, `AchievementSection.tsx`, and `lib/portfolio-data.tsx`.

3. **`mailto:` Contact Form Delivery**
   - `ContactSection.tsx` validates required fields client-side and opens the visitor's default mail client (`mailto:yadiapriyadi676@gmail.com`).
   - **Limitation**: Visitors on devices without a configured mail handler cannot send messages directly in-browser.

---

## 2. Potential Future Improvements

### Short-Term (Low Risk, Zero Visual Change)
- **Self-Host All Skill Badges**: Download external SVG icons into `public/assets/icons/` and remove external image dependencies.
- **Server-Side Contact Form Action (Optional)**: Add a Next.js Server Action or Route Handler backed by an email provider (e.g., Resend or Formspree) with rate limiting and honeypot spam protection, keeping `mailto:` as a fallback link.
- **Automated Visual Regression Suite**: Add a lightweight Playwright test script in CI to compare key section screenshots and verify navigation, mobile menu toggling, and contact form validation on pull requests.

### Medium-Term (Content & UX Enhancements)
- **Portfolio Category Filtering**: As the project list grows beyond 15 entries, add optional client-side filter pills (e.g., *All*, *Fullstack*, *Frontend*, *Mobile*) styled with the existing `#84cc16` / `#0f172a` palette.
- **Dedicated Project Detail Modals or Routes**: Optionally leverage App Router dynamic routes (`/portfolio/[slug]`) for deeper case studies while keeping the main landing page layout intact.
- **Lighthouse CI Budget**: Enforce zero CLS, LCP `< 2.5s`, and Accessibility `>= 95` in GitHub Actions prior to Vercel production promotion.
