# Platform Overview — Build Brief

**Page URL:** `/platform`
**Last updated:** May 2, 2026
**Status:** Ready for build
**Target word count:** ~750 words
**Audience:** Prospects evaluating SuperSymm as a marketing platform (mid-funnel, often arriving from homepage or paid traffic)
**Primary conversion goal:** Demo booking or routing to specific platform deep-dive pages
**Visual ambition:** Polished but simple — static SVGs, hover states, no scroll-driven sections
**Pattern reference:** Marketing Automation page (`/platform/marketing-automation`) and Business Intelligence page (`/platform/business-intelligence`) — this page mirrors that design system

---

## Strategic intent

This page does three jobs:

1. **Tell the change story** — marketing has shifted from funnels to moments, and the platforms most teams use weren't built for that
2. **Position agentic AI as a means to simplicity, not a feature claim** — the word "agentic" appears 2–3 times total on the page, always in service of the simplicity narrative
3. **Show the platform as connected layers, not a stack of features** — visual proof that the system behaves as a network, with capability deep-dives living on their own dedicated pages

The page is intentionally tighter than the capability deep-dive pages (~750 words vs. ~1,300). Its job is to make the platform make sense, then route the buyer to either a demo conversation or a specific layer page for more detail.

---

## SEO specifications

**Title tag (60 chars):**
```
The Marketing Platform Built for How Marketing Works Now | SuperSymm
```

**Meta description (155 chars):**
```
SuperSymm is the agentic marketing platform with connected layers — intelligence, audience, execution, and learning that meet your customer in every moment.
```

**H1:** The platform built for how marketing works now.
**Primary keyword:** Agentic marketing platform
**Secondary keywords:** Connected marketing platform · AI marketing platform · Multi-channel marketing platform · Marketing operations platform · Marketing platform for professional services

**Schema markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SuperSymm Marketing Platform",
  "applicationCategory": "BusinessApplication",
  "description": "An agentic marketing platform with connected layers — intelligence, audience, execution, and learning that meet your customer in every moment."
}
```

**Open Graph:**
```html
<meta property="og:title" content="The platform built for how marketing works now — SuperSymm" />
<meta property="og:description" content="An agentic marketing platform with connected layers that meet your customer in every moment that matters." />
<meta property="og:image" content="/og-platform-overview-1200x630.png" />
<meta property="og:type" content="website" />
```

---

## Page structure overview

```
1. HERO                          Light    Centered H1 + subhead + CTAs + full-width visual
2. WHY CONNECTION MATTERS NOW    Light    Single oversized statement — visual centerpiece
3. HOW WE BUILT IT               Soft     Founding intent — agentic framing
4. THE PLATFORM                  Light    Layers + connections (combined section)
5. WHAT IT ENABLES               Light    Plain-language outcomes grid
6. FINAL INVITATION              Dark     Standard CTA pattern
7. FOOTER                        Soft     Standard
```

Six content sections total. Tighter than the capability deep-dive pages by design — this page's job is to frame the platform, then route deeper.

---

## Brand foundation (carry from homepage and capability pages)

All design tokens, typography rules, spacing, and motion principles are inherited from the existing design system. No new conventions introduced on this page. See the Marketing Automation page brief for full token reference.

**Quick reference:**
- Newsreader serif italic on key phrases in H1 and selected H2s
- Section padding: `clamp(96px, 10vw, 140px)` standard
- Card hover: 4px lift, 200ms ease
- All interactions respect `prefers-reduced-motion`

---

## Section 1 — Hero

**ID:** `#hero`
**Treatment:** Light (white background)
**Layout:** Centered single column. Breadcrumb at top, eyebrow, headline, subhead, CTAs centered. Below the copy, a full-width hero image runs edge-to-edge of the container.

### Breadcrumb

```
Home  /  Platform
```

Centered, 14px navy at 50% opacity, last segment in navy at 90%.

### Copy (centered, max-width 920px)

