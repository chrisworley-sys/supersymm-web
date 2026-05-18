# Marketing Automation Platform — Build Brief V2

**Page URL:** `/platform/marketing-automation`
**Last updated:** May 2, 2026
**Status:** Ready for build
**Target word count:** ~1,300 words
**Audience:** Prospects researching multi-channel execution capabilities (mid-funnel)
**Primary conversion goal:** Demo booking or pricing inquiry
**Visual ambition:** Polished but simple — static SVGs, hover states, no scroll-driven sections
**Reference:** Pomeroy Agency (boutique consultancy register), homepage V2.1 design system

---

## Strategic intent

This page does two jobs at once:

1. **SEO** — rank for "marketing automation platform," "multi-channel marketing automation," and the long-tail compliance variants
2. **Education** — teach the SuperSymm philosophy of marketing automation (customer at the center, friction reduction, connected systems, signal reaction) so a buyer leaves understanding *how we think* before they understand *what we do*

The structure below leads with philosophy, then breaks the platform into seven digestible capability chunks, then closes with proof and the partner-led model. Each capability is its own section with a single clear visual — no feature dumps, no bullet stacks.

---

## SEO specifications

**Title tag (60 chars):**
```
Marketing Automation Platform | SuperSymm
```

**Meta description (155 chars):**
```
A connected marketing automation platform built around your customer — content, channels, personalization, and compliance, run as one intelligent system.
```

**H1:** Unify your customer journey. End-to-end.
**Primary keyword:** Marketing Automation Platform
**Secondary keywords:** Multi-channel marketing automation · Cross-channel marketing automation · Compliant marketing automation · AI marketing automation · Persona-based marketing automation · Marketing automation for professional services

**Schema markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marketing Automation Platform",
  "provider": {
    "@type": "Organization",
    "name": "SuperSymm"
  },
  "serviceType": "Marketing automation platform",
  "description": "A connected marketing automation platform built around your customer — content, channels, personalization, and compliance, run as one intelligent system."
}
```

**Open Graph:**
```html
<meta property="og:title" content="Unify your customer journey. End-to-end. — SuperSymm" />
<meta property="og:description" content="A connected marketing automation platform built around your customer — content, channels, personalization, and compliance, run as one intelligent system." />
<meta property="og:image" content="/og-marketing-automation-1200x630.png" />
<meta property="og:type" content="website" />
```

---

## Page structure overview

```
1.  HERO                          Light     Centered headline + full-width image below
2.  HOW WE THINK ABOUT IT         Light     6 philosophy principles in card grid
3.  PILLARS                       Soft      Section opener with anchor tags (no visuals)
4.  PILLAR 01 — UNIFIED DATA      Light     Asymmetric two-column
5.  PILLAR 02 — SMART TRIGGERS    Light     Asymmetric two-column (mirrored)
6.  PILLAR 03 — JOURNEY           Light     Asymmetric two-column
7.  PILLAR 04 — OMNICHANNEL       Light     Asymmetric two-column (mirrored)
8.  PILLAR 05 — COMPLIANCE        Light     Asymmetric two-column
9.  BLUEPRINT LEAD MAGNET         Pink      Compact breaker — short copy, image, CTA
10. THE BENEFITS                  Dark      4-stat block + supporting copy
11. PROOF — LUXON BROWN           Soft      Quote + FPO portrait
12. GOALS & OUTPUTS               Light     What this enables — outcomes-focused
13. FINAL INVITATION              Dark      Centered, mirrors homepage CTA pattern
14. FOOTER                        Soft      Standard
```

The five pillar sections (4–8) all use the same two-column asymmetric pattern — copy on one side, visual on the other — alternating which side the visual sits on. This creates a rhythmic page that's scannable without being repetitive.

This page restructures around Niteco's 4-pillar marketing automation framework (Unified Customer Data, Smart Triggers, Journey Orchestration, Omnichannel Experiences) plus a fifth pillar for Compliance — SuperSymm's category moat in regulated industries.

---

## Brand foundation (carry from homepage V2.1)

### Color tokens

```css
:root {
  --ss-purple: #6750A4;
  --ss-purple-dark: #43336D;
  --ss-navy: #22193B;
  --ss-navy-deep: #1B0A20;
  --ss-pink: #E977C1;
  --ss-yellow: #D5F77C;

  --ss-white: #FFFFFF;
  --ss-bg-soft: #F1F0F1;
  --ss-bg-purple-light: #F5F3FB;

  --ss-text-primary: #1F1E21;
  --ss-text-on-dark: #FFFFFF;
  --ss-text-muted: #5F5D66;

  --ss-border-subtle: rgba(31, 30, 33, 0.08);
  --ss-border-on-dark: rgba(255, 255, 255, 0.12);
}
```

### Typography

- **H1:** Inter Black 64–72px, navy or white. One key phrase wrapped in Newsreader serif italic.
- **H2:** Inter Bold 40–48px, sentence case
- **H3:** Inter Bold 24–28px (capability section titles)
- **Body:** Roboto 18px, line-height 1.6
- **Small body / captions:** Roboto 15px, line-height 1.5
- **Eyebrow / labels:** Inter Medium 13px uppercase, 0.08em letter-spacing
- **Capability number labels:** Roboto Mono 14px, `--ss-purple`

### Spacing

- Section vertical padding: `clamp(96px, 10vw, 140px)` top and bottom
- Container max-width: 1200px, centered, 24px gutters
- Capability section padding can be tighter (`80px` top/bottom) since they form a related group

### Motion (kept simple per user direction)

- Section entrance: 600ms ease-out, 24px translate-Y, fade in
- Card hover: translateY -4px, 200ms ease
- Visual hover: subtle 1.02 scale on capability illustrations, 300ms ease
- No scroll-driven swaps, no continuous loops, no Lottie
- Wrap with `useReducedMotion()` and disable animations when reduced

---

## Section 1 — Hero

**ID:** `#hero`
**Treatment:** Light (white background) — intentionally different from homepage hero to signal this is a sub-page, not a landing page
**Layout:** Centered single column. Breadcrumb at top, eyebrow, headline, subhead, CTAs centered. Below the copy, a full-width hero image runs edge-to-edge of the container.

