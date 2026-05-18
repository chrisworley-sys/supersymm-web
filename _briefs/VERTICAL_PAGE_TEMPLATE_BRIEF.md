# Vertical / Solution Page — Template Brief

**Purpose:** Reusable page template for industry-specific solution pages
**Last updated:** May 2, 2026
**Status:** Ready for build
**Applies to:** Financial Advisors, Healthcare, and future verticals (Legal, Tax & Accounting, B2B Services)
**Visual ambition:** Deliberately light — typography-led, minimal illustration, no animated imagery, no scroll-driven sections
**Pattern reference:** Platform pages design system, simplified

---

## What this document is

This is the **shared skeleton** for all vertical pages. It defines structure, component architecture, design system, and the content slots each vertical fills. It is built once as a reusable page type.

Each vertical (Financial Advisors, Healthcare, etc.) has its own **content brief** that populates the slots defined here. The template never changes per vertical — only the content does.

This separation is the architecture. Build the template as a configurable page type. Adding a vertical later is a content exercise, not an engineering one.

---

## Strategic intent

Vertical pages answer a different question than platform pages.

Platform pages answer *"what does SuperSymm do?"*
Vertical pages answer *"do you understand my world?"*

A buyer landing on a vertical page is testing fluency. They want to see that SuperSymm knows what their day looks like, what their regulatory burden is, what their actual constraints are — before they'll believe any growth claim. The page earns the demo by demonstrating that fluency first, then connecting it to the platform.

This drives the structure: **the first half of the page is about them; the platform proof comes after you've earned the right to make claims.** For regulated verticals, the compliance fear is addressed before any growth argument is made.

Vertical pages are also often the *entry point* — a buyer searching "marketing for financial advisors" or "HIPAA-compliant patient marketing" lands here first, before ever seeing the homepage. The page must stand alone as a conversion surface. It is substantially self-contained: a buyer can convert from this page without navigating elsewhere.

---

## The content slot model

Every vertical page is the same seven sections. Each section has a fixed structure and vertical-specific content slots.

| Section | Structure (fixed) | Content slots (vertical-specific) |
|---|---|---|
| 1. Hero | Eyebrow + H1 + framing paragraph + CTAs | Category eyebrow, pain-aware headline, framing copy |
| 2. The Insight | Single oversized statement | The "we understand you" insight line |
| 3. The Methodology | 3 priority blocks | 3 vertical priorities (compliance leads for regulated verticals) |
| 4. Marketing Built For [Vertical] | 5 capability blocks + engagement model paragraph | 5 capabilities reframed in vertical language, engagement framing |
| 5. Integrations | Intro + tool logos/names grid | The specific tools this vertical uses |
| 6. FAQ | Accordion, 6–8 questions | Vertical-specific questions and answers |
| 7. Final CTA | Standard pattern | Vertical-flavored headline |

The template renders all seven. The content brief fills the slots.

---

## SEO architecture (per vertical)

Each vertical content brief specifies its own:
- Title tag (pattern: `Marketing for [Vertical] | SuperSymm`)
- Meta description (vertical-specific, ≤155 chars)
- H1 (vertical pain-aware headline)
- Primary keyword (e.g., "marketing for financial advisors," "HIPAA-compliant healthcare marketing")
- Secondary keywords (vertical-specific)
- FAQ schema markup (Section 6 questions are strong rich-result candidates — always implement FAQPage schema)
- Service schema with `audience` property set to the vertical

**Standard schema pattern (vertical fills the variables):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marketing for {VERTICAL}",
  "provider": { "@type": "Organization", "name": "SuperSymm" },
  "serviceType": "Marketing automation and lead generation",
  "audience": {
    "@type": "Audience",
    "audienceType": "{VERTICAL}"
  },
  "description": "{VERTICAL_META_DESCRIPTION}"
}
```

Plus a separate `FAQPage` schema block built from the Section 6 questions.

---

## Brand foundation

All design tokens, typography, and spacing inherited from the platform pages design system. See the Platform Overview brief for the full token reference.

**Vertical page constraints (intentional simplicity):**
- No animated imagery
- No scroll-driven sections
- No continuous loops
- Minimal illustration — at most one small supporting visual per section, many sections have none
- Typography-led throughout
- Section entrance fade-up only (600ms, 24px translate-Y), wrapped in `useReducedMotion()`
- Card hover: 4px lift, 200ms ease (the only hover interaction on the page)

**Gradient italic accent:** the `.italic-accent` (gradient purple-to-pink) and `.italic-benefit` (solid navy italic) utilities from the Lead Generation page are available. Use `.italic-accent` sparingly — H1 and the Section 2 insight statement only. Vertical pages should feel calm, not decorated.

---

## Section 1 — Hero

**ID:** `#hero`
**Treatment:** Light (white background)
**Layout:** Centered single column, max-width 900px. Breadcrumb, eyebrow, headline, framing paragraph, CTAs. Optional small supporting visual below the CTAs (vertical content brief decides; default is no image — the page can open on type alone for a calmer entry).

