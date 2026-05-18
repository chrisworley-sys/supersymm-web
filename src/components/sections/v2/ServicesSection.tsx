import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ServiceItem } from '@/types/v2'

// ── Abstract brand-color illustrations (darker palette) ────────────────────────

function ResearchIllustration({ hovered }: { hovered: boolean }) {
  return (
    <svg viewBox="0 0 320 110" width="100%" height="110" aria-hidden="true" style={{ display: 'block' }}>
      <motion.circle cx="140" cy="55" r="38" fill="none" stroke="rgba(103,80,164,0.45)" strokeWidth="2"
        animate={hovered ? { r: 42, opacity: 0.7 } : { r: 38, opacity: 1 }} transition={{ duration: 0.5 }} />
      <circle cx="140" cy="55" r="24" fill="rgba(103,80,164,0.28)" stroke="rgba(139,120,190,0.65)" strokeWidth="1.5" />
      <motion.circle cx="140" cy="55" r="10" fill="rgba(103,80,164,0.55)"
        animate={hovered ? { scale: 1.3 } : { scale: 1 }} transition={{ duration: 0.4 }} style={{ transformOrigin: '140px 55px' }} />
      <line x1="160" y1="75" x2="186" y2="101" stroke="#B874CD" strokeWidth="3" strokeLinecap="round" />
      <motion.circle cx="186" cy="101" r="5" fill="#B874CD"
        animate={hovered ? { r: 7, opacity: 0.9 } : { r: 5, opacity: 1 }} transition={{ duration: 0.35 }} />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const rad = (a * Math.PI) / 180
        const ext = hovered ? 58 : 52
        const x = 140 + ext * Math.cos(rad), y = 55 + ext * Math.sin(rad)
        return <motion.circle key={i} cx={x} cy={y} r="3.5"
          fill={i % 2 === 0 ? 'rgba(213,247,124,0.85)' : 'rgba(184,116,205,0.80)'}
          animate={{ cx: x, cy: y, r: hovered ? 4.5 : 3.5 }} transition={{ duration: 0.45, delay: i * 0.04 }} />
      })}
      <circle cx="246" cy="38" r="18" fill="rgba(213,247,124,0.22)" stroke="rgba(213,247,124,0.60)" strokeWidth="1.5" />
      <text x="246" y="43" textAnchor="middle" fontSize="10" fontFamily="Inter,sans-serif" fill="rgba(213,247,124,0.95)" fontWeight="700">ICP</text>
      <circle cx="56" cy="72" r="14" fill="rgba(53,66,112,0.40)" stroke="rgba(53,66,112,0.65)" strokeWidth="1" />
      <circle cx="56" cy="72" r="4" fill="rgba(53,66,112,0.80)" />
    </svg>
  )
}

function PersonaIllustration({ hovered }: { hovered: boolean }) {
  const circles = [
    { cx: 108, cy: 55, r: 42, fill: 'rgba(103,80,164,0.30)', stroke: 'rgba(172,161,210,0.70)' },
    { cx: 160, cy: 40, r: 42, fill: 'rgba(184,116,205,0.25)', stroke: 'rgba(184,116,205,0.65)' },
    { cx: 212, cy: 55, r: 42, fill: 'rgba(53,66,112,0.30)', stroke: 'rgba(53,66,112,0.65)' },
  ]
  return (
    <svg viewBox="0 0 320 110" width="100%" height="110" aria-hidden="true" style={{ display: 'block' }}>
      {circles.map((c, i) => (
        <motion.circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill={c.fill} stroke={c.stroke} strokeWidth="1.5"
          animate={hovered ? { r: c.r + 4 } : { r: c.r }} transition={{ duration: 0.45, delay: i * 0.07 }} />
      ))}
      <motion.ellipse cx="160" cy="55" rx="16" ry="16" fill="rgba(213,247,124,0.40)" stroke="rgba(213,247,124,0.85)" strokeWidth="1.5"
        animate={hovered ? { rx: 20, ry: 20 } : { rx: 16, ry: 16 }} transition={{ duration: 0.4 }} />
      <text x="160" y="59" textAnchor="middle" fontSize="9" fontFamily="Inter,sans-serif" fill="rgba(213,247,124,0.95)" fontWeight="700">ICP</text>
      {[{ x: 75, y: 25 }, { x: 245, y: 25 }, { x: 160, y: 95 }].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="9" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <circle cx={p.x} cy={p.y - 3} r="3.5" fill="rgba(172,161,210,0.90)" />
          <path d={`M${p.x - 6} ${p.y + 5} Q${p.x} ${p.y + 3} ${p.x + 6} ${p.y + 5}`} fill="rgba(172,161,210,0.75)" />
        </g>
      ))}
    </svg>
  )
}