### Breadcrumb

```
Home  /  Platform  /  Marketing Automation
```

Sits at top of section, centered, 14px navy at 50% opacity, last segment in navy at 90%.

### Copy (centered, max-width 880px)

```
EYEBROW: The Platform

H1: Unify your customer journey.
    End-to-end.

[Wrap "End-to-end" in Newsreader serif italic]

SUBHEAD:
A connected platform that knows your customer, runs every channel, and reacts
to every signal — from the first click to the qualified handoff. Less friction.
Better engagement. Higher ROI.

PRIMARY CTA: Book a Demo →
SECONDARY CTA: See How It Works
```

### Visual specifications

**[FPO: hero_marketing_automation.jpg — 1200×540px, full-width]**

Below the centered copy block, a full-width image spans the entire container width (max 1200px). Recommended subjects, in order of preference:

1. **Stylized customer journey illustration** — a horizontal flow showing a single customer figure moving through stages (awareness → consideration → decision → loyalty), with subtle channel touchpoints layered above the journey line. Editorial illustration style (line-art with one accent color), not photorealistic.

2. **Real product UI screenshot** — a wide aspect ratio screenshot of a SuperSymm dashboard showing a customer journey or campaign performance view. Anonymized data. Cropped to 1200×540 with a subtle drop shadow.

3. **Composite editorial photo** — a stylized hero shot of a workspace with abstract overlay graphics suggesting connection (lines, nodes). Less recommended as it can drift toward stock-photo feel.

If using Option 1, brief the illustrator: *"Horizontal customer journey illustration, 1200×540px, navy line strokes (1.5px) with single pink accent for the journey path. Show one figure at four stages of progression. Editorial minimalist style. No shading, no gradients. Reference: Stripe documentation hero illustrations."*

### Component notes

- H1 forces line break between "journey." and "End-to-end." on desktop
- Primary CTA: `--ss-yellow` background, navy text, pill-shaped, 56px tall (not just on dark — the yellow CTA is the primary on light backgrounds too for consistency with brand)

  *Alternative if yellow on white feels off:* purple-filled CTA with white text. Test both.
- Secondary CTA: navy text-link with arrow
- 80px gap between CTA row and the full-width image below
- Image has 16px border-radius, subtle drop shadow (`0 24px 48px rgba(31, 30, 33, 0.08)`)

---

## Section 2 — How we think about it

**ID:** `#philosophy`
**Treatment:** Light (white)
**Layout:** Section heading and intro centered. Below: 6 principle cards in a 3-3 grid on desktop (three cards in row 1, three in row 2). 2×3 on tablet, single column on mobile.

