import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

import PageWrapper from '@/components/common/PageWrapper'
import Hero from '@/components/sections/Hero'
import ProblemSection from '@/components/sections/ProblemSection'
import FourSystems from '@/components/sections/FourSystems'
import IndustriesGrid from '@/components/sections/IndustriesGrid'
import ToolComparison from '@/components/sections/ToolComparison'
import FinalCTA from '@/components/sections/FinalCTA'
import { fadeUpVariant, containerVariant } from '@/hooks/useScrollAnimation'

// ── Stats / Proof (ACCENT section — 1 per page) ──────────────────────────────

const stats = [
  { value: '40', unit: 'Hours', label: 'Saved per month on marketing operations' },
  { value: '$2,200', unit: '', label: 'Average monthly savings vs. marketing agency' },
  { value: '3–7', unit: '', label: 'Qualified leads generated per month (typical)' },
]

const capabilities = [
  'Zero manual posting required',
  'All channels coordinated automatically',
  'Complete lead tracking and attribution',
  'Compliance built-in for regulated industries',
]

function StatsSection() {
  const prefersReduced = useReducedMotion()

  const animateSection = prefersReduced
    ? {}
    : { variants: fadeUpVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateContainer = prefersReduced
    ? {}
    : { variants: containerVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateItem = prefersReduced ? {} : { variants: fadeUpVariant }

  return (
    <section className="ss-accent-section ss-section">
      <div className="ss-container">

        <motion.div className="mx-auto max-w-2xl text-center mb-14" {...animateSection}>
          <h2 className="font-display font-black text-h4 text-ss-purple-700 md:text-h3 lg:text-h2 mb-4">
            Marketing That Actually{' '}
            <em className="font-serif italic font-light">Generates Leads</em>
          </h2>
          <p className="font-sans text-body-lg text-ss-purple-600">
            SuperSymm customers see results within 60–90 days. Here's what professional marketing automation delivers:
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12"
          {...animateContainer}
        >
          {stats.map(({ value, unit, label }) => (
            <motion.div key={label} {...animateItem} className="text-center">
              <p className="font-display font-black text-h1 text-ss-purple-700 leading-none mb-1">
                {value}
                {unit && <span className="text-h3 ml-1">{unit}</span>}
              </p>
              <p className="font-sans text-body-sm text-ss-purple-600 max-w-48 mx-auto">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities list */}
        <motion.ul
          className="mx-auto max-w-xl grid grid-cols-1 gap-2 sm:grid-cols-2"
          {...animateContainer}
        >
          {capabilities.map((cap) => (
            <motion.li
              key={cap}
              {...animateItem}
              className="flex items-center gap-2.5 font-sans text-body-sm text-ss-purple-700"
            >
              <Check className="size-4 shrink-0 text-ss-purple-500" />
              {cap}
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  )
}

// ── Solution Intro (DARK section — Section 3) ────────────────────────────────

function SolutionIntroSection() {
  const prefersReduced = useReducedMotion()

  const animateContainer = prefersReduced
    ? {}
    : { variants: containerVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateItem = prefersReduced ? {} : { variants: fadeUpVariant }

  return (
    <section className="ss-dark ss-section">
      <div className="ss-container">
        <motion.div
          className="mx-auto max-w-3xl text-center flex flex-col items-center gap-6"
          {...animateContainer}
        >
          <motion.h2
            {...animateItem}
            className="font-display font-black text-h4 text-white md:text-h3 lg:text-h2"
          >
            One Platform.{' '}
            <em className="font-serif italic font-light text-ss-pink-700">Your Entire Marketing Operation.</em>{' '}
            Fully Automated.
          </motion.h2>

          <motion.p {...animateItem} className="font-sans text-body-lg text-white/75 max-w-2xl">
            SuperSymm is marketing automation built for businesses that need professional results without
            hiring a full marketing team or managing a dozen tools. We don't just schedule posts—we create
            content, distribute across channels, capture leads, score engagement, and optimize campaigns
            automatically.
          </motion.p>

          <motion.p {...animateItem} className="font-sans text-body-md text-white/55">
            Think of it as your marketing department, automated. You review and approve (15 minutes/week).
            We handle everything else.
          </motion.p>

          <motion.div {...animateItem}>
            <Link to="/platform" className="ss-btn-accent inline-flex items-center gap-2">
              Explore the Platform <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ── Lead Journey Callout (DARK section — simplified HowItWorks) ──────────────

function LeadJourneyCallout() {
  const prefersReduced = useReducedMotion()

  const animateContainer = prefersReduced
    ? {}
    : { variants: containerVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateItem = prefersReduced ? {} : { variants: fadeUpVariant }

  return (
    <section className="ss-dark ss-section">
      <div className="ss-container">
        <motion.div className="mx-auto max-w-2xl text-center" {...animateContainer}>
          <motion.p
            {...animateItem}
            className="font-sans font-medium uppercase mb-4"
            style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'rgba(213,247,124,0.80)' }}
          >
            How It Works
          </motion.p>
          <motion.h2
            {...animateItem}
            className="font-display font-black text-h4 text-white md:text-h3 lg:text-h2 mb-4"
          >
            Every Lead Journey Runs Through{' '}
            <em className="font-serif italic font-light text-ss-pink-700">One Intelligent System</em>
          </motion.h2>
          <motion.p {...animateItem} className="font-sans text-body-lg text-white/70 mb-8">
            SuperSymm doesn't just automate individual tasks—it orchestrates your entire marketing
            operation from first touch to closed deal. All touchpoints connect back to one
            intelligence engine. No manual handoffs. No data gaps.
          </motion.p>
          <motion.div {...animateItem}>
            <Link to="/platform/lead-generation" className="ss-btn-accent inline-flex items-center gap-2">
              See Lead Generation <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <PageWrapper>
      {/* 1 DARK  — Hero */}
      <Hero />
      {/* 2 LIGHT — Problem */}
      <ProblemSection />
      {/* 3 DARK  — Solution intro */}
      <SolutionIntroSection />
      {/* 4 LIGHT — Four Systems */}
      <FourSystems />
      {/* 5 DARK  — Lead journey callout */}
      <LeadJourneyCallout />
      {/* 6 LIGHT — Industries */}
      <IndustriesGrid />
      {/* 7 ACCENT — Stats / Proof */}
      <StatsSection />
      {/* 8 DARK  — Tool comparison */}
      <ToolComparison />
      {/* 9 DEEP  — Final CTA */}
      <FinalCTA />
    </PageWrapper>
  )
}
