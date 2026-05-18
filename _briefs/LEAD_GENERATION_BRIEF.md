# Lead Generation System — Build Brief

**Page URL:** `/platform/lead-generation`
**Last updated:** May 2, 2026
**Status:** Ready for build
**Target word count:** ~1,400 words
**Audience:** Prospects evaluating SuperSymm's lead generation capabilities (mid-funnel, frequently arriving from paid traffic or homepage)
**Primary conversion goal:** Demo booking or pricing inquiry
**Visual ambition:** Polished but simple — static SVGs, hover states, no scroll-driven sections
**Pattern reference:** Marketing Automation, Business Intelligence, and Platform Overview pages — this page mirrors that design system
**Strategic anchor:** Built on the SuperSymm Marketing System Framework (Phases 1, 2, and early Phase 3 — Get Found, Capture, Earn Trust)

---

## Strategic intent

This page does four jobs:

1. **SEO** — rank for "lead generation system," "lead generation platform," "B2B lead generation," and the professional-services-specific variants
2. **Reframe the category** — most "lead gen" pages talk about ads and forms. SuperSymm sells infrastructure. The page has to teach the distinction without lecturing.
3. **Show maturity through specificity** — the three-tier routing system and the multi-source capture story are the strongest credibility moments. They prove the system is real, not marketing language.
4. **Land benefits in every section** — this page is more benefit-forward than the other platform pages. Every section ends with a clear statement of what changes for the buyer. The "What changes" italic-serif benefit lines are a recurring signature throughout the page.

Lead generation is the most direct value question on the website. Buyers landing here have already decided they want more leads. The page's job is to convince them SuperSymm is the right system to produce those leads — not to convince them they need leads in the first place.

---

## SEO specifications

**Title tag (60 chars):**
```
Lead Generation System for Professional Services | SuperSymm
```

**Meta description (155 chars):**
```
A connected lead generation system that finds, captures, and qualifies leads from every channel — and routes the right ones to your sales team, automatically.
```

**H1:** Lead generation isn't a campaign. It's a system.
**Primary keyword:** Lead generation system
**Secondary keywords:** Lead generation platform · B2B lead generation · Professional services lead generation · Multi-channel lead generation · Lead qualification automation · Lead routing system

