import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  Crown, Users, RefreshCw, Zap, Network, Trophy,
  Target, Layers, Settings, BarChart2, CheckCircle, ChevronRight, Sparkles,
} from 'lucide-react'
import type React from 'react'
import PageWrapper from '@/components/common/PageWrapper'
import Breadcrumb from '@/components/common/Breadcrumb'
import FeatureGrid from '@/components/sections/FeatureGrid'
import type { FeatureGridItem } from '@/components/sections/FeatureGrid'
import PillarSection from '@/components/sections/marketing-automation/PillarSection'
import UnifiedDataIllustration from '@/components/sections/marketing-automation/illustrations/UnifiedDataIllustration'
import RealTimeResponseIllustration from '@/components/sections/marketing-automation/illustrations/RealTimeResponseIllustration'
import JourneyOrchestrationIllustration from '@/components/sections/marketing-automation/illustrations/JourneyOrchestrationIllustration'
import StayCompliantIllustration from '@/components/sections/marketing-automation/illustrations/StayCompliantIllustration'
import ChallengeIllustration from '@/components/sections/marketing-automation/illustrations/ChallengeIllustration'
import AssistiveAIIllustration from '@/components/sections/marketing-automation/illustrations/AssistiveAIIllustration'

// Matches HomeV2 gradient text style
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

const PHILOSOPHY_CARDS: FeatureGridItem[] = [
  {
    pre: 'Context is ',
    bold: 'King',
    body: "Before we automate anything, we understand your goals, your competitive position, and what success looks like a quarter from now. Tactics without context is activity without outcomes.",
    Icon: Crown,
    bg: '#F5F3FB',
  },
  {
    pre: 'Customer ',
    bold: 'First',
    body: "Every workflow serves a person, not a process. Campaigns start with who you're talking to and what they need next — not with what's easiest to schedule.",
    Icon: Users,
    bg: '#F0EDF8',
  },
  {
    pre: 'Optimization is ',
    bold: 'continuous.',
    body: "Every send, click, and conversion teaches the system something. Performance isn't reviewed quarterly — it's adjusted constantly, so the next campaign is sharper than the last.",
    Icon: RefreshCw,
    bg: '#F8F5FF',
  },
  {
    pre: 'Friction is the ',
    bold: 'enemy.',
    body: 'The fewer hand-offs between idea and execution, the more momentum your marketing has. We collapse approval chains, eliminate manual transfers, and make compliance invisible.',
    Icon: Zap,
    bg: '#EDE9F7',
  },
  {
    pre: 'Connected systems ',
    bold: 'compound.',
    body: "A single channel produces single-channel results. Channels that share data and intelligence produce results that compound — and a customer journey that doesn't break.",
    Icon: Network,
    bg: '#F3EFF9',
  },
  {
    pre: 'ROI is the only ',
    bold: 'scoreboard.',
    body: "Every channel, every campaign, every dollar gets traced back to a lead and a revenue outcome. Activity isn't the goal. Pipeline is.",
    Icon: Trophy,
    bg: '#EBE7F5',
  },
]

// Darker distinct hues — different from Our Approach cards
const CHALLENGES = [
  {
    headline: 'Fragmentation',
    body: 'Buyers skim answers (AI & search), scan social, and stream or surf then click.',
    bg: '#C8BFEA',
  },
  {
    headline: 'Signal Loss',
    body: 'Privacy, tracking loss, and modern algorithms punish spray‑and‑pray.',
    bg: '#D4C2E8',
  },
  {
    headline: 'Revenue Misalignment',
    body: '"More/Cheaper leads" ≠ pipeline. Revenue alignment or fail.',
    bg: '#BFC6E6',
  },
]

type CapabilityItem = {
  Icon: React.ComponentType<{ className?: string }>
  headline: string
  body: string
  gradient: string
  Illustration?: React.ComponentType
}

