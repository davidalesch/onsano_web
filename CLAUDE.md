# Onsano — website

Marketing/presentation site for Onsano. Audience: **German hospital contacts** (primary),
**investors** (secondary). Goal in 30s: *"Onsano tackles the profitability problem of hospitals."*

**Positioning (the pitch):** optimising processes for **revenue protection** — keeping earned
revenue through complete documentation and audit-defensible cases. **NOT** "saving clinicians time /
reducing clinician workload" — that framing is off-pitch; do not lead with it.

The September 2026 user-requested revamp supersedes the older abstract-product brief. Full creative brief lives in `DESIGN.md`. This file is the non-negotiable ground truth — read it before editing.

## Stack (pinned, verified current)
- **Astro 7** (static output / SSG), **Tailwind v4** via `@tailwindcss/vite` (CSS-first `@theme`).
- **GSAP 3** (+ ScrollTrigger) for sequenced motion; native CSS scroll-driven animation for simple reveals.
- **lucide-astro** icons. **Fonts self-hosted** via `@fontsource-variable/*` — **never** Google Fonts CDN (GDPR/IP-transfer under German case law).
- Deploy: **Cloudflare Pages**. i18n: **EN default at `/`, DE at `/de/`** (`prefixDefaultLocale: false`).

## Design tokens — one source of truth
Shared palette and legacy tokens live in **`src/styles/global.css`**. Redesign layouts and responsive rules live in **`src/styles/revamp.css`**. Use the current redesign palette for the marketing site; the original tokens remain for the legal pages.

- **Blue `#355270`** (`text-brand`) = titles, links, primary text. Passes AA (~8:1). The workhorse.
- **Light green `#5faf8c`** (`text-brand-green`) = **decoration / fills / logo ONLY**. Fails text contrast (2.6:1) — **never use for text or borders on white.**
- **Green-ink `#3f7d63`** (`text-green-ink`) = the green for *text/icons* on white (~4.9:1). Use this whenever green type is wanted.
- Body text near-black `#0b0f14`; muted `#4c5c70`.

## Logo
- Use the September 2026 SVGs supplied by the user in `public/brand`: blue wordmark, blue standalone mark, and white-on-blue tile.
- `Logo.astro` renders the official wordmark; `LogoMark.astro` renders the standalone mark or tile. Preserve their artwork and colours.
- The supplied connected diamond mark replaces the old overlapping-square logo throughout the site, including the favicon.

## Voice
Optimistic, informed, no-bs/factual. Short, concise, slightly confident sentences. NOT generic, bland, or overconfident. German regulatory terms + English tech terms both fine.

## NEVER claim (nothing fact-checkable that isn't real yet)
- No invented case studies, customer logos, or specific outcome numbers/percentages presented as fact.
- Explain the MD Audit Agent and Widerspruch Agent using source-grounded product details. The user explicitly requested these product stories and simple synthetic demos in September 2026.
- No certifications/approvals that don't exist (MDR class, ISO, BSI). Compliance section: "GDPR-minded architecture", "human-in-the-loop by design" — postures, not credentials.
- No stock medical photography, ever (stethoscopes, corridors, doctor-with-tablet). Abstract geometric system only.
- Company is **not incorporated yet** → Impressum/Datenschutzerklärung are placeholder scaffolds until real entity details exist.

## Integrations
- All booking CTAs open the Cal.com modal for `david-alesch/30min`, loaded on demand by `Booking.astro`. Do not open a separate page during the normal interaction.
- Analytics = Google Analytics, **consent-gated** (must not load before the user accepts the cookie banner); disclose in Datenschutzerklärung.

## Sections (order)
1 Hero · 2 Problem · 3 Products and demos · 4 Workflow · 5 Trust · 6 FAQ · 7 Contact · 8 Footer/legal links.
