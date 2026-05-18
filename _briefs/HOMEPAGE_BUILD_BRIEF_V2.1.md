# SuperSymm Homepage — Build Brief V2.1

**Page URL:** `/v2`
**Version:** V2.1 — Restructured for partnership and services depth
**Last updated:** May 1, 2026
**Status:** Ready for build (updates V2)
**Target word count:** ~1,400 words
**Audience:** Owners, partners, and operators at small-to-medium professional service firms
**Primary conversion goal:** Pricing inquiry / strategy call booking

---

## What changed from V2

This brief preserves V2's visual approach (animated gradient hero, Newsreader italic accents, dark/light alternation, Framer Motion stagger animations) while restructuring the page around a clearer narrative arc:

1. **Hero refined** — keeps the "Connected Marketing Creates Growth" promise, drops the long supporting paragraph
2. **Problem section restructured** — single intro statement plus a new **scroll-driven** three-pillar layout where the visual on the right changes to highlight the active pillar (Disconnected Execution, Inconsistent Brand, No Intelligence). Removes the separate "this isn't a tool problem" closer.
3. **Platform section repositioned** — opens with "Your Entire Marketing Operation. Fully Connected." and uses a horizontal animated diagram showing the feedback loop. Three principles preserved with simpler language.
4. **Foundation section added** — "Build a Foundation. Enterprise marketing for everyone." reframes the four practices as the foundation tier.
5. **Sarah journey preserved** — pulled from earlier execution with the animated line treatment Chris approved.
6. **How we work with you section added** — new section explaining the not-DIY, partner-led model with a 5-step horizontal process visualization.
7. **Industries kept** — uses V2's "Built for Professional Service Firms Serious About Growth" headline and 5-card layout.
8. **Services section added** — new asymmetric expandable section showcasing 7 service capabilities (Research, Persona, Channel Strategy, SEO, Paid, Social, Website).
9. **Final invitation rewritten** — emotion-led, no pricing detail.

---

## Positioning anchor

Marketing fails because nothing connects. SuperSymm is the connected system — built and run by experts, with you in the room.

This isn't software you log into alone. It isn't an agency on retainer. It's a marketing function you don't have to staff.

---

## SEO Specifications

**Title tag (60 chars):**
```
Connected Marketing System | SuperSymm
```

**Meta description (155 chars):**
```
SuperSymm unifies strategy, execution, and growth into one connected marketing system — built for professional service firms and run alongside our team.
```

**H1:** Connected Marketing Creates Growth
**Primary keyword:** Connected Marketing System
**Secondary keywords:** Marketing automation for professional services · Intelligent marketing system · Lead generation automation · Multi-channel marketing operations

**Schema markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SuperSymm Marketing",
  "description": "An intelligent marketing system that unifies strategy, execution, and growth — built for professional service firms.",
  "url": "https://supersymm.com",
  "areaServed": "United States",
  "serviceType": "Marketing operations and strategy"
}
```

(Use `ProfessionalService` rather than `SoftwareApplication` to match the partnership positioning.)

**Open Graph:**
```html
<meta property="og:title" content="Connected Marketing Creates Growth — SuperSymm" />
<meta property="og:description" content="An intelligent marketing system that unifies strategy, execution, and growth — built for professional service firms and run alongside our team." />
<meta property="og:image" content="/og-image-1200x630.png" />
<meta property="og:type" content="website" />
```

---

## Page structure overview

```
1. HERO                            Dark      Animated gradient + floating logomark
2. THE PROBLEM                     Light     Scroll-driven 3-pillar with sticky visual
3. THE PLATFORM                    Dark      Animated horizontal feedback loop + 3 principles
4. THE FOUNDATION                  Light     2×2 practice grid
5. THE LEAD JOURNEY (Sarah)        Dark      Animated horizontal timeline
6. HOW WE WORK WITH YOU            Light     5-step horizontal process
7. INDUSTRIES                      Light     5 industry cards
8. SERVICES                        Light     7 expandable asymmetric cards
9. FINAL INVITATION                Dark      Centered, emotion-led
10. FOOTER                         Soft      4-column
```

---

## Brand foundation (apply throughout)

### Color tokens (carry forward from V2)

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

  --ss-gradient-hero-1: linear-gradient(93deg, #22193B 22%, #E977C1 124%);
  --ss-gradient-hero-2: linear-gradient(110deg, #1B0A20 10%, #6750A4 120%);
}
```

### Typography

- **Display H1:** Inter Black (900), 64–80px, navy or white
- **Display accent:** Newsreader serif italic, same size as surrounding H1, used to italicize key phrases (`Connected`, `Foundation`, `Intelligent System`)
- **H2:** Inter Bold (700), 48px, sentence case
- **H3:** Inter Bold (700), 28px
- **H4:** Inter Bold (600), 22px
- **Body:** Roboto (400), 18px, line-height 1.6
- **Eyebrow / labels:** Inter Medium (500), 13px uppercase, 0.08em letter-spacing

**Italic accent rule:** When a key phrase needs visual emphasis in a headline, wrap in Newsreader italic to create a typographic shift. Use sparingly — once per major heading max.

```html
<h1>
  <em class="font-serif italic">Connected</em> Marketing<br/>
  Creates Growth
</h1>
```

### Section rhythm

Sections alternate to avoid visual fatigue. No more than two consecutive sections share a treatment.

- **Dark** — `--ss-navy` or `--ss-navy-deep` background, white text, yellow CTA
- **Light** — white background, navy text, purple CTA
- **Soft** — `--ss-bg-soft` background, navy text, purple CTA

### Spacing

- Section vertical padding: `clamp(96px, 10vw, 160px)` top and bottom
- Container max-width: 1200px, centered, 24px gutters
- Inter-element vertical rhythm uses 8px base unit (8, 16, 24, 32, 48, 64, 96)