```
EYEBROW: The Platform

H1: The platform built for
    how marketing works now.

[Wrap "how marketing works now" in Newsreader serif italic]

SUBHEAD:
Customers don't move through funnels anymore — they move through moments.
SuperSymm is the agentic marketing platform with connected layers that meet
your customer wherever they are, with whatever they need next.

PRIMARY CTA: Get Custom Pricing →
SECONDARY CTA: See How It Works
```

### Visual specifications

**[FPO: hero_platform_overview.jpg — 1200×540px, full-width]**

A horizontal hero image. Recommended approaches in priority order:

1. **Stylized agentic platform diagram** — a horizontal illustration showing the platform as a network of interconnected layers, with subtle agent figures or processing nodes moving between them. The platform feels alive, like a system in motion. Editorial line-art style with one accent color. 1200×540px.

2. **Layered architecture illustration** — a clean visualization of stacked platform layers with interconnecting flow lines between them. Four labeled bands (Brain, Audience, Operator, Memory) connected by pink flow lines suggesting bidirectional data movement. Less narrative, more structural.

3. **Real product UI screenshot** — a wide aspect ratio screenshot showing the platform's main interface. Anonymized data. Cropped 1200×540 with subtle drop shadow.

If using Option 1 (recommended), brief the illustrator: *"Horizontal platform illustration, 1200×540px, navy line strokes (1.5px) with single pink accent for connection lines. Show four horizontal layers labeled Brain, Audience, Operator, Memory. Interconnecting flow lines between layers suggest a working network, not a static stack. Editorial minimalist style. No shading, no gradients. Reference: Stripe documentation hero illustrations, Linear platform diagrams."*

### Component notes

- H1 forces line break between "built for" and "how marketing works now" on desktop
- Primary CTA: yellow pill on white, navy text, 56px tall (or purple fill if yellow on white reads off)
- Secondary CTA: navy text-link with arrow
- 80px gap between CTA row and the full-width image below
- Image: 16px border-radius, subtle drop shadow (`0 24px 48px rgba(31, 30, 33, 0.08)`)

---

## Section 2 — Why connection matters now

**ID:** `#thesis`
**Treatment:** Light (white)
**Layout:** Single centered statement, treated as the visual centerpiece of the section. Oversized typography. Generous white space above and below. No other content in the section.

### Copy

```
EYEBROW: The Thesis

H2 (centered, oversized — treated as a quote-like moment):
When customers move faster than your marketing,
connection is the only thing that scales.

[Wrap "connection is the only thing that scales" in Newsreader serif italic]
```

### Component notes

- Section padding: 160px top/bottom (more than standard — this section earns the breathing room)
- H2 type size: clamp(40px, 6vw, 72px) — significantly larger than standard H2 to function as a typographic moment
- H2 max-width: 1000px, centered
- Line-height: 1.15 (tighter than standard for impact)
- Optional decorative element: a thin 60px-wide `--ss-pink` horizontal rule sitting 32px above the H2, centered. Provides a subtle visual cue without competing with the type.
- Stagger fade-up entrance: rule fades first, then headline 200ms after
- No body copy. No subhead. No CTAs. The section is a single statement, full stop.

---

## Section 3 — How we built it

**ID:** `#origin`
**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** Two-column. Copy left (60%), small supporting visual right (40%). On mobile, stacked.

### Copy

```
EYEBROW: Founding Intent

H2: We didn't set out to build
    another marketing platform.
    We set out to build a simpler one.

[Wrap "a simpler one" in Newsreader serif italic]

BODY:
We didn't start by asking what AI could do. We started by asking what marketing
teams shouldn't have to do anymore.

The answer was a long list. Building campaigns from scratch every quarter.
Stitching together a dozen tools that don't share data. Translating between
strategy and execution by hand. Watching insights from one channel die before
they reach another.

So we built an agentic platform with connected layers that handles those things
automatically — not because agentic is the trend, but because that's what it
takes for marketing to feel as simple as it should.

TRANSITION LINE (sits below the body, slightly emphasized):
Here's how it's built.
```

### Visual specifications

**[FPO: founding_intent_visual.svg — 400×360px]**

A simple two-panel before/after illustration:
- **Left panel (smaller, muted):** a cluttered grid of disconnected tool logos or abstract shapes, suggesting fragmentation
- **Right panel (larger, full color):** a clean, unified platform shape — could be the SuperSymm octagonal logomark or a simplified layered diagram

