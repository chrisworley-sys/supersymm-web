import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Brain } from 'lucide-react'
import type React from 'react'
import LogoLoopAnimation from '@/components/sections/business-intelligence/LogoLoopAnimation'

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(93deg, #8978BE, #E977C1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function BIHeroSection() {
  const prefersReduced = useReducedMotion()
  const rv: Variants = prefersReduced ? { hidden: {}, visible: {} } : fadeUp
  const rs: Variants = prefersReduced ? { hidden: {}, visible: {} } : stagger

  return (
    <section
      id="bi-hero"
      className="relative overflow-hidden"
      style={{
        background: '#0B0718',
        paddingTop: 'clamp(80px, 10vw, 140px)',
        paddingBottom: 'clamp(80px, 8vw, 120px)',
      }}
    >
      {/* Dot grid — subtle on dark */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(103,80,164,0.28) 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Radial ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(103,80,164,0.22) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto w-full max-w-[1200px] px-6 relative">
        <motion.div
          variants={rs}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-[52%_48%] items-center gap-12 lg:gap-16"
        >
          {/* Left: copy */}
          <div>
            <motion.div
              variants={rv}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span
                className="inline-flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ width: '26px', height: '26px', background: 'rgba(213,247,124,0.12)' }}
              >
                <Brain className="h-3.5 w-3.5" style={{ color: 'var(--ss-yellow)' }} />
              </span>
              <span
                className="font-sans font-medium uppercase"
                style={{ fontSize: '13px', letterSpacing: '0.08em', color: 'var(--ss-yellow)' }}
              >
                Intentional Context
              </span>
            </motion.div>

            <motion.h2
              variants={rv}
              className="font-display font-black text-white mb-6"
              style={{ fontSize: 'clamp(36px, 4.5vw, 62px)', lineHeight: 1.05, textWrap: 'pretty' }}
            >
              The brain behind{' '}
              <em className="font-serif italic not-italic" style={gradientText}>
                your marketing.
              </em>
            </motion.h2>

            <motion.p
              variants={rv}
              className="font-sans mb-10"
              style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', maxWidth: '520px' }}
            >
              SuperSymm analyzes your business, your market, and your audience — then turns
              that understanding into strategy that drives every campaign. We don't hand you
              a settings panel. We build the intelligence that powers everything else.
            </motion.p>

            <motion.div
              variants={rv}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <motion.div
                whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
              >
                <a href="#cta" className="ss-btn-accent">
                  See How It Works ↓
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: animated logo loop */}
          <motion.div
            variants={rv}
            className="flex justify-center lg:justify-end"
          >
            <div style={{ width: '100%', maxWidth: '460px' }}>
              <LogoLoopAnimation />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
