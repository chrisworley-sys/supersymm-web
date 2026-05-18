# Business Intelligence Engine — Build Brief

**Page URL:** `/platform/business-intelligence`
**Last updated:** May 2, 2026
**Status:** Ready for build
**Target word count:** ~1,300 words
**Audience:** Prospects researching the strategy and intelligence layer of SuperSymm (mid-funnel)
**Primary conversion goal:** Demo booking or pricing inquiry
**Visual ambition:** Polished but simple — static SVGs, hover states, no scroll-driven sections
**Pattern reference:** Marketing Automation page (`/platform/marketing-automation`) — this page mirrors that structure for design system consistency

---

## Strategic intent

This page does three jobs:

1. **SEO** — rank for "AI marketing strategy," "marketing intelligence platform," "AI-powered marketing automation," and the long-tail business intelligence variants
2. **Education** — teach what makes SuperSymm's intelligence layer different from generic marketing AI (most of which is just ChatGPT with templates)
3. **Differentiation** — explicitly contrast SuperSymm's "we learn your business" model against the configure-it-yourself model of HubSpot, Marketo, and the AI content generation tools flooding the market

This page is harder to write than the Marketing Automation page because the value is upstream. Buyers want leads and revenue, not "intelligence." The page has to translate "we understand your business" into "this is why every other campaign you run will be worse than ours." Every section needs to answer the implicit question: *so what does this actually produce?*

---

## SEO specifications

**Title tag (60 chars):**
```
AI Marketing Strategy & Intelligence | SuperSymm
```

**Meta description (155 chars):**
```
The intelligence layer behind every SuperSymm campaign. We learn your business, market, and audience — then turn that understanding into smarter execution.
```

**H1:** The brain behind your marketing.
**Primary keyword:** AI Marketing Strategy
**Secondary keywords:** Marketing intelligence platform · AI-powered marketing strategy · Business intelligence for marketing · Marketing strategy automation · Audience intelligence · Competitive intelligence platform

**Schema markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Intelligence Engine",
  "provider": {
    "@type": "Organization",
    "name": "SuperSymm"
  },
  "serviceType": "AI marketing strategy and intelligence platform",
  "description": "The intelligence layer behind every SuperSymm campaign. We learn your business, market, and audience — then turn that understanding into smarter execution."
}
```

**Open Graph:**
```html
<meta property="og:title" content="The brain behind your marketing — SuperSymm" />
<meta property="og:description" content="The intelligence layer that learns your business, market, and audience — then turns that understanding into smarter execution." />
<meta property="og:image" content="/og-business-intelligence-1200x630.png" />
<meta property="og:type" content="website" />
```

---

## Page structure overview

```
1.  HERO                          Light     Centered headline + full-width image below
2.  THE PROBLEM                   Light     Why most marketing AI fails — short framing
3.  HOW IT WORKS                  Soft      4-step intelligence flow with anchor tags
4.  PILLAR 01 — BUSINESS CONTEXT  Light     Asymmetric two-column
5.  PILLAR 02 — MARKET INTELLIGENCE Light   Asymmetric two-column (mirrored)
6.  PILLAR 03 — AUDIENCE INSIGHT  Light     Asymmetric two-column
7.  PILLAR 04 — STRATEGY GENERATION Light   Asymmetric two-column (mirrored)
8.  BLUEPRINT LEAD MAGNET         Pink      Compact breaker — short copy, image, CTA
9.  WHAT MAKES IT DIFFERENT       Dark      Comparison table — SuperSymm vs. generic AI
10. PROOF — LUXON BROWN           Soft      Quote + FPO portrait
11. WHAT IT PRODUCES              Light     Outputs the intelligence layer drives
12. FINAL INVITATION              Dark      Centered, mirrors homepage CTA pattern
13. FOOTER                        Soft      Standard
```

The four pillar sections (4–7) all use the same two-column asymmetric pattern as the Marketing Automation page. This page is intentionally tighter than Marketing Automation — four pillars instead of five — because intelligence is conceptually narrower than execution.

---

## Brand foundation (carry from homepage and Marketing Automation page)

All design tokens, typography rules, spacing, motion, and color treatments are inherited from the existing design system. No new conventions introduced on this page. See `/platform/marketing-automation` brief for full token reference.

**Quick reference:**
- Newsreader serif italic on key phrases in H1/H2s
- Section padding: `clamp(96px, 10vw, 140px)` standard, `80px` for pillar sections, `64px` for Blueprint breaker
- Card hover: 4px lift, 200ms ease
- All interactions respect `prefers-reduced-motion`

---

## Section 1 — Hero

**ID:** `#hero`
**Treatment:** Light (white background)
**Layout:** Centered single column. Breadcrumb at top, eyebrow, headline, subhead, CTAs centered. Below the copy, a full-width hero image runs edge-to-edge of the container.