### Structure

```
BREADCRUMB: Home  /  Solutions  /  {Vertical}

EYEBROW: {Category eyebrow — e.g., "Marketing for Financial Advisors"}

H1: {Pain-aware headline — 1–2 lines}
[One emphasis phrase may use .italic-accent]

FRAMING PARAGRAPH:
{2–3 sentences. Names what the vertical does well, positions SuperSymm
as the system that scales it. ≤55 words.}

PRIMARY CTA: Get Custom Pricing →
SECONDARY CTA: Book a Demo
```

### Component notes

- Breadcrumb: centered, 14px navy at 50%, last segment at 90%
- Eyebrow: 13px Inter Medium uppercase, `--ss-purple`, 0.08em letter-spacing
- H1: Inter Black 56–64px, navy, sentence case, max 2 lines
- Framing paragraph: 18px navy at 90%, 1.6 line-height, max-width 680px, centered
- Primary CTA: yellow pill on white, navy text, 56px tall
- Secondary CTA: navy text-link with arrow
- Section padding: standard top, 80px bottom (tighter — the insight section follows immediately and the two should feel connected)
- Default: no hero image. If a vertical content brief specifies one, it sits below the CTAs at max 960px wide, 16px border-radius, no animation.

---

## Section 2 — The Insight

**ID:** `#insight`
**Treatment:** Light (white)
**Layout:** Single centered statement. Oversized typography. The visual centerpiece of the page's first half. No other content.

This is the most strategically important section. It is where the buyer decides whether SuperSymm understands their world or is running a find-and-replace template. The content brief must write this line with genuine fluency in the vertical.

### Structure

```
H2 (centered, oversized — quote-like moment):
{The insight statement. Two beats: how this vertical actually grows,
then how SuperSymm scales it. One emphasis phrase uses .italic-accent.}
```

### Component notes

- Section padding: 140px top/bottom (earns the breathing room)
- H2 type size: clamp(36px, 5.5vw, 64px)
- H2 max-width: 960px, centered
- Line-height: 1.2
- Optional: a thin 60px-wide `--ss-pink` rule, centered, 32px above the statement
- One emphasis phrase wrapped in `.italic-accent` (gradient)
- No body copy, no subhead, no CTA — single statement, full stop
- Stagger entrance: rule fades first, then statement 200ms after

---

## Section 3 — The Methodology

**ID:** `#methodology`
**Treatment:** Soft (`--ss-bg-soft`)
**Layout:** H2 and short intro centered. Three priority blocks below, stacked vertically (not a grid — each gets full width for a moment of focus). Each block is a number, a headline, and 2–3 sentences.

**Ordering rule:** For regulated verticals (Financial Advisors, Healthcare, Legal), the compliance priority always leads — it is block 01. This neutralizes the buyer's primary fear before any growth claim is made. The content brief follows this rule.

### Structure

```
EYEBROW: How We Work With {Vertical}

H2: {Methodology headline — vertical-specific}

INTRO (centered, max-width 700px):
{1–2 sentences framing the three priorities. ≤35 words.}

────────────────────────────────
01

{Priority 1 headline — compliance, for regulated verticals}

{2–3 sentences. ≤50 words.}
────────────────────────────────
02

{Priority 2 headline}

{2–3 sentences. ≤50 words.}
────────────────────────────────
03

{Priority 3 headline}

{2–3 sentences. ≤50 words.}
────────────────────────────────
```

### Component notes

- Priority block: full-width within container (max 860px), centered
- Number label: 40px Inter Black, `--ss-purple`
- Priority headline: Inter Bold 28px navy
- Body: 18px navy at 90%, 1.6 line-height
- 64px vertical gap between priority blocks
- Optional: a small line-art icon (40×40px, 1.5px navy stroke, no accent) next to each number — content brief decides; default is no icons (numbers carry the structure)
- Stagger fade-up, 150ms apart

---

## Section 4 — Marketing Built For [Vertical]

**ID:** `#capabilities`
**Treatment:** Light (white)
**Layout:** H2 and intro centered. Five capability blocks in a layout that reads as a list, not a grid (each capability gets a full row: a short benefit-led headline, a feature sub-label, and 1–2 sentences). Engagement-model paragraph folded in at the end of the section.

### Structure

