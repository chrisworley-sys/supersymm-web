# CLAUDE.md — SuperSymm Website Build
**Last Updated:** April 2026  
**Build Tool:** Claude Code  
**Editor:** VS Code  
**Stack:** React 18 + TypeScript + Vite + React Router v6 + Tailwind CSS + Framer Motion + shadcn/ui

---

## PROJECT OVERVIEW

SuperSymm is an AI marketing automation SaaS platform built specifically for SEC/FINRA-regulated Registered Investment Advisors (RIAs) and professional service firms. This repository is the **marketing website** — not the application dashboard.

**Primary goals of this site:**
1. Generate pricing inquiries and demo bookings
2. Communicate the 4-system platform story (Intelligence → Lead Gen → Automation → Optimization)
3. Establish compliance credibility for regulated industries (RIAs, healthcare, legal)

**Audience:** Business owners at solo/small professional service firms. Speak to outcomes, not features. Think: busy advisor who hates marketing, not a tech-savvy developer.

---

## SCOPE — PHASE 1 (BUILD THIS NOW)

Build ONLY these pages:

```
/ ..................... Homepage
/platform ............. Platform Overview
/platform/lead-generation .. Lead Generation System
/platform/marketing-automation .. Marketing Automation (stub — content pending)
/solutions ............ Solutions Overview (stub)
/solutions/financial-advisors .. RIA Solutions page (stub)
/pricing .............. Pricing / Contact form
/about ................ About Us (stub)
/privacy .............. Privacy Policy (placeholder)
/terms ................ Terms of Service (placeholder)
```

**Stubs** = render the page shell with correct nav/footer and a "Coming Soon" content area. No placeholder lorem ipsum anywhere — either real content or nothing.

## SCOPE — PHASE 2 (DO NOT BUILD YET)

Do NOT build these until Phase 2 is explicitly started:
- /platform/business-intelligence
- /platform/performance-optimization
- /platform/compliance
- /solutions/healthcare
- /solutions/legal
- /solutions/tax-accounting
- /solutions/b2b
- /blog (system)
- /case-studies
- /resources

When in doubt about scope: ask, don't build.

---

## FILE & FOLDER STRUCTURE

