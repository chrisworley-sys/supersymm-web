import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Brain, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react'

const MotionLink = motion.create(Link)

const systems = [
  {
    Icon: Brain,
    number: '01',
    title: 'Business Intelligence Engine',
    description:
      "The brain behind your marketing. SuperSymm analyzes your business, market, and audience to create intelligent strategies automatically. We don't ask you to configure settings — we learn your business and build intelligent strategies for you.",
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
    number: '02',
    title: 'Lead Generation System',
    description:
      "From visitor to qualified lead, automatically. SuperSymm captures every prospect, scores engagement in real-time based on your specific ICP, and routes hot leads to your sales team. Complete visibility into who's interested and when they're ready to talk.",
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
    number: '03',
    title: 'Marketing Automation Platform',
    description:
      'Execute across every channel, automatically. One approval → content distributed to LinkedIn, email, Facebook, Instagram, your blog, and paid ads. For regulated industries: built-in compliance with SEC/FINRA archiving and approval workflows.',
    bullets: [
      'AI content creation (powered by business intelligence)',
      'Multi-channel distribution (social, email, ads, blog)',
      'Campaign orchestration and workflows',
      'Built-in compliance and archiving',
    ],
    unique: "Content isn't generic — it's informed by your market intelligence. Compliance built in, not bolted on.",
    link: '/platform/marketing-automation',
    linkLabel: 'Explore Marketing Automation',
  },
  {
    Icon: TrendingUp,
    number: '04',
    title: 'Performance Optimization',
    description:
      "Marketing that improves itself. SuperSymm tracks performance, A/B tests variations automatically, and optimizes campaigns based on what's actually working. Performance insights feed back into the Intelligence Engine — making future strategies even better.",
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
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
}

const cardContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function FoundationSection() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.15 } as const,
  }

  return (
    <section id="foundation" className="bg-white" style={{ paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <motion.div
          className="mx-auto max-w-[720px] text-center mb-14"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-neutral-400 mb-4">
            How it Works
          </p>
          <h2 className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-6" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Integrated systems{' '}
            <em className="font-serif italic" style={{ background: 'linear-gradient(93deg, #8978BE, #E977C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>that power your growth</em>
          </h2>
          <p className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500">
            SuperSymm isn't a collection of tools — it's an intelligent system where each component
            feeds the next, creating a self-improving revenue engine.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={prefersReduced ? {} : cardContainerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {systems.map(({ Icon, number, title, description, bullets, unique, link, linkLabel }) => (
            <motion.div
              key={number}
              variants={prefersReduced ? {} : fadeUp}
              className="foundation-card rounded-2xl p-8 flex flex-col gap-5"
              style={{
                border: '1px solid rgba(31,30,33,0.08)',
                background: '#FAFAFA',
                backgroundImage: `
                  linear-gradient(rgba(103,80,164,0.05) 1px, transparent 1px),
                  linear-gradient(to right, rgba(103,80,164,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '32px 32px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
              }}
              whileHover={prefersReduced ? {} : { y: -6, transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] } }}
            >
              <div className="size-11 rounded-xl bg-ss-purple-100 flex items-center justify-center shrink-0">
                <Icon className="size-5 text-ss-purple-500" />
              </div>

              <div>
                <p className="font-sans text-[12px] uppercase tracking-[0.08em] text-ss-neutral-400 font-medium mb-1">
                  System {number}
                </p>
                <h3
                  className="font-display font-bold leading-[1.2]"
                  style={{
                    fontSize: 'clamp(22px, 2vw, 28px)',
                    background: 'linear-gradient(93deg, #6750A4 0%, #B874CD 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {title}
                </h3>
              </div>

              <p className="font-sans text-[16px] leading-[1.6] text-ss-neutral-500">
                {description}
              </p>

              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 font-sans text-[14px] leading-[1.5] text-ss-neutral-500">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ss-purple-300" />
                    {b}
                  </li>
                ))}
              </ul>

              <p className="font-sans text-[13px] text-ss-purple-500 font-medium italic border-t border-ss-neutral-100 pt-3">
                {unique}
              </p>

              <Link
                to={link}
                className="mt-auto inline-flex items-center gap-1.5 font-sans text-[14px] font-medium text-ss-purple-500 hover:text-ss-purple-600 transition-colors"
              >
                {linkLabel} <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <MotionLink
            to="/platform"
            className="inline-flex items-center gap-2 bg-ss-purple-500 text-white font-sans font-medium text-base px-8 py-3 rounded-full hover:bg-ss-purple-600 transition-colors"
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
            transition={{ duration: 0.1 }}
          >
            Explore the Platform <ArrowRight className="size-4" />
          </MotionLink>
        </motion.div>

      </div>
    </section>
  )
}
