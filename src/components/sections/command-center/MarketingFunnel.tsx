import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'

/* ─────────────────────────────────────────────────────────────
   Marketing Funnel — 5-stage data-driven funnel visualization.
   Recreated from the Claude Design "Marketing Funnel.html" handoff.
   Coordinate canvas 1440×800; cards positioned by stage + index;
   pink Bezier wires connect computed card anchors; lime pulses
   flow along each wire L→R. Whole canvas scales to fit container.
   ───────────────────────────────────────────────────────────── */

const CW = 1440
const CH = 800
const CARD_W = 210
const CARD_H = 104
const COL_X = [144, 432, 720, 1008, 1296] as const
const Y4 = [228, 378, 528, 678] as const
const Y3 = [304, 454, 604] as const

type ChannelKey = 'social' | 'email' | 'page'
type StageBadge = 'awareness' | 'interest' | 'consideration' | 'decision' | 'retention'

type CardData = {
  c: ChannelKey
  type: string
  name: string
  stats: [string, string, string]
}

type Stage = {
  ch: StageBadge
  label: string
  desc: string
  cards: CardData[]
}

const STAGES: Stage[] = [
  {
    ch: 'awareness',
    label: 'Awareness',
    desc: 'Introduce your brand and attract attention',
    cards: [
      { c: 'social', type: 'Social Post', name: 'New product teaser',         stats: ['12.4K', '186', '1.2K'] },
      { c: 'social', type: 'Social Post', name: 'Industry insights carousel', stats: ['8.7K', '128', '908'] },
      { c: 'social', type: 'Social Post', name: 'Quick tip video',            stats: ['6.3K', '97', '645'] },
      { c: 'social', type: 'Social Post', name: 'Brand story post',           stats: ['5.1K', '76', '512'] },
    ],
  },
  {
    ch: 'interest',
    label: 'Interest',
    desc: 'Spark curiosity and engagement',
    cards: [
      { c: 'email', type: 'Email',        name: 'Welcome series email #1',    stats: ['9.8K', '32%', '12%'] },
      { c: 'email', type: 'Email',        name: 'Educational content',        stats: ['7.6K', '28%', '11%'] },
      { c: 'page',  type: 'Landing Page', name: 'Ultimate guide landing page', stats: ['6.2K', '38%', '18%'] },
    ],
  },
  {
    ch: 'consideration',
    label: 'Consideration',
    desc: 'Build trust and educate your audience',
    cards: [
      { c: 'page',  type: 'Landing Page', name: 'Solution overview page',     stats: ['4.6K', '31%', '16%'] },
      { c: 'email', type: 'Email',        name: 'Case study email',           stats: ['4.1K', '26%', '10%'] },
      { c: 'page',  type: 'Landing Page', name: 'Pricing page',               stats: ['3.2K', '29%', '14%'] },
    ],
  },
  {
    ch: 'decision',
    label: 'Decision',
    desc: 'Help prospects choose your solution',
    cards: [
      { c: 'email', type: 'Email',        name: 'Limited time offer',         stats: ['2.8K', '35%', '13%'] },
      { c: 'page',  type: 'Landing Page', name: 'Free trial signup',          stats: ['2.3K', '42%', '20%'] },
      { c: 'email', type: 'Email',        name: 'Demo invitation',            stats: ['1.9K', '33%', '10%'] },
    ],
  },
  {
    ch: 'retention',
    label: 'Retention',
    desc: 'Delight customers and drive loyalty',
    cards: [
      { c: 'email',  type: 'Email',        name: 'Onboarding series',          stats: ['2.6K', '41%', '15%'] },
      { c: 'email',  type: 'Email',        name: 'Product tips & tricks',      stats: ['2.4K', '38%', '14%'] },
      { c: 'social', type: 'Social Post',  name: 'Community highlight',        stats: ['1.8K', '92', '620'] },
      { c: 'page',   type: 'Landing Page', name: 'Resource center',            stats: ['1.6K', '27%', '12%'] },
    ],
  },
]

