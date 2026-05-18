import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

const industries = [
  {
    title: 'Financial Advisors',
    description: 'Generate qualified leads while meeting SEC compliance requirements. Built-in archiving and approval workflows.',
    link: '/solutions/financial-advisors',
    compliance: true,
  },
  {
    title: 'Healthcare Providers',
    description: 'Patient acquisition with HIPAA-compliant automation and encrypted communications.',
    link: null,
    compliance: true,
  },
  {
    title: 'Tax & Accounting Firms',
    description: 'Fill your pipeline year-round, not just during tax season. Automated lead nurture and client retention.',
    link: null,
    compliance: false,
  },
  {
    title: 'Legal Professionals',
    description: 'Business development that runs itself while you bill hours. State bar compliant marketing automation.',
    link: null,
    compliance: true,
  },
  {
    title: 'B2B Services',
    description: 'Consistent lead generation for consultants, agencies, and service providers. Multi-channel execution at scale.',
    link: null,
    compliance: false,
  },
] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function WhoItsFor() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.15 },
  }

  return (
    <section className="bg-white ss-section">
      <div className="ss-container">

        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          variants={fadeUp}
          {...inView}
        >
          <h2 className="font-display font-black text-3xl text-ss-neutral-700 md:text-5xl mb-4">
            Built for Professional Service Firms{' '}
            <em className="font-serif font-light not-italic text-ss-purple-500">
              Serious About Growth
            </em>
          </h2>
          <p className="font-sans text-body-md text-ss-neutral-500">
            SuperSymm is designed for businesses where marketing matters but can't be a full-time
            job. Financial advisors. Healthcare providers. Tax professionals. Legal firms. B2B
            service companies. If you need consistent lead generation without hiring a marketing
            team or managing a dozen tools, SuperSymm was built for you.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {industries.map(({ title, description, link, compliance }) => (
            <motion.div
              key={title}
              variants={prefersReduced ? {} : fadeUp}
              className="group relative ss-card-light p-6 flex flex-col gap-3 overflow-hidden"
            >
              {/* Animated left accent bar on hover */}
              <div className="absolute left-0 inset-y-0 w-1 bg-ss-accent-100 origin-top scale-y-0 transition-transform duration-200 group-hover:scale-y-100" />

              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-black text-h5 text-ss-neutral-700">{title}</h3>
                {compliance && (
                  <span title="Compliance-aware" className="shrink-0 mt-0.5">
                    <ShieldCheck className="size-4 text-ss-purple-400" />
                  </span>
                )}
              </div>

              <p className="font-sans text-body-sm text-ss-neutral-500 flex-1">{description}</p>

              {link ? (
                <Link
                  to={link}
                  className="inline-flex items-center gap-1.5 font-sans text-body-sm font-medium text-ss-purple-500 hover:text-ss-purple-600 transition-colors"
                >
                  Learn More <ArrowRight className="size-3.5" />
                </Link>
              ) : (
                <span className="ss-badge-muted self-start">Coming Soon</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          {...inView}
          className="mt-12 text-center space-y-4"
        >
          <p className="font-sans text-body-sm text-ss-neutral-400 max-w-xl mx-auto">
            Whether you're serving individuals or businesses, SuperSymm adapts to your audience,
            your industry, and your compliance requirements. The same intelligent system,
            customized for your business context.
          </p>
          <Link to="/solutions" className="ss-btn-primary inline-flex">
            Explore Industry Solutions <ArrowRight className="size-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