### Breadcrumb

```
Home  /  Platform  /  Business Intelligence
```

Centered, 14px navy at 50% opacity, last segment in navy at 90%.

### Copy (centered, max-width 880px)

```
EYEBROW: The Platform

H1: The brain behind
    your marketing.

[Wrap "your marketing" in Newsreader serif italic]

SUBHEAD:
SuperSymm analyzes your business, your market, and your audience — then turns
that understanding into strategy that drives every campaign we run. We don't
hand you a settings panel. We learn your business and build the intelligence
that powers everything else.

PRIMARY CTA: Book a Demo →
SECONDARY CTA: See How It Works
```

### Visual specifications

**[FPO: hero_business_intelligence.jpg — 1200×540px, full-width]**

A horizontal hero image. Recommended approaches in priority order:

1. **Stylized intelligence diagram** — a horizontal flow showing three input streams (Business / Market / Audience) converging into a central "brain" node, then radiating outward into specific outputs (Campaigns / Content / Channels / Targeting). Editorial line-art style with one accent color. 1200×540px.

2. **Real product UI screenshot** — a wide aspect ratio screenshot of a SuperSymm strategy or insights view. Anonymized data. Cropped 1200×540 with subtle drop shadow.

3. **Composite editorial illustration** — abstract representation of synthesis: three layered planes (data, analysis, action) with subtle connecting lines. Less literal, more conceptual.

If using Option 1, brief the illustrator: *"Horizontal intelligence-flow illustration, 1200×540px, navy line strokes (1.5px) with single purple accent for the central brain node. Three input streams converging from the left, central processing node, four output streams radiating right. Editorial minimalist style. No shading, no gradients. Reference: Stripe documentation hero illustrations."*

### Component notes

- H1 forces line break between "behind" and "your marketing" on desktop
- Primary CTA: yellow pill on white, navy text, 56px tall (test purple-on-white as alternative)
- Secondary CTA: navy text-link with arrow
- 80px gap between CTA row and the full-width image below
- Image: 16px border-radius, subtle drop shadow (`0 24px 48px rgba(31, 30, 33, 0.08)`)

---

## Section 2 — The Problem

**ID:** `#problem`
**Treatment:** Light (white)
**Layout:** Section heading + intro paragraph centered, max-width 800px. Compact section — no visuals, no cards. Pure typographic moment.

### Copy

```
EYEBROW: Why This Matters

H2: Most marketing AI doesn't know
    anything about your business.

[Wrap "anything about your business" in Newsreader serif italic]

BODY (centered, max-width 760px):
The average marketing tool ships with a blank slate. You configure your audience.
You write the brand voice guidelines. You build the campaign templates. You feed
the system everything it needs to know — and then you wait for it to produce
something useful.

The output is generic by definition. The system doesn't know what makes you
different from the competitor down the street. It doesn't know what your buyers
actually care about. It doesn't know what's worked before.

SuperSymm starts somewhere else.
```

### Component notes

- H2: Inter Bold 40px, navy
- Body: 18px, 1.6 line-height, navy at 90%
- Last sentence ("SuperSymm starts somewhere else.") sits on its own line, 32px below the previous paragraph, larger weight (Inter Bold 22px) — acts as the transition into the next section
- Section padding: 80px top/bottom (compact compared to standard sections)

---

## Section 3 — How It Works

**ID:** `#how-it-works`
**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** Section heading and intro centered. Below: a horizontal 4-step flow diagram showing how intelligence is built, anchor tags row below the diagram.

