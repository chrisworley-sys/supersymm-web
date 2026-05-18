import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Brain, Coins, Cpu, Package, GraduationCap, Plug, Shield } from 'lucide-react'
import type React from 'react'
import PageWrapper from '@/components/common/PageWrapper'
import Breadcrumb from '@/components/common/Breadcrumb'
import PillarSection from '@/components/sections/marketing-automation/PillarSection'
import IntelligenceFlowDiagram from '@/components/sections/business-intelligence/IntelligenceFlowDiagram'
import DifferenceCards from '@/components/sections/business-intelligence/DifferenceCards'
import BusinessContextIllustration from '@/components/sections/business-intelligence/illustrations/BusinessContextIllustration'
import MarketIntelligenceIllustration from '@/components/sections/business-intelligence/illustrations/MarketIntelligenceIllustration'
import AudienceInsightIllustration from '@/components/sections/business-intelligence/illustrations/AudienceInsightIllustration'
import StrategyGenerationIllustration from '@/components/sections/business-intelligence/illustrations/StrategyGenerationIllustration'
import LogoLoopAnimation from '@/components/sections/business-intelligence/LogoLoopAnimation'

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(93deg, #8978BE, #E977C1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const BORDER_COLOR = 'rgba(103, 80, 164, 0.1)'

const PILLAR_TAGS = [
  { label: 'Business Context', anchor: '#business-context' },
  { label: 'Market Intelligence', anchor: '#market-intelligence' },
  { label: 'Audience Insight', anchor: '#audience-insight' },
  { label: 'Strategy Generation', anchor: '#strategy-generation' },
]

const AI_BOXES = [
  {
    headline: 'Accelerate Insights',
    body: 'Pivot to what works faster. Real-time data surfaces what\'s landing — and what needs a new angle — so you\'re always amplifying ideas that move people.',
    bg: '#3D2F6A',
  },
  {
    headline: 'Build Systems',
    body: 'Not just scheduled posts. An interconnected system of communication where every touchpoint informs the next — so your audience gets a coherent story, not scattered messages.',
    bg: '#2F2159',
  },
  {
    headline: 'Find Signals',
    body: 'Sort through the noise to identify what\'s working to amplify it and what isn\'t to pivot — before the budget runs out.',
    bg: '#362761',
  },
]

type FutureCard = {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  headline: string
  body: string
}

const FUTURE_CARDS: FutureCard[] = [
  {
    Icon: Coins,
    headline: 'Token Anxiety',
    body: 'AI costs shift constantly. We absorb the infrastructure so your pricing stays predictable — no surprise bills when model usage spikes.',
  },
  {
    Icon: Cpu,
    headline: 'Out of Date Tech',
    body: 'We continuously evaluate new models, tools, and methods. When better technology arrives, we adopt it. Your system never falls behind.',
  },
  {
    Icon: Package,
    headline: 'Subscription Overload',
    body: 'Eight tools that kind-of talk to each other is not a stack. SuperSymm consolidates intelligence, automation, and optimization into one purpose-built platform.',
  },
  {
    Icon: GraduationCap,
    headline: 'AI Education',
    body: 'You shouldn\'t need a prompt engineering course to run your marketing. The system is trained on your context — you set the goals, we handle the execution.',
  },
  {
    Icon: Plug,
    headline: 'Integration Chaos',
    body: 'Your CRM, email, analytics, and ad platforms — pre-connected and talking to each other. We handle the plumbing once so it just works.',
  },
  {
    Icon: Shield,
    headline: 'Data Privacy',
    body: 'Built for regulated industries from day one. Your data stays yours, your workflows meet SEC/FINRA standards, and compliance doesn\'t slow anything down.',
  },
]

export default function BusinessIntelligencePage() {
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    document.title = 'AI Marketing Strategy & Intelligence | SuperSymm'
  }, [])

  const rv: Variants = prefersReduced ? { hidden: {}, visible: {} } : fadeUp
  const rs: Variants = prefersReduced ? { hidden: {}, visible: {} } : stagger

  const inView = (marginPx = '-80px') => ({
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true, margin: marginPx },
  })

  return (
    <PageWrapper>
      {/* SEO */}
      <title>AI Marketing Strategy &amp; Intelligence | SuperSymm</title>
      <meta
        name="description"
        content="The intelligence layer behind every SuperSymm campaign. We learn your business, market, and audience — then turn that understanding into smarter execution."
      />
      <meta property="og:title" content="The brain behind your marketing — SuperSymm" />
      <meta property="og:description" content="The intelligence layer that learns your business, market, and audience — then turns that understanding into smarter execution." />
      <meta property="og:image" content="/og-business-intelligence-1200x630.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="/platform/business-intelligence" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Business Intelligence Engine',
        provider: { '@type': 'Organization', name: 'SuperSymm' },
        serviceType: 'AI marketing strategy and intelligence platform',
        description: 'The intelligence layer behind every SuperSymm campaign.',
      })}</script>

      {/* ── Section 1: Hero ── */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          background: '#0B0718',
          paddingTop: 'calc(5rem + 12px)',
          paddingBottom: 'clamp(80px, 8vw, 120px)',
        }}
      >
        {/* Dot grid — subtle on dark */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(103,80,164,0.28) 1.2px, transparent 1.2px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Radial ambient glow — centers behind content */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(103,80,164,0.22) 0%, transparent 70%)',
          }}
        />

        <div className="mx-auto w-full max-w-[1200px] px-6 relative">
          <Breadcrumb
            variant="dark"
            items={[
              { label: 'Platform', href: '/platform' },
              { label: 'Business Intelligence', href: '/platform/business-intelligence' },
            ]}
          />

          {/* Two-column: copy left / logo right */}
          <motion.div
            variants={rs}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-[52%_48%] items-center gap-12 lg:gap-16"
            style={{ paddingTop: 'clamp(36px, 4vw, 60px)' }}
          >
            {/* Left: copy — left-aligned */}
            <div>
              {/* Eyebrow with Brain icon */}
              <motion.div
                variants={rv}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span
                  className="inline-flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ width: '26px', height: '26px', background: 'rgba(213,247,124,0.12)' }}
                >
                  <Brain className="h-3.5 w-3.5" style={{ color: 'var(--ss-yellow)' }} />
                </span>
                <span
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'var(--ss-yellow)' }}
                >
                  Intentional Context
                </span>
              </motion.div>

              <motion.h1
                variants={rv}
                className="font-display font-black text-white mb-6"
                style={{ fontSize: 'clamp(36px, 4.5vw, 62px)', lineHeight: 1.05, textWrap: 'pretty' }}
              >
                The brain behind{' '}
                <em className="font-serif italic not-italic" style={gradientText}>
                  your marketing.
                </em>
              </motion.h1>

              <motion.p
                variants={rv}
                className="font-sans mb-10"
                style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', maxWidth: '520px' }}
              >
                SuperSymm analyzes your business, your market, and your audience — then turns
                that understanding into strategy that drives every campaign. We don't hand you
                a settings panel. We build the intelligence that powers everything else.
              </motion.p>

              <motion.div
                variants={rv}
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <motion.div
                  whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                  whileTap={prefersReduced ? undefined : { scale: 0.97 }}
                >
                  <Link to="/demo" className="ss-btn-accent">
                    Book a Demo →
                  </Link>
                </motion.div>
                <a
                  href="#how-it-works"
                  className="font-sans font-medium transition-colors flex items-center gap-2"
                  style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}
                >
                  See How It Works <span aria-hidden="true">↓</span>
                </a>
              </motion.div>
            </div>

            {/* Right: animated logo loop */}
            <motion.div
              variants={rv}
              className="flex justify-center lg:justify-end"
            >
              <div style={{ width: '100%', maxWidth: '460px' }}>
                <LogoLoopAnimation />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Leveraging AI ── */}
      <section id="problem" className="bg-white">
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
          style={{ borderTop: `1px solid ${BORDER_COLOR}`, borderLeft: `1px solid ${BORDER_COLOR}` }}
        >
          {AI_BOXES.map((box) => (
            <motion.div
              key={box.headline}
              variants={rv}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="p-10 lg:p-12 flex flex-col"
              style={{
                background: box.bg,
                borderRight: `1px solid ${BORDER_COLOR}`,
                borderBottom: `1px solid ${BORDER_COLOR}`,
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

      {/* ── Section 3: Intelligence Flow ── */}
      <section
        id="how-it-works"
        style={{ background: '#0F0A1A', padding: 'clamp(96px, 10vw, 140px) 0' }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div
            variants={rs}
            {...inView('-80px')}
            className="text-center mx-auto"
            style={{ maxWidth: '760px' }}
          >
            <motion.p
              variants={rv}
              className="font-sans font-medium uppercase mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'var(--ss-yellow)' }}
            >
              The Intelligence Flow
            </motion.p>

            <motion.h2
              variants={rv}
              className="font-display font-black leading-[1.1] text-white mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              One unified intelligence layer.{' '}
              <em className="font-serif italic not-italic" style={{ color: 'rgba(213,247,124,0.92)' }}>
                Every campaign gets smarter.
              </em>
            </motion.h2>

            <motion.p
              variants={rv}
              className="font-sans"
              style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.72)' }}
            >
              SuperSymm builds a deep understanding of your business across four dimensions —
              so every campaign starts with context, targets the right people, and finds your
              core opportunities. Not just sends messages because the calendar says so.
            </motion.p>
          </motion.div>

          {/* Flow diagram — dark variant */}
          <motion.div
            variants={rv}
            {...inView('-40px')}
            className="mx-auto mt-12"
            style={{ maxWidth: '880px' }}
          >
            <IntelligenceFlowDiagram dark />
          </motion.div>

          {/* Anchor tags */}
          <motion.div
            variants={rs}
            {...inView('-40px')}
            className="flex flex-wrap justify-center gap-3"
            style={{ marginTop: '48px' }}
          >
            {PILLAR_TAGS.map((tag) => (
              <motion.a
                key={tag.anchor}
                href={tag.anchor}
                variants={rv}
                className="font-display font-bold uppercase rounded-full transition-all duration-200"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.06em',
                  color: 'rgba(255,255,255,0.75)',
                  padding: '8px 16px',
                  height: '36px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  textDecoration: 'none',
                }}
                whileHover={prefersReduced ? undefined : {
                  y: -2,
                  backgroundColor: 'rgba(255,255,255,0.10)',
                  borderColor: 'rgba(213,247,124,0.30)',
                  color: 'rgba(255,255,255,1.0)',
                  transition: { duration: 0.2 },
                }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              >
                {tag.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Business Context ── */}
      <PillarSection
        id="business-context"
        number="Business Context"
        title={"We start with you.\nNot a settings panel."}
        body={[
          "Before any campaign goes live, we build a clear picture of what makes your firm different — your offers, your differentiators, your competitive position, your compliance posture, your tone, your goals. That context becomes the lens for every decision the system makes afterward — which audience to target, what to lead with, how to handle a sensitive topic.",
        ]}
        included={[
          'Discovery and positioning workshops',
          'Competitive landscape mapping',
          'Brand voice and tone codification',
          'Compliance posture documentation',
        ]}
        illustration={<BusinessContextIllustration />}
        mirrored={false}
      />

      {/* Business Context — value props */}
      <div className="bg-white" style={{ paddingTop: '0', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div
            variants={rv}
            {...inView('-40px')}
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ borderTop: '1px solid rgba(103,80,164,0.15)', paddingTop: '28px', gap: 0 }}
          >
            {[
              {
                headline: 'Sharper decisions',
                body: 'based on the right business, customer, and operational signals',
              },
              {
                headline: 'More relevant outputs',
                body: 'because AI understands the goal, audience, and constraints',
              },
              {
                headline: 'Faster execution',
                body: 'by reducing rework, guesswork, and disconnected handoffs',
              },
            ].map((item, i) => (
              <div
                key={item.headline}
                style={{
                  paddingLeft: i > 0 ? '24px' : '0',
                  paddingRight: i < 2 ? '24px' : '0',
                  paddingBottom: '0',
                  borderLeft: i > 0 ? '1px solid rgba(103,80,164,0.18)' : 'none',
                }}
              >
                <p
                  className="font-display font-bold text-ss-neutral-700 mb-1"
                  style={{ fontSize: '14px', lineHeight: 1.3 }}
                >
                  {item.headline}
                </p>
                <p
                  className="font-sans text-ss-neutral-500"
                  style={{ fontSize: '13px', lineHeight: 1.5 }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Section 5: Market Intelligence ── */}
      <PillarSection
        id="market-intelligence"
        number="Market Intelligence"
        title={"Know what your competitors are doing.\nKnow what they're missing."}
        body={[
          "We continuously monitor your competitive landscape — what messaging they're using, what gaps they're leaving open, where the actual opportunities are. Not a one-time audit that lives in a deck. Ongoing intelligence that adjusts your strategy as the market shifts.",
        ]}
        included={[
          'Competitive content and messaging analysis',
          'Market positioning and gap identification',
          'Industry trend monitoring',
          'Strategic opportunity surfacing',
        ]}
        illustration={<MarketIntelligenceIllustration />}
        mirrored={true}
      />

      {/* ── Section 6: Audience Insight ── */}
      <PillarSection
        id="audience-insight"
        number="Audience Insight"
        title={"Build personas that act\nlike real people."}
        body={[
          "SuperSymm builds living personas from firmographic data, behavioral signals, and sales conversation patterns — not slide-deck artifacts. Each persona has objections we know how to answer, channels they prefer, and trigger moments we watch for. The system sends the right message, in the right format, on the right channel.",
        ]}
        included={[
          'ICP definition and refinement',
          'Multi-persona segmentation',
          'Buyer journey mapping',
          'Behavioral trigger identification',
        ]}
        illustration={<AudienceInsightIllustration />}
        mirrored={false}
      />

      {/* ── Section 7: Strategy Generation ── */}
      <PillarSection
        id="strategy-generation"
        number="Strategy Generation"
        title={"Strategy that writes itself.\nThen writes the campaign."}
        body={[
          "With business context, market intelligence, and audience insight combined, SuperSymm generates the strategic direction for every campaign — grounded in your specific business, market, and buyers. The loop closes when performance data flows back to make the next strategy sharper.",
        ]}
        included={[
          'Campaign strategy generation',
          'Channel mix recommendations',
          'Content angle and brief generation',
          'Performance benchmark setting',
          'Continuous strategy refinement based on results',
        ]}
        illustration={<StrategyGenerationIllustration />}
        mirrored={true}
      />

      {/* ── Section 8: The Difference ── */}
      <section
        id="differentiator"
        style={{ background: '#22193B', padding: 'clamp(96px, 10vw, 140px) 0' }}
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
              className="font-sans font-medium uppercase mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'var(--ss-yellow)' }}
            >
              The Difference
            </motion.p>
            <motion.h2
              variants={rv}
              className="font-display font-black leading-[1.1] text-white mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', textWrap: 'pretty' }}
            >
              Why this isn't just{' '}
              <em className="font-serif italic not-italic" style={gradientText}>
                another AI marketing tool.
              </em>
            </motion.h2>
            <motion.p
              variants={rv}
              className="font-sans"
              style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}
            >
              The marketing AI category is crowded with tools that promise intelligence
              and deliver templates. Here's where SuperSymm sits.
            </motion.p>
          </motion.div>

          <motion.div variants={rv} {...inView('-40px')}>
            <DifferenceCards />
          </motion.div>
        </div>
      </section>

      {/* ── Section 10: Built for the Future ── */}
      <section
        id="future"
        className="bg-white"
        style={{ padding: 'clamp(96px, 10vw, 140px) 0' }}
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
              className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.08em' }}
            >
              Built for the Future
            </motion.p>
            <motion.h2
              variants={rv}
              className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', textWrap: 'pretty' }}
            >
              New technology every day.{' '}
              <em className="font-serif italic not-italic" style={gradientText}>
                You shouldn't have to keep up.
              </em>
            </motion.h2>
            <motion.p
              variants={rv}
              className="font-sans text-ss-neutral-500"
              style={{ fontSize: '18px', lineHeight: 1.6 }}
            >
              We keep up with the latest so you don't have to — and it's all baked
              into the system. The things that slow everyone else down are handled
              before you ever think to worry about them.
            </motion.p>
          </motion.div>

          <motion.div
            variants={rs}
            {...inView('-60px')}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {FUTURE_CARDS.map((card) => (
              <motion.div
                key={card.headline}
                variants={rv}
                whileHover={prefersReduced ? undefined : { y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col"
                style={{
                  background: 'var(--ss-bg-purple-light)',
                  borderRadius: '20px',
                  padding: '32px',
                }}
              >
                <div
                  className="flex items-center justify-center rounded-xl mb-5 flex-shrink-0"
                  style={{ width: '44px', height: '44px', background: 'rgba(103,80,164,0.10)' }}
                >
                  <card.Icon className="h-5 w-5" style={{ color: 'var(--ss-purple)' }} />
                </div>
                <h3
                  className="font-display font-bold text-ss-neutral-700 mb-3"
                  style={{ fontSize: '20px', lineHeight: 1.25 }}
                >
                  {card.headline}
                </h3>
                <p
                  className="font-sans text-ss-neutral-500"
                  style={{ fontSize: '15px', lineHeight: 1.55 }}
                >
                  {card.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 11: Final CTA ── */}
      <section
        id="cta"
        className="relative overflow-hidden"
        style={{ background: '#22193B', padding: '140px 0' }}
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <img
            src="/assets/logos/logo-simple.png"
            alt=""
            style={{ width: '480px', height: 'auto', opacity: 0.06 }}
          />
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-6 relative z-10">
          <motion.div
            variants={rs}
            {...inView('-80px')}
            className="text-center mx-auto"
            style={{ maxWidth: '720px' }}
          >
            <motion.h2
              variants={rv}
              className="font-display font-black text-white mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, textWrap: 'pretty' }}
            >
              Smart marketing starts with{' '}
              <em className="font-serif italic not-italic" style={{ color: 'var(--ss-yellow)' }}>
                knowing your business.
              </em>
            </motion.h2>

            <motion.p
              variants={rv}
              className="font-sans mb-10"
              style={{ fontSize: '18px', lineHeight: 1.65, color: 'rgba(255,255,255,0.90)' }}
            >
              Most platforms hand you a system and ask you to teach it.
              SuperSymm comes in already knowing — about your market, your competitors,
              and what makes your firm different. Then it puts that intelligence to work.
            </motion.p>

            <motion.div
              variants={rv}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center mb-8"
            >
              <motion.div
                whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              >
                <Link to="/demo" className="ss-btn-accent">
                  Book a Demo →
                </Link>
              </motion.div>
              <Link
                to="/pricing"
                className="font-sans font-medium text-white/80 hover:text-white transition-colors"
                style={{ fontSize: '15px' }}
              >
                Get Custom Pricing
              </Link>
            </motion.div>

            <motion.p
              variants={rv}
              className="font-sans italic"
              style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}
            >
              Engagement pricing is custom to your firm and goals.
              We'll quote you a number after one call.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
