const CX = 390
const CY = 215
const R = 78
const FAN_LX = CX - R   // 312
const FAN_RX = CX + R   // 468
const FAN_Y = CY        // 215
// Labels moved close enough to sphere that all text sits inside the opaque zone
// of the page-level CSS mask (fade boundary ≈ first/last 10% of rendered width).
const LLABEL_X = 220
const RLABEL_X = 560
const LABEL_YS = [74, 121, 168, 215, 262, 309, 356] as const

const LEFT_ITEMS = [
  'Personas / ICPs',
  'Brand Voice',
  'Business Goals',
  'Content Strategy',
  'Market Conditions',
  'Business Strategy',
  'Compliance / Reg',
]

const RIGHT_ITEMS = [
  'Social Posts',
  'Social Ads',
  'Search Ads',
  'Email Sequences',
  'Product Pages',
  'Landing Pages',
  'Events / Seminars',
]

const CLR_ORANGE = '#C4793A'
const CLR_BLUE   = '#4A72C8'

// Octagon r=60, pointy-top (−90°), vertices every 45°
const OCT_PTS = '390,155 432.43,172.57 450,215 432.43,257.43 390,275 347.57,257.43 330,215 347.57,172.57'
// Hexagon r=42, pointy-top (−90°), vertices every 60°
const HEX_PTS = '390,173 426.37,194 426.37,236 390,257 353.63,236 353.63,194'
const TRI1 = '390,173 426.37,236 353.63,236'
const TRI2 = '390,257 353.63,194 426.37,194'

// Particle animation: left delay = i×0.57s, right delay = i×0.57+1.8s.
// Particle reaches path end at 85% of 4s = 3.4s → right dot/text flash peaks at 86% keyframe.
const CSS = `
  @keyframes iai-flow {
    from { stroke-dashoffset: 0.2; }
    to   { stroke-dashoffset: -1;  }
  }
  .iai-particle {
    stroke-dasharray: 0.18 0.82;
    animation: iai-flow 4s linear infinite;
    animation-fill-mode: backwards;
  }

  /* Outer halo: slow organic drift + scale */
  @keyframes iai-halo-drift {
    0%   { opacity: 0.06; transform: translate(0px,   0px)  scale(1.00); }
    22%  { opacity: 0.18; transform: translate(9px,  -7px)  scale(1.05); }
    45%  { opacity: 0.09; transform: translate(-5px,  9px)  scale(0.95); }
    67%  { opacity: 0.22; transform: translate(10px,  5px)  scale(1.06); }
    82%  { opacity: 0.11; transform: translate(-7px, -5px)  scale(0.97); }
    100% { opacity: 0.06; transform: translate(0px,   0px)  scale(1.00); }
  }
  .iai-halo {
    transform-origin: 390px 215px;
    animation: iai-halo-drift 9s ease-in-out infinite;
  }

  /* Three independent inner core layers — different radii, colors, and rhythms.
     Each gradient has an offset cx/cy so drifting the circle shifts the perceived
     light-source position, creating the illusion of the gradient itself moving. */
  @keyframes iai-ca-drift {
    0%   { opacity: 0.14; transform: translate(0px,   0px);  }
    30%  { opacity: 0.30; transform: translate(-9px,  8px);  }
    65%  { opacity: 0.16; transform: translate(10px, -7px);  }
    100% { opacity: 0.14; transform: translate(0px,   0px);  }
  }
  .iai-ca {
    transform-origin: 390px 215px;
    animation: iai-ca-drift 7.0s ease-in-out infinite;
  }

  @keyframes iai-cb-drift {
    0%   { opacity: 0.22; transform: translate(0px,   0px);  }
    35%  { opacity: 0.42; transform: translate(8px,  -9px);  }
    70%  { opacity: 0.24; transform: translate(-8px,  6px);  }
    100% { opacity: 0.22; transform: translate(0px,   0px);  }
  }
  .iai-cb {
    transform-origin: 390px 215px;
    animation: iai-cb-drift 5.3s ease-in-out infinite;
  }

  @keyframes iai-cc-drift {
    0%   { opacity: 0.30; transform: translate(0px,   0px);  }
    40%  { opacity: 0.55; transform: translate(-6px, -10px); }
    80%  { opacity: 0.32; transform: translate(8px,   8px);  }
    100% { opacity: 0.30; transform: translate(0px,   0px);  }
  }
  .iai-cc {
    transform-origin: 390px 215px;
    animation: iai-cc-drift 4.1s ease-in-out infinite;
  }

  /* Right-side arrival flash: dot */
  @keyframes iai-dot-flash {
    0%,  82% { fill: rgba(74, 114, 200, 0.60); }
    86%      { fill: rgba(213, 247, 124, 1.00); }
    93%      { fill: rgba(213, 247, 124, 0.38); }
    100%     { fill: rgba(74, 114, 200, 0.60);  }
  }
  .iai-rdot {
    animation: iai-dot-flash 4s linear infinite;
    animation-fill-mode: backwards;
  }

  /* Right-side arrival flash: text */
  @keyframes iai-txt-flash {
    0%,  82% { fill: rgba(26,  42,  74, 1.0);  }
    86%      { fill: rgba(213, 247, 124, 1.0); }
    93%      { fill: rgba(70,  100,  30, 1.0); }
    100%     { fill: rgba(26,  42,  74, 1.0);  }
  }
  .iai-rtxt {
    animation: iai-txt-flash 4s linear infinite;
    animation-fill-mode: backwards;
  }

  @media (prefers-reduced-motion: reduce) {
    .iai-particle { animation: none !important; stroke-dasharray: 1; opacity: 0.28; }
    .iai-halo     { animation: none !important; opacity: 0.08; transform: none; }
    .iai-ca, .iai-cb, .iai-cc { animation: none !important; transform: none; }
    .iai-ca       { opacity: 0.18; }
    .iai-cb       { opacity: 0.26; }
    .iai-cc       { opacity: 0.32; }
    .iai-rdot     { animation: none !important; fill: rgba(74, 114, 200, 0.60) !important; }
    .iai-rtxt     { animation: none !important; fill: rgba(26, 42, 74, 1.0)    !important; }
  }
`

