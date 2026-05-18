import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DropdownMenu } from 'radix-ui'
import {
  Menu, X, ChevronDown,
  LayoutGrid, Brain, Target, Zap, TrendingUp, Shield,
  Building2, Heart, Calculator, Scale, Briefcase,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type React from 'react'

type NavDropdownItem = {
  label: string
  href: string
  description: string
  Icon: React.ComponentType<{ className?: string }>
  comingSoon?: boolean
}

const platformItems: NavDropdownItem[] = [
  {
    label: 'Platform Overview',
    href: '/platform',
    description: 'See how all four systems connect into one intelligent engine',
    Icon: LayoutGrid,
  },
  {
    label: 'Business Intelligence Engine',
    href: '/platform/business-intelligence',
    description: 'AI-powered market research and automated strategy creation',
    Icon: Brain,
  },
  {
    label: 'Lead Generation System',
    href: '/platform/lead-generation',
    description: 'Capture, score, and convert prospects automatically',
    Icon: Target,
  },
  {
    label: 'Marketing Automation',
    href: '/platform/marketing-automation',
    description: 'Execute campaigns across every channel in one approval',
    Icon: Zap,
  },
  {
    label: 'Performance Optimization',
    href: '/platform/performance-optimization',
    description: 'Real-time analytics and automated A/B testing',
    Icon: TrendingUp,
    comingSoon: true,
  },
  {
    label: 'Compliance Hub',
    href: '/platform/compliance',
    description: 'Built-in SEC/FINRA, HIPAA, and State Bar compliance',
    Icon: Shield,
    comingSoon: true,
  },
]

const solutionsItems: NavDropdownItem[] = [
  {
    label: 'Financial Advisors',
    href: '/solutions/financial-advisors',
    description: 'Complete RIA marketing with built-in SEC compliance',
    Icon: Building2,
  },
  {
    label: 'Healthcare',
    href: '/solutions/healthcare',
    description: 'HIPAA-aware patient acquisition for healthcare practices',
    Icon: Heart,
  },
  {
    label: 'Tax & Accounting',
    href: '/solutions/tax-accounting',
    description: 'Year-round client acquisition for CPA firms',
    Icon: Calculator,
    comingSoon: true,
  },
  {
    label: 'Legal Professionals',
    href: '/solutions/legal',
    description: 'State bar compliant marketing for law firms',
    Icon: Scale,
    comingSoon: true,
  },
  {
    label: 'B2B Services',
    href: '/solutions/b2b',
    description: 'Automated pipeline for professional service companies',
    Icon: Briefcase,
    comingSoon: true,
  },
]

function DropdownItemActive({ item }: { item: NavDropdownItem }) {
  const { Icon, label, description, href } = item
  return (
    <DropdownMenu.Item asChild>
      <Link
        to={href}
        className="nav-shimmer group flex items-start gap-3 rounded-xl p-3.5 outline-none hover:bg-white/[0.07] focus-visible:bg-white/[0.07] active:bg-white/[0.12] transition-colors duration-150 cursor-pointer"
      >
        <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.06] group-hover:bg-ss-accent-100/[0.18] transition-colors duration-150">
          <Icon className="h-4 w-4 text-white/55 group-hover:text-ss-accent-100 transition-colors duration-150" />
        </div>
        <div className="min-w-0">
          <p className="font-sans font-semibold text-body-sm text-white/85 group-hover:text-white transition-colors duration-150 leading-snug">
            {label}
          </p>
          <p className="font-sans text-body-xs text-white/40 group-hover:text-white/60 mt-0.5 transition-colors duration-150 leading-snug">
            {description}
          </p>
        </div>
      </Link>
    </DropdownMenu.Item>
  )
}

function DropdownItemSoon({ item }: { item: NavDropdownItem }) {
  const { Icon, label, description } = item
  return (
    <div className="flex items-start gap-3 rounded-xl p-3.5 cursor-default select-none">
      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.03]">
        <Icon className="h-4 w-4 text-white/20" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <p className="font-sans font-semibold text-body-sm text-white/30 leading-snug">{label}</p>
          <span className="inline-flex items-center rounded-full bg-white/[0.07] px-2 py-0.5 text-[10px] font-medium text-white/30 leading-none tracking-wide">
            Soon
          </span>
        </div>
        <p className="font-sans text-body-xs text-white/20 leading-snug">{description}</p>
      </div>
    </div>
  )
}