function ChannelStrategyIllustration({ hovered }: { hovered: boolean }) {
  const spokes = [0, 45, 90, 135, 180, 225, 270, 315]
  const colors = ['rgba(213,247,124,0.90)', 'rgba(184,116,205,0.90)', 'rgba(119,135,200,0.90)', 'rgba(103,80,164,0.90)']
  return (
    <svg viewBox="0 0 320 110" width="100%" height="110" aria-hidden="true" style={{ display: 'block' }}>
      {spokes.map((a, i) => {
        const rad = (a * Math.PI) / 180
        const len = hovered ? 52 : 44
        return (
          <motion.line key={i} x1="160" y1="55"
            x2={160 + len * Math.cos(rad)} y2={55 + len * Math.sin(rad)}
            stroke={i % 2 === 0 ? 'rgba(139,120,190,0.75)' : 'rgba(184,116,205,0.65)'}
            strokeWidth="1.5" strokeDasharray={i % 2 === 0 ? 'none' : '3 3'}
            animate={{ x2: 160 + len * Math.cos(rad), y2: 55 + len * Math.sin(rad) }}
            transition={{ duration: 0.35 }} />
        )
      })}
      {spokes.map((a, i) => {
        const rad = (a * Math.PI) / 180
        const dist = hovered ? 54 : 46
        const x = 160 + dist * Math.cos(rad), y = 55 + dist * Math.sin(rad)
        return <motion.circle key={i} cx={x} cy={y} r="7" fill={colors[i % 4]}
          animate={{ cx: x, cy: y, r: hovered ? 9 : 7 }} transition={{ duration: 0.35, delay: i * 0.03 }} />
      })}
      <motion.circle cx="160" cy="55" r="16" fill="rgba(103,80,164,0.55)" stroke="#6750A4" strokeWidth="2"
        animate={hovered ? { r: 20 } : { r: 16 }} transition={{ duration: 0.35 }} />
      <circle cx="160" cy="55" r="6" fill="#6750A4" />
    </svg>
  )
}

function SeoContentIllustration({ hovered }: { hovered: boolean }) {
  const points: [number, number][] = [[200, 88], [218, 60], [236, 72], [254, 32], [272, 44]]
  const hPoints: [number, number][] = [[200, 84], [218, 52], [236, 66], [254, 24], [272, 36]]
  const pts = hovered ? hPoints : points
  return (
    <svg viewBox="0 0 320 110" width="100%" height="110" aria-hidden="true" style={{ display: 'block' }}>
      <rect x="80" y="18" width="100" height="78" rx="8" fill="rgba(103,80,164,0.22)" stroke="rgba(139,120,190,0.60)" strokeWidth="1.5" />
      {[30, 44, 58, 72].map((y, i) => (
        <rect key={i} x="92" y={y} width={i === 0 ? 76 : i === 1 ? 60 : i === 2 ? 68 : 50} height="7" rx="3.5"
          fill={i === 0 ? 'rgba(103,80,164,0.65)' : 'rgba(172,161,210,0.50)'} />
      ))}
      <rect x="92" y="78" width="24" height="8" rx="4" fill="rgba(213,247,124,0.80)" />
      <motion.polyline
        animate={{ points: pts.map(([x, y]) => `${x},${y}`).join(' ') }}
        transition={{ duration: 0.45 }}
        fill="none" stroke="#B874CD" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      {pts.map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="4" fill={i === 3 ? '#D5F77C' : '#B874CD'}
          animate={{ cx: x, cy: y, r: hovered && i === 3 ? 6 : 4 }} transition={{ duration: 0.45 }} />
      ))}
      <polygon points="272,28 280,44 264,44" fill="rgba(213,247,124,0.90)" />
    </svg>
  )
}

