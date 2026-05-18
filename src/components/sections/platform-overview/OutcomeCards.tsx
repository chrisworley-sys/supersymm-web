import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Eye, CalendarCheck, MessageCircle, Bell, Zap, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface OutcomeCard {
  number: string
  numberColor: string
  title: string
  description: string
  Icon: LucideIcon
}

const cards: OutcomeCard[] = [
  {
    number: '01',
    numberColor: '#E977C1',
    Icon: Eye,
    title: 'Understand Customer Behavior',
    description:
      'Know who is ready to engage. The platform reads behavioral signals across every channel — not just who clicks, but what their actions mean for where they are in their buying journey.',
  },
  {
    number: '02',
    numberColor: '#B874CD',
    Icon: CalendarCheck,
    title: 'Book More Appointments',
    description:
      'Turn passive interest into booked meetings. Automated follow-up sequences reach the right prospect at the right moment, reducing friction between curiosity and conversation.',
  },
  {
    number: '03',
    numberColor: '#8978BE',
    Icon: MessageCircle,
    title: 'Engage with Potential Clients',
    description:
      'Reach prospects across the channels they actually use. Personalized content at the right touchpoints builds the familiarity that makes outreach feel like connection, not interruption.',
  },
  {
    number: '04',
    numberColor: '#6750A4',
    Icon: Bell,
    title: 'Stay Top of Mind',
    description:
      'Consistent, relevant communication keeps you in the conversation long before a prospect is ready to decide — without requiring your constant attention to maintain it.',
  },
  {
    number: '05',
    numberColor: '#D331A0',
    Icon: Zap,
    title: 'Automate Marketing',
    description:
      'Your strategy runs on its own. Campaigns launch, sequences execute, and content distributes — all within the parameters you set, without the weekly manual lift.',
  },
  {
    number: '06',
    numberColor: '#ACA1D2',
    Icon: ShieldCheck,
    title: 'Compliance Integrated',
    description:
      "Built-in SEC/FINRA compliance workflows review, archive, and prepare every piece of content for audit. Compliance isn't added on — it's built into the system.",
  },
]

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const containerVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
}

export default function OutcomeCards() {
  const prefersReduced = useReducedMotion() ?? false

  return (
    <motion.ol
      variants={prefersReduced ? {} : containerVariant}
      initial={prefersReduced ? false : 'hidden'}
      whileInView={prefersReduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      style={{ listStyle: 'none', padding: 0, margin: 0 }}
    >
      {cards.map((card) => (
        <motion.li
          key={card.number}
          variants={prefersReduced ? {} : cardVariant}
          whileHover={!prefersReduced ? { y: -4, boxShadow: '0 8px 28px rgba(34,25,59,0.13)' } : {}}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{
            background: 'white',
            borderLeft: '4px solid #E977C1',
            borderRadius: '0 12px 12px 0',
            padding: '36px 32px 36px 36px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 2px 12px rgba(34,25,59,0.06)',
            cursor: 'default',
          }}
        >
          {/* Icon + Number row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: `${card.numberColor}18`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <card.Icon size={24} style={{ color: card.numberColor }} strokeWidth={1.75} />
            </div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 900,
                fontSize: '32px',
                color: card.numberColor,
                lineHeight: 1,
                margin: 0,
                opacity: 0.5,
              }}
            >
              {card.number}
            </p>
          </div>

          {/* Title */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              color: '#22193B',
              lineHeight: 1.3,
              marginBottom: '12px',
            }}
          >
            {card.title}
          </p>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '15px',
              color: 'rgba(34,25,59,0.68)',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {card.description}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  )
}
