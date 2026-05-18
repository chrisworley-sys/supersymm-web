import { useState } from 'react'

const OUTPUTS = [
  { label: 'LinkedIn', x: 110, y: 90 },
  { label: 'Email', x: 370, y: 90 },
  { label: 'Blog', x: 110, y: 300 },
  { label: 'Ad Copy', x: 370, y: 300 },
]

const SOURCE_X = 240, SOURCE_Y = 195
const SOURCE_W = 110, SOURCE_H = 80
const OUTPUT_W = 90, OUTPUT_H = 62

export default function ContentIllustration() {
  const [hovered, setHovered] = useState(false)

  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A source content block connected by lines to four channel-specific output blocks: LinkedIn, Email, Blog, and Ad Copy"
      className="w-full h-auto"
    >
      {/* Connecting lines from source to outputs */}
      {OUTPUTS.map((out) => (
        <line
          key={out.label}
          x1={SOURCE_X}
          y1={SOURCE_Y}
          x2={out.x}
          y2={out.y}
          stroke="var(--ss-pink)"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          opacity="0.75"
        />
      ))}

      {/* Output blocks */}
      {OUTPUTS.map((out) => (
        <g key={out.label}>
          <rect
            x={out.x - OUTPUT_W / 2}
            y={out.y - OUTPUT_H / 2}
            width={OUTPUT_W}
            height={OUTPUT_H}
            rx="10"
            fill="white"
            stroke={hovered ? 'var(--ss-purple)' : 'var(--ss-navy)'}
            strokeWidth="1.5"
            style={{ transition: 'stroke 0.2s ease' }}
          />
          {/* Content lines */}
          <rect
            x={out.x - OUTPUT_W / 2 + 10}
            y={out.y - 16}
            width={OUTPUT_W - 20}
            height="6"
            rx="3"
            fill={hovered ? 'var(--ss-purple)' : 'var(--ss-navy)'}
            opacity={hovered ? 0.2 : 0.12}
            style={{ transition: 'all 0.2s ease' }}
          />
          <rect
            x={out.x - OUTPUT_W / 2 + 10}
            y={out.y - 4}
            width={OUTPUT_W - 35}
            height="5"
            rx="2.5"
            fill="var(--ss-navy)"
            opacity="0.08"
          />
          <rect
            x={out.x - OUTPUT_W / 2 + 10}
            y={out.y + 7}
            width={OUTPUT_W - 26}
            height="5"
            rx="2.5"
            fill="var(--ss-navy)"
            opacity="0.08"
          />
          <text
            x={out.x}
            y={out.y + 24}
            textAnchor="middle"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fill={hovered ? 'var(--ss-purple)' : 'var(--ss-navy)'}
            opacity="0.6"
            style={{ transition: 'fill 0.2s ease' }}
          >
            {out.label}
          </text>
        </g>
      ))}

      {/* Source content block — centered */}
      <g
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ cursor: 'default' }}
      >
        <rect
          x={SOURCE_X - SOURCE_W / 2}
          y={SOURCE_Y - SOURCE_H / 2}
          width={SOURCE_W}
          height={SOURCE_H}
          rx="12"
          fill={hovered ? 'var(--ss-bg-purple-light)' : 'white'}
          stroke="var(--ss-navy)"
          strokeWidth="1.5"
          style={{ transition: 'fill 0.2s ease' }}
        />
        {/* Source label */}
        <text
          x={SOURCE_X}
          y={SOURCE_Y - 14}
          textAnchor="middle"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fill="var(--ss-navy)"
          letterSpacing="0.05em"
          opacity="0.5"
        >
          SOURCE
        </text>
        <text
          x={SOURCE_X}
          y={SOURCE_Y + 4}
          textAnchor="middle"
          fontSize="13"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fill="var(--ss-navy)"
        >
          Content
        </text>
        {/* Small arrow indicator */}
        <text
          x={SOURCE_X}
          y={SOURCE_Y + 22}
          textAnchor="middle"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          fill="var(--ss-pink)"
          fontWeight="600"
        >
          1 → 4
        </text>
      </g>
    </svg>
  )
}
