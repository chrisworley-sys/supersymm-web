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

  const cls = `aai-stage${isAnimating ? ' is-animating' : ''}`

  return (
    <>
      <style>{`
        .aai-stage {
          position: relative;
          width: 100%;
          max-width: 460px;
          aspect-ratio: 520 / 130;
          margin: 0 auto;
        }

        .aai-pill {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 18px 18px 22px;
          border-radius: 999px;
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(34,25,59,.15);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 18px 36px -22px rgba(34,25,59,.35),
            0 6px 14px -10px rgba(34,25,59,.18);
          backdrop-filter: blur(10px) saturate(120%);
          -webkit-backdrop-filter: blur(10px) saturate(120%);
          overflow: hidden;
        }
        .aai-pill::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(115deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 38%);
          mix-blend-mode: screen;
        }

        /* AI sparkle mark */
        .aai-mark {
          position: relative;
          flex: 0 0 auto;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          color: #22193B;
        }
        .aai-mark svg {
          width: 100%;
          height: 100%;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .aai-spark-main {
          stroke: #D5F77C;
          stroke-width: 1.8;
          filter:
            drop-shadow(0 0 4px rgba(213,247,124,.85))
            drop-shadow(0 0 9px rgba(213,247,124,.45));
        }
        .is-animating .aai-spark-main {
          animation: aaiSparkPulse 2.6s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes aaiSparkPulse {
          0%, 100% { opacity: .85; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.08); }
        }

        /* placeholder line + caret */
        .aai-body {
          position: relative;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          gap: 4px;
          min-width: 0;
        }
        .aai-line {
          flex: 1 1 auto;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            rgba(34,25,59,.22) 0%,
            rgba(34,25,59,.22) 62%,
            rgba(34,25,59,0)   62%
          );
          max-width: 320px;
        }
        .aai-caret {
          display: inline-block;
          flex: 0 0 auto;
          width: 2px;
          height: 16px;
          background: #E977C1;
          border-radius: 1px;
          box-shadow: 0 0 6px rgba(233,119,193,.7);
          margin-left: -56%;
        }
        .is-animating .aai-caret {
          animation: aaiCaretBlink 1.1s steps(1, end) infinite;
        }
        @keyframes aaiCaretBlink {
          0%, 49%   { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        /* send button */
        .aai-send {
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
        .aai-send svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        @media (max-width: 480px) {
          .aai-pill { padding: 14px 14px 14px 18px; gap: 10px; }
          .aai-mark { width: 30px; height: 30px; }
          .aai-send { width: 38px; height: 38px; }
        }
      `}</style>

      <div ref={stageRef} className={cls} aria-hidden="true">
        <div className="aai-pill">
          {/* AI sparkle mark */}
          <div className="aai-mark">
            <svg viewBox="0 0 24 24">
              <path className="aai-spark-main" d="M12 4 13.4 10.6 20 12 13.4 13.4 12 20 10.6 13.4 4 12 10.6 10.6 Z" />
              <path d="M18.5 5.5 19 7.5 21 8 19 8.5 18.5 10.5 18 8.5 16 8 18 7.5 Z" />
            </svg>
          </div>

          {/* Typing placeholder + caret */}
          <div className="aai-body">
            <span className="aai-line" />
            <span className="aai-caret" />
          </div>

          {/* Send button */}
          <div className="aai-send">
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
