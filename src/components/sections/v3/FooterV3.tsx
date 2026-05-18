import { Link } from 'react-router-dom'

const platformLinks = [
  { label: 'Business Intelligence', to: '/platform' },
  { label: 'Lead Generation', to: '/platform/lead-generation' },
  { label: 'Marketing Automation', to: '/platform/marketing-automation' },
  { label: 'Performance Optimization', to: '/platform' },
]

const industryLinks = [
  { label: 'Financial Advisors', to: '/solutions/financial-advisors' },
  { label: 'Healthcare & Legal', to: '/solutions' },
  { label: 'Professional Services', to: '/solutions' },
  { label: 'All industries', to: '/solutions' },
]

const companyLinks = [
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/pricing' },
  { label: 'Book a call', to: '/pricing' },
]

export default function FooterV3() {
  return (
    <footer className="bg-ss-purple-100">
      <div
        className="mx-auto w-full max-w-[1200px] px-6"
        style={{ paddingBlock: 'clamp(60px, 8vw, 120px)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Col 1: brand */}
          <div>
            <img
              src="/assets/logos/logo-horizontal.png"
              alt="SuperSymm"
              className="h-7 w-auto mb-4"
              style={{ filter: 'brightness(0)' }}
            />
            <p className="font-sans text-[15px] leading-[1.6] text-ss-neutral-500">
              An intelligent marketing system, run alongside you.
            </p>
          </div>

          {/* Col 2: Platform */}
          <div>
            <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-semibold text-ss-neutral-700 mb-4">
              Platform
            </p>
            <ul className="space-y-3">
              {platformLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-sans text-[15px] text-ss-neutral-500 hover:text-ss-purple-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-semibold text-ss-neutral-700 mb-4">
              Industries
            </p>
            <ul className="space-y-3">
              {industryLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-sans text-[15px] text-ss-neutral-500 hover:text-ss-purple-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-semibold text-ss-neutral-700 mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {companyLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-sans text-[15px] text-ss-neutral-500 hover:text-ss-purple-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(31,30,33,0.08)' }}
        >
          <p className="font-sans text-[14px] text-ss-neutral-400">
            © 2026 SuperSymm
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="font-sans text-[14px] text-ss-neutral-400 hover:text-ss-neutral-700 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="font-sans text-[14px] text-ss-neutral-400 hover:text-ss-neutral-700 transition-colors">
              Terms
            </Link>
            <Link to="/platform" className="font-sans text-[14px] text-ss-neutral-400 hover:text-ss-neutral-700 transition-colors">
              Compliance Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
