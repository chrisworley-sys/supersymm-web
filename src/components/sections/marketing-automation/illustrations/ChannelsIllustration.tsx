import { useState } from 'react'

const STAGES = [
  { label: 'AWARENESS', channels: ['Social'], y: 56, leftX: 60, rightX: 420 },
  { label: 'INTEREST', channels: ['Search', 'Content'], y: 148, leftX: 100, rightX: 380 },
  { label: 'CONSIDERATION', channels: ['Email'], y: 240, leftX: 140, rightX: 340 },
  { label: 'DECISION', channels: ['Paid'], y: 332, leftX: 180, rightX: 300 },
]

const STAGE_H = 80

export default function ChannelsIllustration() {
  const [activeStage, setActiveStage] = useState<number | null>(null)

  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Marketing funnel with four stages — Awareness, Interest, Consideration, and Decision — showing which channels operate at each stage"
      className="w-full h-auto"
    >
      {/* Funnel trapezoids */}
      {STAGES.map((stage, i) => {
        const nextStage = STAGES[i + 1]
        const bottomLeft = nextStage ? nextStage.leftX : stage.leftX + 20
        const bottomRight = nextStage ? nextStage.rightX : stage.rightX - 20
        const isActive = activeStage === i
        return (
          <g key={stage.label} onMouseEnter={() => setActiveStage(i)} onMouseLeave={() => setActiveStage(null)}>
            <path
              d={`M${stage.leftX},${stage.y} L${stage.rightX},${stage.y} L${bottomRight},${stage.y + STAGE_H} L${bottomLeft},${stage.y + STAGE_H} Z`}
              fill={isActive ? 'var(--ss-bg-purple-light)' : 'white'}
              stroke={isActive ? 'var(--ss-purple)' : 'var(--ss-navy)'}
              strokeWidth="1.5"
              style={{ transition: 'all 0.2s ease', cursor: 'default' }}
            />
            {/* Stage label */}
            <text
              x={240}
              y={stage.y + 26}
              textAnchor="middle"
              fontSize="10"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fill={isActive ? 'var(--ss-purple)' : 'var(--ss-navy)'}
              letterSpacing="0.08em"
              opacity={isActive ? 1 : 0.5}
              style={{ transition: 'fill 0.2s ease' }}
            >
              {stage.label}
            </text>
            {/* Channel tags */}
            {stage.channels.map((ch, ci) => {
              const tagX = 240 + (ci - (stage.channels.length - 1) / 2) * 80
              return (
                <g key={ch}>
                  <rect
                    x={tagX - 28}
                    y={stage.y + 38}
                    width="56"
                    height="20"
                    rx="10"
                    fill={isActive ? 'var(--ss-yellow)' : 'var(--ss-navy)'}
                    opacity={isActive ? 0.9 : 0.08}
                    style={{ transition: 'all 0.2s ease' }}
                  />
                  <text
                    x={tagX}
                    y={stage.y + 52}
                    textAnchor="middle"
                    fontSize="9"
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                    fill={isActive ? 'var(--ss-navy)' : 'var(--ss-navy)'}
                    opacity={isActive ? 1 : 0.45}
                    style={{ transition: 'all 0.2s ease' }}
                  >
                    {ch}
                  </text>
                </g>
              )
            })}
          </g>
        )
      })}

      {/* Yellow downward arrow */}
      <g>
        <line
          x1={430}
          y1={80}
          x2={430}
          y2={340}
          stroke="var(--ss-yellow)"
          strokeWidth="2"
          opacity="0.8"
        />
        <polygon
          points="422,334 430,350 438,334"
          fill="var(--ss-yellow)"
          opacity="0.8"
        />
        <text
          x={448}
          y={215}
          textAnchor="middle"
          fontSize="9"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          fill="var(--ss-yellow)"
          opacity="0.8"
          transform="rotate(90, 448, 215)"
        >
          JOURNEY
        </text>
      </g>
    </svg>
  )
}
