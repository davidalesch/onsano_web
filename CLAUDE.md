# Onsano — website

Marketing/presentation site for Onsano. Audience: **German hospital contacts** (primary),
**investors** (secondary). Goal in 30s: *"Onsano tackles the profitability problem of hospitals."*

**Positioning (the pitch):** optimising processes for **revenue protection** — keeping earned
revenue through complete documentation and audit-defensible cases. **NOT** "saving clinicians time /
reducing clinician workload" — that framing is off-pitch; do not lead with it.

Full creative brief lives in `DESIGN.md`. This file is the non-negotiable ground truth — read it before editing.

## Stack (pinned, verified current)
- **Astro 7** (static output / SSG), **Tailwind v4** via `@tailwindcss/vite` (CSS-first `@theme`).
- **GSAP 3** (+ ScrollTrigger) for sequenced motion; native CSS scroll-driven animation for simple reveals.
- **lucide-astro** icons. **Fonts self-hosted** via `@fontsource-variable/*` — **never** Google Fonts CDN (GDPR/IP-transfer under German case law).
- Deploy: **Cloudflare Pages**. i18n: **EN default at `/`, DE at `/de/`** (`prefixDefaultLocale: false`).

## Design tokens — one source of truth
All colour/type/spacing/motion live in **`src/styles/global.css`** (`@theme` block). Change values there, never hard-code.

- **Blue `#355270`** (`text-brand`) = titles, links, primary text. Passes AA (~8:1). The workhorse.
- **Light green `#5faf8c`** (`text-brand-green`) = **decoration / fills / logo ONLY**. Fails text contrast (2.6:1) — **never use for text or borders on white.**
- **Green-ink `#3f7d63`** (`text-green-ink`) = the green for *text/icons* on white (~4.9:1). Use this whenever green type is wanted.
- Body text near-black `#0b0f14`; muted `#4c5c70`.

## Logo
- Components: `LogoMark.astro` (two squares, animatable) and `Logo.astro` (full lockup, wordmark as **outlines** — font-independent). Both `currentColor`; tint with a `text-*` class.
- Web variants: **blue** (primary) and **light-green**. **Black is email-signature only** — the only web exception is the very bottom footer end-cap.
- **Do NOT use the dark/muted-green logo** (PDF pages 7–8).
- The mark = two overlapping rounded squares = "an intelligence layer on top of an existing system." **Derive every abstract visual on the site from this mark** (layering, offset, filled-vs-outline). Do not invent a new motif or drop a different generic icon per section.

## Voice
Optimistic, informed, no-bs/factual. Short, concise, slightly confident sentences. NOT generic, bland, or overconfident. German regulatory terms + English tech terms both fine.

## NEVER claim (nothing fact-checkable that isn't real yet)
- No concrete product **wedge**, no case studies, no customer logos, no specific outcome numbers/percentages presented as fact.
- **Section 3 (Approach) stays deliberately abstract** — do not list the specific capabilities (spoken-vs-KIS comparison, audit-response drafting, pre-submission screening) that would reveal the wedge.
- No certifications/approvals that don't exist (MDR class, ISO, BSI). Compliance section: "GDPR-minded architecture", "human-in-the-loop by design" — postures, not credentials.
- No stock medical photography, ever (stethoscopes, corridors, doctor-with-tablet). Abstract geometric system only.
- Company is **not incorporated yet** → Impressum/Datenschutzerklärung are placeholder scaffolds until real entity details exist.

## Integrations
- CTA everywhere = Cal.com element-click embed, link `david-alesch/30min`, namespace `30min`.
- Analytics = Google Analytics, **consent-gated** (must not load before the user accepts the cookie banner); disclose in Datenschutzerklärung.

## Sections (order)
1 Hero · 2 Problem · 3 Approach (abstract) · 4 Compliance · 5 Contact · 6 Impressum · 7 Datenschutzerklärung.
