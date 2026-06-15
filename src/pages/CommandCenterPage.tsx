import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  Target,
  Zap,
  TrendingUp,
  Users,
  Building2,
  AlertTriangle,
  Clock,
  X,
} from 'lucide-react'
import type React from 'react'

import CommandCenterNav from '@/components/common/CommandCenterNav'
import PageWrapper from '@/components/common/PageWrapper'
import FooterV2 from '@/components/sections/v2/FooterV2'
import BIHeroSection from '@/components/sections/business-intelligence/BIHeroSection'
import ChallengeIllustration from '@/components/sections/marketing-automation/illustrations/ChallengeIllustration'
import MarketingFunnel from '@/components/sections/command-center/MarketingFunnel'
import LeadJourney from '@/components/sections/v2/LeadJourney'

/* ────────────────────────────────────────────────────────────────
   Shared styles & motion
   ──────────────────────────────────────────────────────────────── */

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(93deg, #8978BE, #E977C1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const gradientTextDark: React.CSSProperties = {
  background: 'linear-gradient(93deg, #ACA1D2, #F36BC1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const italicBenefit: React.CSSProperties = {
  fontFamily: "'Newsreader', serif",
  fontStyle: 'italic',
  color: 'rgba(31, 30, 33, 0.70)',
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ────────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────────── */

const layerCallouts = [
  {
    Icon: Brain,
    label: 'Layer 01 · Intelligence',
    headline: 'Know Your Business',
    sub: 'Your market, buyers, voice, and compliance posture — the foundation every other layer runs on.',
    anchor: '#layer-intelligence',
  },
  {
    Icon: Target,
    label: 'Layer 02 · Strategy',
    headline: 'Build the Funnels',
    sub: 'Channel mix, messaging, sequencing, and campaign blueprints built from your business context.',
    anchor: '#layer-strategy',
  },
  {
    Icon: Zap,
    label: 'Layer 03 · Execution',
    headline: 'Generate Leads',
    sub: 'Content shipped, leads scored, distribution everywhere. One approval — published across channels.',
    anchor: '#layer-execution',
  },
  {
    Icon: TrendingUp,
    label: 'Layer 04 · Optimization',
    headline: 'Optimize & Analyze',
    sub: 'Performance data sharpens Intelligence so the next campaign starts smarter than the last.',
    anchor: '#layer-optimization',
  },
]

const pillars = [
  {
    num: '01',
    title: 'Disconnected Execution',
    h3Before: 'Marketing running in silos',
    h3Highlight: 'to a connected platform.',
    problem: "Your SEO, email, and social all run in separate silos. Insights stay trapped inside each tool — and no one's connecting the dots.",
    solution: 'One intelligence layer connects every channel — so what works anywhere improves everything.',
  },
  {
    num: '02',
    title: 'Inconsistent Brand',
    h3Before: 'Inconsistent communications',
    h3Highlight: 'to one voice across channels.',
    problem: 'Brand voice drifts by channel. Prospects see a different story on LinkedIn, your website, and in email. Every touchpoint feels like starting over.',
    solution: 'One messaging framework, built once, applied consistently across every channel and campaign.',
  },
  {
    num: '03',
    title: 'No Intelligence Layer',
    h3Before: 'Random tactics and activity',
    h3Highlight: 'to intelligence driven decisioning.',
    problem: "Content gets created without real market insight. You're executing tactics without knowing whether they're the right ones.",
    solution: 'Strategy built from real market intelligence — so every tactic has a purpose and every dollar goes further.',
  },
]

const stats = [
  { Icon: Users, value: '58%', label: 'run marketing manually or inconsistently' },
  { Icon: Building2, value: '22%', label: 'hire agencies at $5k+ per month' },
  { Icon: AlertTriangle, value: '54%', label: 'say DIY attempts look unprofessional' },
  { Icon: Clock, value: '40 hrs', label: 'per month spent on full DIY marketing' },
]

const challenges = [
  {
    headline: 'Fragmentation',
    body: 'Buyers skim answers (AI & search), scan social, and stream or surf then click.',
    bg: '#C8BFEA',
  },
  {
    headline: 'Signal Loss',
    body: 'Privacy, tracking loss, and modern algorithms punish spray-and-pray.',
    bg: '#D4C2E8',
  },
  {
    headline: 'Revenue Misalignment',
    body: '"More/Cheaper leads" ≠ pipeline. Revenue alignment or fail.',
    bg: '#BFC6E6',
  },
]

const CHALLENGE_BORDER_COLOR = 'rgba(103, 80, 164, 0.1)'

type Layer = {
  id: string
  num: string
  name: string
  tagline: string
  description: string
  bullets: string[]
  unique: string
  learnMore: string
  link: string
  borderColor: string
}

const layers: Layer[] = [
  {
    id: 'layer-intelligence',
    num: '01',
    name: 'Intelligence',
    tagline: 'The context layer.',
    description:
      "The foundation of the command center. Intelligence is what the system knows about your business — your market, your buyers, your differentiators, your voice, your compliance posture. It's not a step. It's the context that runs through everything else, making every capability personalized to your business and connected to the others.",
    bullets: [
      'Market and competitor intelligence',
      'Audience research and segmentation',
      'Brand voice and positioning',
      'Compliance posture and regulatory framework',
    ],
    unique: 'This is what makes SuperSymm different. Intelligence first, execution second.',
    learnMore: 'Learn More About Business Intelligence',
    link: '/platform/business-intelligence',
    borderColor: '#6750A4',
  },
  {
    id: 'layer-strategy',
    num: '02',
    name: 'Strategy',
    tagline: 'The plan.',
    description:
      'Strategy draws from Intelligence to decide what to say, where, when, and to whom. Channel mix, messaging architecture, sequencing, campaign blueprints — all built from your business context, not generic best practices.',
    bullets: [
      'Cross-channel strategy and sequencing',
      'Messaging framework per audience segment',
      'Campaign blueprints and journey design',
      'Compliance posture built in from day one',
    ],
    unique: 'Your strategy. Not a template applied to your business.',
    learnMore: 'See How Strategy Works',
    link: '/platform',
    borderColor: '#E977C1',
  },
  {
    id: 'layer-execution',
    num: '03',
    name: 'Execution',
    tagline: 'The engine.',
    description:
      'Strategy turns into shipped marketing. Content created, distributed across every channel, leads captured, scored, and routed. One approval — published everywhere. Compliant by default for regulated industries.',
    bullets: [
      'AI content creation in your voice',
      'Multi-channel distribution (social, email, ads, blog)',
      'Lead capture, scoring, and routing',
      '5-year archiving for regulated industries',
    ],
    unique: 'One approval. Distributed everywhere. Compliance built in, not bolted on.',
    learnMore: 'Explore Marketing Automation',
    link: '/platform/marketing-automation',
    borderColor: '#8DA450',
  },
  {
    id: 'layer-optimization',
    num: '04',
    name: 'Optimization',
    tagline: 'The feedback loop.',
    description:
      'Every interaction teaches the system. Performance data feeds back into Intelligence, sharpening context for the next campaign. Your marketing improves itself — automatically.',
    bullets: [
      'Real-time analytics and attribution',
      'Automated A/B testing across channels',
      'Strategy refinement that compounds',
      'Performance insights that re-train Intelligence',
    ],
    unique: 'Most platforms give you data. SuperSymm gives you insights and takes action automatically.',
    learnMore: 'See Performance Optimization',
    link: '/platform',
    borderColor: '#66CEB6',
  },
]

const capabilities = [
  {
    num: '01',
    title: 'Content Engine',
    body: 'AI-generated content in your voice, across every format your buyers consume — long-form articles, social posts, email campaigns, ad creative, lead magnets, video scripts. Every piece reflects your positioning, not a generic template.',
  },
  {
    num: '02',
    title: 'Multi-Channel Distribution',
    body: 'One approval, distributed everywhere your buyers research — LinkedIn, email, search, paid social, blog, retargeting. Channel-specific formatting handled automatically.',
  },
  {
    num: '03',
    title: 'Lead Capture & Qualification',
    body: 'Always-on lead capture — landing pages, forms, gated assets, calculators, assessments. Behavioral scoring against your ICP. Hot leads alert your sales team in real time.',
  },
  {
    num: '04',
    title: 'Campaign Orchestration',
    body: 'Multi-touch, multi-channel campaigns that adapt to behavior. Nurture sequences that branch based on engagement. Retargeting and lookalike audiences built from your actual best customers.',
  },
  {
    num: '05',
    title: 'Compliance & Archiving',
    body: 'Pre-publish review workflows, regulation-aware AI, 5-year archiving with audit trails. Built for SEC Marketing Rule, FINRA, HIPAA, and State Bar requirements.',
  },
  {
    num: '06',
    title: 'Intelligence & Reporting',
    body: 'Real-time dashboard showing campaign performance, lead pipeline, and revenue attribution. Quarterly strategic reviews with our team.',
  },
  {
    num: '07',
    title: 'Content Hub',
    body: 'A central library of every asset — articles, social posts, ads, lead magnets, sales collateral — versioned, tagged by buyer stage, and ready to deploy anywhere in the system.',
  },
  {
    num: '08',
    title: 'Change Management',
    body: 'Coordinated rollouts when strategy shifts. Content updates, sequence revisions, and team enablement are tracked together so the system stays coherent through every pivot.',
  },
  {
    num: '09',
    title: 'Funnel Builder',
    body: 'Drag-and-drop funnel construction with templates for common journeys. Landing pages, forms, sequences, and offers connected into complete buyer journeys — without engineering tickets.',
  },
]

const compliancePillars = [
  {
    title: 'Pre-Publish Review',
    body: 'Routes through your existing workflow before publishing.',
  },
  {
    title: '5-Year Archiving',
    body: 'Every post, email, ad archived with metadata.',
  },
  {
    title: 'Regulation-Aware AI',
    body: 'SEC, FINRA, HIPAA, State Bar awareness baked in.',
  },
  {
    title: 'Audit-Ready Records',
    body: 'Built for the questions regulators actually ask.',
  },
]

const aiBoxes = [
  {
    headline: 'Accelerate Insights',
    body: "Pivot to what works faster. Real-time data surfaces what's landing — and what needs a new angle — so you're always amplifying ideas that move people.",
    bg: '#3D2F6A',
  },
  {
    headline: 'Build Systems',
    body: 'Not just scheduled posts. An interconnected system of communication where every touchpoint informs the next — so your audience gets a coherent story, not scattered messages.',
    bg: '#2F2159',
  },
  {
    headline: 'Find Signals',
    body: "Sort through the noise to identify what's working to amplify it and what isn't to pivot — before the budget runs out.",
    bg: '#362761',
  },
]

const corePrinciples = [
  {
    number: '01',
    headline: 'Intelligence before execution.',
    subhead: 'Strategy first, tactics second.',
    body: 'We start by understanding your business — your market, your buyers, your unique value. That intelligence becomes the foundation for everything that follows. Right strategy, then right execution.',
    accent: '#D5F77C',
    glow: 'rgba(213,247,124,0.09)',
  },
  {
    number: '02',
    headline: 'Systems then tools.',
    subhead: 'Design the system first, then integrate tools.',
    body: 'Tools are commodities. What matters is how they connect. We build a complete system where lead generation feeds into marketing automation, which feeds into performance optimization — all powered by intelligence. Tools serve the system, not the other way around.',
    accent: '#F36BC1',
    glow: 'rgba(243,107,193,0.10)',
  },
  {
    number: '03',
    headline: 'Augmentation then automation.',
    subhead: 'AI executes the work. You maintain control.',
    body: "We don't believe in black boxes. The platform handles the structured work — content creation, lead scoring, campaign distribution — while you stay in the loop with complete visibility and strategic approval. You make the decisions. The system does the forty hours of work.",
    accent: '#B874CD',
    glow: 'rgba(184,116,205,0.10)',
  },
  {
    number: '04',
    headline: 'Complete journey, not individual pieces.',
    subhead: 'Handle the entire lifecycle from attract to optimize.',
    body: "Lead generation captures prospects. Marketing automation nurtures them. Performance optimization improves every stage. Nothing falls through the cracks because it's one connected system — attract, capture, nurture, convert, retain, optimize.",
    accent: '#66CEB6',
    glow: 'rgba(102,206,182,0.09)',
  },
  {
    number: '05',
    headline: 'Built for businesses solving real problems.',
    subhead: 'Purpose-built for teams managing real constraints.',
    body: "We design for how your business actually operates — limited time, strict budgets, compliance requirements. Whether you're an RIA managing SEC rules, healthcare managing HIPAA, or any firm solving real problems, our approach starts with your constraints, not ideal scenarios.",
    accent: '#7B87C8',
    glow: 'rgba(123,135,200,0.10)',
  },
]

const PRINCIPLE_BORDER = 'rgba(255,255,255,0.08)'

type IndustryItem = { name: string; badge: string | null; body: string; link: string }

const industries: IndustryItem[] = [
  {
    name: 'Financial Advisors',
    badge: 'SEC / FINRA',
    body: 'Generate qualified leads while meeting SEC compliance requirements. Built-in archiving and approval workflows.',
    link: '/solutions/financial-advisors',
  },
  {
    name: 'Healthcare Providers',
    badge: 'HIPAA',
    body: 'Patient acquisition with HIPAA-compliant automation and encrypted communications.',
    link: '/solutions/healthcare',
  },
  {
    name: 'Legal Professionals',
    badge: 'Bar Compliant',
    body: 'Business development that runs itself while you bill hours. State bar compliant marketing automation.',
    link: '/solutions/legal',
  },
  {
    name: 'B2B Services',
    badge: null,
    body: 'Consistent lead generation for consultants, agencies, and service providers. Multi-channel execution at scale.',
    link: '/solutions/b2b-services',
  },
]

const comparisonRows = [
  { label: 'Cost', pointTools: '$300–600/mo + your time', agency: '$3K–5K/mo retainer', supersymm: 'Custom' },
  { label: 'Speed', pointTools: 'Whenever you have time', agency: '2-week turnaround', supersymm: 'Same-day' },
  { label: 'Visibility', pointTools: 'You piece it together', agency: 'Monthly report', supersymm: 'Real-time' },
  { label: 'Compliance', pointTools: 'Your problem', agency: 'Sometimes', supersymm: 'Built in' },
  { label: 'Strategy', pointTools: 'You provide it', agency: 'Locked in their team', supersymm: 'Yours, with our team in the room' },
  { label: 'Time you spend', pointTools: '8–12 hrs/week', agency: '2–4 hrs/week', supersymm: '<1 hr/week' },
  { label: 'Accountability', pointTools: 'All on you', agency: 'Outsourced', supersymm: 'Real humans, real ownership' },
]

const industryBadges = ['SEC / FINRA', 'HIPAA', 'State Bar', 'Configurable']

/* ────────────────────────────────────────────────────────────────
   Hero (custom — uses HeroV2Video pattern + V5 copy + layer callouts)
   ──────────────────────────────────────────────────────────────── */

function HeroSection() {
  const prefersReduced = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (prefersReduced) {
      el.pause()
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [prefersReduced])

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.08 } },
  }

  const itemVariants: Variants = {
    hidden: prefersReduced ? {} : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-ss-purple-700"
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        poster="/assets/HomePageVid-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ background: 'linear-gradient(93deg, #22193B 22%, #E977C1 124%)' }}
      >
        <source
          src="https://res.cloudinary.com/dyqu41ph3/video/upload/v1779077961/HomePageVid_w48srw.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* SS brand gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(34,25,59,0.35) 0%, rgba(233,119,193,0.15) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 ss-container py-32 text-center"
        style={{ paddingTop: 'calc(5rem + 80px)' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="ss-badge-accent mb-6 inline-flex"
            >
              SuperSymm Marketing Command Center
            </motion.span>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black mb-6 text-white"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95 }}
            >
              <span className="block">Spend your time on clients.</span>
              <span className="block" style={gradientTextDark}>
                Not on marketing tools.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-sans leading-[1.6] mx-auto mb-6"
              style={{
                fontSize: '20px',
                color: 'rgba(255,255,255,0.90)',
                maxWidth: '720px',
                marginTop: '24px',
              }}
            >
              SuperSymm is the marketing command center for professional service firms.
              We build the strategy, run the system, and deliver qualified leads — without
              the agency price tag or the tool sprawl.
            </motion.p>

            {/* Sub-tagline */}
            <motion.p
              variants={itemVariants}
              className="font-sans italic"
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: '18px',
                color: 'rgba(255,255,255,0.70)',
                marginBottom: '32px',
              }}
            >
              Strategy in. Campaigns out.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row flex-wrap items-center justify-center gap-4"
            >
              <motion.div
                whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              >
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-full font-sans font-semibold px-7 bg-ss-accent-100 text-ss-purple-700 no-underline"
                  style={{ height: '56px', fontSize: '16px' }}
                >
                  Get Custom Pricing <ArrowRight className="size-4" />
                </a>
              </motion.div>

              <a
                href="#integrated-systems"
                className="font-sans font-medium text-white hover:underline inline-flex items-center gap-1.5"
                style={{ fontSize: '16px' }}
              >
                See How It Works <span aria-hidden="true">↓</span>
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={itemVariants}
              className="font-sans"
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.60)',
                marginTop: '24px',
              }}
            >
              Trusted by financial advisors, healthcare providers, and professional service firms.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────
   Layer Callouts — full strip below hero, v2-video PlatformCallouts style
   ──────────────────────────────────────────────────────────────── */

