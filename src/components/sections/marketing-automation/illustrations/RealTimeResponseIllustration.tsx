import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function RealTimeResponseIllustration() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return
    const el = stageRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setIsAnimating(true) }) },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [prefersReduced])

  return (
    <>
      <style>{`
        .rtr-stage { position: relative; width: 100%; aspect-ratio: 1200 / 760; max-width: 1200px; margin: 0 auto; }
        @media (max-width: 1232px) { .rtr-stage { height: auto; } }
        .rtr-stage svg.rtr-wires { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }

        .rtr-pill { position: absolute; transform: translate(-50%,-50%); width: 220px; }
        .rtr-pill-inner {
          position: relative; display: flex; align-items: center; gap: 11px;
          padding: 12px 14px; border-radius: 999px;
          background: rgba(255,255,255,.62); border: 1px solid rgba(34,25,59,.35);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.85), 0 10px 22px -16px rgba(34,25,59,.35);
          backdrop-filter: blur(8px) saturate(120%);
          -webkit-backdrop-filter: blur(8px) saturate(120%);
          overflow: hidden; white-space: nowrap;
        }
        .rtr-pill-inner::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 38%);
          mix-blend-mode: screen;
        }
        .rtr-ico { position: relative; z-index: 1; flex: 0 0 auto; width: 18px; height: 18px; color: #22193B; }
        .rtr-ico svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round; }
        .rtr-txt { position: relative; z-index: 1; font: 600 11.5px/1.15 'Inter', sans-serif; letter-spacing: .04em; text-transform: uppercase; color: #22193B; flex: 1 1 auto; overflow: hidden; text-overflow: ellipsis; }
        .rtr-ind { position: relative; z-index: 1; flex: 0 0 auto; width: 8px; height: 8px; border-radius: 999px; background: rgba(34,25,59,.22); transition: none; }

        .rtr-evt-1 { left: 17%; top: 28%; }
        .rtr-evt-2 { left: 17%; top: 50%; }
        .rtr-evt-3 { left: 17%; top: 72%; }
        .rtr-act-1 { left: 83%; top: 28%; }
        .rtr-act-2 { left: 83%; top: 50%; }
        .rtr-act-3 { left: 83%; top: 72%; }

        .rtr-evt-1 .rtr-ind, .rtr-evt-2 .rtr-ind, .rtr-evt-3 .rtr-ind {
          background: #E977C1; box-shadow: 0 0 6px rgba(233,119,193,.6);
        }

        .rtr-gauge-bg { fill: none; stroke: rgba(34,25,59,.18); stroke-width: 16; stroke-linecap: round; }
        .rtr-gauge-fill {
          fill: none; stroke: #D5F77C; stroke-width: 14; stroke-linecap: round;
          stroke-dasharray: 0 700;
          filter: drop-shadow(0 0 6px rgba(213,247,124,.7)) drop-shadow(0 0 14px rgba(213,247,124,.45));
        }
        .rtr-stage.is-animating .rtr-gauge-fill { animation: rtrFillRise 7s ease-in-out infinite; }
        @keyframes rtrFillRise {
          0%   { stroke-dasharray: 0 700; }
          6%   { stroke-dasharray: 0 700; }
          48%  { stroke-dasharray: 486 700; }
          78%  { stroke-dasharray: 486 700; }
          92%  { stroke-dasharray: 0 700; }
          100% { stroke-dasharray: 0 700; }
        }

        .rtr-threshold { stroke: #E977C1; stroke-width: 2; stroke-opacity: .4; stroke-linecap: round; }
        .rtr-stage.is-animating .rtr-threshold { animation: rtrThreshFlash 7s ease-in-out infinite; }
        @keyframes rtrThreshFlash {
          0%, 44%   { stroke-opacity: .4; stroke-width: 2; filter: none; }
          47%, 60%  { stroke-opacity: 1; stroke-width: 3; filter: drop-shadow(0 0 6px rgba(233,119,193,.9)) drop-shadow(0 0 12px rgba(233,119,193,.5)); }
          75%, 100% { stroke-opacity: .4; stroke-width: 2; filter: none; }
        }

        .rtr-gauge-tick { stroke: #22193B; stroke-opacity: .25; stroke-width: 1; stroke-linecap: round; }
        .rtr-gauge-eye { font: 700 10px/1 'Inter', sans-serif; letter-spacing: .18em; text-transform: uppercase; fill: #0057B8; }
        .rtr-gauge-num { font: 300 56px/1 'Inter', sans-serif; letter-spacing: -.02em; fill: #22193B; text-anchor: middle; dominant-baseline: middle; }
        .rtr-gauge-sub { font: 400 12px/1 'Newsreader', serif; font-style: italic; fill: #22193B; fill-opacity: .65; text-anchor: middle; }
        .rtr-stage.is-animating .rtr-gauge-num { animation: rtrNumRise 7s ease-in-out infinite; }
        @keyframes rtrNumRise {
          0%, 8%   { opacity: 0; }
          35%      { opacity: 1; }
          88%      { opacity: 1; }
          96%, 100%{ opacity: 0; }
        }

        .rtr-wire { fill: none; stroke: #E977C1; stroke-width: 1.4; stroke-linecap: round; }
        .rtr-wire.thin { stroke-width: 1; stroke-opacity: .55; }

        .rtr-pulse {
          fill: #D5F77C;
          filter: drop-shadow(0 0 4px rgba(213,247,124,.85)) drop-shadow(0 0 8px rgba(213,247,124,.55));
          opacity: 0;
          offset-rotate: 0deg;
        }

        .rtr-pulse.in1 { offset-path: path('M 290 213 C 380 213, 460 252, 510 290'); }
        .rtr-pulse.in2 { offset-path: path('M 290 380 L 470 380'); }
        .rtr-pulse.in3 { offset-path: path('M 290 547 C 380 547, 460 508, 510 470'); }
        .rtr-stage.is-animating .rtr-pulse.in1,
        .rtr-stage.is-animating .rtr-pulse.in2,
        .rtr-stage.is-animating .rtr-pulse.in3 { animation: rtrInbound 7s ease-in-out infinite; }
        .rtr-pulse.in1 { animation-delay: 0s; }
        .rtr-pulse.in2 { animation-delay: .25s; }
        .rtr-pulse.in3 { animation-delay: .5s; }
        @keyframes rtrInbound {
          0%   { offset-distance: 0%;   opacity: 0; }
          3%   { opacity: 1; }
          35%  { offset-distance: 90%;  opacity: .9; }
          42%  { offset-distance: 100%; opacity: 0; }
          100% { offset-distance: 100%; opacity: 0; }
        }

        .rtr-pulse.out1 { offset-path: path('M 690 290 Q 800 213, 906 213'); }
        .rtr-pulse.out2 { offset-path: path('M 730 380 L 906 380'); }
        .rtr-pulse.out3 { offset-path: path('M 690 470 Q 800 547, 906 547'); }
        .rtr-stage.is-animating .rtr-pulse.out1,
        .rtr-stage.is-animating .rtr-pulse.out2,
        .rtr-stage.is-animating .rtr-pulse.out3 { animation: rtrOutbound 7s ease-in-out infinite; }
        .rtr-pulse.out1 { animation-delay: 0s; }
        .rtr-pulse.out2 { animation-delay: .12s; }
        .rtr-pulse.out3 { animation-delay: .24s; }
        @keyframes rtrOutbound {
          0%, 49%   { offset-distance: 0%;   opacity: 0; }
          52%       { opacity: 1; }
          78%       { offset-distance: 100%; opacity: .9; }
          83%, 100% { offset-distance: 100%; opacity: 0; }
        }

        .rtr-stage.is-animating .rtr-act-1 .rtr-ind,
        .rtr-stage.is-animating .rtr-act-2 .rtr-ind,
        .rtr-stage.is-animating .rtr-act-3 .rtr-ind { animation: rtrIndOn 7s ease-in-out infinite; }
        .rtr-act-1 .rtr-ind { animation-delay: 0s; }
        .rtr-act-2 .rtr-ind { animation-delay: .12s; }
        .rtr-act-3 .rtr-ind { animation-delay: .24s; }
        @keyframes rtrIndOn {
          0%, 55%   { background: rgba(34,25,59,.22); box-shadow: none; }
          60%, 88%  { background: #D5F77C; box-shadow: 0 0 8px rgba(213,247,124,.85), 0 0 16px rgba(213,247,124,.45); }
          96%, 100% { background: rgba(34,25,59,.22); box-shadow: none; }
        }

        @media (max-width: 1100px) {
          .rtr-pill { width: 180px; }
          .rtr-pill-inner { padding: 10px 12px; }
          .rtr-txt { font-size: 10.5px; }
        }
        @media (max-width: 820px) {
          .rtr-pill { width: 150px; }
          .rtr-txt { font-size: 9.5px; letter-spacing: .03em; }
          .rtr-ico { width: 14px; height: 14px; }
        }
      `}</style>

      {/* Clipping wrapper — crops the blank lavender above/below the pill rows */}
      <div style={{ overflow: 'hidden', borderRadius: '16px', position: 'relative', width: '100%' }}>
      <div
        ref={stageRef}
        className={`rtr-stage${isAnimating ? ' is-animating' : ''}`}
        style={{
          marginTop: '-11%',
          marginBottom: '-11%',
          borderRadius: 0,
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #DBDEF0 0%, #D2D6ED 60%, #CDD2EA 100%)',
          backgroundImage: 'radial-gradient(60% 50% at 78% 18%, rgba(233,119,193,.18), transparent 60%), radial-gradient(50% 50% at 12% 90%, rgba(233,119,193,.10), transparent 60%), linear-gradient(180deg, #DBDEF0 0%, #D2D6ED 60%, #CDD2EA 100%)',
        }}
      >
        {/* SVG: wires + gauge + pulses */}
        <svg className="rtr-wires" viewBox="0 0 1200 760" aria-hidden="true">
          {/* Inbound wires */}
          <path className="rtr-wire" d="M 290 213 C 380 213, 460 252, 510 290" />
          <path className="rtr-wire" d="M 290 380 L 470 380" />
          <path className="rtr-wire" d="M 290 547 C 380 547, 460 508, 510 470" />
          {/* Outbound wires */}
          <path className="rtr-wire thin" d="M 690 290 Q 800 213, 906 213" />
          <path className="rtr-wire thin" d="M 730 380 L 906 380" />
          <path className="rtr-wire thin" d="M 690 470 Q 800 547, 906 547" />

          {/* Gauge tick marks */}
          <g className="rtr-gauge-tick">
            <line x1="497" y1="481" x2="486" y2="492" />
            <line x1="463" y1="384" x2="450" y2="384" />
            <line x1="513" y1="287" x2="503" y2="277" />
            <line x1="600" y1="252" x2="600" y2="238" />
            <line x1="687" y1="287" x2="697" y2="277" />
            <line x1="737" y1="384" x2="750" y2="384" />
            <line x1="703" y1="481" x2="714" y2="492" />
          </g>

          {/* Gauge background ring */}
          <path className="rtr-gauge-bg" d="M 508 472 A 130 130 0 1 1 692 472" />
          {/* Gauge lime fill */}
          <path className="rtr-gauge-fill" d="M 508 472 A 130 130 0 1 1 692 472" />
          {/* Threshold tick */}
          <line className="rtr-threshold" x1="714" y1="351" x2="738" y2="345" />

          {/* Center label */}
          <text className="rtr-gauge-eye" x="600" y="345" textAnchor="middle">Intent</text>
          <text className="rtr-gauge-num" x="600" y="385">87</text>
          <text className="rtr-gauge-sub" x="600" y="430">threshold crossed</text>

          {/* Pulses */}
          <circle className="rtr-pulse in1" r="3.6" />
          <circle className="rtr-pulse in2" r="3.6" />
          <circle className="rtr-pulse in3" r="3.6" />
          <circle className="rtr-pulse out1" r="3.4" />
          <circle className="rtr-pulse out2" r="3.4" />
          <circle className="rtr-pulse out3" r="3.4" />
        </svg>

        {/* Event pills — left */}
        <article className="rtr-pill rtr-evt-1">
          <div className="rtr-pill-inner">
            <span className="rtr-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
            </span>
            <span className="rtr-txt">Guide downloaded</span>
            <span className="rtr-ind" />
          </div>
        </article>
        <article className="rtr-pill rtr-evt-2">
          <div className="rtr-pill-inner">
            <span className="rtr-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 4v16M16 8.5c-.5-1.7-2.2-2.5-4-2.5s-3.5.8-3.5 2.5c0 3.5 7.5 1.5 7.5 5 0 1.7-1.7 2.5-4 2.5s-3.5-.8-4-2.5"/></svg>
            </span>
            <span className="rtr-txt">Pricing visited</span>
            <span className="rtr-ind" />
          </div>
        </article>
        <article className="rtr-pill rtr-evt-3">
          <div className="rtr-pill-inner">
            <span className="rtr-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M5 3h11l3 3v15H5z"/><path d="M16 3v3h3"/><path d="M8 11h8M8 15h8M8 19h5"/></svg>
            </span>
            <span className="rtr-txt">Articles read · 2</span>
            <span className="rtr-ind" />
          </div>
        </article>

        {/* Action pills — right */}
        <article className="rtr-pill rtr-act-1">
          <div className="rtr-pill-inner">
            <span className="rtr-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 16 16 8"/><circle cx="12" cy="16" r="1.4" fill="currentColor" stroke="none"/></svg>
            </span>
            <span className="rtr-txt">Score updated</span>
            <span className="rtr-ind" />
          </div>
        </article>
        <article className="rtr-pill rtr-act-2">
          <div className="rtr-pill-inner">
            <span className="rtr-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M7.5 7.5 11 16M16.5 7.5 13 16"/></svg>
            </span>
            <span className="rtr-txt">Sequence adjusts</span>
            <span className="rtr-ind" />
          </div>
        </article>
        <article className="rtr-pill rtr-act-3">
          <div className="rtr-pill-inner">
            <span className="rtr-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0v5l2 3H4l2-3Z"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>
            </span>
            <span className="rtr-txt">Sales pinged</span>
            <span className="rtr-ind" />
          </div>
        </article>
      </div>
      </div>
    </>
  )
}