### Copy

```
EYEBROW: The Intelligence Flow

H2: Four inputs.
    One unified intelligence layer.
    Every campaign downstream gets smarter.

[Wrap "Every campaign downstream gets smarter" in Newsreader serif italic]

INTRO (centered, max-width 760px):
SuperSymm builds intelligence from four sources — your business context,
your market position, your audience signals, and your historical performance.
The system synthesizes these into the strategic foundation that runs every
campaign. Here's what each input looks like, and how they work together.

[4-step flow diagram below — see specifications]

[Anchor tag row]
[Business Context]  [Market Intelligence]  [Audience Insight]  [Strategy Generation]
```

### Visual specifications

**[FPO: intelligence_flow.svg — 880×220px desktop, 320×600px mobile]**

A simple horizontal diagram showing the intelligence flow:

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  BUSINESS   │ →  │   MARKET    │ →  │  AUDIENCE   │ →  │  STRATEGY   │
│   CONTEXT   │    │INTELLIGENCE │    │   INSIGHT   │    │ GENERATION  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       │                  │                  │                  │
       └──────────────────┴──────────────────┴──────────────────┘
                              ↓
                    Every Campaign Downstream
```

**Visual specifications:**
- Each input node: rounded rectangle, 180×80px, white fill, 1.5px navy border
- Inside each node: short label (uppercase 12px Inter Bold navy)
- Connecting arrows between inputs: 2px stroke, `--ss-pink`, with arrowheads
- Aggregating line below the four nodes converges to a single point, then a downward arrow points to a label "Every Campaign Downstream" in navy
- The aggregation suggests synthesis — these aren't sequential steps, they're parallel inputs that get combined

**No animation in V1.** If wanted later: subtle dash-flow on the aggregating line.

### Component notes

- Anchor tags row sits 48px below the diagram
- Tags: pill shape, 36px tall, 16px horizontal padding, white background, 1px `--ss-border-subtle` border
- Tag text: 13px Inter Bold uppercase navy
- Tag hover: background fills to `--ss-purple` at 8%, border becomes `--ss-purple` at 24%
- Each tag is a real anchor link with smooth-scroll to the corresponding pillar section
- Mobile: diagram rotates to vertical, tags wrap or scroll horizontally

---

## Section 4 — Pillar 01: Business Context

**ID:** `#business-context`
**Treatment:** Light (white)
**Layout:** Two-column asymmetric. Copy left (55%), visual right (45%). 80px vertical padding.

### Copy

```
PILLAR 01

H3: We start with you.
    Not a settings panel.

BODY:
Most platforms treat your business as a configuration step. SuperSymm treats
it as the foundation. Before any campaign goes live, our team builds a clear
picture of what makes your firm different — your offers, your differentiators,
your competitive position, your compliance posture, your tone, your goals.

That context becomes the lens. Every subsequent decision the system makes —
which audience to target, what message to lead with, which channel to prioritize,
how to handle a sensitive topic — runs through it. The result is marketing
that sounds like you, defends what you stand for, and goes after the business
you actually want.

WHAT'S INCLUDED:
Discovery and positioning workshops  ·  Competitive landscape mapping  ·
Brand voice and tone codification  ·  Compliance posture documentation
```

### Visual specifications

**[FPO: pillar_01_business_context.svg — 480×400px]**

A simple SVG showing a central document or profile card representing "Your Business" with four small contextual elements arranged around it (Differentiators / Voice / Compliance / Goals). Each element connects to the central card with a thin pink line.

**Hover behavior:** On hover, the four contextual elements slightly fan outward (8px translate in their respective directions), demonstrating that context expands the picture.

### Component notes

- Pillar number label: Roboto Mono 14px `--ss-purple`, sits above H3
- H3: Inter Bold 32px, navy
- Body: 18px, 1.6 line-height
- "What's included" line: 15px navy at 70% opacity, separated by middle dots

---

## Section 5 — Pillar 02: Market Intelligence

**ID:** `#market-intelligence`
**Treatment:** Light (white)
**Layout:** Two-column asymmetric, **mirrored** — visual left (45%), copy right (55%).

### Copy

