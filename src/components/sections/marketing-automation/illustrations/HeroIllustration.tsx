export default function HeroIllustration() {
  const cx = 240, cy = 185, r = 120
  const channels = [
    { label: 'LinkedIn', angle: -90 },
    { label: 'Email', angle: -30 },
    { label: 'Blog', angle: 30 },
    { label: 'Meta Ads', angle: 90 },
    { label: 'Instagram', angle: 150 },
    { label: 'Google Ads', angle: 210 },
  ]

  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="One content card connected by lines to six channel icons — LinkedIn, Email, Blog, Meta Ads, Instagram, and Google Ads"
      className="w-full h-auto"
    >
      {/* Pink spoke lines from card center to channel nodes */}
      {channels.map((ch) => {
        const rad = (ch.angle * Math.PI) / 180
        const nx = cx + r * Math.cos(rad)
        const ny = cy + r * Math.sin(rad)
        return (
          <line
            key={ch.label}
            x1={cx}
            y1={cy}
            x2={nx}
            y2={ny}
            stroke="var(--ss-pink)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.7"
          />
        )
      })}

      {/* Center card */}
      <rect
        x={cx - 80}
        y={cy - 55}
        width="160"
        height="110"
        rx="12"
        fill="white"
        stroke="var(--ss-navy)"
        strokeWidth="1.5"
      />
      {/* Card header line */}
      <rect x={cx - 60} y={cy - 35} width="85" height="7" rx="3.5" fill="var(--ss-navy)" opacity="0.18" />
      {/* Card body lines */}
      <rect x={cx - 60} y={cy - 18} width="70" height="6" rx="3" fill="var(--ss-navy)" opacity="0.10" />
      <rect x={cx - 60} y={cy - 6} width="80" height="6" rx="3" fill="var(--ss-navy)" opacity="0.10" />
      <rect x={cx - 60} y={cy + 6} width="55" height="6" rx="3" fill="var(--ss-navy)" opacity="0.10" />
      {/* One approval label */}
      <text
        x={cx}
        y={cy + 32}
        textAnchor="middle"
        fontSize="9"
        fontFamily="Inter, sans-serif"
        fontWeight="600"
        fill="var(--ss-purple)"
        letterSpacing="0.06em"
      >
        ONE APPROVAL
      </text>

      {/* Compliance badge — top-right of card */}
      <circle
        cx={cx + 72}
        cy={cy - 47}
        r="14"
        fill="#66CEB6"
        stroke="white"
        strokeWidth="2"
      />
      <polyline
        points={`${cx + 65},${cy - 47} ${cx + 70},${cy - 42} ${cx + 79},${cy - 53}`}
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Channel nodes */}
      {channels.map((ch) => {
        const rad = (ch.angle * Math.PI) / 180
        const nx = cx + r * Math.cos(rad)
        const ny = cy + r * Math.sin(rad)
        return (
          <g key={ch.label}>
            <circle
              cx={nx}
              cy={ny}
              r="26"
              fill="white"
              stroke="var(--ss-navy)"
              strokeWidth="1.5"
            />
            <text
              x={nx}
              y={ny + 4}
              textAnchor="middle"
              fontSize="9"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
              fill="var(--ss-navy)"
            >
              {ch.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
