# About Page — Build Brief V2

**Page URL:** `/about`
**Last updated:** May 2, 2026
**Status:** Ready for build (supersedes the previous About brief)
**Target word count:** ~900 words (longer than V1 because the principles and AI sections earn their place)
**Audience:** Prospects evaluating trustworthiness; people clicking through from sales conversations; organic research traffic
**Primary goal:** Build trust, communicate the principles, humanize the brand, route to demo or pricing
**Visual ambition:** Light — typography-led, one team photo, minimal illustration, no animation beyond fade-up
**Pattern reference:** Vertical page template (calm, simple end of the design system)

---

## What changed from V1

The V1 brief was built on a framing the research doesn't actually support — *"marketing shouldn't require a marketing degree."* The research (RIA_Market_Research_2026.md, MESSAGING_FRAMEWORK_MASTER.md) tells a different story:

- The dominant pain isn't intellectual difficulty — it's **time** (68% of RIAs cite "lack of time" as their #1 barrier) and **compliance fear** (the #1 barrier to marketing activity)
- The validated central insight is **"Stop choosing between professional marketing and serving your clients"** — the false tradeoff between doing the work that matters and doing the marketing that supports it
- The team's strength isn't "two-person" — it's **founder-led** with combined 20+ years of marketing and client experience

V2 fixes these. It also folds in the **ABOUT_PAGE_Principles_and_AI_FINAL.md** content as Section 4 (five principles) and Section 5 (AI levels: Assist / Augment / Agentic) — both pieces are research-grounded, sharp, and ready to ship.

Mission section compresses to a single paragraph since the principles section now carries the philosophy work.

---

## SEO config

```
Title tag:        About SuperSymm | The Team and Principles Behind the Platform
Meta description: SuperSymm is founder-led marketing automation built for
                  professional service firms. Meet the team and the principles
                  behind the platform.
Primary keyword:  None (About pages are not primary SEO targets)
Secondary:        Marketing automation, marketing for professional services
                  — included naturally, not forced
URL slug:         about
```

**Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About SuperSymm",
  "description": "The team, principles, and approach behind SuperSymm's marketing automation for professional service firms."
}
```

Standard `Organization` schema in the site head also applies.

---

## Page structure overview

```
1. HERO              Light    Why we exist — the validated tradeoff insight
2. OUR MISSION       Light    Single-paragraph mission (compressed from V1)
3. MEET THE TEAM     Light    Founder-led — real people, real experience
4. FIVE PRINCIPLES   Soft     The methodology — five principles that guide everything
5. HOW AI POWERS IT  Light    Assist / Augment / Agentic — three levels
6. WHAT TO EXPECT    Light    Honest commitments — the differentiators
7. FINAL CTA         Dark     Standard pattern
8. FOOTER            Soft     Standard
```

Seven content sections. Slightly longer than V1's five-section structure because the principles and AI sections each do real work that doesn't belong elsewhere. Still concise — every section earns its place.

---

## Brand foundation

All tokens, typography, spacing inherited from the design system. Same constraints as the vertical pages: no animated imagery, no scroll-driven sections, fade-up entrance only, wrapped in `useReducedMotion()`. `.italic-accent` (gradient) used sparingly — H1 and one Section 4 phrase only.

---

## Section 1 — Hero

**ID:** `#hero`
**Treatment:** Light (white)
**Layout:** Centered single column, max-width 900px. Breadcrumb, eyebrow, headline, two short paragraphs, CTAs. No image in the hero (the team photo gets its own moment in Section 3).

### Copy

```
BREADCRUMB: Home  /  About

EYEBROW: About SuperSymm

H1: Stop choosing between
    professional marketing
    and serving your clients.

[Wrap "serving your clients." in .italic-accent gradient]

BODY (centered, max-width 700px):
Every professional service firm knows they need consistent marketing to grow.
But marketing takes time you don't have, money you're cautious about spending,
and creates compliance risks you can't afford. So you're stuck — doing it
yourself in evenings and weekends, paying an agency to do it slowly, or doing
nothing while competitors gain ground.

SuperSymm was built to break that tradeoff. Marketing that actually works,
without the time, the lock-in, or the compliance anxiety.

PRIMARY CTA: Book a Demo →
SECONDARY CTA: See the Platform
```

### Component notes