function PaidMediaIllustration({ hovered }: { hovered: boolean }) {
  const bars = [55, 72, 48, 88, 64, 95, 78]
  const hBars = [62, 82, 56, 96, 74, 100, 88]
  return (
    <svg viewBox="0 0 320 110" width="100%" height="110" aria-hidden="true" style={{ display: 'block' }}>
      {bars.map((h, i) => {
        const target = hovered ? hBars[i] : h
        const barH = (target / 100) * 72
        const y = 90 - barH
        const fill = i === 5
          ? 'rgba(213,247,124,0.92)'
          : i >= 3 ? `rgba(184,116,205,${0.65 + i * 0.06})` : `rgba(103,80,164,${0.50 + i * 0.08})`
        return (
          <motion.rect key={i} x={60 + i * 30} width="20" rx="4" fill={fill}
            animate={{ y, height: barH }} transition={{ duration: 0.4, delay: i * 0.04 }} />
        )
      })}
      <line x1="52" y1="90" x2="272" y2="90" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
      <circle cx="232" cy="32" r="18" fill="rgba(213,247,124,0.25)" stroke="rgba(213,247,124,0.70)" strokeWidth="1.5" />
      <text x="232" y="37" textAnchor="middle" fontSize="11" fontFamily="Inter,sans-serif" fill="rgba(213,247,124,0.95)" fontWeight="700">ROI</text>
    </svg>
  )
}

function SocialMediaIllustration({ hovered }: { hovered: boolean }) {
  const nodes = [
    { cx: 160, cy: 55, r: 14, fill: 'rgba(103,80,164,0.70)', stroke: '#6750A4' },
    { cx: 100, cy: 28, r: 9, fill: 'rgba(184,116,205,0.55)', stroke: '#B874CD' },
    { cx: 220, cy: 28, r: 9, fill: 'rgba(119,135,200,0.55)', stroke: '#7B87C8' },
    { cx: 72, cy: 72, r: 8, fill: 'rgba(213,247,124,0.40)', stroke: 'rgba(213,247,124,0.85)' },
    { cx: 248, cy: 72, r: 8, fill: 'rgba(213,247,124,0.40)', stroke: 'rgba(213,247,124,0.85)' },
    { cx: 130, cy: 88, r: 7, fill: 'rgba(184,116,205,0.40)', stroke: 'rgba(184,116,205,0.80)' },
    { cx: 190, cy: 88, r: 7, fill: 'rgba(184,116,205,0.40)', stroke: 'rgba(184,116,205,0.80)' },
  ]
  const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,3],[2,4],[5,6]]
  return (
    <svg viewBox="0 0 320 110" width="100%" height="110" aria-hidden="true" style={{ display: 'block' }}>
      {edges.map(([a, b], i) => (
        <motion.line key={i}
          x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="rgba(172,161,210,0.50)" strokeWidth="1.5"
          animate={hovered ? { stroke: 'rgba(172,161,210,0.85)', strokeWidth: 2 } : { stroke: 'rgba(172,161,210,0.50)', strokeWidth: 1.5 }}
          transition={{ duration: 0.3, delay: i * 0.04 }} />
      ))}
      {nodes.map((n, i) => (
        <motion.circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} stroke={n.stroke} strokeWidth="1.5"
          animate={hovered ? { r: n.r + 2 } : { r: n.r }} transition={{ duration: 0.35, delay: i * 0.05 }} />
      ))}
    </svg>
  )
}

function WebsiteIllustration({ hovered }: { hovered: boolean }) {
  return (
    <svg viewBox="0 0 320 110" width="100%" height="110" aria-hidden="true" style={{ display: 'block' }}>
      <rect x="60" y="14" width="200" height="82" rx="8" fill="rgba(103,80,164,0.22)" stroke="rgba(139,120,190,0.60)" strokeWidth="1.5" />
      <rect x="60" y="14" width="200" height="20" rx="8" fill="rgba(103,80,164,0.50)" />
      <circle cx="76" cy="24" r="4" fill="rgba(233,119,193,0.85)" />
      <circle cx="90" cy="24" r="4" fill="rgba(213,247,124,0.85)" />
      <circle cx="104" cy="24" r="4" fill="rgba(119,135,200,0.85)" />
      <motion.rect x="72" y="42" height="8" rx="4" fill="rgba(103,80,164,0.65)"
        animate={hovered ? { width: 96 } : { width: 76 }} transition={{ duration: 0.4 }} />
      <rect x="72" y="56" width="54" height="5" rx="2.5" fill="rgba(172,161,210,0.55)" />
      <rect x="72" y="65" width="64" height="5" rx="2.5" fill="rgba(172,161,210,0.40)" />
      <motion.rect x="72" y="74" height="12" rx="6"
        fill="rgba(213,247,124,0.80)"
        animate={hovered ? { width: 56 } : { width: 40 }} transition={{ duration: 0.35 }} />
      <polygon points="186,46 196,55 186,64 178,55" fill="rgba(184,116,205,0.90)" />
      <rect x="202" y="42" width="46" height="46" rx="6" fill="rgba(184,116,205,0.25)" stroke="rgba(184,116,205,0.55)" strokeWidth="1" />
      <circle cx="225" cy="58" r="10" fill="rgba(184,116,205,0.45)" />
      <rect x="210" y="73" width="30" height="8" rx="4" fill="rgba(184,116,205,0.60)" />
    </svg>
  )
}

