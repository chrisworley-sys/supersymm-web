import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const MotionLink = motion.create(Link)

export default function FinalInvitation() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.2 } as const,
  }

  return (
    <section
      id="cta"
      className="relative overflow-hidden"
      style={{ background: '#1B0A20', paddingBlock: 'clamp(120px, 16vw, 220px)' }}
    >

      <div className="mx-auto w-full max-w-[1200px] px-6 relative">
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          variants={prefersReduced ? {} : containerVariants}
          {...inView}
        >
          <motion.h2
            variants={prefersReduced ? {} : fadeUp}
            className="font-display font-black leading-[1.1] text-white mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', textWrap: 'pretty' }}
          >
            Building growth — but not at the{' '}
            <em className="font-serif italic" style={{ background: 'linear-gradient(93deg, #8978BE, #E977C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>speed and quality you want?</em>
          </motion.h2>

          <motion.p
            variants={prefersReduced ? {} : fadeUp}
            className="font-sans text-[18px] leading-[1.7] mb-10"
            style={{ color: 'rgba(255,255,255,0.90)' }}
          >
            If you feel scattered in your marketing efforts, or simply want better
            results from your investment, contact us for a quick consultation.
            We'll show you exactly what's possible in one call.
          </motion.p>

          <motion.div
            variants={prefersReduced ? {} : fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <MotionLink
              to="/pricing"
              className="inline-flex items-center gap-2 bg-ss-accent-100 text-ss-purple-700 font-sans font-medium text-base px-8 rounded-full hover:bg-ss-accent-200 transition-colors"
              style={{ height: '56px' }}
              whileHover={prefersReduced ? {} : { scale: 1.03 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
            >
              Start a Conversation <ArrowRight className="size-4" />
            </MotionLink>
          </motion.div>

          <motion.p
            variants={prefersReduced ? {} : fadeUp}
            className="font-sans text-[14px] italic mb-3"
            style={{ color: 'rgba(255,255,255,0.60)' }}
          >
            Engagement pricing is custom to your firm and goals.
            We'll quote you a number after one call.
          </motion.p>

          <motion.p
            variants={prefersReduced ? {} : fadeUp}
            className="font-sans text-[13px]"
            style={{ color: 'rgba(255,255,255,0.50)' }}
          >
            Month-to-month after onboarding · Quarterly strategy reviews ·
            Compliance archiving included · Real humans, real accountability
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