Connection between panels: a single arrow or curved line transitioning from fragmented to unified. Pink accent on the arrow.

**Alternative simpler approach:** just a single illustration on the right showing the SuperSymm logomark at center surrounded by orderly nested rings, suggesting "this is what we built." Less narrative but easier to execute.

### Component notes

- H2: Inter Bold 36px, navy
- Body: 18px, 1.6 line-height, navy at 90%
- Transition line: Inter Bold 20px, navy, 32px below body paragraph, with a thin pink underline accent (40px wide, sits 8px below the line)
- The transition line is the cue that the platform diagram is coming in the next section

---

## Section 4 — The Platform

**ID:** `#platform`
**Treatment:** Light (white)
**Layout:** Multi-part section. Intro centered. Below: a unified diagram showing the four layers AND the connections between them in a single visual. Below the diagram: the takeaway statement.

This is the most visually demanding section on the page. The diagram is the central proof of the connected-platform claim.

### Copy — Section intro

```
EYEBROW: The Architecture

H2: Four layers.
    Connected by design.

INTRO (centered, max-width 760px):
Most platforms are stacks. Tools sit on top of tools, each one functional,
none of them aware of the others. SuperSymm is built differently — four agentic
layers that share data, share intelligence, and shape each other in real time.
```

### Combined platform diagram

**[FPO: platform_unified_diagram.svg — 1100×600px desktop, 380×900px mobile]**

This is the single most important visual on the page. One diagram, not two — showing both the layers AND the connections between them simultaneously.

**Visual concept:**

The four layers arranged vertically (or in a stacked-but-offset arrangement). Each layer is a rounded rectangle, navy stroke on white, with the layer name in Inter Bold 22px and a 12–15 word descriptor below it.

**Layer labels and descriptors:**

```
THE BRAIN
Business and market intelligence. What you stand for, what your market wants,
where opportunity is.

THE AUDIENCE ENGINE
Persona, segmentation, and behavior. Who you're reaching, and what moves them.

THE OPERATOR
Content, channels, and execution. The work that happens, automatically,
in your voice.

THE MEMORY
Performance and continuous learning. What worked, what didn't,
and how the system gets sharper.
```

**Connections between layers:**

Curved pink lines connecting the layers in a network, not a straight stack. Each connecting line has a small label describing the relationship:

- Brain → Audience Engine: *"Strategy shapes audience targeting"*
- Audience Engine → Operator: *"Personas direct execution"*
- Operator → Memory: *"Performance gets captured"*
- Memory → Brain: *"Learning sharpens strategy"*

The connections form a loop — not a top-to-bottom flow. This is critical: the diagram must show that the layers are bidirectionally connected, with intelligence flowing in a cycle.

**Visual specifications:**
- Layer rectangles: 280×120px, 1.5px navy border, 12px border-radius, 24px padding
- Layer name: Inter Bold 22px, navy, uppercase, 0.04em letter-spacing
- Layer descriptor: 14px navy at 70%, 1.5 line-height
- Connection lines: 2px stroke, `--ss-pink`, with arrowheads
- Connection labels: 12px Inter Medium navy, sits on or near the connection line
- One subtle yellow accent: a small `--ss-yellow` dot at the center of the diagram, suggesting the "always running" core of the system

**Hover behavior (per layer):**

On hover of any layer rectangle:
- That layer lifts 4px
- Its border becomes `--ss-purple` instead of navy
- Connection lines touching that layer brighten slightly
- Other layers fade to 70% opacity

This demonstrates that each layer is a connected actor, not a standalone capability.

**Mobile variant:**

On mobile, the four layers stack vertically with connecting lines running between them on the right side. The Memory → Brain loop curves around the entire stack to reinforce the cycle.

**Implementation approach:**

Build as an inline SVG component with React state controlling hover interactions. No Lottie needed. CSS transitions handle the hover effects.