### Motion principles

- Section entrance: 600ms ease-out, 32px translate-Y, fade in from 0 to 1
- Scroll triggers fire when section enters 20% of viewport
- Card hover: translateY -4px, 200ms ease, no scaling
- Stagger children: 120ms apart unless otherwise specified
- Always wrap with `useReducedMotion()` from Framer Motion — disable all entrance animations and continuous loops when motion is reduced

---

## Section 1 — Hero

**ID:** `#hero`
**Treatment:** Dark with animated gradient
**Layout:** Centered single column on desktop, max-width 880px

### Background animation (preserve from V2)

- **Gradient:** CSS keyframes slowly shift between `--ss-gradient-hero-1` and `--ss-gradient-hero-2`, 8s infinite alternate ease-in-out
- **Logomark watermark:** `logo-simple.png`, absolute position centered-right, 6% opacity, 600×600px, two simultaneous Framer Motion animations:
  - Rotation: 0→360deg, 90s linear infinite
  - Float: y [0, -24, 0], 7s ease-in-out infinite

```tsx
// Hero background structure
<section className="hero-section">
  <div className="hero-gradient" /> {/* animated gradient */}
  <motion.img
    src="/logo-simple.png"
    className="hero-logomark"
    animate={prefersReduced ? {} : {
      rotate: 360,
      y: [0, -24, 0]
    }}
    transition={{
      rotate: { duration: 90, ease: 'linear', repeat: Infinity },
      y: { duration: 7, ease: 'easeInOut', repeat: Infinity }
    }}
  />
  <div className="hero-content">{/* copy */}</div>
</section>
```

### Copy

```
EYEBROW: SuperSymm Marketing

H1: Connected Marketing
    Creates Growth

[Wrap "Connected" in Newsreader italic — see typography rules]

SUBHEAD:
An intelligent marketing system that unifies strategy, execution, and growth.
SuperSymm eliminates fragmentation, simplifies complexity, and turns marketing
into consistent qualified leads and proven ROI.

PRIMARY CTA: Get Custom Pricing →   (routes to /pricing)
SECONDARY CTA: See How It Works     (routes to /platform)

TRUST LINE (below CTAs, 14px, white at 60% opacity):
Trusted by financial advisors, healthcare providers, and professional service firms
```

### Component notes

- H1 forces a line break between "Marketing" and "Creates Growth" (use `<br/>` on desktop, allow natural wrap on mobile)
- Primary CTA: `--ss-yellow` background, `--ss-navy` text, pill-shaped, 56px tall, 24px horizontal padding
- Secondary CTA: transparent background, white text, no border, with arrow icon
- Trust line wraps on mobile

---

## Section 2 — The Problem (scroll-driven)

**ID:** `#problem`
**Treatment:** Light (white background)
**Layout:** **Two-column with sticky right visual.** Left column scrolls through 3 pillar text blocks. Right column has a sticky visual that swaps as the user scrolls past each pillar.

This is the new pattern Chris specified — modeled on the V1 brief's "platform" interaction but applied to the problem.

### Section intro (full-width above the sticky layout)

```
H2: Most Businesses Are Running Marketing
    Without a Strategy

[Wrap "Without a Strategy" in Newsreader italic]

INTRO (centered, max-width 720px):
Your marketing isn't failing because you're not doing enough.
It's failing because nothing connects. Fragmented execution, inconsistent
messaging, and disconnected data create complexity that kills growth —
no matter how many hours you put in.
```

### Sticky scroll layout

After the intro, the layout splits:

- **Left column (50%):** Three pillar blocks stacked vertically with generous spacing between each (`min-height: 80vh` each so they each occupy roughly one screen as the user scrolls)
- **Right column (50%):** Sticky container that holds the active pillar's illustration. Updates as the user scrolls through each pillar.

### Pillar 1 — Disconnected Execution

```
EYEBROW: 01 — Disconnected Execution

H3: Marketing runs in silos.
    Nothing informs anything else.

BODY:
Your SEO finds winning keywords but paid media never sees them.
Your ads surface high-intent audiences but content strategy ignores them.
Email engagement happens but social media runs a different message entirely.
Sales conversations surface objections but marketing never learns from them.

Every channel works independently. Insights stay trapped.
Opportunities slip through the gaps.
```

### Pillar 2 — Inconsistent Brand Experience

```
EYEBROW: 02 — Inconsistent Brand

H3: Every touchpoint tells
    a different story.

BODY:
Brand voice sounds confident on LinkedIn, generic on the blog, salesy in ads.
Email promises expertise, but social posts feel improvised.
Prospects see one value proposition on the website, another in the pitch deck,
and a third when they finally talk to your team.

There's no single source of truth for what you stand for.
And prospects feel that confusion before they ever take a meeting.
```

### Pillar 3 — No Intelligence Layer

```
EYEBROW: 03 — No Intelligence Layer

H3: Tactics without context.
    Activity without outcomes.

BODY:
Content gets created without understanding your buyers, your competitors,
or your market position. Campaigns launch without knowing what differentiates you.
Messaging comes from generic templates instead of your actual value.

You're "doing marketing" but there's no intelligence guiding what or why.
Marketing that looks busy but doesn't drive growth.
```

### Right-column visual (sticky, swaps with active pillar)

**[FPO: problem_pillar_1.svg | problem_pillar_2.svg | problem_pillar_3.svg — each 480×480px]**

**Visual concept for each:**

**Pillar 1 (Disconnected Execution):** A grid of 6 small disconnected squares scattered across the canvas, each in a different position. No lines between them. Each square represents a marketing channel (SEO, paid, content, email, social, sales). They float independently. As the pillar becomes active, the squares pulse subtly but never connect.

