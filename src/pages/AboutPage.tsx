import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type React from 'react'
import PageWrapper from '@/components/common/PageWrapper'
import Breadcrumb from '@/components/common/Breadcrumb'
import AssistiveAIIllustration from '@/components/sections/about/illustrations/AssistiveAIIllustration'
import RepeatableWorkflowsIllustration from '@/components/sections/about/illustrations/RepeatableWorkflowsIllustration'
import AgenticIllustration from '@/components/sections/about/illustrations/AgenticIllustration'

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

const stagger120: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const stagger150: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const MISSION_BLOCKS = [
  {
    label: 'Accessible',
    body: "Professional marketing shouldn't require a marketing degree or a six-figure budget. We built SuperSymm so small and mid-sized firms get the kind of intelligent system enterprise companies use — at a price and a time cost that actually make sense.",
  },
  {
    label: 'Manageable',
    body: "Most firms drown in marketing complexity: a dozen tools, no clear path, hours that add up to nothing. SuperSymm unifies it into one system. You review and approve. The system handles the rest.",
  },
  {
    label: 'Effective',
    body: "Activity without outcomes isn't marketing — it's busywork. SuperSymm is built for measurable results: qualified leads you can track, ROI you can prove, growth you can sustain.",
  },
]

const PRINCIPLES = [
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

const AI_TIERS = [
  {
    label: 'Assist',
    headline: 'AI Helps You Work Faster',
    description: 'For organizations beginning their AI journey. AI provides recommendations, drafts, and insights — you control every decision and action.',
    bullets: [
      'AI suggests content topics',
      'AI drafts initial copy for review',
      'AI provides performance insights',
      'You handle all execution',
    ],
    when: 'Custom requests, unique situations, strategic decisions',
    borderGradient: 'linear-gradient(135deg, #ACA1D2, #D1CBE6)',
    labelColor: '#8978BE',
    cardBg: '#FAF9FD',
  },
  {
    label: 'Augment',
    headline: 'AI Executes. You Approve.',
    description: 'For organizations ready for structured AI execution. The system runs campaigns and workflows while you maintain strategic oversight and approval.',
    bullets: [
      'AI creates monthly content calendar',
      'AI distributes across all channels',
      'AI scores and routes leads automatically',
      'You approve strategy and review performance',
    ],
    when: 'Repeatable workflows, multi-channel execution, ongoing campaigns',
    borderGradient: 'linear-gradient(135deg, #6750A4, #E977C1)',
    labelColor: '#6750A4',
    cardBg: '#F5F3FB',
  },
  {
    label: 'Agentic',
    headline: 'AI Monitors and Acts Continuously',
    description: 'For organizations at peak AI maturity. Continuous monitoring and autonomous action within pre-approved guardrails — exceptions only escalate to you.',
    bullets: [
      'AI monitors market trends continuously',
      'AI detects buying signals automatically',
      'AI adjusts campaigns based on performance',
      'You review weekly digests and approve major shifts',
    ],
    when: 'Continuous monitoring, real-time optimization, predictive actions',
    borderGradient: 'linear-gradient(135deg, #22193B, #6750A4)',
    labelColor: '#43336D',
    cardBg: '#F0EDF8',
  },
]

const TIER_ILLUSTRATIONS: Record<string, React.ComponentType> = {
  Assist: AssistiveAIIllustration,
  Augment: RepeatableWorkflowsIllustration,
  Agentic: AgenticIllustration,
}

const PILLAR_BORDER = 'rgba(255,255,255,0.08)'

export default function AboutPage() {
  const prefersReduced = useReducedMotion()

  const rv: Variants = prefersReduced ? { hidden: {}, visible: {} } : fadeUp
  const rs: Variants = prefersReduced ? { hidden: {}, visible: {} } : stagger
  const rs120: Variants = prefersReduced ? { hidden: {}, visible: {} } : stagger120
  const rs150: Variants = prefersReduced ? { hidden: {}, visible: {} } : stagger150

  return (
    <PageWrapper>
      <title>About SuperSymm | The Team and Principles Behind the Platform</title>
      <meta
        name="description"
        content="SuperSymm is founder-led marketing automation built for professional service firms. Meet the team and the principles behind the platform."
      />
      <meta property="og:title" content="About SuperSymm | The Team and Principles Behind the Platform" />
      <meta
        property="og:description"
        content="SuperSymm is founder-led marketing automation built for professional service firms. Meet the team and the principles behind the platform."
      />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://supersymm.com/about" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About SuperSymm',
        description: "The team, principles, and approach behind SuperSymm's marketing automation for professional service firms.",
      })}</script>

      {/* ── Section 1: Hero (dark gradient) ── */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          background: '#1B0A20',
          paddingTop: 'calc(5rem + 12px)',
          paddingBottom: 'clamp(80px, 8vw, 120px)',
        }}
      >
        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(135deg, rgba(27,10,32,0.90) 0%, rgba(67,51,109,0.80) 50%, rgba(34,25,59,0.90) 100%)',
          }}
        />
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="mx-auto w-full max-w-[1200px] px-6 relative">
          <Breadcrumb variant="dark" items={[{ label: 'About', href: '/about' }]} />

          <motion.div
            variants={rs}
            initial={prefersReduced ? false : 'hidden'}
            animate="visible"
            className="text-center mx-auto"
            style={{ maxWidth: '900px', paddingTop: 'clamp(32px, 4vw, 56px)' }}
          >
            <motion.div variants={rv} className="flex justify-center mb-8">
              <img
                src="/assets/logos/logo-simple.png"
                alt="SuperSymm"
                className="h-14 w-auto select-none"
                style={{ filter: 'brightness(0) invert(93%) sepia(25%) saturate(900%) hue-rotate(52deg) brightness(104%)' }}
              />
            </motion.div>

            <motion.h1
              variants={rv}
              className="font-display font-black text-white leading-tight mb-8"
              style={{ fontSize: 'clamp(38px, 5.5vw, 60px)', lineHeight: 1.05 }}
            >
              About SuperSymm
            </motion.h1>

            <motion.p
              variants={rv}
              className="font-sans mx-auto mb-10"
              style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', maxWidth: '640px' }}
            >
              The company powering growth through AI intelligent marketing.
            </motion.p>

            <motion.div
              variants={rv}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div
                whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              >
                <Link
                  to="/demo"
                  className="bg-ss-accent-100 text-ss-purple-700 font-semibold rounded-full px-8 py-4 text-sm inline-block"
                >
                  Book a Demo →
                </Link>
              </motion.div>
              <Link
                to="/platform"
                className="flex items-center gap-2 font-semibold text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.60)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.90)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.60)' }}
              >
                See the Platform <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Our Mission ── */}
      <section
        id="mission"
        className="bg-ss-neutral-100"
        style={{ paddingTop: 'clamp(80px, 8vw, 100px)', paddingBottom: 'clamp(80px, 8vw, 100px)' }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div
            variants={rs}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <motion.p
              variants={rv}
              className="font-sans font-medium uppercase text-ss-purple-500 mb-5"
              style={{ fontSize: '13px', letterSpacing: '0.08em' }}
            >
              Our Mission
            </motion.p>
            <motion.h2
              variants={rv}
              className="font-display font-black text-ss-neutral-700 leading-tight mx-auto"
              style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', maxWidth: '760px' }}
            >
              Making marketing{' '}
              <em className="font-serif italic not-italic" style={gradientText}>
                accessible, manageable, and effective.
              </em>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={rs120}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {MISSION_BLOCKS.map((block) => (
              <motion.div
                key={block.label}
                variants={rv}
                className="bg-white rounded-2xl p-8"
              >
                <p className="font-bold text-sm uppercase tracking-widest text-ss-purple-500 mb-3">
                  {block.label}
                </p>
                <p className="text-base text-ss-neutral-700/85 leading-relaxed">
                  {block.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Founder Led ── */}
      <section
        id="team"
        className="bg-white"
        style={{ paddingTop: 'clamp(80px, 8vw, 100px)', paddingBottom: 'clamp(80px, 8vw, 100px)' }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div
            variants={rs}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
            variants={rs150}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
        </div>
      </section>

      {/* ── Section 4: Our Core Pillars (dark) ── */}
      <section
        id="principles"
        className="relative overflow-hidden"
        style={{
          background: '#22193B',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.030) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          paddingTop: 'clamp(80px, 8vw, 100px)',
          paddingBottom: 'clamp(80px, 8vw, 100px)',
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div
            variants={rs}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.p
              variants={rv}
              className="font-sans font-medium uppercase mb-5"
              style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'var(--ss-yellow)' }}
            >
              How We Build
            </motion.p>
            <motion.h2
              variants={rv}
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}
            >
              Our Core{' '}
              <em className="font-serif italic not-italic" style={gradientTextDark}>Pillars</em>
            </motion.h2>
          </motion.div>

          {/* Principle boxes — full-width connected grid */}
          <div
            style={{
              borderTop: `1px solid ${PILLAR_BORDER}`,
              borderLeft: `1px solid ${PILLAR_BORDER}`,
            }}
          >
            <motion.div
              variants={rs150}
              initial={prefersReduced ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {PRINCIPLES.map((p) => (
                <motion.div
                  key={p.number}
                  variants={rv}
                  className="flex flex-col md:flex-row md:items-start gap-8 p-10 lg:p-14 relative overflow-hidden"
                  style={{
                    borderRight: `1px solid ${PILLAR_BORDER}`,
                    borderBottom: `1px solid ${PILLAR_BORDER}`,
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
                  <div className="flex-shrink-0 md:w-20 relative z-10">
                    <p
                      className="font-display font-black leading-none"
                      style={{ fontSize: '48px', color: p.accent, opacity: 0.9 }}
                    >
                      {p.number}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <p
                      className="font-display font-black text-white mb-1"
                      style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', lineHeight: 1.2 }}
                    >
                      {p.headline}
                    </p>
                    <p
                      className="mb-4"
                      style={{ ...italicBenefit, fontSize: '17px', lineHeight: 1.4, color: 'rgba(255,255,255,0.55)' }}
                    >
                      {p.subhead}
                    </p>
                    <p
                      className="font-sans leading-relaxed"
                      style={{ fontSize: '16px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)' }}
                    >
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 5: How AI Powers It ── */}
      <section
        id="ai"
        className="bg-white"
        style={{ paddingTop: 'clamp(80px, 8vw, 100px)', paddingBottom: 'clamp(80px, 8vw, 100px)' }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div
            variants={rs}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <motion.p
              variants={rv}
              className="font-sans font-medium uppercase text-ss-purple-500 mb-5"
              style={{ fontSize: '13px', letterSpacing: '0.08em' }}
            >
              How AI Powers It
            </motion.p>
            <motion.h2
              variants={rv}
              className="font-display font-black text-ss-neutral-700 leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}
            >
              Three levels of AI.
              <br />
              <em className="font-serif italic not-italic" style={gradientText}>
                Each one deployed where it fits.
              </em>
            </motion.h2>
            <motion.p
              variants={rv}
              className="font-sans text-ss-neutral-700/85 leading-relaxed mx-auto"
              style={{ fontSize: '17px', lineHeight: 1.6, maxWidth: '680px' }}
            >
              Every organization is at a different point in its AI journey. We deploy the
              level that matches where you are — and grow with you as you're ready for more.
            </motion.p>
          </motion.div>

          <motion.div
            variants={rs150}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          >
            {AI_TIERS.map((tier) => {
              const TierIllustration = TIER_ILLUSTRATIONS[tier.label]
              return (
              <motion.div key={tier.label} variants={rv} className="flex flex-col">
                {/* Gradient border wrapper */}
                <div
                  className="flex-1 flex flex-col rounded-2xl"
                  style={{ background: tier.borderGradient, padding: '1.5px' }}
                >
                  <div
                    className="flex-1 flex flex-col rounded-[14px] overflow-hidden"
                    style={{ background: tier.cardBg }}
                  >
                    {/* Illustration area */}
                    <div
                      style={{
                        flexShrink: 0,
                        height: '180px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 24px',
                        backgroundColor: '#D2D6ED',
                        backgroundImage: [
                          'radial-gradient(60% 50% at 78% 18%, rgba(233,119,193,.18), transparent 60%)',
                          'radial-gradient(50% 50% at 12% 90%, rgba(233,119,193,.10), transparent 60%)',
                          'linear-gradient(180deg, #DBDEF0 0%, #D2D6ED 60%, #CDD2EA 100%)',
                        ].join(', '),
                      }}
                    >
                      <TierIllustration />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-8">
                      <p
                        className="font-display font-black mb-2"
                        style={{ fontSize: 'clamp(28px, 3vw, 36px)', lineHeight: 1, color: tier.labelColor }}
                      >
                        {tier.label}
                      </p>
                      <p
                        className="font-display font-bold text-ss-neutral-700 mb-4"
                        style={{ fontSize: '18px', lineHeight: 1.2 }}
                      >
                        {tier.headline}
                      </p>
                      <p
                        className="font-sans text-ss-neutral-700/80 leading-relaxed mb-6"
                        style={{ fontSize: '14px', lineHeight: 1.55 }}
                      >
                        {tier.description}
                      </p>

                      <p
                        className="font-bold uppercase text-ss-neutral-700/50 mb-3"
                        style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                      >
                        What it looks like
                      </p>
                      <ul className="mb-6 flex flex-col gap-2">
                        {tier.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5">
                            <span
                              className="flex-shrink-0 rounded-full mt-[7px]"
                              style={{ width: '6px', height: '6px', background: '#E977C1' }}
                            />
                            <span className="font-sans text-ss-neutral-700/75" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className="mt-auto pt-4"
                        style={{ borderTop: `1px solid ${tier.labelColor}22` }}
                      >
                        <p
                          className="font-bold uppercase text-ss-neutral-700/50 mb-1"
                          style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                        >
                          When we use it
                        </p>
                        <p
                          className="font-sans text-ss-neutral-700/65 italic"
                          style={{ fontSize: '14px', lineHeight: 1.5 }}
                        >
                          {tier.when}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )})}
          </motion.div>
        </div>
      </section>

      {/* ── Section 6: Final CTA ── */}
      <section
        id="cta"
        className="bg-ss-purple-700 relative overflow-hidden"
        style={{ paddingTop: '144px', paddingBottom: '144px' }}
      >
        <img
          src="/assets/logos/logo-simple.png"
          aria-hidden="true"
          className="absolute inset-0 m-auto w-[480px] opacity-[0.06] select-none pointer-events-none"
        />

        <div className="mx-auto w-full max-w-[1200px] px-6 relative z-10">
          <motion.div
            variants={rs}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center gap-6 mx-auto"
            style={{ maxWidth: '720px' }}
          >
            <motion.h2
              variants={rv}
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}
            >
              If you're tired of marketing chaos,{' '}
              <em className="font-serif italic not-italic" style={gradientTextDark}>
                let's talk.
              </em>
            </motion.h2>

            <motion.p
              variants={rv}
              className="font-sans text-white/90"
              style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '560px' }}
            >
              A short, focused demo. We'll show you how SuperSymm would work for a firm
              like yours. No pressure — just a clear picture of what the system does.
            </motion.p>

            <motion.div
              variants={rv}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div
                whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              >
                <Link
                  to="/demo"
                  className="bg-ss-accent-100 text-ss-purple-700 font-semibold rounded-full px-8 py-4 text-sm inline-block"
                >
                  Book a Demo →
                </Link>
              </motion.div>
              <Link
                to="/pricing"
                className="flex items-center gap-2 text-white/80 font-semibold text-sm hover:text-white transition-colors"
              >
                Get Custom Pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.p
              variants={rv}
              className="font-sans text-sm text-white/60"
            >
              15-minute focused demo · We analyze your business context · No sales pressure
            </motion.p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