```tsx
const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

<svg viewBox="0 0 1100 600" width="100%" role="img" aria-label="Platform architecture diagram showing four connected layers: Brain, Audience Engine, Operator, and Memory">
  {layers.map((layer, i) => (
    <g
      key={layer.id}
      onMouseEnter={() => setHoveredLayer(i)}
      onMouseLeave={() => setHoveredLayer(null)}
      className={hoveredLayer === i ? 'layer-active' : hoveredLayer !== null ? 'layer-faded' : ''}
    >
      {/* rectangle, layer name, descriptor */}
    </g>
  ))}

  {connections.map((conn) => (
    <g key={conn.id} className={isConnectionActive(conn, hoveredLayer) ? 'connection-active' : ''}>
      {/* curved path, arrowhead, label */}
    </g>
  ))}
</svg>
```

### Takeaway statement below the diagram

```
CLOSING LINE (centered, italicized):
Every layer makes the others smarter.
That's what makes it a system, not a stack.

[Wrap "a system, not a stack" in Newsreader serif italic]

[Below the closing line — a small row of text links to each layer's dedicated page]

Explore each layer:
The Brain →   The Audience Engine →   The Operator →   The Memory →
```

### Component notes

- Closing line: 22px navy, italic, max-width 760px, centered, 48px below the diagram
- Explore links: 14px Inter Bold navy, 24px gap between each link, centered horizontally
- Each link routes to its corresponding platform sub-page:
  - The Brain → `/platform/business-intelligence`
  - The Audience Engine → `/platform/audience` *(stub — page does not exist yet)*
  - The Operator → `/platform/marketing-automation`
  - The Memory → `/platform/performance` *(stub — page does not exist yet)*
- For stub routes: link works but routes to a placeholder page or back to `/platform` if the deep page doesn't exist yet. Track click events so you have demand data for which pages to prioritize building.

---

## Section 5 — What It Enables

**ID:** `#enables`
**Treatment:** Light (white)
**Layout:** Section heading and intro centered. Below: 6 outcome statements in a 3×2 grid on desktop, 2×3 on tablet, single column on mobile.

### Copy

```
EYEBROW: What This Enables

H2: Six things that change
    when the system is connected.

[Wrap "when the system is connected" in Newsreader serif italic]

INTRO (centered, max-width 720px):
The platform isn't the deliverable. What changes for your business is.

[6 outcome statements in a 3×2 grid]

──────────────────────────────────────
01

You know who your customer is,
and so does the platform.

──────────────────────────────────────
02

Campaigns run themselves,
but never without your direction.

──────────────────────────────────────
03

Every channel learns
from the others.

──────────────────────────────────────
04

Compliance happens
in the background.

──────────────────────────────────────
05

Your team spends time on strategy,
not on tools.

──────────────────────────────────────
06

Marketing gets sharper
the longer it runs.

──────────────────────────────────────
```

### Component notes

- Card: white background, 1px `--ss-border-subtle` left border (4px wide, in `--ss-pink`), 24px padding-left, 16px padding-top/bottom, no border-radius (the left accent is the only visual treatment)
- Number label: 32px Inter Black, `--ss-pink`, top-aligned
- Statement: Inter Bold 20px, navy, 1.4 line-height
- 32px vertical gap between cards in each column
- 48px horizontal gap between columns
- Cards equal-height with `align-items: stretch`
- Stagger entrance: top-to-bottom, left-to-right, 100ms apart
- No hover state needed — these are statements, not interactive cards

**Alternative if the pink-left-border treatment reads too sparse:** switch to soft purple background cards (`--ss-bg-purple-light`) with the number in `--ss-purple`. Slightly more contained, still simple. Build the primary version first.

---

## Section 6 — Final Invitation

**ID:** `#cta`
**Treatment:** Dark (`--ss-navy`)
**Layout:** Centered, max-width 720px, generous padding (140px+ top and bottom)

### Copy

```
H2 (centered):
Marketing was supposed
to be simple.

[Wrap "to be simple" in Newsreader serif italic]

BODY (centered, 18px, white at 90%):
The right platform is the one you don't have to think about — that runs alongside
your team, learns from every interaction, and shows up when your customer is ready.
That's what we built. We'd love to show you.

PRIMARY CTA: Book a Demo →
SECONDARY CTA: Get Custom Pricing

PRICING LINE (smaller, white at 60%):
Engagement pricing is custom to your firm and goals.
We'll quote you a number after one call.
```

