import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

type Pos = {
  top?: string
  bottom?: string
  left?: string
  right?: string
  rotate: number
  size: number
  opacity: number
}

// Each sub-array is the position cycle for one logo instance.
// Positions are placed near the edges/corners to avoid covering content.
const POSITION_SETS: Pos[][] = [
  [
    { top: '3%',    right: '-1%',  rotate: 13,  size: 170, opacity: 0.09 },
    { top: '46%',   right: '3%',   rotate: -8,  size: 138, opacity: 0.08 },
    { top: '22%',   right: '18%',  rotate: 7,   size: 108, opacity: 0.07 },
  ],
  [
    { top: '5%',    left: '-2%',   rotate: -16, size: 148, opacity: 0.08 },
    { top: '54%',   left: '1%',    rotate: 12,  size: 118, opacity: 0.07 },
    { bottom: '3%', left: '6%',    rotate: -20, size: 134, opacity: 0.07 },
  ],
  [
    { top: '28%',   right: '20%',  rotate: 23,  size: 88,  opacity: 0.06 },
    { bottom: '4%', left: '37%',   rotate: -4,  size: 148, opacity: 0.07 },
    { top: '64%',   right: '27%',  rotate: 16,  size: 102, opacity: 0.06 },
  ],
]

// Logo stays visible long enough for the 6.8s draw + ~3s glow hold
const HOLD_MS = 10800
const FADE_MS = 1.4 // seconds, for framer-motion transition
const GAP_MS  = 700 // ms gap between fade-out and appearing at next position

function FloatingLogo({
  positions,
  startDelay,
}: {
  positions: Pos[]
  startDelay: number
}) {
  const prefersReduced = useReducedMotion()
  const [idx, setIdx] = useState(0)
  // stamp changes on each position move, forcing AnimatePresence to treat
  // the new div as a different element so <img> remounts and SVG restarts
  const [stamp, setStamp] = useState(0)
  const [phase, setPhase] = useState<'hidden' | 'visible'>('hidden')

  const advance = useCallback(() => {
    setPhase('hidden')
    setTimeout(() => {
      setIdx(i => (i + 1) % positions.length)
      setStamp(s => s + 1)
      setPhase('visible')
    }, GAP_MS)
  }, [positions.length])

  // Initial appearance after staggered delay
  useEffect(() => {
    if (prefersReduced) return
    const t = setTimeout(() => setPhase('visible'), startDelay)
    return () => clearTimeout(t)
  }, [startDelay, prefersReduced])

  // Schedule next position change after the hold period
  useEffect(() => {
    if (prefersReduced || phase !== 'visible') return
    const t = setTimeout(advance, HOLD_MS)
    return () => clearTimeout(t)
  // stamp intentionally included so the timer resets each time we arrive at a new position
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, stamp, advance, prefersReduced])

  const pos = positions[idx]

  // Reduced motion: show first position statically, no cycling
  if (prefersReduced) {
    const p0 = positions[0]
    return (
      <div
        style={{
          position: 'absolute',
          top: p0.top,
          bottom: p0.bottom,
          left: p0.left,
          right: p0.right,
          transform: `rotate(${p0.rotate}deg)`,
          opacity: p0.opacity,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/assets/logos/logo-animated.svg"
          alt=""
          style={{ width: p0.size, height: 'auto', display: 'block' }}
        />
      </div>
    )
  }

  return (
    <AnimatePresence>
      {phase === 'visible' && (
        <motion.div
          key={stamp}
          initial={{ opacity: 0 }}
          animate={{ opacity: pos.opacity }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_MS, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: pos.top,
            bottom: pos.bottom,
            left: pos.left,
            right: pos.right,
            transform: `rotate(${pos.rotate}deg)`,
            pointerEvents: 'none',
          }}
        >
          <img
            src="/assets/logos/logo-animated.svg"
            alt=""
            style={{ width: pos.size, height: 'auto', display: 'block' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function HeroDotGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(103, 80, 164, 0.22) 1.2px, transparent 1.2px)',
        backgroundSize: '32px 32px',
      }}
    >
      {POSITION_SETS.map((positions, i) => (
        <FloatingLogo
          key={i}
          positions={positions}
          startDelay={i * 3600}
        />
      ))}
    </div>
  )
}