- H1: Inter Black 48–56px, navy, sentence case, 3 lines on desktop (forces line breaks as shown). On mobile, allow natural wrap.
- Body: 18px navy at 90%, 1.6 line-height, two short paragraphs
- Primary CTA: yellow pill on white, navy text, 56px tall
- Secondary CTA: navy text-link with arrow, routes to `/platform`
- Section padding: standard top, 80px bottom

The H1 is longer than typical because the validated insight from the Messaging Framework requires the full phrase to land. The line breaks are deliberate — *"Stop choosing between"* sets up the tension, *"professional marketing"* and *"and serving your clients"* land it. Do not compress this to a one-line headline.

---

## Section 2 — Our Mission

**ID:** `#mission`
**Treatment:** Light (white)
**Layout:** Single centered paragraph, max-width 720px. Typographic moment — no cards, no blocks. The mission is short and direct.

This section is compressed from V1's three-block treatment. Reason: the five principles in Section 4 do the work that the three blocks were doing, with more substance. A single mission paragraph here keeps the page honest and reads as more confident than three abstract value labels.

### Copy

```
EYEBROW: Why We Exist

H2: Marketing should support your business —
    not compete with it for your time.

BODY (centered, max-width 680px):
SuperSymm exists to give professional service firms the kind of marketing
infrastructure enterprise companies use — without the team, the tools, or the
weekly time burden. We handle the system that scales your reputation, your
referrals, and your reach. You stay focused on the work that only you can do.
```

### Component notes

- H2: Inter Bold 36–40px, navy
- Body: 18px navy at 90%, 1.6 line-height, single paragraph
- Section padding: 100px top, 100px bottom

---

## Section 3 — Meet the Team

**ID:** `#team`
**Treatment:** Light (white)
**Layout:** H2 and intro centered. Below: a team photo (Chris and Chad together), then two founder blocks side by side on desktop, stacked on mobile.

### Copy

```
EYEBROW: The People Behind It

H2: Founder-led, by design.

INTRO (centered, max-width 720px):
SuperSymm is built and run by its founders. No account managers, no support
tiers, no hand-offs. Combined, Chris and Chad bring more than twenty years of
marketing leadership and client experience to every firm we work with — and
that direct experience stays in the room on every account.

[TEAM PHOTO — Chris and Chad together, see visual spec]

────────────────────────────────
CHRIS

Co-Founder — Product, Strategy, Marketing, Operations

Chris owns how SuperSymm works and how it goes to market. With more than a
decade leading product, marketing, and operations across professional services
and SaaS, he's spent his career at the intersection of strategy and execution.
He's in your strategy conversations, in your campaigns, and in the parts of
marketing most platforms ignore.

────────────────────────────────
CHAD

Co-Founder & CTO — Engineering, AI, Platform

Chad builds the system. The intelligence layer, the automation, the connected
architecture — that's his. With a decade-plus of engineering leadership across
data-intensive products, he's the reason "agentic" is a description here, not
a marketing word.

────────────────────────────────
```

### Visual specifications

**[FPO: team_photo.jpg — 960×540px, landscape]**

A single photo of Chris and Chad together. Professional but approachable — not stiff corporate headshots, not overly casual. Natural setting (workspace, neutral background). Sits centered between the intro and the two founder blocks, max-width 880px, 16px border-radius, subtle drop shadow. No animation.

**If no photo is available at launch:** use two simple illustrated avatar placeholders (circle, abstract face, navy linework on `--ss-bg-purple-light`) — one per founder, placed at the top of each founder block instead of a shared photo. Clearly placeholder-styled. **Replace with a real photo as soon as possible** — on an About page specifically, a real photo materially outperforms an illustration for trust. Flag this as a priority asset.

### Component notes

- H2: Inter Bold 36–40px, navy
- Intro: 17px navy at 85%, 1.6 line-height
- Founder block: no card treatment — open layout, just the content
- Founder name: Inter Bold 20px navy
- Role line: 14px Inter Medium `--ss-purple`, sits directly under the name
- Body: 16px navy at 85%, 1.6 line-height
- Two founder blocks side by side, 48px gap, equal width
- Confirm exact years of experience with Chris before launch — the brief uses "more than twenty" (combined) and "more than a decade" (individual). Adjust if actuals differ; the framing is the point, not the specific number
- The "agentic is a description, not a marketing word" line is load-bearing and should not be softened