### Copy

```
EYEBROW: Our Approach

H2: It isn't about doing more, faster.
    It's about doing the right thing,
    for the right person, at the right moment.

[Wrap "the right thing, for the right person, at the right moment" in Newsreader serif italic]

INTRO (centered, max-width 720px):
Most platforms optimize for output. Send more emails. Post more often.
Run more campaigns. SuperSymm optimizes for outcomes — and that starts
with six principles that shape every campaign we run.
```

### Six principle cards

Each card has a small numeric label, a short headline, and 2–3 sentences of body copy. No icons needed — typography carries the weight.

```
─────────────────────────────────
01

Business context comes first.

Before we automate anything, we understand your business goals, your competitive
position, and what success looks like a quarter from now. Tactics without context
is activity without outcomes.
─────────────────────────────────
02

The customer is at the center.

Every workflow should serve a person — not a process. Campaigns start with who
you're talking to and what they need next, not with what's easiest to schedule.
─────────────────────────────────
03

Optimization is continuous.

Every send, click, and conversion teaches the system something. Performance isn't
reviewed quarterly — it's adjusted constantly, so the next campaign is sharper
than the last.
─────────────────────────────────
04

Friction is the enemy.

The fewer hand-offs between idea and execution, the more momentum your marketing
has. We collapse approval chains, eliminate manual transfers, and make compliance
invisible.
─────────────────────────────────
05

Connected systems compound.

A single channel produces single-channel results. Channels that share data,
audience, and intelligence produce results that compound — and a customer journey
that doesn't break.
─────────────────────────────────
06

ROI is the only scoreboard.

Every channel, every campaign, every dollar gets traced back to a lead and a
revenue outcome. Activity isn't the goal. Pipeline is.
─────────────────────────────────
```

### Component notes

- Card: `--ss-bg-purple-light` background, no border, 32px padding, 20px border-radius
- Number label: 32px Inter Black, `--ss-purple`, top-aligned
- Headline: Inter Bold 22px, navy
- Body: 16px, 1.6 line-height
- Card hover: subtle 4px lift
- Stagger entrance left to right, top to bottom, 100ms apart
- Cards equal-height with `align-items: stretch`

---

## Section 3 — The Pillars

**ID:** `#pillars`
**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** Section opener. Centered, single column, max-width 800px. Acts as a transition between philosophy and the five pillar deep-dives.

### Copy

```
EYEBROW: The Five Pillars

H2: Five pillars.
    One connected system.

INTRO:
Each pillar below works independently. Together they form the connected system
that turns disconnected tactics into a unified customer journey. Here's how
each one works — and how it makes the others stronger.

[Anchor tag row below — see specifications]
```

### Anchor tag row

Below the intro, a row of 5 pill-shaped tags that anchor-link to each pillar section. Replaces the previous mini-diagram.

```
[Unified Data]  [Smart Triggers]  [Journey Orchestration]  [Omnichannel]  [Compliance]
```

### Component notes

- Tags: pill shape, 36px tall, 16px horizontal padding, white background, 1px `--ss-border-subtle` border
- Tag text: 13px Inter Bold uppercase navy, 0.06em letter-spacing
- Tag hover: background fills to `--ss-purple` at 8%, border becomes `--ss-purple` at 24%, 200ms ease
- Tag spacing: 12px gap between tags, wraps gracefully on smaller viewports
- Each tag is a real anchor link with smooth-scroll behavior to its corresponding pillar section ID
- Centered horizontally, 48px below the intro paragraph
- Mobile: tags wrap to multiple lines or convert to horizontal scroll, no need to stack

---

## Section 4 — Pillar 01: Unified Customer Data

**ID:** `#unified-data`
**Treatment:** Light (white)
**Layout:** Two-column asymmetric. Copy left (55%), visual right (45%). Generous vertical padding.

### Copy

```
PILLAR 01

H3: Know your customer.
    All of them. Across every touchpoint.

BODY (2 short paragraphs):
The platform connects every interaction — email opens, page visits, ad clicks,
form fills, sales conversations — into a single customer profile. No more
fragmented data trapped in separate tools. No more guessing at intent because
half the signals lived somewhere your team couldn't see.

You see the full picture of every prospect and customer. Personas stop being
slide-deck artifacts and start driving every campaign that goes out the door.

WHAT'S INCLUDED:
ICP modeling and persona development  ·  Cross-channel data unification  ·
Behavioral profile building
```

