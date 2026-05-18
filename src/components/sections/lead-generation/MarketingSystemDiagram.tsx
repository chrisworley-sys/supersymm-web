import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const PRINCIPLES = [
  'Be present',
  'Earn the next step',
  'Speed plus trust',
  'Compliance built in',
  'Continue after the sale',
]

const STAGES = [
  { num: '01', title: 'Get',     em: 'found',    chips: ['Content', 'Search', 'Social', 'Paid'] },
  { num: '02', title: 'Capture', em: 'interest',  chips: ['Pages', 'Magnets', 'Assessments'] },
  { num: '03', title: 'Earn',    em: 'trust',     chips: ['Nurture', 'Speed', 'Human conversion'] },
  { num: '04', title: 'Grow',    em: 'LTV',       chips: ['Onboarding', 'Expansion', 'Referrals', 'Reviews'] },
]

const FEATURES: { name: string; icon: React.ReactNode }[] = [
  {
    name: 'Unified data',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="7" ry="2.5" />
        <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
        <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      </svg>
    ),
  },
  {
    name: 'Smart triggers',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    ),
  },
  {
    name: 'Journey orchestration',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="18" cy="6" r="2.2" />
        <circle cx="12" cy="18" r="2.2" />
        <path d="M7.5 7.5 11 16M16.5 7.5 13 16" />
      </svg>
    ),
  },
  {
    name: 'Omni-channel',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 13 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    ),
  },
  {
    name: 'Compliance layer',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
]

