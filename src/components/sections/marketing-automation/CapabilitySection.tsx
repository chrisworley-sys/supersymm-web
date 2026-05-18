import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { CapabilitySectionProps } from '@/types/marketing-automation'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function CapabilitySection({
  id,
  number,
  title,
  body,
  includes,
  illustration,
  mirrored = false,
}: CapabilitySectionProps) {
  const prefersReduced = useReducedMotion()

  const resolvedFadeUp: Variants = prefersReduced
    ? { hidden: {}, visible: {} }
    : fadeUp

  const resolvedStagger: Variants = prefersReduced
    ? { hidden: {}, visible: {} }
    : stagger

  return (
    <section id={id} className="bg-white" style={{ padding: '80px 0' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div
          className={`grid items-center gap-16 lg:gap-20 ${
            mirrored
              ? 'grid-cols-1 lg:grid-cols-[45%_55%]'
              : 'grid-cols-1 lg:grid-cols-[55%_45%]'
          }`}
        >
          {/* Copy column — swap order on mobile when mirrored */}
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={mirrored ? 'order-1 lg:order-2' : ''}
          >
            <motion.p
              variants={resolvedFadeUp}
              className="font-mono text-sm mb-3"
              style={{ color: 'var(--ss-purple)', letterSpacing: '0.02em' }}
            >
              {number}
            </motion.p>

            <motion.h3
              variants={resolvedFadeUp}
              className="font-display font-bold mb-5"
              style={{ fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1.2, color: 'var(--ss-navy)' }}
            >
              {title}
            </motion.h3>

            <motion.div
              variants={resolvedFadeUp}
              className="font-sans mb-6 space-y-4"
              style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--ss-text-primary)' }}
            >
              {body}
            </motion.div>

            <motion.p
              variants={resolvedFadeUp}
              className="font-sans"
              style={{ fontSize: '15px', lineHeight: 1.5, color: 'var(--ss-navy)', opacity: 0.6 }}
            >
              {includes.join(' · ')}
            </motion.p>
          </motion.div>

          {/* Illustration column */}
          <motion.div
            variants={resolvedFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={`flex items-center justify-center ${mirrored ? 'order-2 lg:order-1' : ''}`}
            whileHover={prefersReduced ? undefined : { scale: 1.02, transition: { duration: 0.3 } }}
          >
            {illustration}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