### Visual specifications

**[FPO: pillar_01_unified_data.svg — 480×400px]**

A simple SVG showing four data streams (small horizontal lines in different colors representing email, web, social, ads) flowing inward from the corners toward a central customer profile card. The profile card sits at the center with a stylized avatar and three lines of attributes.

**Hover behavior:** On hover, the four data streams pulse outward to inward in sequence (top, right, bottom, left), demonstrating data flowing into the unified profile.

### Component notes

- Pillar number label: Roboto Mono 14px `--ss-purple`, sits above H3
- H3: Inter Bold 32px, navy
- Body: 18px, 1.6 line-height
- "What's included" line: 15px navy at 70% opacity, separated by middle dots
- Section padding: 80px top/bottom

---

## Section 5 — Pillar 02: Smart Triggers

**ID:** `#smart-triggers`
**Treatment:** Light (white)
**Layout:** Two-column asymmetric, **mirrored** — visual left (45%), copy right (55%).

### Copy

```
PILLAR 02

H3: Reach customers in the moments
    that matter most.

BODY:
The window between interest and action is short. A prospect downloads a guide,
visits the pricing page, or reads two articles in a week — and the platform
responds in real time. Lead scores update. Sequences adjust. Sales gets pinged
the moment someone crosses the threshold.

This is the difference between batch-and-blast on a schedule and outreach that
runs on intent.

WHAT'S INCLUDED:
Real-time lead scoring  ·  Behavior-triggered sequences  ·
Sales alerts on qualification  ·  Cart abandonment and re-engagement flows
```

### Visual specifications

**[FPO: pillar_02_triggers.svg — 480×400px]**

A simple line graph showing lead score over time. Three trigger points are highlighted along the line — small dots that, at three points, cause a small action label to appear ("Email sent," "Sequence adjusted," "Sales alerted"). The line ends with a `--ss-yellow` star marking "Qualified."

**Hover behavior:** On hover of any trigger point, that point pulses and its label highlights.

---

## Section 6 — Pillar 03: Journey Orchestration

**ID:** `#journey`
**Treatment:** Light
**Layout:** Two-column asymmetric. Copy left (55%), visual right (45%).

### Copy

```
PILLAR 03

H3: Guide every prospect from
    first interest to final decision.

BODY:
Customer journeys aren't linear. SuperSymm visually maps and orchestrates the
full path — welcome flows for new subscribers, nurture sequences for warm leads,
re-engagement for inactive contacts, hand-off workflows when someone is ready
to talk to sales.

Each step adapts to behavior. If a prospect clicks but doesn't convert, the
next message changes. If they go quiet, the cadence adjusts. The system
handles the branching so your team doesn't have to.

WHAT'S INCLUDED:
Visual journey mapping  ·  Multi-step nurture workflows  ·
Behavior-based branching  ·  Sales handoff automation
```

### Visual specifications

**[FPO: pillar_03_journey.svg — 480×400px]**

A horizontal flow showing one source content piece on the left, a branching point in the middle, and three differently-styled output paths on the right (each representing a different journey path based on behavior). Connection lines in `--ss-pink` showing the branches.

**Hover behavior:** On hover of any of the three output paths, the corresponding branching line brightens.

---

## Section 7 — Pillar 04: Omnichannel Experience

**ID:** `#omnichannel`
**Treatment:** Light
**Layout:** Two-column asymmetric, **mirrored** — visual left (45%), copy right (55%).

### Copy

```
PILLAR 04

H3: Show up consistently,
    wherever they engage.

BODY:
A customer doesn't think in channels. They start a conversation on LinkedIn,
read your blog from a Google search, open your email on their phone, then
click through your retargeting ad on a desktop the next day. SuperSymm
treats it as one conversation — because to your customer, it is.

One brand voice. One value proposition. One journey across every channel.
The pieces stop competing for attention and start reinforcing each other.

WHAT'S INCLUDED:
LinkedIn, Meta, Instagram, X  ·  Email and newsletter automation  ·
Blog and content publishing  ·  Paid media (Google, Meta, LinkedIn) with attribution
```

### Visual specifications

**[FPO: pillar_04_omnichannel.svg — 480×400px]**

A central rounded square labeled "Source content" with four lines extending outward to four smaller squares, each labeled with a channel format (LinkedIn / Email / Blog / Ad). Each output square has slightly different proportions to suggest format variation. Connecting lines in `--ss-pink`.

