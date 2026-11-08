# Chef Mani Bista — Chase the Flavor

A cinematic, editorial website for Chef Mani Bista, a Kathmandu-based private chef serving Nepal and India.

The site is built as a five-act scroll experience: **Mise en Place, Origin, Fire, Artistry, Journey, The Table, Finale**. Milestone 1 establishes the visual system, the story-led pages, the SEO foundation, and a working reservation enquiry flow.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS 4
- GSAP + ScrollTrigger
- Lenis smooth scroll
- next/image with AVIF/WebP output
- Vercel (preview deployment)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run typecheck` | Run TypeScript without emitting |
| `npm run optimize-images` | Rebuild the optimized image set and app icons from `/images` |

## Environment

Copy `.env.example` to `.env.local` and set the public site URL:

```bash
NEXT_PUBLIC_SITE_URL=https://manibista.vercel.app
```

The fallback is `https://manibista.vercel.app`. Set this to the final domain before launch. Preview deployments should be marked `noindex` when `VERCEL_ENV` is not `production`.

## Content rules

These rules are part of the brand and must be preserved:

- **No dish names anywhere.** The food photographs are published as unnamed signature plates. The menu uses course numbers, flavour themes, and ingredient descriptions until real dish names are supplied by the chef.
- **Real story only.** No invented Michelin stars, awards, reviews, or credentials.
- **AI-enhanced portraits are editorial art**, not documentary evidence. Real photographs anchor the biography, schema, and trust pages.
- **English only.**
- **Service area:** Kathmandu, all of Nepal, and India.
- **Contact:** chefbista@gmail.com · +977 9851150987 (phone and WhatsApp).

## Image system

Source images live in `/images`. The optimization script writes web-ready files to `/public/images` and generates the app icons.

- All 11 uploaded images are used.
- The triptych `mani.jpg` is split into three editorial chapters: city, mountain, candlelight.
- The mountain portrait (`image-4.png`) is intentionally used as a portrait panel, not a full-screen hero, because of its resolution.
- Food images use generic alt text such as “A signature plate by Chef Mani Bista, photographed in Kathmandu.”

See [IMAGES.md](./IMAGES.md) for the full mapping.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Cinematic home: hero, Origin, Fire, Experiences, Story, Reservation |
| `/story` | Biography, chapters, philosophy, editorial portraits |
| `/menu` | Sample seasonal progression, dietary notes, pairings |
| `/experiences` | Chef's table, private dining, cooking sessions, FAQ |
| `/reserve` | Reservation enquiry form (WhatsApp/email handoff, no payment) |
| `/private-chef-kathmandu` | Local SEO landing page |
| `/private-chef-nepal` | Nepal destination dining landing page |
| `/private-chef-india` | India destination dining landing page |

## SEO foundation

- Per-page metadata, canonical URLs, Open Graph and Twitter cards
- `Person`, `ProfessionalService`, `WebSite`, `Service`, `FAQPage`, `Menu`, and `BreadcrumbList` structured data
- `sitemap.xml` and `robots.txt`
- Web app manifest and generated icons
- Entity-first focus: “Chef Mani Bista”, then “private chef Kathmandu”, “private chef Nepal”, and “Nepali private chef in India”
- Person schema uses a real photograph (the Kathmandu temple portrait)

## Reservation flow (v1)

The reservation form collects the guest's details and opens WhatsApp (or email) with a prefilled request. There is no payment on the site. The chef confirms availability personally. The Neon + Drizzle + Resend backend, chef approval dashboard (`/studio`), and automated confirmations are planned for Milestone 3.

## Accessibility and performance

- Semantic landmarks, skip link, visible focus states, labelled form fields
- `prefers-reduced-motion` support across the preloader, Lenis, reveals, marquee, and embers
- Responsive layouts with mobile navigation and focus management
- `next/image` with responsive sizes, AVIF/WebP, and priority loading for the hero
- Lightweight CSS reveals via IntersectionObserver; GSAP reserved for the preloader and future cinematic layers

## Roadmap

- **M1 — Foundation (this milestone):** design system, brand assets, image pipeline, home and story pages, menu, experiences, reservation enquiry, location pages, SEO, preview deployment.
- **M2 — Cinematic layer:** 2.5D dish interaction, steam, custom cursor, page transitions, atmosphere, audio, finale sequence.
- **M3 — Living restaurant:** RASA concierge, Neon + Drizzle reservations, chef approval dashboard, Resend emails, memory wall, origins map.
- **M4 — Polish and launch:** performance tuning, analytics, domain, final content pass.

## Brand assets

Vector logo files are in `/public/brand`:

- `logo-monogram.svg` — gold monogram on transparent
- `logo-monogram-cream.svg` — cream monogram
- `logo-monogram-obsidian.svg` — obsidian monogram for light backgrounds
- `logo-primary.svg` — horizontal lockup
- `logo-primary-obsidian.svg` — horizontal lockup for light backgrounds
- `logo-stacked.svg` — stacked lockup
- `logo-wordmark.svg` — wordmark reference
- `favicon.svg` — app icon source

The on-site wordmark uses the loaded Bodoni Moda and IBM Plex Mono fonts. The standalone SVG lockups use a serif fallback stack for portability.

---

© Chef Mani Bista. All rights reserved.
