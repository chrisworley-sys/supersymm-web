import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import PageWrapper from '@/components/common/PageWrapper'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function DemoPage() {
  useEffect(() => {
    document.title = 'Book a Demo | SuperSymm'
  }, [])

  return (
    <PageWrapper>
      <main className="min-h-screen bg-ss-purple-700 flex items-center justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center px-6 max-w-xl"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ss-accent-100 mb-4">
            Book a Demo
          </p>
          <h1 className="font-display font-black text-4xl text-white mb-6">
            Demo booking coming soon.
          </h1>
          <p className="font-sans text-lg text-white/70 mb-10 leading-relaxed">
            In the meantime, use our pricing page to tell us about your firm and we'll
            be in touch within 24 hours to schedule a call.
          </p>
          <Link to="/pricing" className="ss-btn-accent">
            Get Custom Pricing →
          </Link>
        </motion.div>
      </main>
    </PageWrapper>
  )
}
