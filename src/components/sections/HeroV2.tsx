import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const MotionLink = motion.create(Link)

// Blobs: faster durations (6–13s vs old 27–49s) so movement is clearly visible
const BLOBS = [
  {
    id: 'pink',
    className: 'rounded-full bg-ss-pink-700/35 blur-[160px]',
    style: { width: 720, height: 720, left: '-12%', top: '-30%' },
    xKeys: [0, 110, -70, 95, -35, 0],
    yKeys: [0, 75, -55, 105, -28, 0],
    xDur: 8, yDur: 11,
  },
  {
    id: 'purple',
    className: 'rounded-full bg-ss-purple-500/30 blur-[200px]',
    style: { width: 640, height: 640, right: '-8%', top: '25%' },
    xKeys: [0, -90, 55, -75, 40, 0],
    yKeys: [0, 65, -75, 28, -55, 0],
    xDur: 10, yDur: 13,
  },
  {
    id: 'violet',
    className: 'rounded-full bg-ss-violet-300/20 blur-[180px]',
    style: { width: 540, height: 540, left: '28%', bottom: '-22%' },
    xKeys: [0, 70, -55, 45, -65, 0],
    yKeys: [0, -65, 38, -48, 55, 0],
    xDur: 7, yDur: 9,
  },
] as const

