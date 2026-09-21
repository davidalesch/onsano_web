# Onsano website — design and content brief

Updated 21 September 2026 for the requested full website redesign.

## Direction

A professional, distinctive hospital revenue-protection site, informed by
Ditto Care's clear storytelling, generous typography, soft surfaces, and simple
motion. The supplied September 2026 Onsano wordmark and connected diamond mark
anchor the brand; overlapping documents connect the record, the evidence, and
the human decision. Official SVG assets are kept in `public/brand`.

Warm ivory, deep blue, sage, and restrained lilac replace the previous white/blue
section system. Self-hosted Manrope and Inter provide the type system. Palette
tokens live in `src/styles/global.css`; redesign layout rules live in
`src/styles/revamp.css`. No stock photography or external font services.

## Positioning and content

Lead with protecting revenue for care already delivered. Explain the two current
products, the MD Audit Agent and Widerspruch Agent, rather than keeping their
capabilities abstract. This explicitly supersedes the earlier instruction to
keep the product wedge private.

Product descriptions are grounded in the core repository's agent index,
audit-response documentation, and intended-purpose statement:

- MD Audit Agent: connect a query and requirements to existing evidence; show
  supporting passages and gaps; prepare a source-linked draft.
- Widerspruch Agent: evaluate each contested finding against the submitted
  record and relevant rules; draft a supported challenge or recognise that the
  evidence does not support contesting it.
- People review, edit, and decide what to submit.

Never invent customer logos, outcome metrics, certifications, regulatory
approvals, or fully deployed integrations. Trust copy describes implemented
architecture and deployment considerations, not a legal compliance guarantee.

## Page sequence

1. Revenue-protection hero and animated record-to-decision illustration.
2. The documentation and audit problem.
3. Two product stories, each with an interactive synthetic demo.
4. Three-step workflow.
5. Human oversight, traceability, data handling, and deployment considerations.
6. Accessible native-disclosure FAQ.
7. Booking and email invitation.
8. Footer with product and existing legal links.

English remains at `/`; German, French, Dutch, Italian, and Spanish retain their
existing routes. All new marketing and demo text is localised.

## Interactions

Demos run entirely in the browser. No uploads, model calls, or patient data.
Each has query/finding → evidence/position → draft states, a source disclosure,
and reset. They are explicitly labelled as synthetic illustrations.

Decorative hero motion stops after 4.5 seconds. Section reveals play once.
Reduced motion disables the animation. Native scrolling and visible-by-default
content work without the animation script.

All booking CTAs, including the product-section “Demo ausmachen” links, open
the official Cal.com modal for `david-alesch/30min`. The SDK loads on the first
click and uses a single default namespace with an explicit calendar origin.
The desktop hero has one “Agenten entdecken” link, inside the illustration.
Workflow step 1 mentions KIS and LE-Portal connectivity, as supplied by the user.
Analytics remains consent-gated.
The cookie banner is not shown while its measurement ID is a placeholder.

## Existing release dependencies

Legal pages contain pre-existing company/provider placeholders. They need real
entity information before a public launch. The redesign does not invent it.
The password-gated dashboard and hosting middleware are outside this change.
