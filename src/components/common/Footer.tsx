import { Link } from 'react-router-dom'

const platformLinks = [
  { label: 'Platform Overview', href: '/platform' },
  { label: 'Lead Generation System', href: '/platform/lead-generation' },
  { label: 'Marketing Automation', href: '/platform/marketing-automation' },
]

const solutionsLinks = [
  { label: 'Financial Advisors', href: '/solutions/financial-advisors' },
  { label: 'Solutions Overview', href: '/solutions' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Compliance Hub', href: '/platform/compliance' },
]

export default function Footer() {
  return (
    <footer className="bg-ss-purple-700 border-t border-white/10">
      <div className="ss-container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/assets/logos/logo-horizontal.png"
                alt="SuperSymm"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-white/60 font-sans text-body-sm leading-relaxed">
              AI marketing automation built for professional service firms. Generate consistent, qualified leads while staying compliant.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-sans text-body-sm font-semibold mb-5">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white font-sans text-body-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-sans text-body-sm font-semibold mb-5">Solutions</h3>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white font-sans text-body-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-sans text-body-sm font-semibold mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white font-sans text-body-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-sans text-body-sm font-semibold mb-5">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white font-sans text-body-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-white/40 font-sans text-body-xs">
            © {new Date().getFullYear()} SuperSymm. All rights reserved. Denton, Texas.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-white/40 hover:text-white/70 font-sans text-body-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/40 hover:text-white/70 font-sans text-body-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
