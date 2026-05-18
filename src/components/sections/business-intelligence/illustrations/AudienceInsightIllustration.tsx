import { useRef, useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

// 500×500 coordinate space — renders ~1:1 px in the illustration column (~480px wide)
const COLS = [85, 250, 415]
const PERSONA_Y = 56
const CHIP_YS = [168, 256, 344]
const WIRE_TOP = 92
const WIRE_BOT = 418
const CARD_W = 148
const CARD_H = 68
const CHIP_W = 148
const CHIP_H = 30

const PERSONAS = [
  { tag: 'Persona 01', name: 'Pre-Retiree', av: 'P', avBg: '#22193B', avFg: '#fff',    accent: '#E977C1' },
  { tag: 'Persona 02', name: 'Founder',     av: 'F', avBg: '#22193B', avFg: '#fff',    accent: '#4C7BDE' },
  { tag: 'Persona 03', name: 'Inheritor',   av: 'I', avBg: '#D5F77C', avFg: '#22193B', accent: '#B0D050' },
]

type ChipDef = { txt: string; icon: React.ReactNode }
const CHIPS: ChipDef[][] = [
  [
    { txt: 'Volatility playbook', icon: <path d="M3 17h4l2-5 4 10 2-7h6" /> },
    { txt: '5-min async demo',    icon: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></> },
    { txt: 'Plain-English guide', icon: <><path d="M3 5h7a3 3 0 013 3v13"/><path d="M21 5h-7a3 3 0 00-3 3"/><path d="M3 19h7M21 19h-7"/></> },
  ],
  [
    { txt: 'Email + advisor call', icon: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></> },
    { txt: 'LinkedIn + podcast',   icon: <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3M8 21h8"/></> },
    { txt: 'SMS + Instagram',      icon: <><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></> },
  ],
  [
    { txt: 'Pre-RMD window',    icon: <><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></> },
    { txt: 'Funding milestone', icon: <><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 6-7"/></> },
    { txt: 'Beneficiary event', icon: <><circle cx="9" cy="9" r="3"/><path d="M3 20a6 6 0 0112 0"/><circle cx="17" cy="6" r="3"/><path d="M14 20a6 6 0 018-5.65"/></> },
  ],
]

const PULSE_DELAYS = [0.4, 1.6, 2.8]

export default function AudienceInsightIllustration() {
  const ref = useRef<HTMLDivElement>(null)
  const [animating, setAnimating] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) { setAnimating(true); return }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimating(true); io.disconnect() } },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [prefersReduced])

  return (
    <div ref={ref} style={{ width: '100%' }}>
      <svg
        viewBox="0 0 500 470"
        className="w-full h-auto block"
        role="img"
        aria-label="Three audience personas — Pre-Retiree, Founder, Inheritor — each with a tailored response strategy, channel, and timing trigger"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pa-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#DBDEF0" />
            <stop offset="60%"  stopColor="#D2D6ED" />
            <stop offset="100%" stopColor="#CDD2EA" />
          </linearGradient>
          <radialGradient id="pa-glow1" cx="78%" cy="15%" r="40%">
            <stop offset="0%" stopColor="#E977C1" stopOpacity="0.22" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pa-glow2" cx="14%" cy="92%" r="38%">
            <stop offset="0%" stopColor="#E977C1" stopOpacity="0.12" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pa-card-fill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.72)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.44)" />
          </linearGradient>
          <linearGradient id="pa-card-sheen" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="pa-chip-fill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.75)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.52)" />
          </linearGradient>
          <filter id="pa-pulse-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {COLS.map((cx, i) => (
            <path key={i} id={`pa-wire-${i}`} d={`M ${cx} ${WIRE_TOP} L ${cx} ${WIRE_BOT}`} />
          ))}
        </defs>

        {/* Background */}
        <rect width="500" height="470" rx="16" fill="url(#pa-bg)" />
        <rect width="500" height="470" rx="16" fill="url(#pa-glow1)" />
        <rect width="500" height="470" rx="16" fill="url(#pa-glow2)" />

        {/* Wires */}
        {COLS.map((cx, i) => (
          <line key={i} x1={cx} y1={WIRE_TOP} x2={cx} y2={WIRE_BOT}
            stroke="#E977C1" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
        ))}

        {/* Terminus dots */}
        {COLS.map((cx, i) => (
          <circle key={i} cx={cx} cy={WIRE_BOT} r="3" fill="#22193B" fillOpacity="0.50" />
        ))}

        {/* Pulse animations */}
        {animating && !prefersReduced && COLS.map((_cx, i) => (
          <circle key={i} r="3.2" fill="#D5F77C" filter="url(#pa-pulse-glow)" opacity="0">
            <animateMotion
              dur="6s"
              begin={`${PULSE_DELAYS[i]}s`}
              repeatCount="indefinite"
              keyPoints="0;0.96"
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href={`#pa-wire-${i}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0;0"
              keyTimes="0;0.04;0.76;0.90;1"
              dur="6s"
              begin={`${PULSE_DELAYS[i]}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* ── Persona cards ── */}
        {PERSONAS.map((p, i) => {
          const pcx = COLS[i]
          const rx = pcx - CARD_W / 2
          const ry = PERSONA_Y - CARD_H / 2
          const avCx = rx + 12 + 20   // left pad + avatar radius
          const metaX = rx + 12 + 40 + 9  // left pad + avatar diam + gap

          return (
            <g key={i}>
              {/* Glass card */}
              <rect x={rx} y={ry} width={CARD_W} height={CARD_H} rx="12"
                fill="url(#pa-card-fill)" stroke="rgba(34,25,59,0.48)" strokeWidth="1.5" />
              <rect x={rx + 1} y={ry + 1} width={CARD_W - 2} height={CARD_H * 0.44} rx="11"
                fill="url(#pa-card-sheen)" />

              {/* Avatar */}
              <circle cx={avCx} cy={PERSONA_Y} r="20" fill={p.avBg} />
              <circle cx={avCx} cy={PERSONA_Y} r="18.5" fill="none" stroke={p.accent} strokeWidth="2.5" opacity="0.88" />
              <circle cx={avCx} cy={PERSONA_Y} r="18.5" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" />
              <text x={avCx} y={PERSONA_Y} textAnchor="middle" dominantBaseline="central"
                fontFamily="Inter, sans-serif" fontSize="17" fontWeight="700" fill={p.avFg}>
                {p.av}
              </text>

              {/* Tag */}
              <text x={metaX} y={PERSONA_Y - 13} dominantBaseline="middle"
                fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700"
                fill="#0057B8" letterSpacing=".12em">
                {p.tag.toUpperCase()}
              </text>

              {/* Name in italic serif */}
              <text x={metaX} y={PERSONA_Y + 4} dominantBaseline="middle"
                fontFamily="Newsreader, serif" fontStyle="italic" fontSize="14" fontWeight="400"
                fill="#22193B">
                {p.name}
              </text>
            </g>
          )
        })}

        {/* ── Chip pills ── */}
        {CHIPS.map((row, ri) =>
          row.map((chip, ci) => {
            const pcx = COLS[ci]
            const pcy = CHIP_YS[ri]
            const rx = pcx - CHIP_W / 2
            const ry = pcy - CHIP_H / 2
            const iconCx = rx + 12 + 8   // left pad + icon half-width (16px/2)
            const txtX = iconCx + 8 + 8   // icon half + gap

            return (
              <g key={`${ri}-${ci}`}>
                {/* Glass pill */}
                <rect x={rx} y={ry} width={CHIP_W} height={CHIP_H} rx={CHIP_H / 2}
                  fill="url(#pa-chip-fill)" stroke="rgba(34,25,59,0.30)" strokeWidth="1" />
                <rect x={rx + 1} y={ry + 1} width={CHIP_W - 2} height={CHIP_H * 0.46} rx={CHIP_H / 2}
                  fill="rgba(255,255,255,0.32)" />

                {/* Icon: 24px Lucide scaled to 16px */}
                <g transform={`translate(${iconCx},${pcy}) scale(0.667) translate(-12,-12)`}
                  stroke="#22193B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
                  fill="none" opacity="0.68">
                  {chip.icon}
                </g>

                {/* Label */}
                <text x={txtX} y={pcy} dominantBaseline="middle"
                  fontFamily="Inter, sans-serif" fontSize="9.5" fontWeight="600"
                  fill="#22193B" letterSpacing=".03em">
                  {chip.txt}
                </text>
              </g>
            )
          })
        )}
      </svg>
    </div>
  )
}
