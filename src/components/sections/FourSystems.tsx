import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Lightbulb, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import { fadeUpVariant, containerVariant } from '@/hooks/useScrollAnimation'

const systems = [
  {
    Icon: Lightbulb,
    headline: 'Business Intelligence Engine',
    description:
      'The brain behind your marketing. SuperSymm analyzes your business, market, and audience to create intelligent strategies automatically. Most platforms are dumb tools that require you to configure everything. SuperSymm starts with intelligence.',
    features: [
      'Market and competitor analysis',
      'Audience intelligence and segmentation',
      'AI-powered strategy generation',
      'Content calendar planning',
    ],
    link: { label: 'Learn More About Business Intelligence', href: '#' },
    comingSoon: true,
  },
  {
    Icon: Target,
    headline: 'Lead Generation System',
    description:
      'From visitor to qualified lead, automatically. SuperSymm captures every prospect, scores engagement in real-time, and routes hot leads to your sales team. No more lost leads between platforms. No more manual CRM updates.',
    features: [
      'Lead capture and form optimization',
      'Behavioral scoring and segmentation',
      'Multi-touch attribution tracking',
      'Automatic CRM sync and routing',
    ],
    link: { label: 'See How Lead Generation Works', href: '/platform/lead-generation' },
    comingSoon: false,
  },
  {
    Icon: Zap,
    headline: 'Marketing Automation Platform',
    description:
      'Execute across every channel, automatically. One approval → content distributed to LinkedIn, email, Facebook, Instagram, your blog, and paid ads. Professional content created, posted, and tracked—all from one platform.',
    features: [
      'AI content creation for all channels',
      'Multi-channel distribution (social, email, ads, blog)',
      'Campaign orchestration and workflows',
      'Built-in compliance and archiving',
    ],
    link: { label: 'Explore Marketing Automation', href: '/platform/marketing-automation' },
    comingSoon: false,
  },
  {
    Icon: TrendingUp,
    headline: 'Performance Optimization',
    description:
      'Marketing that improves itself. SuperSymm tracks performance, A/B tests variations, and optimizes campaigns automatically. When headline A beats headline B, budget shifts. When engagement drops, alerts trigger. Self-improving results.',
    features: [
      'Real-time analytics dashboard',
      'Automated A/B testing',
      'Campaign intelligence and recommendations',
      'Custom ROI reporting',
    ],
    link: { label: 'See Performance Optimization', href: '#' },
    comingSoon: true,
  },
]

export default function FourSystems() {
  const prefersReduced = useReducedMotion()

  const animateSection = prefersReduced
    ? {}
    : { variants: fadeUpVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateContainer = prefersReduced
    ? {}
    : { variants: containerVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateItem = prefersReduced ? {} : { variants: fadeUpVariant }

  return (
    <section className="bg-ss-neutral-100 ss-section">
      <div className="ss-container">

        {/* Heading */}
        <motion.div className="mx-auto max-w-2xl text-center mb-16" {...animateSection}>
          <h2 className="font-display font-black text-h4 text-ss-neutral-700 md:text-h3 lg:text-h2 mb-4">
            Four Integrated Systems That{' '}
            <em className="font-serif italic font-light text-ss-purple-500">Power Your Growth</em>
          </h2>
          <p className="font-sans text-body-lg text-ss-neutral-500">
            SuperSymm isn't a collection of tools—it's an intelligent system where each component feeds the next,
            creating a self-improving revenue engine.
          </p>
        </motion.div>

        {/* System cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          {...animateContainer}
        >
          {systems.map(({ Icon, headline, description, features, link, comingSoon }) => (
            <motion.div
              key={headline}
              {...animateItem}
              className="ss-card-light p-8 flex flex-col gap-5"
            >
              {/* Icon + badge row */}
              <div className="flex items-start justify-between gap-4">
                <div className="size-12 rounded-xl bg-ss-purple-100 flex items-center justify-center shrink-0">
                  <Icon className="size-5 text-ss-purple-500" />
                </div>
                {comingSoon && (
                  <span className="ss-badge-muted shrink-0">Coming Soon</span>
                )}
              </div>

              <div>
                <h3 className="font-display font-black text-h5 text-ss-neutral-700 mb-3">{headline}</h3>
                <p className="font-sans text-body-sm text-ss-neutral-500 leading-relaxed">{description}</p>
              </div>

              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex gap-2.5 font-sans text-body-sm text-ss-neutral-600">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ss-purple-400" />
                    {f}
                  </li>
                ))}
              </ul>

              {comingSoon ? (
                <p className="mt-auto font-sans text-body-sm text-ss-neutral-300 flex items-center gap-1.5">
                  {link.label}
                </p>
              ) : (
                <Link
                  to={link.href}
                  className="mt-auto inline-flex items-center gap-1.5 font-sans text-body-sm font-medium text-ss-purple-500 hover:text-ss-purple-600 transition-colors"
                >
                  {link.label} <ArrowRight className="size-3.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
