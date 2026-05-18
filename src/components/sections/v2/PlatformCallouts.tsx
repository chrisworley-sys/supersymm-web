import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Brain, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react'

const callouts = [
  {
    Icon: Brain,
    label: 'Business Intelligence',
    headline: 'Supercharge your business',
    sub: 'AI-powered strategy and market insight built around your firm.',
    href: '/platform/business-intelligence',
  },
  {
    Icon: Target,
    label: 'Lead Generation',
    headline: 'Capture and convert leads',
    sub: 'Every visitor scored, every hot lead routed at the right moment.',
    href: '/platform/lead-generation',
  },
  {
    Icon: Zap,
    label: 'Marketing Automation',
    headline: 'Automation keeps you focused',
    sub: 'Content and campaigns run on autopilot — without the busywork.',
    href: '/platform/marketing-automation',
  },
  {
    Icon: TrendingUp,
    label: 'Performance Optimization',
    headline: 'Better understand your business',
    sub: 'Real-time analytics and A/B testing that improve automatically.',
    href: '/platform/performance-optimization',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] } },
}

export default function PlatformCallouts() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="platform-callouts"
      style={{
        background: 'linear-gradient(180deg, #3A2460 0%, #2D1B4E 100%)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4"
        variants={prefersReduced ? {} : containerVariants}
        initial={prefersReduced ? false : 'hidden'}
        whileInView={prefersReduced ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.3 }}
      >
        {callouts.map(({ Icon, label, headline, sub, href }, i) => (
          <motion.div
            key={label}
            variants={prefersReduced ? {} : itemVariants}
            className="relative"
            style={{
              borderRight: i < callouts.length - 1 ? '1px solid rgba(255,255,255,0.07)' : undefined,
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <Link
              to={href}
              className="group flex flex-col items-center text-center gap-5 px-8 pt-14 pb-16 lg:px-12 lg:pt-16 lg:pb-20 h-full no-underline"
              style={{ transition: 'background 0.18s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '' }}
            >
              <div className="w-12 h-12 rounded-xl bg-ss-accent-100/12 flex items-center justify-center shrink-0 group-hover:bg-ss-accent-100/22 transition-colors">
                <Icon className="size-5 text-ss-accent-100/80 group-hover:text-ss-accent-100 transition-colors" />
              </div>

              <div className="flex-1">
                <p className="font-sans text-[11px] uppercase tracking-[0.10em] font-semibold text-white/45 mb-1.5">
                  {label}
                </p>
                <h3 className="font-display font-bold text-[26px] leading-[1.15] text-white mb-2">
                  {headline}
                </h3>
                <p className="font-sans text-[14px] leading-[1.55]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {sub}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-ss-accent-100/65 group-hover:text-ss-accent-100 transition-colors">
                Learn more <ArrowRight className="size-3.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
