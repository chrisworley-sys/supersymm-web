interface GetFoundIllustrationProps {
  animationsDisabled?: boolean
}

export default function GetFoundIllustration({ animationsDisabled = false }: GetFoundIllustrationProps) {
  const channels = [
    { label: 'Search', angle: -90, symbol: '⌕' },
    { label: 'LinkedIn', angle: -30, symbol: 'in' },
    { label: 'Podcast', angle: 30, symbol: '◎' },
    { label: 'AI', angle: 90, symbol: '✦' },
    { label: 'Content', angle: 150, symbol: '✏' },
    { label: 'Social', angle: 210, symbol: '◈' },
  ]

  const cx = 240
  const cy = 200
  const radius = 140
  const iconSize = 34

  return (
    <>
      {!animationsDisabled && (
        <style>{`
          @keyframes gf-pulse-out {
            0%   { transform: translate(0, 0) scale(1); opacity: 1; }
            50%  { transform: translate(var(--gf-tx), var(--gf-ty)) scale(1.12); opacity: 0.8; }
            100% { transform: translate(0, 0) scale(1); opacity: 1; }
          }
          .gf-channel-group {
            transition: opacity 200ms ease;
          }
          .gf-illustration:hover .gf-channel-group:nth-child(1) { animation: gf-pulse-out 0.6s ease 0ms forwards; }
          .gf-illustration:hover .gf-channel-group:nth-child(2) { animation: gf-pulse-out 0.6s ease 150ms forwards; }
          .gf-illustration:hover .gf-channel-group:nth-child(3) { animation: gf-pulse-out 0.6s ease 300ms forwards; }
          .gf-illustration:hover .gf-channel-group:nth-child(4) { animation: gf-pulse-out 0.6s ease 450ms forwards; }
          .gf-illustration:hover .gf-channel-group:nth-child(5) { animation: gf-pulse-out 0.6s ease 600ms forwards; }
          .gf-illustration:hover .gf-channel-group:nth-child(6) { animation: gf-pulse-out 0.6s ease 750ms forwards; }
        `}</style>
      )}
      <svg
        viewBox="0 0 480 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        className="gf-illustration"
        aria-label="Business node with channel signals radiating to six channels"
        role="img"
      >
        {/* Radiating lines from center to channels */}
        {channels.map((ch, i) => {
          const rad = (ch.angle * Math.PI) / 180
          const x2 = cx + Math.cos(rad) * radius
          const y2 = cy + Math.sin(rad) * radius
          return (
            <line
              key={ch.label + '-line'}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke="#E977C1"
              strokeWidth="1.5"
              opacity={0.45 + i * 0.05}
              strokeDasharray="4 3"
            />
          )
        })}

        {/* Central business node */}
        <circle cx={cx} cy={cy} r="36" stroke="#22193B" strokeWidth="1.5" fill="rgba(34,25,59,0.06)" />
        <circle cx={cx} cy={cy} r="24" stroke="#22193B" strokeWidth="1" fill="rgba(34,25,59,0.04)" opacity="0.4" />
        <text
          x={cx}
          y={cy + 6}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="13"
          fill="#22193B"
        >
          YOUR
        </text>
        <text
          x={cx}
          y={cy + 20}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="13"
          fill="#22193B"
        >
          FIRM
        </text>

        {/* Channel icons */}
        {channels.map((ch) => {
          const rad = (ch.angle * Math.PI) / 180
          const x = cx + Math.cos(rad) * radius
          const y = cy + Math.sin(rad) * radius
          const outX = (Math.cos(rad) * 10).toFixed(1)
          const outY = (Math.sin(rad) * 10).toFixed(1)
          return (
            <g
              key={ch.label}
              className="gf-channel-group"
              style={{
                '--gf-tx': `${outX}px`,
                '--gf-ty': `${outY}px`,
              } as React.CSSProperties}
            >
              <rect
                x={x - iconSize / 2}
                y={y - iconSize / 2}
                width={iconSize}
                height={iconSize}
                rx="8"
                stroke="#22193B"
                strokeWidth="1.5"
                fill="white"
              />
              <text
                x={x}
                y={y - 4}
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="11"
                fill="#22193B"
              >
                {ch.symbol}
              </text>
              <text
                x={x}
                y={y + 9}
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontWeight="400"
                fontSize="9"
                fill="rgba(34,25,59,0.65)"
              >
                {ch.label}
              </text>
            </g>
          )
        })}
      </svg>
    </>
  )
}
