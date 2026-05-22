import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function AssistiveAIIllustration() {
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
        .ass-stage {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 520 / 130;
        }
        .ass-input {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 18px 18px 22px;
          border-radius: 999px;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(34,25,59,.18);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 18px 36px -22px rgba(34,25,59,.45),
            0 6px 14px -10px rgba(34,25,59,.25);
          -webkit-backdrop-filter: blur(10px) saturate(120%);
                  backdrop-filter: blur(10px) saturate(120%);
          overflow: hidden;
        }
        .ass-input::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(115deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 38%);
          mix-blend-mode: screen;
        }
        .ass-mark {
          position: relative;
          flex: 0 0 auto;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          color: #22193B;
        }
        .ass-mark svg {
          width: 100%;
          height: 100%;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .ass-spark-main {
          stroke: #D5F77C;
          stroke-width: 1.8;
          filter:
            drop-shadow(0 0 4px rgba(213,247,124,.85))
            drop-shadow(0 0 9px rgba(213,247,124,.45));
        }
        .ass-stage.is-animating .ass-spark-main {
          animation: ass-sparkPulse 2.6s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes ass-sparkPulse {
          0%, 100% { opacity: .85; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.08); }
        }
        .ass-body {
          position: relative;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          gap: 4px;
          min-width: 0;
        }
        .ass-line {
          flex: 1 1 auto;
          height: 8px;
          border-radius: 999px;
          background:
            linear-gradient(90deg,
              rgba(34,25,59,.22) 0%,
              rgba(34,25,59,.22) 62%,
              rgba(34,25,59,0)   62%);
          max-width: 320px;
        }
        .ass-caret {
          display: inline-block;
          flex: 0 0 auto;
          width: 2px;
          height: 16px;
          background: #E977C1;
          border-radius: 1px;
          box-shadow: 0 0 6px rgba(233,119,193,.7);
          margin-left: -56%;
        }
        .ass-stage.is-animating .ass-caret {
          animation: ass-caretBlink 1.1s steps(1, end) infinite;
        }
        @keyframes ass-caretBlink {
          0%, 49%   { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .ass-send {
          position: relative;
          flex: 0 0 auto;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: #22193B;
          display: grid;
          place-items: center;
          color: #fff;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.1),
            0 8px 18px -10px rgba(34,25,59,.6);
        }
        .ass-send svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>

      <div
        ref={stageRef}
        className={`ass-stage${isAnimating ? ' is-animating' : ''}`}
        aria-hidden="true"
      >
        <div className="ass-input">
          <div className="ass-mark">
            <svg viewBox="0 0 24 24">
              <path className="ass-spark-main" d="M12 4 13.4 10.6 20 12 13.4 13.4 12 20 10.6 13.4 4 12 10.6 10.6 Z" />
              <path d="M18.5 5.5 19 7.5 21 8 19 8.5 18.5 10.5 18 8.5 16 8 18 7.5 Z" />
            </svg>
          </div>
          <div className="ass-body">
            <span className="ass-line" />
            <span className="ass-caret" />
          </div>
          <div className="ass-send">
            <svg viewBox="0 0 24 24">
              <path d="M5 12h13" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