export default function MarketingSystemDiagram() {
  const prefersReduced = useReducedMotion() ?? false
  const frameRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (prefersReduced) return
    const el = frameRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsAnimating(true)
        io.disconnect()
      }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [prefersReduced])

  return (
    <>
      <style>{`
        @keyframes ss-me-pulse {
          0%   { offset-distance: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          72%  { opacity: 1; }
          92%  { offset-distance: 100%; opacity: 0; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .ss-me-pulse-dot {
          fill: #D5F77C;
          filter: drop-shadow(0 0 3px rgba(213,247,124,.85)) drop-shadow(0 0 6px rgba(213,247,124,.55));
          opacity: 0;
          offset-path: path('M 0 12 L 24 12');
          offset-rotate: 0deg;
        }
        .ss-me-on .ss-me-pulse-dot {
          animation: ss-me-pulse 3.6s linear infinite;
        }
        .ss-me-stage-card::before {
          content: "";
          position: absolute;
          inset: 0 0 auto 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #E977C1 50%, transparent 100%);
          opacity: .65;
          border-radius: 16px 16px 0 0;
        }
        .ss-me-stage-card::after {
          content: "";
          position: absolute;
          top: 14px; right: 14px;
          width: 5px; height: 5px; border-radius: 999px;
          background: #E977C1;
          box-shadow: 0 0 5px rgba(233,119,193,.7);
        }
        @media (max-width: 820px) {
          .ss-me-journey { grid-template-columns: 1fr 1fr !important; }
          .ss-me-arrow { display: none !important; }
          .ss-me-features { grid-template-columns: repeat(3, 1fr) !important; }
          .ss-me-footer { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .ss-me-journey { grid-template-columns: 1fr !important; }
          .ss-me-features { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Outer glass frame */}
      <div
        ref={frameRef}
        className={isAnimating ? 'ss-me-on' : ''}
        style={{
          position: 'relative',
          borderRadius: '22px',
          padding: 'clamp(22px, 3vw, 36px) clamp(18px, 3vw, 36px) clamp(20px, 3vw, 30px)',
          background: 'rgba(255,255,255,0.55)',
          border: '1.5px solid rgba(34,25,59,0.22)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85), 0 28px 60px -38px rgba(34,25,59,0.35)',
          backdropFilter: 'blur(10px) saturate(120%)',
          WebkitBackdropFilter: 'blur(10px) saturate(120%)',
          overflow: 'hidden',
        }}
      >
        {/* Glass sheen overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'linear-gradient(115deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 38%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* ── 1. Universal Principles ─────────────── */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap', marginBottom: '28px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0057B8', flexShrink: 0 }}>
            Universal Principles
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {PRINCIPLES.map((p) => (
              <span
                key={p}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 14px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(34,25,59,0.28)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '12px',
                  color: '#22193B',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: '#E977C1', boxShadow: '0 0 6px rgba(233,119,193,0.6)', flexShrink: 0 }} />
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* ── 2. Journey stages ───────────────────── */}
        <div
          className="ss-me-journey"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 28px 1fr 28px 1fr 28px 1fr',
            gap: 0,
            alignItems: 'stretch',
            marginBottom: '24px',
          }}
        >
          {STAGES.map((stage, i) => (
            <>
              {/* Stage card */}
              <article
                key={stage.num}
                className="ss-me-stage-card"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  padding: '22px 22px 24px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.62)',
                  border: '1px solid rgba(34,25,59,0.28)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '28px', lineHeight: 1, letterSpacing: '-0.01em', color: '#22193B', opacity: 0.6 }}>
                  {stage.num}
                </div>
                <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: 1.15, letterSpacing: '-0.005em', color: '#22193B' }}>
                  {stage.title}{' '}
                  <em style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400 }}>{stage.em}</em>
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', paddingTop: '6px' }}>
                  {stage.chips.map((ch) => (
                    <span
                      key={ch}
                      style={{
                        display: 'inline-flex',
                        padding: '5px 10px',
                        borderRadius: '999px',
                        background: 'rgba(255,255,255,0.7)',
                        border: '1px solid rgba(34,25,59,0.22)',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '11px',
                        color: '#22193B',
                        letterSpacing: '0.01em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </article>

              {/* Arrow connector between stages */}
              {i < STAGES.length - 1 && (
                <div
                  className="ss-me-arrow"
                  style={{ display: 'grid', placeItems: 'center', position: 'relative' }}
                >
                  <svg viewBox="0 0 28 24" aria-hidden="true" style={{ width: '100%', height: '24px', overflow: 'visible' }}>
                    <path
                      d="M 0 12 L 24 12"
                      fill="none"
                      stroke="#E977C1"
                      strokeWidth={1.4}
                      strokeLinecap="round"
                      strokeOpacity={0.85}
                    />
                    <path d="M 24 12 L 18 8 L 19.5 12 L 18 16 Z" fill="#E977C1" />
                    <circle
                      className="ss-me-pulse-dot"
                      r="2.6"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    />
                  </svg>
                </div>
              )}
            </>
          ))}
        </div>

        {/* ── 3. Platform features ─────────────────── */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '14px',
            background: 'rgba(255,255,255,0.42)',
            border: '1px solid rgba(34,25,59,0.18)',
            padding: '18px 20px 20px',
            marginBottom: '18px',
          }}
        >
          <span style={{ display: 'block', marginBottom: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0057B8' }}>
            Powered by the SuperSymm Platform
          </span>
          <div
            className="ss-me-features"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}
          >
            {FEATURES.map(({ name, icon }) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 10px 12px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.78)',
                  border: '1px solid rgba(34,25,59,0.18)',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    width: '32px',
                    height: '32px',
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '8px',
                    background: 'rgba(34,25,59,0.06)',
                    color: '#22193B',
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '12px', lineHeight: 1.2, color: '#22193B' }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. Footer bar ───────────────────────── */}
        <div
          className="ss-me-footer"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '18px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '11px 16px',
              borderRadius: '10px',
              background: '#D5F77C',
              border: '1px solid rgba(34,25,59,0.18)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '12.5px',
              color: '#22193B',
              letterSpacing: '0.01em',
            }}
          >
            <svg viewBox="0 0 24 24" width={16} height={16} fill="#22193B" aria-hidden="true">
              <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
            </svg>
            Expert automation + your control
          </div>
          <div style={{ display: 'flex', gap: '18px', alignItems: 'center', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '11.5px', color: '#22193B', letterSpacing: '0.02em' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: '#E977C1', boxShadow: '0 0 5px rgba(233,119,193,0.6)', flexShrink: 0 }} />
              Outside view
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: '#22193B', flexShrink: 0 }} />
              Inside view
            </span>
          </div>
        </div>

      </div>
    </>
  )
}
