import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { IndustryCard } from '@/types/v2'

const MotionLink = motion.create(Link)

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(93deg, #8978BE, #E977C1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const industries: IndustryCard[] = [
  {
    name: 'Financial Advisors',
    badge: 'SEC / FINRA',
    body: "Generate qualified leads while meeting SEC compliance requirements. Built-in archiving and approval workflows.",
    link: '/solutions/financial-advisors',
  },
  {
    name: 'Healthcare Providers',
    badge: 'HIPAA',
    body: "Patient acquisition with HIPAA-compliant automation and encrypted communications.",
    link: '/solutions/healthcare',
  },
  {
    name: 'Tax & Accounting Firms',
    badge: null,
    body: "Fill your pipeline year-round, not just during tax season. Automated lead nurture and client retention.",
    link: '/solutions/tax-accounting',
  },
  {
    name: 'Legal Professionals',
    badge: 'Bar Compliant',
    body: "Business development that runs itself while you bill hours. State bar compliant marketing automation.",
    link: '/solutions/legal',
  },
  {
    name: 'B2B Services',
    badge: null,
    body: "Consistent lead generation for consultants, agencies, and service providers. Multi-channel execution at scale.",
    link: '/solutions/b2b',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function IndustriesSection() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.15 } as const,
  }

  return (
    <section id="industries" style={{ background: '#0F0A1A', paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <motion.div
          className="mx-auto max-w-[720px] text-center mb-14"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium mb-4" style={{ color: 'rgba(255,255,255,0.40)' }}>
            Who We Serve
          </p>
          <h2 className="font-display font-black leading-[1.1] text-white mb-6" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Built for firms{' '}
            <em className="font-serif italic" style={gradientText}>serious about growth.</em>
          </h2>
          <p className="font-sans text-[18px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.60)' }}>
            SuperSymm is designed for businesses where marketing matters but can't be
            a full-time job. If you need consistent lead generation without hiring
            a marketing team or managing a dozen tools, SuperSymm was built for you.
          </p>
        </motion.div>

        {/* 5-card row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {industries.map(({ name, badge, body, link }) => (
            <motion.div
              key={name}
              variants={prefersReduced ? {} : fadeUp}
              className="relative rounded-2xl p-7 flex flex-col gap-4 overflow-hidden group"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
              whileHover={prefersReduced ? {} : { y: -4, transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] } }}
            >
              {/* Left-border hover accent */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl origin-top"
                style={{ background: 'linear-gradient(to bottom, #8978BE, #E977C1)' }}
                initial={{ scaleY: 0 }}
                whileHover={prefersReduced ? {} : { scaleY: 1 }}
                transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
              />

              <div>
                <p className="font-display font-bold text-[16px] uppercase tracking-[0.04em] text-white mb-2">
                  {name}
                </p>
                {badge && (
                  <span
                    className="inline-flex items-center font-display font-bold text-[11px] uppercase tracking-[0.05em] px-2 py-0.5 rounded-full"
                    style={{
                      color: '#8978BE',
                      background: 'rgba(137,120,190,0.12)',
                      border: '1px solid rgba(137,120,190,0.30)',
                      height: '20px',
                    }}
                  >
                    {badge}
                  </span>
                )}
              </div>

              <p className="font-sans text-[14px] leading-[1.5] flex-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {body}
              </p>

              <Link
                to={link}
                className="inline-flex items-center gap-1.5 font-sans text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: '#E977C1' }}
              >
                Learn More <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.div
          className="mt-12 text-center space-y-5"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <p className="font-sans text-[18px] leading-[1.6] max-w-[680px] mx-auto" style={{ color: 'rgba(255,255,255,0.50)' }}>
            Whether you serve individuals or businesses, SuperSymm adapts to your
            audience, your industry, and your compliance requirements.
          </p>
          <MotionLink
            to="/solutions"
            className="inline-flex items-center gap-2 bg-ss-accent-100 text-ss-purple-700 font-sans font-medium text-base px-8 py-3 rounded-full hover:bg-ss-accent-200 transition-colors"
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
            transition={{ duration: 0.1 }}
          >
            Explore Industry Solutions <ArrowRight className="size-4" />
          </MotionLink>
        </motion.div>

      </div>
    </section>
  )
}