---

## Section 4 — Five Principles

**ID:** `#principles`
**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** H2 and intro centered. Below: five principle blocks stacked vertically, each full-width within max-width 860px container. Each block has a principle number, a one-line headline, a one-line subhead, and 2–3 sentences of body copy.

This section is sourced from **ABOUT_PAGE_Principles_and_AI_FINAL.md** with minor edits for page flow. Each principle in the source document had a deep link to a sub-page; per V1 policy on the marketing pages, we are stripping those deep links for now and the body copy carries the explanation.

### Copy

```
EYEBROW: How We Build

H2: Five principles that guide
    everything we build.

[Wrap "everything we build." in .italic-accent gradient]

INTRO (centered, max-width 760px):
Most marketing platforms are built by software companies for marketers.
SuperSymm was built by understanding the actual problems small businesses
face — especially professional service firms like financial advisors,
healthcare providers, and consultancies. Here's how we think about solving
those problems.

────────────────────────────────
01

Intelligence before execution.
Strategy first, tactics second.

We start by understanding your business — your market, your buyers, your
unique value. That intelligence becomes the foundation for everything that
follows. Right strategy, then right execution.

────────────────────────────────
02

Systems then tools.
Design the system first, then integrate tools.

Tools are commodities. What matters is how they connect. We build a complete
system where lead generation feeds into marketing automation, which feeds into
performance optimization — all powered by intelligence. Tools serve the system,
not the other way around.

────────────────────────────────
03

Augmentation over automation.
AI executes the work. You maintain control.

We don't believe in black boxes. The platform handles the structured work —
content creation, lead scoring, campaign distribution — while you stay in the
loop with complete visibility and strategic approval. You make the decisions.
The system does the forty hours of work.

────────────────────────────────
04

Complete journey, not individual pieces.
Handle the entire lifecycle from attract to optimize.

Lead generation captures prospects. Marketing automation nurtures them.
Performance optimization improves every stage. Nothing falls through the
cracks because it's one connected system — attract, capture, nurture, convert,
retain, optimize.

────────────────────────────────
05

Built for businesses solving real problems.
Purpose-built for teams managing real constraints.

We design for how your business actually operates — limited time, strict
budgets, compliance requirements. Whether you're an RIA managing SEC rules,
healthcare managing HIPAA, or any firm solving real problems, our approach
starts with your constraints, not ideal scenarios.

────────────────────────────────
```

### Component notes

- Principle block: full-width within container (max 860px), centered
- Number label: 40px Inter Black, `--ss-purple`
- Principle headline (first line): Inter Bold 24px navy
- Principle subhead (second line, italic): Inter 18px navy at 70%, italicized in Newsreader serif (use `.italic-benefit` style — solid navy, not gradient)
- Body: 17px navy at 90%, 1.6 line-height
- 64px vertical gap between principle blocks
- No icons next to numbers — numbers carry the structure
- Stagger fade-up, 150ms apart
- **No deep links** in any principle block. The source document linked each principle to a sub-page; V1 policy is to keep these pages self-contained. Adding deep links is a V2 task once supporting sub-pages exist.

---

## Section 5 — How AI Powers It

**ID:** `#ai`
**Treatment:** Light (white)
**Layout:** H2 and intro centered. Below: three cards in a row on desktop (Assist / Augment / Agentic), stacked on mobile. The middle card (Augment) is visually emphasized — slightly wider or with a distinct treatment — because it represents most of SuperSymm's actual operation.

This section is sourced from **ABOUT_PAGE_Principles_and_AI_FINAL.md**. The three-tier framing (Assist / Augment / Agentic) is genuinely distinctive in the AI marketing category — most platforms either underclaim or overclaim. This positions SuperSymm honestly and signals technical sophistication without overhyping.

### Copy

