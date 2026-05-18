import { motion, useReducedMotion } from 'framer-motion'
import { fadeUpVariant, containerVariant } from '@/hooks/useScrollAnimation'

const steps = [
  {
    label: 'Cold Lead',
    detail: 'Sees your content (created & posted by SuperSymm)',
  },
  {
    label: 'Clicks to Website',
    detail: 'SuperSymm captures contact info',
  },
  {
    label: 'Intelligence Engine',
    detail: 'Scores engagement · Segments by behavior · Personalizes next touch',
    highlight: true,
  },
  {
    label: 'Automated Re-Engagement',
    detail: 'Email sequences · Retargeting ads · Social nurture',
  },
  {
    label: 'Hot Lead',
    detail: 'Your sales team closes the deal',
    accent: true,
  },
]

export default function HowItWorks() {
  const prefersReduced = useReducedMotion()

  const animateSection = prefersReduced
    ? {}
    : { variants: fadeUpVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateContainer = prefersReduced
    ? {}
    : { variants: containerVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateItem = prefersReduced ? {} : { variants: fadeUpVariant }

  return (
    <section className="ss-dark ss-section">
      <div className="ss-container">

        {/* Heading */}
        <motion.div className="mx-auto max-w-2xl text-center mb-16" {...animateSection}>
          <h2 className="font-display font-black text-h4 text-white md:text-h3 lg:text-h2 mb-4">
            Every Lead Journey Runs Through{' '}
            <em className="font-serif italic font-light text-ss-pink-700">One Intelligent System</em>
          </h2>
          <p className="font-sans text-body-lg text-white/70">
            SuperSymm doesn't just automate individual tasks—it orchestrates your entire marketing operation
            from first touch to closed deal. All touchpoints connect back to one intelligence engine.
            No manual handoffs. No data gaps.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="mx-auto max-w-lg">
          <motion.ol className="relative" {...animateContainer}>
            {steps.map(({ label, detail, highlight, accent }, i) => (
              <motion.li key={label} {...animateItem} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-px bg-white/15" />
                )}

                {/* Step number circle */}
                <div
                  className={[
                    'relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full font-display font-black text-sm',
                    accent
                      ? 'bg-ss-accent-100 text-ss-purple-700'
                      : highlight
                      ? 'bg-ss-purple-500 text-white'
                      : 'border border-white/20 bg-white/10 text-white/60',
                  ].join(' ')}
                >
                  {i + 1}
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <p
                    className={[
                      'font-display font-black text-body-lg mb-1',
                      accent ? 'text-ss-accent-100' : 'text-white',
                    ].join(' ')}
                  >
                    {label}
                  </p>
                  <p className="font-sans text-body-sm text-white/55">{detail}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* Supporting copy */}
        <motion.p
          className="mx-auto mt-16 max-w-2xl text-center font-sans text-body-md text-white/60"
          {...animateSection}
        >
          This happens 24/7, whether you're working, sleeping, or on vacation. SuperSymm tracks every email open,
          ad click, page visit, and form submission. Scores leads in real-time. Triggers the right follow-up at
          the right time. Like having a marketing team that never sleeps and never forgets.
        </motion.p>

      </div>
    </section>
  )
}