```
EYEBROW: The Platform, For {Vertical}

H2: {Capabilities section headline}

INTRO (centered, max-width 700px):
{1–2 sentences. ≤35 words.}

────────────────────────────────
{Benefit-led headline 1}
{Feature sub-label, e.g. "Smart Campaigns"}
{1–2 sentences. ≤40 words.}
────────────────────────────────
{Benefit-led headline 2}
{Feature sub-label}
{1–2 sentences.}
────────────────────────────────
{Benefit-led headline 3}
{Feature sub-label}
{1–2 sentences.}
────────────────────────────────
{Benefit-led headline 4}
{Feature sub-label}
{1–2 sentences.}
────────────────────────────────
{Benefit-led headline 5 — compliance, for regulated verticals}
{Feature sub-label}
{1–2 sentences.}
────────────────────────────────

ENGAGEMENT MODEL PARAGRAPH (folded in below the five, centered, max-width 720px):
{The partner-led model, compressed and vertical-framed. We set it up,
you review, we meet, the system runs. ≤70 words. This replaces a
standalone "how it works" section.}
```

### Component notes

- Capability block: full-width row within container (max 900px)
- Benefit headline: Inter Bold 22px navy
- Feature sub-label: 13px Inter Medium uppercase `--ss-purple`, 0.06em letter-spacing, sits directly under the headline
- Body: 16px navy at 85%, 1.5 line-height
- Thin 1px `--ss-border-subtle` divider between capability blocks
- 32px vertical padding per block
- Engagement paragraph: 17px navy, 1.6 line-height, 64px below the last capability, with a subtle top border (`--ss-border-subtle`) to separate it from the capability list
- No illustrations in this section — it is a clean, scannable list
- Stagger fade-up on capability blocks, 100ms apart

---

## Section 5 — Integrations

**ID:** `#integrations`
**Treatment:** Light (white)
**Layout:** H2 and short intro centered. Below: a clean grid of integration names or logos. Closing reassurance line beneath.

This section handles a real, near-final objection: *"does this work with the tools I already use?"* For vertical buyers who have invested in a stack, naming their actual tools signals fluency the same way compliance language does. The tools are vertical-specific — the content brief supplies the list.

### Structure

```
EYEBROW: Works With Your Stack

H2: {Integration headline — e.g., "Built to work with the tools you already use."}

INTRO (centered, max-width 680px):
{1–2 sentences. The point: you don't rip out your stack; SuperSymm
connects to it. ≤40 words.}

[Integration grid — vertical-specific tool names/logos]

CLOSING LINE (centered, below grid):
{1 sentence reassurance, e.g. "Don't see your tool? Most stacks
integrate. We'll confirm on your first call."}
```

### Component notes

- Integration grid: tool logos in a responsive grid (4 columns desktop, 2 mobile), each in a contained card (`--ss-bg-soft` background, 16px border-radius, logo centered, 100px tall)
- If logos aren't available/licensed for use, fall back to text: tool names in a clean tag-style grid (pill shape, 1px `--ss-border-subtle`, 14px Inter Medium navy)
- **Logo usage note:** only use third-party logos if usage rights are clear. The text-tag fallback is always safe and is the recommended default until logo usage is confirmed. The content brief should default to text tags unless logos are explicitly cleared.
- Closing line: 15px navy at 70%, italic, centered, 32px below grid
- Section padding: standard, but this is a visually quiet section — lots of white space
- No hover animation on the grid items (or a very subtle 2px lift at most)

---

## Section 6 — FAQ

**ID:** `#faq`
**Treatment:** Light (white)
**Layout:** H2 centered. Below: an accordion of 6–8 questions, single column, max-width 800px, centered.

The FAQ handles the specific practical objections that would otherwise become silent exits. For regulated verticals these are largely compliance and operational questions. This section is also strong SEO real estate — implement `FAQPage` schema.

### Structure

```
EYEBROW: Common Questions

H2: {FAQ headline — e.g., "Questions financial advisors ask."}

[Accordion — 6–8 Q&A pairs from the vertical content brief]

Q: {Question}
A: {Answer — 2–4 sentences, plain language, directly answers the objection}

[repeat 6–8 times]
```

### Component notes

- Accordion item: full-width within max-width 800px container
- Question: Inter Bold 18px navy, with a +/× toggle indicator on the right that rotates on open
- Answer: 16px navy at 85%, 1.6 line-height, revealed on click with a 300ms ease height/opacity transition
- One item may be open by default (the most important objection — usually the lead compliance question for regulated verticals)
- Accordion: only one item open at a time (clicking a new one closes the previous), or allow multiple open — either is acceptable; single-open is cleaner
- 1px `--ss-border-subtle` divider between items
- Keyboard accessible: Enter/Space toggles, Escape closes; proper `aria-expanded` and `aria-controls`
- **FAQPage schema:** every Q&A pair must be included in a `FAQPage` JSON-LD block in the page head. This is non-negotiable for vertical pages — it is the highest-value SEO mechanic on the page.

