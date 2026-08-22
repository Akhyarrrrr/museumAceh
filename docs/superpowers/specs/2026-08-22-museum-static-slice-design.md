# Museum Aceh — Static Slice & Cinematic Upgrade — Design

## Goal

Slice all 8 designed pages from `design/*.svg` into a fully static Astro site, add Login/Signup as UI-only pages, and upgrade the whole site with cinematic GSAP animations. No dynamic data — content is hardcoded in component frontmatter. Images use seeded picsum.photos placeholders.

## Decisions (user-approved)

- **News** and **What's On** are two separate pages.
- **Login/Signup**: free design following the museum palette; split-screen layout.
- **Images**: `https://picsum.photos/seed/<seed>/<w>/<h>` placeholders.
- **Animations**: rich + cinematic — GSAP + ScrollTrigger + Lenis smooth scroll.
- **Responsive**: mobile-first adaptive; designs exist only at 1440px desktop.

## Design Tokens

From SVG extraction:

| Token | Value | Use |
|---|---|---|
| `--color-cream` | `#FFFBF7` | page background |
| `--color-paper` | `#FFFFFF` | cards |
| `--color-ink` | `#080808` / `#212529` | dark sections, text |
| `--color-coffee` | `#483C32` | primary accent (buttons) |
| `--color-taupe` | `#81715F` | secondary accent |
| `--color-line` | `#333333` / white-alpha | dividers |

Fonts: Cinzel (display/headings), DM Sans (body default), Montserrat (UI labels/buttons).

## Architecture

```
src/
├── styles/global.css        tokens, base styles, reduced-motion guard
├── lib/animations.ts        central init: Lenis + GSAP ticker wiring,
│                            declarative [data-*] animation engine
├── layouts/
│   ├── Layout.astro         html shell, meta, global script import
│   ├── ShellWithNav.astro   Navbar + Footer + <main>
│   └── AuthLayout.astro     split-screen for login/signup
├── components/
│   ├── ui/                  Reveal, SectionHeading, Button, Marquee, Counter
│   ├── Navbar.astro         sticky, hide-on-scroll-down, mobile drawer
│   ├── Footer.astro
│   └── Home/ Visit/ …       section components per page
└── pages/                   index, visit, collection, explore, about,
                              contact, whats-on, news, login, signup (10 pages)
```

## Animation System

One central module (`lib/animations.ts`) loaded by Layout. Declarative via data attributes:

- `[data-reveal]` — fade + translateY on scroll enter (ScrollTrigger.batch)
- `[data-reveal-stagger]` — staggers direct children
- `[data-parallax="0.2"]` — scrubbed yPercent parallax
- `[data-marquee]` — infinite horizontal loop
- `[data-counter]` — count-up on enter
- Hero load: title line mask reveal on page load
- Pinned horizontal gallery: dedicated component with its own ScrollTrigger pin
- `prefers-reduced-motion: reduce` → everything disabled, Lenis not started

## Page Blueprints (from SVG heights)

- **Home** 10 229px (~10 sections): video hero → intro statement → highlights gallery → stats → what's-on preview → news preview → big CTA
- **Explore** 7 541px: hero → galleries list → virtual tour feature blocks
- **Visit** 5 836px: hero → hours → ticket pricing → location/map → facilities
- **About** 4 764px: hero → history timeline → vision/mission/values
- **News** 3 917px: featured article + grid
- **What's On** 3 524px: featured event + event grid with filter chips (UI only)
- **Collection** 3 390px: filter tabs UI + artifact grid + pinned horizontal gallery
- **Contact** 2 011px: form UI + info cards + map placeholder
- **Login/Signup**: no design — original split-screen, image side + form side

Copy is authored in English matching existing tone ("Hi, Rakan!"). User reviews wording after slice.
