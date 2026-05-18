import { motion, useReducedMotion } from 'framer-motion'
import { Wrench, Building2, TrendingDown } from 'lucide-react'
import { fadeUpVariant, containerVariant } from '@/hooks/useScrollAnimation'

const problems = [
  {
    Icon: Wrench,
    headline: 'DIY with Multiple Tools',
    bullets: [
      '40+ hours/month juggling 6–8 disconnected platforms',
      'Amateur-looking results that don\'t generate leads',
      'Every hour on marketing is an hour not serving clients',
      '$600+/month in subscriptions still requires all your time',
    ],
  },
  {
    Icon: Building2,
    headline: 'Expensive Marketing Agency',
    bullets: [
      '$3,000–$5,000/month ($36K–$60K/year)',
      '2-week turnarounds for simple changes',
      'Black-box process with unclear ROI',
      'Long contracts, high switching costs',
    ],
  },
  {
    Icon: TrendingDown,
    headline: 'Hope for Referrals',
    bullets: [
      'Growth limited by existing network',
      'Competitors who ARE marketing win your prospects',
      'Revenue spikes and valleys (feast or famine)',
      'Invisible to new opportunities',
    ],
  },
]

export default function ProblemSection() {
  const prefersReduced = useReducedMotion()

  const animateSection = prefersReduced
    ? {}
    : { variants: fadeUpVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateContainer = prefersReduced
    ? {}
    : { variants: containerVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateItem = prefersReduced
    ? {}
    : { variants: fadeUpVariant }

  return (
    <section className="ss-light ss-section">
      <div className="ss-container">

        {/* Heading */}
        <motion.div className="mx-auto max-w-2xl text-center mb-14" {...animateSection}>
          <h2 className="font-display font-black text-h4 text-ss-neutral-700 md:text-h3 lg:text-h2 mb-4">
            Your Marketing Shouldn't Require a{' '}
            <em className="font-serif italic font-light text-ss-purple-500">Marketing Degree</em>
          </h2>
          <p className="font-sans text-body-lg text-ss-neutral-500">
            Right now, running professional marketing means choosing between three bad options:
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          {...animateContainer}
        >
          {problems.map(({ Icon, headline, bullets }) => (
            <motion.div
              key={headline}
              {...animateItem}
              className="ss-card-light p-8 flex flex-col gap-5"
            >
              <div className="size-11 rounded-xl bg-ss-purple-100 flex items-center justify-center shrink-0">
                <Icon className="size-5 text-ss-purple-500" />
              </div>
              <h3 className="font-display font-black text-h5 text-ss-neutral-700">{headline}</h3>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 font-sans text-body-sm text-ss-neutral-500">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-ss-purple-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition line */}
        <motion.p
          className="mt-14 text-center font-display font-black text-h5 text-ss-purple-500"
          {...animateSection}
        >
          There's a better way.
        </motion.p>

      </div>
    </section>
  )
}