```
PILLAR 02

H3: Know what your competitors are doing.
    Know what they're missing.

BODY:
SuperSymm continuously monitors your competitive landscape — what messaging
they're using, what content they're producing, what positioning they're
defending, what gaps they're leaving open. We build a working model of where
you fit in the market and where the actual opportunities are.

This isn't a one-time audit that lives in a deck. It's ongoing intelligence
that adjusts your strategy as the market shifts. When a competitor changes
their approach, your campaigns adapt. When an opening appears, you're already
moving toward it.

WHAT'S INCLUDED:
Competitive content and messaging analysis  ·  Market positioning and gap identification  ·
Industry trend monitoring  ·  Strategic opportunity surfacing
```

### Visual specifications

**[FPO: pillar_02_market.svg — 480×400px]**

A simplified market-positioning chart: two axes forming a quadrant grid. Several small competitor markers (small circles in muted gray) are scattered across the chart. One marker — slightly larger, in `--ss-pink` — represents the user's position. A `--ss-yellow` highlighted area in one quadrant signals "opportunity space."

**Hover behavior:** On hover, the yellow opportunity space pulses subtly once, drawing attention to the strategic gap.

---

## Section 6 — Pillar 03: Audience Insight

**ID:** `#audience-insight`
**Treatment:** Light (white)
**Layout:** Two-column asymmetric. Copy left (55%), visual right (45%).

### Copy

```
PILLAR 03

H3: Build personas that act
    like real people.

BODY:
Most personas are slide-deck artifacts. They get built once, presented at a
strategy offsite, and never inform another decision. SuperSymm builds living
personas — multidimensional profiles that incorporate firmographic data,
behavioral signals from your existing marketing, sales conversation patterns,
and ongoing engagement data.

Each persona has objections we know how to answer, channels we know they
prefer, content formats we know they respond to, and trigger moments we know
to watch for. When a campaign launches, the system isn't sending one message
to a list. It's sending the right message, in the right format, on the right
channel, to the right person.

WHAT'S INCLUDED:
ICP definition and refinement  ·  Multi-persona segmentation  ·
Buyer journey mapping  ·  Behavioral trigger identification
```

### Visual specifications

**[FPO: pillar_03_audience.svg — 480×400px]**

A simple SVG showing three persona profile cards arranged in a slight overlap. Each card has an abstract avatar (circle with two simple shape eyes), a name label ("Persona 01"), and three short attribute lines. The front card is in full color (navy outline, purple accent), the two behind it are at lower opacity.

**Hover behavior:** On hover, the front card lifts 4px and the back cards fan out slightly (16px translate). Demonstrates layered, distinct personas.

---

## Section 7 — Pillar 04: Strategy Generation

**ID:** `#strategy-generation`
**Treatment:** Light (white)
**Layout:** Two-column asymmetric, **mirrored** — visual left (45%), copy right (55%).

### Copy

```
PILLAR 04

H3: Strategy that writes itself.
    Then writes the campaign.

BODY:
With business context, market intelligence, and audience insight as inputs,
SuperSymm generates the strategic direction for every campaign — what to say,
who to say it to, where to say it, and what success looks like. The strategy
isn't generic AI output. It's grounded in everything the system has learned
about your specific business, your specific market, and your specific buyers.

From that strategy, the system produces campaign briefs, content angles,
channel recommendations, and performance benchmarks. Your team reviews and
refines. Then execution begins — and the loop closes when performance data
flows back into the intelligence layer to make the next strategy sharper.

WHAT'S INCLUDED:
Campaign strategy generation  ·  Channel mix recommendations  ·
Content angle and brief generation  ·  Performance benchmark setting  ·
Continuous strategy refinement based on results
```

### Visual specifications

**[FPO: pillar_04_strategy.svg — 480×400px]**

A simple SVG showing a feedback loop: three input nodes on the left (small abstract icons representing business / market / audience), an arrow flowing into a central "Strategy" node, then arrows flowing out to four campaign outputs (Content / Channel / Audience / Timing). A return arrow loops from "Performance" back to the central node.

**Hover behavior:** On hover, the return loop arrow brightens to `--ss-yellow`, demonstrating the continuous learning cycle.

