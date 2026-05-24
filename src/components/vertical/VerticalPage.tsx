import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const personaIllustrations: { bg: string; svg: React.ReactNode }[] = [
  {
    bg: 'linear-gradient(135deg, #FFF0E0 0%, #FFD4A8 100%)',
    svg: (
      <svg viewBox="0 0 52 52" fill="none" style={{ width: '100%', height: '100%' }} aria-hidden="true">
        {/* Body — neutral centered */}
        <path d="M4 54 C4 37 48 37 48 54 Z" fill="#B84C0A" fillOpacity="0.55" />
        {/* Head */}
        <circle cx="26" cy="20" r="10" fill="#B84C0A" fillOpacity="0.82" />
      </svg>
    ),
  },
  {
    bg: 'linear-gradient(135deg, #E0EEFF 0%, #BFDBFE 100%)',
    svg: (
      <svg viewBox="0 0 52 52" fill="none" style={{ width: '100%', height: '100%' }} aria-hidden="true">
        {/* Body — slight forward lean */}
        <path d="M5 54 C6 37 49 36 49 54 Z" fill="#1D52B8" fillOpacity="0.55" />
        {/* Head — nudged slightly forward */}
        <circle cx="27" cy="19" r="10" fill="#1D52B8" fillOpacity="0.82" />
      </svg>
    ),
  },
  {
    bg: 'linear-gradient(135deg, #EDE9FE 0%, #D8B4FE 100%)',
    svg: (
      <svg viewBox="0 0 52 52" fill="none" style={{ width: '100%', height: '100%' }} aria-hidden="true">
        {/* Body — wider open stance */}
        <path d="M2 54 C3 36 49 36 50 54 Z" fill="#6D28D9" fillOpacity="0.55" />
        {/* Head */}
        <circle cx="26" cy="20" r="10" fill="#6D28D9" fillOpacity="0.82" />
      </svg>
    ),
  },
  {
    bg: 'linear-gradient(135deg, #D8F5E8 0%, #A7F3D0 100%)',
    svg: (
      <svg viewBox="0 0 52 52" fill="none" style={{ width: '100%', height: '100%' }} aria-hidden="true">
        {/* Body — upright, receptive */}
        <path d="M5 54 C5 38 47 38 47 54 Z" fill="#065F46" fillOpacity="0.55" />
        {/* Head — slightly elevated */}
        <circle cx="26" cy="19" r="10" fill="#065F46" fillOpacity="0.82" />
      </svg>
    ),
  },
]
import PageWrapper from '@/components/common/PageWrapper'
import Breadcrumb from '@/components/common/Breadcrumb'
import VerticalFAQ, { generateFAQSchema } from '@/components/vertical/VerticalFAQ'
import type { VerticalConfig, StatBlock } from '@/types/vertical'

const MotionLink = motion.create(Link)

interface VerticalPageProps {
  config: VerticalConfig
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const staggerQuick: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

function SectionEyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className="font-sans font-medium uppercase mb-4"
      style={{
        fontSize: '13px',
        letterSpacing: '0.08em',
        color: dark ? 'rgba(213,247,124,0.80)' : 'var(--ss-purple)',
      }}
    >
      {children}
    </p>
  )
}

function renderWithAccent(text: string, accentPhrase: string, dark = false) {
  const idx = text.indexOf(accentPhrase)
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <em className={dark ? 'italic-accent-dark' : 'italic-accent'}>{accentPhrase}</em>
      {text.slice(idx + accentPhrase.length)}
    </>
  )
}