**Hover behavior:** On hover of the central square, the four output squares glow subtly (border becomes `--ss-purple` instead of navy).

---

## Section 8 — Pillar 05: Compliance Built In

**ID:** `#compliance`
**Treatment:** Light
**Layout:** Two-column asymmetric. Copy left (55%), visual right (45%).

### Copy

```
PILLAR 05

H3: Stay compliant
    without slowing down.

BODY:
For regulated industries, compliance can't be a checklist someone runs after
the fact. SuperSymm handles approval workflows, archiving, audit trails, and
disclaimer insertion as part of the publishing flow itself. SEC, HIPAA, state
bar — the requirements live inside the system, not next to it.

Your team doesn't slow down to stay compliant. The platform makes compliance
the default state.

WHAT'S INCLUDED:
SEC / FINRA archiving (5-year)  ·  HIPAA-compliant communications  ·
State bar advertising compliance  ·  Pre-publish approval workflows  ·
Audit-ready reporting
```

### Visual specifications

**[FPO: pillar_05_compliance.svg — 480×400px]**

A content card with three elements visible: the content itself (suggested with three lines of text), a `--ss-yellow` compliance check badge in the corner, and a small "Archived" timestamp at the bottom. Behind the card, a faded shield outline (in `--ss-purple` at 12% opacity) signals the protective layer.

**Hover behavior:** On hover, the shield outline becomes more visible (24% opacity) and the compliance badge pulses once.

---

## Section 9 — Blueprint Lead Magnet

**ID:** `#blueprint`
**Treatment:** Pink (`--ss-pink` background) — intentional color break to signal this is a different kind of moment
**Layout:** Two-column. Copy left (60%), illustration right (40%). Compact section — significantly less vertical padding than other sections.

This section acts as a soft conversion moment between the pillars and the proof. Not a hard sales push — an offer of value (a downloadable resource) for an email.

### Copy

```
EYEBROW: Free Resource

H2: Get the Blueprint.

BODY (1 short paragraph):
A practical guide to building a connected customer journey — the framework,
the questions to ask, and the metrics that matter. Built from real engagements
with growing professional service firms.

PRIMARY CTA: Get the Blueprint →   (stub — links to # for now)
```

### Visual specifications

**[FPO: blueprint_cover.png — 320×400px]**

Right column: a stylized illustration of the blueprint document. Suggested treatment: a tilted PDF cover mockup showing "The Marketing Automation Blueprint" as the title, with subtle SuperSymm branding visible. Sits at a slight tilt (4°) with a soft drop shadow.

If using a real PDF mockup tool: Smartmockups, Placeit, or a simple Figma mockup work fine. Keep it editorial and clean.

### Component notes

- Section padding: 64px top/bottom (compact, not the standard 96–140px)
- Section background: `--ss-pink` solid
- H2: Inter Bold 36px, navy (not white — pink is light enough that navy reads cleanly)
- Body: 16px, navy at 90% opacity, max-width 480px
- Primary CTA: yellow pill, navy text, 56px tall, 32px below body copy
- Container max-width 1100px (slightly tighter than full)

### CTA behavior

```
For V1: button links to "#" (placeholder anchor) — does nothing on click
For V2: replace href with route to lead gen landing page (e.g., /resources/blueprint)
```

**Do not build the lead gen landing page yet.** The button is a stub — its job in V1 is to validate that the section design works visually and to lock in the page structure. Track button clicks via analytics so you have demand data when it's time to build the actual lead capture page.

---

## Section 10 — The Benefits

**ID:** `#benefits`
**Treatment:** Dark (`--ss-navy`)
**Layout:** Headline + intro centered. Below: 4-column stat block on desktop, 2×2 on tablet, single column on mobile.

### Copy

```
EYEBROW: What This Means For You

H2: When the system is built like this,
    the numbers shift.

[Wrap "the numbers shift" in Newsreader serif italic]

INTRO (centered, max-width 720px):
Less friction means faster execution. Connected systems mean better attribution.
Continuous optimization means improving ROI over time. Here's what teams running
SuperSymm typically see within the first 90 days.

[4-stat row]

────────────────────────────────────────────
40+ hrs                ↑ 3–7
saved per month        qualified leads
on marketing ops       per month (typical)
────────────────────────────────────────────
~$2,200                100%
average monthly        compliance coverage
savings vs. agency     for regulated content
────────────────────────────────────────────

DISCLAIMER (small, below stats):
Results vary by firm size, industry, and engagement scope.
These reflect typical outcomes from active SuperSymm engagements.
```

