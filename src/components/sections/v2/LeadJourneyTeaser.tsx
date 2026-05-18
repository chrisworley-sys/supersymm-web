import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const MotionLink = motion.create(Link)

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(93deg, #8978BE, #E977C1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
}

export default function LeadJourneyTeaser() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.15 } as const,
  }

  return (
    <section
      id="journey"
      style={{
        background: 'linear-gradient(135deg, #1B0A20 0%, #22193B 35%, #2D1B4E 65%, #1B0A20 100%)',
        backgroundSize: '400% 400%',
        animation: prefersReduced ? 'none' : 'hero-gradient-shift 35s ease-in-out infinite',
        paddingBlock: 'clamp(80px, 10vw, 160px)',
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-accent-100 mb-4">
            How a lead moves through the system
          </p>
          <h2 className="font-display font-black leading-[1.1] text-white mb-6" style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
            From cold visitor to{' '}
            <em className="font-serif italic" style={gradientText}>qualified lead.</em>
          </h2>
          <p className="font-sans text-[18px] leading-[1.6] mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Most marketing platforms automate tasks. SuperSymm orchestrates relationships.
            Here's what one prospect's journey looks like from first touch to qualified handoff.
          </p>
          <MotionLink
            to="/platform/lead-generation"
            className="inline-flex items-center gap-2 bg-ss-accent-100 text-ss-purple-700 font-sans font-medium text-base px-8 py-3 rounded-full hover:bg-ss-accent-200 transition-colors"
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
            transition={{ duration: 0.1 }}
          >
            Explore lead generation <ArrowRight className="size-4" />
          </MotionLink>
        </motion.div>
      </div>
    </section>
  )
}