// Renders an H2 string, wrapping the accentPhrase in Newsreader italic gradient text
function renderH2WithAccent(h2: string, h2AccentPhrase?: string) {
  if (!h2AccentPhrase) return <>{h2}</>
  const idx = h2.indexOf(h2AccentPhrase)
  if (idx === -1) return <>{h2}</>
  return (
    <>
      {h2.slice(0, idx)}
      <em
        className="font-serif not-italic"
        style={{
          background: 'linear-gradient(93deg, #ACA1D2, #E977C1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {h2AccentPhrase}
      </em>
      {h2.slice(idx + h2AccentPhrase.length)}
    </>
  )
}

export default function VerticalPage({ config }: VerticalPageProps) {
  const prefersReduced = useReducedMotion() ?? false
  const hasDarkHero = !!config.hero.heroImage

  // Image rotation for capabilities section
  const bgImages = config.capabilities.backgroundImages ?? []
  const hasCapabilityImages = bgImages.length > 0
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    if (!hasCapabilityImages || prefersReduced) return
    const id = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % bgImages.length)
    }, 6000)
    return () => clearInterval(id)
  }, [hasCapabilityImages, prefersReduced, bgImages.length])

  const inView = (staggerVariant: Variants = stagger) =>
    prefersReduced
      ? {}
      : {
          variants: staggerVariant,
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, amount: 0.2 } as const,
        }

  const item = prefersReduced ? {} : { variants: fadeUp }

  const h1Content = config.hero.h1Lines.map((line, i) => {
    const isLast = i === config.hero.h1Lines.length - 1
    const node =
      line === config.hero.h1AccentPhrase ? (
        <em key={i} className={hasDarkHero ? 'italic-accent-dark' : 'italic-accent'}>
          {line}
        </em>
      ) : (
        <span key={i}>{line}</span>
      )
    return isLast ? node : [node, <br key={`br-${i}`} />]
  })

  const ctaH2Content = config.cta.h2Lines.map((line, i) => {
    const isLast = i === config.cta.h2Lines.length - 1
    const node =
      line === config.cta.h2AccentPhrase ? (
        <em key={i} className="italic-accent-dark">{line}</em>
      ) : (
        <span key={i}>{line}</span>
      )
    return isLast ? node : [node, <br key={`br-${i}`} />]
  })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Marketing for ${config.seo.audienceType}`,
    provider: { '@type': 'Organization', name: 'SuperSymm' },
    serviceType: 'Marketing automation and lead generation',
    audience: { '@type': 'Audience', audienceType: config.seo.audienceType },
    description: config.seo.description,
  }

  return (
    <PageWrapper>
      {/* React 19 native document metadata */}
      <title>{config.seo.title}</title>
      <meta name="description" content={config.seo.description} />
      <link rel="canonical" href={`https://supersymm.com${config.seo.canonicalPath}`} />
      <meta property="og:title" content={config.seo.title} />
      <meta property="og:description" content={config.seo.description} />
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{generateFAQSchema(config.faq.items)}</script>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          paddingTop: 'calc(5rem + 12px)',
          paddingBottom: 'clamp(80px, 8vw, 120px)',
          ...(hasDarkHero
            ? {
                backgroundImage: `url('${config.hero.heroImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : { background: '#ffffff' }),
        }}
      >
        {hasDarkHero && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(93deg, rgba(22,14,40,0.95) 0%, rgba(34,25,59,0.90) 45%, rgba(120,35,90,0.82) 100%)',
            }}
          />
        )}

        {!hasDarkHero && (
          <>
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(103, 80, 164, 0.38) 1.4px, transparent 1.4px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(to top, rgba(210,195,252,0.85) 0%, rgba(222,208,255,0.60) 18%, rgba(233,220,255,0.38) 40%, rgba(242,232,255,0.18) 60%, transparent 100%)',
              }}
            />
          </>
        )}

        <div className="mx-auto w-full max-w-[1200px] px-6 relative">
          <Breadcrumb
            variant={hasDarkHero ? 'dark' : 'light'}
            items={[{ label: config.hero.breadcrumbVertical, href: config.seo.canonicalPath }]}
          />

          <motion.div
            {...inView(stagger)}
            className="text-center mx-auto"
            style={{ maxWidth: '880px', paddingTop: 'clamp(36px, 4vw, 56px)' }}
          >
            <motion.div {...item} className="mb-5">
              <span
                className="font-sans font-medium uppercase"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  color: hasDarkHero ? 'rgba(213,247,124,0.80)' : 'var(--ss-purple)',
                }}
              >
                {config.hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              {...item}
              className="font-display font-black mb-6"
              style={{
                fontSize: 'clamp(40px, 5.5vw, 64px)',
                lineHeight: 1.1,
                textWrap: 'pretty',
                color: hasDarkHero ? '#ffffff' : 'var(--ss-navy)',
              }}
            >
              {h1Content}
            </motion.h1>

            <motion.p
              {...item}
              className="font-sans mx-auto mb-10"
              style={{
                fontSize: '18px',
                lineHeight: 1.6,
                maxWidth: '680px',
                color: hasDarkHero ? 'rgba(255,255,255,0.80)' : 'rgba(31,30,33,0.75)',
              }}
            >
              {config.hero.framingParagraph}
            </motion.p>

            <motion.div
              {...item}
              className="flex flex-col gap-3 sm:flex-row items-center justify-center"
            >
              <MotionLink
                to="/pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#D5F77C',
                  color: '#22193B',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  padding: '0 28px',
                  height: '52px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                }}
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
              >
                Get Custom Pricing <ArrowRight size={16} />
              </MotionLink>
              <Link
                to="/demo"
                className="font-sans font-medium transition-opacity hover:opacity-75"
                style={{
                  fontSize: '15px',
                  color: hasDarkHero ? 'rgba(255,255,255,0.60)' : 'rgba(31,30,33,0.55)',
                  textDecoration: 'none',
                }}
              >
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — THE INSIGHT
      ══════════════════════════════════════════════════════════ */}
      <section
        id="insight"
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F5F3FB 0%, #EDE9F5 100%)',
          paddingBlock: '140px',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(103, 80, 164, 0.22) 1.4px, transparent 1.4px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="mx-auto w-full max-w-[1200px] px-6 relative">
          <div className="text-center">
            <motion.hr
              aria-hidden="true"
              initial={prefersReduced ? false : { opacity: 0 }}
              whileInView={prefersReduced ? undefined : { opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '60px',
                height: '2px',
                background: 'var(--ss-pink)',
                border: 'none',
                margin: '0 auto 32px',
              }}
            />
            <motion.h2
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
              className="font-display font-black text-ss-neutral-700 mx-auto"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                lineHeight: 1.2,
                maxWidth: '960px',
                textWrap: 'pretty',
              }}
            >
              {renderWithAccent(config.insight.statement, config.insight.accentPhrase)}
            </motion.h2>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — METHODOLOGY
          Three large vertical cards in a row.
      ══════════════════════════════════════════════════════════ */}
      <section
        id="methodology"
        style={{
          backgroundColor: '#F1F0F1',
          backgroundImage:
            'linear-gradient(rgba(103,80,164,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(103,80,164,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          paddingBlock: 'clamp(96px, 10vw, 140px)',
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div {...inView(stagger)} className="text-center mb-12">
            <motion.div {...item}>
              <SectionEyebrow>{config.methodology.eyebrow}</SectionEyebrow>
            </motion.div>
            <motion.h2
              {...item}
              className="font-display font-black text-ss-neutral-700 mx-auto mb-5"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                lineHeight: 1.15,
                maxWidth: '760px',
                textWrap: 'pretty',
              }}
            >
              {renderH2WithAccent(config.methodology.h2, config.methodology.h2AccentPhrase)}
            </motion.h2>
            <motion.p
              {...item}
              className="font-sans text-ss-neutral-500 mx-auto"
              style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '700px' }}
            >
              {config.methodology.intro}
            </motion.p>
          </motion.div>

          <motion.ol
            {...inView(staggerSlow)}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
          >
            {config.methodology.blocks.map((block) => (
              <motion.li
                key={block.number}
                {...item}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '40px 32px 36px',
                  borderTop: '3px solid var(--ss-purple)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <p
                  className="font-display font-black"
                  style={{ fontSize: '52px', color: 'var(--ss-purple)', lineHeight: 1, margin: 0 }}
                >
                  {block.number}
                </p>
                <h3
                  className="font-display font-bold text-ss-neutral-700"
                  style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.3, margin: 0 }}
                >
                  {block.headline}
                </h3>
                <p
                  className="font-sans text-ss-neutral-500"
                  style={{ fontSize: '16px', lineHeight: 1.65, margin: 0 }}
                >
                  {block.body}
                </p>
              </motion.li>
            ))}
          </motion.ol>

          {config.methodology.stats && (
            <motion.div
              {...inView(staggerFast)}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-16"
              style={{
                borderTop: '1px solid rgba(103,80,164,0.15)',
                paddingTop: '56px',
              }}
            >
              {config.methodology.stats.map(({ stat, label }) => (
                <motion.div key={stat} {...item} className="flex flex-col gap-3">
                  <p
                    className="font-display font-black leading-none"
                    style={{
                      fontSize: 'clamp(44px, 5.5vw, 64px)',
                      background: 'linear-gradient(135deg, #6750A4, #B874CD)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat}
                  </p>
                  <p
                    className="font-sans text-ss-neutral-500"
                    style={{ fontSize: '14px', lineHeight: 1.55 }}
                  >
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3b — STATS (optional standalone dark section)
          Rendered when statsSection is present in config.
          Separate from methodology.stats (which renders inline).
      ══════════════════════════════════════════════════════════ */}
      {config.statsSection && (
        <section
          id="stats"
          aria-label={`Key statistics for ${config.seo.audienceType}`}
          style={{
            background: '#22193B',
            paddingBlock: 'clamp(80px, 9vw, 120px)',
          }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <motion.ul
              {...inView(staggerFast)}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
              style={{ listStyle: 'none', padding: 0, margin: 0 }}
            >
              {(config.statsSection as StatBlock[]).map(({ value, label }) => (
                <motion.li
                  key={value + label}
                  {...item}
                  className="flex flex-col gap-3"
                >
                  <p
                    className="font-display font-black leading-none"
                    style={{ fontSize: 'clamp(44px, 5.5vw, 64px)', color: '#D5F77C' }}
                  >
                    {value}
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.55,
                      color: 'rgba(255,255,255,0.65)',
                      maxWidth: '200px',
                    }}
                  >
                    {label}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — CAPABILITIES
          When backgroundImages present: rotating bg + glass cards.
          Otherwise: white bg with full-width list rows.
      ══════════════════════════════════════════════════════════ */}
      <section
        id="capabilities"
        className="relative overflow-hidden"
        style={{
          paddingBlock: 'clamp(96px, 10vw, 140px)',
          background: hasCapabilityImages ? '#1a0e2e' : '#ffffff',
        }}
      >
        {/* Rotating background images */}
        {hasCapabilityImages &&
          bgImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: i === activeImg ? 1 : 0,
                transition: prefersReduced ? 'none' : 'opacity 2000ms ease-in-out',
                pointerEvents: 'none',
              }}
            />
          ))}

        {/* Dark overlay for legibility */}
        {hasCapabilityImages && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: 'rgba(14, 8, 28, 0.78)' }}
          />
        )}

        <div className="mx-auto w-full max-w-[1200px] px-6 relative">
          <motion.div {...inView(stagger)} className="text-center mb-14">
            <motion.div {...item}>
              <SectionEyebrow dark={hasCapabilityImages}>
                {config.capabilities.eyebrow}
              </SectionEyebrow>
            </motion.div>
            <motion.h2
              {...item}
              className="font-display font-black mx-auto mb-5"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                lineHeight: 1.15,
                maxWidth: '760px',
                textWrap: 'pretty',
                color: hasCapabilityImages ? '#ffffff' : 'var(--ss-navy)',
              }}
            >
              {renderH2WithAccent(config.capabilities.h2, config.capabilities.h2AccentPhrase)}
            </motion.h2>
            <motion.p
              {...item}
              className="font-sans mx-auto"
              style={{
                fontSize: '18px',
                lineHeight: 1.6,
                maxWidth: '700px',
                color: hasCapabilityImages ? 'rgba(255,255,255,0.72)' : 'rgba(31,30,33,0.65)',
              }}
            >
              {config.capabilities.intro}
            </motion.p>
          </motion.div>

          {hasCapabilityImages ? (
            // Glass card grid when background images are present
            <motion.div
              {...inView(staggerFast)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {config.capabilities.capabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  {...item}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '16px',
                    padding: '28px 24px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <p
                    className="font-display font-bold uppercase"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.10em',
                      color: 'rgba(213,247,124,0.85)',
                      margin: 0,
                    }}
                  >
                    {cap.featureSubLabel}
                  </p>
                  <p
                    className="font-display font-bold text-white"
                    style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.3, margin: 0 }}
                  >
                    {cap.benefitHeadline}
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: 'rgba(255,255,255,0.62)',
                      margin: 0,
                    }}
                  >
                    {cap.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Full-width list rows when no background images
            <>
              <motion.ol
                {...inView(staggerFast)}
                style={{
                  maxWidth: '900px',
                  margin: '0 auto',
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                {config.capabilities.capabilities.map((cap, index) => (
                  <motion.li
                    key={index}
                    {...item}
                    style={{
                      borderTop: index === 0 ? '1px solid var(--ss-border-subtle)' : 'none',
                      borderBottom: '1px solid var(--ss-border-subtle)',
                      padding: '32px 0',
                    }}
                  >
                    <p
                      className="font-display font-bold text-ss-neutral-700"
                      style={{ fontSize: '22px', lineHeight: 1.3, marginBottom: '4px' }}
                    >
                      {cap.benefitHeadline}
                    </p>
                    <p
                      className="font-display font-medium uppercase"
                      style={{
                        fontSize: '13px',
                        letterSpacing: '0.06em',
                        color: 'var(--ss-purple)',
                        marginBottom: '12px',
                      }}
                    >
                      {cap.featureSubLabel}
                    </p>
                    <p
                      className="font-sans"
                      style={{
                        fontSize: '16px',
                        lineHeight: 1.55,
                        color: 'rgba(31,30,33,0.80)',
                      }}
                    >
                      {cap.body}
                    </p>
                  </motion.li>
                ))}
              </motion.ol>

              {config.capabilities.engagementParagraph && (
                <motion.div
                  initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                  whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  style={{
                    maxWidth: '720px',
                    margin: '0 auto',
                    paddingTop: '48px',
                    textAlign: 'center',
                  }}
                >
                  <p
                    className="font-sans text-ss-neutral-700"
                    style={{ fontSize: '17px', lineHeight: 1.7 }}
                  >
                    {config.capabilities.engagementParagraph}
                  </p>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — AUDIENCE PERSONAS (optional)
      ══════════════════════════════════════════════════════════ */}
      {config.personas && (
        <section
          id="personas"
          style={{
            background: '#F5F3FB',
            backgroundImage:
              'linear-gradient(rgba(103,80,164,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(103,80,164,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            paddingBlock: 'clamp(96px, 10vw, 140px)',
          }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <motion.div {...inView(stagger)} className="text-center mb-12">
              <motion.div {...item}>
                <SectionEyebrow>{config.personas.eyebrow}</SectionEyebrow>
              </motion.div>
              <motion.h2
                {...item}
                className="font-display font-black text-ss-neutral-700 mx-auto mb-5"
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  lineHeight: 1.15,
                  maxWidth: '760px',
                  textWrap: 'pretty',
                }}
              >
                {renderH2WithAccent(config.personas.h2, config.personas.h2AccentPhrase)}
              </motion.h2>
              <motion.p
                {...item}
                className="font-sans text-ss-neutral-500 mx-auto"
                style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '680px' }}
              >
                {config.personas.intro}
              </motion.p>
            </motion.div>

            <motion.div
              {...inView(staggerFast)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {config.personas.personas.map((persona) => (
                <motion.div
                  key={persona.type}
                  {...item}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '32px 28px 28px',
                    borderTop: '3px solid var(--ss-purple)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: '0 2px 16px rgba(103,80,164,0.08)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    {(() => {
                      const idx = config.personas!.personas.indexOf(persona) % personaIllustrations.length
                      const { bg, svg } = personaIllustrations[idx]
                      return (
                        <div
                          style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '50%',
                            background: bg,
                            overflow: 'hidden',
                            flexShrink: 0,
                          }}
                        >
                          {svg}
                        </div>
                      )
                    })()}
                    <div>
                      <p
                        className="font-sans font-semibold uppercase mb-1"
                        style={{
                          fontSize: '11px',
                          letterSpacing: '0.10em',
                          color: 'var(--ss-purple)',
                        }}
                      >
                        {persona.type}
                      </p>
                      <p
                        className="font-display font-bold text-ss-neutral-700"
                        style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.25 }}
                      >
                        {persona.intent}
                      </p>
                    </div>
                  </div>

                  <p
                    className="font-sans text-ss-neutral-500"
                    style={{ fontSize: '15px', lineHeight: 1.65 }}
                  >
                    {persona.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {persona.channels.map((ch) => (
                      <span
                        key={ch}
                        className="font-sans font-medium"
                        style={{
                          fontSize: '12px',
                          padding: '4px 10px',
                          borderRadius: '100px',
                          background: 'rgba(103,80,164,0.08)',
                          color: 'var(--ss-purple)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {ch}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      borderLeft: '3px solid #8978BE',
                      paddingLeft: '14px',
                      marginTop: '4px',
                    }}
                  >
                    <p
                      className="font-sans"
                      style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(31,30,33,0.70)' }}
                    >
                      {persona.keyInsight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — INTEGRATIONS
      ══════════════════════════════════════════════════════════ */}
      <section
        id="integrations"
        className="bg-white"
        style={{
          paddingBlock: 'clamp(96px, 10vw, 140px)',
          borderTop: '1px solid rgba(31,30,33,0.06)',
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <motion.div {...inView(stagger)} className="text-center mb-12">
            <motion.div {...item}>
              <SectionEyebrow>{config.integrations.eyebrow}</SectionEyebrow>
            </motion.div>
            <motion.h2
              {...item}
              className="font-display font-black text-ss-neutral-700 mx-auto mb-5"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                lineHeight: 1.15,
                maxWidth: '720px',
                textWrap: 'pretty',
              }}
            >
              {renderH2WithAccent(config.integrations.h2, config.integrations.h2AccentPhrase)}
            </motion.h2>
            <motion.p
              {...item}
              className="font-sans text-ss-neutral-500 mx-auto"
              style={{ fontSize: '18px', lineHeight: 1.6, maxWidth: '680px' }}
            >
              {config.integrations.intro}
            </motion.p>
          </motion.div>

          <motion.div
            {...inView(staggerQuick)}
            className="flex flex-wrap justify-center gap-4 mb-8"
            style={{ maxWidth: '900px', margin: '0 auto 32px' }}
          >
            {config.integrations.tools.map((tool) => (
              <motion.div
                key={tool.name}
                {...item}
                style={{
                  width: '140px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {tool.logoUrl ? (
                  <img
                    src={tool.logoUrl}
                    alt={tool.name}
                    style={{
                      width: '120px',
                      height: '48px',
                      objectFit: 'contain',
                      mixBlendMode: 'multiply',
                    }}
                    loading="lazy"
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                    }}
                  />
                ) : (
                  <span
                    className="font-sans font-medium"
                    style={{
                      fontSize: '13px',
                      color: 'var(--ss-navy)',
                      textAlign: 'center',
                      lineHeight: 1.3,
                    }}
                  >
                    {tool.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={prefersReduced ? false : { opacity: 0 }}
            whileInView={prefersReduced ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-center"
            style={{ fontSize: '15px', color: 'rgba(31,30,33,0.55)', fontStyle: 'italic' }}
          >
            {config.integrations.closingLine}
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — FAQ
          Dark navy bg, FAQPage JSON-LD in head.
      ══════════════════════════════════════════════════════════ */}
      <section
        id="faq"
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1B0A20 0%, #22193B 40%, #2D1B4E 80%, #1B0A20 100%)',
          paddingBlock: 'clamp(96px, 10vw, 140px)',
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 relative">
          <motion.div {...inView(stagger)} className="text-center mb-14">
            <motion.div {...item}>
              <SectionEyebrow dark>{config.faq.eyebrow}</SectionEyebrow>
            </motion.div>
            <motion.h2
              {...item}
              className="font-display font-black text-white mx-auto"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                lineHeight: 1.15,
                maxWidth: '720px',
                textWrap: 'pretty',
              }}
            >
              {renderH2WithAccent(config.faq.h2, config.faq.h2AccentPhrase)}
            </motion.h2>
          </motion.div>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <VerticalFAQ items={config.faq.items} dark />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section
        id="cta"
        className="relative overflow-hidden"
        style={{ background: '#22193B', paddingBlock: 'clamp(120px, 14vw, 200px)' }}
      >
        <img
          src="/assets/logos/logo-simple.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: '480px',
            height: '480px',
            objectFit: 'contain',
            opacity: 0.06,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        <div className="mx-auto w-full max-w-[1200px] px-6 relative">
          <motion.div
            {...inView(stagger)}
            className="mx-auto text-center"
            style={{ maxWidth: '720px' }}
          >
            <motion.h2
              {...item}
              className="font-display font-black text-white mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1, textWrap: 'pretty' }}
            >
              {ctaH2Content}
            </motion.h2>

            <motion.p
              {...item}
              className="font-sans mb-10"
              style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.80)' }}
            >
              {config.cta.body}
            </motion.p>

            <motion.div
              {...item}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <MotionLink
                to="/demo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#D5F77C',
                  color: '#22193B',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  padding: '0 28px',
                  height: '56px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                }}
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
              >
                Book a Demo <ArrowRight size={16} />
              </MotionLink>
              <MotionLink
                to="/pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid rgba(255,255,255,0.30)',
                  color: 'white',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  padding: '0 28px',
                  height: '56px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                }}
                whileHover={prefersReduced ? {} : { scale: 1.03 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
              >
                Get Custom Pricing
              </MotionLink>
            </motion.div>

            <motion.p
              {...item}
              className="font-sans"
              style={{
                fontSize: '14px',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.45)',
                whiteSpace: 'pre-line',
              }}
            >
              {config.cta.pricingLine}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