/* Connections between adjacent stages: [srcIndex, tgtIndex] */
const LINKS: Array<Array<[number, number]>> = [
  [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2], [3, 2]],
  [[0, 0], [1, 1], [2, 2], [0, 1], [2, 1]],
  [[0, 0], [1, 1], [2, 2], [1, 0], [1, 2]],
  [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2], [2, 3]],
]

function yArr(n: number) {
  return n === 4 ? Y4 : Y3
}
function cardTop(stageIdx: number, i: number) {
  const ys = yArr(STAGES[stageIdx].cards.length)
  return ys[i] - CARD_H / 2
}
function cardCenterY(stageIdx: number, i: number) {
  return yArr(STAGES[stageIdx].cards.length)[i]
}

/* ─── Icons ─────────────────────────────────────────────────── */

const channelIcons: Record<ChannelKey, ReactNode> = {
  social: (
    <>
      <path d="M6 12a2.4 2.4 0 1 0 0-.01M17 6a2.4 2.4 0 1 0 0-.01M17 18a2.4 2.4 0 1 0 0-.01" />
      <path d="M8.1 10.9 14.9 7.1M8.1 13.1 14.9 16.9" />
    </>
  ),
  email: (
    <>
      <rect x="3.3" y="5.3" width="17.4" height="13.4" rx="2.2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  page: (
    <>
      <rect x="3.3" y="4.6" width="17.4" height="14.8" rx="2.2" />
      <path d="M3.3 9.2h17.4" />
      <circle cx="6.4" cy="6.9" r=".75" fill="currentColor" stroke="none" />
      <circle cx="8.7" cy="6.9" r=".75" fill="currentColor" stroke="none" />
    </>
  ),
}

const stageIcons: Record<StageBadge, ReactNode> = {
  awareness: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
    </>
  ),
  interest: <path d="M12 20s-7-4.5-7-9.6A3.4 3.4 0 0 1 12 7.2 3.4 3.4 0 0 1 19 10.4C19 15.5 12 20 12 20Z" />,
  consideration: (
    <>
      <circle cx="11" cy="11" r="6.2" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  decision: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="m8.4 12 2.5 2.5 4.7-4.8" />
    </>
  ),
  retention: (
    <>
      <path d="M4.2 12a7.8 7.8 0 0 1 13.4-5.4L20 9" />
      <path d="M19.8 12a7.8 7.8 0 0 1-13.4 5.4L4 15" />
      <path d="M20 4.5V9h-4.5M4 19.5V15h4.5" />
    </>
  ),
}

const statIcons = {
  views: <path d="M1.5 8S4 3.6 8 3.6 14.5 8 14.5 8 12 12.4 8 12.4 1.5 8 1.5 8Z" />,
  viewsCircle: <circle cx="8" cy="8" r="2" />,
  rate: <path d="M8 13V4M4.4 7.6 8 4l3.6 3.6" />,
  react: <path d="M8 13.4S2.6 10 2.6 6.3A2.7 2.7 0 0 1 8 5.1a2.7 2.7 0 0 1 5.4 1.2C13.4 10 8 13.4 8 13.4Z" />,
}