**Pillar 2 (Inconsistent Brand):** Three overlapping speech bubbles of different shapes and styles, each in a different color and font weight. They overlap awkwardly without aligning. Suggests the same business speaking with three different voices.

**Pillar 3 (No Intelligence Layer):** A network diagram with all nodes present but the central "brain" node missing — visible as a dashed empty circle in the center. Lines extend outward to the surrounding nodes but they have nowhere to converge.

**Implementation approach:**

```tsx
// Sticky scroll container with scroll-triggered visual swap
const [activePillar, setActivePillar] = useState(0);

// Use Framer Motion's useScroll + useTransform, or Intersection Observer
// to detect which pillar is in view and update activePillar (0, 1, or 2)

<div className="problem-grid">
  <div className="problem-pillars">
    {pillars.map((pillar, i) => (
      <div
        key={i}
        ref={pillarRefs[i]}
        className="pillar-block"
        onViewportEnter={() => setActivePillar(i)}
      >
        {/* pillar copy */}
      </div>
    ))}
  </div>

  <div className="problem-visual-sticky">
    <AnimatePresence mode="wait">
      <motion.img
        key={activePillar}
        src={`/problem-pillar-${activePillar + 1}.svg`}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>
  </div>
</div>
```

**CSS:**
```css
.problem-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

.pillar-block {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.problem-visual-sticky {
  position: sticky;
  top: 20vh;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .problem-grid { grid-template-columns: 1fr; }
  .problem-visual-sticky { position: static; height: auto; }
  /* On mobile, place visual above each pillar block instead */
}
```

### Mobile fallback

On mobile, drop the sticky pattern entirely. Each pillar block stacks vertically with its illustration above the copy. No scroll-driven swap needed.

### Component notes

- Eyebrow numbers (01, 02, 03): `--ss-purple`, mono font, 14px
- Pillar H3: 32px Inter Bold, navy, max two lines
- Body copy: 18px, 1.6 line-height
- Spacing between pillars in left column: 120px desktop, 80px mobile
- Section closes naturally after Pillar 3 — no separate transition copy needed (the next section's headline does that work)

---

## Section 3 — The Platform

**ID:** `#platform`
**Treatment:** Dark (`--ss-navy`)
**Layout:** Intro centered, full-width animated diagram, then 3 principle cards in a row

### Copy

```
EYEBROW: The Platform

H2: Your Entire Marketing Operation.
    Fully Connected.

[Wrap "Fully Connected" in Newsreader italic]

INTRO (centered, max-width 800px):
SuperSymm isn't another marketing platform. It's built for small to medium
businesses to create a connected platform where business intelligence informs
strategy, strategy informs execution, and execution feeds back into intelligence.

One brain. Every interaction. Continuous improvement.
```

### Animated horizontal feedback loop (centerpiece)

**[FPO: platform_feedback_loop.svg — 1100×320px desktop, 380×600px mobile]**

**Concept:**
A horizontal flow on desktop showing four nodes connected by arrows, with a continuous loop arrow returning from the last node back to the first.

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ INTELLIGENCE │ →  │   STRATEGY   │ →  │  EXECUTION   │ →  │ OPTIMIZATION │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
       ↑                                                              │
       └──────────────────── learning loop ────────────────────────────┘
```

**Visual specifications:**
- Each node is a rounded rectangle, 200×120px, with a 1px white border at 20% opacity
- Inside each node: an icon (line-art, 32×32px) and the label
- Connecting arrows in `--ss-pink`, 2px stroke, with arrowheads
- The "learning loop" return arrow curves below the row, also `--ss-pink`
- Background of each node: subtle gradient from transparent to `--ss-purple` at 8% opacity

**Animation behavior:**
- On scroll into view, nodes fade in left to right (300ms apart, 600ms each)
- After all four nodes appear, the connecting arrows draw themselves in sequence (`stroke-dasharray` animation)
- Once drawn, all arrows have a continuous dash-flow animation (`stroke-dashoffset` animating 4s linear infinite) — this signals the system is always running
- A small `--ss-yellow` dot travels around the loop continuously (8s per full cycle), pausing briefly at each node

**Mobile variant:** The flow rotates to vertical, with the learning loop arrow curving back up the right side.

**Implementation:**

```tsx
<motion.svg
  viewBox="0 0 1100 320"
  width="100%"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Four nodes with stagger */}
  {nodes.map((node, i) => (
    <motion.g
      key={node.id}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { delay: i * 0.3, duration: 0.6 }
        }
      }}
    >
      {/* node rectangle, icon, label */}
    </motion.g>
  ))}

  {/* Connecting arrows with dash-flow */}
  <motion.path
    d="M 220 160 L 320 160 ..."
    stroke="#E977C1"
    strokeWidth="2"
    strokeDasharray="4 4"
    style={{
      animation: prefersReduced ? 'none' : 'dashFlow 4s linear infinite'
    }}
  />

  {/* Yellow dot traveling the loop */}
  <motion.circle
    r="6"
    fill="#D5F77C"
    style={{
      offsetPath: "path('M 220 160 L 320 160 ...')",
      animation: prefersReduced ? 'none' : 'travelLoop 8s linear infinite'
    }}
  />
</motion.svg>
```

```css
@keyframes dashFlow {
  to { stroke-dashoffset: -100; }
}

@keyframes travelLoop {
  to { offset-distance: 100%; }
}
```

### Three principles (below the diagram, simplified language)

After the diagram, three principle cards in a row on desktop, stacked on mobile.

```
─────────────────────────────────
PRINCIPLE 1
One intelligence engine
powers everything.

We start by understanding your business — your buyers, your differentiators,
your market position. That intelligence runs through every campaign,
every channel, every day. No generic templates. No configuration overhead.
─────────────────────────────────
PRINCIPLE 2
Every part learns from
the others.