---

## Section 8 — Blueprint Lead Magnet

**ID:** `#blueprint`
**Treatment:** Pink (`--ss-pink` background) — intentional color break
**Layout:** Two-column. Copy left (60%), illustration right (40%). Compact section — significantly less vertical padding than other sections.

### Copy

```
EYEBROW: Free Resource

H2: Get the Blueprint.

BODY (1 short paragraph):
A practical guide to building marketing intelligence into your strategy —
the inputs that matter, the questions to ask, and the metrics that prove
intelligence is working. Built from real engagements with growing professional
service firms.

PRIMARY CTA: Get the Blueprint →   (stub — links to # for now)
```

### Visual specifications

**[FPO: blueprint_cover.png — 320×400px]**

Right column: same blueprint illustration treatment as the Marketing Automation page. Tilted PDF cover mockup, slight 4° tilt, soft drop shadow. If the same blueprint is used across multiple pages, that's fine — the resource is consistent.

If creating a separate Intelligence-focused blueprint cover, title it "The Marketing Intelligence Blueprint" instead of "The Marketing Automation Blueprint."

### Component notes

Same as the Marketing Automation page Blueprint section — see that brief for full component spec. Single CTA button stub linking to `#`. No inline form. Track button clicks via analytics.

---

## Section 9 — What Makes It Different

**ID:** `#differentiator`
**Treatment:** Dark (`--ss-navy`)
**Layout:** Section heading and intro centered. Below: a comparison table showing SuperSymm vs. typical alternatives. Three columns on desktop, stacked on mobile.

### Copy

```
EYEBROW: The Difference

H2: Why this isn't just another
    AI marketing tool.

[Wrap "another AI marketing tool" in Newsreader serif italic]

INTRO (centered, max-width 760px):
The marketing AI category is crowded with tools that promise intelligence
and deliver templates. Here's where SuperSymm sits relative to two alternatives
most teams are already using or considering.
```

### Comparison table

Three columns. SuperSymm in the middle (visually emphasized). The other two columns are typical alternatives.

```
                              ┌──────────────────────┐
                              │     SUPERSYMM        │
                              │  (highlighted)       │
                              └──────────────────────┘
┌─────────────────┐                                    ┌─────────────────┐
│  Generic AI     │                                    │  Enterprise     │
│  (ChatGPT,      │                                    │  Marketing      │
│  Jasper, etc.)  │                                    │  Platforms      │
└─────────────────┘                                    │  (HubSpot,      │
                                                       │  Marketo)       │
                                                       └─────────────────┘

                            COMPARISON ROWS
```

**Comparison rows:**

```
ROW 1 — Starting point
- Generic AI: Blank prompt every time
- SUPERSYMM: Built on your business context
- Enterprise platforms: Configuration screens you fill in

ROW 2 — Strategy
- Generic AI: You provide the strategy, it produces output
- SUPERSYMM: System generates strategy from intelligence
- Enterprise platforms: Strategy lives outside the platform

ROW 3 — Audience understanding
- Generic AI: None. You describe the audience each time
- SUPERSYMM: Living personas updated continuously
- Enterprise platforms: Static segments you build manually

ROW 4 — Market context
- Generic AI: Trained on the public internet, no specificity
- SUPERSYMM: Continuous competitive and market monitoring
- Enterprise platforms: No market intelligence built in

ROW 5 — Continuous learning
- Generic AI: No memory between sessions
- SUPERSYMM: Performance data feeds back into strategy
- Enterprise platforms: Reporting only — no auto-improvement

ROW 6 — Setup time
- Generic AI: Minutes per task, every task
- SUPERSYMM: One-time onboarding, then continuous value
- Enterprise platforms: Weeks of configuration before launch
```

### Component notes

- Table is rendered as a styled grid, not a `<table>` element — gives more flexibility on mobile
- SuperSymm column: slightly wider (40%) and visually emphasized — yellow accent border on the column header, slightly brighter background tint within the dark section
- Other two columns: 30% each, muted styling
- Row labels (Starting point, Strategy, etc): Inter Bold 14px uppercase, white at 70%, 0.08em letter-spacing
- Cell content: 15px, 1.5 line-height, white at 90%
- SuperSymm cells: white at 100%, slightly heavier weight (Inter Medium 500)
- 32px vertical padding within each cell
- Hairline dividers between rows: 1px white at 12% opacity
- On mobile: each row becomes a vertical stack with all three options visible per row, SuperSymm always shown first and visually emphasized

