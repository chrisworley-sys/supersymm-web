import { useState } from 'react'

const SOURCE = { x: 60, y: 185, w: 110, h: 70 }
const BRANCH_X = 230
const BRANCH_Y = 210
const OUTPUTS = [
  { x: 390, y: 95, label: 'Nurture Flow', sublabel: 'Warm prospect' },
  { x: 390, y: 210, label: 'Re-engagement', sublabel: 'Gone quiet' },
  { x: 390, y: 325, label: 'Sales Ready', sublabel: 'Hot lead' },
]
const OUT_W = 110, OUT_H = 62

export default function JourneyIllustration() {
  const [hoveredOutput, setHoveredOutput] = useState<number | null>(null)

  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A single prospect source branching into three distinct journey paths — Nurture Flow, Re-engagement, and Sales Ready — based on behavioral signals"
      className="w-full h-auto"
    >
      {/* Source to branch line */}
      <line
        x1={SOURCE.x + SOURCE.w}
        y1={SOURCE.y + SOURCE.h / 2}
        x2={BRANCH_X}
        y2={BRANCH_Y}
        stroke="var(--ss-pink)"
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* Branch lines to outputs */}
      {OUTPUTS.map((out, i) => (
        <line
          key={i}
          x1={BRANCH_X}
          y1={BRANCH_Y}
          x2={out.x - OUT_W / 2}
          y2={out.y}
          stroke="var(--ss-pink)"
          strokeWidth={hoveredOutput === i ? 2.5 : 1.5}
          opacity={hoveredOutput !== null ? (hoveredOutput === i ? 1 : 0.2) : 0.65}
          style={{ transition: 'all 0.2s ease' }}
        />
      ))}

      {/* Branch node */}
      <circle
        cx={BRANCH_X}
        cy={BRANCH_Y}
        r="7"
        fill="white"
        stroke="var(--ss-pink)"
        strokeWidth="2"
      />

      {/* Source block */}
      <rect
        x={SOURCE.x}
        y={SOURCE.y}
        width={SOURCE.w}
        height={SOURCE.h}
        rx="12"
        fill="white"
        stroke="var(--ss-navy)"
        strokeWidth="1.5"
      />
      <text
        x={SOURCE.x + SOURCE.w / 2}
        y={SOURCE.y + 22}
        textAnchor="middle"
        fontSize="10"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fill="var(--ss-navy)"
        opacity="0.38"
        letterSpacing="0.06em"
      >
        PROSPECT
      </text>
      <text
        x={SOURCE.x + SOURCE.w / 2}
        y={SOURCE.y + 40}
        textAnchor="middle"
        fontSize="12"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fill="var(--ss-navy)"
      >
        Engages
      </text>
      <rect
        x={SOURCE.x + 16}
        y={SOURCE.y + 50}
        width={SOURCE.w - 32}
        height="5"
        rx="2.5"
        fill="var(--ss-navy)"
        opacity="0.1"
      />

      {/* Output cards */}
      {OUTPUTS.map((out, i) => (
        <g
          key={i}
          onMouseEnter={() => setHoveredOutput(i)}
          onMouseLeave={() => setHoveredOutput(null)}
          style={{ cursor: 'default' }}
        >
          <rect
            x={out.x - OUT_W / 2}
            y={out.y - OUT_H / 2}
            width={OUT_W}
            height={OUT_H}
            rx="10"
            fill={hoveredOutput === i ? 'var(--ss-bg-purple-light)' : 'white'}
            stroke={hoveredOutput === i ? 'var(--ss-purple)' : 'var(--ss-navy)'}
            strokeWidth="1.5"
            style={{ transition: 'all 0.2s ease' }}
          />
          <text
            x={out.x}
            y={out.y - 10}
            textAnchor="middle"
            fontSize="11"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fill={hoveredOutput === i ? 'var(--ss-purple)' : 'var(--ss-navy)'}
            style={{ transition: 'fill 0.2s ease' }}
          >
            {out.label}
          </text>
          <text
            x={out.x}
            y={out.y + 8}
            textAnchor="middle"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            fill="var(--ss-navy)"
            opacity="0.4"
          >
            {out.sublabel}
          </text>
          <rect
            x={out.x - OUT_W / 2 + 12}
            y={out.y + 18}
            width={OUT_W - 24}
            height="5"
            rx="2.5"
            fill="var(--ss-navy)"
            opacity="0.07"
          />
        </g>
      ))}
    </svg>
  )
}