const CAPABILITIES: CapabilityItem[] = [
  {
    Icon: Target,
    headline: 'Lead Nurturing & Scoring',
    body: 'Automatically nurture prospects with tailored content at every stage — while the platform scores intent so sales knows exactly when to reach out.',
    gradient: 'linear-gradient(135deg, #6750A4, #B874CD)',
  },
  {
    Icon: Layers,
    headline: 'Personalization at Scale',
    body: "Deliver targeted content, emails, and offers based on each contact's behavior and segment — without manually building a campaign for every audience.",
    gradient: 'linear-gradient(135deg, #D331A0, #6750A4)',
  },
  {
    Icon: Settings,
    headline: 'Workflow Automation',
    body: "Scheduling social posts, sending welcome sequences, segmenting lists — handled automatically. Your team's time goes to strategy, not administration.",
    gradient: 'linear-gradient(135deg, #354270, #6750A4)',
  },
  {
    Icon: BarChart2,
    headline: 'Data-Driven Insights',
    body: "Track customer behavior across every channel, identify what's working, and feed those insights back into campaigns that get sharper over time.",
    gradient: 'linear-gradient(135deg, #3B7C6D, #354270)',
  },
  {
    Icon: CheckCircle,
    headline: 'Efficiency & Consistency',
    body: 'Reduce manual error and ensure every prospect receives the right message at the right time — consistently, on-brand, at a pace no team could match manually.',
    gradient: 'linear-gradient(135deg, #43336D, #8978BE)',
  },
  {
    Icon: Sparkles,
    headline: 'Assistive AI',
    body: 'Describe your goal, and AI drafts compliant, on-brand content for review — emails, social posts, nurture sequences — in seconds. You stay in control; the platform handles the heavy lifting.',
    gradient: 'linear-gradient(135deg, #D5F77C, #6750A4)',
    Illustration: AssistiveAIIllustration,
  },
]

const STATS = [
  { value: '40+', unit: 'hrs', label: 'saved per month\non marketing ops' },
  { value: '3–7', prefix: '↑', label: 'qualified leads\nper month (typical)' },
  { value: '~$2,200', label: 'average monthly\nsavings vs. agency' },
  { value: '100%', label: 'compliance coverage\nfor regulated content' },
]

const PILLAR_TAGS = [
  { label: 'Unified Data', anchor: '#unified-data' },
  { label: 'Smart Triggers', anchor: '#smart-triggers' },
  { label: 'Journey Orchestration', anchor: '#journey' },
  { label: 'Compliance', anchor: '#compliance' },
]

const BORDER_COLOR = 'rgba(103, 80, 164, 0.1)'

