# About Page — Build Brief

**Page URL:** `/about`
**Last updated:** May 2, 2026
**Status:** Ready for build
**Target word count:** ~650 words (concise — leaner than the source framework)
**Audience:** Prospects evaluating trustworthiness; people who clicked through from a sales conversation
**Primary goal:** Build trust, humanize the brand, route to demo or pricing
**Visual ambition:** Light — typography-led, one team photo, minimal illustration, no animation beyond fade-up
**Pattern reference:** Vertical page template (the calm, simple end of the design system)

---

## Strategic intent

The About page has one job the other pages don't: prove there are real people behind the platform who understand the problem deeply. It is not a feature page. It is not a second platform explanation. Buyers arrive here from two places — organic research ("who is this company?") and sales follow-up ("let me check them out before the call"). Both are trust-testing, not feature-evaluating.

So the page is deliberately short and human. It leads with why SuperSymm exists, states the mission plainly, introduces the two founders as actual people, sets honest expectations about working together, and gets out of the way. It does not re-explain the platform — the Platform Overview page does that. Anywhere this page would drift into mechanism, it links out instead.

The source framework recommended ~700 words across seven sections including a Methodology section and a "How AI Powers It" section. Both now live on the Platform Overview and Business Intelligence pages. Repeating them here would make the page longer and less human. This brief compresses to five sections and ~650 words, keeping the page focused on trust and people.

---

## SEO config

```
Title tag:        About SuperSymm | The Team Behind the Platform
Meta description: Making professional marketing accessible, manageable, and
                  effective. Meet the team behind SuperSymm's connected
                  marketing system.
Primary keyword:  None (About pages are not primary SEO targets)
Secondary:        Marketing automation platform, marketing for professional
                  services — included naturally, not forced
URL slug:         about
```

No schema beyond standard `Organization`. About pages don't need Service or FAQ schema.

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About SuperSymm",
  "description": "The team and mission behind SuperSymm's connected marketing system for professional service firms."
}
```

---

## Page structure overview

```
1. HERO                  Light    Why we exist — the problem, plainly stated
2. OUR MISSION           Soft     Accessible / Manageable / Effective
3. MEET THE TEAM         Light    Chris and Chad — real people
4. WHAT TO EXPECT        Light    Honest commitments — the differentiators
5. FINAL CTA             Dark     Standard pattern
6. FOOTER                Soft     Standard
```

Five content sections. Calm, fast, human. Reuses the vertical-page design treatment (typography-led, minimal motion).

---

## Brand foundation

All tokens, typography, spacing inherited from the design system. Same constraints as the vertical pages: no animated imagery, no scroll-driven sections, fade-up entrance only, wrapped in `useReducedMotion()`. `.italic-accent` (gradient) used sparingly — H1 and one mission phrase only.

---

## Section 1 — Hero

**ID:** `#hero`
**Treatment:** Light (white)
**Layout:** Centered single column, max-width 860px. Breadcrumb, eyebrow, headline, two short paragraphs, CTAs. No image in the hero (the team photo gets its own moment in Section 3 — putting it here would dilute it).

### Copy

```
BREADCRUMB: Home  /  About

EYEBROW: About SuperSymm

H1: Marketing shouldn't require
    a marketing degree.

[Wrap "a marketing degree." in .italic-accent gradient]

BODY (centered, max-width 680px):
Most professional service firms know they need marketing. But between
disconnected tools, generic tactics, and the hours it takes to manage it all,
marketing becomes something to survive instead of something that works.

We built SuperSymm to change that — a connected system intelligent enough to
understand your business, automated enough to not consume your week, and
effective enough to actually drive growth.

PRIMARY CTA: Book a Demo →
SECONDARY CTA: See the Platform
```

### Component notes

