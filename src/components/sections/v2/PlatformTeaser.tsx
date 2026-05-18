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

export default function PlatformTeaser() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.2 } as const,
  }

  return (
    <section id="platform" className="relative overflow-hidden" style={{ paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/illustrations/The_Platform_home.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      {/* Purple color overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(34,25,59,0.87)' }} aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        <motion.div
          className="mx-auto max-w-[800px] text-center"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-accent-100 mb-4">
            The SuperSymm Platform
          </p>
          <h2 className="font-display font-black leading-[1.1] text-white mb-6" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Your Entire Marketing Operation.{' '}
            <em className="font-serif italic" style={gradientText}>Fully Connected.</em>
          </h2>
          <p className="font-sans text-[18px] leading-[1.6] mb-10" style={{ color: 'rgba(255,255,255,0.72)' }}>
            SuperSymm is marketing automation built for businesses that need professional results
            without hiring a full marketing team or managing a dozen tools. We don't just schedule
            posts — we create content, distribute across channels, capture leads, score engagement,
            and optimize campaigns. Every piece feeds the next.
          </p>
          <MotionLink
            to="/platform"
            className="inline-flex items-center gap-2 bg-ss-accent-100 text-ss-purple-700 font-sans font-medium text-base px-8 py-3 rounded-full hover:bg-ss-accent-200 transition-colors"
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