function CampaignDevelopmentIllustration({ hovered }: { hovered: boolean }) {
  const phases = [
    { x: 48, w: 40, fill: 'rgba(103,80,164,0.75)', label: 'Plan' },
    { x: 96, w: 56, fill: 'rgba(139,120,190,0.70)', label: 'Build' },
    { x: 160, w: 48, fill: 'rgba(184,116,205,0.75)', label: 'Launch' },
    { x: 216, w: 60, fill: 'rgba(213,247,124,0.80)', label: 'Optimize' },
  ]
  return (
    <svg viewBox="0 0 320 110" width="100%" height="110" aria-hidden="true" style={{ display: 'block' }}>
      {[28, 48, 68, 88].map((y, i) => (
        <line key={i} x1="36" y1={y} x2="284" y2={y} stroke="rgba(103,80,164,0.22)" strokeWidth="1" />
      ))}
      {phases.map(({ x, w, fill, label }, i) => (
        <g key={i}>
          <motion.rect x={x} rx="5" fill={fill}
            animate={hovered ? { y: 48, height: 24, width: w + 4 } : { y: 52, height: 20, width: w }}
            transition={{ duration: 0.38, delay: i * 0.06 }} />
          <text x={x + w / 2} y={65} textAnchor="middle" fontSize="8" fontFamily="Inter,sans-serif"
            fill={i === 3 ? 'rgba(34,25,59,0.9)' : 'rgba(255,255,255,0.92)'} fontWeight="600">
            {label}
          </text>
        </g>
      ))}
      <line x1="48" y1="38" x2="276" y2="38" stroke="rgba(172,161,210,0.65)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="280,35 288,38 280,41" fill="rgba(172,161,210,0.75)" />
      {[96, 160, 216, 276].map((x, i) => (
        <motion.circle key={i} cx={x} cy={38} r="4"
          fill={i === 3 ? 'rgba(213,247,124,0.92)' : 'rgba(184,116,205,0.85)'}
          animate={hovered ? { r: 6 } : { r: 4 }} transition={{ duration: 0.3, delay: i * 0.06 }} />
      ))}
      <text x="48" y="25" fontSize="9" fontFamily="Inter,sans-serif" fill="rgba(172,161,210,0.75)" fontWeight="500">Q1</text>
      <text x="128" y="25" fontSize="9" fontFamily="Inter,sans-serif" fill="rgba(172,161,210,0.75)" fontWeight="500">Q2</text>
      <text x="208" y="25" fontSize="9" fontFamily="Inter,sans-serif" fill="rgba(172,161,210,0.75)" fontWeight="500">Q3</text>
      <rect x="220" y="78" width="32" height="14" rx="7" fill="rgba(213,247,124,0.30)" stroke="rgba(213,247,124,0.75)" strokeWidth="1" />
      <circle cx="227" cy="85" r="2.5" fill="rgba(213,247,124,0.95)" />
      <text x="236" y="89" fontSize="8" fontFamily="Inter,sans-serif" fill="rgba(213,247,124,0.95)" fontWeight="600">Live</text>
    </svg>
  )
}