// Watermarks: opacity 0.10–0.16 (was 0.04–0.07), rotation 12–22s (was 60–100s)
const WATERMARKS = [
  { id: 1, size: 88,  pos: { left: '4%',   top: '10%'   }, xKeys: [0, 16, -10, 20, -6, 0],  yKeys: [0, -18,  8, -22, 12, 0],  xDur: 5.0, yDur: 6.5,  rotDur: 15, delay: 0.0, opacity: 0.16 },
  { id: 2, size: 62,  pos: { right: '11%', top: '6%'    }, xKeys: [0, -20, 10, -16,  6, 0],  yKeys: [0,  12, -18,  6, -10, 0], xDur: 6.0, yDur: 7.8,  rotDur: 18, delay: 0.8, opacity: 0.12 },
  { id: 3, size: 108, pos: { right: '1%',  top: '42%'   }, xKeys: [0, -14, 22,  -8, 18, 0],  yKeys: [0, -24,  9, -17,  5, 0], xDur: 4.5, yDur: 5.8,  rotDur: 12, delay: 0.3, opacity: 0.10 },
  { id: 4, size: 74,  pos: { left: '22%',  bottom: '7%' }, xKeys: [0,  22, -16, 12, -20, 0], yKeys: [0,  10, -23, 17, -8, 0],  xDur: 7.0, yDur: 9.0,  rotDur: 20, delay: 1.2, opacity: 0.12 },
  { id: 5, size: 94,  pos: { right: '24%', bottom: '11%'}, xKeys: [0, -18, 14, -22,  8, 0],  yKeys: [0, -13, 19, -10, 15, 0], xDur: 5.5, yDur: 7.0,  rotDur: 16, delay: 0.5, opacity: 0.14 },
  { id: 6, size: 68,  pos: { left: '1%',   bottom: '33%'}, xKeys: [0,  24, -12, 18, -22, 0], yKeys: [0, -16, 21, -8, 14, 0],  xDur: 8.0, yDur: 10.2, rotDur: 22, delay: 1.5, opacity: 0.10 },
  { id: 7, size: 82,  pos: { left: '58%',  top: '58%'   }, xKeys: [0, -22, 15, -10, 20, 0],  yKeys: [0,  18, -19, 11, -15, 0],xDur: 4.8, yDur: 6.2,  rotDur: 14, delay: 0.2, opacity: 0.12 },
  { id: 8, size: 56,  pos: { left: '42%',  top: '12%'   }, xKeys: [0,  12, -18,  8, -14, 0], yKeys: [0, -20, 15, -12, 18, 0], xDur: 5.8, yDur: 7.5,  rotDur: 17, delay: 1.0, opacity: 0.10 },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function HeroV2() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-ss-violet-700">

      {/* ── Blob layer ───────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {BLOBS.map(({ id, className, style, xKeys, yKeys, xDur, yDur }) => (
          <motion.div
            key={id}
            className={`absolute ${className}`}
            style={style}
            animate={prefersReduced ? {} : { x: [...xKeys], y: [...yKeys] }}
            transition={
              prefersReduced
                ? {}
                : {
                    x: { duration: xDur, repeat: Infinity, ease: 'easeInOut' },
                    y: { duration: yDur, repeat: Infinity, ease: 'easeInOut' },
                  }
            }
          />
        ))}
      </div>

      {/* ── Logo watermark layer ─────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {WATERMARKS.map(({ id, size, pos, xKeys, yKeys, xDur, yDur, rotDur, delay, opacity }) => (
          <motion.img
            key={id}
            src="/assets/logos/logo-simple.png"
            alt=""
            style={{ ...pos, position: 'absolute', width: size, height: size, opacity }}
            animate={
              prefersReduced
                ? {}
                : { x: xKeys, y: yKeys, rotate: [0, 360] }
            }
            transition={
              prefersReduced
                ? {}
                : {
                    x: { duration: xDur, repeat: Infinity, ease: 'easeInOut', delay },
                    y: { duration: yDur, repeat: Infinity, ease: 'easeInOut', delay: delay + 1.1 },
                    rotate: { duration: rotDur, repeat: Infinity, ease: 'linear', delay },
                  }
            }
          />
        ))}
      </div>

      {/* ── Content ──────────────────────────────────────────────────────────── */}
      <div
        className="relative z-10 ss-container py-32"
        style={{ paddingTop: 'calc(5rem + 80px)' }}
      >
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* Left: copy */}
          <motion.div
            variants={prefersReduced ? {} : containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={prefersReduced ? {} : itemVariants} className="ss-badge-accent mb-6">
              Intelligent Marketing System
            </motion.p>

            <motion.h1
              variants={prefersReduced ? {} : itemVariants}
              className="font-display font-black text-4xl leading-tight text-white md:text-6xl mb-6"
            >
              Turn Marketing Into a{' '}
              <em className="font-serif font-light not-italic text-gradient">
                Revenue Engine
              </em>{' '}
              That Runs Itself
            </motion.h1>

            <motion.p
              variants={prefersReduced ? {} : itemVariants}
              className="font-sans text-body-lg text-white/80 mb-4 max-w-xl"
            >
              An intelligent marketing system that unifies strategy, execution,
              and growth. SuperSymm eliminates fragmentation, simplifies
              complexity, and turns marketing into consistent leads and proven ROI.
            </motion.p>

            <motion.p
              variants={prefersReduced ? {} : itemVariants}
              className="font-sans text-body-sm text-white/55 mb-10 max-w-lg"
            >
              Most businesses drown in marketing chaos—disconnected tools,
              inconsistent messaging, no clear path to revenue. SuperSymm gives you
              a connected system where business intelligence powers every campaign,
              channels inform each other, and leads never fall through cracks.
            </motion.p>

            <motion.div
              variants={prefersReduced ? {} : itemVariants}
              className="flex flex-col gap-3 sm:flex-row sm:items-center mb-10"
            >
              <MotionLink
                to="/pricing"
                className="ss-btn-accent"
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
              >
                Get Custom Pricing <ArrowRight className="size-4" />
              </MotionLink>
              <MotionLink
                to="/platform"
                className="ss-btn-ghost-dark"
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
              >
                See How It Works
              </MotionLink>
            </motion.div>

            <motion.p
              variants={prefersReduced ? {} : itemVariants}
              className="font-sans text-body-xs text-white/35 tracking-wide"
            >
              Trusted by financial advisors, healthcare providers, and
              professional service firms
            </motion.p>
          </motion.div>

          {/* Right: dashboard mockup */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            {/* TODO: Replace with final dashboard screenshot/mockup */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-white/20" />
                <div className="size-2.5 rounded-full bg-white/20" />
                <div className="size-2.5 rounded-full bg-white/20" />
                <div className="ml-3 h-4 w-40 rounded bg-white/10" />
              </div>
              <div className="mb-3 grid grid-cols-3 gap-3">
                {[
                  { label: 'Leads This Month', value: '47', color: 'text-ss-accent-100' },
                  { label: 'Content Published', value: '124', color: 'text-white' },
                  { label: 'Hours Saved',       value: '40', color: 'text-ss-green-100' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="rounded-xl bg-white/8 p-3">
                    <p className="mb-1 font-sans text-xs text-white/40">{label}</p>
                    <p className={`font-display font-black text-2xl ${color}`}>{value}</p>
                  </div>
                ))}
              </div>
              <div className="mb-3 rounded-xl bg-white/8 p-4">
                <p className="mb-3 font-sans text-xs text-white/40">Lead Pipeline — Last 7 Days</p>
                <div className="flex items-end gap-1.5 h-20">
                  {[35, 58, 44, 72, 63, 81, 96].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-ss-purple-400/60" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="rounded-lg border border-ss-accent-100/25 bg-ss-accent-100/10 px-3 py-2">
                  <p className="font-sans text-xs font-medium text-ss-accent-100">
                    Hot lead detected → Routing to sales queue
                  </p>
                </div>
                <div className="rounded-lg bg-white/8 px-3 py-2">
                  <p className="font-sans text-xs text-white/40">
                    LinkedIn post scheduled · Email sequence triggered · Retargeting active
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
