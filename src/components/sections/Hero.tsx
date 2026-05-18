import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const prefersReduced = useReducedMotion()

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.14 } },
  }

  const itemVariants: Variants = {
    hidden: prefersReduced ? {} : { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
  }

  const visualVariants: Variants = {
    hidden: prefersReduced ? {} : { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.45, ease: 'easeOut' } },
  }

  return (
    <section className="relative bg-ss-hero min-h-screen flex items-center">
      {/* Subtle radial vignette to soften the gradient edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(34,25,59,0.6) 0%, transparent 100%)' }}
      />

      <div className="ss-container relative py-32" style={{ paddingTop: 'calc(5rem + 80px)' }}>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* ── Left: copy ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="ss-badge-accent mb-6">
              AI Marketing Automation
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-h3 leading-tight text-white md:text-h2 lg:text-h1 mb-6"
            >
              Turn Marketing Into a{' '}
              <em className="font-serif italic font-light">Revenue Engine</em>{' '}
              That Runs Itself
            </motion.h1>

            <motion.p variants={itemVariants} className="font-sans text-body-lg text-white/80 mb-4 max-w-xl">
              End-to-end marketing automation that creates content, distributes across channels, tracks every lead,
              and optimizes for conversions—so you can focus on closing deals, not managing campaigns.
            </motion.p>

            <motion.p variants={itemVariants} className="font-sans text-body-sm text-white/55 mb-10 max-w-lg">
              Professional marketing execution without the agency cost or tool chaos. SuperSymm automates your entire
              marketing operation from content creation to lead scoring. From $2,500/month with custom setup.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row sm:items-center mb-10">
              <Link to="/pricing" className="ss-btn-accent">
                Get Custom Pricing <ArrowRight className="size-4" />
              </Link>
              <Link to="/pricing" className="ss-btn-ghost-dark">
                Book a Demo
              </Link>
            </motion.div>

            <motion.p variants={itemVariants} className="font-sans text-body-xs text-white/35 tracking-wide">
              Trusted by financial advisors, healthcare providers, and professional service firms
            </motion.p>
          </motion.div>

          {/* ── Right: dashboard mockup ── */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            {/* TODO: Replace with final dashboard screenshot/mockup image */}
            <div className="relative rounded-2xl border border-white/10 bg-ss-purple-700/40 p-5 shadow-2xl backdrop-blur-sm">
              {/* Top bar */}
              <div className="mb-4 flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-white/20" />
                <div className="size-2.5 rounded-full bg-white/20" />
                <div className="size-2.5 rounded-full bg-white/20" />
                <div className="ml-3 h-4 w-40 rounded bg-white/10" />
              </div>

              {/* Stat row */}
              <div className="mb-3 grid grid-cols-3 gap-3">
                {[
                  { label: 'Leads This Month', value: '47', color: 'text-ss-accent-100' },
                  { label: 'Content Published', value: '124', color: 'text-white' },
                  { label: 'Hours Saved', value: '40', color: 'text-ss-green-100' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="rounded-xl bg-white/8 p-3">
                    <p className="mb-1 font-sans text-xs text-white/40">{label}</p>
                    <p className={`font-display font-black text-2xl ${color}`}>{value}</p>
                  </div>
                ))}
              </div>

              {/* Bar chart area */}
              <div className="mb-3 rounded-xl bg-white/8 p-4">
                <p className="mb-3 font-sans text-xs text-white/40">Lead Pipeline — Last 7 Days</p>
                <div className="flex items-end gap-1.5 h-20">
                  {[35, 58, 44, 72, 63, 81, 96].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-ss-purple-400/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div className="space-y-2">
                <div className="rounded-lg border border-ss-accent-100/25 bg-ss-accent-100/10 px-3 py-2">
                  <p className="font-sans text-xs font-medium text-ss-accent-100">
                    Hot lead detected → Routing to sales queue
                  </p>
                </div>
                <div className="rounded-lg bg-white/8 px-3 py-2">
                  <p className="font-sans text-xs text-white/40">
                    LinkedIn post scheduled · Email sequence triggered · Retargeting active
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
