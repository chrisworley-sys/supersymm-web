import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const principles = [
  {
    number: '01',
    title: 'One Intelligence Engine Powers Everything',
    body: 'SuperSymm starts with deep understanding of your business—your buyers, your market position, your competitive differentiators, your compliance requirements. This isn\'t a profile. It\'s active intelligence that runs through every piece of content, every campaign, every channel, every day.',
    bullets: [
      'Content reflects your actual positioning, not generic templates',
      'Leads scored against your specific ICP, not arbitrary points',
      'Campaigns informed by your market context, not industry best practices',
    ],
  },
  {
    number: '02',
    title: 'Every Component Informs the Others',
    body: 'Most marketing runs in silos. Even when tools integrate, they don\'t learn from each other. In SuperSymm, every component is designed to make the others smarter.',
    bullets: [
      'SEO keywords → paid media targets them immediately',
      'Converting audiences → content strategy shifts to speak to them',
      'Email engagement → lead scoring adjusts in real-time',
      'Revenue attribution → budget flows to winning strategies automatically',
    ],
  },
  {
    number: '03',
    title: 'Complexity Becomes Simple',
    body: 'Marketing feels overwhelming because there are a thousand decisions to make every week. SuperSymm simplifies by making those decisions based on intelligence, not guesswork.',
    bullets: [
      'Lead comes in → scored, segmented, and routed automatically',
      'Campaign launches → optimal timing and targeting set by intelligence',
      'Lead goes cold → re-engagement triggers based on prior behavior',
      'Hot lead emerges → instant sales alert with complete context',
    ],
  },
]

const MotionLink = motion.create(Link)

export default function SuperSymmSolution() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.15 },
  }

  return (
    <section className="bg-ss-purple-700 ss-section">
      <div className="ss-container">

        {/* Heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center mb-16"
          variants={fadeUp}
          {...inView}
        >
          <h2 className="font-display font-black text-3xl text-white md:text-5xl mb-6 leading-tight">
            An Intelligent System That Unifies Strategy,{' '}
            <em className="font-serif font-light not-italic text-gradient">
              Execution, and Growth
            </em>
          </h2>
          <p className="font-sans text-body-md text-white/70">
            SuperSymm isn't another marketing platform. It's the first intelligent system that
            connects business strategy, campaign execution, and performance optimization into one
            unified engine—so marketing becomes simple, consistent, and directly tied to revenue.
          </p>
        </motion.div>

        {/* Hub-and-spoke diagram */}
        <motion.div
          className="mx-auto max-w-lg mb-20 space-y-4"
          variants={fadeUp}
          {...inView}
        >
          <div className="text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/8 px-5 py-2 font-sans text-sm text-white/60">
              Your Business Context · Buyers · Market Position
            </span>
          </div>
          <p className="text-center text-white/30 text-xl leading-none">↕</p>
          <div className="text-center">
            <div className="inline-block rounded-2xl bg-ss-accent-100 px-10 py-4 shadow-xl text-center">
              <p className="font-display font-black text-lg text-ss-purple-700">Intelligence Engine</p>
              <p className="font-sans text-sm text-ss-purple-700/60 mt-0.5">Single source of truth · Powers everything</p>
            </div>
          </div>
          <p className="text-center text-white/30 text-xl leading-none">↓</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Strategy', sub: 'Informed campaigns' },
              { label: 'Execution', sub: 'Multi-channel, consistent' },
              { label: 'Tracking', sub: 'Complete attribution' },
              { label: 'Optimization', sub: 'Self-improving' },
            ].map(({ label, sub }) => (
              <div key={label} className="rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-center">
                <p className="font-display font-black text-white text-sm">{label}</p>
                <p className="font-sans text-xs text-white/45 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
          <p className="text-center font-sans text-xs text-white/30">
            ↑ Performance feeds back · System improves continuously ↑
          </p>
        </motion.div>

        {/* Three principles */}
        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {principles.map(({ number, title, body, bullets }) => (
            <motion.div
              key={number}
              variants={prefersReduced ? {} : fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4"
            >
              <p className="font-display font-black text-4xl text-white/15">{number}</p>
              <h3 className="font-display font-black text-lg text-white leading-snug">{title}</h3>
              <p className="font-sans text-body-sm text-white/60">{body}</p>
              <ul className="space-y-2 mt-auto">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 font-sans text-body-sm text-white/55">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ss-accent-100/60" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing + CTAs */}
        <motion.div
          className="mt-14 text-center space-y-3"
          variants={fadeUp}
          {...inView}
        >
          <p className="font-sans text-body-sm text-white/50 max-w-2xl mx-auto">
            This is what a real marketing system looks like: unified intelligence that powers
            strategy, simplifies execution, and drives measurable growth. Most platforms give
            you tools to manage. SuperSymm gives you a system that runs itself.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center pt-4">
            <MotionLink
              to="/platform"
              className="ss-btn-accent"
              whileHover={prefersReduced ? {} : { scale: 1.03 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
            >
              See How the System Works <ArrowRight className="size-4" />
            </MotionLink>
            <MotionLink
              to="/pricing"
              className="ss-btn-ghost-dark"
              whileHover={prefersReduced ? {} : { scale: 1.03 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
            >
              Get Custom Pricing
            </MotionLink>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