- H1: Inter Black 56–64px, navy, sentence case, 2 lines
- Body: 18px navy at 90%, 1.6 line-height, two short paragraphs
- Primary CTA: yellow pill on white, navy text, 56px tall
- Secondary CTA: navy text-link with arrow, routes to `/platform`
- Section padding: standard top, 80px bottom

---

## Section 2 — Our Mission

**ID:** `#mission`
**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** H2 centered. Below: three mission blocks in a row on desktop (Accessible / Manageable / Effective), stacked on mobile. Each is a one-word headline plus 2–3 sentences.

### Copy

```
EYEBROW: Why We Exist

H2: Making marketing accessible,
    manageable, and effective.

[Wrap "accessible, manageable, and effective." in .italic-accent gradient]

────────────────────────────────
ACCESSIBLE

Professional marketing shouldn't require a marketing degree or a six-figure
budget. We built SuperSymm so small and mid-sized firms get the kind of
intelligent system enterprise companies use — at a price and a time cost
that actually make sense.

────────────────────────────────
MANAGEABLE

Most firms drown in marketing complexity: a dozen tools, no clear path,
hours that add up to nothing. SuperSymm unifies it into one system.
You review and approve. The system handles the rest.

────────────────────────────────
EFFECTIVE

Activity without outcomes isn't marketing — it's busywork. SuperSymm is
built for measurable results: qualified leads you can track, ROI you can
prove, growth you can sustain.

────────────────────────────────
```

### Component notes

