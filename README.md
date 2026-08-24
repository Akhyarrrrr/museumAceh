# Museum Aceh

Official website of Museum Aceh — guarding the heritage of Aceh: history, culture and resilience under one roof.

**Live:** https://museum-aceh.vercel.app

## Tech Stack

- [Astro](https://astro.build) 7 — static site, zero JS framework
- [Tailwind CSS](https://tailwindcss.com) 4 — via `@tailwindcss/vite`
- [GSAP](https://gsap.com) + ScrollTrigger — cinematic scroll animations
- [Lenis](https://lenis.darkroom.engineering) — smooth scrolling
- Fonts: Cinzel, DM Sans, Montserrat (variable, self-hosted via Fontsource)

## Pages

| Route | Description |
| ----- | ----------- |
| `/` | Home — video hero, highlights, stats, events & news preview |
| `/visit` | Hours, tickets, facilities, location |
| `/collection` | Collection grid + pinned horizontal gallery |
| `/collection/[slug]` | Artifact detail pages (6 items) |
| `/explore` | Galleries, virtual tour, outdoor area |
| `/about` | Story, timeline, values |
| `/whats-on` | Upcoming events |
| `/news` | News listing + featured article |
| `/news/[slug]` | Article detail pages (6 posts) |
| `/contact` | Contact form UI |
| `/login` · `/signup` | Auth screens (UI only) |

## Architecture Notes

- **Single data source:** collection items & articles live in `src/lib/data.ts`; grids and detail pages both read from it.
- **Declarative animation system** (`src/lib/animations.ts`): sprinkle data attributes on any element — `data-reveal`, `data-reveal-stagger`, `data-parallax="0.08"`, `data-marquee`, `data-counter`, `data-hero-line`, `data-hero-fade`. All animations respect `prefers-reduced-motion`.
- **Placeholders:** photography uses seeded picsum URLs (`src/lib/img.ts`) pending real museum assets.

## Commands

```sh
npm install        # install dependencies
npm run dev        # local dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview the production build locally
```

## Deploy

Connected to Vercel via GitHub integration — every push to `main` auto-deploys.