### Component notes

- Stat number: Inter Black 56px, `--ss-yellow`
- Stat label: 14px Inter Medium, white at 80% opacity, line-height 1.4
- 64px gap between stat columns
- Disclaimer: 12px italic, white at 50% opacity, max-width 560px, centered
- Stagger fade-in for stats, 150ms apart

---

## Section 11 — Proof: Luxon Brown

**ID:** `#proof`
**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** Two-column. FPO portrait left (40%), quote and attribution right (60%). On mobile, portrait above quote.

### Copy

```
EYEBROW: Client Story

H2: How Luxon Brown simplified
    their funnel with SuperSymm.

[Quote block — large, treated typographically]

"PLACEHOLDER QUOTE — to be replaced with real client quote.
SuperSymm gave us one system to run our marketing instead of
six. Our content goes out faster, the leads come in qualified,
and we finally know what's actually working."

— [First Last], [Title], Luxon Brown

[CTA below quote]
[link] Request the full case study →   (opens contact form or routes to /contact?ref=luxon-brown)
```

### Visual specifications

**[FPO: portrait_luxon_brown.jpg — 360×360px, square]**

Portrait image of the client, square crop, soft shadow. Behind the portrait, a 16px-offset purple block (`--ss-purple` at 100%) sits at 8px translate-x and 8px translate-y. Creates a subtle editorial frame.

**Until real portrait is available:**
A simple stylized illustrated avatar — a circle with abstract face elements (two dots for eyes, a curved line for mouth), in `--ss-navy` linework on a `--ss-bg-purple-light` circular background. 360×360px. Or use a generic person silhouette with the offset purple block treatment, clearly placeholder-styled.

### Component notes

- Quote: 28px Inter (regular weight, not bold), navy, 1.4 line-height
- Quote uses oversized opening and closing quotation marks — the opening mark in `--ss-pink`, sits just before the quote at 64px Inter Black
- Attribution: 16px Inter Bold navy, name on first line, title and firm on second line in muted gray
- Portrait container: 360×360px square, 8px border-radius, `--ss-purple` offset block behind it
- CTA link: small text-link with arrow, sits 32px below attribution

---

## Section 12 — Goals & Outputs

**ID:** `#outcomes`
**Treatment:** Light (white)
**Layout:** Section heading and intro centered, then two-column layout below: Goals on the left (50%), Outputs on the right (50%). On mobile, stacked.

### Copy

```
EYEBROW: What This Enables

H2: The goals you set.
    The outputs we deliver.

[Wrap "The outputs we deliver" in Newsreader serif italic]

INTRO (centered, max-width 720px):
A connected platform isn't an end in itself — it's the engine behind specific
business outcomes. Here's what SuperSymm clients set as their goals,
and what the platform produces against them.

──────────────────────────────────────────────
LEFT COLUMN: GOALS
──────────────────────────────────────────────

H3 (left col): Goals our clients set.

A predictable lead pipeline.
Consistent qualified prospects every month — not boom-and-bust quarters.

A defensible cost-per-lead.
Acquisition costs that improve quarter over quarter as the system learns.

Faster time-to-revenue.
Shorter cycles from first touch to closed deal because the journey is connected.

Marketing the team can trust.
Compliance you don't think about. Performance you can show the board.

A team focused on the work that matters.
Less time on tools and tactics. More time on clients, cases, and outcomes.

──────────────────────────────────────────────
RIGHT COLUMN: OUTPUTS
──────────────────────────────────────────────

H3 (right col): What SuperSymm produces.

Qualified leads delivered weekly.
With full context — what they engaged with, when, and why they're ready.

Performance dashboards updated continuously.
ROI by channel, campaign, and audience segment. Always current.

Compliance archives ready for audit.
Every published asset stored, indexed, and reportable on demand.

Quarterly strategic reviews with our team.
Where we look at what's working, what's not, and where to invest next.

Content, campaigns, and creative — without you writing prompts.
Brand-consistent execution across every channel, on cadence.
```

### Component notes

