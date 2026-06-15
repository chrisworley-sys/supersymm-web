import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type NavItem = { label: string; href: string }

const navItems: NavItem[] = [
  { label: 'Platform', href: '#layers' },
  { label: 'Solutions', href: '#who-we-serve' },
  { label: 'Pricing', href: '#why-different' },
  { label: 'About', href: '#how-we-work' },
]

export default function CommandCenterNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 bg-ss-purple-700/95 backdrop-blur-md transition-all duration-300',
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        )}
      >
        <div className="ss-container flex h-16 items-center justify-between gap-6 md:h-20">
          {/* Logo — scrolls to top of page */}
          <a
            href="#hero"
            className="group relative shrink-0 block transition-transform duration-300 ease-out hover:scale-105"
            aria-label="SuperSymm — top"
          >
            <img
              src="/assets/logos/Logo_White.png"
              alt="SuperSymm"
              className="h-10 w-auto md:h-12 transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="/assets/logos/Logo_Hover.png"
              alt=""
              aria-hidden="true"
              className="absolute top-0 left-0 h-10 w-auto md:h-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 font-sans text-body-sm font-medium text-white/75 hover:text-white hover:bg-white/[0.08] transition-all duration-150 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a href="#cta" className="ss-btn-ghost-dark">Book Demo</a>
            <a href="#cta" className="ss-btn-accent">Get Pricing →</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden items-center justify-center text-white p-2 -mr-2"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-ss-purple-700 flex flex-col">
          <div className="flex h-16 items-center justify-between px-6 border-b border-white/10">
            <a
              href="#hero"
              onClick={() => setIsMobileOpen(false)}
              className="group relative block transition-transform duration-300 ease-out hover:scale-105"
              aria-label="SuperSymm — top"
            >
              <img
                src="/assets/logos/Logo_White.png"
                alt="SuperSymm"
                className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/assets/logos/Logo_Hover.png"
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 h-10 w-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </a>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="text-white p-2 -mr-2"
              aria-label="Close navigation menu"
            >
              <X className="size-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-lg px-2 py-3 font-sans text-body-sm text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="px-6 pb-8 pt-4 border-t border-white/10">
            <a
              href="#cta"
              onClick={() => setIsMobileOpen(false)}
              className="ss-btn-accent w-full justify-center"
            >
              Get Pricing →
            </a>
          </div>
        </div>
      )}
    </>
  )
}
