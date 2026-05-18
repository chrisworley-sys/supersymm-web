import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const MotionLink = motion.create(Link)

const valueChecklist = [
  'Complete marketing system (not disconnected tools)',
  'Business intelligence that powers every campaign',
  'Lead generation from first touch to close',
  'Multi-channel execution (social, email, ads, blog)',
  'Real-time optimization and ROI attribution',
  'Built-in compliance for regulated industries',
  '15 minutes/week time investment (vs. 40+ hours)',
] as const

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function FinalCTAV2() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="hero-animated-bg ss-section">
      <div className="ss-container">
        <motion.div
          className="mx-auto max-w-3xl"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={prefersReduced ? {} : itemVariants}
            className="font-display font-black text-3xl text-white md:text-5xl mb-6 leading-tight text-center"
          >
            Ready to Replace Fragmentation with an{' '}
            <em className="font-serif font-light not-italic text-ss-accent-100">
              Intelligent System?
            </em>
          </motion.h2>

          <motion.p
            variants={prefersReduced ? {} : itemVariants}
            className="font-sans text-body-md text-white/70 mb-4 text-center"
          >
            See how SuperSymm can turn your marketing into a connected system that generates
            consistent leads, proves ROI, and runs itself—so you can focus on what you do best:
            serving clients and closing deals.
          </motion.p>

          <motion.div
            variants={prefersReduced ? {} : itemVariants}
            className="rounded-2xl border border-white/15 bg-white/8 p-6 mb-8 backdrop-blur-sm"
          >
            <p className="font-display font-black text-white text-sm mb-4">What You Get:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {valueChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-ss-accent-100 mt-0.5" />
                  <span className="font-sans text-body-sm text-white/75">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={prefersReduced ? {} : itemVariants}
            className="text-center space-y-2 mb-8"
          >
            <p className="font-sans text-body-sm text-white/55">
              Typical investment: Setup $6,000–$10,000 (one-time) · Platform ~$2,500/month
            </p>
            <p className="font-sans text-body-xs text-white/35">
              Most clients see measurable results within 60–90 days.
            </p>
          </motion.div>

          <motion.div
            variants={prefersReduced ? {} : itemVariants}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center mb-6"
          >
            <MotionLink
              to="/pricing"
              className="ss-btn-accent"
              whileHover={prefersReduced ? {} : { scale: 1.03 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
            >
              Get Custom Pricing <ArrowRight className="size-4" />
            </MotionLink>
            <MotionLink
              to="/platform"
              className="ss-btn-ghost-dark"
              whileHover={prefersReduced ? {} : { scale: 1.03 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
            >
              See the System in Action
            </MotionLink>
          </motion.div>

          <motion.div
            variants={prefersReduced ? {} : itemVariants}
            className="text-center space-y-1"
          >
            <p className="font-sans text-body-xs text-white/30">
              No long-term contracts. Month-to-month after setup. Cancel anytime.
            </p>
            <p className="font-sans text-body-xs text-white/30">
              Money-back guarantee: If we don't generate leads within 90 days, we'll refund your setup fee.
            </p>
          </motion.div>

          <motion.p
            variants={prefersReduced ? {} : itemVariants}
            className="mt-10 text-center font-display font-black text-white/20 text-sm tracking-wide"
          >
            Most platforms give you tools to manage. SuperSymm gives you a system that drives growth.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
