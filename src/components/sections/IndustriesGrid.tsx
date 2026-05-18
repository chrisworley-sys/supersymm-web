import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { TrendingUp, Shield, FileText, BookOpen, Briefcase, ArrowRight } from 'lucide-react'
import { fadeUpVariant, containerVariant } from '@/hooks/useScrollAnimation'

const industries = [
  {
    Icon: TrendingUp,
    name: 'Financial Advisors',
    description: 'Generate qualified leads while meeting SEC compliance requirements',
    href: '/solutions/financial-advisors',
    comingSoon: false,
  },
  {
    Icon: Shield,
    name: 'Healthcare Providers',
    description: 'Patient acquisition with HIPAA-compliant automation',
    href: '#',
    comingSoon: true,
  },
  {
    Icon: FileText,
    name: 'Tax & Accounting Firms',
    description: 'Fill your pipeline year-round, not just during tax season',
    href: '#',
    comingSoon: true,
  },
  {
    Icon: BookOpen,
    name: 'Legal Professionals',
    description: 'Business development that runs itself while you bill hours',
    href: '#',
    comingSoon: true,
  },
  {
    Icon: Briefcase,
    name: 'B2B Services',
    description: 'Consistent lead generation for consultants, agencies, and distributors',
    href: '#',
    comingSoon: true,
  },
]

export default function IndustriesGrid() {
  const prefersReduced = useReducedMotion()

  const animateSection = prefersReduced
    ? {}
    : { variants: fadeUpVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateContainer = prefersReduced
    ? {}
    : { variants: containerVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateItem = prefersReduced ? {} : { variants: fadeUpVariant }

  return (
    <section className="ss-light ss-section">
      <div className="ss-container">

        {/* Heading */}
        <motion.div className="mx-auto max-w-2xl text-center mb-14" {...animateSection}>
          <h2 className="font-display font-black text-h4 text-ss-neutral-700 md:text-h3 lg:text-h2 mb-4">
            Built for Professional Service Firms That Need{' '}
            <em className="font-serif italic font-light text-ss-purple-500">Results, Not Busywork</em>
          </h2>
          <p className="font-sans text-body-lg text-ss-neutral-500">
            SuperSymm is trusted by financial advisors, healthcare providers, tax professionals, legal firms,
            and B2B service companies who need professional marketing without the overhead.
          </p>
        </motion.div>

        {/* Grid: 2 cols on md, 3 cols on lg — 5 cards with last row centered */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          {...animateContainer}
        >
          {industries.map(({ Icon, name, description, href, comingSoon }) => {
            const card = (
              <motion.div
                key={name}
                {...animateItem}
                className={[
                  'ss-card-light p-7 flex flex-col gap-4 transition-shadow duration-200',
                  !comingSoon && 'hover:shadow-md cursor-pointer group',
                ].join(' ')}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="size-11 rounded-xl bg-ss-purple-100 flex items-center justify-center shrink-0">
                    <Icon className={['size-5', comingSoon ? 'text-ss-neutral-300' : 'text-ss-purple-500'].join(' ')} />
                  </div>
                  {comingSoon && <span className="ss-badge-muted shrink-0">Coming Soon</span>}
                </div>
                <div>
                  <h3
                    className={[
                      'font-display font-black text-h6 mb-1.5',
                      comingSoon ? 'text-ss-neutral-400' : 'text-ss-neutral-700',
                    ].join(' ')}
                  >
                    {name}
                  </h3>
                  <p className={['font-sans text-body-sm', comingSoon ? 'text-ss-neutral-300' : 'text-ss-neutral-500'].join(' ')}>
                    {description}
                  </p>
                </div>
                {!comingSoon && (
                  <span className="mt-auto inline-flex items-center gap-1 font-sans text-body-sm font-medium text-ss-purple-500 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="size-3.5" />
                  </span>
                )}
              </motion.div>
            )

            return comingSoon ? (
              <div key={name}>{card}</div>
            ) : (
              <Link key={name} to={href} className="contents">
                {card}
              </Link>
            )
          })}
        </motion.div>

        {/* Closing copy + CTA */}
        <motion.div className="mt-14 text-center" {...animateSection}>
          <p className="font-sans text-body-md text-ss-neutral-500 mb-6 max-w-xl mx-auto">
            Whether you're serving individuals or businesses, SuperSymm adapts to your audience, your industry,
            and your compliance requirements.
          </p>
          <Link to="/solutions" className="ss-btn-primary">
            See Your Industry Solution <ArrowRight className="size-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
