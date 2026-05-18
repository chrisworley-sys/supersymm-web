import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Platform', to: '/platform' },
  { label: 'Practices', to: '/platform' },
  { label: 'Industries', to: '/solutions' },
  { label: 'About', to: '/about' },
]

export default function NavV3() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY >= 80)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white' : 'bg-transparent'
        }`}
        style={{
          borderBottom: scrolled ? '1px solid rgba(31,30,33,0.08)' : 'none',
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/v3" className="shrink-0">
              <img
                src="/assets/logos/logo-horizontal.png"
                alt="SuperSymm"
                className="h-7 md:h-8 w-auto transition-all duration-300"
                style={{ filter: scrolled ? 'brightness(0)' : 'brightness(1)' }}
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className={`font-sans text-sm font-medium transition-opacity hover:opacity-70 ${
                    scrolled ? 'text-ss-neutral-700' : 'text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                to="/pricing"
                className={`font-sans text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${
                  scrolled
                    ? 'bg-ss-purple-500 text-white hover:bg-ss-purple-600'
                    : 'bg-ss-accent-100 text-ss-purple-700 hover:bg-ss-accent-200'
                }`}
              >
                Get pricing →
              </Link>
            </div>

            <button
              className={`md:hidden p-2 ${scrolled ? 'text-ss-neutral-700' : 'text-white'}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-ss-purple-700 flex flex-col p-6">
          <div className="flex items-center justify-between mb-12">
            <img
              src="/assets/logos/logo-horizontal.png"
              alt="SuperSymm"
              className="h-7 w-auto"
            />
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="flex flex-col gap-8 flex-1">
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="font-display font-bold text-2xl text-white"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            to="/pricing"
            className="w-full flex items-center justify-center bg-ss-accent-100 text-ss-purple-700 font-sans font-medium text-base px-6 py-4 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Get pricing →
          </Link>
        </div>
      )}
    </>
  )
}