### Closing line below table

```
The short version: most platforms expect you to bring the intelligence.
SuperSymm brings it for you.
```

Centered, italic, max-width 600px, 18px white at 85% opacity, 32px below table.

---

## Section 10 — Proof: Luxon Brown

**ID:** `#proof`
**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** Two-column. FPO portrait left (40%), quote and attribution right (60%). On mobile, portrait above quote.

### Copy

```
EYEBROW: Client Story

H2: How Luxon Brown built strategy
    on intelligence, not guesswork.

[Quote block]

"PLACEHOLDER QUOTE — to be replaced with real client quote.
SuperSymm came in knowing more about our market than we expected.
Their team had already done the competitive analysis, mapped where the
opportunity was, and built personas we actually use. Our campaigns started
working from week one because the strategy was right before anyone wrote
a single ad."

— [First Last], [Title], Luxon Brown

[CTA below quote]
[link] Request the full case study →   (opens contact form or routes to /contact?ref=luxon-brown)
```

### Visual specifications

**[FPO: portrait_luxon_brown.jpg — 360×360px, square]**

Same treatment as the Marketing Automation page proof section — square portrait with offset purple block behind.

### Component notes

Same component specifications as the Marketing Automation page proof section. Reuse the existing component if built.

---

## Section 11 — What It Produces

**ID:** `#outputs`
**Treatment:** Light (white)
**Layout:** Section heading and intro centered. Below: 6 output cards in a 3×2 grid on desktop, 2×3 on tablet, single column on mobile.

This section answers the implicit "so what?" question — the page has spent 10 sections explaining intelligence. This section shows what intelligence actually produces.

### Copy

```
EYEBROW: What This Enables

H2: Intelligence isn't the deliverable.
    Better marketing is.

[Wrap "Better marketing is" in Newsreader serif italic]

INTRO (centered, max-width 760px):
Intelligence is upstream. Here's what it produces downstream — the specific
outputs you'll see across every campaign SuperSymm runs.
```

### Six output cards

```
─────────────────────────────────
01

Campaign briefs that don't need rewriting.

Strategy documents grounded in your context, your audience, and your market —
ready to execute the day they land.
─────────────────────────────────
02

Content that sounds like you.

Brand voice, positioning, and POV maintained across every channel because
the system started by learning yours.
─────────────────────────────────
03

Audience targeting that actually targets.

Lookalike modeling, segment definitions, and trigger criteria built from
real intelligence about who your buyers are.
─────────────────────────────────
04

Channel decisions backed by data.

Recommendations on where to spend, what to test, and what to scale —
based on what's working in your market, not industry averages.
─────────────────────────────────
05

Messaging that defends your position.

Talking points, objection responses, and competitive framing developed
from active monitoring of where your category is moving.
─────────────────────────────────
06

Strategy that gets sharper over time.

Every campaign that runs feeds learning back into the intelligence layer.
The next campaign starts ahead of the last one.
─────────────────────────────────
```

### Component notes

- Card: `--ss-bg-purple-light` background, no border, 32px padding, 20px border-radius
- Number label: 28px Inter Black, `--ss-purple`, top-aligned
- Card headline: Inter Bold 20px, navy, 2 lines max
- Card body: 15px, 1.5 line-height
- Card hover: subtle 4px lift
- Stagger entrance, 100ms apart
- Cards equal-height with `align-items: stretch`

---

## Section 12 — Final Invitation

**ID:** `#cta`
**Treatment:** Dark (`--ss-navy`)
**Layout:** Centered, max-width 720px, generous padding (140px+ top and bottom)

### Copy