```
EYEBROW: How AI Powers It

H2: Three levels of AI.
    We use each one where it fits.

INTRO (centered, max-width 760px):
AI isn't one-size-fits-all. We deploy three levels of AI intelligence
depending on what the task actually requires — from quick help, to full
execution, to continuous monitoring. Most of SuperSymm operates at the
middle level, where AI handles execution while you keep strategic control.

[Three cards in a row]

────────────────────────────────
CARD 1 — ASSIST

AI Helps You Work Faster

AI provides suggestions, drafts, and insights. You make all decisions and do
all execution. Best for tasks requiring deep customization or one-off decisions.

What it looks like:
- AI suggests content topics
- AI drafts initial copy for review
- AI provides performance insights
- You handle all execution

When we use it:
Custom requests, unique situations, strategic decisions

────────────────────────────────
CARD 2 — AUGMENT
[VISUALLY EMPHASIZED — this is most of what SuperSymm does]

AI Executes. You Approve.

AI handles structured execution — content creation, campaign distribution,
lead scoring, performance tracking. You approve strategy, review output,
and maintain complete oversight.

What it looks like:
- AI creates monthly content calendar
- AI distributes across all channels
- AI scores and routes leads automatically
- You approve strategy and review performance

When we use it:
Repeatable workflows, multi-channel execution, ongoing campaigns

────────────────────────────────
CARD 3 — AGENTIC

AI Monitors and Acts Continuously

AI monitors continuously, detects signals, and acts within approved guardrails.
Escalates exceptions only. You focus on high-level strategy while the system
handles routine execution autonomously.

What it looks like:
- AI monitors market trends continuously
- AI detects buying signals automatically
- AI adjusts campaigns based on performance
- You review weekly digests and approve major shifts

When we use it:
Continuous monitoring, real-time optimization, predictive actions

────────────────────────────────

CLOSING LINE (centered, below cards):
Most of SuperSymm operates at Augment — AI handles execution while you keep
strategic control. As the technology evolves, we deploy Agentic capabilities
where continuous monitoring adds real value, never as a buzzword.
```

### Component notes

- Card: `--ss-white` background, 1px `--ss-border-subtle`, 24px padding, 16px border-radius
- Card 2 (Augment) visual emphasis options:
  - **Option A (recommended):** subtle `--ss-purple` accent border on the left edge (4px wide), and a small "Most SuperSymm features" tag at the top of the card
  - Option B: slightly larger padding (32px) and a faint `--ss-bg-purple-light` background tint
- Card label (ASSIST, AUGMENT, AGENTIC): 12px Inter Bold uppercase, `--ss-purple`, 0.08em letter-spacing
- Card headline: Inter Bold 22px navy
- Body description: 16px navy at 85%, 1.5 line-height
- "What it looks like" / "When we use it" subhead: 12px Inter Bold uppercase navy at 60%
- Bullet list: 14px navy at 80%, with small `--ss-pink` dot bullets
- Cards equal-height with `align-items: stretch`, 24px gap
- Stagger fade-up left to right, 150ms apart
- Closing line: 16px Newsreader italic navy, centered, max-width 720px, 48px below cards

---

## Section 6 — What to Expect

**ID:** `#commitments`
**Treatment:** Light (white)
**Layout:** H2 centered. Below: a clean list of five commitments — each a short bold statement plus one sentence. List layout, not cards.

Carried forward from V1 with minor edits — this section is doing strong work and the research supports every commitment.

### Copy

```
EYEBROW: Working Together

H2: What you can expect from us.

────────────────────────────────
No lock-in.
Month-to-month after onboarding. If it's working you'll stay because it
works, not because a contract says you have to.

────────────────────────────────
Real people, fast.
Founder-led means no support tiers and no account-manager telephone game.
You reach the people who built it.

────────────────────────────────
Results over activity.
We measure what matters — qualified leads, pipeline, ROI — not opens and
impressions that look good in a report and mean nothing.

────────────────────────────────
No black boxes.
You see what the system is doing and why. Impressive-but-opaque isn't
trustworthy, and trust is the whole job.

────────────────────────────────
It gets better over time.
The system learns from every campaign. What you get in month six is sharper
than what you get in month one.

────────────────────────────────
```

### Component notes

- Commitment item: full-width row within max-width 760px, centered container
- Statement: Inter Bold 20px navy
- Supporting sentence: 16px navy at 80%, 1.5 line-height, sits directly under the statement
- 1px `--ss-border-subtle` divider between items
- 28px vertical padding per item
- No icons, no checkmarks
- Stagger fade-up, 100ms apart

---

## Section 7 — Final Invitation

**ID:** `#cta`
**Treatment:** Dark (`--ss-navy`)
**Layout:** Centered, max-width 720px, generous padding. Reuses `<FinalCTA>`.

