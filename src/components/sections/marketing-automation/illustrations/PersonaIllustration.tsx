import { useState } from 'react'

const CARD_W = 300
const CARD_H = 195
const BASE_X = 90
const BASE_Y = 102

function PersonaCard({
  x,
  y,
  opacity,
  accentColor,
  label,
}: {
  x: number
  y: number
  opacity: number
  accentColor: string
  label: string
}) {
  return (
    <g style={{ opacity }}>
      <rect
        x={x}
        y={y}
        width={CARD_W}
        height={CARD_H}
        rx="12"
        fill="white"
        stroke="var(--ss-navy)"
        strokeWidth="1.5"
      />
      {/* Avatar circle */}
      <circle cx={x + 36} cy={y + 36} r="22" fill={accentColor} opacity="0.15" stroke="var(--ss-navy)" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx={x + 29} cy={y + 34} r="2.5" fill="var(--ss-navy)" />
      <circle cx={x + 43} cy={y + 34} r="2.5" fill="var(--ss-navy)" />
      {/* Mouth */}
      <path
        d={`M${x + 29},${y + 42} Q${x + 36},${y + 48} ${x + 43},${y + 42}`}
        fill="none"
        stroke="var(--ss-navy)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Name */}
      <text
        x={x + 72}
        y={y + 30}
        fontSize="13"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fill="var(--ss-navy)"
      >
        {label}
      </text>
      {/* Attribute lines */}
      <rect x={x + 72} y={y + 42} width="120" height="6" rx="3" fill="var(--ss-navy)" opacity="0.15" />
      <rect x={x + 72} y={y + 54} width="90" height="6" rx="3" fill="var(--ss-navy)" opacity="0.10" />
      <rect x={x + 72} y={y + 66} width="105" height="6" rx="3" fill="var(--ss-navy)" opacity="0.10" />
      {/* Divider */}
      <line
        x1={x + 20}
        y1={y + 84}
        x2={x + CARD_W - 20}
        y2={y + 84}
        stroke="var(--ss-navy)"
        strokeWidth="1"
        opacity="0.08"
      />
      {/* Data rows */}
      <rect x={x + 20} y={y + 100} width="60" height="6" rx="3" fill={accentColor} opacity="0.35" />
      <rect x={x + 90} y={y + 100} width="80" height="6" rx="3" fill="var(--ss-navy)" opacity="0.10" />
      <rect x={x + 20} y={y + 115} width="45" height="6" rx="3" fill={accentColor} opacity="0.25" />
      <rect x={x + 75} y={y + 115} width="95" height="6" rx="3" fill="var(--ss-navy)" opacity="0.10" />
      <rect x={x + 20} y={y + 130} width="70" height="6" rx="3" fill={accentColor} opacity="0.2" />
      <rect x={x + 100} y={y + 130} width="55" height="6" rx="3" fill="var(--ss-navy)" opacity="0.10" />
      {/* Channel preference tag */}
      <rect
        x={x + 20}
        y={y + 155}
        width="65"
        height="22"
        rx="11"
        fill={accentColor}
        opacity="0.12"
        stroke={accentColor}
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <text
        x={x + 52}
        y={y + 170}
        textAnchor="middle"
        fontSize="9"
        fontFamily="Inter, sans-serif"
        fontWeight="600"
        fill="var(--ss-navy)"
        opacity="0.6"
      >
        LinkedIn
      </text>
    </g>
  )
}

export default function PersonaIllustration() {
  const [hovered, setHovered] = useState(false)

  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Three layered persona profiles representing distinct audience segments"
      className="w-full h-auto cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Back card — fans right on hover */}
      <g
        style={{
          transform: hovered ? 'translate(28px, 8px) rotate(4deg)' : 'translate(16px, 16px) rotate(2deg)',
          transformOrigin: '240px 200px',
          transformBox: 'view-box',
          transition: 'transform 0.25s ease',
        }}
      >
        <PersonaCard
          x={BASE_X}
          y={BASE_Y}
          opacity={0.28}
          accentColor="var(--ss-pink)"
          label="Persona 03"
        />
      </g>

      {/* Middle card */}
      <g
        style={{
          transform: hovered ? 'translate(8px, 4px) rotate(1.5deg)' : 'translate(8px, 8px) rotate(1deg)',
          transformOrigin: '240px 200px',
          transformBox: 'view-box',
          transition: 'transform 0.25s ease',
        }}
      >
        <PersonaCard
          x={BASE_X}
          y={BASE_Y}
          opacity={0.55}
          accentColor="var(--ss-purple)"
          label="Persona 02"
        />
      </g>

      {/* Front card — lifts on hover */}
      <g
        style={{
          transform: hovered ? 'translate(0px, -6px)' : 'translate(0px, 0px)',
          transition: 'transform 0.25s ease',
        }}
      >
        <PersonaCard
          x={BASE_X}
          y={BASE_Y}
          opacity={1}
          accentColor="var(--ss-purple)"
          label="Persona 01"
        />
      </g>
    </svg>
  )
}