### Background treatment

Optional: a single faded `--ss-pink` octagonal logomark watermark, centered, 6% opacity, 480px. No animation on this page (consistent with other platform pages).

### Component notes

- H2: Inter Black 48–56px, white, sentence case
- Body: 18px, 1.7 line-height
- Primary CTA: yellow pill on navy, navy text, 56px tall
- Secondary CTA: white text-link with arrow
- Pricing line: 14px italic, white at 60%
- Reuse the existing `<FinalCTA>` component from the Marketing Automation and Business Intelligence pages

---

## Section 7 — Footer

Standard SuperSymm footer (4-column, soft background). No customization for this page.

---

## Internal linking map

| CTA / Link | Destination |
|---|---|
| Get Custom Pricing | `/pricing` |
| See How It Works | `#platform` (anchor to Section 4 within this page) |
| Book a Demo | `/demo` |
| The Brain → | `/platform/business-intelligence` |
| The Audience Engine → | `/platform/audience` *(stub for V1 — page does not exist yet)* |
| The Operator → | `/platform/marketing-automation` |
| The Memory → | `/platform/performance` *(stub for V1 — page does not exist yet)* |

### Note on stub routes

Two of the four layer links route to pages that don't exist yet (Audience and Memory). For V1, handle this one of two ways:

1. **Recommended:** route stub links to a generic "Coming soon — request a deep dive" page or back to `/platform`, and track click events to validate demand before building the dedicated pages
2. **Alternative:** disable the stub links (render them as muted, non-interactive text) until the dedicated pages exist

Track click events on all four "Explore each layer" links via analytics. This is the cleanest signal for which platform deep-dive pages to prioritize building next.

---

## SVG illustration consistency rules

All visuals on this page follow the established design system:
- Stroke weight: 1.5px navy on light backgrounds
- Single accent per illustration (purple, pink, yellow)
- Style: geometric, minimalist, editorial — Stripe documentation iconography reference
- No gradients, no shading, no realistic depictions

The platform diagram in Section 4 is the most complex visual on the page and warrants the most polish. If commissioning illustrations to a freelancer, this is the one to brief most carefully and review most carefully.

---

## Animation reference (Framer Motion — minimal)

Same as other platform pages. Section entrance fade-up, stagger card grids, hover lift on diagram layers. All wrapped with `useReducedMotion()`. No scroll-driven sections. No continuous loops.

The Section 4 platform diagram has hover interactions on each of the four layers — built with React state and CSS transitions, no Framer Motion needed for those specific interactions.

---

## Section background sequence

```
Section 1  (Hero)              bg: white
Section 2  (Thesis)            bg: white
Section 3  (Origin)            bg: --ss-bg-soft
Section 4  (Platform)          bg: white
Section 5  (Enables)           bg: white
Section 6  (Final CTA)         bg: --ss-navy
Footer                         bg: --ss-bg-soft
```

**Note on consecutive white sections (1, 2, 4, 5):** Four white sections with the soft purple Section 3 as the only break before the dark final CTA. This is intentional — the page is meant to feel airy and minimal, with the thesis statement (Section 2) and the platform diagram (Section 4) doing the heavy visual lifting. If during build the white run reads as monotonous, consider switching Section 5 to `--ss-bg-purple-light` (`#F5F3FB`) for subtle differentiation. Test without first.

---

## Performance budget

- Largest Contentful Paint < 2.5s on 4G
- Total JS bundle < 100KB gzipped (this page has the lightest interactive footprint of the platform pages)
- Platform diagram (Section 4) is inline SVG — no extra requests
- Hero image uses `next/image` with appropriate sizing and lazy loading

---

## Accessibility