```
H2 (centered):
Smart marketing starts
with knowing your business.

[Wrap "knowing your business" in Newsreader serif italic]

BODY (centered, 18px, white at 90%):
Most platforms hand you a system and ask you to teach it.
SuperSymm comes in already knowing — about your market, your competitors,
and what makes your firm different. Then it puts that intelligence to work.

PRIMARY CTA: Book a Demo →
SECONDARY CTA: Get Custom Pricing

PRICING LINE (smaller, white at 60%):
Engagement pricing is custom to your firm and goals.
We'll quote you a number after one call.
```

### Background treatment

Optional: a single faded `--ss-pink` octagonal logomark watermark, centered, 6% opacity, 480px. No animation on this page (consistent with Marketing Automation page approach).

### Component notes

- Same component specifications as the Marketing Automation page final CTA. Reuse the existing component if built.

---

## Section 13 — Footer

Standard SuperSymm footer (4-column, soft background). No customization for this page.

---

## Internal linking map

| CTA / Link | Destination |
|---|---|
| Book a Demo | `/demo` |
| Get Custom Pricing | `/pricing` |
| Back to Platform Overview | `/platform` |
| Request the full case study | `/contact?ref=luxon-brown` |
| Get the Blueprint | `#` (stub for V1) |

No deep links to platform sub-pages from capability sections — body copy carries the explanation. Future revisions can add deep links once supporting pages exist.

---

## Suggested future sections / pages (do not build now)

These were considered but excluded from V1. Worth tracking for future iterations:

- **Methodology page (`/platform/business-intelligence/methodology`):** A deep dive into how the discovery process actually works — the workshops, the research methods, the deliverables. Useful for sales conversations with technically skeptical buyers.
- **Intelligence sources page (`/platform/business-intelligence/sources`):** A transparency-focused page explaining where the system gets its data (public web, owned channels, third-party feeds, your CRM). Builds trust with compliance-sensitive buyers.
- **Comparison page (`/platform/business-intelligence/vs-hubspot`):** A long-form comparison page that expands the Section 9 table into a full SEO play. Worth building if "SuperSymm vs HubSpot" or "SuperSymm vs Marketo" search volume justifies it.
- **Persona library (`/platform/business-intelligence/personas`):** A showcase of anonymized persona examples by industry — visual proof that the persona work is real and detailed. Strong sales enablement asset.
- **Case study pages (`/case-studies/[client]`):** Once 2-3 case studies are written, a `/case-studies` index page becomes valuable. The Luxon Brown CTA on this page can route there once it exists.
- **Methodology blueprint download:** The blueprint CTA on this page should eventually route to a real lead capture page at `/resources/intelligence-blueprint`. Track button clicks via analytics in V1 to validate demand before building.

---

## SVG illustration consistency rules

All pillar section illustrations should follow the same unified style as the Marketing Automation page:

- Stroke weight: 1.5px navy on white
- Single accent per illustration (purple, pink, yellow, or teal)
- Size: 480×400px
- Style: geometric, minimalist, editorial — Stripe documentation iconography reference
- No gradients, no shading, no realistic depictions
- Each has a small distinct hover interaction

If commissioning illustrations to a freelancer, brief them as part of a single batch with the Marketing Automation page illustrations — that gives you 9–10 illustrations in one consistent style, which is cheaper per piece and ensures visual coherence across the platform pages.

---

## Animation reference (Framer Motion — minimal)

Same as the Marketing Automation page. Section entrance fade-up, stagger card grids, card hover lift, illustration hover scale. All wrapped with `useReducedMotion()`. No scroll-driven sections. No continuous loops.

---

## Section background sequence

```
Section 1  (Hero)              bg: white
Section 2  (Problem)           bg: white
Section 3  (How It Works)      bg: --ss-bg-soft
Section 4  (Business Context)  bg: white
Section 5  (Market)            bg: white
Section 6  (Audience)          bg: white
Section 7  (Strategy)          bg: white
Section 8  (Blueprint)         bg: --ss-pink
Section 9  (Differentiator)    bg: --ss-navy
Section 10 (Proof)             bg: --ss-bg-soft
Section 11 (Outputs)           bg: white
Section 12 (Final CTA)         bg: --ss-navy
Footer                         bg: --ss-bg-soft
```

**Note on the white run (Sections 4–7):** Four consecutive white sections with alternating two-column layouts. The pink Blueprint break (8) and the dark Differentiator section (9) provide the visual reset before the proof block.

