import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { LayoutGrid } from 'lucide-react'
import type React from 'react'
import PageWrapper from '@/components/common/PageWrapper'
import Breadcrumb from '@/components/common/Breadcrumb'
import OutcomeCards from '@/components/sections/platform-overview/OutcomeCards'
import PlatformSection from '@/components/sections/v2/PlatformSection'

// Matches gradient text used across all platform pages
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
  visible: { transition: { staggerChildren: 0.12 } },
}


export default function PlatformPage() {
  const prefersReduced = useReducedMotion() ?? false

  // Shared animation props helpers
  const inView = (amount = 0.2) =>
    !prefersReduced
      ? ({
          variants: fadeUp,
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, amount } as const,
        })
      : {}

  const inViewStagger = (amount = 0.2) =>
    !prefersReduced
      ? ({
          variants: stagger,
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, amount } as const,
        })
      : {}

  return (
    <PageWrapper>
      <title>The Marketing Platform Built for How Marketing Works Now | SuperSymm</title>
      <meta name="description" content="SuperSymm is the agentic marketing platform with connected layers — intelligence, audience, execution, and learning that meet your customer in every moment." />
      <meta property="og:title" content="The platform built for how marketing works now — SuperSymm" />
      <meta property="og:description" content="An agentic marketing platform with connected layers that meet your customer in every moment that matters." />
      <meta property="og:image" content="/og-platform-overview-1200x630.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://supersymm.com/platform" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SuperSymm Marketing Platform',
        applicationCategory: 'BusinessApplication',
        description: 'An agentic marketing platform with connected layers — intelligence, audience, execution, and learning that meet your customer in every moment.',
      })}</script>

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — HERO
          Matches BI page structure: breadcrumb upper-left,
          eyebrow with nav icon, gradient emphasis on H1
      ═══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="bg-white relative overflow-hidden"
        style={{
          paddingTop: 'calc(5rem + 12px)',
          paddingBottom: 'clamp(80px, 8vw, 120px)',
        }}
      >
        {/* Purple dot grid — same weight as BI page */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(103, 80, 164, 0.42) 1.4px, transparent 1.4px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Purple-wash gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(to top, rgba(210,195,252,0.88) 0%, rgba(222,208,255,0.68) 18%, rgba(233,220,255,0.42) 40%, rgba(242,232,255,0.22) 60%, rgba(248,241,255,0.10) 80%, transparent 100%)',
          }}
        />

        <div className="mx-auto w-full max-w-[1200px] px-6 relative">
          {/* Breadcrumb — upper left, matches BI page */}
          <Breadcrumb
            variant="light"
            items={[{ label: 'Platform', href: '/platform' }]}
          />

          {/* Centered copy block */}
          <motion.div
            variants={!prefersReduced ? stagger : {}}
            initial={!prefersReduced ? 'hidden' : false}
            animate={!prefersReduced ? 'visible' : undefined}
            className="text-center mx-auto"
            style={{ maxWidth: '880px', paddingTop: 'clamp(36px, 4vw, 60px)' }}
          >
            {/* Eyebrow with LayoutGrid nav icon */}
            <motion.div
              variants={!prefersReduced ? fadeUp : {}}
              className="inline-flex items-center justify-center gap-2 mb-4"
            >
              <span
                className="inline-flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ width: '26px', height: '26px', background: 'rgba(103,80,164,0.10)' }}
              >
                <LayoutGrid className="h-3.5 w-3.5" style={{ color: 'var(--ss-purple)' }} />
              </span>
              <span
                className="font-sans font-medium uppercase text-ss-neutral-400"
                style={{ fontSize: '13px', letterSpacing: '0.08em' }}
              >
                The Platform
              </span>
            </motion.div>

            {/* H1 — gradient italic on emphasis phrase */}
            <motion.h1
              variants={!prefersReduced ? fadeUp : {}}
              className="font-display font-black text-ss-neutral-700 mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', lineHeight: 1.05, textWrap: 'pretty' }}
            >
              The platform built for{' '}
              <em className="font-serif italic not-italic" style={gradientText}>
                how marketing works now.
              </em>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={!prefersReduced ? fadeUp : {}}
              className="font-sans text-ss-neutral-500 mx-auto mb-10"
              style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '640px' }}
            >
              Customers don't move through funnels anymore — they move through moments.
              SuperSymm is the agentic marketing platform with connected layers that meet
              your customer wherever they are, with whatever they need next.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={!prefersReduced ? fadeUp : {}}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              <motion.div
                whileHover={!prefersReduced ? { scale: 1.03 } : undefined}
                whileTap={!prefersReduced ? { scale: 0.97 } : undefined}
              >
                <Link to="/pricing" className="ss-btn-accent">
                  Get Custom Pricing →
                </Link>
              </motion.div>
              <a
                href="#platform"
                className="font-sans font-medium transition-colors flex items-center justify-center gap-2 text-ss-neutral-400 hover:text-ss-neutral-600"
                style={{ fontSize: '15px' }}
              >
                See How It Works <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — THE CHALLENGE
          GIF full-bleed background, gradient headline, larger text
      ═══════════════════════════════════════════════════════ */}
      <section
        id="thesis"
        className="relative overflow-hidden"
        style={{
          paddingTop: 'clamp(96px, 10vw, 140px)',
          paddingBottom: 'clamp(96px, 10vw, 140px)',
        }}
      >
        {/* Full-bleed looping GIF */}
        <img
          src="/assets/illustrations/thesis.gif"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full"
          style={{ objectFit: 'cover', zIndex: 0 }}
        />
        {/* Dark overlay for readability */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'rgba(20, 10, 35, 0.74)', zIndex: 1 }}
        />

        <div className="mx-auto w-full px-6 relative" style={{ maxWidth: '1200px', zIndex: 2 }}>
          <motion.div
            className="mx-auto text-center"
            style={{ maxWidth: '860px' }}
            {...inViewStagger(0.25)}
          >
            {/* Eyebrow — accent yellow on dark */}
            <motion.p
              variants={!prefersReduced ? fadeUp : {}}
              className="font-sans font-medium uppercase mb-6"
              style={{ fontSize: '13px', letterSpacing: '0.08em', color: '#D5F77C' }}
            >
              The Challenge
            </motion.p>

            {/* H2 — larger, gradient on emphasis */}
            <motion.h2
              variants={!prefersReduced ? fadeUp : {}}
              className="font-display font-black text-white"
              style={{
                fontSize: 'clamp(36px, 5vw, 60px)',
                lineHeight: 1.15,
                textWrap: 'pretty',
              }}
            >
              Customer expectations are shifting.{' '}
              <em className="font-serif italic not-italic" style={gradientText}>
                It's about building an intelligent platform
              </em>
              {' '}that responds and drives outcomes.
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — OUR GOAL
          Background: #F1F0F1
          Two-column: copy left 60%, goal.png right 40%
      ═══════════════════════════════════════════════════════ */}
      <section
        id="origin"
        style={{
          background: '#F1F0F1',
          paddingTop: 'clamp(96px, 10vw, 140px)',
          paddingBottom: 'clamp(96px, 10vw, 140px)',
        }}
      >
        <div className="mx-auto w-full px-6" style={{ maxWidth: '1200px' }}>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

            {/* Left column — 60% */}
            <motion.div
              className="w-full lg:w-3/5"
              {...inViewStagger(0.2)}
            >
              <motion.p
                variants={!prefersReduced ? fadeUp : {}}
                className="font-sans font-medium uppercase text-ss-purple-500 mb-5"
                style={{ fontSize: '13px', letterSpacing: '0.08em' }}
              >
                Context Matters
              </motion.p>

              <motion.h2
                variants={!prefersReduced ? fadeUp : {}}
                className="font-display font-bold text-ss-neutral-700 mb-6"
                style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', lineHeight: 1.2, textWrap: 'pretty' }}
              >
                Context{' '}
                <em className="font-serif italic not-italic" style={gradientText}>drives the platform.</em>
              </motion.h2>

              <motion.p
                variants={!prefersReduced ? fadeUp : {}}
                className="font-sans text-ss-neutral-600 mb-8"
                style={{ fontSize: '18px', lineHeight: 1.6 }}
              >
                Context is the core of everything SuperSymm does. Every decision the platform
                makes — what content to create, which leads to prioritize, when to engage —
                is grounded in a deep understanding of your business, your audience, and the
                signals they send. That context is what turns automation into intelligence.
              </motion.p>

              {/* CTA row — replaces "Here's how it's built." */}
              <motion.div
                variants={!prefersReduced ? fadeUp : {}}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <motion.div
                  whileHover={!prefersReduced ? { scale: 1.03 } : undefined}
                  whileTap={!prefersReduced ? { scale: 0.97 } : undefined}
                >
                  <Link to="/demo" className="ss-btn-primary">
                    Book a Demo →
                  </Link>
                </motion.div>
                <Link
                  to="/platform/business-intelligence"
                  className="font-sans font-medium transition-colors self-center"
                  style={{ fontSize: '15px', color: 'var(--ss-purple)' }}
                >
                  See the Brain behind it →
                </Link>
              </motion.div>
            </motion.div>

            {/* Right column — 40% */}
            <motion.div
              className="w-full lg:w-2/5"
              {...inView(0.2)}
            >
              <img
                src="/assets/illustrations/goal.png"
                alt="SuperSymm connected marketing platform"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      <PlatformSection />

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — WHAT IT ENABLES
          Background: light gray to separate from white sections
      ═══════════════════════════════════════════════════════ */}
      <section
        id="enables"
        style={{
          background: '#F1F0F1',
          paddingTop: 'clamp(96px, 10vw, 140px)',
          paddingBottom: 'clamp(96px, 10vw, 140px)',
        }}
      >
        <div className="mx-auto w-full px-6" style={{ maxWidth: '1200px' }}>
          <motion.div
            className="mx-auto text-center mb-14"
            style={{ maxWidth: '720px' }}
            {...inViewStagger(0.2)}
          >
            <motion.p
              variants={!prefersReduced ? fadeUp : {}}
              className="font-sans font-medium uppercase text-ss-neutral-400 mb-5"
              style={{ fontSize: '13px', letterSpacing: '0.08em' }}
            >
              What This Enables
            </motion.p>

            <motion.h2
              variants={!prefersReduced ? fadeUp : {}}
              className="font-display font-black text-ss-neutral-700 mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1, textWrap: 'pretty' }}
            >
              Real outcomes from{' '}
              <em className="font-serif italic not-italic" style={gradientText}>
                a connected platform.
              </em>
            </motion.h2>

            <motion.p
              variants={!prefersReduced ? fadeUp : {}}
              className="font-sans text-ss-neutral-500"
              style={{ fontSize: '18px', lineHeight: 1.65 }}
            >
              The platform isn't the deliverable. What changes for your business is.
            </motion.p>
          </motion.div>

          <OutcomeCards />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 — FINAL INVITATION
          Matches BI page: centered logo + animated blobs + shorter
      ═══════════════════════════════════════════════════════ */}
      <section
        id="cta"
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1B0A20 0%, #22193B 50%, #2D1B4E 100%)',
          padding: '100px 0',
        }}
      >
        {/* Animated blobs — background movement */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <motion.div
            className="absolute rounded-full blur-[140px]"
            style={{ width: '500px', height: '500px', left: '-8%', top: '-20%', background: 'rgba(233,119,193,0.25)' }}
            animate={!prefersReduced ? { x: [0, 70, -40, 55, 0], y: [0, 50, -35, 60, 0] } : {}}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full blur-[160px]"
            style={{ width: '460px', height: '460px', right: '-5%', top: '15%', background: 'rgba(103,80,164,0.22)' }}
            animate={!prefersReduced ? { x: [0, -60, 35, -50, 0], y: [0, 55, -45, 25, 0] } : {}}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full blur-[120px]"
            style={{ width: '360px', height: '360px', left: '30%', bottom: '-15%', background: 'rgba(184,116,205,0.15)' }}
            animate={!prefersReduced ? { x: [0, 45, -35, 30, 0], y: [0, -45, 28, -30, 0] } : {}}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Centered logo watermark — matches BI page */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <img
            src="/assets/logos/logo-simple.png"
            alt=""
            style={{ width: '480px', height: 'auto', opacity: 0.06 }}
          />
        </div>

        <div className="mx-auto w-full px-6 relative" style={{ maxWidth: '1200px', zIndex: 10 }}>
          <motion.div
            className="mx-auto text-center"
            style={{ maxWidth: '720px' }}
            {...inViewStagger(0.2)}
          >
            <motion.h2
              variants={!prefersReduced ? fadeUp : {}}
              className="font-display font-black text-white mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, textWrap: 'pretty' }}
            >
              Marketing was supposed{' '}
              <em
                className="font-serif italic not-italic"
                style={{ color: 'var(--ss-yellow)' }}
              >
                to be simple.
              </em>
            </motion.h2>

            <motion.p
              variants={!prefersReduced ? fadeUp : {}}
              className="font-sans mb-8"
              style={{ fontSize: '18px', lineHeight: 1.65, color: 'rgba(255,255,255,0.88)' }}
            >
              The right platform runs alongside your team, learns from every interaction,
              and shows up when your customer is ready. We'd love to show you.
            </motion.p>

            <motion.div
              variants={!prefersReduced ? fadeUp : {}}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center mb-6"
            >
              <motion.div
                whileHover={!prefersReduced ? { scale: 1.03 } : undefined}
                whileTap={!prefersReduced ? { scale: 0.97 } : undefined}
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
              variants={!prefersReduced ? fadeUp : {}}
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
