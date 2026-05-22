import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Search, BarChart2, Globe, Zap, LineChart, RefreshCw } from 'lucide-react'

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(93deg, #8978BE, #E977C1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const steps = [
  {
    number: '01',
    Icon: Search,
    label: 'Learn',
    description: 'Discovery of your business, audience, goals, and competitive landscape. We learn your firm before we build anything.',
    accent: '#ACA1D2',
    bullets: [
      'Business Context & Goals',
      'Market and Competitor Research',
      'Persona / ICP Development',
      'Marketing and Channel Strategy Audit',
      'Tech Stack Audit',
    ],
    outcome: 'Clarity of goals, objectives, and audience',
  },
  {
    number: '02',
    Icon: BarChart2,
    label: 'Strategy',
    description: 'Cross-channel plan built around your ICP, your differentiators, and the opportunities your market presents.',
    accent: '#9B8DC8',
    bullets: [
      'Cross-channel Strategy',
      'Digital Presence (website, social, etc.)',
      'Brand and Content Strategy',
      'Integrated Tech Strategy',
    ],
    outcome: 'Strategy to achieve goals and timing',
  },
  {
    number: '03',
    Icon: Globe,
    label: 'Design',
    description: 'SEO foundation, AEO structure, website optimization, and social platform setup configured to capture demand before campaigns launch.',
    accent: '#8978BE',
    bullets: [
      'SEO / AEO Optimization',
      'Social Platform Setup',
      'Campaign Construction',
      'Paid Media and Lead Magnets',
      'Booking and Trigger Mechanics',
    ],
    outcome: 'Platforms aligned, framework established for growth',
  },
  {
    number: '04',
    Icon: Zap,
    label: 'Launch',
    description: 'Day-to-day execution handed off to the platform. Content, distribution, lead capture, and reporting — all running.',
    accent: '#B874CD',
    bullets: [
      'Website and Digital Assets',
      'Paid Social and Organic',
      'Cross-channel Marketing',
      'Performance Tracking & Optimization',
    ],
    outcome: 'Campaign, digital, and tech architecture established',
  },
  {
    number: '05',
    Icon: LineChart,
    label: 'Monitor',
    description: "Quarterly strategy reviews with our team. We surface what's working, what to adjust, and where to push harder.",
    accent: '#C578CE',
    bullets: [
      'Campaign Performance Analysis',
      'Lead Quality & Conversion Review',
      'Channel ROI Assessment',
      'Competitive Intelligence Updates',
    ],
    outcome: 'Clear picture of what\'s working and where to adjust',
  },
  {
    number: '06',
    Icon: RefreshCw,
    label: 'Optimize',
    description: 'The platform refines itself with every interaction. Our team adjusts direction. Your marketing compounds over time.',
    accent: '#E977C1',
    bullets: [
      'A/B Testing & Content Refinement',
      'Audience & Targeting Adjustments',
      'Budget Reallocation',
      'Strategy Evolution',
    ],
    outcome: 'Compounding results that improve with every cycle',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function HowWeWork() {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.2 } as const,
  }

  return (
    <section
      id="process"
      style={{
        background: 'linear-gradient(160deg, #22193B 0%, #1B0A20 60%, #2D1B4E 100%)',
        paddingBlock: 'clamp(80px, 10vw, 160px)',
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <motion.div
          className="mx-auto max-w-[720px] text-center mb-16"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-accent-100/70 mb-4">
            AI Enabled Products
          </p>
          <h2 className="font-display font-black leading-[1.1] text-white mb-5" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Working as{' '}
            <em className="font-serif italic" style={gradientText}>partners.</em>
          </h2>
          <p className="font-sans text-[17px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.60)' }}>
            We learn your business, build your strategy, and launch the system. Then we
            meet with you regularly to review what's working and adjust direction while
            the platform runs. You do what you do — we handle everything else.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '20px', overflow: 'hidden' }}
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map(({ number, Icon, label, description, accent, bullets, outcome }) => (
            <motion.div
              key={number}
              variants={prefersReduced ? {} : fadeUp}
              className="how-we-work-tile flex flex-col p-8 group relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, ${accent}55, ${accent}00)` }} />

              {/* Number + icon row */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-black text-[42px] leading-[1]" style={{ color: accent + '30' }} aria-hidden="true">
                  {number}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: accent + '18' }}
                >
                  <Icon className="size-5" style={{ color: accent }} />
                </div>
              </div>

              {/* Label + description */}
              <h3 className="font-display font-bold text-[17px] leading-[1.25] text-white mb-2">
                {label}
              </h3>
              <p className="font-sans text-[13px] leading-[1.55]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {description}
              </p>

              {/* Bullets */}
              <div className="mt-5 flex-1">
                {bullets.map((b, bi) => (
                  <div
                    key={bi}
                    className="flex items-center gap-3 py-2.5"
                    style={{ borderBottom: bi < bullets.length - 1 ? '1px solid rgba(255,255,255,0.07)' : undefined }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent + 'BB' }} />
                    <span className="font-sans text-[13px] leading-[1.4]" style={{ color: 'rgba(255,255,255,0.68)' }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>

              {/* Outcome */}
              <div
                className="mt-5 rounded-xl px-4 py-3"
                style={{
                  background: accent + '14',
                  border: `1px solid ${accent}28`,
                }}
              >
                <p
                  className="font-sans text-[10px] uppercase tracking-[0.12em] font-bold mb-1"
                  style={{ color: accent }}
                >
                  Outcome
                </p>
                <p className="font-sans text-[13px] font-medium leading-[1.45]" style={{ color: 'rgba(255,255,255,0.88)' }}>
                  {outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