export default function MarketingAutomationPage() {
  const prefersReduced = useReducedMotion()
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    document.title = 'Marketing Automation Platform | SuperSymm'
  }, [])

  const resolvedFadeUp: Variants = prefersReduced ? { hidden: {}, visible: {} } : fadeUp
  const resolvedStagger: Variants = prefersReduced ? { hidden: {}, visible: {} } : stagger

  const ActiveCapability = CAPABILITIES[activeTab]

  return (
    <PageWrapper>
      {/* ── Section 1: Hero ── */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          background: '#1B0A20',
          paddingTop: 'calc(5rem + 12px)',
          paddingBottom: 'clamp(80px, 8vw, 120px)',
        }}
      >
        {/* Video — full-bleed background */}
        {!prefersReduced && (
          <video
            autoPlay
            muted
            loop
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
            background: 'linear-gradient(135deg, rgba(27,10,32,0.82) 0%, rgba(67,51,109,0.72) 40%, rgba(211,49,160,0.58) 75%, rgba(233,119,193,0.45) 100%)',
          }}
        />

        {/* Radial vignette — deepens edges */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(27,10,32,0.50) 0%, transparent 100%)' }}
        />

        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="mx-auto w-full max-w-[1200px] px-6 relative">
          <Breadcrumb
            variant="dark"
            items={[
              { label: 'Platform', href: '/platform' },
              { label: 'Marketing Automation', href: '/platform/marketing-automation' },
            ]}
          />

          {/* Copy block — centered */}
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            animate="visible"
            className="text-center mx-auto"
            style={{ maxWidth: '880px', paddingTop: 'clamp(36px, 4vw, 60px)' }}
          >
            <motion.div
              variants={resolvedFadeUp}
              className="inline-flex items-center justify-center gap-2 mb-5"
            >
              <span
                className="inline-flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ width: '26px', height: '26px', background: 'rgba(255,255,255,0.10)' }}
              >
                <Zap className="h-3.5 w-3.5 text-white/70" />
              </span>
              <span
                className="font-sans font-medium uppercase"
                style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)' }}
              >
                Automation with Purpose
              </span>
            </motion.div>

            <motion.h1
              variants={resolvedFadeUp}
              className="font-display font-black text-white mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', lineHeight: 1.05, textWrap: 'pretty' }}
            >
              Unify your customer journey.{' '}
              <em className="font-serif italic not-italic" style={{ color: 'var(--ss-yellow)' }}>End-to-end.</em>
            </motion.h1>

            <motion.p
              variants={resolvedFadeUp}
              className="font-sans mx-auto mb-10"
              style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', maxWidth: '640px' }}
            >
              A connected platform that knows your customer, runs every channel, and reacts
              to every signal — from the first click to the qualified handoff. Less friction.
              Better engagement. Higher ROI.
            </motion.p>

            <motion.div
              variants={resolvedFadeUp}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
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
                href="#pillars"
                className="font-sans font-medium transition-colors flex items-center justify-center gap-2"
                style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.90)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
              >
                See How It Works <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Our Approach — full-width connected cards ── */}
      <section id="philosophy" className="bg-white">
        <div
          className="mx-auto w-full max-w-[1200px] px-6"
          style={{ paddingTop: 'clamp(96px, 10vw, 140px)', paddingBottom: '56px' }}
        >
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center"
          >
            <motion.p
              variants={resolvedFadeUp}
              className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.08em' }}
            >
              Our Approach
            </motion.p>
            <motion.h2
              variants={resolvedFadeUp}
              className="font-display font-black leading-[1.1] text-ss-neutral-700 mx-auto mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', maxWidth: '720px', textWrap: 'pretty' }}
            >
              Making Automation{' '}
              <em className="font-serif italic not-italic" style={gradientText}>Core to Your Business</em>
            </motion.h2>
            <motion.p
              variants={resolvedFadeUp}
              className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500 mx-auto"
              style={{ maxWidth: '640px' }}
            >
              Most platforms optimize for output — more emails, more posts, more campaigns.
              SuperSymm optimizes for outcomes, built on six principles that shape
              every campaign we run.
            </motion.p>
          </motion.div>
        </div>

        <FeatureGrid items={PHILOSOPHY_CARDS} />
      </section>

      {/* ── Section 3: The Challenge ── */}
      <section id="challenge" className="bg-white">
        <div
          className="mx-auto w-full max-w-[1200px] px-6"
          style={{ paddingTop: 'clamp(96px, 10vw, 140px)', paddingBottom: '48px' }}
        >
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ maxWidth: '640px' }}
          >
            <motion.p
              variants={resolvedFadeUp}
              className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.08em' }}
            >
              The Challenge
            </motion.p>
            <motion.h2
              variants={resolvedFadeUp}
              className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', textWrap: 'pretty' }}
            >
              The New Reality of{' '}
              <em className="font-serif italic not-italic" style={gradientText}>Customer Behavior</em>
            </motion.h2>
            <motion.p
              variants={resolvedFadeUp}
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
          variants={resolvedFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mx-auto w-full max-w-[1200px] px-6 pb-0"
          style={{ paddingBottom: '0px' }}
        >
          <ChallengeIllustration />
        </motion.div>

        {/* Three challenge boxes — full-width, distinct darker hues */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: `1px solid ${BORDER_COLOR}`, borderLeft: `1px solid ${BORDER_COLOR}` }}
        >
          {CHALLENGES.map((c) => (
            <motion.div
              key={c.headline}
              variants={resolvedFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="p-10 lg:p-12 flex flex-col"
              style={{
                background: c.bg,
                borderRight: `1px solid ${BORDER_COLOR}`,
                borderBottom: `1px solid ${BORDER_COLOR}`,
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

      {/* ── Section 4: Pillars Intro ── */}
      <section id="pillars" className="bg-ss-neutral-100" style={{ padding: 'clamp(96px, 10vw, 140px) 0' }}>
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mx-auto"
            style={{ maxWidth: '800px' }}
          >
            <motion.p
              variants={resolvedFadeUp}
              className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.08em' }}
            >
              Intelligent Marketing
            </motion.p>
            <motion.h2
              variants={resolvedFadeUp}
              className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              The Power of{' '}
              <em className="font-serif italic not-italic" style={gradientText}>One Connected System</em>
            </motion.h2>
            <motion.p
              variants={resolvedFadeUp}
              className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500 mb-12"
            >
              Each pillar works independently. Together they form the connected system
              that turns disconnected tactics into a unified customer journey — where every
              piece makes the others stronger.
            </motion.p>

            <motion.div variants={resolvedStagger} className="flex flex-wrap justify-center gap-3">
              {PILLAR_TAGS.map((tag) => (
                <motion.a
                  key={tag.anchor}
                  href={tag.anchor}
                  variants={resolvedFadeUp}
                  className="font-display font-bold uppercase rounded-full border transition-all duration-200"
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.06em',
                    color: 'var(--ss-navy)',
                    padding: '8px 16px',
                    height: '36px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'white',
                    borderColor: 'var(--ss-border-subtle)',
                  }}
                  whileHover={
                    prefersReduced
                      ? undefined
                      : {
                          y: -2,
                          backgroundColor: 'rgba(103,80,164,0.08)',
                          borderColor: 'rgba(103,80,164,0.24)',
                          transition: { duration: 0.2 },
                        }
                  }
                  whileTap={prefersReduced ? undefined : { scale: 0.97 }}
                >
                  {tag.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Sections 5–9: Pillar Sections (illustrations parallax via PillarSection) ── */}

      <PillarSection
        id="unified-data"
        number="Unified Data"
        title={"Know your customer.\nAutomate your touchpoints."}
        body={[
          "Every interaction — email opens, page visits, ad clicks, form fills — unified into one continuously enriched customer profile. No fragmented data. No guessing at intent. You see the full picture of every prospect, and personas stop being slide-deck artifacts.",
        ]}
        included={['ICP modeling and persona development', 'Cross-channel data unification', 'Behavioral profile building']}
        insight="SuperSymm builds and continuously enriches behavioral profiles that drive every campaign, trigger, and decision in the system — so your marketing always reflects the current customer, not last quarter's data."
        illustration={<UnifiedDataIllustration />}
      />

      {/* ── Smart Triggers — custom stacked layout ── */}
      <section
        id="smart-triggers"
        className="border-b"
        style={{ padding: '80px 0', background: 'var(--ss-bg-soft)', borderColor: 'var(--ss-border-subtle)' }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          {/* Eyebrow + title */}
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-10"
          >
            <motion.div variants={resolvedFadeUp} className="mb-4">
              <span
                className="inline-flex items-center rounded-full font-sans font-semibold text-xs uppercase tracking-wider px-3 py-1"
                style={{ background: 'white', color: 'var(--ss-purple)', letterSpacing: '0.06em' }}
              >
                Smart Triggers
              </span>
            </motion.div>
            <motion.h3
              variants={resolvedFadeUp}
              className="font-display font-black text-ss-neutral-700"
              style={{ fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1.15 }}
            >
              Reach customers in the moments that matter most.
            </motion.h3>
          </motion.div>

          {/* Illustration — centered */}
          <motion.div
            variants={resolvedFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="mb-12"
          >
            <RealTimeResponseIllustration />
          </motion.div>

          {/* Body copy (left) + insight box (right) */}
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
          >
            {/* Description */}
            <motion.div variants={resolvedFadeUp}>
              <p
                className="font-sans text-ss-neutral-500 mb-5"
                style={{ fontSize: '17px', lineHeight: 1.65 }}
              >
                The window between interest and action is short. A prospect downloads a guide,
                visits pricing, or reads two articles in a week — and the platform responds in
                real time. Lead scores update, sequences adjust, and sales gets pinged the moment
                someone crosses the threshold.
              </p>
              <p className="font-sans text-ss-neutral-400" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                Real-time lead scoring · Behavior-triggered sequences · Sales alerts on qualification · Cart abandonment and re-engagement flows
              </p>
            </motion.div>

            {/* SuperSymm insight box */}
            <motion.div variants={resolvedFadeUp}>
              <div
                className="rounded-xl"
                style={{ background: 'linear-gradient(135deg, #6750A4, #E977C1)', padding: '1.5px' }}
              >
                <div
                  className="rounded-[10px] p-4 flex flex-col gap-2.5"
                  style={{ background: 'white' }}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/logos/nav-logo-circle.png"
                      alt=""
                      aria-hidden="true"
                      style={{ width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0 }}
                    />
                    <span
                      className="font-sans font-semibold uppercase"
                      style={{ fontSize: '11px', letterSpacing: '0.07em', color: 'var(--ss-purple)' }}
                    >
                      SuperSymm
                    </span>
                  </div>
                  <p className="font-sans text-ss-neutral-500" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                    SuperSymm monitors behavioral signals 24/7 and acts in real time — so your outreach arrives when intent is highest, not when someone remembered to check the queue.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PillarSection
        id="journey"
        number="Journey Orchestration"
        title={"Guide every prospect from\nfirst interest to final decision."}
        body={[
          "SuperSymm maps and orchestrates the full path — welcome flows, nurture sequences, re-engagement, and sales handoffs. Each step adapts to behavior. If a prospect clicks but doesn't convert, the next message changes automatically. If they go quiet, the cadence adjusts.",
        ]}
        included={['Visual journey mapping', 'Multi-step nurture workflows', 'Behavior-based branching', 'Sales handoff automation']}
        insight="SuperSymm handles all the branching logic automatically — set your strategy once and the platform executes every variation, adapting as your prospects move through the funnel."
        illustration={<JourneyOrchestrationIllustration />}
      />


      <PillarSection
        id="compliance"
        number="Compliance"
        title={"Stay compliant\nwithout slowing down."}
        body={[
          "For regulated industries, compliance can't be a checklist after the fact. SuperSymm handles approval workflows, archiving, audit trails, and disclaimer insertion inside the publishing flow. SEC, HIPAA, state bar — the requirements live in the system.",
        ]}
        included={['SEC / FINRA archiving (5-year)', 'HIPAA-compliant communications', 'State bar advertising compliance', 'Pre-publish approval workflows', 'Audit-ready reporting']}
        insight="SuperSymm is built for RIAs, healthcare, and legal professionals — compliance is the default state, not a checklist someone runs after the fact."
        illustration={<StayCompliantIllustration />}
      />

      {/* ── Section 10: Blueprint (Near-black + dot texture) ── */}
      <section
        id="blueprint"
        style={{
          padding: '64px 0',
          background: '#1B0A20',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <div className="mx-auto w-full px-6" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
            <motion.div
              variants={resolvedStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.p
                variants={resolvedFadeUp}
                className="font-sans font-medium uppercase mb-4"
                style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)' }}
              >
                Free Resource
              </motion.p>
              <motion.h2
                variants={resolvedFadeUp}
                className="font-display font-black leading-[1.1] text-white mb-5"
                style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
              >
                The Automation DIY Playbook.
              </motion.h2>
              <motion.p
                variants={resolvedFadeUp}
                className="font-sans mb-8"
                style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(255,255,255,0.68)', maxWidth: '480px' }}
              >
                We're here to partner — but we've also built an automation playbook based on
                our methodology that you can implement yourself. Real, actionable content
                specialized not just to your market, but to your specific business.
              </motion.p>
              <motion.div
                variants={resolvedFadeUp}
                whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
                className="inline-block"
              >
                {/* TODO V2: replace href="#" with /resources/automation-playbook */}
                <a href="#" className="ss-btn-accent" data-track="playbook-cta" onClick={(e) => e.preventDefault()}>
                  Get the Playbook →
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={resolvedFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex justify-center lg:justify-end"
            >
              {/* TODO: Replace with real blueprint cover mockup */}
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: '240px',
                  height: '300px',
                  transform: 'rotate(4deg)',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <p className="font-sans text-xs font-medium text-center px-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  FPO: Blueprint cover mockup
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 11: Benefits (Dark) ── */}
      <section id="benefits" className="bg-ss-purple-700" style={{ padding: 'clamp(96px, 10vw, 140px) 0' }}>
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.p
              variants={resolvedFadeUp}
              className="font-sans font-medium uppercase mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'var(--ss-yellow)' }}
            >
              What This Means For You
            </motion.p>
            <motion.h2
              variants={resolvedFadeUp}
              className="font-display font-black leading-[1.1] text-white mx-auto mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', maxWidth: '620px', textWrap: 'pretty' }}
            >
              When the system is built like this,{' '}
              <em className="font-serif italic not-italic" style={{ color: 'var(--ss-yellow)' }}>the numbers shift.</em>
            </motion.h2>
            <motion.p
              variants={resolvedFadeUp}
              className="font-sans mx-auto"
              style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.70)', maxWidth: '720px' }}
            >
              Less friction means faster execution. Connected systems mean better attribution.
              Continuous optimization means improving ROI over time.
            </motion.p>
          </motion.div>

          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.value} variants={resolvedFadeUp} className="text-center">
                <p
                  className="font-display font-black leading-none mb-2"
                  style={{ fontSize: 'clamp(38px, 4.5vw, 56px)', color: 'var(--ss-yellow)' }}
                >
                  {stat.prefix && <span>{stat.prefix}</span>}
                  {stat.value}
                  {stat.unit && <span style={{ fontSize: '0.55em' }}> {stat.unit}</span>}
                </p>
                <p
                  className="font-sans whitespace-pre-line"
                  style={{ fontSize: '14px', lineHeight: 1.4, color: 'rgba(255,255,255,0.70)' }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={resolvedFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-sans italic text-center mx-auto"
            style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', maxWidth: '560px' }}
          >
            Results vary by firm size, industry, and engagement scope.
            These reflect typical outcomes from active SuperSymm engagements.
          </motion.p>
        </div>
      </section>

      {/* ── Section 12: The Marketing Challenges We Solve — Vertical Tabs ── */}
      <section id="outcomes" className="bg-white" style={{ padding: 'clamp(96px, 10vw, 140px) 0' }}>
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mx-auto mb-16"
            style={{ maxWidth: '720px' }}
          >
            <motion.p
              variants={resolvedFadeUp}
              className="font-sans font-medium uppercase text-ss-neutral-400 mb-4"
              style={{ fontSize: '13px', letterSpacing: '0.08em' }}
            >
              What This Enables
            </motion.p>
            <motion.h2
              variants={resolvedFadeUp}
              className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              <em className="font-serif italic not-italic" style={gradientText}>Automating Growth</em>
            </motion.h2>
            <motion.p
              variants={resolvedFadeUp}
              className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500"
            >
              When data, triggers, journeys, channels, and compliance share one system,
              these are the outcomes that follow.
            </motion.p>
          </motion.div>

          <motion.div
            variants={resolvedFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col lg:flex-row gap-0 lg:gap-16 items-start"
          >
            {/* Vertical tabs */}
            <div className="w-full lg:w-72 flex-shrink-0">
              {CAPABILITIES.map((cap, i) => (
                <button
                  key={cap.headline}
                  onClick={() => setActiveTab(i)}
                  className="w-full flex items-center justify-between text-left transition-all duration-200 py-5"
                  style={{
                    paddingLeft: activeTab === i ? '16px' : '4px',
                    borderBottom: i < CAPABILITIES.length - 1 ? '1px solid var(--ss-border-subtle)' : 'none',
                    borderLeft: activeTab === i ? '3px solid var(--ss-purple)' : '3px solid transparent',
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: '16px',
                      fontWeight: activeTab === i ? 700 : 500,
                      color: activeTab === i ? 'var(--ss-purple)' : 'var(--ss-navy)',
                      opacity: activeTab === i ? 1 : 0.65,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {cap.headline}
                  </span>
                  <ChevronRight
                    className="flex-shrink-0 ml-3 transition-all duration-200"
                    style={{
                      width: '16px',
                      height: '16px',
                      color: activeTab === i ? 'var(--ss-purple)' : 'var(--ss-navy)',
                      opacity: activeTab === i ? 1 : 0.25,
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div
              className="flex-1 mt-8 lg:mt-0 rounded-2xl p-10"
              style={{ background: 'var(--ss-bg-purple-light)', minHeight: '320px' }}
            >
              <div
                className="mb-5 inline-flex items-center justify-center rounded-xl"
                style={{ width: '52px', height: '52px', background: ActiveCapability.gradient }}
              >
                <ActiveCapability.Icon className="h-6 w-6 text-white" />
              </div>
              <h3
                className="font-display font-black leading-[1.15] text-ss-neutral-700 mb-4"
                style={{ fontSize: 'clamp(22px, 2.5vw, 28px)' }}
              >
                {ActiveCapability.headline}
              </h3>
              <p
                className="font-sans text-[17px] leading-[1.65] text-ss-neutral-500"
              >
                {ActiveCapability.body}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 14: Final CTA (Violet + Blobs + logo-simple watermarks) ── */}
      <section id="cta" className="bg-ss-violet-700 relative overflow-hidden" style={{ padding: '140px 0' }}>
        {/* Animated blobs */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <motion.div
            className="absolute rounded-full bg-ss-pink-700/30 blur-[140px]"
            style={{ width: '600px', height: '600px', left: '-10%', top: '-25%' }}
            animate={prefersReduced ? {} : { x: [0, 80, -50, 65, 0], y: [0, 55, -40, 70, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full bg-ss-purple-500/25 blur-[180px]"
            style={{ width: '550px', height: '550px', right: '-5%', top: '20%' }}
            animate={prefersReduced ? {} : { x: [0, -70, 40, -55, 0], y: [0, 60, -50, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full bg-ss-violet-300/15 blur-[160px]"
            style={{ width: '480px', height: '480px', left: '30%', bottom: '-20%' }}
            animate={prefersReduced ? {} : { x: [0, 55, -40, 35, 0], y: [0, -50, 30, -35, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* logo-simple watermarks */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {(
            [
              { size: '72px', pos: { left: '5%', top: '12%' }, opacity: 0.14 },
              { size: '52px', pos: { right: '10%', top: '8%' }, opacity: 0.10 },
              { size: '88px', pos: { right: '2%', top: '45%' }, opacity: 0.09 },
              { size: '64px', pos: { left: '20%', bottom: '10%' }, opacity: 0.11 },
              { size: '80px', pos: { right: '22%', bottom: '8%' }, opacity: 0.12 },
            ] as const
          ).map((w, i) => (
            <img
              key={i}
              src="/assets/logos/logo-simple.png"
              alt=""
              style={{ position: 'absolute', ...w.pos, width: w.size, height: 'auto', opacity: w.opacity }}
            />
          ))}
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-6 relative z-10">
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mx-auto"
            style={{ maxWidth: '720px' }}
          >
            <motion.h2
              variants={resolvedFadeUp}
              className="font-display font-black text-white mb-10"
              style={{ fontSize: 'clamp(36px, 5vw, 52px)', lineHeight: 1.1, textWrap: 'pretty' }}
            >
              What if marketing finally{' '}
              <em className="font-serif italic not-italic" style={{ color: 'var(--ss-yellow)' }}>got out of your way?</em>
            </motion.h2>

            <motion.div
              variants={resolvedFadeUp}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center mb-8"
            >
              <motion.div
                whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              >
                <Link to="/pricing" className="ss-btn-accent">
                  Get Custom Pricing →
                </Link>
              </motion.div>
              <Link
                to="/demo"
                className="font-sans font-medium text-white/80 hover:text-white transition-colors"
                style={{ fontSize: '15px' }}
              >
                Book a Demo
              </Link>
            </motion.div>

            <motion.p
              variants={resolvedFadeUp}
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