function LayerCallouts() {
  const prefersReduced = useReducedMotion()

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] } },
  }

  return (
    <section
      id="layer-callouts"
      style={{
        background: 'linear-gradient(180deg, #3A2460 0%, #2D1B4E 100%)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4"
        variants={prefersReduced ? {} : containerVariants}
        initial={prefersReduced ? false : 'hidden'}
        whileInView={prefersReduced ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        {layerCallouts.map(({ Icon, label, headline, sub, anchor }, i) => (
          <motion.div
            key={label}
            variants={prefersReduced ? {} : itemVariants}
            className="relative"
            style={{
              borderRight: i < layerCallouts.length - 1 ? '1px solid rgba(255,255,255,0.07)' : undefined,
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <a
              href={anchor}
              className="group flex flex-col items-center text-center gap-5 px-8 pt-14 pb-16 lg:px-12 lg:pt-16 lg:pb-20 h-full no-underline"
              style={{ transition: 'background 0.18s' }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = ''
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-ss-accent-100/12 flex items-center justify-center shrink-0 group-hover:bg-ss-accent-100/22 transition-colors">
                <Icon className="size-5 text-ss-accent-100/80 group-hover:text-ss-accent-100 transition-colors" />
              </div>

              <div className="flex-1">
                <p className="font-sans text-[11px] uppercase tracking-[0.10em] font-semibold text-white/45 mb-1.5">
                  {label}
                </p>
                <h3 className="font-display font-bold text-[26px] leading-[1.15] text-white mb-2">
                  {headline}
                </h3>
                <p className="font-sans text-[14px] leading-[1.55]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {sub}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-ss-accent-100/65 group-hover:text-ss-accent-100 transition-colors">
                Learn more <ArrowRight className="size-3.5" />
              </span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────
   Main Page
   ──────────────────────────────────────────────────────────────── */

export default function CommandCenterPage() {
  const prefersReduced = useReducedMotion()
  const [contentMapView, setContentMapView] = useState<'backend' | 'example'>('backend')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isPrinciplesOpen, setIsPrinciplesOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isPrinciplesOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isPrinciplesOpen])

  useEffect(() => {
    if (!isPrinciplesOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPrinciplesOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isPrinciplesOpen])

  const rv: Variants = prefersReduced ? { hidden: {}, visible: {} } : fadeUp
  const rs: Variants = prefersReduced ? { hidden: {}, visible: {} } : stagger

  useEffect(() => {
    document.title = 'Marketing Command Center for Professional Service Firms | SuperSymm'
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total <= 0) return
      setScrollProgress((window.scrollY / total) * 100)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const inView = (margin = '-80px') => ({
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true, margin } as const,
  })

  return (
    <PageWrapper>
      <CommandCenterNav />

      {/* Scroll progress bar */}
      <div
        className="fixed left-0 right-0 h-0.5 bg-ss-neutral-200/40 z-40"
        style={{ top: '64px' }}
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-ss-purple-500 to-ss-pink-700 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main>
        {/* ── SECTION 1: Hero ── */}
        <HeroSection />
        <LayerCallouts />

        {/* ── SECTION 2: The Problem ── */}
        <section id="problem" className="bg-white">
          <div
            className="mx-auto w-full max-w-[1200px] px-6"
            style={{ paddingTop: 'clamp(96px, 10vw, 140px)', paddingBottom: '60px' }}
          >
            <motion.div
              variants={rs}
              {...inView('-80px')}
              className="text-center mx-auto"
              style={{ maxWidth: '760px' }}
            >
              <motion.p
                variants={rv}
                className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
                style={{ fontSize: '13px', letterSpacing: '0.08em' }}
              >
                The Problem
              </motion.p>
              <motion.h2
                variants={rv}
                className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                Most businesses are running marketing{' '}
                <em className="font-serif italic not-italic" style={gradientText}>
                  without a strategy.
                </em>
              </motion.h2>
              <motion.p
                variants={rv}
                className="font-sans text-[18px] leading-[1.5] text-ss-neutral-500"
                style={italicBenefit}
              >
                Not enough effort isn't the problem. Nothing connecting is.
              </motion.p>
            </motion.div>
          </div>

          {/* Three pillars */}
          <div
            className="mx-auto w-full max-w-[1200px] px-6"
            style={{ paddingBottom: 'clamp(60px, 8vw, 100px)' }}
          >
            <motion.div
              variants={rs}
              {...inView('-60px')}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {pillars.map((p) => (
                <motion.div
                  key={p.num}
                  variants={rv}
                  className="rounded-2xl bg-white border border-ss-neutral-200 p-8 flex flex-col"
                >
                  <p
                    className="font-display font-black text-ss-purple-500 mb-3"
                    style={{ fontSize: '40px', lineHeight: 1 }}
                  >
                    {p.num}
                  </p>
                  <h3
                    className="font-display font-bold text-ss-neutral-700 mb-3"
                    style={{ fontSize: '20px', lineHeight: 1.25 }}
                  >
                    {p.h3Before}{' '}
                    <em className="font-serif italic not-italic" style={gradientText}>
                      {p.h3Highlight}
                    </em>
                  </h3>
                  <p className="font-sans text-ss-neutral-700/85 leading-relaxed text-[15px] mb-5">
                    {p.problem}
                  </p>
                  <div
                    className="rounded-xl px-5 py-4 mt-auto"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(103,80,164,0.07) 0%, rgba(233,119,193,0.04) 100%)',
                      borderLeft: '3px solid #8978BE',
                    }}
                  >
                    <p
                      className="font-sans font-bold uppercase tracking-widest text-ss-purple-500 mb-2"
                      style={{ fontSize: '11px' }}
                    >
                      SuperSymm
                    </p>
                    <p className="font-sans text-[14px] leading-[1.65] text-ss-neutral-600">
                      {p.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats strip — v2-video style */}
          <div
            style={{
              background: 'linear-gradient(135deg, #3A2460 0%, #5040A0 50%, #3A2460 100%)',
            }}
          >
            <div className="mx-auto w-full max-w-[1200px] px-6 pt-14 pb-16 lg:pt-16 lg:pb-20">
              <motion.p
                variants={rv}
                {...inView('-60px')}
                className="font-sans text-center mb-10"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.50)',
                }}
              >
                Small and mid-size businesses — the marketing reality
              </motion.p>
              <motion.div
                variants={rs}
                {...inView('-60px')}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
              >
                {stats.map(({ Icon, value, label }) => (
                  <motion.div key={value} variants={rv} className="flex flex-col items-start gap-2">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mb-1">
                      <Icon className="size-4" style={{ color: 'rgba(213,247,124,0.80)' }} />
                    </div>
                    <p
                      className="font-display font-black leading-[0.9] text-white"
                      style={{ fontSize: 'clamp(48px, 5.5vw, 76px)' }}
                    >
                      {value}
                    </p>
                    <p
                      className="font-sans"
                      style={{ fontSize: '14px', lineHeight: 1.45, color: 'rgba(255,255,255,0.60)' }}
                    >
                      {label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                variants={rv}
                {...inView('-40px')}
                className="text-center mt-12 text-xl text-white"
              >
                This isn't a tool problem. It's a{' '}
                <em
                  className="font-serif italic not-italic"
                  style={{
                    background: 'linear-gradient(93deg, #ACA1D2, #F36BC1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  system problem.
                </em>
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: The New Reality (marketing-automation Challenge layout) ── */}
        <section id="new-reality" className="bg-white">
          <div
            className="mx-auto w-full max-w-[1200px] px-6"
            style={{ paddingTop: 'clamp(96px, 10vw, 140px)', paddingBottom: '48px' }}
          >
            <motion.div
              variants={rs}
              {...inView('-60px')}
              style={{ maxWidth: '640px' }}
            >
              <motion.p
                variants={rv}
                className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
                style={{ fontSize: '13px', letterSpacing: '0.08em' }}
              >
                The Challenge
              </motion.p>
              <motion.h2
                variants={rv}
                className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', textWrap: 'pretty' }}
              >
                The New Reality of{' '}
                <em className="font-serif italic not-italic" style={gradientText}>
                  Customer Behavior
                </em>
              </motion.h2>
              <motion.p
                variants={rv}
                className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500"
              >
                Your potential customer's path is fragmented across channels and shaped by many
                conflicting sources, including AI answer engines. As discovery spreads, attribution
                breaks and performance becomes harder to defend.
              </motion.p>
            </motion.div>
          </div>

          {/* Full-width illustration */}
          <motion.div
            variants={rv}
            {...inView('-40px')}
            className="mx-auto w-full max-w-[1200px] px-6"
            style={{ paddingBottom: '0px' }}
          >
            <ChallengeIllustration />
          </motion.div>

          {/* Three challenge boxes — full-width, distinct darker hues */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{
              borderTop: `1px solid ${CHALLENGE_BORDER_COLOR}`,
              borderLeft: `1px solid ${CHALLENGE_BORDER_COLOR}`,
            }}
          >
            {challenges.map((c) => (
              <motion.div
                key={c.headline}
                variants={rv}
                {...inView('-40px')}
                className="p-10 lg:p-12 flex flex-col"
                style={{
                  background: c.bg,
                  borderRight: `1px solid ${CHALLENGE_BORDER_COLOR}`,
                  borderBottom: `1px solid ${CHALLENGE_BORDER_COLOR}`,
                }}
              >
                <h3
                  className="font-display font-black mb-3"
                  style={{ fontSize: '20px', lineHeight: 1.2, color: 'var(--ss-navy)' }}
                >
                  {c.headline}
                </h3>
                <p
                  className="font-sans"
                  style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--ss-navy)', opacity: 0.72 }}
                >
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4A: Statement Block (marketing-automation hero video background) ── */}
        <section
          id="integrated-systems"
          className="relative overflow-hidden"
          style={{
            background: '#1B0A20',
            paddingBlock: 'clamp(120px, 14vw, 200px)',
          }}
        >
          {/* Video background — marketing-automation hero */}
          {!prefersReduced && (
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            >
              <source src="/assets/illustrations/market_auto_hero.mp4" type="video/mp4" />
            </video>
          )}

          {/* Pink-leaning gradient overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(135deg, rgba(27,10,32,0.82) 0%, rgba(67,51,109,0.72) 40%, rgba(211,49,160,0.58) 75%, rgba(233,119,193,0.45) 100%)',
            }}
          />

          {/* Radial vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(27,10,32,0.50) 0%, transparent 100%)',
            }}
          />

          {/* Dot texture */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            <motion.div
              variants={rs}
              {...inView('-80px')}
              className="text-center mx-auto"
              style={{ maxWidth: '860px' }}
            >
              <motion.p
                variants={rv}
                className="font-sans font-medium uppercase mb-5"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  color: 'var(--ss-yellow)',
                }}
              >
                How It Works
              </motion.p>
              <motion.h2
                variants={rv}
                className="font-display font-black text-white mb-6"
                style={{
                  fontSize: 'clamp(40px, 6vw, 64px)',
                  lineHeight: 1.05,
                }}
              >
                Integrated systems that power{' '}
                <em className="font-serif italic not-italic" style={gradientTextDark}>
                  your growth.
                </em>
              </motion.h2>
              <motion.p
                variants={rv}
                className="font-sans mx-auto"
                style={{
                  fontSize: '18px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.80)',
                  maxWidth: '680px',
                }}
              >
                SuperSymm isn't a collection of tools — it's an intelligent system where each
                component feeds the next, creating a self-improving revenue engine.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 4B: The Four Layers ── */}
        <section
          id="layers"
          className="bg-white"
          style={{ paddingBlock: 'clamp(96px, 10vw, 140px)' }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <motion.div
              variants={rs}
              {...inView('-80px')}
              className="text-center mx-auto mb-16"
              style={{ maxWidth: '820px' }}
            >
              <motion.p
                variants={rv}
                className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
                style={{ fontSize: '13px', letterSpacing: '0.08em' }}
              >
                The Command Center
              </motion.p>
              <motion.h2
                variants={rv}
                className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                One command center.
                <br />
                <em className="font-serif italic not-italic" style={gradientText}>
                  Four connected layers.
                </em>
              </motion.h2>
              <motion.p
                variants={rv}
                className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500"
              >
                Your business at the center of everything. Each layer thinks together — and produces
                capabilities together.
              </motion.p>
            </motion.div>

            <motion.div
              variants={rs}
              {...inView('-60px')}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {layers.map((layer) => (
                <motion.div
                  key={layer.id}
                  id={layer.id}
                  variants={rv}
                  className="bg-white rounded-2xl border border-ss-neutral-200 p-8 flex flex-col"
                  style={{ borderLeft: `4px solid ${layer.borderColor}` }}
                >
                  <p
                    className="font-sans font-bold uppercase tracking-widest text-ss-purple-500"
                    style={{ fontSize: '13px', marginBottom: '4px' }}
                  >
                    Layer {layer.num} — {layer.name}
                  </p>
                  <p
                    className="mb-3"
                    style={{
                      ...italicBenefit,
                      fontSize: '14px',
                      color: 'rgba(31,30,33,0.60)',
                    }}
                  >
                    {layer.tagline}
                  </p>
                  <h3
                    className="font-display font-bold text-2xl text-ss-neutral-700 mb-3"
                    style={{ lineHeight: 1.2 }}
                  >
                    {layer.name}
                  </h3>
                  <p className="font-sans text-base text-ss-neutral-700/85 leading-relaxed mb-4">
                    {layer.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {layer.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 font-sans text-sm text-ss-neutral-700/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-ss-purple-500 mt-2 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="font-sans text-sm font-semibold text-ss-purple-500 italic mt-auto"
                    style={{ fontFamily: "'Newsreader', serif" }}
                  >
                    {layer.unique}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ── SECTION 5: Capabilities ── */}
        <section
          id="capabilities"
          className="bg-ss-neutral-100"
          style={{ paddingBlock: 'clamp(96px, 10vw, 140px)' }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <motion.div
              variants={rs}
              {...inView('-80px')}
              className="text-center mx-auto mb-14"
              style={{ maxWidth: '820px' }}
            >
              <motion.p
                variants={rv}
                className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
                style={{ fontSize: '13px', letterSpacing: '0.08em' }}
              >
                Capabilities
              </motion.p>
              <motion.h2
                variants={rv}
                className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                What the command center{' '}
                <em className="font-serif italic not-italic" style={gradientText}>
                  actually does.
                </em>
              </motion.h2>
              <motion.p
                variants={rv}
                className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500"
              >
                Nine capabilities. One platform. All personalized by Intelligence — so what you
                ship is tuned to your business, not generic to everyone else's.
              </motion.p>
            </motion.div>

            <motion.div
              variants={rs}
              {...inView('-60px')}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {capabilities.map((c) => (
                <motion.div
                  key={c.num}
                  variants={rv}
                  whileHover={prefersReduced ? undefined : { y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl border border-ss-neutral-200 p-8"
                >
                  <p
                    className="font-sans font-bold uppercase tracking-widest text-ss-purple-500 mb-2"
                    style={{ fontSize: '13px' }}
                  >
                    {c.num}
                  </p>
                  <h3 className="font-display font-bold text-xl text-ss-neutral-700 mb-3">
                    {c.title}
                  </h3>
                  <p className="font-sans text-base text-ss-neutral-700/85 leading-relaxed">
                    {c.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ── SECTION 6: Compliance ── */}
        <section
          id="compliance"
          className="bg-ss-purple-700"
          style={{ paddingBlock: 'clamp(96px, 10vw, 140px)' }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <motion.div
              variants={rs}
              {...inView('-80px')}
              className="text-center mx-auto mb-14"
              style={{ maxWidth: '760px' }}
            >
              <motion.p
                variants={rv}
                className="font-sans font-medium uppercase mb-4"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  color: 'var(--ss-yellow)',
                }}
              >
                Compliance Built In
              </motion.p>
              <motion.h2
                variants={rv}
                className="font-display font-black text-white leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                Compliance is the first question,{' '}
                <em className="font-serif italic not-italic" style={gradientTextDark}>
                  not the last.
                </em>
              </motion.h2>
              <motion.p
                variants={rv}
                className="font-sans text-[18px] leading-[1.6]"
                style={{ color: 'rgba(255,255,255,0.80)' }}
              >
                Built into the workflow, not bolted on after.
              </motion.p>
            </motion.div>

            <motion.div
              variants={rs}
              {...inView('-60px')}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10"
            >
              {compliancePillars.map((p) => (
                <motion.div
                  key={p.title}
                  variants={rv}
                  className="rounded-2xl border border-white/20 bg-white/10 p-6"
                >
                  <h3 className="font-display font-bold text-lg text-white mb-2">{p.title}</h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Industry badges */}
            <motion.div
              variants={rs}
              {...inView('-40px')}
              className="flex flex-wrap items-center justify-center gap-2 mb-6"
            >
              {industryBadges.map((b) => (
                <motion.span
                  key={b}
                  variants={rv}
                  className="inline-flex items-center rounded-full bg-ss-accent-100 text-ss-purple-700 font-bold uppercase px-3 py-1"
                  style={{ fontSize: '11px', letterSpacing: '0.05em' }}
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={rv}
              {...inView('-40px')}
              className="font-sans text-sm text-center mt-6 mx-auto"
              style={{ color: 'rgba(255,255,255,0.60)', maxWidth: '640px' }}
            >
              Built to integrate with your existing compliance review — not replace it.
            </motion.p>
          </div>
        </section>

        {/* ── SECTION 7: Leveraging AI (from BI page) ── */}
        <section id="ai" className="bg-white">
          <div
            className="mx-auto w-full max-w-[1200px] px-6"
            style={{ paddingTop: 'clamp(96px, 10vw, 140px)', paddingBottom: '56px' }}
          >
            <motion.div
              variants={rs}
              {...inView('-60px')}
              className="text-center mx-auto"
              style={{ maxWidth: '760px' }}
            >
              <motion.p
                variants={rv}
                className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
                style={{ fontSize: '13px', letterSpacing: '0.08em' }}
              >
                Leveraging AI
              </motion.p>

              <motion.h2
                variants={rv}
                className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', textWrap: 'pretty' }}
              >
                Responsible AI, to{' '}
                <em className="font-serif italic not-italic" style={gradientText}>
                  maximize your market.
                </em>
              </motion.h2>

              <motion.p
                variants={rv}
                className="font-sans text-ss-neutral-500"
                style={{ fontSize: '18px', lineHeight: 1.6 }}
              >
                AI is only as powerful as the context behind it. The right context turns
                generic outputs into relevant decisions, smarter workflows, and faster
                execution across your business. When your AI understands your customers,
                goals, constraints, and history, it stops acting like a tool and starts
                working like an informed extension of your team.
              </motion.p>
            </motion.div>
          </div>

          {/* Full-width AI boxes */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{
              borderTop: `1px solid ${CHALLENGE_BORDER_COLOR}`,
              borderLeft: `1px solid ${CHALLENGE_BORDER_COLOR}`,
            }}
          >
            {aiBoxes.map((box) => (
              <motion.div
                key={box.headline}
                variants={rv}
                {...inView('-40px')}
                className="p-10 lg:p-12 flex flex-col"
                style={{
                  background: box.bg,
                  borderRight: `1px solid ${CHALLENGE_BORDER_COLOR}`,
                  borderBottom: `1px solid ${CHALLENGE_BORDER_COLOR}`,
                }}
              >
                <h3
                  className="font-display font-black mb-3"
                  style={{ fontSize: '20px', lineHeight: 1.2, color: 'white' }}
                >
                  {box.headline}
                </h3>
                <p
                  className="font-sans"
                  style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)' }}
                >
                  {box.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── BUSINESS INTELLIGENCE HERO ── */}
        <BIHeroSection />

        {/* ── SECTION 8: The Content Map ── */}
        <section
          id="content-map"
          style={{
            paddingBlock: 'clamp(96px, 10vw, 140px)',
            background:
              contentMapView === 'backend'
                ? 'linear-gradient(180deg, #DBDEF0 0%, #D2D6ED 55%, #CDD2EA 100%)'
                : 'linear-gradient(135deg, #1B0A20 0%, #22193B 35%, #2D1B4E 65%, #1B0A20 100%)',
            transition: 'background 0.4s ease',
          }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <motion.div
              variants={rs}
              {...inView('-80px')}
              className="text-center mx-auto mb-12"
              style={{ maxWidth: '820px' }}
            >
              <motion.p
                variants={rv}
                className="font-sans font-medium uppercase mb-4"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  color:
                    contentMapView === 'backend'
                      ? 'rgba(31,30,33,0.55)'
                      : 'rgba(255,255,255,0.50)',
                }}
              >
                What it looks like in practice
              </motion.p>
              <motion.h2
                variants={rv}
                className="font-display font-black leading-[1.1] mb-5"
                style={{
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  color: contentMapView === 'backend' ? '#1F1E21' : '#FFFFFF',
                }}
              >
                Behind every great lead experience is a content map that{' '}
                <em
                  className="font-serif italic not-italic"
                  style={contentMapView === 'backend' ? gradientText : gradientTextDark}
                >
                  thinks ahead.
                </em>
              </motion.h2>
              <motion.p
                variants={rv}
                className="font-sans text-[18px] leading-[1.6] mb-4"
                style={{
                  color:
                    contentMapView === 'backend'
                      ? 'rgba(31,30,33,0.70)'
                      : 'rgba(255,255,255,0.75)',
                }}
              >
                This is the choreography that turns a stranger into a qualified conversation. Every
                piece of content mapped, sequenced, and pre-built before the lead even arrives.
              </motion.p>
              <motion.p
                variants={rv}
                className="font-sans text-[16px] leading-[1.6]"
                style={{
                  color:
                    contentMapView === 'backend'
                      ? 'rgba(31,30,33,0.55)'
                      : 'rgba(255,255,255,0.55)',
                }}
              >
                Most marketing reacts. SuperSymm anticipates. Before a prospect like Sarah ever
                encounters your brand, the content map already knows what she'll need, when she'll
                need it, and what should come next.
              </motion.p>
            </motion.div>

            {/* Toggle */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <button
                onClick={() => setContentMapView('backend')}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                  contentMapView === 'backend'
                    ? 'bg-ss-purple-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                ⚙️ Content Map (Backend)
              </button>
              <button
                onClick={() => setContentMapView('example')}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                  contentMapView === 'example'
                    ? 'bg-ss-purple-500 text-white'
                    : 'bg-ss-purple-700/10 text-ss-neutral-700 hover:bg-ss-purple-700/20'
                }`}
              >
                👤 User Pathway
              </button>
            </div>

            {/* Animated swap */}
            <AnimatePresence mode="wait">
              {contentMapView === 'backend' ? (
                <motion.div
                  key="backend"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <p
                    className="text-lg font-semibold text-center mb-8"
                    style={{ color: 'rgba(31,30,33,0.75)' }}
                  >
                    Every asset, trigger, and rule — pre-built before a lead arrives.
                  </p>
                  <MarketingFunnel />
                </motion.div>
              ) : (
                <motion.div
                  key="example"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="rounded-2xl overflow-hidden"
                >
                  <LeadJourney />
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>

        {/* ── SECTION 9: Who We Serve (v2-video IndustriesSection style) ── */}
        <section
          id="who-we-serve"
          style={{ background: '#0F0A1A', paddingBlock: 'clamp(80px, 10vw, 160px)' }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <motion.div
              className="mx-auto max-w-[720px] text-center mb-14"
              variants={rv}
              {...inView('-60px')}
            >
              <p
                className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium mb-4"
                style={{ color: 'rgba(255,255,255,0.40)' }}
              >
                Who We Serve
              </p>
              <h2
                className="font-display font-black leading-[1.1] text-white mb-6"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
              >
                Built for firms{' '}
                <em className="font-serif italic" style={gradientText}>
                  serious about growth.
                </em>
              </h2>
              <p
                className="font-sans text-[18px] leading-[1.6]"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                SuperSymm is designed for businesses where marketing matters but can't be a
                full-time job. If you need consistent lead generation without hiring a marketing
                team or managing a dozen tools, SuperSymm was built for you.
              </p>
            </motion.div>

            {/* Industry cards row */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={rs}
              {...inView('-40px')}
            >
              {industries.map(({ name, badge, body }) => (
                <motion.div
                  key={name}
                  variants={rv}
                  className="relative rounded-2xl p-7 flex flex-col gap-4 overflow-hidden group"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                  whileHover={
                    prefersReduced
                      ? undefined
                      : { y: -4, transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] } }
                  }
                >
                  {/* Left-border hover accent */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl origin-top"
                    style={{ background: 'linear-gradient(to bottom, #8978BE, #E977C1)' }}
                    initial={{ scaleY: 0 }}
                    whileHover={prefersReduced ? undefined : { scaleY: 1 }}
                    transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                  />

                  <div>
                    <p className="font-display font-bold text-[16px] uppercase tracking-[0.04em] text-white mb-2">
                      {name}
                    </p>
                    {badge && (
                      <span
                        className="inline-flex items-center font-display font-bold text-[11px] uppercase tracking-[0.05em] px-2 py-0.5 rounded-full"
                        style={{
                          color: '#8978BE',
                          background: 'rgba(137,120,190,0.12)',
                          border: '1px solid rgba(137,120,190,0.30)',
                          height: '20px',
                        }}
                      >
                        {badge}
                      </span>
                    )}
                  </div>

                  <p
                    className="font-sans text-[14px] leading-[1.5] flex-1"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {body}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Closing */}
            <motion.div
              className="mt-12 text-center"
              variants={rv}
              {...inView('-40px')}
            >
              <p
                className="font-sans text-[18px] leading-[1.6] max-w-[680px] mx-auto"
                style={{ color: 'rgba(255,255,255,0.50)' }}
              >
                Whether you serve individuals or businesses, SuperSymm adapts to your audience,
                your industry, and your compliance requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 10: The People Behind It (from About) ── */}
        <section
          id="how-we-work"
          className="bg-white"
          style={{ paddingTop: 'clamp(80px, 8vw, 100px)', paddingBottom: 'clamp(80px, 8vw, 100px)' }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <motion.div
              variants={rs}
              {...inView('-80px')}
              className="text-center mb-16"
            >
              <motion.p
                variants={rv}
                className="font-sans font-medium uppercase text-ss-purple-500 mb-5"
                style={{ fontSize: '13px', letterSpacing: '0.08em' }}
              >
                The People Behind It
              </motion.p>
              <motion.h2
                variants={rv}
                className="font-display font-black text-ss-neutral-700 leading-tight mb-6"
                style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}
              >
                Founder-led, by design.
              </motion.h2>
              <motion.p
                variants={rv}
                className="font-sans text-ss-neutral-700/85 leading-relaxed mx-auto"
                style={{ fontSize: '17px', lineHeight: 1.6, maxWidth: '720px' }}
              >
                SuperSymm is built and run by its founders. Combined, Chris and Chad bring
                more than forty years of marketing leadership and customer experience design
                to every firm they work with — and that direct experience stays in the room
                on every account.
              </motion.p>
            </motion.div>

            <motion.div
              variants={rs}
              {...inView('-60px')}
              className="grid grid-cols-1 md:grid-cols-2 gap-16"
            >
              {/* Chad — left */}
              <motion.div variants={rv} className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      inset: '-8px',
                      border: '2px solid rgba(103,80,164,0.35)',
                    }}
                  />
                  <img
                    src="/assets/illustrations/About/Chad_Owens_profile.png"
                    alt="Chad Owens, Co-Founder and CTO of SuperSymm"
                    className="w-52 h-52 rounded-full object-cover block"
                    style={{ boxShadow: '0 8px 40px rgba(103,80,164,0.22)' }}
                  />
                </div>
                <p className="font-display font-bold text-xl text-ss-neutral-700">Chad Owens</p>
                <p className="text-sm font-medium text-ss-purple-500 mt-1 mb-4">
                  Co-Founder & CTO — Engineering, AI, Platform
                </p>
                <p className="text-base text-ss-neutral-700/85 leading-relaxed">
                  Chad builds the system. The intelligence layer, the automation, the connected
                  architecture — that's his. With over two decades of engineering leadership
                  across data-intensive products, he's the reason "agentic" is a description
                  here, not a marketing word.
                </p>
              </motion.div>

              {/* Chris — right */}
              <motion.div variants={rv} className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      inset: '-8px',
                      border: '2px solid rgba(103,80,164,0.35)',
                    }}
                  />
                  <img
                    src="/assets/illustrations/About/Chris_Worley_profile.png"
                    alt="Chris Worley, Co-Founder of SuperSymm"
                    className="w-52 h-52 rounded-full object-cover block"
                    style={{ boxShadow: '0 8px 40px rgba(103,80,164,0.22)' }}
                  />
                </div>
                <p className="font-display font-bold text-xl text-ss-neutral-700">Chris Worley</p>
                <p className="text-sm font-medium text-ss-purple-500 mt-1 mb-4">
                  Co-Founder — Product, Strategy, Marketing, Operations
                </p>
                <p className="text-base text-ss-neutral-700/85 leading-relaxed">
                  Chris leads the customer experience strategy and how it goes to market. With
                  more than two decades leading product, marketing, and operations across
                  professional services, fintech, and SaaS, he's spent his career at the
                  intersection of strategy and execution. He's in your strategy conversations,
                  in your campaigns, and in the parts of marketing most platforms ignore.
                </p>
              </motion.div>
            </motion.div>

            {/* Core Principles link */}
            <motion.div
              variants={rv}
              {...inView('-40px')}
              className="text-center mt-14"
            >
              <button
                type="button"
                onClick={() => setIsPrinciplesOpen(true)}
                className="inline-flex items-center gap-2 font-sans text-base font-medium text-ss-purple-500 hover:text-ss-purple-600 transition-colors"
              >
                Read Our Core Principles <ArrowRight className="size-4" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 11: Why It's Different ── */}
        <section
          id="why-different"
          className="bg-ss-neutral-100"
          style={{ paddingBlock: 'clamp(96px, 10vw, 140px)' }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <motion.div
              variants={rs}
              {...inView('-80px')}
              className="text-center mx-auto mb-12"
              style={{ maxWidth: '760px' }}
            >
              <motion.p
                variants={rv}
                className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
                style={{ fontSize: '13px', letterSpacing: '0.08em' }}
              >
                Why It's Different
              </motion.p>
              <motion.h2
                variants={rv}
                className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                Not a tool. Not an agency.{' '}
                <em className="font-serif italic not-italic" style={gradientText}>
                  A command center.
                </em>
              </motion.h2>
            </motion.div>

            {/* Comparison table */}
            <motion.div
              variants={rv}
              {...inView('-60px')}
              className="overflow-x-auto"
            >
              <table className="w-full bg-white rounded-2xl overflow-hidden border border-ss-neutral-200">
                <thead>
                  <tr className="bg-ss-neutral-100">
                    <th className="px-6 py-4 text-left text-sm font-bold text-ss-neutral-700"></th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ss-neutral-700">
                      Point Tools
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ss-neutral-700">
                      Marketing Agency
                    </th>
                    <th
                      className="px-6 py-4 text-left text-sm font-bold text-ss-purple-500"
                      style={{
                        background: 'rgba(103, 80, 164, 0.05)',
                        borderLeft: '1px solid rgba(103, 80, 164, 0.20)',
                        borderRight: '1px solid rgba(103, 80, 164, 0.20)',
                      }}
                    >
                      SuperSymm
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      style={{
                        borderTop: i === 0 ? 'none' : '1px solid rgb(206, 206, 209)',
                      }}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-ss-neutral-700 whitespace-nowrap">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-ss-neutral-700/85">{row.pointTools}</td>
                      <td className="px-6 py-4 text-sm text-ss-neutral-700/85">{row.agency}</td>
                      <td
                        className="px-6 py-4 text-sm text-ss-neutral-700/85"
                        style={{
                          background: 'rgba(103, 80, 164, 0.05)',
                          borderLeft: '1px solid rgba(103, 80, 164, 0.20)',
                          borderRight: '1px solid rgba(103, 80, 164, 0.20)',
                        }}
                      >
                        {row.supersymm}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.p
              variants={rv}
              {...inView('-40px')}
              className="font-display font-bold text-xl text-center text-ss-neutral-700 mt-10"
            >
              Point tools can't connect. Agencies can't scale. We built{' '}
              <em className="font-serif italic not-italic" style={gradientText}>
                the third option.
              </em>
            </motion.p>
          </div>
        </section>

        {/* ── SECTION 12: Final CTA ── */}
        <section
          id="cta"
          className="bg-ss-purple-700 relative overflow-hidden"
          style={{ paddingBlock: 'clamp(120px, 14vw, 180px)' }}
        >
          {/* Logo watermark */}
          <img
            src="/assets/logos/logo-simple.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2"
            style={{
              transform: 'translate(-50%, -50%)',
              width: '480px',
              opacity: 0.06,
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            <motion.div
              variants={rs}
              {...inView('-80px')}
              className="text-center mx-auto"
              style={{ maxWidth: '720px' }}
            >
              <motion.h2
                variants={rv}
                className="font-display font-black text-white mb-8"
                style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.1 }}
              >
                Spend your time on clients.
                <br />
                <em className="font-serif italic not-italic" style={gradientTextDark}>
                  Not on marketing tools.
                </em>
              </motion.h2>

              <motion.p
                variants={rv}
                className="font-sans mx-auto mb-10"
                style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.90)',
                  maxWidth: '560px',
                  lineHeight: 1.6,
                }}
              >
                You built your firm on expertise and trust. SuperSymm builds the system that puts
                that expertise in front of the right people — compliantly, consistently, and
                without taking your time away from the work that matters.
              </motion.p>

              <motion.div
                variants={rv}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
              >
                <motion.div
                  whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                  whileTap={prefersReduced ? undefined : { scale: 0.97 }}
                >
                  {/* TODO: replace with real contact destination */}
                  <a
                    href="mailto:chris@supersymm.com?subject=Demo%20Request"
                    className="inline-flex items-center gap-2 rounded-full bg-ss-accent-100 text-ss-purple-700 font-semibold px-8 py-4 no-underline"
                    style={{ fontSize: '14px' }}
                  >
                    Book a Demo <ArrowRight className="size-4" />
                  </a>
                </motion.div>
                {/* TODO: replace with real contact destination */}
                <a
                  href="mailto:chris@supersymm.com?subject=Custom%20Pricing"
                  className="inline-flex items-center gap-1.5 font-semibold transition-colors"
                  style={{ fontSize: '14px', color: 'rgba(255,255,255,0.80)' }}
                >
                  Get Custom Pricing <ArrowRight className="size-4" />
                </a>
              </motion.div>

              <motion.p
                variants={rv}
                className="font-sans text-sm text-center mt-4"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                Engagement pricing is custom to your firm and goals. We'll quote you a number
                after one call.
              </motion.p>

              <motion.p
                variants={rv}
                className="font-sans text-xs text-center mt-6"
                style={{ color: 'rgba(255,255,255,0.50)' }}
              >
                Month-to-month after onboarding · Quarterly strategy reviews · Compliance archiving
                included · Real humans, real accountability
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterV2 />

      {/* ── Core Principles Modal ── */}
      <AnimatePresence>
        {isPrinciplesOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close principles modal"
              onClick={() => setIsPrinciplesOpen(false)}
              className="absolute inset-0 bg-black/70 cursor-default"
            />

            {/* Modal panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="principles-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-[1000px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
              style={{
                background: '#22193B',
                backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.030) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsPrinciplesOpen(false)}
                aria-label="Close"
                className="absolute top-5 right-5 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="size-5" />
              </button>

              <div className="px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
                <div className="text-center mb-12">
                  <p
                    className="font-sans font-medium uppercase mb-5"
                    style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'var(--ss-yellow)' }}
                  >
                    How We Build
                  </p>
                  <h2
                    id="principles-modal-title"
                    className="font-display font-black text-white leading-tight"
                    style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
                  >
                    Our Core{' '}
                    <em className="font-serif italic not-italic" style={gradientTextDark}>
                      Principles
                    </em>
                  </h2>
                </div>

                {/* Principle boxes — full-width connected grid */}
                <div
                  style={{
                    borderTop: `1px solid ${PRINCIPLE_BORDER}`,
                    borderLeft: `1px solid ${PRINCIPLE_BORDER}`,
                  }}
                >
                  {corePrinciples.map((p) => (
                    <div
                      key={p.number}
                      className="flex flex-col md:flex-row md:items-start gap-6 p-8 lg:p-10 relative overflow-hidden"
                      style={{
                        borderRight: `1px solid ${PRINCIPLE_BORDER}`,
                        borderBottom: `1px solid ${PRINCIPLE_BORDER}`,
                      }}
                    >
                      {/* Per-pillar accent glow — top-right corner */}
                      <div
                        className="pointer-events-none absolute -top-24 -right-24"
                        aria-hidden="true"
                        style={{
                          width: '320px',
                          height: '320px',
                          borderRadius: '50%',
                          background: `radial-gradient(circle, ${p.glow} 0%, transparent 70%)`,
                        }}
                      />

                      {/* Number */}
                      <div className="flex-shrink-0 md:w-16 relative z-10">
                        <p
                          className="font-display font-black leading-none"
                          style={{ fontSize: '40px', color: p.accent, opacity: 0.9 }}
                        >
                          {p.number}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="flex-1 relative z-10">
                        <p
                          className="font-display font-black text-white mb-1"
                          style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.2 }}
                        >
                          {p.headline}
                        </p>
                        <p
                          className="mb-3"
                          style={{
                            fontFamily: "'Newsreader', serif",
                            fontStyle: 'italic',
                            fontSize: '15px',
                            lineHeight: 1.4,
                            color: 'rgba(255,255,255,0.55)',
                          }}
                        >
                          {p.subhead}
                        </p>
                        <p
                          className="font-sans leading-relaxed"
                          style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)' }}
                        >
                          {p.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