SEO insights inform paid strategy. Paid performance reshapes content.
Email engagement adjusts lead scoring. Sales conversations surface objections
the next campaign answers. The system gets smarter with every interaction.
─────────────────────────────────
PRINCIPLE 3
Complexity becomes simple.

You make a thousand marketing decisions every week. Which channels.
What message. Who to target. When to follow up. SuperSymm makes those
decisions based on intelligence, not guesswork — so your role is direction,
not micro-management.
─────────────────────────────────
```

### Component notes

- Principle card: transparent background with 1px `--ss-border-on-dark` border, 16px border-radius, 28px padding
- Principle label: 13px uppercase mono, `--ss-yellow`, 0.08em letter-spacing
- Principle headline: Inter Bold 22px, white, 2 lines
- Body copy: 16px, white at 80% opacity, 1.6 line-height
- Cards equal-height with `align-items: stretch`
- Stagger entrance left to right, 200ms apart

---

## Section 4 — The Foundation

**ID:** `#foundation`
**Treatment:** Light
**Layout:** Asymmetric. Section heading takes left third. Four practice cards in 2×2 grid take right two-thirds. On mobile, heading stacks above grid; grid becomes single column.

### Copy

```
EYEBROW: The Foundation

H2: Build a Foundation.
    Enterprise marketing
    for everyone.

[Wrap "Enterprise marketing" in Newsreader italic]

INTRO (left column, below H2):
Four practices that work as one system. Each makes the others smarter.
Together they're the marketing function you'd build if you had a team —
without hiring one.

──────────────────────────────────────────────────────────────────
PRACTICE 1
Business Intelligence Engine

The brain. SuperSymm learns your ICP, your differentiators,
and your compliance posture — then runs every campaign through that lens.
No generic templates. No configuration overhead.

[link] Learn More →
──────────────────────────────────────────────────────────────────
PRACTICE 2
Lead Generation System

Captures, scores, and routes prospects against your specific ICP in real time.
Hot leads land in your inbox with full context — what they engaged with,
when, and why they're ready.

[link] See How It Works →
──────────────────────────────────────────────────────────────────
PRACTICE 3
Marketing Automation Platform

One approval, content distributed across LinkedIn, email, ads, and your blog.
Built-in compliance archiving, approval workflows, and audit trails for
regulated industries.

[link] Explore Automation →
──────────────────────────────────────────────────────────────────
PRACTICE 4
Performance Optimization

A/B tests run themselves. Budget shifts toward what's working. Performance
data feeds back into the intelligence engine — so the system gets smarter
every month.

[link] See Optimization →
──────────────────────────────────────────────────────────────────
```

### Visual specifications

Each practice card has a small custom illustration at the top — 64×64px, line-art, navy strokes on white cards, with one accent color per illustration.

**Illustration prompts (for AI tools or freelance illustrator):**

```
Practice 1 (Business Intelligence Engine):
"Minimalist line-art icon: a stylized brain made of three connected nodes
forming a triangular network. 64x64px, monochrome navy strokes (1.5px),
single purple accent dot at the center. Editorial style, no shading,
no gradients. Sharp geometric shapes."

Practice 2 (Lead Generation System):
"Minimalist line-art icon: a funnel made of three horizontal lines getting
shorter, with three small dots above representing prospects. The bottom dot
is filled in pink. 64x64px, navy strokes, single pink accent."

Practice 3 (Marketing Automation Platform):
"Minimalist line-art icon: four small squares connected by lines to a central
hub. Each square represents a channel. One square has a small yellow checkmark.
64x64px, navy strokes, single yellow accent."

Practice 4 (Performance Optimization):
"Minimalist line-art icon: a simple line graph trending upward, with a circular
arrow looping back from the end of the graph to the start. 64x64px, navy
strokes, single teal-green accent on the loop."
```

### Component notes

- Practice card: white background, 1px `--ss-border-subtle`, 16px border-radius, 32px padding
- Cards in 2×2 grid have 24px gap
- Practice number label: mono uppercase 12px, muted
- Practice title: Inter Bold 22px, navy
- Practice body: 16px, 1.6 line-height
- Inline link: `--ss-purple` text, no underline at rest, underline on hover
- Card hover: 4px lift, 200ms ease

---

## Section 5 — The Lead Journey (Sarah)

**ID:** `#journey`
**Treatment:** Dark (`--ss-navy`)
**Layout:** Full-bleed within container. Horizontal animated timeline on desktop, vertical on mobile.
**This is the visual centerpiece of the page.**

### Copy

```
EYEBROW: How a lead actually moves through the system

H2: From cold visitor to qualified lead —
    without anything falling through the cracks.

[Wrap "without anything falling through the cracks" in Newsreader italic]

INTRO (centered, max-width 720px):
Most marketing platforms automate tasks. SuperSymm orchestrates relationships.
Here's what one prospect's journey looks like from first touch to qualified handoff.

──────────────────────────────────────────────────────────────
DAY 1                DAY 3                DAY 7                DAY 8
The first touch      The follow-through   The signal           The handoff
──────────────────────────────────────────────────────────────

DAY 1 — The first touch
PROSPECT: Sarah, a CFO at a 30-person services firm, sees a SuperSymm-generated
          LinkedIn post in her feed. She clicks through to the article.
SYSTEM:   Captures the visit. Tags Sarah as a new prospect.
          Adds 10 points to her score.

DAY 3 — The follow-through
PROSPECT: Sarah opens the follow-up email and clicks to a related blog article.
SYSTEM:   Tracks the engagement. Adds 15 points. Moves Sarah from cold to warm.
          Adjusts the next email in her sequence based on what she clicked.

DAY 7 — The signal
PROSPECT: Sarah visits the pricing page. Downloads a case study.
SYSTEM:   Adds 30 points. Sarah crosses the 50-point threshold.
          Sales gets an instant alert with her full context:
          "Sarah, CFO, viewed pricing twice this week, downloaded the case study,
          fits ICP."

DAY 8 — The handoff
PROSPECT: Sales reaches out while Sarah is still actively researching.
          The conversation starts where her interest started —
          not with cold introductions.
SYSTEM:   Logs the outreach in CRM. Pauses the automated sequence.
          Hands the relationship to a human.

CLOSING LINE (centered below the timeline, italicized):
"Without SuperSymm, Sarah is forgotten between Day 1 and Day 7.
With SuperSymm, every signal is tracked. The timing is right.
The conversation is real."

CTA: See the System in Action →   (routes to /platform)
```