function DataMonitoringIllustration({ hovered }: { hovered: boolean }) {
  const normalPoints: [number, number][] = [[48,90],[74,84],[100,87],[126,78],[152,81],[178,72],[204,75],[230,66],[256,68],[282,60]]
  const hoverPoints: [number, number][] = [[48,86],[74,78],[100,82],[126,70],[152,74],[178,64],[204,68],[230,58],[256,60],[282,50]]
  const pts = hovered ? hoverPoints : normalPoints
  return (
    <svg viewBox="0 0 320 110" width="100%" height="110" aria-hidden="true" style={{ display: 'block' }}>
      <rect x="36" y="12" width="248" height="86" rx="8" fill="rgba(34,25,59,0.65)" stroke="rgba(103,80,164,0.55)" strokeWidth="1.5" />
      <rect x="36" y="12" width="248" height="18" rx="8" fill="rgba(103,80,164,0.45)" />
      <motion.circle cx="50" cy="21" r="3"
        fill="rgba(213,247,124,0.85)"
        animate={hovered ? { opacity: [0.85, 1, 0.85] } : { opacity: 1 }}
        transition={{ duration: 1, repeat: hovered ? Infinity : 0 }} />
      <text x="62" y="25" fontSize="8" fontFamily="Inter,sans-serif" fill="rgba(255,255,255,0.70)" fontWeight="600">LIVE MONITORING</text>
      {[
        { x: 48, label: 'Leads', val: '47', color: '#D5F77C' },
        { x: 118, label: 'Opens', val: '62%', color: '#B874CD' },
        { x: 188, label: 'CTR', val: '8.4%', color: '#7B87C8' },
      ].map(({ x, label, val, color }) => (
        <g key={label}>
          <rect x={x} y={36} width="58" height="32" rx="5" fill="rgba(255,255,255,0.08)" stroke={`${color}60`} strokeWidth="1" />
          <text x={x + 29} y={50} textAnchor="middle" fontSize="14" fontFamily="Inter,sans-serif" fill={color} fontWeight="800">{val}</text>
          <text x={x + 29} y={62} textAnchor="middle" fontSize="7.5" fontFamily="Inter,sans-serif" fill="rgba(255,255,255,0.55)" fontWeight="500">{label}</text>
        </g>
      ))}
      <motion.polyline
        animate={{ points: pts.map(([x, y]) => `${x},${y}`).join(' ') }}
        transition={{ duration: 0.45 }}
        fill="none" stroke="rgba(213,247,124,0.80)" strokeWidth="1.5" strokeLinecap="round" />
      <motion.circle cx={282} cy={pts[9][1]} r="4" fill="rgba(213,247,124,0.95)"
        animate={{ cy: pts[9][1], r: hovered ? 6 : 4 }} transition={{ duration: 0.45 }} />
      <motion.circle cx={282} cy={pts[9][1]} r="8" fill="none" stroke="rgba(213,247,124,0.45)" strokeWidth="1"
        animate={{ cy: pts[9][1], r: hovered ? 12 : 8 }} transition={{ duration: 0.45 }} />
    </svg>
  )
}

function getIllustration(idx: number, hovered: boolean) {
  const props = { hovered }
  switch (idx) {
    case 0: return <ResearchIllustration {...props} />
    case 1: return <PersonaIllustration {...props} />
    case 2: return <ChannelStrategyIllustration {...props} />
    case 3: return <SeoContentIllustration {...props} />
    case 4: return <PaidMediaIllustration {...props} />
    case 5: return <SocialMediaIllustration {...props} />
    case 6: return <WebsiteIllustration {...props} />
    case 7: return <CampaignDevelopmentIllustration {...props} />
    case 8: return <DataMonitoringIllustration {...props} />
    default: return null
  }
}

// ── Service data ──────────────────────────────────────────────────────────────

