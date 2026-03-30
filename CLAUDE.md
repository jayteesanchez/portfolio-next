# [CLAUDE.md](http://CLAUDE.md)

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build for production (outputs to out/)
npm run lint     # Run ESLint
npm run start    # Run production server
```

There are no tests in this project.

## Architecture

**Next.js 14 App Router**, statically exported for S3/CloudFront deployment (`output: "export"` in [next.config.mjs](next.config.mjs)). The build produces an `out/` directory. Trailing slashes are enabled for S3-compatible routing.

### Pages

Three routes, all under [src/app/](src/app/):

- `/` — Home with tech stack icon grid
- `/projects` — Project cards with screenshots, tech badges, and external links
- `/resume` — Email gate form; on submission calls a Lambda that returns a pre-signed S3 URL, then renders the PDF inline (desktop) or a download button (mobile)

The root [layout.tsx](src/app/layout.tsx) wraps all pages with a full-viewport dark layout: a background photo (`/public/IMG_0117.jpg`) with a left-to-right gradient overlay (solid black on left, transparent on right), a top-left navbar, and bottom-left social links. Content is constrained to roughly the left third on large screens so the background is visible on the right.

### Components

- [navbar.tsx](src/components/navbar.tsx) — `'use client'`; breadcrumb nav using `usePathname()` for active-link styling
- [socials.tsx](src/components/socials.tsx) — Server component; LinkedIn, GitHub, email icon links
- [pdfViewer.tsx](src/components/pdfViewer.tsx) — `'use client'`; wraps `react-pdf` with a custom pdfjs worker; scales pages to container width via `ResizeObserver`; renders all pages
- [emailGateForm.tsx](src/components/emailGateForm.tsx) — `'use client'`; email input form that POSTs to `NEXT_PUBLIC_RESUME_LAMBDA_URL` and returns a signed URL on success

### Resume Lambda

Lives in [lambda/resume-access/](lambda/resume-access/). Validates submitted email, sends an SES notification, and returns a short-lived pre-signed S3 URL for the resume PDF stored in a private bucket.

```bash
cd lambda/resume-access
npm install
npm run zip   # builds and zips for Lambda upload
```

Required Lambda env vars: `RESUME_BUCKET`, `RESUME_KEY`, `NOTIFY_EMAIL`, `ALLOWED_ORIGINS` (comma-separated), `URL_EXPIRY_SECONDS`, `SES_REGION`.

### Styling

Tailwind CSS only — no CSS modules or styled-components. Custom utilities defined in [tailwind.config.ts](tailwind.config.ts): extra scale values (175, 200, 250) for icon hover effects, and `80svh` height. Custom `animate-fade-in-up` animation in [globals.css](src/app/globals.css).

### Content

All content is hardcoded — no CMS or database. Project data (names, descriptions, tech stacks, URLs, screenshots) lives directly in [src/app/projects/page.tsx](src/app/projects/page.tsx). The resume PDF lives in a private S3 bucket (not `/public`).

### Webpack note

[next.config.mjs](next.config.mjs) aliases away `canvas` from `pdfjs-dist` to prevent a Node.js build error during static export.

## Deployment

Full AWS deployment guide (S3 + CloudFront, domain setup, deploy script) is in memory at `~/.claude/projects/-Users-jaytee-Documents-code-portfolio-next/memory/AWS_DEPLOYMENT.md`.