# SuperSymm Homepage — Build Brief

**Page URL:** `/`
**Last updated:** May 1, 2026
**Status:** Ready for build
**Target word count:** ~950 words
**Audience:** Owners, partners, and operators at professional service firms (financial advisors, healthcare, legal, tax, B2B services)
**Primary conversion goal:** Pricing inquiry / strategy call booking
**Reference aesthetic:** [Pomeroy Agency](https://www.harmonyinthewild.com/pomeroy-agency) (boutique consultancy register, not SaaS feature page)

---

## How to use this brief

This document is structured for direct handoff to Claude Code or any AI build agent. Each section contains:

1. **Section spec** — name, ID, purpose, layout direction
2. **Final copy** — paste-ready, no editorial passes needed
3. **Image and animation direction** — either FPO references with sizing, or generation prompts for AI illustration tools
4. **Component notes** — interactive behavior, hover states, scroll triggers
5. **Technical implementation** — recommended HTML/CSS/JS approach where it matters

Build assumes Next.js / React with Tailwind, but markup is framework-agnostic. Animations should use Framer Motion for entrance transitions and Lottie for any decorative loops. Real product UI screenshots are noted with `[FPO: …]` tags wherever placeholders are needed.

---

## Brand foundation (apply throughout)

### Color tokens

```css
:root {
  /* Primary */
  --ss-purple: #6750A4;
  --ss-purple-dark: #43336D;
  --ss-navy: #22193B;
  --ss-pink: #E977C1;
  --ss-yellow: #D5F77C;

  /* Surface */
  --ss-white: #FFFFFF;
  --ss-bg-soft: #F1F0F8;
  --ss-bg-warm: #FAEEDA;

  /* Text */
  --ss-text-primary: #1F1E21;
  --ss-text-on-dark: #FFFFFF;
  --ss-text-muted: #5F5D66;

  /* Border */
  --ss-border-subtle: rgba(31, 30, 33, 0.08);
  --ss-border-on-dark: rgba(255, 255, 255, 0.12);

  /* Gradient (use sparingly) */
  --ss-gradient-hero: linear-gradient(135deg, #22193B 0%, #43336D 60%, #6750A4 100%);
}
```

### Typography

- **Display:** Inter Black (900) — H1 only, 64–80px
- **Headings:** Inter (600–700) — H2 48px, H3 28px, H4 22px
- **Body:** Roboto (400) — 18px, 1.6 line-height
- **Eyebrow / labels:** Roboto Mono or Inter Medium (500) — 13px, uppercase, 0.08em letter-spacing
- **All headings sentence case.** Never Title Case. Never ALL CAPS except eyebrow labels.

### Section rhythm

Sections alternate across three treatments — never more than two consecutive sections share a treatment:

- **Dark** — `--ss-navy` background, white text, yellow CTA
- **Light** — white background, navy text, purple CTA
- **Soft** — `--ss-bg-soft` background, navy text, purple CTA

### Spacing

- Section vertical padding: `clamp(80px, 10vw, 160px)` top and bottom
- Container max-width: 1200px, centered, 24px gutters
- Inter-element vertical rhythm uses 8px base unit (8, 16, 24, 32, 48, 64, 96)

### Motion principles

- Entrance: 600ms ease-out, 40px translate-Y, fade in from 0 to 1
- Scroll triggers fire when element is 20% in viewport
- Hover: 200ms ease, no scale beyond 1.02
- Avoid: parallax backgrounds, particle fields, gradient washes that move, glowing orbs

---

## Page structure

```
1. Navigation (sticky)
2. Hero — Dark
3. Industry-condition problem — Light
4. The intelligent system — Soft
5. Four practices — Light
6. The lead journey (Sarah) — Dark
7. The partnership — Light
8. Who we work with — Soft
9. Proof in practice — Light
10. Final invitation — Dark
11. Footer
```

---

## Section 1 — Navigation

**Layout:** Sticky top, transparent background until scroll past 80px, then `--ss-white` with subtle bottom border `--ss-border-subtle`.

**Structure:**

```
[SuperSymm wordmark + logomark]    Platform   Practices   Industries   About   |   Get pricing →
```

**Behavior:**
- Logo links to `/`
- Mobile: hamburger collapses Platform / Practices / Industries / About into a sheet
- "Get pricing" button is purple-filled, pill-shaped, persistent on mobile
- On dark sections (hero, lead journey, final invitation), nav inverts to white text with transparent background while in viewport

---

## Section 2 — Hero

**ID:** `#hero`
**Treatment:** Dark
**Background:** `--ss-navy` with a single subtle radial gradient from upper-right (10% opacity `--ss-purple` glow, no animation)
**Layout:** Two-column on desktop (60/40 split, copy left, visual right), stacked on tablet/mobile

### Copy

```
EYEBROW: Marketing operations, engineered.

H1: An intelligent marketing system
    that learns your business and runs it.

SUBHEAD:
SuperSymm connects strategy, execution, and growth into one engine —
built for regulated industries and run alongside our team.
You're not buying software. You're building a marketing function.

PRIMARY CTA: Get custom pricing →
SECONDARY CTA: See how it works

TRUST LINE (below CTAs, 14px muted):
Built for financial advisors, healthcare providers, legal professionals,
and the firms that hold them to a higher standard.
```

### Visual specifications (right column)

**[FPO: hero_dashboard.png — 720×540px]**

Replace with a real SuperSymm product screenshot when available. Recommended subject:

- A stylized SuperSymm dashboard showing one approval queue card in the center
- The card displays: sample LinkedIn post copy (3 lines, lorem-ipsum acceptable initially), a "Compliance reviewed ✓" badge, "Scheduled Tuesday 9:42am" timestamp, and "Approve / Edit / Decline" buttons
- Above the card, faint sibling cards visible (suggesting a queue of multiple items)
- Subtle floating layered effect: 3 cards staggered with low-opacity drop shadows, the front card crisp

**Animation (Lottie or Framer Motion):**

On entrance, cards stagger-fade in from 16px below over 800ms total (200ms delay between cards, 600ms each). Once loaded, **a subtle pulse** runs on the green compliance badge every 4 seconds — 2px scale, 400ms, ease-in-out. Nothing else moves.

**If no real product UI exists yet:** Use a simple SVG illustration of three stacked cards in `--ss-white` with `--ss-purple` outlines at low opacity, on the dark navy background. Each card shows abstract content blocks (no text needed). The front card has the compliance badge in `--ss-yellow`.

### Component notes

- H1 should break across two lines as written (`...marketing system` / `that learns your business and runs it.`). Force the line break with `<br/>` tags or non-breaking spaces. Never let the headline wrap to three lines on desktop.
- Primary CTA: `--ss-yellow` background, `--ss-navy` text, pill-shaped, 56px tall, 24px horizontal padding, 16px font weight 500
- Secondary CTA: transparent background, white text, no border, with arrow icon — text-link treatment, not button
- Trust line: `rgba(255,255,255,0.6)` text color, 14px, single line on desktop, wraps on mobile

---

## Section 3 — Industry-condition problem

**ID:** `#problem`
**Treatment:** Light
**Layout:** Asymmetric. Headline takes left two-thirds at top. Body copy and stat block sit in two columns below — copy at 50% width left, stat block at 33% width right with 16% empty negative space between them.

### Copy

```
EYEBROW: The state of professional services marketing.

H2: This isn't your problem alone.
    It's how marketing got built.

BODY (50% column, left):
The average professional services firm runs marketing across more than
a dozen disconnected tools. Less than 40% of the features in those tools
get used. Teams spend more time managing platforms than reaching customers.
And in regulated industries, every tool you add multiplies your compliance
surface area.

Marketing didn't become harder because the work got harder.
It became harder because the systems stopped talking to each other.

STAT BLOCK (33% column, right — three vertically stacked stats):

  12+
  Marketing tools the average firm runs
  Source: chiefmartec martech landscape

  <40%
  Of martech features actually used
  Source: Gartner martech survey

  6 hours
  Weekly time spent managing tools, not reaching customers
  Source: Wrike work management report
```

### Visual specifications

**No hero image.** This section is typographic. The asymmetry and the stat block are the visual.

Optional decorative element — a thin `--ss-pink` horizontal rule (1px, 80px wide) sitting above the H2, left-aligned. That's it.

### Component notes

- H2 uses Inter Black 900 at 56px desktop / 36px mobile, navy text
- Stat numbers in `--ss-purple`, Inter Black, 64px — these are the visual anchors
- Stat captions in 14px muted text, 1.5 line-height
- Source attributions in 12px, `--ss-text-muted`, italic
- ⚠️ Verify stats before launch. Replace any source that can't be confirmed with a working alternative or remove that stat. Acceptable to launch with two of three if the third can't be sourced.
- Stagger-fade entrance for the three stats on scroll trigger, 150ms apart

### SEO and accessibility

- Stat numbers wrapped in `<span aria-label="more than twelve">12+</span>` etc., for screen reader clarity
- All citations linked when possible to the original source; otherwise plain text

---

## Section 4 — The intelligent system

**ID:** `#system`
**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** Single column, centered, max-width 880px. Three principle blocks below the intro, each a card with light border on the soft background.

### Copy

```
EYEBROW: How it works.

H2: An intelligent system that unifies
    strategy, execution, and growth.

INTRO (centered, max-width 720px):
SuperSymm isn't another marketing platform. It's a connected engine
where business intelligence informs strategy, strategy informs execution,
and execution feeds back into intelligence. One brain. Every campaign.
Continuous improvement.

[Three principle cards, in a row on desktop, stacked on mobile]

────────────────────────────────────
PRINCIPLE 1
One intelligence engine
powers everything.

SuperSymm starts with deep understanding of your business — your buyers,
your differentiators, your market position, your compliance posture.
That intelligence runs through every piece of content, every campaign,
every channel. Generic platforms ask you to configure settings.
We learn your business and act on what we learn.
────────────────────────────────────
PRINCIPLE 2
Every component informs
the others.

SEO insights inform paid strategy. Paid performance reshapes content.
Email engagement adjusts lead scoring. Sales conversations surface
objections the next campaign answers. This isn't workflow automation —
it's connected intelligence that gets smarter with every campaign.
────────────────────────────────────
PRINCIPLE 3
A team behind the system.

Software runs the work. Strategists run the thinking.
You meet with our team to set direction, review what's working,
and adjust based on what we're learning in your market.
The system handles execution between meetings.
It's not DIY with extra steps. It's a marketing function
you don't have to staff.
────────────────────────────────────
```

### Visual specifications

**Recommended:** A single SVG diagram above the principle cards, centered, max-width 600px.

The diagram shows three nodes in a triangular arrangement labeled "Intelligence," "Execution," and "Optimization," connected by curved arrows that flow in a continuous cycle. A central dot labeled "Your business" sits at the centroid. Use `--ss-purple` for nodes and `--ss-pink` for arrows.

**Animation:** The arrows have a subtle dash-flow animation — `stroke-dasharray: 4 4` with `stroke-dashoffset` animating over 4 seconds, infinite, linear. This is the only animation in the section. It runs continuously and signals "this is always running."

```svg
<!-- Suggested structure for the diagram -->
<svg viewBox="0 0 600 360" width="100%" height="auto" role="img" aria-label="A circular flow showing intelligence informing execution, execution feeding optimization, and optimization improving intelligence">
  <!-- Three nodes positioned in a triangle -->
  <!-- Curved arrows between them with dash-flow animation -->
  <!-- Center dot labeled 'Your business' -->
</svg>
```

**If skipping the diagram for v1:** Use three principle cards alone, each with a small SVG icon at top:
- Principle 1: a brain outline (or a simple node with three radiating lines)
- Principle 2: three connected circles in a triangle
- Principle 3: two overlapping circles (one solid, one outlined) — representing the human/system pairing

Icons are 32×32px, `--ss-purple`, line-art style, 1.5px stroke. **Do not use generic Material or Heroicons** — these need to feel custom. If using a stock library, choose Phosphor Icons (Duotone) and recolor.

### Component notes

- Principle card: `--ss-white` background, 1px border `--ss-border-subtle`, 16px border-radius, 32px padding
- Principle label: 13px uppercase mono, `--ss-purple`, 0.08em letter-spacing
- Principle headline (3 lines): Inter Bold 24px, navy
- Principle body: 16px, 1.6 line-height, `--ss-text-primary`
- Cards have equal height — flexbox `align-items: stretch`, body copy fills remaining space
- Entrance: stagger-fade left to right, 200ms apart

---

## Section 5 — Four practices

**ID:** `#practices`
**Treatment:** Light
**Layout:** Asymmetric. Section heading takes left third. Four practice cards in a 2×2 grid take right two-thirds. On mobile, heading stacks above and grid becomes single column.

### Copy

```
EYEBROW: The platform.

H2: One system.
    Four practices.
    Connected by your business intelligence.

CLOSING LINE (below the grid, centered):
Each practice makes the others smarter. That's the system.
[link] Explore the platform →

──────────────────────────────────────────────────────────────────
PRACTICE 1
Business Intelligence Engine

The brain. SuperSymm learns your ICP, your differentiators,
and your compliance posture — then runs every campaign through
that lens. No generic templates. No configuration overhead.
[link] Learn more →
──────────────────────────────────────────────────────────────────
PRACTICE 2
Lead Generation

Captures, scores, and routes prospects against your specific ICP
in real time. Hot leads land in your inbox with full context —
what they engaged with, when, and why they're ready.
[link] See how it works →
──────────────────────────────────────────────────────────────────
PRACTICE 3
Marketing Automation

One approval, content distributed across LinkedIn, email, ads,
and your blog. Built-in compliance archiving, approval workflows,
and audit trails for regulated industries.
[link] Explore automation →
──────────────────────────────────────────────────────────────────
PRACTICE 4
Performance Optimization

A/B tests run themselves. Budget shifts toward what's working.
Performance data feeds back into the intelligence engine —
so the system gets smarter every month.
[link] See optimization →
──────────────────────────────────────────────────────────────────
```

### Visual specifications

Each practice card has a small **custom illustration** at the top — 64×64px, line-art, `--ss-navy` strokes on `--ss-white` cards, with one accent color per illustration (purple, pink, yellow, or green-teal — one of each across the four).

**Illustration prompts (for use with an AI illustration generator like Recraft, Midjourney with `--style raw --niji 0`, or commission to a freelance illustrator):**

```
Practice 1 (Business Intelligence Engine):
"A minimalist line-art icon: a stylized brain made of three connected nodes
forming a triangular network. 64x64px, monochrome navy line strokes (1.5px),
single purple accent dot at the center. Modern editorial style, no shading,
no gradients. Sharp geometric shapes. Reference style: Stripe documentation icons."

Practice 2 (Lead Generation):
"A minimalist line-art icon: a funnel made of three horizontal lines getting
shorter, with three small dots above representing prospects. The bottom dot
is filled in pink. 64x64px, navy strokes, single pink accent. Editorial style."

Practice 3 (Marketing Automation):
"A minimalist line-art icon: four small squares connected by lines to a central
hub. Each square represents a channel. One square has a small yellow checkmark.
64x64px, navy strokes, single yellow accent. Editorial style."

Practice 4 (Performance Optimization):
"A minimalist line-art icon: a simple line graph trending upward, with a circular
arrow looping back from the end of the graph to the start. 64x64px, navy strokes,
single teal/green accent on the loop. Editorial style."
```

**Animation:** On hover, each card lifts 4px (translateY) with a 200ms ease, and the illustration's accent color subtly increases in saturation. No card rotation, no card flip, no expanding.

### Component notes

- Practice card: white background, 1px border `--ss-border-subtle`, 16px border-radius, 32px padding
- Cards in 2×2 grid have 24px gap
- Practice number label (PRACTICE 1, etc): mono uppercase 12px, muted
- Practice title: Inter Bold 22px, navy
- Practice body: 16px, 1.6 line-height
- Inline link: `--ss-purple` text, no underline at rest, underline on hover
- Closing line below grid: 18px, navy, with `--ss-purple` link inline

---

## Section 6 — The lead journey (Sarah)

**ID:** `#journey`
**Treatment:** Dark
**Layout:** Full-bleed within container. Horizontal timeline on desktop (4 stages left-to-right), vertical timeline on mobile.
**This is the visual centerpiece of the page.** Spend disproportionate design time here.

### Copy

```
EYEBROW: How a lead actually moves through the system.

H2: From cold visitor to qualified lead — without anything
    falling through the cracks.

INTRO (centered, max-width 700px):
Most marketing platforms automate tasks. SuperSymm orchestrates
relationships. Here's what one prospect's journey looks like
from first touch to qualified hand-off.

[HORIZONTAL TIMELINE — 4 stages]

────────────────────────────────────────────────────────────
DAY 1                    DAY 3                    DAY 7                    DAY 8
The first touch          The follow-through       The signal               The handoff
────────────────────────────────────────────────────────────

DAY 1 — The first touch
PROSPECT: Sarah, a CFO at a 30-person services firm, sees a
          SuperSymm-generated LinkedIn post in her feed.
          She clicks through to the article.
SYSTEM:   Captures the visit. Tags Sarah as a new prospect.
          Adds 10 points to her score.

DAY 3 — The follow-through
PROSPECT: Sarah opens the follow-up email and clicks to a
          related blog article.
SYSTEM:   Tracks the engagement. Adds 15 points.
          Moves Sarah from cold to warm. Adjusts the
          next email in her sequence based on what she clicked.

DAY 7 — The signal
PROSPECT: Sarah visits the pricing page. Downloads a case study.
SYSTEM:   Adds 30 points. Sarah crosses the 50-point threshold.
          Sales gets an instant alert with her full context:
          "Sarah, CFO, viewed pricing twice this week,
          downloaded the [industry] case study, fits ICP."

DAY 8 — The handoff
PROSPECT: Sales reaches out while Sarah is still actively researching.
          The conversation starts where her interest started —
          not with cold introductions.
SYSTEM:   Logs the outreach in CRM. Pauses the automated
          sequence. Hands the relationship to a human.

CLOSING LINE (below the timeline, centered, italicized):
"Without SuperSymm, Sarah is forgotten between Day 1 and Day 7.
With SuperSymm, every signal is tracked. The timing is right.
The conversation is real."

CTA: See the system in action →
```

### Visual specifications

**[FPO: lead_journey_timeline_animation.json — Lottie file, 1100×400px desktop, 380×800px mobile]**

This is the section that needs the most thoughtful visual execution. The recommended approach:

**Desktop horizontal timeline:**
- A horizontal line runs across the section, in `--ss-pink`, 2px stroke
- Four nodes sit on the line at equal intervals, each labeled DAY 1, DAY 3, DAY 7, DAY 8
- Above each node: an icon representing the prospect's action (clicking, opening email, viewing pricing, receiving call) — line art, white strokes
- Below each node: an icon representing the system's response (capturing, scoring, alerting, logging) — line art, white strokes with `--ss-yellow` highlights
- A small avatar marker (a circle with "S" inside, `--ss-pink` background) animates along the line as the user scrolls or as the section auto-plays

**Animation behavior:**
- On scroll into view, the line draws itself left to right over 1.2 seconds
- Each node fades in as the line passes it (staggered 300ms)
- After the line completes, the avatar marker travels along the line over 8 seconds, pausing 1.5 seconds at each node
- At each pause, the corresponding text block (above) gets a subtle highlight border
- The cycle restarts after a 4-second pause if the section is still in view
- Respects `prefers-reduced-motion: reduce` — falls back to all stages visible at once, no animation

**Implementation options:**
1. **Lottie** — commission or build the animation in After Effects, export as JSON, render with `lottie-react`. Highest quality.
2. **Framer Motion + SVG** — code-based, harder to refine but no design dependency. The line uses `motion.path` with `pathLength` animation. The avatar uses `motion.circle` with `motionPath` from Framer Motion.
3. **GSAP MotionPath plugin** — most flexible, requires GSAP license check.

**For v1 launch (if animation isn't ready):** Use a static SVG with the line, four nodes, and the avatar positioned at Day 8 (the end of the journey, suggesting completion). Add a small caption below: "An animated walkthrough is coming — for now, here's the journey at a glance."

### Component notes

- Section padding-block: 160px top, 120px bottom (this section earns extra room)
- Timeline content area: max-width 1100px, centered
- On mobile: timeline rotates 90° to vertical. Line runs top-to-bottom. Each stage stacks. Avatar travels downward.
- Day labels: Inter Bold 14px uppercase, white, 0.08em letter-spacing
- Stage titles ("The first touch" etc): Inter Bold 22px, white
- Prospect / System body copy: 15px, line-height 1.6
  - PROSPECT lines: white text, normal weight
  - SYSTEM lines: `--ss-yellow` text or white text with `[SYSTEM]` label in `--ss-yellow`
- Closing italic line: 20px, `rgba(255,255,255,0.85)`, serif optional (use a system serif like Georgia for emphasis)
- CTA below: yellow pill button on dark, same as hero

---

## Section 7 — The partnership

**ID:** `#partnership`
**Treatment:** Light
**Layout:** Two-column on desktop. Headline + body copy left (60%), three "what this isn't" cards right (40%, stacked vertically).

### Copy

```
EYEBROW: This isn't software you log into.

H2: It's a partnership you run alongside.

BODY:
Most marketing platforms drop a dashboard in your lap and call it done.
SuperSymm doesn't.

You meet with our strategists every quarter to set direction.
We review what's converting and what's not. We adjust the system
based on what we're learning in your market and across our portfolio.

Between meetings, the platform handles the day-to-day execution —
content creation, scheduling, lead routing, optimization,
compliance archiving — and our team is on call when you need
a real human.

You get the leverage of automation, the judgment of a senior marketer,
and the discipline of a system that learns. Without hiring any of it.

[Three small cards, right column]

────────────────────────────────────
NOT DIY.
You don't write the prompts.
We do.
────────────────────────────────────
NOT AN AGENCY.
Same-day turnarounds.
No retainer hostage situation.
────────────────────────────────────
NOT JUST SOFTWARE.
Real strategists. Real reviews.
Real accountability.
────────────────────────────────────
```

### Visual specifications

No hero image. The asymmetric layout and the three contrast cards are the visual.

**Optional accent:** A small purple-to-pink gradient line (2px, 60px wide) above the H2, signaling continuity with the brand's accent colors without being decorative.

### Component notes

- "What this isn't" cards: `--ss-bg-soft` background, no border, 24px padding, 12px border-radius
- Card label ("NOT DIY"): Inter Bold 14px uppercase, `--ss-pink`, 0.08em letter-spacing
- Card body: 16px, navy, 1.5 line-height
- 16px gap between stacked cards
- On mobile: cards convert to a 3-column row at narrow widths if needed, otherwise stack

---

## Section 8 — Who we work with

**ID:** `#industries`
**Treatment:** Soft
**Layout:** Three industry cards in a row on desktop, single column on mobile. Each card is the same height with consistent structure.

### Copy

```
EYEBROW: Built for the firms that hold themselves to a higher standard.

H2: Industries we serve.

INTRO (centered, max-width 680px):
SuperSymm is built for professional services firms where marketing matters
but compliance is non-negotiable. We started with the most regulated industries.
Now we serve any firm that wants the same discipline applied to their growth.

[Three cards in a row]

──────────────────────────────────────────
FINANCIAL ADVISORS
[Compliance badge: SEC / FINRA]

Generate qualified leads while meeting SEC Rule 206(4)-1 requirements.
Built-in 5-year archiving, approval workflows, and audit trails.

[link] Learn more →
──────────────────────────────────────────
HEALTHCARE & LEGAL
[Compliance badge: HIPAA / Bar Compliant]

Patient and client acquisition with HIPAA-compliant communications,
state bar advertising rules, and encrypted workflows where required.

[link] Learn more →
──────────────────────────────────────────
PROFESSIONAL SERVICES
[Badge: Multi-sector]

Tax, accounting, consulting, and B2B services. Same intelligent system,
adapted to your sector's standards and your firm's compliance posture.

[link] Learn more →
──────────────────────────────────────────

CLOSING LINE (centered below the grid):
Same system. Different standards. Custom to your sector.
```

### Visual specifications

Each card has a small abstract industry illustration at the top — 80×80px, simple geometric shapes, two-color (navy + one accent).

**Illustration prompts:**

```
Financial Advisors:
"Minimalist geometric icon: stacked rectangular shapes suggesting a chart
or document, with a small compliance shield offset to the right.
80x80px, navy strokes (1.5px), purple accent on the shield only.
Editorial style, sharp angles, no shading."

Healthcare & Legal:
"Minimalist geometric icon: a circular shape divided into two quadrants
suggesting paired functions (medical/legal). One quadrant has a small
plus sign, the other has a small balance scale. 80x80px, navy strokes,
pink accent on connecting lines. Editorial style."

Professional Services:
"Minimalist geometric icon: a rounded square divided into four equal
quadrants, each with a different small abstract shape (circle, triangle,
hexagon, line). 80x80px, navy strokes, yellow accent on one quadrant.
Editorial style, suggesting variety unified by structure."
```

**Compliance badge specs:**
- Small pill: 20px tall, 8px horizontal padding
- Background: `--ss-purple` at 8% opacity
- Border: 1px `--ss-purple` at 24% opacity
- Text: 11px Inter Bold, `--ss-purple`, uppercase

### Component notes

- Card: `--ss-white` background, 1px border `--ss-border-subtle`, 24px border-radius, 32px padding
- Industry name: Inter Bold 20px, navy, uppercase, 0.04em letter-spacing
- Body: 15px, 1.5 line-height
- Card hover: 4px lift, 200ms ease

---

## Section 9 — Proof in practice

**ID:** `#proof`
**Treatment:** Light
**Layout:** Two-column. Headline + intro left (40%), client snapshots stacked right (60%).

### Copy

```
EYEBROW: What this looks like in the field.

H2: Real campaigns.
    Real results.

INTRO (left column, below H2):
We built SuperSymm because we run it ourselves.
Here's what early engagements have produced.

[Right column — client snapshot cards]

────────────────────────────────────────────
ENGAGEMENT 1 [if available — otherwise show placeholder]

Sector: Wealth Management Advisory
Engagement: Multi-channel lead generation campaign,
            persona-targeted Meta ads, custom landing
            funnels, automated nurture sequences

Outcome highlights:
• [X] qualified leads generated in 90 days
• [X]% reduction in cost-per-lead vs. previous agency
• Compliance review time reduced from [X] hours/week to [Y] minutes

"[Pull quote — when available]"
— [Title], [Firm]
────────────────────────────────────────────
ENGAGEMENT 2

[Same structure — populate when second case study is ready]
────────────────────────────────────────────

PLACEHOLDER (until both engagements are ready):
We're publishing our first detailed case studies in Q3.
Want to see live engagement metrics during a strategy call?
[link] Book a 15-minute walkthrough →
```

### Visual specifications

**[FPO: engagement_screenshot_1.png — 480×320px]**
**[FPO: engagement_screenshot_2.png — 480×320px]**

Each engagement card pairs a small product screenshot (a Meta Ads dashboard, a campaign performance graph, or a SuperSymm metrics view) with the text. Blur or anonymize any identifying information. The screenshot sits at the top of the card, full-width within card padding.

**For initial launch (no engagements live):** Use the placeholder copy and a single decorative element — a stylized line graph SVG showing an upward trend, in `--ss-purple` line on a soft background. Replace with real screenshots as engagements complete.

### Component notes

- Engagement card: `--ss-white` background, 1px border `--ss-border-subtle`, 16px border-radius, 32px padding
- Section field labels (Sector, Engagement): 13px uppercase mono, muted
- Outcome bullets: 16px, 1.6 line-height, navy
- Pull quote: 18px, italic, navy, with a left border accent in `--ss-pink`, 4px wide
- 24px gap between stacked engagement cards

---

## Section 10 — Final invitation

**ID:** `#cta`
**Treatment:** Dark
**Layout:** Centered, max-width 720px, generous vertical padding (160px+).

### Copy

```
H2 (centered):
You didn't start your firm
to manage marketing tools.

BODY (centered, 18px):
You started it to do the work that matters — for clients, for cases,
for outcomes that take real expertise. Marketing should support that work,
not compete with it for your time and attention.

Let's build the system that runs alongside you, so the work that matters
gets the time it deserves.

PRIMARY CTA: Start a conversation →
SECONDARY CTA: See the system in action

PRICING LINE (below CTAs, smaller text):
Engagement pricing is custom to your firm and goals.
We'll quote you a number after one call.

TRUST LINE (smallest text):
Month-to-month after onboarding · Quarterly strategy reviews ·
Compliance archiving included · Real humans, real accountability
```

### Visual specifications

**Background treatment:**
A single large abstract SVG element behind the copy — a slow-rotating geometric form (octagonal wireframe matching the SuperSymm logomark, scaled up to 600px, at 8% opacity, in `--ss-pink`). The form rotates 360° over 60 seconds, infinite, linear. This is the only "ambient" animation on the page and it's deliberately slow enough to feel meditative rather than distracting.

**Implementation:**
```html
<svg class="cta-bg" viewBox="0 0 600 600" aria-hidden="true">
  <!-- Octagonal wireframe -->
</svg>
```

```css
.cta-bg {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  animation: slow-rotate 60s linear infinite;
}

@keyframes slow-rotate {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .cta-bg { animation: none; }
}
```

### Component notes

- H2: Inter Black 56px desktop / 36px mobile, white, sentence case
- Body copy: 18px, white at 88% opacity, 1.7 line-height
- Primary CTA: yellow pill on navy, navy text, 56px tall
- Secondary CTA: text-link with arrow, white at 80% opacity
- Pricing line: 14px, white at 60% opacity, italic
- Trust line: 13px, white at 50% opacity, separated by middle dots `·`

---

## Section 11 — Footer

**Treatment:** Soft
**Layout:** 4-column on desktop, stacked on mobile.

### Structure

```
COL 1: SuperSymm wordmark + logomark + tagline
       "An intelligent marketing system, run alongside you."

COL 2: Platform
       - Business Intelligence
       - Lead Generation
       - Marketing Automation
       - Performance Optimization

COL 3: Industries
       - Financial Advisors
       - Healthcare & Legal
       - Professional Services
       - All industries

COL 4: Company
       - About
       - Pricing
       - Contact
       - Book a call

BOTTOM BAR:
© 2026 SuperSymm · Privacy · Terms · Compliance Information
```

---

## Global behaviors

### Scroll behavior

- Smooth scrolling between anchored sections (`scroll-behavior: smooth` on `<html>`)
- Section reveal: 600ms fade-up entrance triggered when section enters 20% viewport
- Stagger any grouped child elements (cards, stats, principles) at 150ms intervals
- Respects `prefers-reduced-motion: reduce` — disables all entrance animations and the dash-flow / rotation loops

### Form / CTA behavior

- All "Get pricing" CTAs route to `/pricing-inquiry` (a Calendly or HubSpot meeting form)
- All "See the system in action" CTAs route to `/demo` (a standard demo booking flow)
- All "Learn more" inline links route to deep pages (`/platform`, `/industries/financial-advisors`, etc.) — these can be stubbed initially
- Phone number (when added): use `tel:` link with click tracking event

### Performance budget

- Largest Contentful Paint < 2.5s on 4G
- Total JS bundle (excluding Lottie animations) < 150KB gzipped
- Hero image / animation lazy-loaded if below the fold; eagerly loaded if in initial viewport
- Lottie animations lazy-loaded as user scrolls toward their section

### Accessibility

- All interactive elements have visible focus rings (`outline: 2px solid --ss-purple; outline-offset: 4px`)
- All images have meaningful `alt` text
- Animation respects `prefers-reduced-motion`
- Color contrast meets WCAG AA: navy on white, white on navy, navy on soft-purple all pass; verify yellow CTA text meets AA at 14px+ (it does for large text)
- Heading hierarchy is sequential: one H1, multiple H2s, H3s only inside H2 sections

---

## SEO

### Title tag (60 chars max)
```
Marketing System for Professional Services | SuperSymm
```

### Meta description (155 chars max)
```
SuperSymm is an intelligent marketing system run alongside our team — built for regulated industries. Strategy, execution, and growth, unified.
```

### Schema markup
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SuperSymm",
  "description": "An intelligent marketing system that learns your business and runs it. Built for regulated industries and run alongside our team.",
  "url": "https://supersymm.com",
  "areaServed": "United States",
  "serviceType": "Marketing automation and strategy"
}
```

(Use `ProfessionalService` rather than `SoftwareApplication` to match the boutique consultancy positioning.)

### Open Graph
```html
<meta property="og:title" content="An intelligent marketing system that learns your business and runs it." />
<meta property="og:description" content="SuperSymm connects strategy, execution, and growth into one engine — built for regulated industries and run alongside our team." />
<meta property="og:image" content="/og-image-1200x630.png" />
<meta property="og:type" content="website" />
```

OG image should match the hero: navy background, the H1 wrapped to two lines in white, SuperSymm wordmark in upper-left, yellow accent dot. 1200×630px PNG.

---

## Asset checklist

Before launch, gather or generate:

- [ ] Hero product UI screenshot or stylized stand-in (Section 2)
- [ ] Three principle icons OR the central system diagram (Section 4)
- [ ] Four practice illustrations (Section 5)
- [ ] Lead journey timeline animation — Lottie or coded SVG (Section 6)
- [ ] Three industry illustrations + compliance badges (Section 8)
- [ ] Two engagement screenshot crops, anonymized (Section 9)
- [ ] Octagonal logomark SVG for ambient background (Section 10)
- [ ] OG share image at 1200×630
- [ ] Favicon set (16, 32, 192, 512)
- [ ] Verified stat sources (Section 3) — replace any unverifiable
- [ ] Internal route stubs: `/pricing-inquiry`, `/demo`, `/platform/*`, `/industries/*`, `/about`, `/pricing`, `/contact`

---

## Build sequence (recommended)

1. **Foundation** — set up Tailwind config with the color tokens, typography scale, and section padding utilities
2. **Skeleton** — build all sections with placeholder copy, no images, no animations. Verify rhythm and spacing.
3. **Real copy** — paste in the copy from this brief verbatim
4. **Static visuals** — add icon placeholders and FPO image blocks
5. **Animations** — Framer Motion entrance animations first, then Lottie for hero and lead journey
6. **Polish** — hover states, focus rings, mobile breakpoints
7. **Accessibility audit** — keyboard navigation, screen reader test, motion preference test
8. **Performance audit** — Lighthouse score, image optimization, lazy loading
9. **Real assets swap** — replace FPO images with finished illustrations and real screenshots as they're ready

---

## Total word count

Approximately 950 words across all visible copy. Hero, problem, intelligent system, four practices, lead journey, partnership, industries, proof, and final CTA combined. Down from the original brief's 2,490.

---

**End of brief.**