### Copy

```
H2 (centered):
If you're tired of marketing chaos,
let's talk.

[Wrap "let's talk." in .italic-accent gradient — test on dark, fall back to solid pink if contrast is poor]

BODY (centered, 18px, white at 90%):
A short, focused demo. We'll show you how SuperSymm would work for a firm
like yours. No pressure — just a clear picture of what the system does.

PRIMARY CTA: Book a Demo →
SECONDARY CTA: Get Custom Pricing

TRUST LINE (smaller, white at 60%):
15-minute focused demo · We analyze your business context · No sales pressure
```

### Component notes

- Reuse the `<FinalCTA>` component from the platform pages
- Optional faded `--ss-pink` octagonal logomark watermark, 6% opacity, no animation
- Trust line uses middle-dot separators, wraps on mobile

---

## Section 8 — Footer

Standard SuperSymm footer. No customization.

---

## Internal linking map

| CTA / Link | Destination |
|---|---|
| Book a Demo | `/demo` |
| See the Platform | `/platform` |
| Get Custom Pricing | `/pricing` |
| Breadcrumb: Home | `/` |

**No deep links in the Five Principles section** (Section 4). The source document linked each principle to a sub-page; V1 policy is self-contained pages. Adding deep links is a V2 task once supporting sub-pages exist.

---

## Section background sequence

```
Section 1 (Hero)          bg: white
Section 2 (Mission)       bg: white
Section 3 (Team)          bg: white
Section 4 (Principles)    bg: --ss-bg-soft
Section 5 (AI)            bg: white
Section 6 (Expect)        bg: white
Section 7 (Final CTA)     bg: --ss-navy
Footer                    bg: --ss-bg-soft
```

The soft Section 4 (Principles) provides the only mid-page background variation, anchoring the page's intellectual center. Dark Section 7 closes.

---

## Accessibility

- Breadcrumb: semantic `<nav aria-label="Breadcrumb">` with `<ol>`
- Five principles render as a semantic `<ol>` with each principle as a list item
- AI cards render as semantic list items within a `<ul>`
- All interactive elements have visible focus rings
- Animation respects `prefers-reduced-motion`
- Heading hierarchy: one H1, multiple H2s, no H3s (the flat structure is intentional)
- Gradient italic: verify WCAG AA at the lightest gradient point — test the Section 7 dark-background instance specifically

---

## Build sequence (recommended)

1. **Foundation** — reuse all design tokens and components from platform pages
2. **Skeleton** — render the seven sections with placeholder content
3. **Real copy** — paste verbatim from this brief
4. **Static visuals** — team photo, otherwise typography-led throughout
5. **Section 5 visual emphasis on Augment card** — implement the chosen treatment (left accent border or background tint)
6. **Animations** — fade-up entrance, stagger for the principles and AI cards
7. **Accessibility audit** — keyboard nav, screen reader, motion preference, gradient contrast
8. **Performance audit** — Lighthouse; this page should score very high given minimal JS

---

## Asset checklist

- [ ] **Team photo of Chris and Chad — 960×540px landscape (Section 3)** — priority asset; real photo materially outperforms illustration for trust on an About page
- [ ] Confirm exact years of experience with Chris before launch (Section 3 references "more than twenty" combined and "more than a decade" individual)
- [ ] OG share image at 1200×630 (can be the team photo or a simple branded card)
- [ ] Internal routes: `/demo`, `/platform`, `/pricing` (all exist)

---

## Build notes for Claude Code

- Route to `/about`
- Use exact copy verbatim
- `.italic-accent` (gradient) used in: H1 (Section 1), Section 4 H2, Section 7 H2 — three instances, deliberately sparing
- `.italic-benefit` (solid navy italic) used on Section 4 principle subheads
- No animated imagery, no scroll-driven sections — fade-up entrance only
- Team photo is the one real image on the page; use the illustrated-avatar fallback if not provided
- Section 5 Augment card needs visual emphasis — recommended Option A (left accent border + "Most SuperSymm features" tag)
- `AboutPage` schema only — no Service or FAQ schema needed
- Reuse `<FinalCTA>`, `<Eyebrow>`, button, and section-padding components from the platform pages
- **No deep links from the principles section** — V1 policy keeps the page self-contained

---

*End of About page brief V2*