- H2: Inter Bold 40px, navy
- Column H3: Inter Bold 24px, navy, with a 2px `--ss-pink` underline accent (40px wide, sits below the H3 with 12px spacing)
- Each goal/output item: bold headline (Inter Bold 18px navy) + body description (16px navy at 80% opacity, line-height 1.5)
- 32px vertical gap between items within each column
- 64px horizontal gap between the two columns
- Subtle vertical divider between columns: 1px `--ss-border-subtle`, runs full height of the content area
- On mobile: divider becomes horizontal between the two stacked columns, with 48px vertical gap

---

## Section 13 — Final Invitation

**ID:** `#cta`
**Treatment:** Dark (`--ss-navy`)
**Layout:** Centered, max-width 720px, generous padding (140px+ top and bottom)

### Copy

```
H2 (centered):
What if marketing finally
got out of your way?

[Wrap "got out of your way" in Newsreader serif italic]

PRIMARY CTA: Get Custom Pricing →
SECONDARY CTA: Book a Demo

PRICING LINE (smaller, white at 60%):
Engagement pricing is custom to your firm and goals.
We'll quote you a number after one call.
```

### Background treatment

Optional: a single faded `--ss-pink` octagonal logomark watermark, centered, 6% opacity, 480px. No animation on this page.

### Component notes

- H2: Inter Black 48–56px, white, sentence case
- Primary CTA: yellow pill on navy, navy text, 56px tall
- Secondary CTA: white text-link with arrow
- Pricing line: 14px italic, white at 60%
- Mirror pattern from homepage final CTA for visual consistency

---

## Section 14 — Footer

Standard SuperSymm footer (4-column, soft background). No customization for this page.

---

## Internal linking map

| CTA / Link | Destination |
|---|---|
| Book a Demo | `/demo` |
| Get Custom Pricing | `/pricing` |
| Back to Platform Overview | `/platform` |
| Request the full case study | `/contact?ref=luxon-brown` |

All other links from the original brief have been removed for V1 launch. Capability sections do not link out to deeper pages — the body copy carries the explanation. Deep platform sub-pages (`/services/persona-development`, `/platform/personalization`, etc.) can be added in a future revision once the supporting pages exist.

---

## SVG illustration consistency rules

All pillar section illustrations should follow a unified style:

- **Stroke weight:** 1.5px navy on white
- **Accent color:** one accent per illustration — purple, pink, yellow, or teal — used minimally (one element only)
- **Size:** all 480×400px aspect ratio for layout consistency
- **Style:** geometric, minimalist, editorial — references: Stripe documentation icons, Linear marketing illustrations
- **No gradients, no shading, no realistic depictions**
- **Hover state:** each has a small distinct interaction (lift, glow, sequential highlight) — never spinning, scaling >1.05, or color-changing the entire illustration

If commissioning illustrations to a freelancer, brief them as: *"Five minimalist editorial line-art illustrations, 480×400px each, 1.5px navy strokes on white, single accent color per piece. Reference: Stripe documentation iconography style. Each illustration must support a subtle hover interaction (specified per piece)."*

If using AI generation (Recraft is best for this style):
- Prompt: *"Minimalist editorial line-art illustration, navy line strokes (1.5px), single [purple/pink/yellow/teal] accent color, white background. Geometric, modern, no shading, no gradients. Style: Stripe documentation icons."*
- Iterate until consistent across all five

---

## Animation reference (Framer Motion — minimal)

