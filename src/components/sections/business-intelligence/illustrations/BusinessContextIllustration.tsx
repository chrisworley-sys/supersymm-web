import { useReducedMotion } from 'framer-motion'

const CX = 280
const CY = 200
const ORBIT_R = 142
const HUB_R = 46
const CW = 112
const CH = 58

const toRad = (d: number) => d * Math.PI / 180

function cardEdgeDist(angleDeg: number, cw: number, ch: number) {
  const adx = Math.abs(Math.cos(toRad(angleDeg)))
  const ady = Math.abs(Math.sin(toRad(angleDeg)))
  const tx = adx > 1e-6 ? (cw / 2) / adx : Infinity
  const ty = ady > 1e-6 ? (ch / 2) / ady : Infinity
  return Math.min(tx, ty)
}

const NODES = [
  {
    label: 'Offers',
    angle: -90,
    iconPath: 'M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01',
  },
  {
    label: 'Compliance',
    angle: -30,
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4',
  },
  {
    label: 'Tone',
    angle: 30,
    iconPath: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
  },
  {
    label: 'Goals',
    angle: 90,
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z',
  },
  {
    label: 'Position',
    angle: 150,
    iconPath: 'M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6',
  },
  {
    label: 'Differentiators',
    angle: 210,
    iconPath: 'M12 2l2.09 6.42H21l-5.63 4.09 2.09 6.42L12 14.84l-5.45 4.09 2.09-6.42L3 8.42h6.91z',
  },
]

const PULSE_DUR = 5.5
const PULSE_DELAYS = [0, 0.92, 1.83, 2.75, 3.67, 4.58]

export default function BusinessContextIllustration() {
  const prefersReduced = useReducedMotion()

  return (
    <svg
      viewBox="0 0 560 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Business context hub connecting six dimensions — Offers, Compliance, Tone, Goals, Position, and Differentiators — into a central intelligence layer"
      className="w-full h-auto"
    >
      <defs>
        <radialGradient id="bc-bg1" cx="28%" cy="25%" r="55%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E977C1" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#D2D6ED" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bc-bg2" cx="75%" cy="80%" r="48%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#E977C1" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#D2D6ED" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bc-card-fill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="rgba(255,255,255,0.72)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.42)" />
        </linearGradient>
        <linearGradient id="bc-card-sheen" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <radialGradient id="bc-hub-grad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#3D2860" />
          <stop offset="100%" stopColor="#22193B" />
        </radialGradient>
        {/* Recolors the currentColor SVG mark to lime */}
        <filter id="bc-mark-lime" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feFlood floodColor="#D5F77C" result="lime" />
          <feComposite in="lime" in2="SourceAlpha" operator="in" />
        </filter>
        <filter id="bc-pulse-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bc-hub-shadow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="10" stdDeviation="18" floodColor="#0F0A1A" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="560" height="400" rx="16" fill="#D2D6ED" />
      <rect width="560" height="400" rx="16" fill="url(#bc-bg1)" />
      <rect width="560" height="400" rx="16" fill="url(#bc-bg2)" />

      {/* Wires + pulses */}
      {NODES.map((node, i) => {
        const rad = toRad(node.angle)
        const cos = Math.cos(rad)
        const sin = Math.sin(rad)
        const nx = CX + ORBIT_R * cos
        const ny = CY + ORBIT_R * sin
        const sx = CX + (HUB_R + 5) * cos
        const sy = CY + (HUB_R + 5) * sin
        const edgeDist = cardEdgeDist(node.angle, CW, CH)
        const ex = nx - (edgeDist + 8) * cos
        const ey = ny - (edgeDist + 8) * sin
        const pid = `bc-w${i}`

        return (
          <g key={i}>
            <path
              id={pid}
              d={`M ${sx.toFixed(1)} ${sy.toFixed(1)} L ${ex.toFixed(1)} ${ey.toFixed(1)}`}
              stroke="#E977C1"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              opacity="0.5"
            />
            {!prefersReduced && (
              <circle r="3.5" fill="#D5F77C" filter="url(#bc-pulse-glow)" opacity="0">
                <animateMotion
                  dur={`${PULSE_DUR}s`}
                  begin={`${PULSE_DELAYS[i]}s`}
                  repeatCount="indefinite"
                  keyPoints="1;0.04"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href={`#${pid}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;0.95;0.95;0"
                  keyTimes="0;0.12;0.82;1"
                  dur={`${PULSE_DUR}s`}
                  begin={`${PULSE_DELAYS[i]}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        )
      })}

      {/* Glass cards */}
      {NODES.map((node, i) => {
        const rad = toRad(node.angle)
        const nx = CX + ORBIT_R * Math.cos(rad)
        const ny = CY + ORBIT_R * Math.sin(rad)
        const rx = nx - CW / 2
        const ry = ny - CH / 2

        return (
          <g key={i}>
            <rect
              x={rx} y={ry} width={CW} height={CH} rx="8"
              fill="url(#bc-card-fill)"
              stroke="rgba(34,25,59,0.40)"
              strokeWidth="1.5"
            />
            {/* Glass sheen */}
            <rect
              x={rx + 1} y={ry + 1} width={CW - 2} height={CH * 0.38} rx="7"
              fill="url(#bc-card-sheen)"
            />
            {/* Icon (24px Lucide path scaled to 12px, centered at card upper zone) */}
            <g transform={`translate(${nx},${ny - 11}) scale(0.52) translate(-12,-12)`}>
              <path
                d={node.iconPath}
                stroke="#22193B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.65"
              />
            </g>
            {/* Label */}
            <text
              x={nx}
              y={ny + 15}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="8.5"
              fontWeight="700"
              fill="#22193B"
              letterSpacing="0.08em"
              opacity="0.85"
            >
              {node.label.toUpperCase()}
            </text>
          </g>
        )
      })}

      {/* Hub ambient glow */}
      <circle cx={CX} cy={CY} r={HUB_R + 20} fill="rgba(103,80,164,0.10)" />
      <circle cx={CX} cy={CY} r={HUB_R + 12} fill="rgba(103,80,164,0.12)" />

      {/* Hub body */}
      <circle cx={CX} cy={CY} r={HUB_R} fill="url(#bc-hub-grad)" filter="url(#bc-hub-shadow)" />
      <circle cx={CX} cy={CY} r={HUB_R} fill="none" stroke="rgba(213,247,124,0.28)" strokeWidth="1" />

      {/* SuperSymm mark — filter recolors currentColor SVG to lime */}
      <image
        href="/assets/supersym-mark-lime.svg"
        x={CX - 20}
        y={CY - 28}
        width="40"
        height="40"
        opacity="0.90"
        filter="url(#bc-mark-lime)"
      />

      {/* Hub label */}
      <text
        x={CX}
        y={CY + 24}
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="6.5"
        fontWeight="700"
        fill="#D5F77C"
        letterSpacing="0.12em"
      >
        YOUR BUSINESS
      </text>
    </svg>
  )
}
