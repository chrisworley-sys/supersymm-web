import { motion, useReducedMotion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(93deg, #8978BE, #E977C1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

// Node highlight animations — 20s cycle, sequential
const highlightAnimations = [
  'nodeHighlight0 20s linear infinite',
  'nodeHighlight1 20s linear infinite',
  'nodeHighlight2 20s linear infinite',
  'nodeHighlight3 20s linear infinite',
]

function FeedbackLoopSVG({ animate: shouldAnimate }: { animate: boolean }) {
  const nodes = [
    { id: 'intelligence', label: 'INTELLIGENCE', x: 40, icon: '◎', subtitle: 'Add context to marketing' },
    { id: 'strategy', label: 'STRATEGY', x: 290, icon: '◈', subtitle: 'Makes content meaningful' },
    { id: 'execution', label: 'EXECUTION', x: 540, icon: '◇', subtitle: 'Creates engagement' },
    { id: 'optimization', label: 'OPTIMIZATION', x: 790, icon: '△', subtitle: 'Learns and improves' },
  ]

  const nodeW = 210
  const nodeH = 125
  const nodeY = 40
  const centerY = nodeY + nodeH / 2

  const arrows = [
    { d: `M ${nodes[0].x + nodeW} ${centerY} H ${nodes[1].x}` },
    { d: `M ${nodes[1].x + nodeW} ${centerY} H ${nodes[2].x}` },
    { d: `M ${nodes[2].x + nodeW} ${centerY} H ${nodes[3].x}` },
  ]

  const loopPath = `M ${nodes[3].x + nodeW} ${centerY} C ${nodes[3].x + nodeW + 60} ${centerY} ${nodes[3].x + nodeW + 60} 230 ${nodes[3].x + nodeW - 40} 230 H ${nodes[0].x + 40} C ${nodes[0].x - 20} 230 ${nodes[0].x - 20} ${centerY} ${nodes[0].x} ${centerY}`

  const fadeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.12, duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
    }),
  }

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 1040 270"
        className="w-full"
        style={{ minWidth: '600px' }}
        aria-label="Intelligence informs Strategy informs Execution informs Optimization which feeds back into Intelligence"
        role="img"
      >
        <defs>
          <marker id="arrowPink" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#E977C1" />
          </marker>
        </defs>

        {/* Connecting arrows */}
        {arrows.map(({ d }, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#E977C1"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
            markerEnd="url(#arrowPink)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ delay: 1.5 + i * 0.3, duration: 0.6 }}
            style={shouldAnimate ? { animation: 'dashFlow 150s linear infinite' } : {}}
          />
        ))}

        {/* Return loop */}
        <motion.path
          d={loopPath}
          stroke="#E977C1"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ delay: 2.5, duration: 1 }}
          style={shouldAnimate ? { animation: 'dashFlow 220s linear infinite' } : {}}
        />

        <text x={520} y={248} textAnchor="middle" fontSize={11} fontFamily="Inter, sans-serif" fill="rgba(255,255,255,0.50)" fontWeight={600} letterSpacing="0.06em">
          LEARNING LOOP
        </text>

        {/* Nodes */}
        {nodes.map(({ id, label, x, icon, subtitle }, i) => (
          <motion.g
            key={id}
            custom={i}
            variants={fadeVariants}
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
          >
            <rect
              x={x} y={nodeY} width={nodeW} height={nodeH} rx={12}
              fill="rgba(103,80,164,0.10)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth={1}
            />
            <rect
              x={x} y={nodeY} width={nodeW} height={nodeH} rx={12}
              fill="rgba(213,247,124,0.06)"
              stroke="#D5F77C"
              strokeWidth={2}
              style={shouldAnimate ? {
                animation: `${highlightAnimations[i]}, borderShimmer 2.5s ease-in-out infinite`,
                opacity: 0,
              } : { opacity: 0 }}
            />
            <text x={x + nodeW / 2} y={nodeY + 33} textAnchor="middle" fontSize={22} fill="rgba(255,255,255,0.60)">
              {icon}
            </text>
            <text x={x + nodeW / 2} y={nodeY + 62} textAnchor="middle" fontSize={11} fontFamily="Inter, sans-serif" fill="rgba(255,255,255,0.85)" fontWeight={700} letterSpacing="0.06em">
              {label}
            </text>
            <text
              x={x + nodeW / 2} y={nodeY + 82}
              textAnchor="middle"
              fontSize={9.5}
              fontFamily="Inter, sans-serif"
              fill="rgba(213,247,124,0.90)"
              fontWeight={500}
              letterSpacing="0.02em"
              style={shouldAnimate ? {
                animation: highlightAnimations[i],
                opacity: 0,
              } : { opacity: 0 }}
            >
              {subtitle}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

const principles = [
  {
    label: 'INTELLIGENCE',
    headline: "One intelligence engine\npowers everything.",
    body: "We start by understanding your business — your buyers, your differentiators, your market position. That intelligence runs through every campaign, every channel, every day.",
  },
  {
    label: 'LEARNING',
    headline: "Every part learns from\nthe others.",
    body: "SEO insights inform paid strategy. Paid performance reshapes content. Email engagement adjusts lead scoring. The system gets smarter with every interaction.",
  },
  {
    label: 'OPTIMIZING',
    headline: "Complexity becomes simple.",
    body: "You make a thousand marketing decisions every week. SuperSymm makes those decisions based on intelligence, not guesswork — so your role is direction, not micro-management.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

export default function PlatformSection() {
  const prefersReduced = useReducedMotion()
  const diagramRef = useRef<HTMLDivElement>(null)
  const diagramInView = useInView(diagramRef, { once: true, amount: 0.3 })

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.2 } as const,
  }

  return (
    <section id="platform" className="relative overflow-hidden" style={{ paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/illustrations/The_Platform_home.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      {/* Purple color overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(34,25,59,0.87)' }} aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">

        <motion.div
          className="mx-auto max-w-[800px] text-center mb-16"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-accent-100 mb-4">
            The SuperSymm Platform
          </p>
          <h2 className="font-display font-black leading-[1.1] text-white mb-6" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Your Entire Marketing Operation.{' '}
            <em className="font-serif italic" style={gradientText}>Fully Connected.</em>
          </h2>
          <p className="font-sans text-[18px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.72)' }}>
            SuperSymm is marketing automation built for businesses that need professional results
            without hiring a full marketing team or managing a dozen tools. We don't just schedule
            posts — we create content, distribute across channels, capture leads, score engagement,
            and optimize campaigns. Every piece feeds the next.
          </p>
        </motion.div>

        <div ref={diagramRef} className="mb-16">
          <FeedbackLoopSVG animate={!prefersReduced && diagramInView} />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {principles.map(({ label, headline, body }) => (
            <motion.div
              key={label}
              variants={prefersReduced ? {} : fadeUp}
              className="rounded-2xl p-7 flex flex-col gap-4"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <p className="font-sans text-[12px] uppercase tracking-[0.10em] font-semibold text-ss-accent-100">
                {label}
              </p>
              <h3 className="font-display font-bold text-[22px] leading-[1.25] text-white">
                {headline.split('\n').map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <p className="font-sans text-[16px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.80)' }}>
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