```
supersymm-web/
├── public/
│   ├── assets/
│   │   └── logos/
│   │       ├── logo-horizontal.png      # Full logo, dark bg
│   │       ├── logo-simple.png          # Logomark only, dark bg
│   │       └── nav-logo-circle.png      # Circle nav variant, accent-yellow bg
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── App.tsx                      # Root with Router + providers
│   │   ├── router.tsx                   # All route definitions
│   │   └── providers.tsx               # Theme, motion, etc.
│   │
│   ├── components/
│   │   ├── ui/                          # shadcn/ui generated — DO NOT hand-edit
│   │   │   └── (button, card, dialog, etc.)
│   │   │
│   │   ├── common/                      # SS-branded wrappers over shadcn primitives
│   │   │   ├── SSButton.tsx
│   │   │   ├── SSCard.tsx
│   │   │   ├── SSBadge.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageWrapper.tsx
│   │   │
│   │   └── sections/                    # Page section components
│   │       ├── Hero.tsx
│   │       ├── ProblemSection.tsx
│   │       ├── FourSystems.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── IndustriesGrid.tsx
│   │       ├── ToolComparison.tsx
│   │       ├── FinalCTA.tsx
│   │       └── (page-specific sections)
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── PlatformPage.tsx
│   │   ├── LeadGenerationPage.tsx
│   │   ├── MarketingAutomationPage.tsx
│   │   ├── SolutionsPage.tsx
│   │   ├── FinancialAdvisorsPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── PrivacyPage.tsx
│   │   ├── TermsPage.tsx
│   │   └── NotFoundPage.tsx
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.ts       # Framer Motion scroll helpers
│   │   └── useMediaQuery.ts
│   │
│   ├── lib/
│   │   ├── utils.ts                    # cn() and shared utilities
│   │   └── supabase.ts                 # Supabase client — stub for Phase 2
│   │
│   ├── styles/
│   │   ├── globals.css                 # CSS vars + Tailwind base + shadcn overrides
│   │   └── fonts.css                   # Google Fonts imports
│   │
│   └── types/
│       └── index.ts                    # Shared TypeScript interfaces
│
├── CLAUDE.md                           # This file
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

**Naming rules:**
- Component files: PascalCase (`SSButton.tsx`)
- Hook files: camelCase with `use` prefix (`useScrollAnimation.ts`)
- Page files: PascalCase with `Page` suffix (`HomePage.tsx`)
- Section files: PascalCase describing content (`FourSystems.tsx`)
- CSS/style files: kebab-case (`globals.css`)

---

## DESIGN SYSTEM

### Color Tokens (extend Tailwind — use `ss-*` prefix)

```typescript
// tailwind.config.ts — colors.ss
{
  purple: {
    100: '#F1F0F8',
    200: '#D1CBE6',
    300: '#ACA1D2',
    400: '#8978BE',
    500: '#6750A4',   // PRIMARY BRAND: CTAs, links, active states
    600: '#43336D',
    700: '#22193B',   // DARK BG: hero, nav, dark sections
  },
  violet: {
    300: '#B874CD',
    700: '#1B0A20',
  },
  blue: {
    300: '#7B87C8',
    500: '#354270',
    700: '#0057B8',   // LINKS
  },
  accent: {
    100: '#D5F77C',   // HIGHLIGHT: CTAs on dark bg, badges
    200: '#B0CD65',
    300: '#8DA450',
  },
  green: {
    100: '#66CEB6',
    500: '#3B7C6D',   // SUCCESS states
  },
  pink: {
    100: '#FCE5F1',
    300: '#F36BC1',
    400: '#D331A0',
    700: '#E977C1',   // Gradient endpoint
  },
  neutral: {
    100: '#F1F0F1',
    200: '#CECED1',
    300: '#A8A6AC',
    400: '#828189',
    500: '#5F5D66',
    600: '#3D3C42',
    700: '#1F1E21',   // DEFAULT BODY TEXT
  },
}
```

### CSS Variables (globals.css)

```css
:root {
  /* Gradients */
  --ss-gradient-hero: linear-gradient(93deg, #22193B 22%, #E977C1 124%);
  --ss-gradient-blue: linear-gradient(93deg, #22193B 73%, #0057B8 133%);
  --ss-gradient-text: linear-gradient(93deg, #6750A4, #E977C1);

  /* shadcn overrides — maps SS purple to shadcn primary */
  --primary: 262 36% 47%;           /* #6750A4 in HSL */
  --primary-foreground: 0 0% 100%;
  --ring: 262 36% 47%;
}
```

### Typography

**Font stack:**
- `font-sans` → `'Roboto', sans-serif` — body copy, UI labels, nav items
- `font-display` → `'Inter', sans-serif` — large section headers (Inter Black 900)
- `font-serif` → `'Newsreader', serif` — emphasis words in headings, editorial accent

**Google Fonts import (fonts.css):**
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&family=Inter:wght@400;700;900&family=Newsreader:ital,opsz,wght@0,6..72,300..800;1,6..72,300..800&display=swap');
```

**Tailwind fontFamily config:**
```typescript
fontFamily: {
  sans: ['Roboto', 'sans-serif'],
  display: ['Inter', 'sans-serif'],
  serif: ['Newsreader', 'serif'],
}
```

**Usage rules:**
- `font-display font-black` → large section titles (H2 at 48–60px)
- `font-serif italic` → emphasis words WITHIN headings (editorial accent, sparingly)
- `font-sans` → all body copy, UI text, buttons
- Minimum body text: 16px
- Heading line-height: 1.1x font size
- Body line-height: 1.4x font size

**Newsreader usage example:**
```tsx
// Good: emphasis word within a sans heading
<h2 className="font-display font-black text-5xl">
  Turn Marketing Into a{' '}
  <em className="font-serif font-light not-italic">Revenue Engine</em>{' '}
  That Runs Itself
</h2>
```

### Section Background Pattern

Sections MUST alternate in this sequence. Do not break the pattern:

```
1. DARK    bg-ss-purple-700 with hero gradient overlay
2. LIGHT   bg-white or bg-ss-neutral-100
3. DARK    bg-ss-purple-700
4. ACCENT  bg-ss-accent-100 — 1 per page max, use sparingly
5. DARK    bg-ss-violet-700 (deep, for closing CTA sections)
```

**CTA button rules by section:**
- On dark sections → `bg-ss-accent-100 text-ss-purple-700 rounded-full`
- On light sections → `bg-ss-purple-500 text-white rounded-full`
- Ghost/secondary → `border border-ss-purple-500 text-ss-purple-500 rounded-full`

### Gradient Text

```tsx
<span className="bg-gradient-to-r from-ss-purple-500 to-ss-pink-700 bg-clip-text text-transparent">
  emphasis phrase
</span>
```

### Logo Usage

| File | Use When |
|------|----------|
| `logo-horizontal.png` | Dark backgrounds (navbar, hero, dark sections) |
| `nav-logo-circle.png` | Favicon-scale, circle badge contexts |
| `logo-simple.png` | Logomark-only (icon contexts) |

---

## ANIMATIONS (Framer Motion)

### Standard scroll reveal — use for ALL section entries:
```tsx
const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
```

### Staggered card grids:
```tsx
const containerVariant = {
  visible: { transition: { staggerChildren: 0.12 } }
}
```

### Page transitions:
- Fade only (no slide — causes layout shift)
- Duration: 0.3s

### Rules:
- Every major section fades up on scroll entry
- Card grids use staggered children
- Hero can use staggered word/line reveal — max 1.2s total
- NO parallax on mobile
- Always wrap with reduced-motion check:
```tsx
const prefersReduced = useReducedMotion() // from framer-motion
```

---

## NAVIGATION

### Desktop Navbar layout:
```
[Logo] ........... [Platform ▾] [Solutions ▾] [Pricing] [About] ......... [Book Demo] [Get Pricing →]
```

- Sticky — starts transparent, transitions to `bg-ss-purple-700/95 backdrop-blur-md` on scroll
- Dropdowns use Radix UI DropdownMenu (via shadcn)
- "Book Demo" → ghost button → routes to `/pricing`
- "Get Pricing →" → filled accent pill → routes to `/pricing`

### Mobile Navbar:
- Hamburger icon → full-screen overlay
- Logo top-left, close top-right
- Stack nav links vertically
- CTA button pinned to bottom of overlay

### Platform Dropdown:
```
Platform Overview
Lead Generation System
Marketing Automation
Business Intelligence Engine    [badge: "Coming Soon"]
Performance Optimization        [badge: "Coming Soon"]
Compliance Hub                  [badge: "Coming Soon"]
```

### Solutions Dropdown:
```
Financial Advisors
Healthcare                      [badge: "Coming Soon"]
Tax & Accounting                [badge: "Coming Soon"]
Legal Professionals             [badge: "Coming Soon"]
B2B Services                    [badge: "Coming Soon"]
```

---

## ROUTING (React Router v6)

```tsx
const routes = [
  { path: '/',                               element: <HomePage /> },
  { path: '/platform',                       element: <PlatformPage /> },
  { path: '/platform/lead-generation',       element: <LeadGenerationPage /> },
  { path: '/platform/marketing-automation',  element: <MarketingAutomationPage /> },
  { path: '/solutions',                      element: <SolutionsPage /> },
  { path: '/solutions/financial-advisors',   element: <FinancialAdvisorsPage /> },
  { path: '/pricing',                        element: <PricingPage /> },
  { path: '/about',                          element: <AboutPage /> },
  { path: '/privacy',                        element: <PrivacyPage /> },
  { path: '/terms',                          element: <TermsPage /> },
  { path: '*',                               element: <NotFoundPage /> },
]
```

Scroll to top on route change — add to `App.tsx`:
```tsx
const { pathname } = useLocation()
useEffect(() => { window.scrollTo(0, 0) }, [pathname])
```

---

## CONTENT SOURCES

| Page | Brief File | Status |
|------|-----------|--------|
| Homepage | `BRIEF_01_Homepage.md` | Ready |
| Platform Overview | `BRIEF_02_Platform_Overview.md` | Ready |
| Lead Generation | `BRIEF_03_Lead_Generation.md` | Ready |
| Marketing Automation | `BRIEF_04_Marketing_Automation.md` | Pending |
| Solutions Overview | `BRIEF_05_Solutions_Overview.md` | Pending |
| Financial Advisors | `BRIEF_06_Financial_Advisors.md` | Pending |
| Pricing/Contact | `BRIEF_07_Pricing_Contact.md` | Pending |
| About Us | `BRIEF_08_About_Us.md` | Pending |

For PENDING pages: build correct shell (nav + footer + hero heading), leave body as:
```tsx
{/* TODO: Content pending — awaiting BRIEF_XX.md */}
```

Never invent copy. Never use lorem ipsum.

---

## DEMO BOOKING & CONTACT FORM

- All "Book Demo" and "Get Pricing" CTAs → route to `/pricing`
- `/pricing` contains a multi-step contact form
- Step 1: Name, Email, Company
- Step 2: Role (select), AUM/revenue range (select), Primary challenge (select)
- Step 3: How did you hear about us (select), Additional notes (textarea)
- Submit handler: `console.log(data)` stub — mark with TODO for Supabase in Phase 2
- Success state: "We'll be in touch within 24 hours" with logomark displayed

---

## INTEGRATIONS — PHASE STATUS

| Integration | Phase | Action |
|------------|-------|--------|
| Supabase | Phase 2 | Stub in `lib/supabase.ts` |
| GA4 | Phase 1 | Add gtag to `index.html`, use `VITE_GA4_MEASUREMENT_ID` env var |
| Calendar embed | N/A | Contact form at /pricing instead |

**Supabase stub:**
```typescript
// src/lib/supabase.ts
// TODO Phase 2: import { createClient } from '@supabase/supabase-js'
export const supabase = null
```

---

## SEO

Each page includes:
- `<title>` — format: `[Page Name] | SuperSymm`
- `<meta name="description">` — from content brief
- Canonical URL tag
- OG tags: og:title, og:description, og:image

Homepage JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SuperSymm",
  "applicationCategory": "BusinessApplication",
  "description": "Marketing automation platform for professional service firms"
}
```

---

## ENVIRONMENT VARIABLES

```env
# .env.local — never commit
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SUPABASE_URL=           # Phase 2
VITE_SUPABASE_ANON_KEY=      # Phase 2
```

---

## PERFORMANCE TARGETS

- LCP < 2.5s, CLS < 0.1, FID < 100ms
- All images: WebP, explicit width/height, lazy load below fold
- Hero: eager load
- Named Framer Motion imports only (no barrel imports)

---

## DECISION GUIDELINES

| Situation | Resolution |
|-----------|-----------|
| Missing copy | Use exact copy from brief. If not in brief → `{/* TODO */}` comment |
| Color unclear | Follow section background pattern above |
| Layout unclear | Desktop: max-w-7xl centered, px-6. Mobile: px-4, single column |
| Animation unclear | Standard fadeUp scroll reveal |
| Image placeholder | `bg-ss-purple-700/20 rounded-xl` div + aspect ratio + TODO comment |
| Form logic unclear | `console.log` stub + TODO |
| Phase 2 page reached | Shell + `<ComingSoonSection />` |

---

## DO NOT

- ❌ Use `any` type in TypeScript
- ❌ Hardcode hex values in components — use Tailwind tokens
- ❌ Edit `components/ui/` — shadcn only
- ❌ Install Supabase or auth packages in Phase 1
- ❌ Use lorem ipsum
- ❌ Use `<a href>` for internal navigation — use `<Link>`
- ❌ Build Phase 2 pages
- ❌ Invent copy, pricing, or feature claims not in briefs
- ❌ Place dark logo variant on light backgrounds

---

## BUILD ORDER

```
1.  Scaffold (Vite + TS + Tailwind + shadcn init)
2.  globals.css + fonts.css
3.  tailwind.config.ts (SS tokens)
4.  Navbar + Footer
5.  PageWrapper + router
6.  Homepage (most complete brief, highest priority)
7.  Platform Overview
8.  Lead Generation System
9.  Pricing / Contact form
10. Stub pages (Marketing Automation, Solutions, Financial Advisors, About, Privacy, Terms)
11. 404 page
12. SEO + performance pass
```

---

## COMPANY CONTEXT

- **Product:** SuperSymm — AI marketing automation for RIAs
- **Location:** Denton, Texas
- **Team:** Chris (product/marketing/sales) + Chad (technical)
- **Stage:** Pre-launch, bootstrapped
- **ICP:** Solo/small RIA firms, 1–10 advisors, $100M–500M AUM
- **Key differentiator:** End-to-end automation + built-in SEC/FINRA compliance

---

*This file is the source of truth for the build. When in conflict with anything else, this file wins.*
