import { useState } from 'react'

const SOURCE = { x: 80, y: 195, w: 110, h: 70 }
const BRANCH_X = 240
const BRANCH_Y = 195
const OUTPUTS = [
  { x: 390, y: 100, label: 'Segment A', sublabel: 'RIA — Growth' },
  { x: 390, y: 195, label: 'Segment B', sublabel: 'RIA — Compliance' },
  { x: 390, y: 290, label: 'Segment C', sublabel: 'Healthcare' },
]
const OUT_W = 100, OUT_H = 60

export default function PersonalizationIllustration() {
  const [hoveredOutput, setHoveredOutput] = useState<number | null>(null)

  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="One source content piece branching into three differently-styled outputs for different audience segments"
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
          opacity={hoveredOutput !== null ? (hoveredOutput === i ? 1 : 0.25) : 0.7}
          style={{ transition: 'all 0.2s ease' }}
        />
      ))}

      {/* Branch node */}
      <circle
        cx={BRANCH_X}
        cy={BRANCH_Y}
        r="8"
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
        opacity="0.4"
        letterSpacing="0.06em"
      >
        SOURCE
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
        Content
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
            fontSize="10"
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
            fontSize="9"
            fontFamily="Inter, sans-serif"
            fill="var(--ss-navy)"
            opacity="0.45"
          >
            {out.sublabel}
          </text>
          {/* Content lines */}
          <rect
            x={out.x - OUT_W / 2 + 10}
            y={out.y + 17}
            width={OUT_W - 20}
            height="5"
            rx="2.5"
            fill="var(--ss-navy)"
            opacity="0.08"
          />
        </g>
      ))}
    </svg>
  )
}