**Section entrance:**
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
```

**Stagger card grids (Section 2):**
```tsx
const container = {
  visible: { transition: { staggerChildren: 0.1 } }
}
```

**Capability illustration hover (per spec):**
```tsx
whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
```

**Always wrap with:**
```tsx
const prefersReduced = useReducedMotion()
```

---

## Section background sequence

```
Section 1  (Hero)              bg: white
Section 2  (Philosophy)        bg: white
Section 3  (Pillars Intro)     bg: --ss-bg-soft
Section 4  (Unified Data)      bg: white
Section 5  (Smart Triggers)    bg: white
Section 6  (Journey)           bg: white
Section 7  (Omnichannel)       bg: white
Section 8  (Compliance)        bg: white
Section 9  (Blueprint Magnet)  bg: --ss-pink
Section 10 (Benefits)          bg: --ss-navy
Section 11 (Proof)             bg: --ss-bg-soft
Section 12 (Goals & Outputs)   bg: white
Section 13 (Final CTA)         bg: --ss-navy
Footer                         bg: --ss-bg-soft
```

**Note on the long white run (Sections 4–8):** These five pillar sections all share the white background by design — they form a related group, and the alternating two-column layout (visual left/right) provides the rhythm. The pink Blueprint section (9) acts as a deliberate visual break before the dark Benefits section. Subtle thin horizontal dividers (`--ss-border-subtle`, 1px) can sit between each pillar section if more visual separation is needed. Test without dividers first.

---

## Performance budget

- Largest Contentful Paint < 2.5s on 4G
- Total JS bundle < 120KB gzipped (no Lottie on this page)
- All capability illustrations are inline SVGs (no extra requests)
- Portrait image uses `next/image` with appropriate sizing
- Lazy-load illustrations below the fold

---

## Accessibility

- Breadcrumb uses semantic `<nav aria-label="Breadcrumb">` with `<ol>`
- All capability section illustrations have `role="img"` and meaningful `aria-label` (e.g., "Three layered persona profiles representing audience segments")
- Decorative illustrations (e.g., octagonal watermark in Section 13) use `aria-hidden="true"`
- Jump links in Section 3 are real anchor links with smooth scroll behavior
- Heading hierarchy: one H1 (hero), multiple H2s (major sections), H3s (capability section titles only)
- All interactive elements have visible focus rings
- Animation respects `prefers-reduced-motion`

---

## Build sequence (recommended)

1. **Foundation** — verify Tailwind config has all color tokens and typography utilities from homepage. Newsreader serif font loaded.
2. **Skeleton** — all sections built with placeholder copy, no images, no animations. Verify rhythm.
3. **Real copy** — paste verbatim from this brief.
4. **Static SVG visuals** — build/embed each capability illustration. Use FPO blocks where illustrations aren't ready.
5. **Hover interactions** — add the per-illustration hover behaviors defined in each capability section.
6. **Animations** — fade-up entrance, stagger for cards.
7. **Accessibility audit** — keyboard navigation, screen reader test, motion preference test.
8. **Performance audit** — Lighthouse score, image optimization.
9. **Real assets swap** — replace FPO portrait, replace placeholder quote when real content is available, replace illustrations as commissioned.

---

## Asset checklist

Before launch, gather or generate:

- [ ] Hero full-width image — customer journey illustration or product UI screenshot, 1200×540px (Section 1)
- [ ] Five pillar illustrations: Unified Data, Smart Triggers, Journey Orchestration, Omnichannel, Compliance (Sections 4–8)
- [ ] Blueprint cover mockup — 320×400px tilted PDF cover (Section 9)
- [ ] FPO portrait for Luxon Brown quote (Section 11) — replace with real portrait when available
- [ ] Real client quote for Luxon Brown (Section 11) — replace placeholder when available
- [ ] OG share image at 1200×630
- [ ] Internal route stubs needed for this page: `/pricing`, `/demo`, `/platform`, `/contact` (the contact page should accept a `?ref=luxon-brown` parameter for source tracking but doesn't need separate copy)

---

## Sections pending content (flag as TODO)

- [ ] Real Luxon Brown quote and portrait (Section 11)
- [ ] Verified benefit stats (Section 10) — confirm "40+ hrs," "$2,200," "3–7 leads," "100% compliance" claims with current data; adjust if needed
- [ ] Future revision (V2): consider adding deep-link "Learn more" CTAs in capability sections once supporting platform sub-pages exist
- [ ] Future revision (V2): build out `/case-studies/luxon-brown` and update the proof section CTA accordingly

---

## Build notes for Claude Code

- Route this page to `/platform/marketing-automation`
- Use exact copy verbatim — do not paraphrase
- Wrap key phrases in `<em className="font-serif italic">...</em>` per the typography rule (specified per H1/H2)
- Pillar section illustrations should be inline SVGs in JSX components, not external image files, so the hover interactions can be implemented with React state or CSS hover selectors
- Reuse the `<PillarSection>` component for Sections 4–8 — pass props for `number`, `title`, `body`, `included`, `illustration`, and `mirrored` (boolean for which side the visual sits)
- Reuse the homepage's button, eyebrow, and section-padding components
- The Blueprint section (9) has a single CTA button that links to `#` for V1 — track clicks via analytics so you have demand data before building the eventual lead gen landing page
- Anchor tags in Section 3 link to `#unified-data`, `#smart-triggers`, `#journey`, `#omnichannel`, `#compliance` respectively

---

*End of Marketing Automation page brief*
