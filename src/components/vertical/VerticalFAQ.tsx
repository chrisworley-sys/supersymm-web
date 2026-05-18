import { useState, useRef, useId } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { FAQItem } from '@/types/vertical'

interface VerticalFAQProps {
  items: FAQItem[]
  dark?: boolean
}

export function generateFAQSchema(items: FAQItem[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  })
}

export default function VerticalFAQ({ items, dark = false }: VerticalFAQProps) {
  const defaultIndex = items.findIndex((item) => item.defaultOpen)
  const [openIndex, setOpenIndex] = useState<number>(defaultIndex >= 0 ? defaultIndex : -1)
  const prefersReduced = useReducedMotion()
  const baseId = useId()
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === 'Escape') {
      setOpenIndex(-1)
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = (index + 1) % items.length
      itemRefs.current[next]?.focus()
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = (index - 1 + items.length) % items.length
      itemRefs.current[prev]?.focus()
    }
  }

  return (
    <div
      role="list"
      style={{ maxWidth: '800px', margin: '0 auto' }}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const triggerId = `${baseId}-trigger-${index}`
        const panelId = `${baseId}-panel-${index}`

        return (
          <div
            key={index}
            role="listitem"
            style={{
              borderBottom: dark
                ? '1px solid rgba(255,255,255,0.12)'
                : '1px solid rgba(31,30,33,0.08)',
            }}
          >
            <button
              ref={(el) => { itemRefs.current[index] = el }}
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                padding: '24px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '1.4',
                color: dark ? 'rgba(255,255,255,0.90)' : '#22193B',
                outline: 'none',
              }}
              className="focus-visible:ring-2 focus-visible:ring-ss-purple-500 focus-visible:ring-offset-4 rounded-sm"
            >
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: dark ? 'rgba(255,255,255,0.60)' : '#22193B',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: prefersReduced ? 'none' : 'transform 300ms ease',
                  lineHeight: 1,
                }}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                  animate={prefersReduced ? {} : { height: 'auto', opacity: 1 }}
                  exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(34,25,59,0.85)',
                      padding: '0 48px 24px 0',
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
