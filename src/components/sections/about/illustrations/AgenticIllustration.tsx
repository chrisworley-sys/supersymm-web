import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function AgenticIllustration() {
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
        .agt-stage {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 480 / 220;
        }
        .agt-stage svg.agt-wires {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .agt-wire {
          fill: none;
          stroke: #E977C1;
          stroke-width: 1.2;
          stroke-linecap: round;
          stroke-opacity: .35;
        }
        .agt-scan {
          fill: none;
          stroke: #E977C1;
          stroke-width: 1.4;
          transform-box: fill-box;
          transform-origin: center;
          opacity: 0;
        }
        .agt-stage.is-animating .agt-scan {
          animation: agt-scanSweep 3.2s ease-out infinite;
        }
        .agt-scan.s1 { animation-delay: 0s; }
        .agt-scan.s2 { animation-delay: 1.6s; }
        @keyframes agt-scanSweep {
          0%   { transform: scale(.35); opacity: .8; stroke-opacity: .8; }
          100% { transform: scale(2.6); opacity: 0;  stroke-opacity: 0; }
        }
        .agt-pulse {
          fill: #D5F77C;
          filter:
            drop-shadow(0 0 4px rgba(213,247,124,.85))
            drop-shadow(0 0 9px rgba(213,247,124,.45));
          opacity: 0;
          offset-rotate: 0deg;
        }
        .agt-pulse.p1 { offset-path: path('M 240 110 L 57.6 66');  }
        .agt-pulse.p2 { offset-path: path('M 240 110 L 57.6 154'); }
        .agt-pulse.p3 { offset-path: path('M 240 110 L 422.4 66'); }
        .agt-pulse.p4 { offset-path: path('M 240 110 L 422.4 154');}
        .agt-stage.is-animating .agt-pulse {
          animation: agt-emit 4.8s ease-in-out infinite;
        }
        .agt-pulse.p1 { animation-delay: 0s;   }
        .agt-pulse.p2 { animation-delay: 1.2s; }
        .agt-pulse.p3 { animation-delay: 2.4s; }
        .agt-pulse.p4 { animation-delay: 3.6s; }
        @keyframes agt-emit {
          0%   { offset-distance: 0%; opacity: 0; }
          2%   { opacity: 1; }
          16%  { offset-distance: 92%; opacity: 1; }
          20%  { offset-distance: 100%; opacity: 0; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .agt-core {
          position: absolute;
          width: 96px;
          height: 96px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        }
        .agt-core-bg {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(34,25,59,.22);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.92),
            0 14px 28px -18px rgba(34,25,59,.45);
          -webkit-backdrop-filter: blur(8px) saturate(120%);
                  backdrop-filter: blur(8px) saturate(120%);
        }
        .agt-core-glow {
          position: absolute;
          inset: -3px;
          border-radius: 999px;
          border: 2px solid #D5F77C;
          opacity: .25;
          filter:
            drop-shadow(0 0 5px rgba(213,247,124,.85))
            drop-shadow(0 0 13px rgba(213,247,124,.45));
        }
        .agt-stage.is-animating .agt-core-glow {
          animation: agt-coreBreath 3.2s ease-in-out infinite;
        }
        @keyframes agt-coreBreath {
          0%, 100% { opacity: .2; transform: scale(1); }
          50%      { opacity: .7; transform: scale(1.04); }
        }
        .agt-core-ico {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #22193B;
        }
        .agt-core-ico svg {
          width: 40px;
          height: 40px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .agt-spark-main {
          stroke: #D5F77C;
          stroke-width: 1.9;
          filter:
            drop-shadow(0 0 4px rgba(213,247,124,.85))
            drop-shadow(0 0 9px rgba(213,247,124,.45));
        }
        .agt-stage.is-animating .agt-spark-main {
          transform-box: fill-box;
          transform-origin: center;
          animation: agt-sparkPulse 2.4s ease-in-out infinite;
        }
        @keyframes agt-sparkPulse {
          0%, 100% { opacity: .85; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.08); }
        }
        .agt-core-eye {
          position: absolute;
          left: 50%;
          top: calc(100% + 10px);
          transform: translateX(-50%);
          font: 700 9.5px/1 'Inter', system-ui, sans-serif;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #22193B;
          white-space: nowrap;
        }
        .agt-sat {
          position: absolute;
          width: 36px;
          height: 36px;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        .agt-sat-bg {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(34,25,59,.22);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.92),
            0 8px 18px -14px rgba(34,25,59,.4);
        }
        .agt-sat-glow {
          position: absolute;
          inset: -3px;
          border-radius: 999px;
          border: 2px solid #D5F77C;
          opacity: 0;
          filter:
            drop-shadow(0 0 4px rgba(213,247,124,.85))
            drop-shadow(0 0 10px rgba(213,247,124,.45));
        }
        .agt-sat-dot {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
        }
        .agt-sat-dot span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #22193B;
          opacity: .55;
        }
        .agt-sat.s1 { left: 12%; top: 30%; }
        .agt-sat.s2 { left: 12%; top: 70%; }
        .agt-sat.s3 { left: 88%; top: 30%; }
        .agt-sat.s4 { left: 88%; top: 70%; }
        .agt-stage.is-animating .agt-sat .agt-sat-glow {
          animation: agt-satFlash 4.8s ease-in-out infinite;
        }
        .agt-stage.is-animating .agt-sat .agt-sat-dot span {
          animation: agt-satDot 4.8s ease-in-out infinite;
        }
        .agt-sat.s1 .agt-sat-glow, .agt-sat.s1 .agt-sat-dot span { animation-delay: 0s;   }
        .agt-sat.s2 .agt-sat-glow, .agt-sat.s2 .agt-sat-dot span { animation-delay: 1.2s; }
        .agt-sat.s3 .agt-sat-glow, .agt-sat.s3 .agt-sat-dot span { animation-delay: 2.4s; }
        .agt-sat.s4 .agt-sat-glow, .agt-sat.s4 .agt-sat-dot span { animation-delay: 3.6s; }
        @keyframes agt-satFlash {
          0%, 92%, 100% { opacity: 0; transform: scale(.94); }
          4%            { opacity: 1; transform: scale(1.12); }
          16%           { opacity: .5; transform: scale(1); }
          28%           { opacity: 0; transform: scale(.94); }
        }
        @keyframes agt-satDot {
          0%, 92%, 100% { background: #22193B; opacity: .55; box-shadow: none; }
          4%, 16%       { background: #D5F77C; opacity: 1;
                          box-shadow: 0 0 6px rgba(213,247,124,.85); }
          28%           { background: #22193B; opacity: .55; box-shadow: none; }
        }
        @media (max-width: 500px) {
          .agt-core { width: 76px; height: 76px; }
          .agt-core-ico svg { width: 32px; height: 32px; }
          .agt-sat { width: 30px; height: 30px; }
        }
      `}</style>

      <div
        ref={stageRef}
        className={`agt-stage${isAnimating ? ' is-animating' : ''}`}
        aria-hidden="true"
      >
        <svg className="agt-wires" viewBox="0 0 480 220" aria-hidden="true">
          <path className="agt-wire" d="M 240 110 L 57.6 66"  />
          <path className="agt-wire" d="M 240 110 L 57.6 154" />
          <path className="agt-wire" d="M 240 110 L 422.4 66" />
          <path className="agt-wire" d="M 240 110 L 422.4 154"/>

          <circle className="agt-scan s1" cx="240" cy="110" r="56" />
          <circle className="agt-scan s2" cx="240" cy="110" r="56" />

          <circle className="agt-pulse p1" r="3.6" />
          <circle className="agt-pulse p2" r="3.6" />
          <circle className="agt-pulse p3" r="3.6" />
          <circle className="agt-pulse p4" r="3.6" />
        </svg>

        <div className="agt-sat s1" aria-hidden="true">
          <div className="agt-sat-bg" /><div className="agt-sat-glow" />
          <div className="agt-sat-dot"><span /></div>
        </div>
        <div className="agt-sat s2" aria-hidden="true">
          <div className="agt-sat-bg" /><div className="agt-sat-glow" />
          <div className="agt-sat-dot"><span /></div>
        </div>
        <div className="agt-sat s3" aria-hidden="true">
          <div className="agt-sat-bg" /><div className="agt-sat-glow" />
          <div className="agt-sat-dot"><span /></div>
        </div>
        <div className="agt-sat s4" aria-hidden="true">
          <div className="agt-sat-bg" /><div className="agt-sat-glow" />
          <div className="agt-sat-dot"><span /></div>
        </div>

        <div className="agt-core" aria-hidden="true">
          <div className="agt-core-bg" />
          <div className="agt-core-glow" />
          <div className="agt-core-ico">
            <svg viewBox="0 0 24 24">
              <path className="agt-spark-main" d="M12 4 13.4 10.6 20 12 13.4 13.4 12 20 10.6 13.4 4 12 10.6 10.6 Z" />
              <path d="M18.5 5.5 19 7.5 21 8 19 8.5 18.5 10.5 18 8.5 16 8 18 7.5 Z" />
            </svg>
          </div>
          <div className="agt-core-eye">Agent</div>
        </div>
      </div>
    </>
  )
}
