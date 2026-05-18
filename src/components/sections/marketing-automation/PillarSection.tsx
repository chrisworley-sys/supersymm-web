import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion'
import type { PillarSectionProps } from '@/types/marketing-automation'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function PillarSection({
  id,
  number,
  title,
  body,
  included = [],
  insight,
  benefitLabel,
  benefitLine,
  illustration,
  mirrored = false,
  grey = false,
}: PillarSectionProps) {
  const prefersReduced = useReducedMotion()
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const illustrationY = useTransform(scrollYProgress, [0, 1], [-36, 36])

  const resolvedFadeUp: Variants = prefersReduced ? { hidden: {}, visible: {} } : fadeUp
  const resolvedStagger: Variants = prefersReduced ? { hidden: {}, visible: {} } : stagger

  const sectionBg = grey ? 'var(--ss-bg-soft)' : 'white'
  const insightInnerBg = grey ? 'white' : 'var(--ss-bg-purple-light)'

  return (
    <section
      ref={containerRef}
      id={id}
      className="border-b"
      style={{ padding: '80px 0', background: sectionBg, borderColor: 'var(--ss-border-subtle)' }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div
          className={`grid items-center gap-16 lg:gap-20 ${
            mirrored
              ? 'grid-cols-1 lg:grid-cols-[45%_55%]'
              : 'grid-cols-1 lg:grid-cols-[55%_45%]'
          }`}
        >
          {/* Copy column */}
          <motion.div
            variants={resolvedStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={mirrored ? 'order-1 lg:order-2' : ''}
          >
            <motion.div variants={resolvedFadeUp} className="mb-4">
              <span
                className="inline-flex items-center rounded-full font-sans font-semibold text-xs uppercase tracking-wider px-3 py-1"
                style={{
                  background: grey ? 'white' : 'var(--ss-bg-purple-light)',
                  color: 'var(--ss-purple)',
                  letterSpacing: '0.06em',
                }}
              >
                {number}
              </span>
            </motion.div>

            <motion.h3
              variants={resolvedFadeUp}
              className="font-display font-black mb-5 text-ss-neutral-700"
              style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: 1.15,
                whiteSpace: 'pre-line',
              }}
            >
              {title}
            </motion.h3>

            <motion.div
              variants={resolvedStagger}
              className="font-sans mb-5 space-y-4 text-ss-neutral-500"
              style={{ fontSize: '17px', lineHeight: 1.65 }}
            >
              {body.map((paragraph, i) => (
                <motion.p key={i} variants={resolvedFadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.p
              variants={resolvedFadeUp}
              className="font-sans mb-5 text-ss-neutral-400"
              style={{ fontSize: '13px', lineHeight: 1.5 }}
            >
              {included.join(' · ')}
            </motion.p>

            {insight && (
              <motion.div variants={resolvedFadeUp}>
                <div
                  className="rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #6750A4, #E977C1)', padding: '1.5px' }}
                >
                  <div
                    className="rounded-[10px] p-4 flex flex-col gap-2.5"
                    style={{ background: insightInnerBg }}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/logos/nav-logo-circle.png"
                        alt=""
                        aria-hidden="true"
                        style={{ width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0 }}
                      />
                      <span
                        className="font-sans font-semibold uppercase"
                        style={{ fontSize: '11px', letterSpacing: '0.07em', color: 'var(--ss-purple)' }}
                      >
                        SuperSymm
                      </span>
                    </div>
                    <p
                      className="font-sans text-ss-neutral-500"
                      style={{ fontSize: '13px', lineHeight: 1.6 }}
                    >
                      {insight}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {benefitLine && (
              <motion.div variants={resolvedFadeUp} style={{ marginTop: '4px' }}>
                {benefitLabel && (
                  <p
                    className="font-sans font-bold uppercase"
                    style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'rgba(34,25,59,0.60)', marginBottom: '8px' }}
                  >
                    {benefitLabel}
                  </p>
                )}
                <p
                  className="italic-benefit"
                  style={{ fontSize: '17px', lineHeight: 1.6 }}
                >
                  {benefitLine}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Illustration column — parallax y */}
          <motion.div
            variants={resolvedFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={`flex items-center justify-center ${mirrored ? 'order-2 lg:order-1' : ''}`}
            style={prefersReduced ? undefined : { y: illustrationY }}
            whileHover={prefersReduced ? undefined : { scale: 1.02, transition: { duration: 0.3 } }}
          >
            {illustration}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
