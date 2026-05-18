import { useRef, useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

// 560×420 coordinate space — proportionally scaled from 1200×760 design
// x × 0.467, y × 0.553

const BLOOM_CX = 303
const BLOOM_CY = 210

const PILLS = [
  { label: 'Business Context', cy: 110 },
  { label: 'Market',           cy: 210 },
  { label: 'Audience',         cy: 311 },
]
const PILL_W = 136
const PILL_H = 34
const PILL_CX = 125

const NODES = [
  { id: 1, cx: 448, cy: 133, r: 5   },
  { id: 2, cx: 499, cy: 166, r: 4.5 },
  { id: 3, cx: 471, cy: 210, r: 6   },
  { id: 4, cx: 502, cy: 244, r: 4.5 },
  { id: 5, cx: 443, cy: 288, r: 5   },
  { id: 6, cx: 411, cy: 340, r: 4   },
  { id: 7, cx: 411, cy: 80,  r: 4   },
]

const PULSE_DUR = 5.4

const IN_PATHS = [
  { d: 'M 193 110 C 228 110 248 155 259 194', delay: 0.4,  r: 3.6 },
  { d: 'M 193 210 L 259 210',                 delay: 1.8,  r: 3.6 },
  { d: 'M 193 311 C 228 311 248 265 259 227', delay: 3.2,  r: 3.6 },
]
const OUT_PATHS = [
  { d: 'M 348 194 Q 397 155 448 133',  delay: 3.6, r: 3.4 },
  { d: 'M 350 205 Q 406 183 499 166',  delay: 3.9, r: 3.4 },
  { d: 'M 350 210 Q 411 210 471 210',  delay: 4.2, r: 3.4 },
  { d: 'M 350 216 Q 406 232 502 244',  delay: 4.5, r: 3.4 },
  { d: 'M 348 227 Q 397 265 443 288',  delay: 4.8, r: 3.4 },
  { d: 'M 345 227 Q 383 282 411 340',  delay: 5.1, r: 3.4 },
  { d: 'M 345 194 Q 383 138 411 80',   delay: 5.4, r: 3.4 },
]

const CONST_LINES = [
  'M 448 133 L 499 166',
  'M 499 166 L 471 210',
  'M 471 210 L 502 244',
  'M 502 244 L 443 288',
  'M 443 288 L 411 340',
  'M 471 210 L 443 288',
  'M 448 133 L 411 80',
  'M 411 80 L 471 210',
]

const ANIM_CSS = `
  .sg-ring { transform-box:fill-box; transform-origin:center; fill:none; stroke:#22193B; }
  .sg-ring-outer  { stroke-opacity:.45; stroke-width:1.1; stroke-dasharray:3 5; }
  .sg-ring-middle { stroke-opacity:.55; stroke-width:1.3; stroke-dasharray:26 52; stroke-linecap:round; }
  .sg-ring-solid  { stroke-opacity:.65; stroke-width:1.2; }
  .sg-ring-inner  { stroke-opacity:.35; stroke-width:1;   stroke-dasharray:1 3; }
  .sg-animating .sg-ring-outer  { animation: sg-spin 28s linear infinite; }
  .sg-animating .sg-ring-middle { animation: sg-spin 18s linear infinite reverse; }
  .sg-animating .sg-ring-inner  { animation: sg-spin 12s linear infinite; }
  @keyframes sg-spin { to { transform: rotate(360deg); } }

  .sg-halo { fill:#D5F77C; fill-opacity:.14; transform-box:fill-box; transform-origin:center; }
  .sg-core { fill:#D5F77C; transform-box:fill-box; transform-origin:center;
             filter:drop-shadow(0 0 8px rgba(213,247,124,.85)) drop-shadow(0 0 18px rgba(213,247,124,.5)); }
  .sg-animating .sg-core { animation: sg-core-breath 3.6s ease-in-out infinite; }
  .sg-animating .sg-halo { animation: sg-halo-breath 3.6s ease-in-out infinite; }
  @keyframes sg-core-breath {
    0%,100% { transform:scale(1); }
    50%     { transform:scale(1.12); filter:drop-shadow(0 0 12px rgba(213,247,124,1)) drop-shadow(0 0 26px rgba(213,247,124,.7)); }
  }
  @keyframes sg-halo-breath {
    0%,100% { transform:scale(1);    fill-opacity:.12; }
    50%     { transform:scale(1.35); fill-opacity:.22; }
  }

  .sg-node { fill:#E977C1; transform-box:fill-box; transform-origin:center; opacity:0;
             filter:drop-shadow(0 0 4px rgba(233,119,193,.7)) drop-shadow(0 0 10px rgba(233,119,193,.35)); }
  .sg-animating .sg-node { animation: sg-node-in .9s ease-out forwards, sg-node-breath 3.8s ease-in-out infinite; }
  .sg-n1 { animation-delay:1.6s,2.4s; }
  .sg-n2 { animation-delay:1.9s,2.7s; }
  .sg-n3 { animation-delay:2.2s,3.0s; }
  .sg-n4 { animation-delay:2.5s,3.3s; }
  .sg-n5 { animation-delay:2.8s,3.6s; }
  .sg-n6 { animation-delay:3.1s,3.9s; }
  .sg-n7 { animation-delay:3.4s,4.2s; }
  @keyframes sg-node-in {
    from { opacity:0; transform:scale(.4); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes sg-node-breath {
    0%,100% { transform:scale(1); }
    50%     { transform:scale(1.18); }
  }

  .sg-cline { fill:none; stroke:#E977C1; stroke-opacity:.35; stroke-width:1;
              stroke-linecap:round; stroke-dasharray:1 4; opacity:0; }
  .sg-animating .sg-cline { animation: sg-line-in 1s ease-out 2.6s forwards; }
  @keyframes sg-line-in { to { opacity:1; } }
`

export default function StrategyGenerationIllustration() {
  const ref = useRef<SVGSVGElement>(null)
  const [animating, setAnimating] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) { setAnimating(true); return }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimating(true); io.disconnect() } },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [prefersReduced])

  const animated = animating && !prefersReduced

  return (
    <svg
      ref={ref}
      viewBox="0 0 560 420"
      className={`w-full h-auto block${animated ? ' sg-animating' : ''}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Strategy generation — Business Context, Market, and Audience intelligence feed an abstract synthesis engine that radiates a personalized strategy constellation"
    >
      <defs>
        {!prefersReduced && <style>{ANIM_CSS}</style>}

        <linearGradient id="sg-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#DBDEF0" />
          <stop offset="60%"  stopColor="#D2D6ED" />
          <stop offset="100%" stopColor="#CDD2EA" />
        </linearGradient>
        <radialGradient id="sg-glow1" cx="78%" cy="18%" r="60%">
          <stop offset="0%"   stopColor="#E977C1" stopOpacity="0.18" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sg-glow2" cx="12%" cy="90%" r="50%">
          <stop offset="0%"   stopColor="#E977C1" stopOpacity="0.10" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sg-pill-fill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.62)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.32)" />
        </linearGradient>
        <linearGradient id="sg-pill-sheen" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <filter id="sg-pulse-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Pulse paths for mpath references */}
        {IN_PATHS.map((p, i) => <path key={i} id={`sg-ip${i}`} d={p.d} />)}
        {OUT_PATHS.map((p, i) => <path key={i} id={`sg-op${i}`} d={p.d} />)}
      </defs>

      {/* Background */}
      <rect width="560" height="420" rx="16" fill="url(#sg-bg)" />
      <rect width="560" height="420" rx="16" fill="url(#sg-glow1)" />
      <rect width="560" height="420" rx="16" fill="url(#sg-glow2)" />

      {/* Input → bloom wires */}
      {IN_PATHS.map((p, i) => (
        <path key={i} d={p.d} stroke="#E977C1" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
      ))}

      {/* Bloom → constellation wires (faint) */}
      {OUT_PATHS.map((p, i) => (
        <path key={i} d={p.d} stroke="#E977C1" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      ))}

      {/* Constellation lines */}
      {CONST_LINES.map((d, i) => (
        <path key={i} d={d}
          className={!prefersReduced ? 'sg-cline' : undefined}
          stroke="#E977C1" strokeOpacity="0.35" strokeWidth="1"
          strokeLinecap="round" strokeDasharray="1 4"
          opacity={prefersReduced ? 1 : undefined}
        />
      ))}

      {/* Bloom — halo */}
      <circle className={!prefersReduced ? 'sg-halo' : undefined}
        cx={BLOOM_CX} cy={BLOOM_CY} r="16"
        fill="#D5F77C" fillOpacity={prefersReduced ? 0.14 : undefined}
      />

      {/* Bloom — rotating rings */}
      {!prefersReduced ? (
        <>
          <circle className="sg-ring sg-ring-outer"  cx={BLOOM_CX} cy={BLOOM_CY} r="51" />
          <circle className="sg-ring sg-ring-middle" cx={BLOOM_CX} cy={BLOOM_CY} r="38" />
          <circle className="sg-ring sg-ring-solid"  cx={BLOOM_CX} cy={BLOOM_CY} r="30" />
          <circle className="sg-ring sg-ring-inner"  cx={BLOOM_CX} cy={BLOOM_CY} r="22" />
        </>
      ) : (
        <>
          <circle cx={BLOOM_CX} cy={BLOOM_CY} r="51" fill="none" stroke="#22193B" strokeOpacity="0.45" strokeWidth="1.1" strokeDasharray="3 5" />
          <circle cx={BLOOM_CX} cy={BLOOM_CY} r="38" fill="none" stroke="#22193B" strokeOpacity="0.55" strokeWidth="1.3" strokeDasharray="26 52" strokeLinecap="round" />
          <circle cx={BLOOM_CX} cy={BLOOM_CY} r="30" fill="none" stroke="#22193B" strokeOpacity="0.65" strokeWidth="1.2" />
          <circle cx={BLOOM_CX} cy={BLOOM_CY} r="22" fill="none" stroke="#22193B" strokeOpacity="0.35" strokeWidth="1"   strokeDasharray="1 3" />
        </>
      )}

      {/* Bloom — lime core */}
      <circle className={!prefersReduced ? 'sg-core' : undefined}
        cx={BLOOM_CX} cy={BLOOM_CY} r="5"
        fill="#D5F77C"
        style={prefersReduced ? { filter: 'drop-shadow(0 0 8px rgba(213,247,124,.85)) drop-shadow(0 0 18px rgba(213,247,124,.5))' } : undefined}
      />

      {/* Constellation nodes */}
      {NODES.map((node) => (
        <circle key={node.id}
          className={!prefersReduced ? `sg-node sg-n${node.id}` : undefined}
          cx={node.cx} cy={node.cy} r={node.r}
          fill="#E977C1"
          opacity={prefersReduced ? 1 : undefined}
          style={prefersReduced ? { filter: 'drop-shadow(0 0 4px rgba(233,119,193,.7)) drop-shadow(0 0 10px rgba(233,119,193,.35))' } : undefined}
        />
      ))}

      {/* Input pills */}
      {PILLS.map((pill) => {
        const rx = PILL_CX - PILL_W / 2
        const ry = pill.cy - PILL_H / 2
        return (
          <g key={pill.label}>
            <rect x={rx} y={ry} width={PILL_W} height={PILL_H} rx={PILL_H / 2}
              fill="url(#sg-pill-fill)" stroke="rgba(34,25,59,0.55)" strokeWidth="1.5" />
            <rect x={rx + 1} y={ry + 1} width={PILL_W - 2} height={PILL_H * 0.42} rx={PILL_H / 2}
              fill="url(#sg-pill-sheen)" />
            <text x={PILL_CX} y={pill.cy} textAnchor="middle" dominantBaseline="middle"
              fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="700"
              fill="#22193B" letterSpacing="0.10em">
              {pill.label.toUpperCase()}
            </text>
          </g>
        )
      })}

      {/* Pulse animations */}
      {animated && (
        <>
          {IN_PATHS.map((p, i) => (
            <circle key={`in${i}`} r={p.r} fill="#D5F77C" filter="url(#sg-pulse-glow)" opacity="0">
              <animateMotion dur={`${PULSE_DUR}s`} begin={`${p.delay}s`} repeatCount="indefinite"
                keyPoints="0;0.96" keyTimes="0;1" calcMode="linear">
                <mpath href={`#sg-ip${i}`} />
              </animateMotion>
              <animate attributeName="opacity"
                values="0;0;1;1;0;0" keyTimes="0;0.04;0.06;0.88;0.96;1"
                dur={`${PULSE_DUR}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
            </circle>
          ))}
          {OUT_PATHS.map((p, i) => (
            <circle key={`out${i}`} r={p.r} fill="#D5F77C" filter="url(#sg-pulse-glow)" opacity="0">
              <animateMotion dur={`${PULSE_DUR}s`} begin={`${p.delay}s`} repeatCount="indefinite"
                keyPoints="0;0.96" keyTimes="0;1" calcMode="linear">
                <mpath href={`#sg-op${i}`} />
              </animateMotion>
              <animate attributeName="opacity"
                values="0;0;1;1;0;0" keyTimes="0;0.06;0.08;0.86;0.96;1"
                dur={`${PULSE_DUR}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </>
      )}
    </svg>
  )
}