---

## Section 7 — Final Invitation

**ID:** `#cta`
**Treatment:** Dark (`--ss-navy`)
**Layout:** Centered, max-width 720px, generous padding (140px+). Reuses the existing `<FinalCTA>` component.

### Structure

```
H2 (centered):
{Vertical-flavored headline. One emphasis phrase may use .italic-accent.}

BODY (centered, 18px, white at 90%):
{2–3 sentences, vertical-framed, emotion-forward. ≤50 words.}

PRIMARY CTA: Book a Demo →
SECONDARY CTA: Get Custom Pricing

PRICING LINE (smaller, white at 60%):
Engagement pricing is custom to your firm and goals.
We'll quote you a number after one call.
```

### Component notes

- Reuse the `<FinalCTA>` component from the platform pages
- Optional faded `--ss-pink` octagonal logomark watermark, 6% opacity, no animation
- Gradient italic on dark: test legibility; fall back to solid pink if contrast is poor (same note as Lead Generation page)

---

## Section background sequence

```
Section 1 (Hero)          bg: white
Section 2 (Insight)       bg: white
Section 3 (Methodology)   bg: --ss-bg-soft
Section 4 (Capabilities)  bg: white
Section 5 (Integrations)  bg: white
Section 6 (FAQ)           bg: white
Section 7 (Final CTA)     bg: --ss-navy
Footer                    bg: --ss-bg-soft
```

The single soft section (3) and dark section (7) provide the only background variation. The page is intentionally calm — variation comes from layout and typography, not color or motion.

---

## Internal linking map (standard across verticals)

| CTA / Link | Destination |
|---|---|
| Get Custom Pricing | `/pricing` |
| Book a Demo | `/demo` |
| Breadcrumb: Solutions | `/solutions` |

Optional, if the vertical content brief includes them: contextual text links from capability descriptions to the relevant platform page (`/platform/marketing-automation`, `/platform/lead-generation`, etc.). Default is no deep links — vertical pages are self-contained. The content brief decides per vertical.

---

## Accessibility

- Breadcrumb: semantic `<nav aria-label="Breadcrumb">` with `<ol>`
- Methodology and capability blocks render as semantic ordered/unordered lists
- FAQ accordion: full keyboard support, `aria-expanded`, `aria-controls`, proper focus management
- Integration grid: each logo has descriptive `alt` text (the tool name); text-tag fallback is inherently accessible
- All interactive elements have visible focus rings
- Animation respects `prefers-reduced-motion`
- Heading hierarchy: one H1, multiple H2s, no H3s needed (the flat structure is intentional)
- Gradient italic: verify WCAG AA at the lightest gradient point

---

## Build sequence (recommended)

1. **Build the template as a configurable page type** — a single React page component that accepts a vertical content config object (eyebrow, headline, insight, methodology blocks, capabilities, integrations, FAQ, CTA copy)
2. **Foundation** — reuse all design tokens and components from platform pages; reuse `<FinalCTA>`
3. **Skeleton** — render the template with placeholder content
4. **Wire the content config** — the Financial Advisors content brief and Healthcare content brief each provide a config object that populates the template
5. **FAQ schema** — implement `FAQPage` JSON-LD generated from the FAQ config
6. **Accessibility audit** — keyboard nav, screen reader, motion preference
7. **Performance audit** — Lighthouse; this page should score very high given the minimal JS footprint

---

## Build notes for Claude Code

- Build this as **one reusable page type** (e.g., `<VerticalPage config={...} />`), not as separate hand-built pages
- Each vertical is a content config object — the Financial Advisors and Healthcare content briefs supply these
- Route pattern: `/solutions/{vertical-slug}` (e.g., `/solutions/financial-advisors`, `/solutions/healthcare`)
- Use exact copy verbatim from each vertical content brief — do not paraphrase
- `.italic-accent` (gradient) used only in H1 and Section 2 insight; `.italic-benefit` not used on vertical pages (keep them calm)
- No animated imagery, no scroll-driven sections, no Lottie — fade-up entrance only
- Integration section defaults to text-tag treatment unless the content brief explicitly provides cleared logos
- `FAQPage` schema is mandatory on every vertical page
- Reuse `<FinalCTA>`, `<Eyebrow>`, button, and section-padding components from the platform pages

---

*End of Vertical Page Template brief*
