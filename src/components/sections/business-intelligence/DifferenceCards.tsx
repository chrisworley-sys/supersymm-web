import { useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

type Card = {
  label: string
  question: string
  generic: string
  enterprise: string
  supersymm: string
  bg: string
  bgHover: string
}

const CARDS: Card[] = [
  {
    label: 'Starting Point',
    question: 'Where does the system begin?',
    generic: 'Blank prompt every time',
    enterprise: 'Configuration screens you fill in',
    supersymm: 'Built on what makes your firm different — before campaign one. Every output runs through that foundation.',
    bg: '#2A1B45',
    bgHover: '#4A3270',
  },
  {
    label: 'Strategy',
    question: 'Who owns the strategy?',
    generic: 'You provide the strategy, it produces output',
    enterprise: 'Strategy lives outside the platform',
    supersymm: 'Strategy generated from your market, your buyers, and your position. You direct. The system executes.',
    bg: '#1F1238',
    bgHover: '#3D2860',
  },
  {
    label: 'Audience Understanding',
    question: 'How is your audience understood?',
    generic: 'None. You describe the audience each time',
    enterprise: 'Static segments you build manually',
    supersymm: 'Personas that update as your audience behaves — no manual rebuilding.',
    bg: '#261543',
    bgHover: '#452D6A',
  },
  {
    label: 'Market Context',
    question: 'What does the system know about your market?',
    generic: 'Trained on the public internet, no specificity',
    enterprise: 'No market intelligence built in',
    supersymm: 'Real-time market monitoring. Your campaigns reflect what\'s happening now, not last quarter.',
    bg: '#221042',
    bgHover: '#402868',
  },
  {
    label: 'Continuous Learning',
    question: 'Does the system improve over time?',
    generic: 'No memory between sessions',
    enterprise: 'Reporting only — no auto-improvement',
    supersymm: 'Every campaign makes the next one sharper. The system learns continuously.',
    bg: '#2C1840',
    bgHover: '#4C3068',
  },
  {
    label: 'Time to Value',
    question: 'How long before it starts working?',
    generic: 'Minutes per task, every task — indefinitely',
    enterprise: 'Weeks of configuration before launch',
    supersymm: 'One onboarding, then it runs. No recurring setup.',
    bg: '#1A0E30',
    bgHover: '#351C58',
  },
]

function DifferenceCard({ card }: { card: Card }) {
  const [hovered, setHovered] = useState(false)
  const prefersReduced = useReducedMotion()

  const show = prefersReduced ? true : hovered

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-default"
      style={{
        minHeight: '340px',
        background: show ? card.bgHover : card.bg,
        border: show
          ? '1px solid rgba(213,247,124,0.32)'
          : '1px solid rgba(255,255,255,0.09)',
        transition: 'background 350ms ease, border-color 300ms ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Default content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          opacity: show ? 0 : 1,
          transform: show ? 'translateY(-8px)' : 'translateY(0)',
          transition: prefersReduced ? 'none' : 'opacity 250ms ease, transform 250ms ease',
          pointerEvents: show ? 'none' : 'auto',
        }}
      >
        <div>
          <p
            className="font-sans font-bold uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.09em', color: '#8978BE', marginBottom: '16px' }}
          >
            {card.label}
          </p>
          <p
            className="font-display font-black text-white"
            style={{ fontSize: '22px', lineHeight: 1.25 }}
          >
            {card.question}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
          <div>
            <p
              className="font-sans font-semibold uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.32)', marginBottom: '3px' }}
            >
              DIY / Generic AI
            </p>
            <p className="font-sans" style={{ fontSize: '13px', lineHeight: 1.45, color: 'rgba(255,255,255,0.48)' }}>
              {card.generic}
            </p>
          </div>
          <div>
            <p
              className="font-sans font-semibold uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.32)', marginBottom: '3px' }}
            >
              Enterprise Platforms
            </p>
            <p className="font-sans" style={{ fontSize: '13px', lineHeight: 1.45, color: 'rgba(255,255,255,0.48)' }}>
              {card.enterprise}
            </p>
          </div>
        </div>
      </div>

      {/* Hover / SuperSymm content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(10px)',
          transition: prefersReduced ? 'none' : 'opacity 320ms ease 60ms, transform 320ms ease 60ms',
          pointerEvents: show ? 'auto' : 'none',
        }}
      >
        <div>
          <p
            className="font-sans font-bold uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.09em', color: '#8978BE', marginBottom: '8px' }}
          >
            {card.label}
          </p>
          <p
            className="font-sans font-bold uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.09em', color: '#D5F77C', marginBottom: '16px' }}
          >
            SuperSymm
          </p>
        </div>

        <p
          className="font-display font-medium text-white"
          style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.96)' }}
        >
          {card.supersymm}
        </p>
      </div>
    </div>
  )
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 },
  }),
}

export default function DifferenceCards() {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      initial={prefersReduced ? false : 'hidden'}
      whileInView={prefersReduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.1 }}
    >
      {CARDS.map((card, i) => (
        <motion.div
          key={card.label}
          variants={prefersReduced ? {} : fadeUp}
          custom={i}
        >
          <DifferenceCard card={card} />
        </motion.div>
      ))}
    </motion.div>
  )
}