function NavDropdown({
  label,
  items,
  dropdownWidth = 580,
}: {
  label: string
  items: NavDropdownItem[]
  dropdownWidth?: number
}) {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-white/75 hover:text-white hover:bg-white/[0.08] font-sans text-body-sm font-medium transition-all duration-150 outline-none data-[state=open]:text-white data-[state=open]:bg-white/[0.10] select-none whitespace-nowrap">
          {label}
          <ChevronDown className="size-3.5 text-white/45 transition-transform duration-200 [[data-state=open]_&]:rotate-180 [[data-state=open]_&]:text-white/70" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={14}
          align="start"
          collisionPadding={16}
          className="z-50 rounded-2xl border border-white/[0.09] shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)] p-2 animate-fade-in"
          style={{
            width: `${dropdownWidth}px`,
            background: 'linear-gradient(160deg, rgba(34,25,59,0.98) 0%, rgba(27,10,32,0.98) 100%)',
            backdropFilter: 'blur(24px)',
          } as React.CSSProperties}
        >
          <div className="grid grid-cols-2 gap-0.5">
            {items.map((item, i) => {
              const isLastOdd = i === items.length - 1 && items.length % 2 !== 0
              return (
                <div key={item.label} className={isLastOdd ? 'col-span-2' : ''}>
                  {item.comingSoon ? (
                    <DropdownItemSoon item={item} />
                  ) : (
                    <DropdownItemActive item={item} />
                  )}
                </div>
              )
            })}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

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
          {/* Logo */}
          <Link
            to="/v2-video"
            className="group relative shrink-0 block transition-transform duration-300 ease-out hover:scale-105"
            aria-label="SuperSymm — home"
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
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            <NavDropdown label="Platform" items={platformItems} dropdownWidth={600} />
            <NavDropdown label="Solutions" items={solutionsItems} dropdownWidth={560} />
            <Link
              to="/pricing"
              className="rounded-lg px-3 py-2 text-white/75 hover:text-white hover:bg-white/[0.08] font-sans text-body-sm font-medium transition-all duration-150 whitespace-nowrap"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="rounded-lg px-3 py-2 text-white/75 hover:text-white hover:bg-white/[0.08] font-sans text-body-sm font-medium transition-all duration-150 whitespace-nowrap"
            >
              About
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link to="/pricing" className="ss-btn-ghost-dark">Book Demo</Link>
            <Link to="/pricing" className="ss-btn-accent">Get Pricing →</Link>
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
            <Link
              to="/v2-video"
              onClick={() => setIsMobileOpen(false)}
              className="group relative block transition-transform duration-300 ease-out hover:scale-105"
              aria-label="SuperSymm — home"
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
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="text-white p-2 -mr-2"
              aria-label="Close navigation menu"
            >
              <X className="size-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1" aria-label="Mobile navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 px-2 pt-2">
              Platform
            </p>
            {platformItems.map((item) => (
              item.comingSoon ? (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-lg px-2 py-3 text-white/30 select-none"
                >
                  <span className="font-sans text-body-sm">{item.label}</span>
                  <span className="ss-badge bg-white/10 text-white/30 text-xs">Soon</span>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-2 py-3 font-sans text-body-sm text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  <item.Icon className="h-4 w-4 text-white/40 flex-shrink-0" />
                  {item.label}
                </Link>
              )
            ))}

            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 px-2">
                Solutions
              </p>
              {solutionsItems.map((item) => (
                item.comingSoon ? (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg px-2 py-3 text-white/30 select-none"
                  >
                    <span className="font-sans text-body-sm">{item.label}</span>
                    <span className="ss-badge bg-white/10 text-white/30 text-xs">Soon</span>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-2 py-3 font-sans text-body-sm text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors"
                  >
                    <item.Icon className="h-4 w-4 text-white/40 flex-shrink-0" />
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            <div className="pt-4 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 px-2">
                Company
              </p>
              <Link
                to="/pricing"
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-lg px-2 py-3 font-sans text-body-sm text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-lg px-2 py-3 font-sans text-body-sm text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                About
              </Link>
            </div>
          </nav>

          <div className="px-6 pb-8 pt-4 border-t border-white/10">
            <Link
              to="/pricing"
              onClick={() => setIsMobileOpen(false)}
              className="ss-btn-accent w-full justify-center"
            >
              Get Pricing →
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