**Schema markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Lead Generation System",
  "provider": {
    "@type": "Organization",
    "name": "SuperSymm"
  },
  "serviceType": "Lead generation and qualification platform",
  "description": "A connected lead generation system that finds, captures, and qualifies leads from every channel — and routes the right ones to your sales team, automatically."
}
```

**Open Graph:**
```html
<meta property="og:title" content="Lead generation isn't a campaign. It's a system. — SuperSymm" />
<meta property="og:description" content="A connected lead generation system that finds, captures, and qualifies leads from every channel — and routes the right ones to your sales team, automatically." />
<meta property="og:image" content="/og-lead-generation-1200x630.png" />
<meta property="og:type" content="website" />
```

---

## Page structure overview

```
1. HERO                            Light    Centered H1 + subhead + CTAs + full-width visual
2. WHERE LEAD GENERATION BREAKS    Soft     Four observable patterns
3. HOW THE SYSTEM WORKS            Light    End-to-end flow diagram (the page's centerpiece)
4. THE THREE FRONTS OF THE FUNNEL  Light    Get Found / Capture / Qualify subsections
5. LEAD TIERS                      Light    Three-tier routing — the maturity proof
6. WHAT IT LOOKS LIKE FOR YOU      Light    Four audience-specific profiles
7. WHAT IT PRODUCES                Light    Six plain-language outcomes
8. FINAL INVITATION                Dark     Standard CTA pattern
9. FOOTER                          Soft     Standard
```

Eight content sections. Section 3 (flow diagram) and Section 5 (lead tiers) are the page's strongest credibility moments — the rest of the page exists to set them up and pay them off.

---

## Brand foundation (carry from homepage and other platform pages)

All design tokens, typography rules, spacing, and motion principles are inherited from the existing design system. No new conventions introduced on this page. See the Platform Overview brief for full token reference.

**One new typographic treatment introduced on this page:**

### Gradient italic accent (headline emphasis only)

Key emphasis phrases in H1 and H2 use Newsreader serif italic with a purple-to-pink gradient. This is a signature visual treatment reserved for headline moments only — not body copy, not benefit lines.

```css
.italic-accent {
  background: linear-gradient(135deg, var(--ss-purple), var(--ss-pink));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: var(--font-newsreader);
  font-style: italic;
}
```

Use `<em className="italic-accent">...</em>` for these moments.

### Quiet italic accent (benefit lines only)

"What changes for you" benefit lines use Newsreader serif italic in solid navy — no gradient. This creates a visual hierarchy: gradient italic = headline emphasis, solid italic = benefit statement.

```css
.italic-benefit {
  font-family: var(--font-newsreader);
  font-style: italic;
  color: var(--ss-navy);
}
```

Use `<em className="italic-benefit">...</em>` for these moments.

---

## Section 1 — Hero

**ID:** `#hero`
**Treatment:** Light (white background)
**Layout:** Centered single column. Breadcrumb at top, eyebrow, headline, subhead, CTAs centered. Below the copy, a full-width hero image runs edge-to-edge of the container.

### Breadcrumb

```
Home  /  Platform  /  Lead Generation
```

Centered, 14px navy at 50% opacity, last segment in navy at 90%.

### Copy (centered, max-width 920px)

```
EYEBROW: The Platform

H1: Lead generation isn't a campaign.
    It's a system.

[Wrap "It's a system" in gradient italic accent]

SUBHEAD:
Most lead gen is a Facebook ad pointing at a form. Real lead generation is
everything that makes that ad work — and everything that happens after the
form submits. We build and run the whole thing. You receive better leads.

PRIMARY CTA: Get Custom Pricing →
SECONDARY CTA: See How It Works
```

### Visual specifications

**[FPO: hero_lead_generation.jpg — 1200×540px, full-width]**

A horizontal hero image. Recommended approaches in priority order:

1. **Stylized lead-flow illustration** — leads (small dots or abstract shapes) entering from multiple channels on the left, flowing through a central system, and emerging as qualified pipeline on the right. The illustration shows multiplicity becoming order. 1200×540px, editorial line-art style.

2. **Real product UI screenshot** — wide aspect ratio screenshot of an inbound lead view in SuperSymm. Multiple leads visible with scoring indicators and routing tags. Anonymized data. Cropped 1200×540 with subtle drop shadow.

3. **Three-zone visual** — a horizontal composition showing the three zones (visibility / capture / qualification) at a high level, previewing the diagram that appears in Section 3.

If using Option 1, brief the illustrator: *"Horizontal lead-flow illustration, 1200×540px, navy line strokes (1.5px) with single pink accent for the flow lines. Show small shapes entering from the left across multiple channels, converging through a central system, emerging as a qualified pipeline on the right. Editorial minimalist style. No shading, no gradients in the illustration itself (gradient is reserved for typography). Reference: Stripe documentation hero illustrations."*

### Component notes

- H1 forces line break between "campaign." and "It's a system." on desktop
- "It's a system." uses gradient italic accent class
- Primary CTA: yellow pill on white, navy text, 56px tall
- Secondary CTA: navy text-link with arrow
- 80px gap between CTA row and the full-width image below
- Image: 16px border-radius, subtle drop shadow

---

## Section 2 — Where Lead Generation Breaks

**ID:** `#breaks`
**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** H2 and intro centered. Four pattern blocks below in a 2×2 grid on desktop, single column on mobile.

### Copy

```
EYEBROW: The Diagnostic

H2: Where lead generation breaks.

INTRO (centered, max-width 720px):
Most lead gen doesn't fail because the tactics are wrong.
It fails because the system underneath isn't there.

[Four pattern blocks below]

────────────────────────────────
01

No infrastructure.

No tracking. No measurement. Activity you can't improve
because you can't see what's working.
────────────────────────────────
02

Your website fights your ads.

Traffic lands on a homepage built to inform, not convert.
Visitors orient, then leave.
────────────────────────────────
03

Nothing happens after the form.

Leads sit in inboxes while interest cools. The five-minute window
closes. The lead is gone.
────────────────────────────────
04

Messaging for everyone.

Broad copy that tries not to exclude anyone ends up exciting no one.
The list fills with the wrong fit.
────────────────────────────────

CLOSING LINE (centered, italic, 32px below the grid):
Fix the infrastructure, and the leads above it get better.

[Wrap the entire closing line in italic-benefit (solid navy italic), NOT gradient]
```

### Visual specifications

Each pattern block has a small line-art icon (~40×40px) above the number label. The icons are quiet — quaternary visual elements. If they add clutter during build, drop them entirely and let typography stand alone.

**Suggested icon concepts:**
- 01 (No infrastructure): an unplugged cable or disconnected dotted lines
- 02 (Website fights ads): two opposing arrows
- 03 (Nothing happens after the form): an envelope with a small clock
- 04 (Messaging for everyone): a megaphone with sound waves dispersing in all directions

All icons: 1.5px navy strokes, white fill where applicable, no accent color. Quietly visual. If icons aren't ready, ship without them.

### Component notes

- Pattern block: `--ss-white` background, no border, 24px padding, 16px border-radius
- Number label: 28px Inter Black, `--ss-purple`
- Pattern title: Inter Bold 22px navy, 1.3 line-height
- Body: 16px navy at 80%, 1.5 line-height
- 24px gap between blocks in the grid
- Stagger fade-in: top-left, top-right, bottom-left, bottom-right (100ms apart)
- Closing line: 20px Newsreader italic navy, centered, max-width 600px

---

## Section 3 — How the System Works

**ID:** `#how-it-works`
**Treatment:** Light (white)
**Layout:** H2 and intro centered. Below: a horizontal flow diagram running near full container width (1100px max). Closing line beneath the diagram.

**This is the most important visual on the page.** The diagram has to clearly show three zones connected by arrows, with a feedback loop returning from the third zone to the first. The loop is what proves "system" — without it, the diagram looks like a one-way funnel.

### Copy

```
EYEBROW: The Flow

H2: How the system works.

INTRO (centered, max-width 720px):
Three jobs. One connected flow.
Every part informs every other part.

[Flow diagram below]

CLOSING LINE (centered, italic, 48px below diagram):
More leads. Better leads. Less manual work.

[Wrap "Better leads" in gradient italic accent]
```

### Visual specifications

**[FPO: lead_generation_flow.svg — 1100×420px desktop, 380×900px mobile]**

A horizontal flow diagram showing three connected zones with a feedback loop.

**Structure:**

```
┌────────────────┐    ┌────────────────┐    ┌────────────────┐
│   VISIBILITY   │ →  │    CAPTURE     │ →  │ QUALIFICATION  │
│                │    │                │    │                │
│ • Search       │    │ • Landing pages│    │ • Lead scoring │
│ • Social       │    │ • Lead magnets │    │ • Tier routing │
│ • Content      │    │ • Smart forms  │    │ • Sales handoff│
│ • Paid         │    │                │    │                │
└────────────────┘    └────────────────┘    └────────────────┘

   "Show up where         "Turn visitors        "Hand sales
    buyers already are"   into prospects"       the right ones"

        ↑                                              │
        └──────────────── learning loop ───────────────┘
```

**Visual specifications:**
- Each zone: rounded rectangle, 280×220px, white fill, 1.5px navy border, 16px border-radius, 24px padding
- Zone title: Inter Bold 18px navy, uppercase, 0.06em letter-spacing
- Zone mechanism list: 14px navy at 80%, 1.5 line-height, bullet-style with small `--ss-pink` dots
- Zone caption (below the rectangle): 13px Newsreader italic navy at 70%, centered under each zone
- Connecting arrows between zones: 2px stroke `--ss-pink`, with arrowheads
- Feedback loop: curved 2px stroke in `--ss-yellow` running below the row from Zone 3 right edge back to Zone 1 left edge. The loop has a small label centered underneath in 12px Inter Medium navy: "Performance data sharpens targeting"
- Loop arrow uses dashed stroke (`stroke-dasharray: 6 4`) to visually distinguish it as a return path

**Hover behavior:**

On hover of any zone:
- That zone lifts 4px
- Its border becomes `--ss-purple`
- Connecting arrows touching that zone brighten
- Other zones fade to 80% opacity

This demonstrates the zones are connected actors, not isolated steps.

**Mobile variant:**

On mobile, zones stack vertically with connecting arrows running between them on the right side. The feedback loop curves around the entire stack on the left, looping back to the top.

**Implementation:**

Build as an inline SVG component with React state controlling hover. No Lottie needed.

```tsx
const [hoveredZone, setHoveredZone] = useState<number | null>(null);

<svg viewBox="0 0 1100 420" width="100%" role="img" aria-label="Lead generation flow diagram showing three connected zones: Visibility, Capture, and Qualification, with a learning loop feeding back from Qualification to Visibility">
  {zones.map((zone, i) => (
    <g
      key={zone.id}
      onMouseEnter={() => setHoveredZone(i)}
      onMouseLeave={() => setHoveredZone(null)}
      className={hoveredZone === i ? 'zone-active' : hoveredZone !== null ? 'zone-faded' : ''}
    >
      {/* rectangle, title, mechanism list */}
    </g>
  ))}

  {/* Forward arrows between zones */}
  {/* Feedback loop with dashed stroke */}
</svg>
```

### Component notes

- Section padding: 140px top, 100px bottom (the diagram earns extra breathing room)
- Closing line: 24px Newsreader italic navy, centered, with "Better leads" in gradient italic accent treatment
- Stagger entrance: zones fade in left to right (300ms apart, 600ms each), then forward arrows draw themselves, then the feedback loop appears last

---

## Section 4 — The Three Fronts of the Funnel

**ID:** `#fronts`
**Treatment:** Light (white)
**Layout:** Section opener centered, then three subsections each using the two-column asymmetric pattern. Alternate which side the visual sits on (left, right, left) for visual rhythm.

This is the longest section of the page by design. It unpacks each of the three zones from Section 3 in depth.

### Section opener

```
EYEBROW: The Mechanics

H2: Three jobs.
    Three connected systems.
    One result.

[Wrap "One result" in gradient italic accent]

INTRO (centered, max-width 720px):
Visibility makes you findable. Capture makes you a prospect.
Qualification makes you a customer. Each job is its own discipline.
Together they're the system.
```

### Subsection 4A — Get Found

**Layout:** Visual right (45%), copy left (55%).

**Copy:**

```
PILLAR 01

H3: Get discovered before buyers
    think to search for you.

BODY:
Seventy percent of buyer research happens outside traditional search now —
on LinkedIn, podcasts, AI assistants, social. A business present on one
channel is invisible everywhere else.

We build presence across the channels your buyers actually use.
When they're looking, you're already there.

WHAT CHANGES FOR YOU:
You stop fighting for attention. You become part of the consideration set.

[Wrap the entire "What changes" line in italic-benefit (solid navy italic)]
```

**Visual specifications:**

**[FPO: pillar_01_get_found.svg — 480×400px]**

A small illustration showing a central business node (navy outline) with channel signals radiating outward to small icons representing different channels (search, LinkedIn, podcasts, AI assistants). Channel icons sit at the perimeter with thin pink lines connecting them to the central node.

**Hover behavior:** On hover, channel icons pulse outward in sequence (clockwise), demonstrating active multi-channel presence.

### Subsection 4B — Capture

**Layout:** Visual left (45%), copy right (55%).

**Copy:**

```
PILLAR 02

H3: Turn visitors into prospects
    without asking for too much.

BODY:
Most websites ask visitors to "contact us" — a hard ask for someone weeks
into research. We build landing pages, lead magnets, and qualifying forms
that earn the next step without demanding the commitment buyers aren't
ready to make.

WHAT CHANGES FOR YOU:
Your website becomes a lead source, not a brochure. Visitors who aren't
ready to talk to sales still enter your pipeline.

[Wrap "What changes" line in italic-benefit]
```

**Visual specifications:**

**[FPO: pillar_02_capture.svg — 480×400px]**

A small illustration showing a landing page with a form. A visitor figure (abstract) on one side completes the form. An arrow shows the exchange: form submission flowing into an inbox or CRM card. The exchange feels mutual — a small `--ss-yellow` gift icon on the other side of the arrow represents the lead magnet value going to the visitor.

**Hover behavior:** On hover, the form fields fill in sequence, then the exchange arrow pulses, demonstrating the value-for-information trade.

### Subsection 4C — Qualify and Route

**Layout:** Visual right (45%), copy left (55%).

**Copy:**

```
PILLAR 03

H3: Send sales the right leads.
    Only the right leads.

BODY:
Speed matters. So does judgment. We score and route every captured lead —
to sales, to nurture, or to a long-term list — based on intent, fit,
and behavior.

Hot leads get human contact in minutes. Everyone else gets the right
next step automatically.

WHAT CHANGES FOR YOU:
Sales spends time with people ready to buy. Close rates go up because
they stop talking to the wrong fit.

[Wrap "What changes" line in italic-benefit]
```

**Visual specifications:**

**[FPO: pillar_03_qualify.svg — 480×400px]**

A small illustration showing three lead cards entering a routing decision point, then flowing to three different destinations: a sales person icon (Tier 1), a nurture sequence (Tier 2), and a list/database (Tier 3). The three paths use three different accent colors (purple, pink, yellow) for visual distinction.

**Hover behavior:** On hover, the three paths animate in sequence — first the sales path lights up briefly, then nurture, then list — demonstrating active routing.

### Component notes for Section 4

- Pillar number label: Roboto Mono 14px `--ss-purple`, sits above H3
- H3: Inter Bold 28px navy
- Body: 17px navy, 1.6 line-height
- "What changes for you" label: 13px Inter Bold uppercase navy at 60%, sits above the benefit line
- Benefit line: 18px Newsreader italic navy (solid, not gradient)
- Section padding for each subsection: 80px top/bottom
- Optional subtle 1px `--ss-border-subtle` hairline between subsections if visual separation is needed

---

## Section 5 — Lead Tiers and How We Handle Them

**ID:** `#tiers`
**Treatment:** Light (white)
**Layout:** H2 and intro centered. Three tier cards in a row on desktop, stacked on mobile. Closing line beneath the cards.

**This is the maturity proof section.** Showing the system handles different lead types differently is what separates SuperSymm from generic claims.

### Copy

```
EYEBROW: The Routing System

H2: Three kinds of leads.
    Three ways to handle them.

[Wrap "Three ways" in gradient italic accent]

INTRO (centered, max-width 720px):
Not every lead is the same. The system treats them differently —
because they need different things.

[Three tier cards below]

────────────────────────────────
TIER 1

Decision-ready.

Pricing page visitors. Demo requesters. Fit your ICP. Ready to move.

Routed to sales in under five minutes, with full context on what
they engaged with.

WHAT CHANGES:
You talk to them while they're still interested — not after they've
gone elsewhere.
────────────────────────────────
TIER 2

Warm but not ready.

Good fit. Three to six months out from a real decision.

Enters automated nurture sequences calibrated to their interests.
Promoted to Tier 1 when behavior signals readiness.

WHAT CHANGES:
They stay engaged for the months it takes to be ready.
When they are, they come to you.
────────────────────────────────
TIER 3

Researching.

Early-stage. Exploratory. Long horizon.

Joins a long-term email list. Monthly newsletter cadence.
The system tracks the journey.

WHAT CHANGES:
Today's curious visitor becomes next year's client.
Sales never spent an hour on them.
────────────────────────────────

CLOSING LINE (centered below the three cards, italic):
Most platforms treat every lead the same.
That's why most pipelines are full of the wrong ones.

[Wrap "the wrong ones" in italic-benefit]
```

### Visual specifications

No standalone illustration per card. The typography and the large tier numbers carry the visual weight.

**Card design:**
- Background: `--ss-bg-purple-light` (`#F5F3FB`)
- No border
- 32px padding
- 20px border-radius
- Equal height with `align-items: stretch`
- 16px gap between cards on desktop
- Tier label (TIER 1, etc): 12px Inter Bold uppercase `--ss-purple`, 0.08em letter-spacing
- Tier name (Decision-ready, etc): Inter Bold 28px navy
- Section bullet labels (who fits, what happens): 14px navy at 60%, 1.5 line-height — these are the descriptive lines
- "What changes" label: 11px Inter Bold uppercase navy at 60%
- "What changes" benefit line: 16px Newsreader italic navy (solid)
- 16px vertical gap between sections within each card
- Card hover: subtle 4px lift, no border change
- Stagger fade-in left to right (200ms apart)

### Component notes

- Closing line: 22px Newsreader italic navy, max-width 760px, centered, 64px below the cards
- The phrase "the wrong ones" uses italic-benefit treatment to land the punch

---

## Section 6 — What It Looks Like for You

**ID:** `#audiences`
**Treatment:** Light (white)
**Layout:** H2 and intro centered. Four audience profile cards stacked vertically (not in a grid). Each card is horizontal — small icon + accent strip on the left, copy on the right.

**This section converts industry-skeptical buyers.** A buyer reading their own profile and recognizing their situation precisely is significantly more likely to book a demo.

### Copy

```
EYEBROW: The Application

H2: What this looks like for you.

INTRO (centered, max-width 720px):
Same system. Different shapes of growth.

[Four profile cards stacked below]

────────────────────────────────
PROFILE 01 — Accent: purple

Solo and small advisor firms — 1 to 5 advisors

Your constraint isn't lead volume. It's quality and compliance.

We build a system that produces 3-7 qualified prospects per month from
compliant content, social presence, and referrals. You don't write the
posts, manage the archive, or chase the leads.

WHAT CHANGES:
You meet with prospects who already want to work with you.
────────────────────────────────
PROFILE 02 — Accent: pink

Mid-size professional services firms — 5 to 25 people

Your constraint is keeping the pipeline full enough to support
your sales team.

We build a system that produces 20-50 qualified inquiries per quarter
from multi-channel paid, content-driven SEO, and automated routing.
Your sales team gets a steady stream of qualified leads with full context.

WHAT CHANGES:
Their hours go to closing, not prospecting.
────────────────────────────────
PROFILE 03 — Accent: yellow

Multi-location healthcare and legal — 2+ locations

Your constraint is routing leads to the right location
while staying compliant.

We build location-specific landing pages, geo-targeted paid campaigns,
and HIPAA or state-bar-compliant intake workflows. Each location fills
its own pipeline.

WHAT CHANGES:
Compliance stays in the background. Each location gets the leads
it can serve.
────────────────────────────────
PROFILE 04 — Accent: teal

B2B services and consulting

Your constraint is reaching decision-makers at the accounts
you actually want to win.

We build account-based campaigns on LinkedIn, content that earns
attention at the right titles, and longer nurture cycles measured
in quarters. Your pipeline fills with enterprise meetings.

WHAT CHANGES:
You stop chasing generic inquiries. You start filling a target-account
pipeline.
────────────────────────────────
```

### Visual specifications

**[FPO: audience_icons — four icons, 60×60px each]**

Each profile card has a small icon on the left representing the audience type. Style consistent with other platform pages — 1.5px navy strokes, single accent color per icon.

**Icon concepts:**
- Solo advisor: a single figure with a compliance shield
- Mid-size firm: three figures with connecting lines between them
- Multi-location: a small map pin with multiple location markers
- B2B services: a stylized handshake or two intersecting building shapes

**Accent strip:** A 4px-wide vertical color strip runs along the left edge of each card, in the accent color specified for that profile (purple, pink, yellow, teal). This is what creates fast visual differentiation as the buyer scrolls.

**Card layout:**
- Card: `--ss-white` background, 1px `--ss-border-subtle` border (except the left edge, which is the 4px accent strip), 16px border-radius, 32px padding
- 4-column grid within the card: icon takes column 1 (15%), copy takes columns 2-4 (85%)
- 24px vertical gap between cards
- Card hover: 4px lift, accent strip widens to 6px

### Component notes

- Profile number label: 11px Inter Bold uppercase navy at 60%
- Profile title (firm type and size): Inter Bold 22px navy
- Constraint statement: 16px navy, 1.5 line-height
- Body paragraph: 16px navy, 1.6 line-height
- "What changes" label: 11px Inter Bold uppercase navy at 60%
- "What changes" benefit line: 17px Newsreader italic navy (solid)
- 16px vertical gap between text blocks within each card
- Section padding: 100px top/bottom (slightly tighter than standard to accommodate the four cards)

---

## Section 7 — What It Produces

**ID:** `#outcomes`
**Treatment:** Light (white)
**Layout:** H2 and intro centered. Six outcome statements in a 3×2 grid on desktop, 2×3 on tablet, single column on mobile.

### Copy

```
EYEBROW: The Outcomes

H2: Six things that change
    when the system is running.

[Wrap "when the system is running" in gradient italic accent]

INTRO (centered, max-width 720px):
The platform isn't the deliverable. What changes for your business is.

[Six outcome statements in a 3×2 grid]

──────────────────────────────────────
01

Leads from every channel,
captured with no gaps.
──────────────────────────────────────
02

Hot leads in your inbox in minutes,
with full context.
──────────────────────────────────────
03

Warm leads nurture themselves,
on schedules that match how buyers actually decide.
──────────────────────────────────────
04

Sales talks to qualified prospects,
not curious browsers.
──────────────────────────────────────
05

Compliance handled automatically.
No separate tracking system.
──────────────────────────────────────
06

Cost per qualified lead drops
as the system learns your market.
──────────────────────────────────────
```

### Visual specifications

No illustrations. Pure typography. The large number labels (01-06) in `--ss-pink` Inter Black at 32px are the visual element.

**Card design:**
- Background: white, no card treatment
- 4px left border in `--ss-pink`
- 24px padding-left, 16px padding-top/bottom
- No border-radius (the left accent is the only visual treatment)
- Number label: 32px Inter Black `--ss-pink`, top-aligned
- Statement: Inter Bold 20px navy, 1.4 line-height, max 2 lines
- 32px vertical gap between cards in each column
- 48px horizontal gap between columns
- Cards equal-height with `align-items: stretch`
- Stagger fade-in: top-to-bottom, left-to-right (100ms apart)
- No hover state — these are statements, not interactive cards

### Component notes

- Section padding: 120px top/bottom
- The simplicity of the layout reinforces the simplicity of the statements

---

## Section 8 — Final Invitation

**ID:** `#cta`
**Treatment:** Dark (`--ss-navy`)
**Layout:** Centered, max-width 720px, generous padding (140px+ top and bottom)

### Copy

```
H2 (centered):
Lead generation should be a system.
Not a hope.

[Wrap "Not a hope" in gradient italic accent]

BODY (centered, 18px, white at 90%):
Most teams are running tactics. Few are running infrastructure.
The difference shows up in your pipeline, your sales team's hours,
and your cost per lead. We'd love to show you.

PRIMARY CTA: Book a Demo →
SECONDARY CTA: Get Custom Pricing

PRICING LINE (smaller, white at 60%):
Engagement pricing is custom to your firm and goals.
We'll quote you a number after one call.
```

### Background treatment

Optional: a single faded `--ss-pink` octagonal logomark watermark, centered, 6% opacity, 480px. No animation on this page (consistent with other platform pages).

### Component notes

- H2: Inter Black 48-56px, white, sentence case
- "Not a hope" uses gradient italic accent — but rendered on a dark background, the gradient may need a slightly adjusted treatment for legibility. Test the gradient at full saturation first; if it doesn't read well on navy, brighten the gradient colors slightly or shift to a single pink color (no gradient) for this dark-background instance.
- Body: 18px, 1.7 line-height
- Primary CTA: yellow pill on navy, navy text, 56px tall
- Secondary CTA: white text-link with arrow
- Pricing line: 14px italic, white at 60%
- Reuse the existing `<FinalCTA>` component from other platform pages

---

## Section 9 — Footer

Standard SuperSymm footer (4-column, soft background). No customization for this page.

---

## Internal linking map

| CTA / Link | Destination |
|---|---|
| Get Custom Pricing | `/pricing` |
| See How It Works | `#how-it-works` (anchor to Section 3) |
| Book a Demo | `/demo` |

No deep links to platform sub-pages from this page. Body copy carries the explanation. Future revisions can add deep links once supporting pages exist.

---

## Suggested future sections / pages (do not build now)

These were considered but excluded from V1:

- **Lead generation playbook (`/resources/lead-generation-playbook`):** A long-form downloadable resource detailing the framework. Could become a lead magnet section on this page in V2.
- **Industry-specific lead gen pages (`/lead-generation/financial-advisors`, etc.):** Deeper application of the system per industry. Worth building once a single client case study per industry exists.
- **Proof section:** Removed from V1 per user direction. When Luxon Brown or another client case study has hard CPL or volume numbers, consider adding a quote + stat callout between Section 7 and Section 8.
- **Comparison page (`/lead-generation/vs-agencies`):** A long-form comparison between SuperSymm and traditional lead generation agencies. Worth building if "vs agency" search volume justifies it.

---

## SVG illustration consistency rules

All illustrations on this page follow the established design system:
- Stroke weight: 1.5px navy on light backgrounds
- Single accent color per illustration (purple, pink, yellow, or teal)
- Style: geometric, minimalist, editorial — Stripe documentation iconography reference
- No gradients in illustrations (gradient is reserved for headline italic accent treatment only)
- No shading, no realistic depictions

**Critical asset:** The Section 3 flow diagram is the most important illustration on the page. Brief it most carefully. Review it most carefully. The feedback loop (yellow dashed return arrow) is the single most important element to get right — without it, the "system" claim weakens.

---

## Animation reference (Framer Motion — minimal)

Same as other platform pages. Section entrance fade-up, stagger card grids, hover lift on diagram zones. All wrapped with `useReducedMotion()`. No scroll-driven sections. No continuous loops.

The Section 3 flow diagram has hover interactions on each of the three zones — built with React state and CSS transitions, no Framer Motion needed for those specific interactions.

---

## Section background sequence

```
Section 1 (Hero)              bg: white
Section 2 (Where it breaks)   bg: --ss-bg-soft
Section 3 (How it works)      bg: white
Section 4 (Three fronts)      bg: white
Section 5 (Lead tiers)        bg: white
Section 6 (For you)           bg: white
Section 7 (Outcomes)          bg: white
Section 8 (Final CTA)         bg: --ss-navy
Footer                        bg: --ss-bg-soft
```

**Note on the long white run (Sections 3-7):** Five consecutive white sections is intentional. The variations come from layout (centered intros, asymmetric subsections, grid cards, stacked profiles, outcome grid) rather than background color. The soft section 2 and dark section 8 provide visual reset points at the front and end.

If during build the white run reads as monotonous, consider switching Section 5 (Lead Tiers) to `--ss-bg-soft` for subtle differentiation. Test without first.

---

## Performance budget

- Largest Contentful Paint < 2.5s on 4G
- Total JS bundle < 120KB gzipped
- All pillar illustrations are inline SVGs
- Lead flow diagram (Section 3) is inline SVG
- Hero image uses `next/image` with appropriate sizing
- Lazy-load illustrations below the fold

---

## Accessibility

- Breadcrumb uses semantic `<nav aria-label="Breadcrumb">` with `<ol>`
- Lead flow diagram (Section 3) has `role="img"` and meaningful `aria-label` describing the three zones and feedback loop
- Each zone in the diagram has its own `aria-label` for screen readers
- Decorative SVGs (e.g., the optional pattern icons in Section 2) have `aria-hidden="true"`
- All interactive elements have visible focus rings
- Animation respects `prefers-reduced-motion`
- Heading hierarchy: one H1, multiple H2s, H3s only in Section 4 subsections
- Section 5 tier cards are not interactive — render as styled list items within a semantic `<ol>`
- Section 7 outcome statements render as styled list items within a semantic `<ol>`
- Gradient italic text: ensure the gradient maintains WCAG AA contrast at the lightest gradient point. The purple-to-pink gradient on white background is well within AA. On dark navy background (Section 8), test the gradient at full saturation first; if contrast falls below AA, brighten the gradient or fall back to solid pink.

---

## Build sequence (recommended)

1. **Foundation** — verify Tailwind config and component library from previous platform pages. Add the `.italic-accent` (gradient) and `.italic-benefit` (solid navy) typography utilities.
2. **Skeleton** — all sections built with placeholder copy, no images, no animations
3. **Real copy** — paste verbatim from this brief
4. **Static SVG visuals** — build the flow diagram (Section 3) first, since it's the most important. Then the three pillar illustrations (Section 4). Then the audience icons (Section 6). FPO blocks elsewhere.
5. **Lead flow diagram hover interactions** — implement per-zone hover behaviors (Section 3)
6. **Pillar illustration hover interactions** — implement per-pillar behaviors (Section 4)
7. **Italic accent typography** — apply gradient italic to H1/H2 emphasis phrases; apply solid italic to "What changes" benefit lines
8. **Animations** — fade-up entrance, stagger for card grids
9. **Accessibility audit** — keyboard navigation, screen reader test, motion preference test, gradient contrast check
10. **Performance audit** — Lighthouse score, image optimization
11. **Real assets swap** — replace FPO images with finished illustrations as commissioned

---

## Asset checklist

Before launch, gather or generate:

- [ ] Hero full-width image — lead flow illustration, 1200×540px (Section 1)
- [ ] **Lead flow diagram — three connected zones with feedback loop, 1100×420px desktop and 380×900px mobile (Section 3)** — this is the most critical asset on the page
- [ ] Three pillar illustrations: Get Found, Capture, Qualify (Section 4)
- [ ] Four audience icons + accent strip styling (Section 6)
- [ ] Optional: four small pattern icons for Section 2 (skip if not ready)
- [ ] OG share image at 1200×630
- [ ] Newsreader serif font weight: italic (already loaded from previous platform pages)
- [ ] CSS utilities for `.italic-accent` (gradient) and `.italic-benefit` (solid navy)
- [ ] Internal route stubs needed for this page: `/pricing`, `/demo` (already exist)

---

## Sections pending content (flag as TODO)

- [ ] **Future revision (V2):** add a small proof section (quote + stat) between Section 7 and Section 8 once a client case study has hard CPL or lead volume numbers to feature
- [ ] **Future revision (V2):** consider building industry-specific lead generation deep-dive pages per the suggested future pages list
- [ ] Verify the lead flow diagram (Section 3) visually demonstrates a closed loop — if the feedback arrow doesn't read clearly during build, iterate on the layout before launch
- [ ] Test the gradient italic on dark backgrounds (Section 8) — adjust if contrast is poor

---

## Build notes for Claude Code

- Route this page to `/platform/lead-generation`
- Use exact copy verbatim — do not paraphrase
- Wrap headline emphasis phrases in `<em className="italic-accent">...</em>` (gradient treatment)
- Wrap "What changes for you" benefit lines in `<em className="italic-benefit">...</em>` (solid navy italic)
- The Section 3 flow diagram is a custom inline SVG component — build with React state for per-zone hover interactions, not Framer Motion
- Section 4 subsections reuse the existing `<PillarSection>` component from other platform pages — pass props for `number`, `title`, `body`, `benefitLabel`, `benefitLine`, `illustration`, `mirrored`
- Section 5 tier cards render as a styled list. Add a new `<TierCard>` component if reusing this pattern on other pages later.
- Section 6 audience profiles render as horizontal cards with the 4px left accent strip. Add a new `<AudienceProfile>` component.
- Section 7 outcome statements reuse the outcome grid pattern from the Platform Overview page
- "See How It Works" CTA in the hero anchors to `#how-it-works` (Section 3), not a separate page

---

*End of Lead Generation page brief*