---

## Performance budget

- Largest Contentful Paint < 2.5s on 4G
- Total JS bundle < 120KB gzipped
- All pillar illustrations are inline SVGs
- Portrait image uses `next/image` with appropriate sizing
- Lazy-load illustrations below the fold

---

## Accessibility

- Breadcrumb uses semantic `<nav aria-label="Breadcrumb">` with `<ol>`
- All pillar illustrations have `role="img"` and meaningful `aria-label`
- Comparison table (Section 9) renders as a CSS grid but uses semantic markup with `role="table"`, `role="row"`, `role="cell"` for screen reader compatibility — or use a real `<table>` element with appropriate styling overrides
- Anchor tags in Section 3 are real anchor links with smooth scroll
- Heading hierarchy: one H1 (hero), multiple H2s (major sections), H3s (pillar section titles only)
- All interactive elements have visible focus rings
- Animation respects `prefers-reduced-motion`

---

## Build sequence (recommended)

1. **Foundation** — verify Tailwind config has all design tokens. Newsreader serif font loaded.
2. **Skeleton** — all sections built with placeholder copy, no images, no animations
3. **Real copy** — paste verbatim from this brief
4. **Static SVG visuals** — build/embed each pillar illustration. Use FPO blocks where illustrations aren't ready.
5. **Hover interactions** — add per-illustration hover behaviors
6. **Comparison table** — build the Section 9 comparison grid with proper responsive behavior
7. **Animations** — fade-up entrance, stagger for cards
8. **Accessibility audit** — keyboard navigation, screen reader test, motion preference test
9. **Performance audit** — Lighthouse score, image optimization
10. **Real assets swap** — replace FPO portrait, replace placeholder quote when available, replace illustrations as commissioned

---

## Asset checklist

Before launch, gather or generate:

- [ ] Hero full-width image — intelligence flow illustration or product UI screenshot, 1200×540px (Section 1)
- [ ] Intelligence flow diagram — 4-input synthesis SVG (Section 3)
- [ ] Four pillar illustrations: Business Context, Market Intelligence, Audience Insight, Strategy Generation (Sections 4–7)
- [ ] Blueprint cover mockup — 320×400px (Section 8) — can reuse the Marketing Automation page mockup
- [ ] FPO portrait for Luxon Brown quote (Section 10) — replace with real portrait when available
- [ ] Real client quote for Luxon Brown (Section 10) — replace placeholder when available
- [ ] OG share image at 1200×630
- [ ] Internal route stubs needed for this page: `/pricing`, `/demo`, `/platform`, `/contact` (already exist from Marketing Automation page)

---

## Sections pending content (flag as TODO)

- [ ] Real Luxon Brown quote and portrait (Section 10) — coordinate with Marketing Automation page so a single client testimonial cycle can populate both pages
- [ ] Future revision (V2): consider adding deep-link "Learn more" CTAs in pillar sections once supporting platform sub-pages exist
- [ ] Future revision (V2): build out `/case-studies/luxon-brown` and update the proof section CTA accordingly
- [ ] Verify the "What Makes It Different" comparison table claims (Section 9) — particularly the descriptions of HubSpot, Marketo, and Generic AI alternatives. These should be defensible if a buyer or competitor pushes back.

---

## Build notes for Claude Code

- Route this page to `/platform/business-intelligence`
- Use exact copy verbatim — do not paraphrase
- Wrap key phrases in `<em className="font-serif italic">...</em>` per the typography rule
- Pillar section illustrations should be inline SVGs in JSX components for hover interactions
- Reuse the `<PillarSection>` component from the Marketing Automation page — same props (`number`, `title`, `body`, `included`, `illustration`, `mirrored`)
- Reuse the `<ProofQuote>`, `<BlueprintBreaker>`, and `<FinalCTA>` components from the Marketing Automation page
- The comparison table (Section 9) is the only new component needed — build as a responsive CSS grid with semantic markup
- Anchor tags in Section 3 link to `#business-context`, `#market-intelligence`, `#audience-insight`, `#strategy-generation`

---

*End of Business Intelligence Engine page brief*
