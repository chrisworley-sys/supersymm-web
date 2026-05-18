import type { CSSProperties } from 'react'
import { useReducedMotion } from 'framer-motion'

const COMPETITORS = [
  { cx: 350, cy: 175, r: 9, n: 1 },
  { cx: 440, cy: 260, r: 9, n: 2 },
  { cx: 380, cy: 430, r: 9, n: 3 },
  { cx: 280, cy: 540, r: 9, n: 4 },
  { cx: 490, cy: 525, r: 9, n: 5 },
  { cx: 900, cy: 425, r: 9, n: 6 },
  { cx: 820, cy: 510, r: 9, n: 7 },
  { cx: 755, cy: 295, r: 7, n: 8, interloper: true },
]

// Using mi- prefix to avoid conflicts with other SVG animations on the page
const ANIM_CSS = `
  @keyframes mi-opp-breath { 0%,100%{opacity:.85} 50%{opacity:1} }
  @keyframes mi-dot-pulse  { 0%,100%{opacity:.7}  50%{opacity:1} }
  @keyframes mi-dot-drift  { 0%{translate:0 0} 25%{translate:4px -3px} 50%{translate:-2px 4px} 75%{translate:-3px -2px} 100%{translate:0 0} }
  @keyframes mi-you-beat   { 0%,100%{transform:scale(1);   filter:drop-shadow(0 0 6px rgba(233,119,193,.55)) drop-shadow(0 0 14px rgba(233,119,193,.35))}
                              50%   {transform:scale(1.05); filter:drop-shadow(0 0 10px rgba(233,119,193,.75)) drop-shadow(0 0 22px rgba(233,119,193,.45))} }
  @keyframes mi-halo-beat  { 0%,100%{transform:scale(1);  fill-opacity:.10} 50%{transform:scale(1.2); fill-opacity:.18} }
  @keyframes mi-radar-ping { 0%{transform:scale(.5); opacity:.9; stroke-width:1.3} 60%{opacity:.3} 100%{transform:scale(4.2); opacity:0; stroke-width:.4} }

  .mi-opp  { animation: mi-opp-breath 7s ease-in-out infinite; }
  .mi-comp { transform-box:fill-box; transform-origin:center;
             animation: mi-dot-pulse 4.5s ease-in-out infinite, mi-dot-drift 13s ease-in-out infinite; }
  .mi-c1   { animation-delay:0s,   0s;   }
  .mi-c2   { animation-delay:.8s,  1.4s; }
  .mi-c3   { animation-delay:1.6s, 2.8s; }
  .mi-c4   { animation-delay:2.4s, 4.2s; }
  .mi-c5   { animation-delay:3.2s, 5.6s; }
  .mi-c6   { animation-delay:4.0s, 7.0s; }
  .mi-c7   { animation-delay:4.8s, 8.4s; }
  .mi-c8   { animation-delay:5.6s, 1.0s; }
  .mi-you  { transform-box:fill-box; transform-origin:center; animation: mi-you-beat 3.4s ease-in-out infinite; }
  .mi-halo { transform-box:fill-box; transform-origin:center; animation: mi-halo-beat 3.4s ease-in-out infinite; }
  .mi-ping { animation: mi-radar-ping 4.2s cubic-bezier(.2,.6,.4,1) infinite; }
  .mi-p2   { animation-delay:1.05s; }
  .mi-p3   { animation-delay:2.1s;  }
  .mi-p4   { animation-delay:3.15s; }
`

const PLATE_STYLE: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '7px',
  padding: '6px 11px',
  borderRadius: '999px',
  background: 'rgba(255,255,255,0.60)',
  border: '1px solid rgba(34,25,59,0.30)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85), 0 8px 20px -12px rgba(34,25,59,0.30)',
  backdropFilter: 'blur(8px) saturate(120%)',
  WebkitBackdropFilter: 'blur(8px) saturate(120%)',
  whiteSpace: 'nowrap',
}

const LABEL_STYLE: CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '10.5px',
  fontWeight: 600,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: '#22193B',
}