function StatIcon({ value, idx }: { value: string; idx: number }) {
  if (value.indexOf('%') !== -1) {
    return (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {statIcons.rate}
      </svg>
    )
  }
  if (idx === 0) {
    return (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {statIcons.views}
        {statIcons.viewsCircle}
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {statIcons.react}
    </svg>
  )
}

/* ─── Channel tints ─────────────────────────────────────────── */

const channelTints: Record<ChannelKey, { bg: string; color: string; border: string }> = {
  social: { bg: 'rgba(233,119,193,0.16)', color: '#D331A0', border: 'rgba(233,119,193,0.32)' },
  email:  { bg: 'rgba(0,87,184,0.13)',    color: '#0057B8', border: 'rgba(0,87,184,0.26)' },
  page:   { bg: 'rgba(126,149,68,0.18)',  color: '#7E9544', border: 'rgba(126,149,68,0.36)' },
}

/* ─── Funnel Overview band data ─────────────────────────────── */

const overviewStages = [
  { label: 'Awareness',     value: '32.5K', sub: 'Views' },
  { label: 'Interest',      value: '17.4K', sub: 'Engaged' },
  { label: 'Consideration', value: '8.7K',  sub: 'Qualified' },
  { label: 'Decision',      value: '4.2K',  sub: 'Converted' },
  { label: 'Retention',     value: '3.6K',  sub: 'Retained' },
]

/* ─── Component ─────────────────────────────────────────────── */

export default function MarketingFunnel() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  /* Scale canvas to fit container width */
  useLayoutEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const fit = () => {
      const s = Math.min(1, wrap.clientWidth / CW)
      setScale(s)
    }
    fit()
    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(fit)
      ro.observe(wrap)
      return () => ro.disconnect()
    }
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  /* Kick off pulse animations when the funnel scrolls into view */
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    if (!('IntersectionObserver' in window)) {
      setIsAnimating(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setIsAnimating(true)
        })
      },
      { threshold: 0.1 }
    )
    io.observe(wrap)
    return () => io.disconnect()
  }, [])

  /* Build wire/anchor/pulse list */
  const wires: Array<{
    d: string
    sx: number
    sy: number
    tx: number
    ty: number
    delay: number
  }> = []
  let pulseIdx = 0
  LINKS.forEach((pairs, ti) => {
    const sxR = COL_X[ti] + CARD_W / 2
    const txL = COL_X[ti + 1] - CARD_W / 2
    pairs.forEach((pr, k) => {
      const y1 = cardCenterY(ti, pr[0])
      const y2 = cardCenterY(ti + 1, pr[1])
      const dx = (txL - sxR) * 0.55
      const d = `M ${sxR} ${y1} C ${sxR + dx} ${y1}, ${txL - dx} ${y2}, ${txL} ${y2}`
      wires.push({ d, sx: sxR, sy: y1, tx: txL, ty: y2, delay: ti * 0.5 + k * 0.32 })
      pulseIdx++
    })
  })

  return (
    <>
      <style>{`
        @keyframes mf-flow {
          0%   { offset-distance: 0%;   opacity: 0; }
          6%   { opacity: 1; }
          88%  { opacity: 1; }
          96%  { offset-distance: 100%; opacity: 0; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .mf-pulse { opacity: 0; }
        .mf-is-animating .mf-pulse { animation: mf-flow 3.8s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mf-is-animating .mf-pulse { animation: none; opacity: 0; }
        }
      `}</style>

      {/* Outer lavender section with radial accents */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'var(--ss-bg-lavender, #D2D6ED)',
          backgroundImage: `
            radial-gradient(60% 50% at 80% 12%, rgba(233,119,193,0.20), transparent 60%),
            radial-gradient(55% 55% at 8% 92%, rgba(233,119,193,0.12), transparent 60%),
            linear-gradient(180deg, #DBDEF0 0%, #D2D6ED 55%, #CDD2EA 100%)
          `,
          padding: '36px 28px 32px',
        }}
      >
        {/* Glass panel containing the scaled canvas */}
        <div
          style={{
            position: 'relative',
            borderRadius: '28px',
            background: 'rgba(255,255,255,0.30)',
            border: '1px solid rgba(255,255,255,0.55)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.7), 0 30px 70px -44px rgba(34,25,59,0.5)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            overflow: 'hidden',
          }}
        >
          <div
            ref={wrapRef}
            className={isAnimating ? 'mf-is-animating' : undefined}
            style={{ position: 'relative', width: '100%', height: CH * scale }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: CW,
                height: CH,
                transformOrigin: 'top left',
                transform: `scale(${scale})`,
              }}
            >
              {/* SVG wires layer */}
              <svg
                viewBox={`0 0 ${CW} ${CH}`}
                preserveAspectRatio="none"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: CW,
                  height: CH,
                  overflow: 'visible',
                  pointerEvents: 'none',
                }}
              >
                {wires.map((w, i) => (
                  <path
                    key={`wire-${i}`}
                    d={w.d}
                    fill="none"
                    stroke="#E977C1"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeOpacity={0.42}
                  />
                ))}
                {wires.map((w, i) => (
                  <g key={`anchors-${i}`}>
                    <circle cx={w.sx} cy={w.sy} r={6} fill="#E977C1" fillOpacity={0.16} />
                    <circle cx={w.sx} cy={w.sy} r={2.6} fill="#E977C1" fillOpacity={0.9} />
                    <circle cx={w.tx} cy={w.ty} r={6} fill="#E977C1" fillOpacity={0.16} />
                    <circle cx={w.tx} cy={w.ty} r={2.6} fill="#E977C1" fillOpacity={0.9} />
                  </g>
                ))}
                {wires.map((w, i) => (
                  <circle
                    key={`pulse-${i}`}
                    className="mf-pulse"
                    r={3.4}
                    fill="#D5F77C"
                    style={
                      {
                        offsetPath: `path('${w.d}')`,
                        offsetRotate: '0deg',
                        animationDelay: `${w.delay.toFixed(2)}s`,
                        filter:
                          'drop-shadow(0 0 3px rgba(213,247,124,0.9)) drop-shadow(0 0 7px rgba(213,247,124,0.5))',
                      } as React.CSSProperties
                    }
                  />
                ))}
              </svg>

              {/* Column headers + cards */}
              {STAGES.map((st, si) => {
                const cx = COL_X[si]
                return (
                  <div key={`col-${si}`}>
                    {/* Column header */}
                    <div
                      style={{
                        position: 'absolute',
                        left: cx - CARD_W / 2,
                        top: 34,
                        width: CARD_W,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 9 }}>
                        <span
                          style={{
                            flex: '0 0 auto',
                            width: 34,
                            height: 34,
                            borderRadius: 999,
                            display: 'grid',
                            placeItems: 'center',
                            background: 'rgba(255,255,255,0.7)',
                            border: '1px solid rgba(34,25,59,0.18)',
                            color: '#0057B8',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9)',
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.7}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ width: 18, height: 18 }}
                          >
                            {stageIcons[st.ch]}
                          </svg>
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700,
                            fontSize: 15,
                            lineHeight: 1,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#22193B',
                          }}
                        >
                          {st.label}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                          fontSize: 11.5,
                          lineHeight: 1.34,
                          color: 'rgba(34,25,59,0.55)',
                        }}
                      >
                        {st.desc}
                      </div>
                    </div>

                    {/* Cards */}
                    {st.cards.map((cd, ci) => {
                      const tint = channelTints[cd.c]
                      return (
                        <article
                          key={`card-${si}-${ci}`}
                          style={{
                            position: 'absolute',
                            left: cx - CARD_W / 2,
                            top: cardTop(si, ci),
                            width: CARD_W,
                            height: CARD_H,
                            boxSizing: 'border-box',
                            padding: '12px 13px',
                            borderRadius: 15,
                            background: 'rgba(255,255,255,0.74)',
                            border: '1px solid rgba(34,25,59,0.16)',
                            boxShadow:
                              'inset 0 1px 0 rgba(255,255,255,0.9), 0 14px 28px -22px rgba(34,25,59,0.5)',
                            backdropFilter: 'blur(8px) saturate(120%)',
                            WebkitBackdropFilter: 'blur(8px) saturate(120%)',
                            overflow: 'hidden',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                            <span
                              style={{
                                flex: '0 0 auto',
                                width: 32,
                                height: 32,
                                borderRadius: 9,
                                display: 'grid',
                                placeItems: 'center',
                                background: tint.bg,
                                color: tint.color,
                                border: `1px solid ${tint.border}`,
                              }}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.7}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ width: 17, height: 17 }}
                              >
                                {channelIcons[cd.c]}
                              </svg>
                            </span>
                            <div style={{ minWidth: 0, flex: '1 1 auto' }}>
                              <div
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 600,
                                  fontSize: 9,
                                  lineHeight: 1,
                                  letterSpacing: '0.1em',
                                  textTransform: 'uppercase',
                                  color: '#0057B8',
                                  marginBottom: 4,
                                }}
                              >
                                {cd.type}
                              </div>
                              <div
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 600,
                                  fontSize: 13,
                                  lineHeight: 1.18,
                                  letterSpacing: '-0.005em',
                                  color: '#22193B',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                }}
                              >
                                {cd.name}
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 13,
                              marginTop: 10,
                            }}
                          >
                            {cd.stats.map((v, idx) => (
                              <span
                                key={`stat-${idx}`}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 4,
                                  fontFamily: "'Inter', sans-serif",
                                  fontWeight: 600,
                                  fontSize: 10.5,
                                  lineHeight: 1,
                                  color: 'rgba(34,25,59,0.6)',
                                }}
                              >
                                <span style={{ width: 12, height: 12, display: 'inline-flex', opacity: 0.8 }}>
                                  <StatIcon value={v} idx={idx} />
                                </span>
                                {v}
                              </span>
                            ))}
                          </div>
                        </article>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Funnel Overview band */}
        <div
          style={{
            marginTop: 22,
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 1fr) minmax(0, auto) 312px',
            gap: 24,
            alignItems: 'center',
            padding: '22px 26px',
            borderRadius: 24,
            background: 'rgba(255,255,255,0.40)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.7), 0 24px 56px -40px rgba(34,25,59,0.45)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
          className="mf-overview"
        >
          {/* Intro */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span
              style={{
                flex: '0 0 auto',
                width: 42,
                height: 42,
                borderRadius: 13,
                display: 'grid',
                placeItems: 'center',
                background: 'linear-gradient(135deg, #22193B 0%, #0057B8 100%)',
                color: '#fff',
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: 22, height: 22 }}
              >
                <path d="M3 5h18l-7 8v6l-4 2v-8z" />
              </svg>
            </span>
            <div>
              <h3
                style={{
                  margin: '0 0 4px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: 1,
                  color: '#22193B',
                }}
              >
                Funnel Overview
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: 1.4,
                  color: 'rgba(34,25,59,0.58)',
                  maxWidth: 260,
                }}
              >
                How content moves prospects through the customer journey and drives results.
              </p>
            </div>
          </div>

          {/* Stages */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            {overviewStages.map((s, i) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ textAlign: 'left' }}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: 9,
                      lineHeight: 1,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(34,25,59,0.5)',
                      marginBottom: 6,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: 30,
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      color: '#22193B',
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: 11,
                      lineHeight: 1,
                      color: 'rgba(34,25,59,0.55)',
                      marginTop: 5,
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
                {i < overviewStages.length - 1 && (
                  <div
                    style={{
                      color: 'rgba(34,25,59,0.32)',
                      display: 'grid',
                      placeItems: 'center',
                      padding: '0 2px 14px',
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: 16, height: 16 }}
                    >
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conversions */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 14,
              padding: '16px 18px',
              borderRadius: 18,
              background: '#22193B',
              color: '#fff',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 40px -26px rgba(34,25,59,0.6)',
              overflow: 'hidden',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 11,
                  lineHeight: 1,
                  letterSpacing: '0.04em',
                  color: 'rgba(255,255,255,0.72)',
                  marginBottom: 9,
                }}
              >
                Total Conversions
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 38,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                842
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  marginTop: 9,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 11,
                  lineHeight: 1,
                  color: '#D5F77C',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 11, height: 11 }}
                >
                  <path d="M12 19V5M6 11l6-6 6 6" />
                </svg>
                16% <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>vs last 30d</span>
              </div>
            </div>
            <div style={{ flex: '0 0 auto', width: 108, height: 52 }}>
              <svg
                viewBox="0 0 132 56"
                preserveAspectRatio="none"
                style={{ width: '100%', height: '100%', overflow: 'visible' }}
              >
                <defs>
                  <linearGradient id="mf-sparkfill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#D5F77C" stopOpacity={0.35} />
                    <stop offset="1" stopColor="#D5F77C" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <path
                  d="M2 44 L24 38 L46 41 L68 28 L90 31 L112 16 L130 10 L130 56 L2 56 Z"
                  fill="url(#mf-sparkfill)"
                  opacity={0.5}
                />
                <path
                  d="M2 44 L24 38 L46 41 L68 28 L90 31 L112 16 L130 10"
                  fill="none"
                  stroke="#D5F77C"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(213,247,124,0.55))' }}
                />
                <circle cx={130} cy={10} r={3} fill="#D5F77C" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
