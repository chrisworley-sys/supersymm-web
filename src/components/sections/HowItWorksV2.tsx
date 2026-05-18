import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const flowSteps = [
  {
    stage: 'Intelligence Engine',
    detail: 'Your business context, market position, and buyer profiles power everything that follows',
    accent: true,
    topLevel: true,
  },
  {
    stage: 'Awareness',
    detail: 'Prospect discovers your content—created and distributed by SuperSymm across LinkedIn, blog, paid ads. All informed by market intelligence. Consistent brand voice across every channel.',
    accent: false,
    topLevel: false,
  },
  {
    stage: 'Engagement',
    detail: 'Prospect clicks, visits your website, downloads content. SuperSymm captures contact info, begins behavioral tracking, and assigns an initial lead score based on actions.',
    accent: false,
    topLevel: false,
  },
  {
    stage: 'Intelligence at Work',
    detail: 'System scores in real-time: pricing page visit (+20), guide download (+10), email click (+10). Evaluates fit against your ICP automatically. No manual work.',
    accent: true,
    topLevel: false,
  },
  {
    stage: 'Automated Nurture',
    detail: 'Hot lead (50+ pts) → instant sales alert. Warm lead → targeted email sequence. Cold lead → awareness content track. The right follow-up, triggered automatically.',
    accent: false,
    topLevel: false,
  },
  {
    stage: 'Sales Handoff',
    detail: 'Real-time alert to your sales team with full context: journey, interests, engagement level, CRM updated automatically. You reach out while they\'re still researching.',
    accent: false,
    topLevel: false,
  },
  {
    stage: 'Continuous Optimization',
    detail: 'Performance feeds back to the Intelligence Engine. Which content converts, which audiences engage, which campaigns drive revenue. System improves future strategies automatically.',
    accent: true,
    topLevel: false,
  },
] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function HowItWorksV2() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.1 },
  }

  return (
    <section className="bg-ss-purple-700 ss-section">
      <div className="ss-container">

        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          variants={fadeUp}
          {...inView}
        >
          <h2 className="font-display font-black text-3xl text-white md:text-5xl mb-4 leading-tight">
            Every Lead Journey Runs Through{' '}
            <em className="font-serif font-light not-italic text-ss-accent-100">
              One Intelligent System
            </em>
          </h2>
          <p className="font-sans text-body-md text-white/65">
            SuperSymm doesn't just automate individual tasks—it orchestrates your entire marketing
            operation from first touch to closed deal. No manual handoffs. No data gaps. No leads lost.
          </p>
        </motion.div>

        <div className="mx-auto max-w-xl">
          <motion.div
            variants={prefersReduced ? {} : containerVariants}
            initial={prefersReduced ? false : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.05 }}
          >
            {flowSteps.map(({ stage, detail, accent }, i) => (
              <motion.div
                key={stage}
                variants={prefersReduced ? {} : fadeUp}
                className="relative flex gap-5 pb-9 last:pb-0"
              >
                {/* Connector line */}
                {i < flowSteps.length - 1 && (
                  <div className="absolute left-4 top-9 bottom-0 w-px bg-white/12" />
                )}

                {/* Node */}
                <div
                  className={`relative z-10 shrink-0 size-8 rounded-full flex items-center justify-center text-xs font-display font-black ${
                    accent
                      ? 'bg-ss-accent-100 text-ss-purple-700'
                      : 'bg-white/15 text-white'
                  }`}
                >
                  {i + 1}
                </div>

                <div className="pt-0.5">
                  <p
                    className={`font-display font-black text-lg mb-1 ${
                      accent ? 'text-ss-accent-100' : 'text-white'
                    }`}
                  >
                    {stage}
                  </p>
                  <p className="font-sans text-body-sm text-white/55">{detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sarah's journey callout */}
          <motion.div
            variants={fadeUp}
            initial={prefersReduced ? false : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-ss-accent-100/20 bg-ss-accent-100/8 p-6 space-y-3"
          >
            <p className="font-display font-black text-ss-accent-100 text-sm">Example: Sarah's Journey</p>
            <div className="space-y-1.5 font-sans text-body-sm text-white/60">
              <p><span className="text-white/80">Day 1:</span> Sees your LinkedIn post. SuperSymm tracks source, captures visitor. +10 pts.</p>
              <p><span className="text-white/80">Day 3:</span> Opens email, clicks to blog. +15 pts → moves to warm segment.</p>
              <p><span className="text-white/80">Day 7:</span> Visits pricing page, downloads case study. +30 pts → now 55 = HOT. Instant sales alert.</p>
              <p><span className="text-white/80">Day 8:</span> Sales reaches out with full context while she's still researching.</p>
            </div>
            <p className="font-sans text-body-xs text-white/40 border-t border-white/10 pt-3">
              Without SuperSymm: Sarah forgotten between Day 1 and Day 7. With SuperSymm: nothing falls through.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial={prefersReduced ? false : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={{ once: true }}
            className="mt-10 text-center space-y-3"
          >
            <p className="font-sans text-body-sm text-white/45">
              This happens 24/7, whether you're working, sleeping, or on vacation. Like having a
              marketing team that never sleeps, never forgets, and gets smarter every day.
            </p>
            <Link to="/platform" className="ss-btn-accent inline-flex">
              See the System in Action <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
