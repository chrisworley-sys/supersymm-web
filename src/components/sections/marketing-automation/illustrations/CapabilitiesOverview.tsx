const NODES = [
  { label: 'Persona\nIntelligence', anchor: '#persona' },
  { label: 'Content\nGeneration', anchor: '#content' },
  { label: 'Channel\nOptimization', anchor: '#channels' },
  { label: 'Hyper-\nPersonalization', anchor: '#personalization' },
  { label: 'Signal\nReaction', anchor: '#signals' },
  { label: 'Compliance\nBuilt In', anchor: '#compliance' },
]

const NODE_Y = 44
const LABEL_Y1 = 84
const LABEL_Y2 = 96
const NODE_R = 22
const SPACING = 110
const START_X = 55

export default function CapabilitiesOverview() {
  return (
    <div className="w-full overflow-x-auto" aria-hidden="true">
      <svg
        viewBox="0 0 720 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-w-[560px] h-auto"
      >
        {/* Connecting pink line */}
        <line
          x1={START_X}
          y1={NODE_Y}
          x2={START_X + SPACING * (NODES.length - 1)}
          y2={NODE_Y}
          stroke="var(--ss-pink)"
          strokeWidth="2"
        />

        {/* Nodes */}
        {NODES.map((node, i) => {
          const x = START_X + i * SPACING
          const lines = node.label.split('\n')
          return (
            <g key={node.label}>
              <a href={node.anchor}>
                <circle
                  cx={x}
                  cy={NODE_Y}
                  r={NODE_R}
                  fill="white"
                  stroke="var(--ss-navy)"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:stroke-[var(--ss-purple)] transition-colors"
                />
                <text
                  x={x}
                  y={LABEL_Y1}
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="Inter, sans-serif"
                  fontWeight="700"
                  fill="var(--ss-navy)"
                  letterSpacing="0.06em"
                >
                  {lines[0].toUpperCase()}
                </text>
                {lines[1] && (
                  <text
                    x={x}
                    y={LABEL_Y2 + 4}
                    textAnchor="middle"
                    fontSize="10"
                    fontFamily="Inter, sans-serif"
                    fontWeight="700"
                    fill="var(--ss-navy)"
                    letterSpacing="0.06em"
                  >
                    {lines[1].toUpperCase()}
                  </text>
                )}
                {/* Node number */}
                <text
                  x={x}
                  y={NODE_Y + 5}
                  textAnchor="middle"
                  fontSize="12"
                  fontFamily="Inter, sans-serif"
                  fontWeight="900"
                  fill="var(--ss-purple)"
                >
                  {String(i + 1).padStart(2, '0')}
                </text>
              </a>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