const services: ServiceItem[] = [
  {
    id: 1, number: 'Service 01', title: 'Research',
    tagline: 'Define the market. Find the opportunity.',
    body: "We define your market, your business position, and the strategic opportunity. Research uncovers what differentiates you, what your audience actually cares about, and where your firm can win. Strategic priorities flow directly from what we find.",
    colSpan: 7,
    approach: [
      'Competitive landscape and market positioning audit',
      'Audience needs and pain point analysis',
      'Search demand and keyword opportunity mapping',
      'Internal discovery interviews with your team',
    ],
    outputs: [
      'ICP (ideal client profile) definition',
      'Market positioning brief',
      'Strategic priority framework',
      'Competitor gap analysis report',
    ],
  },
  {
    id: 2, number: 'Service 02', title: 'Persona Development',
    tagline: 'Right audience. Right message. Right channel. Every time.',
    body: "Effective marketing doesn't start with channels — it starts with a deep understanding of who you're trying to reach, what they care about, and where they spend their attention. SuperSymm builds the marketing system around your audience profiles, so every campaign, every piece of content, and every automation is optimized for the specific person it needs to reach.",
    colSpan: 5,
    approach: [
      'Behavioral and psychographic profile research',
      'Channel preference and media consumption mapping',
      'Messaging hierarchy per persona segment',
      'Funnel stage alignment for each profile',
    ],
    outputs: [
      '2–4 fully developed persona profiles',
      'Messaging framework per persona',
      'Channel priority map',
      'Content angle recommendations per segment',
    ],
  },
  {
    id: 3, number: 'Service 03', title: 'Channel Strategy',
    tagline: 'How it all connects.',
    body: "Why doing all three beats doing any one — and what the math looks like when paid ads, organic SEO, and social work as a system instead of in isolation. Each prospect moves through a research journey that spans weeks or months and touches multiple channels. Marketing that shows up in only one of those channels leaves entire stages unaddressed.\n\nEach channel here has a specific job. And each one makes the others measurably more effective.",
    colSpan: 12,
    approach: [
      'Cross-channel interaction and overlap analysis',
      'Funnel stage to channel mapping',
      'Budget allocation and effort prioritization',
      'Channel sequencing and launch order planning',
    ],
    outputs: [
      'Integrated channel strategy document',
      'Budget allocation framework',
      'Channel sequencing roadmap',
      'KPI targets per channel and stage',
    ],
  },
  {
    id: 4, number: 'Service 04', title: 'SEO / Content',
    tagline: 'Own the keywords that matter.',
    body: "SEO is not a standalone tactic — it's the organic foundation that reduces paid media costs, builds long-term authority, and ensures your business is discoverable at every stage of the buying process. When a lead searches to validate a product or a customer searches for a new line, the question is: does your business appear?",
    colSpan: 5,
    approach: [
      'Keyword research and intent mapping by funnel stage',
      'Technical SEO audit and site health review',
      'Content gap analysis against competitors',
      'On-page optimization and internal linking plan',
    ],
    outputs: [
      'Target keyword list with priority tiers',
      'Content calendar (12-week rolling)',
      'Technical SEO recommendations',
      'Monthly organic performance report',
    ],
  },
  {
    id: 5, number: 'Service 05', title: 'Paid Media',
    tagline: 'Every dollar spent. Every lead attributed.',
    body: "All paid campaigns are managed through a unified dashboard with lead-level attribution — so every dollar spent connects back to a specific lead, audience segment, and conversion outcome. Campaign performance data feeds back into SEO keyword strategy and content priorities, creating a compounding system rather than isolated spend.",
    colSpan: 7,
    approach: [
      'Campaign architecture and audience targeting setup',
      'Creative briefing and ad copy development',
      'Bid strategy and budget pacing management',
      'Attribution model configuration and tracking',
    ],
    outputs: [
      'Live campaigns across Google, Meta, or LinkedIn',
      'Lead-level attribution dashboard',
      'Weekly performance summaries',
      'Monthly optimization playbook',
    ],
  },
  {
    id: 6, number: 'Service 06', title: 'Social Media',
    tagline: 'Every post connects to a lead outcome.',
    body: "Social media for your business is not a brand awareness exercise — it's a demand generation layer. Every post is mapped to an audience, a funnel stage, and a conversion path. Organic engagement builds retargeting audiences. Retargeting drives paid conversions. Conference content extends physical presence into a 30-day digital window.\n\nThe result is a system where social activity compounds into pipeline.",
    colSpan: 7,
    approach: [
      'Platform strategy aligned to your ICP channels',
      'Content calendar built by funnel stage and persona',
      'Organic-to-paid retargeting audience build',
      'Event and conference content amplification',
    ],
    outputs: [
      'Weekly content calendar with copy and creative',
      'Retargeting audience segments',
      'Monthly engagement and reach report',
      'Pipeline influence attribution per platform',
    ],
  },
  {
    id: 7, number: 'Service 07', title: 'Website / Digital',
    tagline: 'From afterthought to demand-generation hub.',
    body: "A website is not a brochure — it's a conversion machine. Every page should serve a specific audience, answer a specific question, and present a specific next action. The rebuild SuperSymm recommends transforms a passive site into an active demand-generation hub that works 24/7 to attract leads.",
    colSpan: 5,
    approach: [
      'Conversion audit and CRO prioritization',
      'SEO-informed page structure and hierarchy',
      'Messaging and copy brief per page',
      'Analytics and goal tracking configuration',
    ],
    outputs: [
      'Site architecture and page wireframes',
      'Copy briefs for all priority pages',
      'Redesigned landing pages with conversion tracking',
      'Analytics instrumentation and goal setup',
    ],
  },
  {
    id: 8, number: 'Service 08', title: 'Campaign Development',
    tagline: 'Strategy turns into execution.',
    body: "Campaigns don't run themselves. We build them — from offer definition and creative brief through channel sequencing, audience targeting, and launch coordination. Every campaign is mapped to a business objective, a specific segment, and a measurable conversion outcome.\n\nWe manage the full lifecycle: concept, build, launch, and post-campaign analysis that feeds back into the next cycle.",
    colSpan: 7,
    approach: [
      'Offer and value proposition development',
      'Creative brief and asset production',
      'Channel sequencing and audience targeting setup',
      'Launch coordination and go-live checklist',
    ],
    outputs: [
      'Campaign brief and creative assets',
      'Channel and audience targeting configuration',
      'Launch-ready campaign across all channels',
      'Post-campaign analysis and next-cycle brief',
    ],
  },
  {
    id: 9, number: 'Service 09', title: 'Data Monitoring',
    tagline: 'What gets measured gets improved.',
    body: "Ongoing monitoring of campaign performance, lead quality, channel efficiency, and conversion rates across every touchpoint. We surface what's working, flag what isn't, and act on the data before small problems become expensive ones.\n\nMonthly reporting distilled into decisions — not dashboards full of numbers nobody reads.",
    colSpan: 5,
    approach: [
      'Unified analytics setup across all channels',
      'KPI framework and anomaly threshold configuration',
      'Lead quality scoring and CRM hygiene review',
      'Regular performance review cadence',
    ],
    outputs: [
      'Monthly performance report (decisions, not data)',
      'Anomaly alerts and issue flags',
      'Optimization recommendations per channel',
      'Quarterly strategic adjustment summary',
    ],
  },
]

