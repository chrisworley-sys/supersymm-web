import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function RepeatableWorkflowsIllustration() {
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
        .rwf-stage {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 480 / 220;
        }
        .rwf-stage svg.rwf-wires {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .rwf-wire {
          fill: none;
          stroke: #E977C1;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-opacity: .75;
        }
        .rwf-disc {
          position: absolute;
          width: 92px;
          height: 92px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }
        .rwf-disc-bg {
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
        .rwf-disc-glow {
          position: absolute;
          inset: -3px;
          border-radius: 999px;
          border: 2px solid #D5F77C;
          opacity: 0;
          filter:
            drop-shadow(0 0 5px rgba(213,247,124,.85))
            drop-shadow(0 0 13px rgba(213,247,124,.45));
        }
        .rwf-disc-ico {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #22193B;
        }
        .rwf-disc-ico svg {
          width: 38px;
          height: 38px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .rwf-disc-eye {
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
        .rwf-ai-disc { left: 6%; }
        .rwf-spark-main {
          stroke: #D5F77C;
          stroke-width: 1.9;
          filter:
            drop-shadow(0 0 4px rgba(213,247,124,.85))
            drop-shadow(0 0 9px rgba(213,247,124,.45));
        }
        .rwf-stage.is-animating .rwf-ai-disc .rwf-disc-glow {
          animation: rwf-aiBreath 4.2s ease-in-out infinite;
        }
        @keyframes rwf-aiBreath {
          0%, 100% { opacity: .25; }
          50%      { opacity: .65; transform: scale(1.02); }
        }
        .rwf-stage.is-animating .rwf-spark-main {
          transform-box: fill-box;
          transform-origin: center;
          animation: rwf-sparkPulse 2.4s ease-in-out infinite;
        }
        @keyframes rwf-sparkPulse {
          0%, 100% { opacity: .85; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.08); }
        }
        .rwf-you-disc { right: 6%; }
        .rwf-check-main { stroke-width: 2; }
        .rwf-stage.is-animating .rwf-you-disc .rwf-disc-glow {
          animation: rwf-approveStamp 4.2s ease-in-out infinite;
        }
        .rwf-stage.is-animating .rwf-check-main {
          animation: rwf-checkStamp 4.2s ease-in-out infinite;
        }
        @keyframes rwf-approveStamp {
          0%, 50%   { opacity: 0; transform: scale(.95); }
          58%       { opacity: 1; transform: scale(1.06); }
          72%       { opacity: .5; transform: scale(1); }
          88%, 100% { opacity: 0; transform: scale(.95); }
        }
        @keyframes rwf-checkStamp {
          0%, 50%   { stroke: #22193B; filter: none; }
          58%, 80%  { stroke: #D5F77C;
                      filter:
                        drop-shadow(0 0 4px rgba(213,247,124,.85))
                        drop-shadow(0 0 10px rgba(213,247,124,.45)); }
          92%, 100% { stroke: #22193B; filter: none; }
        }
        .rwf-draft {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          z-index: 1;
          opacity: 0;
          pointer-events: none;
        }
        .rwf-draft-card {
          position: relative;
          padding: 10px 10px 12px;
          background: rgba(255,255,255,.95);
          border-radius: 8px;
          border: 1px solid rgba(34,25,59,.22);
          box-shadow:
            0 12px 22px -14px rgba(34,25,59,.45),
            0 3px 8px -4px rgba(34,25,59,.3);
        }
        .rwf-draft-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          background: linear-gradient(115deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 38%);
          mix-blend-mode: screen;
        }
        .rwf-draft-lines {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .rwf-draft-lines span {
          height: 3px;
          border-radius: 999px;
          background: rgba(34,25,59,.2);
        }
        .rwf-draft-lines span:nth-child(1) { width: 100%; }
        .rwf-draft-lines span:nth-child(2) { width: 80%; }
        .rwf-draft-lines span:nth-child(3) { width: 60%; }
        .rwf-stage.is-animating .rwf-draft {
          animation: rwf-draftHandoff 4.2s ease-in-out infinite;
        }
        @keyframes rwf-draftHandoff {
          0%, 6%   { left: 15.6%; opacity: 0; transform: translate(-50%, -50%) scale(.85); }
          14%      { opacity: 1;  transform: translate(-50%, -50%) scale(1); }
          50%      { left: 84.4%; opacity: 1; transform: translate(-50%, -50%) scale(1); }
          60%      { left: 84.4%; opacity: 0; transform: translate(-50%, -50%) scale(.85); }
          100%     { left: 84.4%; opacity: 0; transform: translate(-50%, -50%) scale(.85); }
        }
        @media (max-width: 500px) {
          .rwf-disc { width: 76px; height: 76px; }
          .rwf-disc-ico svg { width: 30px; height: 30px; }
          .rwf-draft { width: 56px; }
        }
      `}</style>

      <div
        ref={stageRef}
        className={`rwf-stage${isAnimating ? ' is-animating' : ''}`}
        aria-hidden="true"
      >
        <svg className="rwf-wires" viewBox="0 0 480 220" aria-hidden="true">
          <path className="rwf-wire" d="M 121 110 L 359 110" />
        </svg>

        <div className="rwf-disc rwf-ai-disc">
          <div className="rwf-disc-bg" />
          <div className="rwf-disc-glow" />
          <div className="rwf-disc-ico">
            <svg viewBox="0 0 24 24">
              <path className="rwf-spark-main" d="M12 4 13.4 10.6 20 12 13.4 13.4 12 20 10.6 13.4 4 12 10.6 10.6 Z" />
              <path d="M18.5 5.5 19 7.5 21 8 19 8.5 18.5 10.5 18 8.5 16 8 18 7.5 Z" />
            </svg>
          </div>
          <div className="rwf-disc-eye">AI</div>
        </div>

        <div className="rwf-draft">
          <div className="rwf-draft-card">
            <div className="rwf-draft-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="rwf-disc rwf-you-disc">
          <div className="rwf-disc-bg" />
          <div className="rwf-disc-glow" />
          <div className="rwf-disc-ico">
            <svg viewBox="0 0 24 24">
              <path className="rwf-check-main" d="m5 12 4 4 10-10" />
            </svg>
          </div>
          <div className="rwf-disc-eye">You</div>
        </div>
      </div>
    </>
  )
}
