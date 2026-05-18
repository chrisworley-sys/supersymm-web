import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import PageWrapper from '@/components/common/PageWrapper'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const ref = searchParams.get('ref')

  useEffect(() => {
    document.title = 'Contact | SuperSymm'
  }, [])

  return (
    <PageWrapper>
      <main className="min-h-screen bg-ss-neutral-100 flex items-center justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center px-6 max-w-xl"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ss-purple-500 mb-4">
            {ref ? `Referred by: ${ref}` : 'Contact'}
          </p>
          <h1 className="font-display font-black text-4xl text-ss-neutral-700 mb-6">
            {/* TODO: Build full contact form — routes here from proof section */}
            Contact page coming soon.
          </h1>
          <p className="font-sans text-lg text-ss-neutral-500 mb-10 leading-relaxed">
            In the meantime, use our pricing page to tell us about your firm and we'll
            be in touch within 24 hours.
          </p>
          <Link to="/pricing" className="ss-btn-primary">
            Get Custom Pricing →
          </Link>
        </motion.div>
      </main>
    </PageWrapper>
  )
}