- Mission block: `--ss-white` background, no border, 32px padding, 16px border-radius
- One-word headline: Inter Bold 18px uppercase, `--ss-purple`, 0.08em letter-spacing
- Body: 16px navy at 85%, 1.6 line-height
- Three blocks equal-height, `align-items: stretch`, 24px gap
- Stagger fade-up left to right, 120ms apart
- No icons — the one-word labels carry the structure (keeps it calm; the source framework suggested icons but they'd add visual noise to a page that should feel human and quiet)

---

## Section 3 — Meet the Team

**ID:** `#team`
**Treatment:** Light (white)
**Layout:** H2 and one-line intro centered. Below: a team photo (Chris and Chad together), then two short founder blocks side by side on desktop, stacked on mobile.

This is the trust center of the page. Real faces, real roles, no corporate distance.

### Copy

```
EYEBROW: The People Behind It

H2: A two-person company,
    on purpose.

INTRO (centered, max-width 680px):
SuperSymm is built and run by two people who got tired of watching good
firms lose to bad marketing infrastructure. No account managers. No layers.
When you work with us, you work with us.

[TEAM PHOTO — Chris and Chad together, see visual spec]

────────────────────────────────
CHRIS

Co-Founder — Product, Strategy, Marketing, Operations

Chris owns how SuperSymm works and how it goes to market. He spends his time
with customers, in the strategy, and on the parts of marketing most platforms
ignore. If you talk to SuperSymm about your business, you're talking to Chris.

────────────────────────────────
CHAD

Co-Founder & CTO — Engineering, AI, Platform

Chad builds the system. The intelligence layer, the automation, the
connected architecture that makes the whole thing work as one — that's his.
He's the reason "agentic" is a description here, not a marketing word.

────────────────────────────────
```

### Visual specifications

**[FPO: team_photo.jpg — 960×540px, landscape]**

A single photo of Chris and Chad together. Professional but approachable — not stiff corporate headshots, not overly casual. Natural setting (workspace, neutral background). Sits centered between the intro and the two founder blocks, max-width 880px, 16px border-radius, subtle drop shadow. No animation.

**If no photo is available at launch:** use two simple illustrated avatar placeholders (circle, abstract face, navy linework on `--ss-bg-purple-light`) — one per founder, placed at the top of each founder block instead of a shared photo. Clearly placeholder-styled. Replace with a real photo as soon as possible — on an About page specifically, a real photo materially outperforms an illustration for trust. Flag this as a priority asset.

### Component notes

- Founder block: no card treatment — open layout, just the content
- Founder name: Inter Bold 20px navy
- Role line: 14px Inter Medium `--ss-purple`, sits directly under the name
- Body: 16px navy at 85%, 1.6 line-height
- Two founder blocks side by side, 48px gap, equal width
- The "you're talking to Chris" and "agentic is a description, not a marketing word" lines are intentional and load-bearing — they signal directness and substance. Do not soften.

---

## Section 4 — What to Expect

**ID:** `#commitments`
**Treatment:** Light (white)
**Layout:** H2 centered. Below: a clean list of five commitments — each a short bold statement plus one sentence. List layout, not cards. This is the differentiation-from-agencies-and-platforms section.

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
A two-person company means no support tiers and no account-manager
telephone game. You reach the people who built it.

────────────────────────────────
Results over activity.
We measure what matters — qualified leads, pipeline, ROI — not opens
and impressions that look good in a report and mean nothing.

────────────────────────────────
No black boxes.
You see what the system is doing and why. Impressive-but-opaque isn't
trustworthy, and trust is the whole job.

────────────────────────────────
It gets better over time.
The system learns from every campaign. What you get in month six is
sharper than what you get in month one.

────────────────────────────────
```

### Component notes

- Commitment item: full-width row within max-width 760px, centered container
- Statement: Inter Bold 20px navy
- Supporting sentence: 16px navy at 80%, 1.5 line-height, sits directly under the statement
- 1px `--ss-border-subtle` divider between items
- 28px vertical padding per item
- No icons, no checkmarks — the source framework suggested checkmarks but the clean typographic list reads more confident and less salesy
- Stagger fade-up, 100ms apart

---

## Section 5 — Final Invitation

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

## Section 6 — Footer

Standard SuperSymm footer. No customization.

---

## Internal linking map

| CTA / Link | Destination |
|---|---|
| Book a Demo | `/demo` |
| See the Platform | `/platform` |
| Get Custom Pricing | `/pricing` |
| Breadcrumb: Home | `/` |

The "See the Platform" secondary CTA in the hero is the intentional route for anyone who arrived wanting mechanism depth — the About page sends them to the Platform Overview rather than re-explaining.

---

## What changed from the source framework (rationale)

- **Cut "Methodology" section** — now lives on the Platform Overview page. Repeating it here made the page longer and less human.
- **Cut "How AI Powers It" section** — now lives on the Platform Overview and Business Intelligence pages. The team section handles the AI-credibility beat in one honest line ("the reason agentic is a description, not a marketing word") instead of a full section.
- **Cut the "What We Believe" optional section** — the five commitments in Section 4 carry the values work more concretely than a beliefs list.
- **Tightened to ~650 words** from the framework's ~700+, per the request for concise.
- **Removed all icons and checkmarks** the framework suggested — the page reads more confident and human as clean typography. Calmer, less salesy.
- **Kept Mission-First** (the framework's recommended Option A) — problem → mission → people → expectations is the right trust arc.

---

## Build notes for Claude Code

- Route to `/about`
- Use exact copy verbatim
- `.italic-accent` (gradient) used only in H1, Section 2 H2, and Section 5 H2 — three instances, deliberately sparing
- No animated imagery, no scroll-driven sections — fade-up entrance only
- Team photo is the one real image on the page; if unavailable use the illustrated-avatar fallback and flag the real photo as a priority asset (it materially affects trust on this page specifically)
- Reuse `<FinalCTA>`, `<Eyebrow>`, button, and section-padding components
- `AboutPage` schema only — no Service or FAQ schema needed

---

## Asset checklist

- [ ] **Team photo of Chris and Chad — 960×540px landscape (Section 3)** — priority asset; real photo materially outperforms illustration for trust on an About page
- [ ] OG share image at 1200×630 (can be the team photo or a simple branded card)
- [ ] Internal routes: `/demo`, `/platform`, `/pricing` (all exist)

---

*End of About page brief*
