import type { AudienceProfileProps } from '@/types/lead-generation'

export default function AudienceProfile({
  number,
  accentColor,
  title,
  constraint,
  body,
  benefitLine,
  icon,
}: AudienceProfileProps) {
  return (
    <li
      style={{
        background: 'white',
        border: '1px solid rgba(31,30,33,0.08)',
        borderLeft: 'none',
        borderRadius: '16px',
        display: 'flex',
        overflow: 'hidden',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        cursor: 'default',
        listStyle: 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLLIElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 12px 32px rgba(34,25,59,0.09)'
        const strip = el.querySelector('.ap-strip') as HTMLDivElement | null
        if (strip) strip.style.width = '6px'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLLIElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
        const strip = el.querySelector('.ap-strip') as HTMLDivElement | null
        if (strip) strip.style.width = '4px'
      }}
    >
      {/* Accent strip */}
      <div
        className="ap-strip"
        style={{
          width: '4px',
          flexShrink: 0,
          background: accentColor,
          transition: 'width 200ms ease',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div style={{ display: 'flex', gap: '24px', padding: '32px', flex: 1 }}>
        {/* Icon */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '12px',
            background: `${accentColor}18`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            alignSelf: 'flex-start',
          }}
          role="img"
          aria-label={`${title} icon`}
        >
          <div style={{ width: '36px', height: '36px' }}>
            {icon}
          </div>
        </div>

        {/* Text */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Profile number */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'rgba(34,25,59,0.60)',
              margin: 0,
            }}
          >
            {number}
          </p>

          {/* Title */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '22px',
              color: 'var(--ss-navy)',
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {title}
          </p>

          {/* Constraint */}
          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              color: 'var(--ss-navy)',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {constraint}
          </p>

          {/* Body */}
          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              color: 'var(--ss-navy)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {body}
          </p>

          {/* What changes */}
          <div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(34,25,59,0.60)',
                margin: '0 0 8px 0',
              }}
            >
              WHAT CHANGES
            </p>
            <p className="italic-benefit" style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
              {benefitLine}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
