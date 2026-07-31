# Onsano — creative brief

*Working source of truth for the onsano.com build. Last updated 2026-07-30.*

## 1. Goal & audience
- **Purpose:** Present the company — what we do, why now, how, and a hint of the vision.
- **Audience:** hospital contacts (primary), investors (secondary).
- **30-second takeaway:** "Onsano tackles the profitability problem of hospitals."
- **Do NOT claim yet:** no concrete wedge, no case studies, no customer logos, no outcome numbers — nothing fact-checkable that is aspirational rather than real.

## 2. Structure
| # | Section | Key message |
|---|---|---|
| 1 | Hero | Protect the revenue hospitals have already earned (via AI-native documentation/audit workflows). NB: pitch is revenue protection / process optimisation — NOT saving clinician time. |
| 2 | Problem | Hospitals lose millions each year to lost insurer audits — driven by incomplete documentation, and avoidable. |
| 3 | Approach | An AI agentic system that understands hospitals' core bottlenecks and solves them at the root. **Stays deliberately abstract — no specific capabilities listed.** |
| 4 | Compliance | Compliance as a core design principle (postures, not certifications). |
| 5 | Contact | Email + Cal.com "schedule a call". |
| 6 | Impressum | German legal page (DDG §5). Placeholder until incorporation. |
| 7 | Datenschutzerklärung | German legal page (GDPR Art. 13). Placeholder until incorporation. |

## 3. Voice
Optimistic · informed · no-bs/factual. Short, concise, slightly confident. NOT generic/bland/overconfident. German regulatory + English tech terms both fine.

## 4. Visual references
| Reference | Take from it |
|---|---|
| retellai.com | **Overall favourite** — smooth scroll-triggered animations (except their intro page). |
| fonio.ai | Frontpage feel + section structure. |
| voize.ai | The "care / unburdened" box movement. |
| ontora.com | Overall vibe. |

## 5. Tokens (implemented in `src/styles/global.css`)
- **Colour** — blue `#355270` (text/titles/UI, AA-safe), light-green `#5faf8c` (decoration/fills/logo ONLY — fails text contrast), green-ink `#3f7d63` (green *text*, AA-safe), ink `#0b0f14`, muted `#4c5c70`, bg `#ffffff`, surface `#f5f7f9`.
- **Type** — Geist Variable (display), Inter Variable (body). Fluid clamp() scale. Self-hosted (no Google CDN).
- **Spacing** — 8px grid; section rhythm fluid 64→160px.
- **Motion** — ease-out only, no bounce. 200ms UI, ~520ms reveals, 60–100ms stagger. Animate elements entering frame; static once centred. CSS scroll-driven for simple reveals, GSAP for sequencing.

## 6. Imagery
Custom abstract/geometric system derived from the two-squares logo mark (layering, offset, filled-vs-outline, thin connecting lines, subtle gradient meshes in blue/green). **No stock medical photography.** Icons: lucide, ~1.5–2px stroke, monochrome (blue or green-ink). One reusable visual language across Hero/Approach/Compliance.

## 7. Decisions locked (2026-07-30)
- **Language:** bilingual, **EN default**, DE under `/de/`. Legal pages stay in German.
- **Approach section:** deliberately abstract (wedge stays private).
- **Scheduling:** Cal.com element-click, `david-alesch/30min`, namespace `30min`.
- **Analytics:** Google Analytics, **consent-gated** (cookie banner; no load before consent).
- **Logo on web:** blue + light-green only; black = email signatures (+ maybe footer end-cap); never the dark-green variant.
- **Legal pages:** placeholder scaffolds until the company is incorporated.
