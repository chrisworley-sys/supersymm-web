import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView, useReducedMotion, type Variants } from 'framer-motion'
import { Users, Building2, AlertTriangle, Clock } from 'lucide-react'

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(93deg, #8978BE, #E977C1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const visuals = [
  <img
    key="1"
    src="/assets/illustrations/problem-01-disconnected.png?v=3"
    alt="Five marketing channels operating independently with no coordination"
    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
  />,
  <img
    key="2"
    src="/assets/illustrations/problem-02-inconsistent.png?v=3"
    alt="Timed emails, social media posts, and SMS messages showing inconsistent outreach"
    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
  />,
  <img
    key="3"
    src="/assets/illustrations/problem-03-intelligence.gif?v=3"
    alt="Venn diagram showing the Intelligence Layer connecting all marketing systems"
    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
  />,
]

const pillars = [
  {
    eyebrow: '01 — Disconnected Execution',
    h3Lines: ['Marketing runs in silos.', 'Transform to a connected platform.'],
    problem: "Your SEO, email, and social all run in separate silos. Insights stay trapped inside each tool — and no one's connecting the dots.",
    solution: "SuperSymm links every channel under one intelligence layer. What works in paid ads sharpens your content. Email sequences adapt from real behavior. Every part makes the others better.",
  },
  {
    eyebrow: '02 — Inconsistent Brand',
    h3Lines: ['From inconsistent branding,', 'to one voice across every channel.'],
    problem: "Brand voice drifts by channel. Prospects see a different story on LinkedIn, your website, and in email. Every touchpoint feels like starting over.",
    solution: "SuperSymm builds your messaging framework once and applies it everywhere — automatically, consistently, on every channel.",
  },
  {
    eyebrow: '03 — No Intelligence Layer',
    h3Lines: ['Tactics and activity.', 'Intelligence driving every decision.'],
    problem: "Content gets created without real market insight. You're executing tactics without knowing whether they're the right ones.",
    solution: "SuperSymm starts with a business intelligence engine — your market, your audience, your position — then builds strategy from there. Every tactic has a purpose. Every dollar goes further.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
}

export default function ProblemSection() {
  const prefersReduced = useReducedMotion()
  const [activePillar, setActivePillar] = useState(0)

  const pillarRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]
  const inView0 = useInView(pillarRefs[0], { amount: 0.5 })
  const inView1 = useInView(pillarRefs[1], { amount: 0.5 })
  const inView2 = useInView(pillarRefs[2], { amount: 0.5 })

  useEffect(() => {
    if (inView2) setActivePillar(2)
    else if (inView1) setActivePillar(1)
    else if (inView0) setActivePillar(0)
  }, [inView0, inView1, inView2])

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.2 } as const,
  }

  return (
    <section
      id="problem"
      style={{
        background: '#F5F3FB',
        backgroundImage: `
          linear-gradient(rgba(103,80,164,0.07) 1px, transparent 1px),
          linear-gradient(to right, rgba(103,80,164,0.07) 1px, transparent 1px)
        `,
        backgroundSize: '44px 44px',
      }}
    >

      {/* Title area */}
      <div className="mx-auto w-full max-w-[1200px] px-6" style={{ paddingTop: 'clamp(80px, 10vw, 160px)', paddingBottom: '60px' }}>
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-neutral-400 mb-4">
            The Problem
          </p>
          <h2 className="font-display font-black leading-[1.0] text-ss-neutral-700 mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Most businesses are running marketing{' '}
            <em className="font-serif italic" style={gradientText}>without a strategy</em>
          </h2>
          <p className="font-sans text-[17px] leading-[1.5] text-ss-neutral-500">
            Not enough effort isn't the problem. Nothing connecting is.
          </p>

          {/* Scroll cue */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-2"
            variants={prefersReduced ? {} : fadeUp}
          >
            <span className="font-sans text-[14px] font-medium tracking-[0.06em] uppercase text-ss-purple-500">
              Here's why
            </span>
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              animate={prefersReduced ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: [0.77, 0, 0.175, 1] }}
            >
              <path
                d="M12 5v14M5 13l7 7 7-7"
                stroke="#6750A4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>

      {/* White card */}
      <div
        className="bg-white"
        style={{
          borderRadius: '24px 24px 0 0',
          boxShadow: '0 -6px 40px rgba(103,80,164,0.12)',
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">

          {/* Sticky scroll layout — text narrower, image wider */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]"
            style={{ gap: '56px', paddingTop: '60px', paddingBottom: '40px' }}
          >
            {/* Left: pillar blocks */}
            <div>
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  ref={pillarRefs[i]}
                  className="flex flex-col justify-center"
                  style={{
                    minHeight: '80vh',
                    paddingTop: i === 0 ? '0' : '40px',
                    paddingBottom: '40px',
                  }}
                >
                  {/* Mobile-only visual */}
                  <div className="lg:hidden mb-8 w-full">
                    {visuals[i]}
                  </div>

                  <p
                    className="font-sans text-[12px] uppercase tracking-[0.08em] font-medium text-ss-purple-500 mb-2"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {pillar.eyebrow}
                  </p>
                  <h3
                    className="font-display font-black leading-[1.0] text-ss-neutral-700 mb-5"
                    style={{ fontSize: 'clamp(28px, 2.8vw, 44px)' }}
                  >
                    {pillar.h3Lines.map((line, li) => (
                      <span key={li} className="block">
                        {li === pillar.h3Lines.length - 1 ? (
                          <em className="font-serif italic" style={gradientText}>{line}</em>
                        ) : (
                          line
                        )}
                      </span>
                    ))}
                  </h3>

                  {/* Problem paragraph */}
                  <p className="font-sans text-[16px] leading-[1.65] text-ss-neutral-500 mb-5">
                    {pillar.problem}
                  </p>

                  {/* SuperSymm solution — highlighted */}
                  <div
                    className="rounded-xl px-5 py-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(103,80,164,0.07) 0%, rgba(233,119,193,0.04) 100%)',
                      borderLeft: '3px solid #8978BE',
                    }}
                  >
                    <p className="font-sans text-[11px] uppercase tracking-[0.10em] font-bold text-ss-purple-500 mb-2">
                      SuperSymm
                    </p>
                    <p className="font-sans text-[15px] leading-[1.65] text-ss-neutral-600">
                      {pillar.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: sticky visual (desktop only) */}
            <div
              className="hidden lg:flex items-center justify-center"
              style={{ position: 'sticky', top: '10vh', height: '80vh', alignSelf: 'flex-start' }}
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={prefersReduced ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={prefersReduced ? {} : { opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  style={{ width: '100%' }}
                >
                  {visuals[activePillar]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Stats strip */}
      <div
        style={{
          background: 'linear-gradient(135deg, #3A2460 0%, #5040A0 50%, #3A2460 100%)',
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 pt-14 pb-16 lg:pt-16 lg:pb-20">
          <motion.p
            className="font-sans text-[13px] uppercase tracking-[0.10em] font-semibold text-center mb-10"
            style={{ color: 'rgba(255,255,255,0.50)' }}
            variants={prefersReduced ? {} : { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            initial={prefersReduced ? false : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.5 }}
          >
            Small and mid-size businesses — the marketing reality
          </motion.p>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            variants={prefersReduced ? {} : {
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            initial={prefersReduced ? false : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.25 }}
          >
            {[
              { Icon: Users,         pct: '58%',    label: 'run marketing manually or inconsistently' },
              { Icon: Building2,     pct: '22%',    label: 'hire agencies at $5k+ per month' },
              { Icon: AlertTriangle, pct: '54%',    label: 'say DIY attempts look unprofessional' },
              { Icon: Clock,         pct: '40 hrs', label: 'per month spent on full DIY marketing' },
            ].map(({ Icon, pct, label }) => (
              <motion.div
                key={pct}
                className="flex flex-col items-start gap-2"
                variants={prefersReduced ? {} : {
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] } },
                }}
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mb-1">
                  <Icon className="size-4" style={{ color: 'rgba(213,247,124,0.80)' }} />
                </div>
                <p className="font-display font-black leading-[0.9] text-white" style={{ fontSize: 'clamp(48px, 5.5vw, 76px)' }}>
                  {pct}
                </p>
                <p className="font-sans text-[14px] leading-[1.45]" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
