import { ArrowRight } from 'lucide-react'

const sectionLinks = [
  { label: 'The Problem', href: '#problem' },
  { label: 'How It Works', href: '#integrated-systems' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'About', href: '#how-we-work' },
]

const layers = [
  { label: 'Know Your Business', anchor: '#layer-intelligence' },
  { label: 'Build the Funnels', anchor: '#layer-strategy' },
  { label: 'Generate Leads', anchor: '#layer-execution' },
  { label: 'Optimize & Analyze', anchor: '#layer-optimization' },
]

export default function CommandCenterFooter() {
  return (
    <footer
      style={{
        background:
          'linear-gradient(180deg, #22193B 0%, #1B0A20 100%)',
        color: 'white',
      }}
    >
      <div
        className="mx-auto w-full max-w-[1200px] px-6"
        style={{ paddingBlock: 'clamp(60px, 7vw, 96px)' }}
      >
        {/* Top: brand + tagline + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-10 lg:gap-16 mb-14">
          <div>
            <img
              src="/assets/logos/Logo_White.png"
              alt="SuperSymm"
              className="h-10 w-auto mb-5"
            />
            <p
              className="font-sans leading-[1.6] mb-6"
              style={{ fontSize: '16px', color: 'rgba(255,255,255,0.72)', maxWidth: '420px' }}
            >
              The marketing command center for professional service firms. Strategy in,
              campaigns out — without the agency price tag or the tool sprawl.
            </p>
            <a
              href="mailto:chris@supersymm.com?subject=Demo%20Request"
              className="inline-flex items-center gap-2 rounded-full bg-ss-accent-100 text-ss-purple-700 font-sans font-semibold no-underline"
              style={{ fontSize: '14px', padding: '12px 24px' }}
            >
              Book a Demo <ArrowRight className="size-4" />
            </a>
          </div>

          {/* On this page */}
          <div>
            <p
              className="font-sans font-semibold uppercase mb-4"
              style={{
                fontSize: '12px',
                letterSpacing: '0.10em',
                color: 'var(--ss-yellow)',
              }}
            >
              On this page
            </p>
            <ul className="space-y-2.5">
              {sectionLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-sans transition-colors hover:text-white"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* The four layers */}
          <div>
            <p
              className="font-sans font-semibold uppercase mb-4"
              style={{
                fontSize: '12px',
                letterSpacing: '0.10em',
                color: 'var(--ss-yellow)',
              }}
            >
              The Four Layers
            </p>
            <ul className="space-y-2.5">
              {layers.map(({ label, anchor }) => (
                <li key={label}>
                  <a
                    href={anchor}
                    className="font-sans transition-colors hover:text-white"
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <p
            className="font-sans"
            style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}
          >
            © 2026 SuperSymm · Denton, Texas
          </p>
          <p
            className="font-sans italic"
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: '13px',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Strategy in. Campaigns out.
          </p>
        </div>
      </div>
    </footer>
  )
}