- Breadcrumb uses semantic `<nav aria-label="Breadcrumb">` with `<ol>`
- Platform diagram (Section 4) has `role="img"` and meaningful `aria-label` ("Platform architecture diagram showing four connected layers: Brain, Audience Engine, Operator, and Memory")
- Each layer in the diagram has its own `aria-label` describing its function for screen readers
- All decorative SVGs (e.g., the optional rule above the thesis statement) have `aria-hidden="true"`
- All interactive elements have visible focus rings (`outline: 2px solid var(--ss-purple); outline-offset: 4px`)
- Animation respects `prefers-reduced-motion`
- Heading hierarchy: one H1 (hero), multiple H2s (major sections)
- Section 5 statement cards are not interactive — render as styled `<li>` elements within an `<ol>` for semantic correctness, with the visual treatment applied via CSS

---

## Build sequence (recommended)

1. **Foundation** — verify Tailwind config and component library from previous platform pages
2. **Skeleton** — all sections built with placeholder copy, no images, no animations
3. **Real copy** — paste verbatim from this brief
4. **Static visuals** — embed the platform diagram and supporting visuals. Use FPO blocks where finished illustrations aren't ready.
5. **Platform diagram hover interactions** — implement the per-layer hover behaviors (Section 4)
6. **Animations** — fade-up entrance, stagger for outcome cards
7. **Stub route handling** — implement graceful behavior for the Audience and Memory layer links (route to placeholder or disable)
8. **Accessibility audit** — keyboard navigation, screen reader test, motion preference test
9. **Performance audit** — Lighthouse score, image optimization
10. **Real assets swap** — replace FPO images with finished illustrations as commissioned

---

## Asset checklist

Before launch, gather or generate:

- [ ] Hero full-width image — agentic platform illustration or layered architecture diagram, 1200×540px (Section 1)
- [ ] Founding intent supporting visual — before/after fragmentation illustration, 400×360px (Section 3)
- [ ] **Platform unified diagram — four layers with bidirectional connections, 1100×600px desktop and 380×900px mobile (Section 4)** — this is the most critical asset on the page
- [ ] OG share image at 1200×630
- [ ] Internal route stubs needed: `/pricing`, `/demo`, `/platform/business-intelligence`, `/platform/marketing-automation` (all exist); `/platform/audience`, `/platform/performance` (handle as graceful stubs for V1)

---

## Sections pending content (flag as TODO)

- [ ] **Future revision (V2):** build out `/platform/audience` (The Audience Engine deep-dive page)
- [ ] **Future revision (V2):** build out `/platform/performance` (The Memory deep-dive page)
- [ ] **Future revision (V2):** consider adding a small proof section (single quote + portrait) between Section 5 and Section 6 once a strong cross-platform quote is available
- [ ] Verify the platform diagram (Section 4) visually demonstrates bidirectional connection — if the loop isn't reading clearly during build, iterate on the layout before launch

---

## Suggested future sections / pages (do not build now)

These were considered but excluded from V1:

- **Methodology page (`/platform/methodology`):** A deeper dive into how the platform actually operates day-to-day — what an agentic loop looks like in practice. Useful for technically sophisticated buyers.
- **Trust and security page (`/platform/trust`):** A transparency page covering data handling, AI sourcing, compliance posture, and human oversight. Increasingly important as agentic AI scrutiny grows.
- **Comparison pages (`/platform/vs-hubspot`, `/platform/vs-marketo`):** Long-form comparison pages targeting "SuperSymm vs X" search volume.
- **Customer journey page (`/platform/customer-journey`):** A page that walks through what a single customer journey looks like end-to-end across all four layers, with real examples.

---

## Build notes for Claude Code

- Route this page to `/platform`
- Use exact copy verbatim — do not paraphrase
- Wrap key phrases in `<em className="font-serif italic">...</em>` per the typography rule (specified per H1/H2)
- Reuse the existing components from previous platform pages: `<Eyebrow>`, `<Hero>`, `<FinalCTA>`, button components, and section padding utilities
- The Section 4 platform diagram is a custom inline SVG component — build with React state for hover interactions, not Framer Motion
- Section 5 outcome cards render as a styled ordered list with custom visual treatment via CSS
- Stub routes for `/platform/audience` and `/platform/performance` should render gracefully (placeholder page or graceful redirect to `/platform`) and track click events for demand analytics
- "See How It Works" CTA in the hero is an anchor link to `#platform` (Section 4), not a separate page

---

*End of Platform Overview page brief*
