import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, Eye, MousePointerClick, Filter, User, Users, Heart, Briefcase } from 'lucide-react'
import PageWrapper from '@/components/common/PageWrapper'
import Breadcrumb from '@/components/common/Breadcrumb'
import HeroDotGrid from '@/components/sections/marketing-automation/HeroDotGrid'
import MarketingSystemDiagram from '@/components/sections/lead-generation/MarketingSystemDiagram'
import LeadJourney from '@/components/sections/v2/LeadJourney'

const MotionLink = motion.create(Link)

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const inView = { once: true, amount: 0.2 as const }

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(93deg, #ACA1D2, #E977C1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

function SectionEyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: dark ? 'rgba(213,247,124,0.80)' : 'var(--ss-purple)',
        marginBottom: '16px',
      }}
    >
      {children}
    </p>
  )
}

// ─── Section 3 Tab data ───────────────────────────────────────────────────────
const SYSTEM_TABS = [
  {
    id: 'visibility',
    tag: 'Visibility',
    Icon: Eye,
    headline: 'Show up where buyers already are',
    description:
      'Buyers research across LinkedIn, podcasts, AI assistants, and social feeds — not just search. We build and manage your presence everywhere they look.',
    image: '/assets/illustrations/Lead_Gen_Visibility.png',
  },
  {
    id: 'capture',
    tag: 'Capture',
    Icon: MousePointerClick,
    headline: 'Turn visitors into prospects',
    description:
      "Most websites only ask visitors to contact you — a hard ask for someone early in research. We build pages and lead magnets that earn the next step without demanding premature commitment.",
    image: '/assets/illustrations/Lead_Gen_Capture.png',
  },
  {
    id: 'qualification',
    tag: 'Qualification',
    Icon: Filter,
    headline: 'Meet with qualified leads',
    description:
      'We score and route every lead to sales, nurture, or a long-term list based on intent, fit, and behavior. Hot leads reach your calendar in minutes.',
    image: '/assets/illustrations/Lead_Gen_Qualification.png',
  },
]

// ─── Section 4 Tier data ──────────────────────────────────────────────────────
const TIERS = [
  {
    tier: 'TIER 1',
    name: 'Decision-ready',
    who: 'Pricing page visitors. Demo requesters. Fit your ICP. Ready to move.',
    body: 'Routed to sales in under five minutes, with full context on what they engaged with.',
    benefitLine: "You talk to them while they're still interested — not after they've gone elsewhere.",
    accentColor: '#D5F77C',
  },
  {
    tier: 'TIER 2',
    name: 'Warm but not ready',
    who: 'Good fit. Three to six months out from a real decision.',
    body: 'Enters automated nurture sequences calibrated to their interests. Promoted to Tier 1 when behavior signals readiness.',
    benefitLine: 'They stay engaged for the months it takes to be ready. When they are, they come to you.',
    accentColor: '#ACA1D2',
  },
  {
    tier: 'TIER 3',
    name: 'Researching',
    who: 'Early-stage. Exploratory. Long horizon.',
    body: 'Joins a long-term email list. Monthly newsletter cadence. The system tracks the journey.',
    benefitLine: "Today's curious visitor becomes next year's client. Sales never spent an hour on them.",
    accentColor: '#66CEB6',
  },
]