### Animated horizontal timeline

**[FPO: lead_journey_timeline.svg — 1100×400px desktop, 380×800px mobile]**

**Concept:**
A horizontal pink line runs across the section. Four nodes sit on the line at equal intervals, labeled DAY 1, DAY 3, DAY 7, DAY 8. Above each node: an icon for the prospect's action. Below each node: an icon for the system's response. A small avatar marker (a pink-filled circle with "S" inside) travels along the line.

**Animation behavior:**
- On scroll into view, the line draws itself left to right over 1.2 seconds
- Each node fades in as the line passes it (300ms staggered)
- After the line completes, the avatar marker travels along the line over 8 seconds, pausing 1.5 seconds at each node
- At each pause, the corresponding text block above receives a subtle highlight (border flash in `--ss-yellow` for 600ms)
- Cycle restarts after a 4-second pause if section is still in view
- Respects `prefers-reduced-motion: reduce` — falls back to all stages visible at once

**Implementation options (in order of recommended quality vs. effort):**

1. **Lottie** — commission or build the animation in After Effects, export as JSON, render with `lottie-react`. Highest quality, most polished.
2. **Framer Motion + SVG** — code-based using `motion.path` with `pathLength` for line drawing and `offsetPath` for the avatar travel. No design dependency.
3. **GSAP MotionPath plugin** — most flexible. Requires GSAP license.

