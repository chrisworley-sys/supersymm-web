import { useState } from 'react'

const LINE_POINTS = [
  [55, 330],
  [110, 285],
  [175, 255],
  [215, 245],
  [260, 175],
  [300, 195],
  [350, 130],
  [390, 100],
  [425, 80],
]

const TRIGGERS = [
  { x: 175, y: 255, label: 'Email sent' },
  { x: 260, y: 175, label: 'Sequence adjusted' },
  { x: 350, y: 130, label: 'Sales alerted' },
]

function polylinePoints(pts: number[][]) {
  return pts.map(([x, y]) => `${x},${y}`).join(' ')
}

export default function SmartTriggersIllustration() {
  const [hoveredTrigger, setHoveredTrigger] = useState<number | null>(null)

  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Lead score graph rising over time with three trigger points — Email sent, Sequence adjusted, and Sales alerted — ending at a Qualified marker"
      className="w-full h-auto"
    >
      {/* Axes */}
      <line x1="50" y1="340" x2="440" y2="340" stroke="var(--ss-navy)" strokeWidth="1" opacity="0.12" />
      <line x1="50" y1="60" x2="50" y2="340" stroke="var(--ss-navy)" strokeWidth="1" opacity="0.12" />

      {/* Axis labels */}
      <text x="245" y="365" textAnchor="middle" fontSize="10" fontFamily="Inter, sans-serif" fill="var(--ss-navy)" opacity="0.35" fontWeight="600" letterSpacing="0.06em">
        TIME
      </text>
      <text
        x="22"
        y="200"
        textAnchor="middle"
        fontSize="10"
        fontFamily="Inter, sans-serif"
        fill="var(--ss-navy)"
        opacity="0.35"
        fontWeight="600"
        letterSpacing="0.06em"
        transform="rotate(-90, 22, 200)"
      >
        LEAD SCORE
      </text>

      {/* Faint fill under line */}
      <polyline
        points={`50,340 ${polylinePoints(LINE_POINTS)} 425,340`}
        stroke="none"
        fill="var(--ss-purple)"
        opacity="0.05"
      />

      {/* Lead score line */}
      <polyline
        points={polylinePoints(LINE_POINTS)}
        stroke="var(--ss-purple)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Trigger points */}
      {TRIGGERS.map((trigger, i) => {
        const isHovered = hoveredTrigger === i
        return (
          <g
            key={i}
            onMouseEnter={() => setHoveredTrigger(i)}
            onMouseLeave={() => setHoveredTrigger(null)}
            style={{ cursor: 'default' }}
          >
            {/* Vertical drop line */}
            <line
              x1={trigger.x}
              y1={trigger.y}
              x2={trigger.x}
              y2={340}
              stroke="var(--ss-pink)"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity={isHovered ? 0.7 : 0.3}
              style={{ transition: 'opacity 0.15s ease' }}
            />
            {/* Trigger dot */}
            <circle
              cx={trigger.x}
              cy={trigger.y}
              r={isHovered ? 8 : 6}
              fill="white"
              stroke="var(--ss-pink)"
              strokeWidth={isHovered ? 2.5 : 2}
              style={{ transition: 'all 0.15s ease' }}
            />
            {/* Label bubble — visible on hover */}
            {isHovered && (
              <>
                <rect
                  x={trigger.x - 56}
                  y={trigger.y - 40}
                  width="112"
                  height="24"
                  rx="6"
                  fill="var(--ss-navy)"
                />
                <text
                  x={trigger.x}
                  y={trigger.y - 23}
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="Inter, sans-serif"
                  fontWeight="600"
                  fill="white"
                >
                  {trigger.label}
                </text>
              </>
            )}
            {/* Static number below axis */}
            {!isHovered && (
              <text
                x={trigger.x}
                y={354}
                textAnchor="middle"
                fontSize="8"
                fontFamily="Inter, sans-serif"
                fill="var(--ss-navy)"
                opacity="0.3"
              >
                {i + 1}
              </text>
            )}
          </g>
        )
      })}

      {/* Qualified star at end */}
      <circle cx="425" cy="80" r="15" fill="var(--ss-yellow)" opacity="0.9" />
      <text x="425" y="86" textAnchor="middle" fontSize="14" fill="var(--ss-navy)">★</text>
      <text
        x="425"
        y="63"
        textAnchor="middle"
        fontSize="9"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fill="var(--ss-navy)"
        opacity="0.5"
        letterSpacing="0.04em"
      >
        QUALIFIED
      </text>
    </svg>
  )
}