// ─── Section 5 Audience data ──────────────────────────────────────────────────
const AUDIENCES = [
  {
    id: 'solo',
    label: 'Solo Advisors',
    Icon: User,
    image: '/assets/illustrations/solo_advisor_photo.gif',
    title: 'Adding Quality & Compliance',
    challenge: "Your constraint isn't lead volume. It's quality and compliance.",
    approach:
      'We build a system that produces 3–7 qualified prospects per month from compliant content, social presence, and referrals. You don\'t write the posts, manage the archive, or chase the leads.',
    outcome: 'You meet with prospects who already want to work with you.',
    solutionHref: '/solutions/financial-advisors',
    solutionLabel: 'Financial Advisor solutions',
  },
  {
    id: 'firm',
    label: 'Mid-size Firms',
    Icon: Users,
    image: '/assets/illustrations/Mid_size_firm_photo.jpg',
    title: 'Growing the Pipeline at Scale',
    challenge: 'Your constraint is keeping the pipeline full enough to support your sales team.',
    approach:
      'We build a system that produces 20–50 qualified inquiries per quarter from multi-channel paid, content-driven SEO, and automated routing. Your sales team gets a steady stream of qualified leads with full context.',
    outcome: 'Their hours go to closing, not prospecting.',
    solutionHref: '/solutions',
    solutionLabel: 'Solutions Overview',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    Icon: Heart,
    image: '/assets/illustrations/healthcare_photo.jpg',
    title: 'Multi-Location, Fully Compliant',
    challenge: 'Your constraint is growing patient volume across locations while staying HIPAA compliant.',
    approach:
      'We build HIPAA-compliant intake workflows, location-specific landing pages, and geo-targeted paid campaigns. Each practice location fills its own appointment pipeline.',
    outcome: 'Compliance stays in the background. New patients find the right location.',
    solutionHref: '/solutions',
    solutionLabel: 'Solutions Overview',
  },
  {
    id: 'b2b',
    label: 'B2B Services',
    Icon: Briefcase,
    image: '/assets/illustrations/B2B.gif',
    title: 'Reaching the Right Decision-Makers',
    challenge: 'Your constraint is reaching decision-makers at the accounts you actually want to win.',
    approach:
      'We build account-based campaigns on LinkedIn, content that earns attention at the right titles, and longer nurture cycles measured in quarters. Your pipeline fills with enterprise meetings.',
    outcome: 'You stop chasing generic inquiries. You start filling a target-account pipeline.',
    solutionHref: '/solutions',
    solutionLabel: 'Solutions Overview',
  },
]

