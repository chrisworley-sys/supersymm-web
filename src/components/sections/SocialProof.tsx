import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Check } from 'lucide-react'

const stats = [
  { value: '40 Hours', label: 'Saved per month on marketing operations' },
  { value: '$2,200', label: 'Average monthly savings vs. a marketing agency' },
  { value: '3–7', label: 'Qualified leads generated per month, typically' },
] as const

const capabilities = [
  'Zero manual posting required',
  'All channels coordinated automatically',
  'Complete lead tracking and attribution',
  'Compliance built-in for regulated industries',
] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function SocialProof() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.2 },
  }

  return (
    <section className="bg-ss-violet-700 ss-section">
      <div className="ss-container">

        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          variants={fadeUp}
          {...inView}
        >
          <h2 className="font-display font-black text-3xl text-white md:text-5xl mb-4">
            Marketing That Actually{' '}
            <em className="font-serif font-light not-italic text-ss-accent-100">
              Generates Leads
            </em>
          </h2>
          <p className="font-sans text-body-md text-white/60">
            SuperSymm customers see results within 60–90 days. Here's what professional
            marketing automation delivers.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-14"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={prefersReduced ? {} : fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-8 text-center"
            >
              <p className="font-display font-black text-4xl text-ss-accent-100 mb-2">{value}</p>
              <p className="font-sans text-body-sm text-white/55">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities */}
        <motion.div
          className="mx-auto max-w-xl"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <motion.li
                key={cap}
                variants={prefersReduced ? {} : fadeUp}
                className="flex items-center gap-3 font-sans text-body-sm text-white/70"
              >
                <span className="shrink-0 size-5 rounded-full bg-ss-accent-100/20 flex items-center justify-center">
                  <Check className="size-3 text-ss-accent-100" />
                </span>
                {cap}
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}
