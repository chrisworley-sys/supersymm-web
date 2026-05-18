import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'

const fragmented = [
  { tool: 'Content creation (ChatGPT)', cost: '$20/mo', step: true },
  { tool: 'Design (Canva)', cost: '$13/mo', step: true },
  { tool: 'Social scheduling (Hootsuite)', cost: '$99/mo', step: true },
  { tool: 'Email (Mailchimp)', cost: '$50/mo', step: true },
  { tool: 'Paid ads management', cost: '$150/mo', step: true },
  { tool: 'Compliance & archiving', cost: 'Your time', step: false },
] as const

const supersymmDelivers = [
  'One Intelligence Engine (understands your business)',
  'Unified strategy (all channels informed by market intelligence)',
  'Connected execution (content → distribution → tracking)',
  'Complete attribution (every lead traced to revenue)',
  'Continuous improvement (system gets smarter monthly)',
] as const

const roiRows = [
  { label: 'Tools / Platform', fragmented: '$200/mo = $2,400/yr', supersymm: '$2,500/mo = $30,000/yr' },
  { label: 'Your time', fragmented: '40 hrs/mo × $200/hr × 12 = $96,000/yr', supersymm: '1 hr/mo × $200/hr × 12 = $2,400/yr' },
  { label: 'Lost leads', fragmented: 'Unmeasurable (no tracking)', supersymm: 'Zero (complete capture)' },
] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function SystemVsFragmentation() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.1 },
  }

  return (
    <section className="bg-ss-neutral-100 ss-section">
      <div className="ss-container">

        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          variants={fadeUp}
          {...inView}
        >
          <h2 className="font-display font-black text-3xl text-ss-neutral-700 md:text-5xl mb-4">
            Why a Connected System Beats{' '}
            <em className="font-serif font-light not-italic text-ss-purple-500">
              Disconnected Tools
            </em>
          </h2>
          <p className="font-sans text-body-md text-ss-neutral-500">
            The question isn't "tools vs. platform." It's "fragmentation vs. intelligence."
          </p>
        </motion.div>

        {/* Before / After */}
        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-10"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left: Fragmented */}
          <motion.div
            variants={prefersReduced ? {} : fadeUp}
            className="rounded-2xl bg-ss-neutral-700 p-8 flex flex-col gap-6"
          >
            <div>
              <p className="ss-badge bg-ss-neutral-600 text-ss-neutral-200 mb-3">The Fragmented Approach</p>
              <p className="font-sans text-body-sm text-ss-neutral-300">
                Six subscriptions. Forty hours a month. Amateur results.
              </p>
            </div>

            <ul className="space-y-3">
              {fragmented.map(({ tool, cost }, i) => (
                <li key={tool}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <X className="size-4 shrink-0 text-ss-neutral-400" />
                      <span className="font-sans text-body-sm text-ss-neutral-300">{tool}</span>
                    </div>
                    <span className="font-sans text-body-sm text-ss-neutral-400 shrink-0">{cost}</span>
                  </div>
                  {i < fragmented.length - 1 && (
                    <p className="font-sans text-xs text-ss-neutral-500 pl-7 mt-0.5">↓ manual step</p>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-white/10 space-y-1">
              <p className="font-display font-black text-lg text-white">
                $332+/mo <span className="font-sans font-normal text-ss-neutral-400 text-base">+ 40 hrs of your time</span>
              </p>
              <p className="font-sans text-body-xs text-ss-neutral-400">No attribution. Inconsistent voice. No intelligence.</p>
            </div>
          </motion.div>

          {/* Right: SuperSymm */}
          <motion.div
            variants={prefersReduced ? {} : fadeUp}
            className="rounded-2xl bg-ss-accent-100 p-8 flex flex-col gap-6"
          >
            <div>
              <p className="ss-badge bg-ss-purple-500 text-white mb-3">SuperSymm: Connected Intelligence</p>
              <p className="font-sans text-body-sm text-ss-purple-700/70">
                One platform. Everything connected. 15 minutes a week.
              </p>
            </div>

            <ul className="space-y-3">
              {supersymmDelivers.map((item, i) => (
                <li key={item}>
                  <div className="flex items-start gap-2.5">
                    <Check className="size-4 shrink-0 text-ss-purple-600 mt-0.5" />
                    <span className="font-sans text-body-sm text-ss-purple-700">{item}</span>
                  </div>
                  {i < supersymmDelivers.length - 1 && (
                    <p className="font-sans text-xs text-ss-purple-700/40 pl-7 mt-0.5">↓ automatic</p>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-ss-purple-500/20 space-y-1">
              <p className="font-display font-black text-lg text-ss-purple-700">
                From $2,500/mo <span className="font-sans font-normal text-ss-purple-700/60 text-base">all-in</span>
              </p>
              <p className="font-sans text-body-xs text-ss-purple-700/55">Complete attribution. Consistent voice. Business intelligence.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ROI calculation */}
        <motion.div
          variants={fadeUp}
          {...inView}
          className="rounded-2xl border border-ss-neutral-200 bg-white p-8"
        >
          <p className="font-display font-black text-lg text-ss-neutral-700 mb-6">The Real ROI Calculation</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-ss-neutral-200">
                  <th className="font-sans text-body-xs text-ss-neutral-400 font-semibold tracking-wide pb-3 pr-6">Cost Driver</th>
                  <th className="font-sans text-body-xs text-ss-neutral-400 font-semibold tracking-wide pb-3 pr-6">Fragmented Approach</th>
                  <th className="font-sans text-body-xs text-ss-purple-500 font-semibold tracking-wide pb-3">SuperSymm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ss-neutral-100">
                {roiRows.map(({ label, fragmented: frag, supersymm }) => (
                  <tr key={label}>
                    <td className="font-sans text-body-sm text-ss-neutral-600 font-medium py-3 pr-6">{label}</td>
                    <td className="font-sans text-body-sm text-ss-neutral-400 py-3 pr-6">{frag}</td>
                    <td className="font-sans text-body-sm text-ss-purple-600 py-3 font-medium">{supersymm}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-ss-neutral-200">
                  <td className="font-display font-black text-ss-neutral-700 py-3 pr-6">Total Annual Cost</td>
                  <td className="font-display font-black text-ss-neutral-600 py-3 pr-6">$98,400+</td>
                  <td className="font-display font-black text-ss-purple-600 py-3">$32,400</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-sans text-body-sm text-ss-neutral-500 max-w-md">
              Savings: $66,000/year + leads you would have lost + time you can bill.
              The real question: can you afford NOT to have a system?
            </p>
            <Link to="/pricing" className="ss-btn-primary shrink-0 inline-flex">
              Calculate Your ROI <ArrowRight className="size-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
