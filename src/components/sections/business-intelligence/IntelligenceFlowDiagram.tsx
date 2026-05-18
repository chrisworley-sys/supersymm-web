interface Props {
  dark?: boolean
}

export default function IntelligenceFlowDiagram({ dark = false }: Props) {
  const nodeFill   = dark ? 'rgba(103,80,164,0.10)' : 'white'
  const nodeStroke = dark ? 'rgba(255,255,255,0.18)' : '#22193B'
  const textFill   = dark ? 'rgba(255,255,255,0.85)' : '#22193B'
  const lineColor  = dark ? 'rgba(255,255,255,0.18)' : '#22193B'
  const dotColor   = dark ? 'rgba(255,255,255,0.40)' : '#22193B'
  const arrowColor = '#E977C1'
  const labelColor = dark ? 'rgba(255,255,255,0.70)' : '#22193B'

  const arrowLineStyle = dark
    ? { strokeDasharray: '6 3', animation: 'dashFlow 1.2s linear infinite' as const }
    : {}

  return (
    <>
      {/* Desktop: horizontal layout */}
      <div className="hidden sm:block w-full">
        <svg
          viewBox="0 0 880 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Four intelligence inputs — business context, market intelligence, audience insight, and strategy generation — converging into every downstream campaign"
          className="w-full h-auto"
        >
          <defs>
            <marker id="bi-flow-pink-d" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill={arrowColor} />
            </marker>
          </defs>

          {/* Node 1 — Business Context */}
          <rect x="30" y="20" width="175" height="80" rx="8" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.5" />
          <text x="117.5" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">BUSINESS</text>
          <text x="117.5" y="73" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">CONTEXT</text>

          {/* Arrow 1 → 2 */}
          <line x1="207" y1="60" x2="241" y2="60" stroke={arrowColor} strokeWidth="2" markerEnd="url(#bi-flow-pink-d)" style={arrowLineStyle} />

          {/* Node 2 — Market Intelligence */}
          <rect x="245" y="20" width="175" height="80" rx="8" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.5" />
          <text x="332.5" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">MARKET</text>
          <text x="332.5" y="73" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">INTELLIGENCE</text>

          {/* Arrow 2 → 3 */}
          <line x1="422" y1="60" x2="456" y2="60" stroke={arrowColor} strokeWidth="2" markerEnd="url(#bi-flow-pink-d)" style={arrowLineStyle} />

          {/* Node 3 — Audience Insight */}
          <rect x="460" y="20" width="175" height="80" rx="8" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.5" />
          <text x="547.5" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">AUDIENCE</text>
          <text x="547.5" y="73" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">INSIGHT</text>

          {/* Arrow 3 → 4 */}
          <line x1="637" y1="60" x2="671" y2="60" stroke={arrowColor} strokeWidth="2" markerEnd="url(#bi-flow-pink-d)" style={arrowLineStyle} />

          {/* Node 4 — Strategy Generation */}
          <rect x="675" y="20" width="175" height="80" rx="8" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.5" />
          <text x="762.5" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">STRATEGY</text>
          <text x="762.5" y="73" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">GENERATION</text>

          {/* Aggregation: vertical lines from bottom of each node */}
          <line x1="117.5" y1="100" x2="117.5" y2="148" stroke={lineColor} strokeWidth="1" opacity="0.28" />
          <line x1="332.5" y1="100" x2="332.5" y2="148" stroke={lineColor} strokeWidth="1" opacity="0.28" />
          <line x1="547.5" y1="100" x2="547.5" y2="148" stroke={lineColor} strokeWidth="1" opacity="0.28" />
          <line x1="762.5" y1="100" x2="762.5" y2="148" stroke={lineColor} strokeWidth="1" opacity="0.28" />

          {/* Horizontal aggregation bar */}
          <line x1="117.5" y1="148" x2="762.5" y2="148" stroke={lineColor} strokeWidth="1" opacity="0.28" />

          {/* Center convergence dot */}
          <circle cx="440" cy="148" r="3" fill={dotColor} opacity="0.38" />

          {/* Downward arrow to label */}
          <line x1="440" y1="151" x2="440" y2="180" stroke={lineColor} strokeWidth="1.5" opacity="0.45" />
          <polygon points="434,178 446,178 440,188" fill={dotColor} opacity="0.45" />

          {/* Label */}
          <text
            x="440" y="205"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="13"
            fontWeight="700"
            fill={labelColor}
            opacity="0.7"
          >
            Every Campaign Downstream
          </text>
        </svg>
      </div>

      {/* Mobile: vertical layout */}
      <div className="block sm:hidden w-full" aria-hidden="true">
        <svg
          viewBox="0 0 320 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <marker id="bi-flow-pink-m-d" markerWidth="6" markerHeight="8" refX="3" refY="7" orient="90">
              <polygon points="0 0, 6 0, 3 8" fill={arrowColor} />
            </marker>
          </defs>

          {/* Node 1 */}
          <rect x="30" y="20" width="260" height="70" rx="8" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.5" />
          <text x="160" y="52" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">BUSINESS CONTEXT</text>

          {/* Arrow down 1→2 */}
          <line x1="160" y1="92" x2="160" y2="128" stroke={arrowColor} strokeWidth="2" markerEnd="url(#bi-flow-pink-m-d)" style={arrowLineStyle} />

          {/* Node 2 */}
          <rect x="30" y="130" width="260" height="70" rx="8" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.5" />
          <text x="160" y="162" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">MARKET INTELLIGENCE</text>

          {/* Arrow down 2→3 */}
          <line x1="160" y1="202" x2="160" y2="238" stroke={arrowColor} strokeWidth="2" markerEnd="url(#bi-flow-pink-m-d)" style={arrowLineStyle} />

          {/* Node 3 */}
          <rect x="30" y="240" width="260" height="70" rx="8" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.5" />
          <text x="160" y="272" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">AUDIENCE INSIGHT</text>

          {/* Arrow down 3→4 */}
          <line x1="160" y1="312" x2="160" y2="348" stroke={arrowColor} strokeWidth="2" markerEnd="url(#bi-flow-pink-m-d)" style={arrowLineStyle} />

          {/* Node 4 */}
          <rect x="30" y="350" width="260" height="70" rx="8" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.5" />
          <text x="160" y="382" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill={textFill} letterSpacing="0.08em">STRATEGY GENERATION</text>

          {/* Arrow down to label */}
          <line x1="160" y1="422" x2="160" y2="468" stroke={lineColor} strokeWidth="1.5" opacity="0.42" />
          <polygon points="154,466 166,466 160,476" fill={dotColor} opacity="0.42" />

          {/* Label */}
          <text
            x="160" y="500"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fontWeight="700"
            fill={labelColor}
            opacity="0.7"
          >
            Every Campaign
          </text>
          <text
            x="160" y="518"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="12"
            fontWeight="700"
            fill={labelColor}
            opacity="0.7"
          >
            Downstream
          </text>
        </svg>
      </div>
    </>
  )
}
