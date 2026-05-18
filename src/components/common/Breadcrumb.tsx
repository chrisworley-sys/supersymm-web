import { Link } from 'react-router-dom'
import type { BreadcrumbItem } from '@/types/platform'

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  variant?: 'dark' | 'light'
}

export default function Breadcrumb({ items, variant = 'dark' }: BreadcrumbProps) {
  const baseClass =
    variant === 'light'
      ? 'flex items-center gap-2 text-body-xs font-sans text-ss-neutral-500 mb-6'
      : 'flex items-center gap-2 text-body-xs font-sans text-white/50 mb-6'

  const linkClass =
    variant === 'light'
      ? 'hover:text-ss-neutral-700 transition-colors'
      : 'hover:text-white/80 transition-colors'

  const lastClass = variant === 'light' ? 'text-ss-neutral-700' : 'text-white/70'

  const separatorClass = variant === 'light' ? 'text-ss-neutral-300' : 'text-white/30'

  return (
    <nav
      className={baseClass}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2 list-none p-0 m-0">
        <li>
          <Link to="/" className={linkClass}>Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            <span className={separatorClass} aria-hidden="true">›</span>
            {i === items.length - 1 ? (
              <span className={lastClass} aria-current="page">{item.label}</span>
            ) : (
              <Link to={item.href} className={linkClass}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
