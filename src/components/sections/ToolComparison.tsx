import { motion, useReducedMotion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { fadeUpVariant } from '@/hooks/useScrollAnimation'

const beforeTools = [
  { tool: 'ChatGPT Plus', cost: '$20' },
  { tool: 'Canva Pro', cost: '$13' },
  { tool: 'Hootsuite', cost: '$99' },
  { tool: 'Mailchimp', cost: '$50' },
  { tool: 'Google Ads management', cost: '$150' },
  { tool: 'Manual compliance / archiving', cost: 'Your time' },
]

const afterFeatures = [
  'AI content creation for every channel',
  'Design & brand-consistent visuals',
  'Social scheduling across all platforms',
  'Email marketing & sequences',
  'Paid ads management',
  'Lead tracking & attribution',
  'Analytics & ROI reporting',
  'Compliance archiving (SEC/FINRA)',
]

export default function ToolComparison() {
  const prefersReduced = useReducedMotion()

  const animateSection = prefersReduced
    ? {}
    : { variants: fadeUpVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  return (
    <section className="ss-dark ss-section">
      <div className="ss-container">

        {/* Heading */}
        <motion.div className="mx-auto max-w-2xl text-center mb-16" {...animateSection}>
          <h2 className="font-display font-black text-h4 text-white md:text-h3 lg:text-h2 mb-4">
            Stop Managing Six Tools.{' '}
            <em className="font-serif italic font-light text-ss-accent-100">Start Using One Platform.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* BEFORE */}
          <motion.div {...animateSection} className="ss-glass p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="size-4 text-red-400" />
              </div>
              <h3 className="font-display font-black text-h5 text-white">What You're Using Now</h3>
            </div>

            <div className="space-y-1 mb-6">
              {beforeTools.map(({ tool, cost }) => (
                <div
                  key={tool}
                  className="flex items-center justify-between rounded-lg px-4 py-3 bg-white/5"
                >
                  <span className="font-sans text-body-sm text-white/70">{tool}</span>
                  <span className="font-sans text-body-sm font-semibold text-white/50">{cost}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 flex items-center justify-between">
              <span className="font-sans text-body-sm font-semibold text-white">Total</span>
              <span className="font-display font-black text-body-lg text-red-400">
                $332+&nbsp;<span className="font-sans font-normal text-body-sm text-white/40">plus 40 hrs/month</span>
              </span>
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div {...animateSection} className="ss-glass p-8 border-ss-accent-100/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 rounded-full bg-ss-accent-100/20 flex items-center justify-center">
                <Check className="size-4 text-ss-accent-100" />
              </div>
              <h3 className="font-display font-black text-h5 text-white">After SuperSymm</h3>
            </div>

            <div className="space-y-1 mb-6">
              {afterFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-lg px-4 py-3 bg-white/5">
                  <Check className="size-3.5 shrink-0 text-ss-accent-100" />
                  <span className="font-sans text-body-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-ss-accent-100/10 border border-ss-accent-100/25 px-4 py-3 flex items-center justify-between">
              <div>
                <span className="font-sans text-body-sm font-semibold text-white">One Platform</span>
                <p className="font-sans text-body-xs text-white/40 mt-0.5">15 minutes/week to review & approve</p>
              </div>
              <span className="font-display font-black text-body-lg text-ss-accent-100">$2,500<span className="font-sans font-normal text-body-sm text-white/40">/mo</span></span>
            </div>
          </motion.div>

        </div>

        {/* ROI copy */}
        <motion.p
          className="mx-auto mt-12 max-w-2xl text-center font-sans text-body-md text-white/60"
          {...animateSection}
        >
          Yes, SuperSymm costs more than individual tools. But when you factor in the time saved (40 hours/month
          at your billing rate) and the professional results that actually generate leads, it pays for itself.
        </motion.p>

      </div>
    </section>
  )
}
