import { motion, useReducedMotion, type Variants } from 'framer-motion'

const outcomes = [
  {
    number: '01',
    title: 'Leads from every channel,\ncaptured with no gaps.',
  },
  {
    number: '02',
    title: 'Hot leads in your inbox in minutes,\nwith full context.',
  },
  {
    number: '03',
    title: 'Warm leads nurture themselves,\non schedules that match how buyers actually decide.',
  },
  {
    number: '04',
    title: 'Sales talks to qualified prospects,\nnot curious browsers.',
  },
  {
    number: '05',
    title: 'Compliance handled automatically.\nNo separate tracking system.',
  },
  {
    number: '06',
    title: 'Cost per qualified lead drops\nas the system learns your market.',
  },
]

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const containerVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function LeadOutcomeGrid() {
  const prefersReduced = useReducedMotion() ?? false

  return (
    <motion.ol
      variants={prefersReduced ? {} : containerVariant}
      initial={prefersReduced ? false : 'hidden'}
      whileInView={prefersReduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.1 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: '32px 48px',
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}
      className="sm:grid-cols-2 lg:grid-cols-3"
    >
      {outcomes.map((card) => (
        <motion.li
          key={card.number}
          variants={prefersReduced ? {} : cardVariant}
          style={{
            borderLeft: '4px solid #E977C1',
            padding: '16px 16px 16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 900,
              fontSize: '32px',
              color: '#E977C1',
              lineHeight: 1,
              margin: 0,
            }}
          >
            {card.number}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              color: '#22193B',
              lineHeight: 1.4,
              margin: 0,
              whiteSpace: 'pre-line',
            }}
          >
            {card.title}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  )
}