**For v1 launch (if animation isn't ready):** Use a static SVG with the line, four nodes, and the avatar at Day 8. Add a small italic caption: "An animated walkthrough is coming — for now, here's the journey at a glance."

### Component notes

- Section padding-block: 160px top, 120px bottom (this section earns extra room)
- Timeline content area: max-width 1100px, centered
- Mobile: timeline rotates to vertical, line top-to-bottom, stages stacked, avatar travels downward
- Day labels: Inter Bold 14px uppercase, white, 0.08em letter-spacing
- Stage titles: Inter Bold 22px, white
- PROSPECT lines: 15px white, normal weight
- SYSTEM lines: 15px white with `[SYSTEM]` label in `--ss-yellow`
- Closing italic line: 20px white at 85% opacity, Newsreader serif italic
- CTA below: yellow pill button on dark, same as hero

---

## Section 6 — How We Work With You

**ID:** `#process`
**Treatment:** Light
**Layout:** Intro centered, then horizontal 5-step process visualization

### Copy

```
EYEBROW: The Engagement

H2: How we work with you.
    Industry expertise and perspective.

INTRO (centered, max-width 760px):
This isn't DIY software. We set everything up based on your business,
your goals, and your audience. We build the strategy. We launch the system.
We meet with you regularly to review performance and adjust direction
while the platform runs and learns.

You don't write the prompts. You don't connect the tools.
You don't learn 10 systems to make this work. We do that part.
You stay focused on the work that only you can do.
```

### 5-step horizontal process

```
   ●─────────●─────────●─────────●─────────●
   │         │         │         │         │
ONBOARDING  STRATEGY  PLATFORM  MONITOR   ADJUST &
 MEETING   INTEGRATED  RUNS    PERFORMANCE OPTIMIZE

Discovery   Cross-     Day-to-day  Quarterly   Continuous
of your     channel    execution   reviews     refinement
business,   plan       handled by  with our    based on
audience,   built and  the         strategists what's
goals.      launched.  platform.   working.
```

### Visual specifications

**[FPO: process_5step.svg — 1100×280px desktop, 380×900px mobile]**

**Concept:**
A horizontal line connects 5 circular nodes. Each node has an icon above and a label below. The line between nodes uses a subtle pink-to-purple gradient. As the user scrolls into view, each node fades in left to right.

**Visual specifications:**
- Each node: 64×64px circle with a 1.5px navy border, white fill
- Inside each node: a 32×32px line-art icon (numbered 01–05 if no icon available)
- Connecting line: 2px stroke, gradient from `--ss-purple` to `--ss-pink`
- Below each node: step label in Inter Bold 14px uppercase navy
- Below the label: 1-line description in 14px muted text

**Animation:** Stagger fade-in left to right (300ms apart). After all nodes appear, the connecting line draws itself in `pathLength` animation. No looping animation in this section — it's a static state once drawn.

**Icon prompts:**

```
Step 1 (Onboarding Meeting): "Two simple chair shapes facing each other across
a small circular table. 32x32px, navy line-art, 1.5px stroke, no fill."

Step 2 (Strategy Integrated): "Three connected dots forming a triangle with
a smaller dot at the centroid. 32x32px, navy line-art."

Step 3 (Platform Runs): "A circular arrow forming a complete loop with a small
gear shape inside. 32x32px, navy line-art."

Step 4 (Monitor Performance): "A simple line chart with three data points,
the third highlighted. 32x32px, navy line-art."

Step 5 (Adjust & Optimize): "Two arrows forming a U-shape, suggesting a course
correction. 32x32px, navy line-art."
```

### Mobile variant

Process rotates to vertical. Nodes stack top to bottom with the connecting line running down the left side. Labels and descriptions sit to the right of each node.

### Component notes

- Section padding: standard
- Step labels: 14px uppercase Inter Bold navy, 0.08em letter-spacing
- Step descriptions: 14px muted, 1.5 line-height, max-width 140px each
- Generous white space between the visual and any surrounding elements

---

## Section 7 — Industries

**ID:** `#industries`
**Treatment:** Light
**Layout:** Intro centered, then 5 industry cards in a row on desktop, single column on mobile

### Copy (preserve from V2)

```
EYEBROW: Who We Serve

H2: Built for Professional Service Firms
    Serious About Growth.

[Wrap "Serious About Growth" in Newsreader italic]

INTRO (centered, max-width 720px):
SuperSymm is designed for businesses where marketing matters but can't be
a full-time job. If you need consistent lead generation without hiring
a marketing team or managing a dozen tools, SuperSymm was built for you.

──────────────────────────────────────────
FINANCIAL ADVISORS
[Compliance badge: SEC / FINRA]

Generate qualified leads while meeting SEC compliance requirements.
Built-in archiving and approval workflows.

[link] Learn More →   (routes to /solutions/financial-advisors)
──────────────────────────────────────────
HEALTHCARE PROVIDERS
[Compliance badge: HIPAA]

Patient acquisition with HIPAA-compliant automation
and encrypted communications.

[link] Learn More →   (routes to /solutions/healthcare)
──────────────────────────────────────────
TAX & ACCOUNTING FIRMS

Fill your pipeline year-round, not just during tax season.
Automated lead nurture and client retention.

[link] Learn More →   (routes to /solutions/tax-accounting)
──────────────────────────────────────────
LEGAL PROFESSIONALS
[Compliance badge: Bar Compliant]

Business development that runs itself while you bill hours.
State bar compliant marketing automation.

[link] Learn More →   (routes to /solutions/legal)
──────────────────────────────────────────
B2B SERVICES

Consistent lead generation for consultants, agencies,
and service providers. Multi-channel execution at scale.

[link] Learn More →   (routes to /solutions/b2b)
──────────────────────────────────────────

CLOSING LINE (centered below grid):
Whether you serve individuals or businesses, SuperSymm adapts to your
audience, your industry, and your compliance requirements.

CTA: Explore Industry Solutions →   (routes to /solutions)
```

### Component notes

- Industry card: white background, 1px `--ss-border-subtle`, 16px border-radius, 28px padding
- Industry name: Inter Bold 18px navy, uppercase, 0.04em letter-spacing
- Compliance badge: pill, 20px tall, 8px horizontal padding, `--ss-purple` at 8% opacity background, 1px `--ss-purple` at 24% border, 11px Inter Bold purple uppercase
- Body: 14px, 1.5 line-height
- Card hover: yellow accent left-border slides in (4px wide, 200ms transform)
- Cards equal height with stretch
- 16px gap between cards on desktop
- On mobile: cards stack with 16px gap

---

## Section 8 — Services

**ID:** `#services`
**Treatment:** Light (or `--ss-bg-soft` if visual contrast with industries section needed)
**Layout:** **Asymmetric expandable cards.** 7 service cards. Default state: each card shows the title and a one-line description. Click expands the card to reveal the full copy. Cards are arranged in an asymmetric grid (mix of widths).

This is a new section pattern — borrowing from how editorial sites display capabilities.

### Copy

```
EYEBROW: Capabilities

H2: Services that make
    the system real.

[Wrap "make the system real" in Newsreader italic]

INTRO (centered, max-width 720px):
The platform handles execution. These are the strategic disciplines
our team brings to every engagement — the thinking that makes the
system work for your business.
```

### Asymmetric expandable card grid

Layout uses a 12-column grid. Cards span varying column widths to create asymmetry. On click, each card expands to reveal full content. Only one card open at a time (accordion behavior); clicking a new card collapses the previously open one.

**Suggested grid layout (desktop):**

```
Row 1:  [ Research        col 1-7 ] [ Persona Dev   col 8-12 ]
Row 2:  [ Channel Strategy             col 1-12     ]
Row 3:  [ SEO/Content     col 1-5 ] [ Paid Media    col 6-12 ]
Row 4:  [ Social Media    col 1-7 ] [ Website       col 8-12 ]
```

On mobile, all cards stack in a single column.

### Card content

```
─────────────────────────────────
SERVICE 01

Research
Define the market. Find the opportunity.

[Expanded copy:]
We define your market, your business position, and the strategic
opportunity. Research uncovers what differentiates you, what your
audience actually cares about, and where your firm can win. Strategic
priorities flow directly from what we find.
─────────────────────────────────
SERVICE 02

Persona Development
Right audience. Right message. Right channel. Every time.

[Expanded copy:]
Effective marketing doesn't start with channels — it starts with a
deep understanding of who you're trying to reach, what they care about,
and where they spend their attention. SuperSymm builds the marketing
system around your audience profiles, so every campaign, every piece
of content, and every automation is optimized for the specific person
it needs to reach.
─────────────────────────────────
SERVICE 03

Channel Strategy
How it all connects.

[Expanded copy:]
Why doing all three beats doing any one — and what the math looks like
when paid ads, organic SEO, and social work as a system instead of in
isolation. Each prospect moves through a research journey that spans
weeks or months and touches multiple channels. Marketing that shows up
in only one of those channels leaves entire stages unaddressed.

Each channel here has a specific job. And each one makes the others
measurably more effective.
─────────────────────────────────
SERVICE 04

SEO / Content
Own the keywords that matter.

[Expanded copy:]
SEO is not a standalone tactic — it's the organic foundation that
reduces paid media costs, builds long-term authority, and ensures your
business is discoverable at every stage of the buying process. When a
lead searches to validate a product or a customer searches for a new
line, the question is: does your business appear?
─────────────────────────────────
SERVICE 05

Paid Media
Every dollar spent. Every lead attributed.

[Expanded copy:]
All paid campaigns are managed through a unified dashboard with
lead-level attribution — so every dollar spent connects back to a
specific lead, audience segment, and conversion outcome. Campaign
performance data feeds back into SEO keyword strategy and content
priorities, creating a compounding system rather than isolated spend.
─────────────────────────────────
SERVICE 06

Social Media
Every post connects to a lead outcome.

[Expanded copy:]
Social media for your business is not a brand awareness exercise —
it's a demand generation layer. Every post is mapped to an audience,
a funnel stage, and a conversion path. Organic engagement builds
retargeting audiences. Retargeting drives paid conversions. Conference
content extends physical presence into a 30-day digital window.

The result is a system where social activity compounds into pipeline.
─────────────────────────────────
SERVICE 07

Website / Digital
From afterthought to demand-generation hub.

[Expanded copy:]
A website is not a brochure — it's a conversion machine. Every page
should serve a specific audience, answer a specific question, and
present a specific next action. The rebuild SuperSymm recommends
transforms a passive site into an active demand-generation hub that
works 24/7 to attract leads.
─────────────────────────────────
```

### Implementation

```tsx
const [openService, setOpenService] = useState<number | null>(null);

<div className="services-grid">
  {services.map((service, i) => (
    <motion.div
      key={service.id}
      className={`service-card service-card--${service.colSpan}`}
      layout
      onClick={() => setOpenService(openService === i ? null : i)}
    >
      <motion.div layout="position">
        <span className="service-number">SERVICE {String(i + 1).padStart(2, '0')}</span>
        <h3>{service.title}</h3>
        <p className="service-tagline">{service.tagline}</p>
      </motion.div>

      <AnimatePresence>
        {openService === i && (
          <motion.div
            className="service-expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {service.body}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="service-toggle"
        animate={{ rotate: openService === i ? 45 : 0 }}
      >
        +
      </motion.button>
    </motion.div>
  ))}
</div>
```

```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

.service-card--7  { grid-column: span 7; }
.service-card--5  { grid-column: span 5; }
.service-card--12 { grid-column: span 12; }

.service-card {
  background: var(--ss-white);
  border: 1px solid var(--ss-border-subtle);
  border-radius: 20px;
  padding: 32px;
  cursor: pointer;
  position: relative;
  transition: border-color 0.2s;
}

.service-card:hover {
  border-color: var(--ss-purple);
}

@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .service-card--7,
  .service-card--5,
  .service-card--12 { grid-column: span 1; }
}
```

### Component notes

- Service number: 12px mono uppercase, `--ss-purple`, 0.08em letter-spacing
- Service title: Inter Bold 28px, navy
- Service tagline (collapsed state): 16px navy at 70% opacity, italicized in Newsreader serif
- Service expanded body: 16px, 1.6 line-height, navy
- Toggle button: top-right of card, 32px circle, navy outline, "+" icon that rotates to "×" when open
- Card padding: 32px desktop, 24px mobile
- Click target: entire card surface

---

## Section 9 — Final Invitation

**ID:** `#cta`
**Treatment:** Dark with hero gradient (mirror Section 1)
**Layout:** Centered, max-width 720px, generous vertical padding (160px+)

### Copy

```
H2 (centered):
You didn't start your firm
to manage marketing tools.

[Wrap "to manage marketing tools" in Newsreader italic]

BODY (centered, 18px, white at 90%):
You started it to do the work that matters — for clients, for cases,
for outcomes that take real expertise. Marketing should support that work,
not compete with it for your time and attention.

Let's build the system that runs alongside you, so the work that matters
gets the time it deserves.

PRIMARY CTA: Start a Conversation →   (routes to /pricing)
SECONDARY CTA: See the System in Action   (routes to /platform)

PRICING LINE (smaller, white at 60%):
Engagement pricing is custom to your firm and goals.
We'll quote you a number after one call.

TRUST LINE (smallest, white at 50%):
Month-to-month after onboarding · Quarterly strategy reviews ·
Compliance archiving included · Real humans, real accountability
```

### Background treatment

Mirror the hero treatment:
- Animated gradient (same keyframes as Section 1)
- Floating logomark watermark (same animation as Section 1)
- This creates visual bookending — the page opens and closes on the same canvas

### Component notes

- H2: Inter Black 56px desktop / 36px mobile, white, sentence case
- Body: 18px, 1.7 line-height
- Primary CTA: yellow pill on navy, navy text, 56px tall
- Secondary CTA: white text-link with arrow, 80% opacity
- Pricing line: 14px italic, separated from CTAs by 32px
- Trust line: 13px, separated by middle dots, wraps on mobile

---

## Section 10 — Footer

**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** 4-column on desktop, stacked on mobile

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
       - Healthcare
       - Tax & Accounting
       - Legal
       - B2B Services

COL 4: Company
       - About
       - Pricing
       - Contact
       - Book a call

BOTTOM BAR:
© 2026 SuperSymm · Privacy · Terms · Compliance Information
```

---

## Internal linking map

| CTA / Link | Destination |
|---|---|
| Get Custom Pricing | `/pricing` |
| See How It Works | `/platform` |
| Start a Conversation | `/pricing` |
| See the System in Action | `/platform` |
| Learn More — Business Intelligence | `/platform/business-intelligence` |
| See How Lead Generation Works | `/platform/lead-generation` |
| Explore Marketing Automation | `/platform/marketing-automation` |
| See Performance Optimization | `/platform/performance-optimization` |
| Financial Advisors | `/solutions/financial-advisors` |
| Healthcare | `/solutions/healthcare` |
| Tax & Accounting | `/solutions/tax-accounting` |
| Legal | `/solutions/legal` |
| B2B Services | `/solutions/b2b` |
| Explore Industry Solutions | `/solutions` |

---

## Animation reference (Framer Motion)

**Standard section entry:**
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
// Trigger: 20% in viewport
<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
```

**Staggered card grids:**
```tsx
const container = {
  visible: { transition: { staggerChildren: 0.12 } }
}
```

**Card hover:**
```tsx
whileHover={{ y: -4, transition: { duration: 0.2 } }}
```

**Button hover/tap:**
```tsx
whileHover={{ scale: 1.03 }}
whileTap={{ scale: 0.97 }}
```

**Scroll-triggered visual swap (Section 2):**
Use `useInView` from Framer Motion for each pillar block. When a pillar enters viewport (amount 0.5), set it as active. Right column visual reacts to active state changes via `AnimatePresence`.

**Always wrap with:**
```tsx
const prefersReduced = useReducedMotion()
// Then conditionally disable animations or shorten durations
```

---

## Section background sequence

```
Section 1 (Hero)               bg: #22193B + animated gradient + logomark
Section 2 (Problem)            bg: white
Section 3 (Platform)           bg: #22193B
Section 4 (Foundation)         bg: white
Section 5 (Lead Journey)       bg: #22193B
Section 6 (How We Work)        bg: white
Section 7 (Industries)         bg: white  ← consider switching to #F5F3FB for contrast
Section 8 (Services)           bg: #F1F0F1
Section 9 (Final CTA)          bg: #22193B + animated gradient + logomark
Footer                         bg: #F1F0F1
```

**Note on consecutive light sections (6, 7):** If both render too similar visually, switch Section 7 to `--ss-bg-purple-light` (`#F5F3FB`) for subtle differentiation while keeping the light register.

---

## Performance budget

- Largest Contentful Paint < 2.5s on 4G
- Total JS bundle (excluding Lottie) < 150KB gzipped
- Lottie animations lazy-loaded as user scrolls toward their section
- All SVG diagrams inline in HTML (no extra requests)
- Images use `next/image` with appropriate sizing and lazy loading
- Animated background gradient uses CSS only — no canvas, no WebGL

---

## Accessibility

- All interactive elements have visible focus rings (`outline: 2px solid var(--ss-purple); outline-offset: 4px`)
- All decorative SVGs have `aria-hidden="true"`
- Functional SVGs have `role="img"` and `aria-label`
- Animation respects `prefers-reduced-motion`
- Service cards (Section 8) keyboard accessible — Enter/Space toggles expand state, Escape closes
- Color contrast meets WCAG AA across all combinations
- Heading hierarchy is sequential: one H1, multiple H2s, H3s only inside H2 sections

---

## Build sequence (recommended)

1. **Foundation** — Tailwind config with color tokens, typography scale, spacing utilities. Newsreader font loaded.
2. **Skeleton** — all sections built with placeholder copy, no images, no animations. Verify rhythm and section flow.
3. **Real copy** — paste verbatim from this brief.
4. **Static visuals** — add SVG diagrams and FPO image blocks for Section 2 pillar visuals, Section 3 feedback loop, Section 5 timeline, Section 6 process flow.
5. **Animations** — Framer Motion entrance and stagger first. Then scroll-driven swap (Section 2). Then dash-flow loops (Section 3). Lottie or coded timeline (Section 5). Service card expansions (Section 8).
6. **Polish** — hover states, focus rings, mobile breakpoints.
7. **Accessibility audit** — keyboard navigation, screen reader test, motion preference test.
8. **Performance audit** — Lighthouse score, image optimization, lazy loading.
9. **Real assets swap** — replace FPO images with finished illustrations as they're ready.

---

## Asset checklist

Before launch, gather or generate:

- [ ] Hero animated gradient and floating logomark (carry forward from V2)
- [ ] Problem section pillar visuals — 3 SVGs (Section 2)
- [ ] Platform feedback loop diagram with animation (Section 3)
- [ ] Four practice illustrations (Section 4)
- [ ] Lead journey timeline animation — Lottie or coded SVG (Section 5)
- [ ] 5-step process visualization (Section 6)
- [ ] Compliance badges for industry cards (Section 7)
- [ ] Service card numbers and toggle icons (Section 8)
- [ ] Octagonal logomark for Section 9 background (carry from V2)
- [ ] Newsreader serif italic webfont loaded
- [ ] Internal route stubs: `/pricing`, `/platform`, `/platform/*`, `/solutions/*`, `/about`, `/contact`

---

## Sections pending content (flag as TODO)

- [ ] Real client engagement results — once available, consider adding a proof section between Industries (7) and Services (8) or between Services (8) and Final CTA (9)
- [ ] Phone number for any future tertiary CTA
- [ ] Detailed copy for `/solutions/*` deep pages
- [ ] Detailed copy for `/platform/*` deep pages

---

## Build notes

- Route this page to `/v2` — do not replace `/` until approved
- Use exact copy verbatim — do not paraphrase
- Hero H1 wraps "Connected" in Newsreader serif italic (`<em className="font-serif italic">Connected</em>`)
- Same italic treatment on Section 2 H2 ("Without a Strategy"), Section 3 H2 ("Fully Connected"), Section 4 H2 ("Enterprise marketing"), Section 5 H2 ("without anything falling through the cracks"), Section 7 H2 ("Serious About Growth"), Section 8 H2 ("make the system real"), Section 9 H2 ("to manage marketing tools")
- Compliance badges on industry cards: pill shape, `#6750A4` at 8% opacity background, 11px Inter Bold uppercase
- Service cards (Section 8) use `framer-motion` `layout` prop for smooth expansion — ensure `LayoutGroup` wraps the grid if needed for shared layout transitions

---

*End of V2.1 Brief*
