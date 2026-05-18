import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUpVariant, containerVariant } from '@/hooks/useScrollAnimation'

export default function FinalCTA() {
  const prefersReduced = useReducedMotion()

  const animateContainer = prefersReduced
    ? {}
    : { variants: containerVariant, initial: 'hidden', whileInView: 'visible', viewport: { once: true } }

  const animateItem = prefersReduced ? {} : { variants: fadeUpVariant }

  return (
    <section className="ss-deep ss-section">
      <div className="ss-container">
        <motion.div
          className="mx-auto max-w-3xl text-center flex flex-col items-center gap-6"
          {...animateContainer}
        >
          <motion.h2
            {...animateItem}
            className="font-display font-black text-h4 text-white md:text-h3 lg:text-h2"
          >
            Ready to Turn Marketing Into Your{' '}
            <em className="font-serif italic font-light text-ss-accent-100">Revenue Engine?</em>
          </motion.h2>

          <motion.p {...animateItem} className="font-sans text-body-lg text-white/70 max-w-xl">
            See how SuperSymm can generate consistent, qualified leads while you focus on what you do
            best—serving clients and closing deals.
          </motion.p>

          <motion.p {...animateItem} className="font-sans text-body-sm text-white/45">
            Custom pricing based on your business needs. Setup from $6,000–$10,000, monthly plans around $2,500.
          </motion.p>

          <motion.div {...animateItem} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/pricing" className="ss-btn-accent">
              Get Custom Pricing <ArrowRight className="size-4" />
            </Link>
            <Link to="/pricing" className="ss-btn-ghost-dark">
              Book a Demo
            </Link>
          </motion.div>

          <motion.p {...animateItem} className="font-sans text-body-xs text-white/30">
            No long-term contracts. Month-to-month after setup. Cancel anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