// ─── Page component ───────────────────────────────────────────────────────────
export default function LeadGenerationPage() {
  const [activeSystemTab, setActiveSystemTab] = useState(0)
  const [activeAudienceTab, setActiveAudienceTab] = useState(0)
  const prefersReduced = useReducedMotion() ?? false

  const animate = (extraVariants?: Variants) => ({
    variants: prefersReduced ? {} : (extraVariants ?? fadeUp),
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: inView,
  })

  const animateItem = { variants: prefersReduced ? {} : fadeUp }

  const activeTab = SYSTEM_TABS[activeSystemTab]
  const activeAudience = AUDIENCES[activeAudienceTab]

  return (
    <PageWrapper>

      {/* ── Section 1: Hero — video background ──────── */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(93deg, #22193B 0%, #3D1535 100%)',
          paddingTop: 'calc(5rem + 12px)',
          paddingBottom: 'clamp(80px, 8vw, 120px)',
        }}
      >
        {/* Background video — muted autoplay, object-fit cover */}
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
            <source src="/assets/lead-generation.mp4" type="video/mp4" />
          </video>
        )}

        {/* Brand gradient overlay — semi-transparent so video shows through */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(93deg, rgba(34,25,59,0.88) 0%, rgba(67,51,109,0.80) 50%, rgba(180,55,128,0.70) 100%)',
          }}
        />

        {/* Animated shimmer on top of gradient */}
        {!prefersReduced && (
          <div
            className="pointer-events-none absolute inset-0 hero-animated-bg"
            aria-hidden="true"
            style={{ opacity: 0.12, mixBlendMode: 'screen' }}
          />
        )}

        {/* Radial vignette — deepens bottom */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(34,25,59,0.55) 0%, transparent 100%)' }}
        />

        {/* Dot grid watermark */}
        <HeroDotGrid />

        <div className="mx-auto w-full max-w-[1200px] px-6 relative">
          {/* Breadcrumb — variant="dark" renders white text on dark bg */}
          <Breadcrumb
            variant="dark"
            items={[
              { label: 'Platform', href: '/platform' },
              { label: 'Lead Generation', href: '/platform/lead-generation' },
            ]}
          />

          {/* Copy block — centered */}
          <motion.div
            variants={prefersReduced ? {} : stagger}
            initial={prefersReduced ? false : 'hidden'}
            animate="visible"
            className="text-center mx-auto"
            style={{ maxWidth: '880px', paddingTop: 'clamp(36px, 4vw, 60px)' }}
          >
            <motion.div
              variants={prefersReduced ? {} : fadeUp}
              className="inline-flex items-center justify-center gap-2 mb-5"
            >
              <span
                className="inline-flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ width: '26px', height: '26px', background: 'rgba(255,255,255,0.12)' }}
              >
                <Eye className="h-3.5 w-3.5" style={{ color: 'rgba(255,255,255,0.80)' }} />
              </span>
              <span
                className="font-sans font-medium uppercase"
                style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.65)' }}
              >
                Building a Pipeline to Growth
              </span>
            </motion.div>

            <motion.h1
              variants={prefersReduced ? {} : fadeUp}
              className="font-display font-black text-white mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', lineHeight: 1.05, textWrap: 'pretty' }}
            >
              Lead generation isn't a campaign.{' '}
              <em className="font-serif not-italic" style={gradientText}>It's a system.</em>
            </motion.h1>

            <motion.p
              variants={prefersReduced ? {} : fadeUp}
              className="font-sans mx-auto mb-10"
              style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '640px', color: 'rgba(255,255,255,0.72)' }}
            >
              Most lead gen is a tactic — an ad, a form, a follow-up email. Real lead generation
              is the infrastructure underneath all of it. We build and run the whole thing,
              so you receive better leads with less effort.
            </motion.p>

            <motion.div
              variants={prefersReduced ? {} : fadeUp}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center mb-16"
            >
              <MotionLink
                to="/pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#D5F77C',
                  color: '#22193B',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  padding: '0 28px',
                  height: '52px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                }}
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
              >
                Book a Demo <ArrowRight size={16} />
              </MotionLink>
              <a
                href="#how-it-works"
                className="font-sans font-medium transition-opacity flex items-center justify-center gap-2 hover:opacity-80"
                style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}
              >
                See How It Works <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Connected Customer Journey ───── */}
      <section
        id="funnel"
        style={{
          backgroundColor: '#F1F0F1',
          backgroundImage: `linear-gradient(rgba(103,80,164,0.07) 1px, transparent 1px), linear-gradient(to right, rgba(103,80,164,0.07) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          padding: 'clamp(96px, 10vw, 140px) 0',
        }}
      >
        <div className="mx-auto w-full px-6" style={{ maxWidth: '1200px' }}>
          <motion.div className="text-center" {...animate(stagger)}>
            <motion.div {...animateItem}>
              <SectionEyebrow>The Platform</SectionEyebrow>
            </motion.div>
            <motion.h2
              {...animateItem}
              className="font-display font-black leading-[1.1] text-ss-neutral-700 mx-auto mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: '800px', textWrap: 'pretty' }}
            >
              A connected customer journey,{' '}
              <em className="font-serif not-italic" style={{ ...gradientText, background: 'linear-gradient(93deg, #6750A4, #E977C1)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>end to end.</em>
            </motion.h2>
            <motion.p
              {...animateItem}
              className="font-sans text-ss-neutral-500 mx-auto"
              style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '640px' }}
            >
              Four phases. One platform. Every signal accounted for,
              from the first search to the next renewal.
            </motion.p>
          </motion.div>

          {/* Marketing System Diagram */}
          <motion.div
            {...animate()}
            style={{ marginTop: '56px' }}
          >
            <MarketingSystemDiagram />
          </motion.div>
        </div>
      </section>

      <LeadJourney />

      {/* ── Section 3: Connections & Conversions ────── */}
      <section
        id="how-it-works"
        style={{
          background: 'linear-gradient(135deg, #1B0A20 0%, #22193B 40%, #2D1B4E 80%, #1B0A20 100%)',
          padding: 'clamp(96px, 10vw, 140px) 0',
        }}
      >
        <div className="mx-auto w-full px-6" style={{ maxWidth: '1200px' }}>
          {/* Section header */}
          <motion.div className="text-center mx-auto mb-10" style={{ maxWidth: '720px' }} {...animate(stagger)}>
            <motion.div {...animateItem}>
              <SectionEyebrow dark>Connections &amp; Conversions</SectionEyebrow>
            </motion.div>
            <motion.h2
              {...animateItem}
              className="font-display font-black leading-[1.1] text-white mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', textWrap: 'pretty' }}
            >
              A system that{' '}
              <em className="font-serif not-italic" style={gradientText}>captures and converts.</em>
            </motion.h2>
            <motion.p
              {...animateItem}
              className="font-sans mb-8"
              style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}
            >
              SuperSymm connects every stage of the buyer journey into one continuous flow —
              building presence, converting attention, and routing the right people to your calendar.
            </motion.p>

            {/* Book a Demo CTA */}
            <motion.div {...animateItem} className="flex justify-center mb-2">
              <MotionLink
                to="/pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#D5F77C',
                  color: '#22193B',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: '15px',
                  padding: '0 24px',
                  height: '46px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                }}
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
              >
                Book a Demo <ArrowRight size={15} />
              </MotionLink>
            </motion.div>
          </motion.div>

          {/* Tab layout: ~50/50 — left tabs + right image */}
          <motion.div
            {...animate()}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* Left — Tab list with descriptions */}
            <div className="flex flex-col gap-3 lg:sticky lg:top-28">
              {SYSTEM_TABS.map((tab, i) => {
                const isActive = activeSystemTab === i
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSystemTab(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '20px 24px',
                      borderRadius: '16px',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      background: isActive ? 'rgba(213,247,124,0.08)' : 'transparent',
                      borderLeft: isActive ? '3px solid #D5F77C' : '3px solid transparent',
                      transition: 'all 200ms ease',
                    }}
                    aria-selected={isActive}
                  >
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: isActive ? 'rgba(213,247,124,0.18)' : 'rgba(255,255,255,0.08)',
                        flexShrink: 0,
                        marginTop: '2px',
                        transition: 'background 200ms',
                      }}
                    >
                      <tab.Icon size={16} style={{ color: isActive ? '#D5F77C' : 'rgba(255,255,255,0.50)' }} />
                    </span>

                    <div style={{ minWidth: 0 }}>
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 600,
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: isActive ? '#D5F77C' : 'rgba(255,255,255,0.40)',
                          marginBottom: '6px',
                          transition: 'color 200ms',
                        }}
                      >
                        {tab.tag}
                      </p>
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 700,
                          fontSize: '17px',
                          color: isActive ? 'white' : 'rgba(255,255,255,0.50)',
                          lineHeight: 1.3,
                          margin: '0 0 10px',
                          transition: 'color 200ms',
                        }}
                      >
                        {tab.headline}
                      </p>
                      {isActive && (
                        <p
                          style={{
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.65)',
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {tab.description}
                        </p>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right — Image panel */}
            <div
              style={{
                width: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
                minHeight: '360px',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                key={activeTab.image}
                src={activeTab.image}
                alt={activeTab.tag}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Know Your Customers (dark) ────── */}
      <section
        id="tiers"
        style={{ background: '#0F0F0F', padding: 'clamp(96px, 10vw, 140px) 0' }}
      >
        <div className="mx-auto w-full px-6" style={{ maxWidth: '1200px' }}>
          <motion.div className="text-center mb-16" {...animate(stagger)}>
            <motion.div {...animateItem}>
              <SectionEyebrow dark>Know Your Customers</SectionEyebrow>
            </motion.div>
            <motion.h2
              {...animateItem}
              className="font-display font-black leading-[1.1] text-white mx-auto mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: '720px' }}
            >
              Not every lead is the same.
            </motion.h2>
            <motion.p
              {...animateItem}
              className="font-sans mx-auto"
              style={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.60)',
                maxWidth: '600px',
              }}
            >
              Different buyers have different timelines. The system meets each one where they are —
              nurturing at every level, routing based on readiness, and never letting a good lead
              go cold just because the timing wasn't right.
            </motion.p>
          </motion.div>

          <motion.ol
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
            variants={prefersReduced ? {} : stagger}
            initial={prefersReduced ? false : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={inView}
          >
            {TIERS.map((tier) => (
              <motion.li
                key={tier.tier}
                variants={prefersReduced ? {} : fadeUp}
                style={{
                  background: '#1A1A1A',
                  borderRadius: '20px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  borderTop: `3px solid ${tier.accentColor}`,
                }}
              >
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.10em', color: tier.accentColor, margin: 0 }}>
                  {tier.tier}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '26px', color: 'white', lineHeight: 1.2, margin: 0 }}>
                  {tier.name}
                </p>
                <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, margin: 0 }}>
                  {tier.who}
                </p>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
                  {tier.body}
                </p>
                <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px', color: tier.accentColor, lineHeight: 1.5, margin: 0, paddingTop: '8px', borderTop: `1px solid ${tier.accentColor}28` }}>
                  {tier.benefitLine}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ── Section 5: Personalized Growth (tabs) ─────── */}
      <section
        id="audiences"
        style={{
          background: 'linear-gradient(160deg, #ffffff 0%, #F4F2F8 50%, #EDE9F5 100%)',
          padding: 'clamp(96px, 10vw, 140px) 0',
        }}
      >
        <div className="mx-auto w-full px-6" style={{ maxWidth: '1200px' }}>
          <motion.div className="text-center mb-12" {...animate(stagger)}>
            <motion.div {...animateItem}>
              <SectionEyebrow>Personalized Growth</SectionEyebrow>
            </motion.div>
            <motion.h2
              {...animateItem}
              className="font-display font-black leading-[1.1] text-ss-neutral-700 mx-auto mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: '720px' }}
            >
              What this looks like{' '}
              <em className="font-serif not-italic" style={{ background: 'linear-gradient(93deg, #6750A4, #E977C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>for you.</em>
            </motion.h2>
            <motion.p
              {...animateItem}
              className="font-sans text-ss-neutral-500 mx-auto"
              style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '680px' }}
            >
              Whether you run a solo advisory practice, a growing firm, a healthcare network, or a
              B2B business — the SuperSymm engine is the same. What changes is how it's calibrated:
              your audience, your compliance requirements, your buying cycle. One platform, built
              to fit the shape of your growth.
            </motion.p>
          </motion.div>

          {/* Tab bar */}
          <motion.div
            {...animate()}
            className="flex flex-wrap gap-2 mb-10 justify-center"
            role="tablist"
          >
            {AUDIENCES.map((aud, i) => {
              const isActive = activeAudienceTab === i
              return (
                <button
                  key={aud.id}
                  onClick={() => setActiveAudienceTab(i)}
                  role="tab"
                  aria-selected={isActive}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '100px',
                    border: `1.5px solid ${isActive ? 'var(--ss-purple)' : 'rgba(34,25,59,0.12)'}`,
                    background: isActive ? 'var(--ss-bg-purple-light)' : 'rgba(255,255,255,0.70)',
                    color: isActive ? 'var(--ss-purple)' : 'rgba(34,25,59,0.55)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                  }}
                >
                  <aud.Icon size={15} style={{ flexShrink: 0 }} />
                  {aud.label}
                </button>
              )
            })}
          </motion.div>

          {/* Tab content — 60/40 split, image fills full height */}
          <motion.div
            key={activeAudienceTab}
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              background: 'rgba(255,255,255,0.80)',
              backdropFilter: 'blur(8px)',
              borderRadius: '24px',
              border: '1px solid rgba(103,80,164,0.08)',
              overflow: 'hidden', // clips image to container's rounded corners
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-stretch">
              {/* Left column — content with its own padding */}
              <div style={{ padding: 'clamp(32px, 5vw, 56px)' }}>
                {/* Punchy title */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 2.5vw, 28px)',
                    color: 'var(--ss-navy)',
                    lineHeight: 1.2,
                    marginBottom: '32px',
                  }}
                >
                  {activeAudience.title}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Challenge */}
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(34,25,59,0.45)', marginBottom: '8px' }}>
                      Challenge
                    </p>
                    <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px', color: 'var(--ss-navy)', lineHeight: 1.65, margin: 0 }}>
                      {activeAudience.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(34,25,59,0.45)', marginBottom: '8px' }}>
                      Approach
                    </p>
                    <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px', color: 'var(--ss-navy)', lineHeight: 1.65, margin: 0 }}>
                      {activeAudience.approach}
                    </p>
                  </div>

                  {/* Outcome — dark purple callout */}
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ss-purple)', marginBottom: '8px' }}>
                      Outcome
                    </p>
                    <div
                      style={{
                        background: 'rgba(103,80,164,0.08)',
                        borderLeft: '3px solid var(--ss-purple)',
                        borderRadius: '0 10px 10px 0',
                        padding: '14px 18px',
                      }}
                    >
                      <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '16px', color: 'var(--ss-navy)', lineHeight: 1.6, margin: 0 }}>
                        {activeAudience.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solutions link */}
                <div style={{ marginTop: '28px' }}>
                  <Link
                    to={activeAudience.solutionHref}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: 'var(--ss-purple)', textDecoration: 'none' }}
                    className="hover:opacity-75 transition-opacity"
                  >
                    View {activeAudience.solutionLabel} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right column — fills full card height, corners via parent overflow:hidden */}
              <div
                className="hidden lg:block"
                style={{ minHeight: '480px' }}
              >
                <img
                  key={activeAudience.image}
                  src={activeAudience.image}
                  alt={activeAudience.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 6: Final CTA ─────────────────────── */}
      <section
        id="cta"
        className="relative overflow-hidden"
        style={{ background: '#22193B', padding: 'clamp(120px, 14vw, 200px) 0' }}
      >
        <img
          src="/assets/logos/logo-simple.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: '480px',
            height: '480px',
            objectFit: 'contain',
            opacity: 0.06,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        <div className="mx-auto w-full px-6 relative" style={{ maxWidth: '1200px' }}>
          <motion.div
            className="mx-auto text-center"
            style={{ maxWidth: '720px' }}
            variants={prefersReduced ? {} : stagger}
            initial={prefersReduced ? false : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={inView}
          >
            <motion.h2
              variants={prefersReduced ? {} : fadeUp}
              className="font-display font-black"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1, color: 'white', marginBottom: '24px' }}
            >
              Lead generation should be a system.{' '}
              <em className="italic-accent-dark">Not a hope.</em>
            </motion.h2>

            <motion.p
              variants={prefersReduced ? {} : fadeUp}
              className="font-sans"
              style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.80)', marginBottom: '40px' }}
            >
              Most teams are running tactics. Few are running infrastructure.
              The difference shows up in your pipeline, your sales team's hours,
              and your cost per lead. We'd love to show you.
            </motion.p>

            <motion.div
              variants={prefersReduced ? {} : fadeUp}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '24px' }}
            >
              <MotionLink
                to="/pricing"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#D5F77C', color: '#22193B',
                  fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '16px',
                  padding: '0 28px', height: '56px', borderRadius: '100px', textDecoration: 'none',
                }}
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
              >
                Book a Demo <ArrowRight size={16} />
              </MotionLink>
              <MotionLink
                to="/pricing"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  border: '1px solid rgba(255,255,255,0.30)', color: 'white',
                  fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '16px',
                  padding: '0 28px', height: '56px', borderRadius: '100px', textDecoration: 'none',
                }}
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
              >
                Get Custom Pricing
              </MotionLink>
            </motion.div>

            <motion.p
              variants={prefersReduced ? {} : fadeUp}
              className="font-sans"
              style={{ fontSize: '14px', fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}
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
