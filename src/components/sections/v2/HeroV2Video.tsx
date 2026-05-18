import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroV2Video() {
  const prefersReduced = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  // Pause/resume video based on viewport visibility
  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    if (prefersReduced) {
      el.pause()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [prefersReduced])

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.08 } },
  }

  const itemVariants: Variants = {
    hidden: prefersReduced ? {} : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Layer 1: Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        poster="/assets/HomePageVid-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ background: 'linear-gradient(93deg, #22193B 22%, #E977C1 124%)' }}
      >
        <source src="https://res.cloudinary.com/dyqu41ph3/video/upload/v1779077961/HomePageVid_w48srw.mp4" type="video/mp4" />
      </video>

      {/* Layer 2: Dark overlay — medium opacity to ensure text legibility */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Layer 3: SS brand color gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(34,25,59,0.35) 0%, rgba(233,119,193,0.15) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Layer 4: Hero content */}
      <div className="relative z-10 ss-container py-32 text-center" style={{ paddingTop: 'calc(5rem + 80px)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="ss-badge-accent mb-6 inline-flex"
            >
              SuperSymm Marketing
            </motion.span>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black mb-6"
              style={{
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: 0.95,
              }}
            >
              {/* Line 1: outline text — white stroke, transparent fill */}
              <span
                className="block"
                style={{
                  WebkitTextStroke: '2px rgba(255,255,255,0.9)',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                Stop running campaigns.
              </span>

              {/* Line 2: gradient fill text */}
              <span
                className="block bg-gradient-to-r from-ss-purple-400 to-ss-pink-700 bg-clip-text text-transparent"
              >
                Start meeting customers.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-sans leading-[1.6] mx-auto mb-8"
              style={{
                fontSize: '20px',
                color: 'rgba(255,255,255,0.90)',
                maxWidth: '640px',
                marginTop: '24px',
              }}
            >
              The old marketing playbook was about volume. The new one is about timing.
              SuperSymm connects every channel, every signal, and every interaction so
              you show up exactly when your customer is ready — not when your calendar
              says it's time to post.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row flex-wrap items-center justify-center gap-4"
              style={{ marginTop: '32px' }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-full font-sans font-semibold px-7 bg-ss-accent-100 text-ss-purple-700 no-underline"
                  style={{ height: '56px', fontSize: '16px' }}
                >
                  Get Custom Pricing <ArrowRight className="size-4" />
                </Link>
              </motion.div>

              <Link
                to="/platform"
                className="font-sans font-medium text-white hover:underline inline-flex items-center gap-1.5"
                style={{ fontSize: '16px' }}
              >
                See How It Works <ArrowRight className="size-4" />
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={itemVariants}
              className="font-sans"
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.60)',
                marginTop: '24px',
              }}
            >
              Trusted by financial advisors, healthcare providers, and professional service firms
            </motion.p>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