export default function MarketIntelligenceIllustration() {
  const prefersReduced = useReducedMotion()

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <svg
        viewBox="0 0 1200 760"
        className="w-full h-auto block"
        role="img"
        aria-label="Market positioning chart showing competitor landscape with opportunity space in the upper-right quadrant"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {!prefersReduced && <style>{ANIM_CSS}</style>}

          <pattern id="mi-grid" x="180" y="90" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="1.2" fill="#22193B" fillOpacity="0.16" />
          </pattern>

          <radialGradient id="mi-opp-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#D5F77C" stopOpacity="0.85" />
            <stop offset="55%"  stopColor="#D5F77C" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D5F77C" stopOpacity="0" />
          </radialGradient>

          <clipPath id="mi-chart-area">
            <rect x="180" y="60" width="930" height="580" />
          </clipPath>
        </defs>

        {/* Lime opportunity blob */}
        <ellipse
          cx="850" cy="230" rx="260" ry="165"
          fill="url(#mi-opp-grad)"
          className={prefersReduced ? undefined : 'mi-opp'}
          opacity={prefersReduced ? 0.9 : undefined}
        />

        {/* Dot-grid backdrop (clipped to chart area) */}
        <rect
          clipPath="url(#mi-chart-area)"
          x="180" y="60" width="930" height="580"
          fill="url(#mi-grid)"
        />

        {/* Dashed quadrant dividers */}
        <line x1="630" y1="90"  x2="630"  y2="620" stroke="#22193B" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 8" strokeLinecap="round" />
        <line x1="180" y1="355" x2="1080" y2="355" stroke="#22193B" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 8" strokeLinecap="round" />

        {/* Solid axes */}
        <line x1="180" y1="620" x2="180"  y2="82"  stroke="#22193B" strokeOpacity="0.55" strokeWidth="1" strokeLinecap="round" />
        <line x1="180" y1="620" x2="1090" y2="620" stroke="#22193B" strokeOpacity="0.55" strokeWidth="1" strokeLinecap="round" />

        {/* Y-axis ticks */}
        {([487.5, 355, 222.5, 90] as const).map(y => (
          <line key={y} x1="172" y1={y} x2="180" y2={y} stroke="#22193B" strokeOpacity="0.35" strokeWidth="1" strokeLinecap="round" />
        ))}
        {/* X-axis ticks */}
        {([405, 630, 855, 1080] as const).map(x => (
          <line key={x} x1={x} y1="620" x2={x} y2="628" stroke="#22193B" strokeOpacity="0.35" strokeWidth="1" strokeLinecap="round" />
        ))}

        {/* Axis labels */}
        <text
          x="84" y="355"
          textAnchor="middle"
          transform="rotate(-90 84 355)"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fontWeight="600"
          letterSpacing=".14em"
          fill="#22193B"
          fillOpacity="0.65"
        >
          MARKET PRESENCE
        </text>
        <text
          x="630" y="700"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fontWeight="600"
          letterSpacing=".14em"
          fill="#22193B"
          fillOpacity="0.65"
        >
          VALUE PROPOSITION
        </text>

        {/* Competitor dots */}
        {COMPETITORS.map((c) => (
          <circle
            key={c.n}
            cx={c.cx} cy={c.cy} r={c.r}
            fill="#22193B"
            fillOpacity={c.interloper ? 0.28 : 0.42}
            stroke="rgba(34,25,59,0.85)"
            strokeWidth="0.8"
            strokeOpacity="0.25"
            className={prefersReduced ? undefined : `mi-comp mi-c${c.n}`}
          />
        ))}

        {/* YOU — halo, radar rings, dot */}
        <circle
          cx="845" cy="230" r="48"
          fill="#E977C1"
          fillOpacity="0.12"
          className={prefersReduced ? undefined : 'mi-halo'}
        />
        {!prefersReduced && (
          <>
            <circle className="mi-ping"    cx="845" cy="230" r="24" fill="none" stroke="#E977C1" strokeWidth="1" />
            <circle className="mi-ping mi-p2" cx="845" cy="230" r="24" fill="none" stroke="#E977C1" strokeWidth="1" />
            <circle className="mi-ping mi-p3" cx="845" cy="230" r="24" fill="none" stroke="#E977C1" strokeWidth="1" />
            <circle className="mi-ping mi-p4" cx="845" cy="230" r="24" fill="none" stroke="#E977C1" strokeWidth="1" />
          </>
        )}
        <circle
          cx="845" cy="230" r="16"
          fill="#E977C1"
          className={prefersReduced ? undefined : 'mi-you'}
          style={prefersReduced ? { filter: 'drop-shadow(0 0 6px rgba(233,119,193,.55)) drop-shadow(0 0 16px rgba(233,119,193,.35))' } : undefined}
        />
      </svg>

      {/* Glass pill — YOU (positioned over the pink dot) */}
      <div style={{ position: 'absolute', left: '70.4%', top: '38%', transform: 'translate(-50%, -50%)' }}>
        <div style={PLATE_STYLE}>
          <span style={{ width: 10, height: 10, borderRadius: '999px', background: '#E977C1', boxShadow: '0 0 6px rgba(233,119,193,.7)', flexShrink: 0 }} />
          <span style={LABEL_STYLE}>You</span>
        </div>
      </div>

      {/* Glass pill — Opportunity space */}
      <div style={{ position: 'absolute', left: '86%', top: '16.5%', transform: 'translate(-50%, -50%)' }}>
        <div style={PLATE_STYLE}>
          <span style={LABEL_STYLE}>Opportunity space</span>
        </div>
      </div>
    </div>
  )
}