// ── Modal carousel ────────────────────────────────────────────────────────────

function ServiceModal({ startIndex, onClose }: { startIndex: number; onClose: () => void }) {
  const prefersReduced = useReducedMotion()
  const [idx, setIdx] = useState(startIndex)
  const [direction, setDirection] = useState(0)

  const go = useCallback((next: number) => {
    setDirection(next > idx ? 1 : -1)
    setIdx((next + services.length) % services.length)
  }, [idx])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(idx + 1)
      if (e.key === 'ArrowLeft') go(idx - 1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [idx, go, onClose])

  const service = services[idx]

  const slideVariants: Variants = {
    enter: (d: number) => ({ opacity: 0, x: prefersReduced ? 0 : d * 40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.32, ease: 'easeOut' } },
    exit: (d: number) => ({ opacity: 0, x: prefersReduced ? 0 : d * -40, transition: { duration: 0.22 } }),
  }

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ background: 'rgba(15,8,26,0.88)', backdropFilter: 'blur(12px)' }}
    >
      {/* Fixed-size modal shell */}
      <motion.div
        className="relative w-full max-w-2xl flex flex-col rounded-3xl overflow-hidden"
        style={{
          height: 'min(640px, 88vh)',
          background: 'linear-gradient(160deg, #22193B 0%, #1B0A20 100%)',
          border: '1px solid rgba(255,255,255,0.10)',
        }}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.32, ease: 'easeOut' } }}
        exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={idx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="p-8 md:p-10"
            >
              {/* Illustration */}
              <div className="rounded-2xl overflow-hidden mb-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {getIllustration(idx, false)}
              </div>

              <h2 className="font-display font-black text-[26px] leading-[1.1] text-white mb-1.5">
                {service.title}
              </h2>
              <p className="font-serif italic text-[15px] mb-5" style={{ color: 'rgba(255,255,255,0.50)' }}>
                {service.tagline}
              </p>

              {service.body.split('\n\n').map((para, i) => (
                <p key={i} className="font-sans text-[15px] leading-[1.65] mb-3 last:mb-0" style={{ color: 'rgba(255,255,255,0.70)' }}>
                  {para}
                </p>
              ))}

              {/* Approach + Outputs */}
              {(service.approach || service.outputs) && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.approach && (
                    <div className="rounded-xl p-5" style={{ background: 'rgba(103,80,164,0.15)', border: '1px solid rgba(103,80,164,0.25)' }}>
                      <p className="font-sans text-[11px] uppercase tracking-[0.10em] font-semibold text-ss-purple-300 mb-3">
                        Our approach
                      </p>
                      <ul className="space-y-2">
                        {service.approach.map((item, i) => (
                          <li key={i} className="flex gap-2.5 font-sans text-[13px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                            <span className="mt-1.5 size-1.5 rounded-full shrink-0" style={{ background: 'rgba(172,161,210,0.80)' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {service.outputs && (
                    <div className="rounded-xl p-5" style={{ background: 'rgba(213,247,124,0.08)', border: '1px solid rgba(213,247,124,0.18)' }}>
                      <p className="font-sans text-[11px] uppercase tracking-[0.10em] font-semibold mb-3" style={{ color: 'rgba(213,247,124,0.80)' }}>
                        Outputs
                      </p>
                      <ul className="space-y-2">
                        {service.outputs.map((item, i) => (
                          <li key={i} className="flex gap-2.5 font-sans text-[13px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                            <span className="mt-1.5 size-1.5 rounded-full shrink-0" style={{ background: 'rgba(213,247,124,0.75)' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer nav — always pinned to bottom */}
        <div
          className="shrink-0 flex items-center justify-between px-8 py-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(15,8,26,0.4)' }}
        >
          <button
            onClick={() => go(idx - 1)}
            className="flex items-center gap-1.5 font-sans text-[13px] font-medium text-white/50 hover:text-white transition-colors"
            aria-label="Previous service"
          >
            <ChevronLeft className="size-4" /> Prev
          </button>

          <div className="flex items-center gap-1.5">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="rounded-full transition-all"
                style={{ width: i === idx ? 20 : 6, height: 6, background: i === idx ? '#D5F77C' : 'rgba(255,255,255,0.2)' }}
                aria-label={`Go to ${services[i].title}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(idx + 1)}
            className="flex items-center gap-1.5 font-sans text-[13px] font-medium text-white/50 hover:text-white transition-colors"
            aria-label="Next service"
          >
            Next <ChevronRight className="size-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function ServiceCard({ service, idx, onClick }: { service: ServiceItem; idx: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  const prefersReduced = useReducedMotion()

  return (
    <motion.button
      variants={prefersReduced ? {} : fadeUp}
      className="rounded-[20px] bg-white p-7 cursor-pointer relative flex flex-col text-left w-full group transition-colors"
      style={{ border: '1px solid rgba(31,30,33,0.08)', transition: 'background-color 0.2s, border-color 0.2s' }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={prefersReduced ? {} : { y: -5, transition: { duration: 0.2 } }}
      aria-haspopup="dialog"
    >
      {/* Animated illustration */}
      <div className="rounded-xl w-full mb-5 overflow-hidden" style={{ background: 'rgba(103,80,164,0.08)' }} aria-hidden="true">
        {getIllustration(idx, hovered && !prefersReduced)}
      </div>
      <h3 className="font-display font-bold text-[22px] text-ss-neutral-700 mb-1.5 leading-tight">
        {service.title}
      </h3>
      <p className="font-serif italic text-[14px] text-ss-neutral-500 flex-1">
        {service.tagline}
      </p>
      <p className="font-sans text-[12px] font-medium text-ss-purple-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        Click to explore →
      </p>
    </motion.button>
  )
}

export default function ServicesSection() {
  const prefersReduced = useReducedMotion()
  const [openModal, setOpenModal] = useState<number | null>(null)

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.15 } as const,
  }

  return (
    <section id="services" style={{ background: '#F1F0F1', paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <motion.div
          className="mx-auto max-w-[720px] text-center mb-14"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-neutral-400 mb-4">
            Capabilities
          </p>
          <h2 className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-6" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Services that{' '}
            <em className="font-serif italic" style={{ background: 'linear-gradient(93deg, #8978BE, #E977C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>make the system real.</em>
          </h2>
          <p className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500">
            The platform handles execution. These are the strategic disciplines
            our team brings to every engagement — the thinking that makes the
            system work for your business.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              idx={idx}
              onClick={() => setOpenModal(idx)}
            />
          ))}
        </motion.div>

      </div>

      <AnimatePresence>
        {openModal !== null && (
          <ServiceModal startIndex={openModal} onClose={() => setOpenModal(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
