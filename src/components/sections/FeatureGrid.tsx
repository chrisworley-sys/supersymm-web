import { useState } from 'react'
import type React from 'react'

const HOVER_BG = 'var(--ss-purple-dark)'
const DEFAULT_BORDER = 'rgba(103, 80, 164, 0.1)'

export type FeatureGridItem = {
  Icon: React.ComponentType<{ className?: string }>
  pre: string
  bold: string
  post?: string
  body: string
  bg: string
}

type FeatureGridProps = {
  items: FeatureGridItem[]
  columns?: 2 | 3 | 4
  borderColor?: string
}

export default function FeatureGrid({
  items,
  columns = 3,
  borderColor = DEFAULT_BORDER,
}: FeatureGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const colClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 4
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div
      className={`grid ${colClass}`}
      style={{ borderTop: `1px solid ${borderColor}`, borderLeft: `1px solid ${borderColor}` }}
    >
      {items.map((item, i) => {
        const isHovered = hoveredIndex === i
        return (
          <div
            key={`${item.pre}${item.bold}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="p-10 lg:p-12 flex flex-col"
            style={{
              background: isHovered ? HOVER_BG : item.bg,
              borderRight: `1px solid ${borderColor}`,
              borderBottom: `1px solid ${borderColor}`,
              transition: 'background 0.22s ease',
              cursor: 'default',
            }}
          >
            <div
              className="mb-6 flex-shrink-0"
              style={{
                color: isHovered ? 'rgba(255,255,255,0.75)' : 'var(--ss-purple)',
                transition: 'color 0.22s ease',
              }}
            >
              <item.Icon className="w-7 h-7" />
            </div>
            <h3
              className="font-display mb-3"
              style={{
                fontSize: 'clamp(22px, 2.2vw, 28px)',
                lineHeight: 1.2,
                fontWeight: 300,
                color: isHovered ? 'white' : 'var(--ss-navy)',
                transition: 'color 0.22s ease',
              }}
            >
              {item.pre}
              <strong style={{ fontWeight: 900 }}>{item.bold}</strong>
              {item.post}
            </h3>
            <p
              className="font-sans"
              style={{
                fontSize: '15px',
                lineHeight: 1.65,
                color: isHovered ? 'rgba(255,255,255,0.68)' : 'var(--ss-text-muted)',
                transition: 'color 0.22s ease',
              }}
            >
              {item.body}
            </p>
          </div>
        )
      })}
    </div>
  )
}
