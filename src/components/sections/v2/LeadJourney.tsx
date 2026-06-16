import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const MotionLink = motion.create(Link)

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(93deg, #8978BE, #E977C1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const stages = [
  {
    day: 'Day 1',
    title: 'First Touch',
    prospectLabel: 'Prospect',
    prospect: "Sarah sees a SuperSymm-generated LinkedIn post in her feed and clicks through to the lead magnet page. She downloads the guide.",
    system: "Captures the visit. Creates Sarah's contact record. Tags her as a new prospect and adds 10 points to her score.",
  },
  {
    day: 'Day 3',
    title: 'Nurture',
    prospectLabel: 'Cold Lead',
    prospect: "Sarah receives a three-email follow-up sequence tailored to the guide she downloaded. She opens two and clicks through on the second.",
    system: "Tracks every open and click. Adds 15 points. Adjusts the next email based on what she engaged with.",
  },
  {
    day: 'Day 7',
    title: 'Signal',
    prospectLabel: 'Warm Lead',
    prospect: "Sarah accepts a webinar invite, attends live, and downloads the follow-up case study.",
    system: "Lead enriched with firmographic data. Score crosses the threshold. Sales gets an instant alert with full context.",
  },
  {
    day: 'Day 8',
    title: 'Client Contact',
    prospectLabel: 'Qualified Lead',
    prospect: "Sales reaches out using the content Sarah first engaged with on Day 1. The conversation starts exactly where her interest began.",
    system: "CRM updated. Automated sequence paused. Relationship handed to a human — at exactly the right moment.",
  },
]

type LeadJourneyProps = {
  hideCta?: boolean
  transparent?: boolean
}

export default function LeadJourney({ hideCta = false, transparent = false }: LeadJourneyProps) {
  const prefersReduced = useReducedMotion()

  const inView = {
    initial: prefersReduced ? false : 'hidden',
    whileInView: prefersReduced ? undefined : 'visible',
    viewport: { once: true, amount: 0.15 } as const,
  }

  return (
    <section
      id="journey"
      style={
        transparent
          ? { background: 'transparent', paddingBlock: '0' }
          : {
              background:
                'linear-gradient(135deg, #1B0A20 0%, #22193B 35%, #2D1B4E 65%, #1B0A20 100%)',
              backgroundSize: '400% 400%',
              animation: prefersReduced ? 'none' : 'hero-gradient-shift 35s ease-in-out infinite',
              paddingBlock: 'clamp(80px, 10vw, 160px)',
            }
      }
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">

        {/* Header */}
        <motion.div
          className="mx-auto max-w-[720px] text-center mb-16"
          variants={prefersReduced ? {} : fadeUp}
          {...inView}
        >
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-accent-100 mb-4">
            How a lead moves through the system
          </p>
          <h2 className="font-display font-black leading-[1.1] text-white mb-6" style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
            From cold visitor to{' '}
            <em className="font-serif italic" style={gradientText}>qualified lead.</em>
          </h2>
          <p className="font-sans text-[18px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Most marketing platforms automate tasks. SuperSymm orchestrates relationships.
            Here's what one prospect's journey looks like from first touch to qualified handoff.
          </p>
        </motion.div>

        {/* Desktop 4-column journey */}
        <motion.div
          className="hidden lg:grid grid-cols-4 gap-6 mb-16"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView={prefersReduced ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {stages.map(({ day, title, prospectLabel, prospect, system }, i) => (
            <motion.div
              key={i}
              variants={prefersReduced ? {} : fadeUp}
              className="flex flex-col h-full"
            >
              {/* Day label */}
              <p className="font-display font-bold text-[12px] uppercase tracking-[0.08em] mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {day}
              </p>

              {/* Dot + connector line */}
              <div className="relative flex items-center mb-6">
                {/* Outer glow ring */}
                <motion.div
                  className="absolute rounded-full"
                  style={{ width: 28, height: 28, top: -6, left: -6, background: 'rgba(233,119,193,0.18)' }}
                  animate={prefersReduced ? {} : { scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div
                  className="w-4 h-4 rounded-full shrink-0 z-10 relative"
                  style={{ background: '#E977C1', boxShadow: '0 0 0 3px rgba(233,119,193,0.25), 0 0 20px 4px rgba(233,119,193,0.55), 0 0 40px 8px rgba(233,119,193,0.2)' }}
                />
                {i < stages.length - 1 && (
                  <div
                    className="absolute left-4 top-[7px] h-[2px] overflow-hidden"
                    style={{ right: '-24px', background: 'rgba(233,119,193,0.15)', borderRadius: 2 }}
                  >
                    <motion.div
                      className="absolute inset-y-0 left-0 w-1/2"
                      style={{ background: 'linear-gradient(to right, transparent, rgba(233,119,193,0.8), transparent)' }}
                      animate={prefersReduced ? {} : { x: ['-100%', '200%'] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                    />
                  </div>
                )}
              </div>

              {/* Title */}
              <p className="font-display font-bold text-[20px] leading-tight text-white mb-5">
                {title}
              </p>

              {/* Prospect */}
              <div className="flex-1 mb-4">
                <p className="font-sans text-[11px] uppercase tracking-[0.06em] font-medium mb-2" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  {prospectLabel}
                </p>
                <p className="font-sans text-[14px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.80)' }}>
                  {prospect}
                </p>
              </div>

              {/* System */}
              <div
                className="rounded-xl p-4 min-h-[120px] flex flex-col justify-start"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <p className="font-sans text-[11px] uppercase tracking-[0.06em] font-medium text-ss-accent-100 mb-2">
                  System
                </p>
                <p className="font-sans text-[14px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.62)' }}>
                  {system}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden mb-16 space-y-0">
          {stages.map(({ day, title, prospectLabel, prospect, system }, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full shrink-0 mt-1.5"
                  style={{ background: '#E977C1', boxShadow: '0 0 10px rgba(233,119,193,0.5)' }}
                />
                {i < stages.length - 1 && (
                  <div className="w-px flex-1 my-2" style={{ background: 'rgba(233,119,193,0.25)' }} />
                )}
              </div>
              <div className="pb-10">
                <p className="font-display font-bold text-[12px] uppercase tracking-[0.08em] mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {day}
                </p>
                <p className="font-display font-bold text-[20px] text-white mb-4">{title}</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.06em] font-medium mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {prospectLabel}
                    </p>
                    <p className="font-sans text-[14px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.80)' }}>{prospect}</p>
                  </div>
                  <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
                    <p className="font-sans text-[11px] uppercase tracking-[0.06em] font-medium text-ss-accent-100 mb-1">
                      System
                    </p>
                    <p className="font-sans text-[14px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.62)' }}>{system}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        {!hideCta && (
          <motion.div
            className="mt-16 text-center"
            variants={prefersReduced ? {} : fadeUp}
            {...inView}
          >
            <MotionLink
              to="/platform"
              className="inline-flex items-center gap-2 bg-ss-accent-100 text-ss-purple-700 font-sans font-medium text-base px-8 rounded-full hover:bg-ss-accent-200 transition-colors"
              style={{ height: '56px' }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
              transition={{ duration: 0.1 }}
            >
              See the System in Action <ArrowRight className="size-4" />
            </MotionLink>
          </motion.div>
        )}

      </div>
    </section>
  )
}