export default function IntelligentAutomationIllustration() {
  return (
    <svg
      viewBox="0 0 780 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        <radialGradient id="iai-sphere" cx="38%" cy="33%" r="70%">
          <stop offset="0%"   stopColor="#354270" />
          <stop offset="100%" stopColor="#1B0A20" />
        </radialGradient>

        {/* Outer halo */}
        <radialGradient id="iai-halo-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#6750A4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#6750A4" stopOpacity="0"    />
        </radialGradient>

        {/* Three inner core layers — offset cx/cy so drift looks like gradient movement */}
        <radialGradient id="iai-ca-grad" cx="38%" cy="36%" r="60%">
          <stop offset="0%"   stopColor="#8978BE" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8978BE" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="iai-cb-grad" cx="60%" cy="50%" r="55%">
          <stop offset="0%"   stopColor="#6750A4" stopOpacity="0.80" />
          <stop offset="100%" stopColor="#6750A4" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="iai-cc-grad" cx="45%" cy="64%" r="52%">
          <stop offset="0%"   stopColor="#B874CD" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#B874CD" stopOpacity="0"    />
        </radialGradient>

        <clipPath id="iai-clip">
          <circle cx={CX} cy={CY} r={R} />
        </clipPath>
      </defs>

      <style>{CSS}</style>

      {/* ── LEFT BASE LINES (static, dim) ── */}
      {LABEL_YS.map((y, i) => (
        <line key={`lb${i}`}
          x1={LLABEL_X} y1={y} x2={FAN_LX} y2={FAN_Y}
          stroke={CLR_ORANGE} strokeWidth={0.75} opacity={0.18}
        />
      ))}

      {/* ── LEFT FLOW PARTICLES (toward center) ── */}
      {LABEL_YS.map((y, i) => (
        <path key={`lf${i}`}
          d={`M ${LLABEL_X} ${y} L ${FAN_LX} ${FAN_Y}`}
          pathLength={1}
          stroke={CLR_ORANGE} strokeWidth={1.7} strokeLinecap="round"
          opacity={0.92}
          className="iai-particle"
          style={{ animationDelay: `${(i * 0.57).toFixed(2)}s` }}
        />
      ))}

      {/* ── RIGHT BASE LINES (static, dim) ── */}
      {LABEL_YS.map((y, i) => (
        <line key={`rb${i}`}
          x1={FAN_RX} y1={FAN_Y} x2={RLABEL_X} y2={y}
          stroke={CLR_BLUE} strokeWidth={0.75} opacity={0.18}
        />
      ))}

      {/* ── RIGHT FLOW PARTICLES (from center outward, +1.8s processing lag) ── */}
      {LABEL_YS.map((y, i) => (
        <path key={`rf${i}`}
          d={`M ${FAN_RX} ${FAN_Y} L ${RLABEL_X} ${y}`}
          pathLength={1}
          stroke={CLR_BLUE} strokeWidth={1.7} strokeLinecap="round"
          opacity={0.92}
          className="iai-particle"
          style={{ animationDelay: `${(i * 0.57 + 1.8).toFixed(2)}s` }}
        />
      ))}

      {/* ── OUTER HALO (drifting, behind sphere) ── */}
      <circle cx={CX} cy={CY} r={100} fill="url(#iai-halo-grad)" className="iai-halo" />

      {/* ── MAIN SPHERE ── */}
      <circle cx={CX} cy={CY} r={R} fill="url(#iai-sphere)" />

      {/* ── THREE-LAYER INNER GLOW + GEOMETRY (all clipped to sphere) ── */}
      <g clipPath="url(#iai-clip)">
        {/* Layer A: large, purple, slow — sets the base warmth */}
        <circle cx={CX} cy={CY} r={58} fill="url(#iai-ca-grad)" className="iai-ca" />
        {/* Layer B: medium, primary purple, medium speed */}
        <circle cx={CX} cy={CY} r={40} fill="url(#iai-cb-grad)" className="iai-cb" />
        {/* Layer C: small, violet/pink, fastest — creates the bright hot-spot */}
        <circle cx={CX} cy={CY} r={26} fill="url(#iai-cc-grad)" className="iai-cc" />

        {/* Geometric pattern on top of glow layers */}
        <g stroke="#D5F77C" strokeWidth={1.2} strokeLinecap="round" fill="none">
          <polygon points={OCT_PTS} />
          <polygon points={HEX_PTS} />
          <polygon points={TRI1} />
          <polygon points={TRI2} />
          {/* Center → each hexagon vertex */}
          <line x1={CX} y1={CY} x2={390}    y2={173}    />
          <line x1={CX} y1={CY} x2={426.37} y2={194}    />
          <line x1={CX} y1={CY} x2={426.37} y2={236}    />
          <line x1={CX} y1={CY} x2={390}    y2={257}    />
          <line x1={CX} y1={CY} x2={353.63} y2={236}    />
          <line x1={CX} y1={CY} x2={353.63} y2={194}    />
          {/* Octagon → hexagon bridge lines */}
          <line x1={390}    y1={155}    x2={390}    y2={173}    />
          <line x1={432.43} y1={172.57} x2={426.37} y2={194}    />
          <line x1={450}    y1={215}    x2={426.37} y2={194}    />
          <line x1={450}    y1={215}    x2={426.37} y2={236}    />
          <line x1={432.43} y1={257.43} x2={426.37} y2={236}    />
          <line x1={390}    y1={275}    x2={390}    y2={257}    />
          <line x1={347.57} y1={257.43} x2={353.63} y2={236}    />
          <line x1={330}    y1={215}    x2={353.63} y2={236}    />
          <line x1={330}    y1={215}    x2={353.63} y2={194}    />
          <line x1={347.57} y1={172.57} x2={353.63} y2={194}    />
        </g>
      </g>

      {/* Rim accent */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="#D5F77C" strokeWidth={0.6} opacity={0.22} />

      {/* Title removed per design update */}

      {/* ── LEFT LABELS (Roboto body font, static) ── */}
      {LEFT_ITEMS.map((label, i) => (
        <g key={`ll${i}`}>
          <circle cx={LLABEL_X} cy={LABEL_YS[i]} r={2.5} fill={CLR_ORANGE} opacity={0.60} />
          <text
            x={LLABEL_X - 9} y={LABEL_YS[i] + 4.5}
            textAnchor="end"
            fontFamily="Roboto, sans-serif" fontSize={12} fontWeight={500}
            fill="#2A1F0E"
          >{label}</text>
        </g>
      ))}

      {/* ── RIGHT LABELS (Roboto body font — dot + text flash yellow on particle arrival) ── */}
      {RIGHT_ITEMS.map((label, i) => {
        const delay = `${(i * 0.57 + 1.8).toFixed(2)}s`
        return (
          <g key={`rl${i}`}>
            <circle cx={RLABEL_X} cy={LABEL_YS[i]} r={2.5}
              className="iai-rdot"
              style={{ animationDelay: delay }}
            />
            <text
              x={RLABEL_X + 9} y={LABEL_YS[i] + 4.5}
              textAnchor="start"
              fontFamily="Roboto, sans-serif" fontSize={12} fontWeight={500}
              className="iai-rtxt"
              style={{ animationDelay: delay }}
            >{label}</text>
          </g>
        )
      })}
    </svg>
  )
}
