import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function JourneyOrchestrationIllustration() {
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
        .jrn-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 1200 / 600;
          max-width: 1200px;
          margin: 0 auto;
        }
        .jrn-stage svg.jrn-wires {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        /* wires */
        .jrn-wire {
          fill: none;
          stroke: #E977C1;
          stroke-width: 1.4;
          stroke-linecap: round;
        }
        .jrn-wire.spine  { stroke-opacity: .9; }
        .jrn-wire.branch { stroke-opacity: .6; }

        /* entry node */
        .jrn-entry-halo {
          fill: #E977C1;
          fill-opacity: .12;
          transform-box: fill-box;
          transform-origin: center;
        }
        .jrn-entry-dot {
          fill: #22193B;
          fill-opacity: .85;
        }
        .jrn-stage.is-animating .jrn-entry-halo {
          animation: jrnEntryHalo 4.2s ease-in-out infinite;
        }
        @keyframes jrnEntryHalo {
          0%, 100% { transform: scale(1);    fill-opacity: .12; }
          50%      { transform: scale(1.55); fill-opacity: .22; }
        }

        /* waypoints */
        .jrn-waypoint {
          fill: #22193B;
          fill-opacity: .42;
        }

        /* decision terminal */
        .jrn-terminal-halo {
          fill: #E977C1;
          fill-opacity: .12;
          transform-box: fill-box;
          transform-origin: center;
        }
        .jrn-terminal-dot {
          fill: #D5F77C;
          filter:
            drop-shadow(0 0 6px rgba(213,247,124,.85))
            drop-shadow(0 0 14px rgba(213,247,124,.5));
          transform-box: fill-box;
          transform-origin: center;
        }
        .jrn-stage.is-animating .jrn-terminal-halo {
          animation: jrnTermHalo 3.4s ease-in-out infinite;
        }
        .jrn-stage.is-animating .jrn-terminal-dot {
          animation: jrnTermPulse 3.4s ease-in-out infinite;
        }
        @keyframes jrnTermHalo {
          0%, 100% { transform: scale(1);    fill-opacity: .12; }
          50%      { transform: scale(1.45); fill-opacity: .26; }
        }
        @keyframes jrnTermPulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.16); }
        }

        /* traveling pulses */
        .jrn-pulse {
          fill: #D5F77C;
          filter:
            drop-shadow(0 0 4px rgba(213,247,124,.85))
            drop-shadow(0 0 8px rgba(213,247,124,.55));
          opacity: 0;
          offset-rotate: 0deg;
        }
        /* spine only */
        .jrn-pulse.j1 {
          offset-path: path('M 80 300 Q 190 295 300 300 C 380 305 580 295 660 300 C 740 305 940 295 1020 300 Q 1080 302 1140 300');
        }
        /* top branch */
        .jrn-pulse.j2 {
          offset-path: path('M 80 300 Q 190 295 300 300 C 380 200 580 200 660 300 C 740 305 940 295 1020 300 Q 1080 302 1140 300');
        }
        /* bottom branch */
        .jrn-pulse.j3 {
          offset-path: path('M 80 300 Q 190 295 300 300 C 380 305 580 295 660 300 C 740 400 940 400 1020 300 Q 1080 302 1140 300');
        }
        /* both branches */
        .jrn-pulse.j4 {
          offset-path: path('M 80 300 Q 190 295 300 300 C 380 200 580 200 660 300 C 740 400 940 400 1020 300 Q 1080 302 1140 300');
        }

        .jrn-stage.is-animating .jrn-pulse.j1,
        .jrn-stage.is-animating .jrn-pulse.j2,
        .jrn-stage.is-animating .jrn-pulse.j3,
        .jrn-stage.is-animating .jrn-pulse.j4 {
          animation: jrnFlow 10s linear infinite;
        }
        .jrn-pulse.j1 { animation-delay: 0s; }
        .jrn-pulse.j2 { animation-delay: 2.5s; }
        .jrn-pulse.j3 { animation-delay: 5s; }
        .jrn-pulse.j4 { animation-delay: 7.5s; }

        @keyframes jrnFlow {
          0%   { offset-distance: 0%;   opacity: 0; }
          2%   { opacity: 1; }
          94%  { opacity: 1; }
          98%  { offset-distance: 100%; opacity: 0; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>

      {/* Clipping wrapper — crops blank lavender above/below the branch arcs */}
      <div style={{ overflow: 'hidden', borderRadius: '16px', position: 'relative', width: '100%' }}>
        <div
          ref={stageRef}
          className={`jrn-stage${isAnimating ? ' is-animating' : ''}`}
          style={{
            marginTop: '-7.5%',
            marginBottom: '-7.5%',
            borderRadius: 0,
            background: 'linear-gradient(180deg, #DBDEF0 0%, #D2D6ED 60%, #CDD2EA 100%)',
            backgroundImage: 'radial-gradient(60% 50% at 78% 18%, rgba(233,119,193,.18), transparent 60%), radial-gradient(50% 50% at 12% 90%, rgba(233,119,193,.10), transparent 60%), linear-gradient(180deg, #DBDEF0 0%, #D2D6ED 60%, #CDD2EA 100%)',
          }}
        >
          <svg className="jrn-wires" viewBox="0 0 1200 600" aria-hidden="true">
            {/* Spine */}
            <path
              className="jrn-wire spine"
              d="M 80 300 Q 190 295 300 300 C 380 305 580 295 660 300 C 740 305 940 295 1020 300 Q 1080 302 1140 300"
            />
            {/* Top branch */}
            <path
              className="jrn-wire branch"
              d="M 300 300 C 380 200 580 200 660 300"
            />
            {/* Bottom branch */}
            <path
              className="jrn-wire branch"
              d="M 660 300 C 740 400 940 400 1020 300"
            />

            {/* Waypoints */}
            <circle className="jrn-waypoint" cx="300"  cy="300" r="3.5" />
            <circle className="jrn-waypoint" cx="660"  cy="300" r="3.5" />
            <circle className="jrn-waypoint" cx="1020" cy="300" r="3.5" />

            {/* Entry node */}
            <circle className="jrn-entry-halo" cx="80" cy="300" r="16" />
            <circle className="jrn-entry-dot"  cx="80" cy="300" r="6" />

            {/* Decision terminal */}
            <circle className="jrn-terminal-halo" cx="1140" cy="300" r="22" />
            <circle className="jrn-terminal-dot"  cx="1140" cy="300" r="9" />

            {/* Traveling pulses */}
            <circle className="jrn-pulse j1" r="3.8" />
            <circle className="jrn-pulse j2" r="3.8" />
            <circle className="jrn-pulse j3" r="3.8" />
            <circle className="jrn-pulse j4" r="3.8" />
          </svg>
        </div>
      </div>
    </>
  )
}
