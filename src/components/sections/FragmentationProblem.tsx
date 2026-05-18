import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Unlink, MessageSquareX, BrainCog } from 'lucide-react'

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const problems = [
  {
    Icon: Unlink,
    headline: 'Disconnected Execution',
    problem: 'Marketing runs in silos—nothing informs anything else',
    bullets: [
      'SEO finds winning keywords → paid media never sees them',
      'Paid ads surface high-intent audiences → content ignores them',
      'Email generates engagement → social runs a different message',
      'Sales conversations happen → marketing never learns what worked',
      'You run campaigns → but can\'t trace which drive actual revenue',
    ],
    result: 'Every channel working independently. Insights trapped. Opportunities missed.',
  },
  {
    Icon: MessageSquareX,
    headline: 'Inconsistent Brand Experience',
    problem: 'Every touchpoint tells a different story about your business',
    bullets: [
      'Brand voice sounds confident on LinkedIn, generic on your blog',
      'Your positioning changes based on who wrote the content that week',
      'Marketing promises expertise, ads feel salesy, emails feel generic',
      'Prospects see one value prop on your site, another in your pitch',
      'No single source of truth for what you actually stand for',
    ],
    result: 'Prospects confused. Brand diluted. Trust eroded before you get a meeting.',
  },
  {
    Icon: BrainCog,
    headline: 'No Intelligence Layer',
    problem: 'Tactics without context—activity that doesn\'t understand your business',
    bullets: [
      'Content created without knowing your buyers or market position',
      'Campaigns launched without knowing what differentiates you',
      'Messaging built from generic templates, not your actual value',
      'Compliance bolted on as an afterthought (if at all)',
      'You\'re "doing marketing" but there\'s no intelligence guiding what or why',
    ],
    result: 'Marketing that looks busy but doesn\'t drive growth. Activity without outcomes.',
  },
]

export default function FragmentationProblem() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.2 },
  }

  return (
    <section className="bg-white ss-section">
      <div className="ss-container">

        {/* Heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          variants={sectionVariants}
          {...inView}
        >
          <h2 className="font-display font-black text-3xl text-ss-neutral-700 md:text-5xl mb-4">
            Most Businesses Are Running Marketing{' '}
            <em className="font-serif italic font-light text-ss-purple-500">
              Without a System
            </em>
          </h2>
          <p className="font-sans text-body-md text-ss-neutral-500">
            Your marketing isn't failing because you're not doing enough. It's failing because
            nothing connects. Fragmented execution, inconsistent messaging, and disconnected
            data create complexity that kills growth—no matter how many hours you put in.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {problems.map(({ Icon, headline, problem, bullets, result }) => (
            <motion.div
              key={headline}
              variants={prefersReduced ? {} : cardVariants}
              className="ss-card-light p-8 flex flex-col gap-5"
            >
              <motion.div
                className="size-11 rounded-xl bg-ss-purple-100 flex items-center justify-center shrink-0"
                whileHover={prefersReduced ? {} : { scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="size-5 text-ss-purple-500" />
              </motion.div>

              <div>
                <h3 className="font-display font-black text-h5 text-ss-neutral-700 mb-1">{headline}</h3>
                <p className="font-sans text-body-sm font-medium text-ss-purple-500">{problem}</p>
              </div>

              <ul className="space-y-2.5">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 font-sans text-body-sm text-ss-neutral-500"
                  >
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-ss-purple-300" />
                    {b}
                  </li>
                ))}
              </ul>

              <p className="mt-auto font-sans text-body-xs font-medium text-ss-neutral-600 border-t border-ss-neutral-200 pt-4">
                {result}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition copy */}
        <motion.div
          className="mt-14 text-center space-y-3"
          variants={sectionVariants}
          {...inView}
        >
          <p className="font-display font-black text-h5 text-ss-purple-500">
            This isn't a tool problem. It's a system problem.
          </p>
          <p className="font-sans text-body-sm text-ss-neutral-500 max-w-xl mx-auto">
            Most platforms give you more tools. SuperSymm gives you a connected system—where
            strategy, execution, and optimization work as one intelligence engine.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
