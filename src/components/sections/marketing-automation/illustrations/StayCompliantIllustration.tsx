import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function StayCompliantIllustration() {
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

  const cls = `stc-stage${isAnimating ? ' is-animating' : ''}`

  return (
    <>
      <style>{`
        .stc-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 720 / 640;
          max-width: 720px;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(180deg, #DBDEF0 0%, #D2D6ED 60%, #CDD2EA 100%);
          background-image:
            radial-gradient(60% 50% at 78% 18%, rgba(233,119,193,.18), transparent 60%),
            radial-gradient(50% 50% at 12% 90%, rgba(233,119,193,.10), transparent 60%),
            linear-gradient(180deg, #DBDEF0 0%, #D2D6ED 60%, #CDD2EA 100%);
        }
        .stc-wires {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .stc-wire {
          fill: none;
          stroke: #E977C1;
          stroke-width: 1.2;
          stroke-linecap: round;
          stroke-opacity: .5;
        }

        /* framework chip row */
        .stc-frameworks {
          position: absolute;
          left: 50%;
          top: 6%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          align-items: center;
          z-index: 3;
          white-space: nowrap;
        }
        .stc-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px 9px 11px;
          border-radius: 999px;
          background: rgba(255,255,255,.74);
          border: 1px solid rgba(34,25,59,.28);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.85),
            0 12px 24px -18px rgba(34,25,59,.35);
          backdrop-filter: blur(8px) saturate(120%);
          -webkit-backdrop-filter: blur(8px) saturate(120%);
          font: 700 10.5px/1 'Inter', sans-serif;
          letter-spacing: .13em;
          text-transform: uppercase;
          color: #22193B;
        }
        .stc-dot {
          width: 7px; height: 7px;
          border-radius: 999px;
          background: #D5F77C;
          box-shadow: 0 0 6px rgba(213,247,124,.85), 0 0 12px rgba(213,247,124,.45);
          flex-shrink: 0;
        }
        .stc-stage.is-animating .stc-chip .stc-dot {
          animation: stcChipBlink 5.2s ease-in-out infinite;
        }
        .stc-chip:nth-child(1) .stc-dot { animation-delay: 0s; }
        .stc-chip:nth-child(2) .stc-dot { animation-delay: 1.3s; }
        .stc-chip:nth-child(3) .stc-dot { animation-delay: 2.6s; }
        .stc-chip:nth-child(4) .stc-dot { animation-delay: 3.9s; }
        @keyframes stcChipBlink {
          0%, 6%, 70%, 100% { opacity: .35; box-shadow: 0 0 4px rgba(213,247,124,.45); }
          20%, 50%           { opacity: 1;   box-shadow: 0 0 6px rgba(213,247,124,.85), 0 0 12px rgba(213,247,124,.45); }
        }

        /* vault */
        .stc-vault {
          position: absolute;
          left: 50%;
          top: 56%;
          transform: translate(-50%, -50%);
          width: 50%;
          aspect-ratio: 1 / 1;
          z-index: 2;
        }
        .stc-vault-bg {
          position: absolute;
          inset: 0;
          border-radius: 20%;
          background: #22193B;
          background-image:
            radial-gradient(120% 80% at 30% 18%, rgba(255,255,255,.07), transparent 55%),
            linear-gradient(180deg, #2A2046 0%, #22193B 55%, #1B1430 100%);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.08),
            0 30px 60px -28px rgba(34,25,59,.55),
            0 60px 120px -60px rgba(34,25,59,.4);
        }
        .stc-corona {
          position: absolute;
          inset: -1.1%;
          border-radius: 21%;
          border: 1.5px solid #D5F77C;
          opacity: 0;
          filter:
            drop-shadow(0 0 8px rgba(213,247,124,.6))
            drop-shadow(0 0 18px rgba(213,247,124,.35));
        }
        .stc-stage.is-animating .stc-corona {
          animation: stcCorona 5.2s ease-in-out infinite;
        }
        @keyframes stcCorona {
          0%, 60%, 100% { opacity: 0;   transform: scale(1); }
          18%, 38%      { opacity: .9;  transform: scale(1.015); }
        }
        .stc-shield {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: rgba(255,255,255,.92);
          pointer-events: none;
        }
        .stc-shield svg {
          width: 64%; height: 64%;
          fill: none; stroke: currentColor;
          stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round;
          filter: drop-shadow(0 0 6px rgba(213,247,124,.18));
        }
        .stc-shield-check {
          stroke: #D5F77C;
          stroke-width: 1.8;
          filter:
            drop-shadow(0 0 5px rgba(213,247,124,.7))
            drop-shadow(0 0 12px rgba(213,247,124,.4));
        }

        /* draft document */
        .stc-draft {
          position: absolute;
          left: 50%;
          top: 52%;
          transform: translate(-50%, -50%) rotate(-4deg);
          width: 56%;
          z-index: 3;
        }
        .stc-draft-card {
          position: relative;
          padding: 14px 14px 16px;
          background: rgba(255,255,255,.92);
          border-radius: 12px;
          border: 1px solid rgba(34,25,59,.22);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 22px 40px -22px rgba(0,0,0,.55),
            0 6px 14px -10px rgba(0,0,0,.45);
          overflow: hidden;
        }
        .stc-draft-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(115deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 38%);
          mix-blend-mode: screen;
        }
        .stc-draft-eye {
          position: relative;
          font: 700 9px/1 'Inter', sans-serif;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #0057B8;
          margin-bottom: 11px;
        }
        .stc-draft-lines {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .stc-draft-line {
          height: 5px;
          border-radius: 999px;
          background: rgba(34,25,59,.18);
        }
        .stc-draft-line.full   { width: 100%; }
        .stc-draft-line.medium { width: 88%; }
        .stc-draft-line.short  { width: 60%; }
        .stc-draft-line.tail   { width: 42%; background: rgba(34,25,59,.12); }
        .stc-caret {
          display: inline-block;
          width: 2px; height: 9px;
          background: #E977C1;
          margin-top: 7px; margin-left: 2px;
          vertical-align: middle;
          border-radius: 1px;
          box-shadow: 0 0 6px rgba(233,119,193,.7);
        }
        .stc-stage.is-animating .stc-caret {
          animation: stcCaret 1.1s steps(1, end) infinite;
        }
        @keyframes stcCaret {
          0%, 49%   { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .stc-stamp {
          position: absolute;
          right: -10px; bottom: -10px;
          width: 36px; height: 36px;
          border-radius: 999px;
          background: #22193B;
          display: grid;
          place-items: center;
          color: #D5F77C;
          border: 2px solid rgba(255,255,255,.92);
          box-shadow:
            0 10px 20px -10px rgba(0,0,0,.55),
            0 0 0 1px rgba(34,25,59,.5);
        }
        .stc-stamp svg {
          width: 17px; height: 17px;
          fill: none; stroke: currentColor;
          stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round;
          filter:
            drop-shadow(0 0 4px rgba(213,247,124,.85))
            drop-shadow(0 0 9px rgba(213,247,124,.4));
        }

        @media (max-width: 500px) {
          .stc-frameworks { gap: 6px; }
          .stc-chip { padding: 7px 10px 7px 9px; font-size: 9px; letter-spacing: .09em; gap: 6px; }
          .stc-dot  { width: 6px; height: 6px; }
        }
      `}</style>

      <div ref={stageRef} className={cls} style={{ width: '100%' }}>
        {/* Feeder wires — chips down to vault */}
        <svg className="stc-wires" viewBox="0 0 720 640" aria-hidden="true">
          <path className="stc-wire" d="M 240 80 C 240 150, 270 165, 290 200" />
          <path className="stc-wire" d="M 320 80 C 320 150, 330 170, 340 200" />
          <path className="stc-wire" d="M 400 80 C 400 150, 390 170, 380 200" />
          <path className="stc-wire" d="M 480 80 C 480 150, 450 165, 430 200" />
        </svg>

        {/* Framework chips */}
        <div className="stc-frameworks" aria-hidden="true">
          {(['SEC', 'HIPAA', 'Bar', 'FINRA'] as const).map((label) => (
            <span key={label} className="stc-chip">
              <span className="stc-dot" />
              {label}
            </span>
          ))}
        </div>

        {/* Vault */}
        <div className="stc-vault" aria-hidden="true">
          <div className="stc-vault-bg" />
          <div className="stc-corona" />

          {/* Shield glyph */}
          <div className="stc-shield">
            <svg viewBox="0 0 24 24">
              <path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z" />
              <path className="stc-shield-check" d="m8.5 12 2.5 2.5L15.5 10" />
            </svg>
          </div>

          {/* Draft document overlay */}
          <div className="stc-draft">
            <div className="stc-draft-card">
              <div className="stc-draft-eye">Draft</div>
              <div className="stc-draft-lines">
                <span className="stc-draft-line full" />
                <span className="stc-draft-line medium" />
                <span className="stc-draft-line full" />
                <span className="stc-draft-line short" />
                <span className="stc-draft-line tail" />
              </div>
              <span className="stc-caret" />
              <div className="stc-stamp">
                <svg viewBox="0 0 24 24">
                  <path d="m5 12 4 4 10-10" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
