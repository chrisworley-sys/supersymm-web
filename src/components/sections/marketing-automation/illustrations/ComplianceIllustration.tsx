import { useState } from 'react'

const CARD_X = 110, CARD_Y = 100, CARD_W = 260, CARD_H = 210

export default function ComplianceIllustration() {
  const [hovered, setHovered] = useState(false)

  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A content card with a compliance check badge and archived timestamp, backed by a shield representing regulatory protection"
      className="w-full h-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shield background — protective layer */}
      <path
        d="M240,42 L340,80 L340,190 Q340,280 240,330 Q140,280 140,190 L140,80 Z"
        fill="var(--ss-purple)"
        opacity={hovered ? 0.1 : 0.05}
        style={{ transition: 'opacity 0.3s ease' }}
      />
      <path
        d="M240,42 L340,80 L340,190 Q340,280 240,330 Q140,280 140,190 L140,80 Z"
        fill="none"
        stroke="var(--ss-purple)"
        strokeWidth="2"
        opacity={hovered ? 0.3 : 0.14}
        style={{ transition: 'opacity 0.3s ease' }}
      />

      {/* Content card */}
      <rect
        x={CARD_X}
        y={CARD_Y}
        width={CARD_W}
        height={CARD_H}
        rx="12"
        fill="white"
        stroke="var(--ss-navy)"
        strokeWidth="1.5"
      />

      {/* Card header */}
      <rect
        x={CARD_X}
        y={CARD_Y}
        width={CARD_W}
        height="48"
        rx="12"
        fill="var(--ss-navy)"
        opacity="0.04"
      />
      <rect
        x={CARD_X}
        y={CARD_Y + 36}
        width={CARD_W}
        height="12"
        fill="var(--ss-navy)"
        opacity="0.04"
      />
      <text
        x={CARD_X + 20}
        y={CARD_Y + 28}
        fontSize="11"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fill="var(--ss-navy)"
        opacity="0.6"
        letterSpacing="0.04em"
      >
        Q4 Newsletter — Draft
      </text>

      {/* Content text lines */}
      <rect x={CARD_X + 20} y={CARD_Y + 66} width={CARD_W - 40} height="8" rx="4" fill="var(--ss-navy)" opacity="0.12" />
      <rect x={CARD_X + 20} y={CARD_Y + 82} width={CARD_W - 60} height="8" rx="4" fill="var(--ss-navy)" opacity="0.09" />
      <rect x={CARD_X + 20} y={CARD_Y + 98} width={CARD_W - 40} height="8" rx="4" fill="var(--ss-navy)" opacity="0.09" />
      <rect x={CARD_X + 20} y={CARD_Y + 114} width={CARD_W - 70} height="8" rx="4" fill="var(--ss-navy)" opacity="0.09" />
      <rect x={CARD_X + 20} y={CARD_Y + 130} width={CARD_W - 50} height="8" rx="4" fill="var(--ss-navy)" opacity="0.07" />
      <rect x={CARD_X + 20} y={CARD_Y + 146} width={CARD_W - 40} height="8" rx="4" fill="var(--ss-navy)" opacity="0.07" />

      {/* Divider */}
      <line
        x1={CARD_X + 20}
        y1={CARD_Y + 172}
        x2={CARD_X + CARD_W - 20}
        y2={CARD_Y + 172}
        stroke="var(--ss-navy)"
        strokeWidth="1"
        opacity="0.08"
      />

      {/* Archived timestamp */}
      <text
        x={CARD_X + 20}
        y={CARD_Y + 194}
        fontSize="10"
        fontFamily="Inter, sans-serif"
        fontWeight="600"
        fill="var(--ss-navy)"
        opacity="0.35"
        letterSpacing="0.04em"
      >
        ✓ Archived · {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </text>

      {/* Compliance badge — top-right corner of card, pulses on hover */}
      <g>
        <circle
          cx={CARD_X + CARD_W - 20}
          cy={CARD_Y + 20}
          r="22"
          fill="var(--ss-yellow)"
          stroke="white"
          strokeWidth="2"
          opacity={hovered ? 1 : 0.9}
          style={{
            transition: 'opacity 0.15s ease',
            filter: hovered ? 'drop-shadow(0 0 6px rgba(213, 247, 124, 0.6))' : 'none',
          }}
        />
        {/* Checkmark */}
        <polyline
          points={`${CARD_X + CARD_W - 30},${CARD_Y + 20} ${CARD_X + CARD_W - 22},${CARD_Y + 27} ${CARD_X + CARD_W - 10},${CARD_Y + 13}`}
          fill="none"
          stroke="var(--ss-navy)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Badge label */}
        <text
          x={CARD_X + CARD_W - 20}
          y={CARD_Y + 52}
          textAnchor="middle"
          fontSize="8"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fill="var(--ss-navy)"
          opacity="0.45"
          letterSpacing="0.04em"
        >
          COMPLIANT
        </text>
      </g>
    </svg>
  )
}
