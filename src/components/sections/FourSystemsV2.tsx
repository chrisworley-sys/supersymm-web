import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Brain, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react'

const systems = [
  {
    Icon: Brain,
    title: 'Business Intelligence Engine',
    description:
      'The brain behind your marketing. SuperSymm analyzes your business, market, and audience to create intelligent strategies automatically. We don\'t ask you to configure settings—we learn your business and build intelligent strategies for you.',
    bullets: [
      'Market and competitor intelligence',
      'Audience research and segmentation',
      'AI-powered strategy generation',
      'Business context that informs every execution',
    ],
    unique: 'This is what makes SuperSymm different. Intelligence first, execution second.',
    link: '/platform',
    linkLabel: 'Learn More About Business Intelligence',
  },
  {
    Icon: Target,
    title: 'Lead Generation System',
    description:
      'From visitor to qualified lead, automatically. SuperSymm captures every prospect, scores engagement in real-time based on your specific ICP, and routes hot leads to your sales team. Complete visibility into who\'s interested and when they\'re ready to talk.',
    bullets: [
      'Lead capture and form optimization',
      'Behavioral lead scoring (real-time)',
      'Multi-touch attribution tracking',
      'Automatic CRM sync and routing',
    ],
    unique: 'The Intelligence Engine defines your ICP. Lead scoring evaluates every prospect against it automatically.',
    link: '/platform/lead-generation',
    linkLabel: 'See How Lead Generation Works',
  },
  {
    Icon: Zap,
    title: 'Marketing Automation Platform',
    description:
      'Execute across every channel, automatically. One approval → content distributed to LinkedIn, email, Facebook, Instagram, your blog, and paid ads. For regulated industries: built-in compliance with SEC/FINRA archiving and approval workflows.',
    bullets: [
      'AI content creation (powered by business intelligence)',
      'Multi-channel distribution (social, email, ads, blog)',
      'Campaign orchestration and workflows',
      'Built-in compliance and archiving',
    ],
    unique: 'Content isn\'t generic—it\'s informed by your market intelligence. Compliance built in, not bolted on.',
    link: '/platform/marketing-automation',
    linkLabel: 'Explore Marketing Automation',
  },
  {
    Icon: TrendingUp,
    title: 'Performance Optimization',
    description:
      'Marketing that improves itself. SuperSymm tracks performance, A/B tests variations automatically, and optimizes campaigns based on what\'s actually working. Performance insights feed back into the Intelligence Engine—making future strategies even better.',
    bullets: [
      'Real-time analytics dashboard',
      'Automated A/B testing and optimization',
      'Campaign intelligence and recommendations',
      'Multi-touch ROI attribution',
    ],
    unique: 'Most platforms give you data. SuperSymm gives you insights AND takes action automatically.',
    link: '/platform',
    linkLabel: 'See Performance Optimization',
  },
] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function FourSystemsV2() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.15 },
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
            Four Integrated Systems That Power Your Growth
          </h2>
          <p className="font-sans text-body-md text-ss-neutral-500">
            SuperSymm isn't a collection of tools—it's an intelligent system where each component
            feeds the next, creating a self-improving revenue engine. Here's how the connected
            system works:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {systems.map(({ Icon, title, description, bullets, unique, link, linkLabel }) => (
            <motion.div
              key={title}
              variants={prefersReduced ? {} : fadeUp}
              whileHover={prefersReduced ? {} : { y: -4 }}
              transition={{ duration: 0.2 }}
              className="ss-card-light p-8 flex flex-col gap-5 border border-ss-neutral-200 hover:border-ss-purple-400 transition-colors duration-200"
            >
              <div className="size-11 rounded-xl bg-ss-purple-100 flex items-center justify-center shrink-0">
                <Icon className="size-5 text-ss-purple-500" />
              </div>

              <div>
                <h3 className="font-display font-black text-h5 text-ss-neutral-700 mb-2">{title}</h3>
                <p className="font-sans text-body-sm text-ss-neutral-500">{description}</p>
              </div>

              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 font-sans text-body-sm text-ss-neutral-500">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ss-purple-300" />
                    {b}
                  </li>
                ))}
              </ul>

              <p className="font-sans text-body-xs text-ss-purple-500 font-medium italic border-t border-ss-neutral-200 pt-3">
                {unique}
              </p>

              <Link
                to={link}
                className="mt-auto inline-flex items-center gap-1.5 font-sans text-body-sm font-medium text-ss-purple-500 hover:text-ss-purple-600 transition-colors"
              >
                {linkLabel} <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.div
          className="mt-12 text-center space-y-4"
          variants={fadeUp}
          {...inView}
        >
          <p className="font-sans text-body-sm text-ss-neutral-500 max-w-2xl mx-auto">
            The difference: These aren't four separate tools. They're four integrated components
            of one intelligent system—where each makes the others better.
          </p>
          <Link to="/platform" className="ss-btn-primary inline-flex">
            Explore the Platform <ArrowRight className="size-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
