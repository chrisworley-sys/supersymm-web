import type { TierCardProps } from '@/types/lead-generation'

export default function TierCard({ tier, name, who, body, benefitLine }: TierCardProps) {
  return (
    <li
      style={{
        background: 'var(--ss-bg-purple-light)',
        borderRadius: '20px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLLIElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 12px 32px rgba(34,25,59,0.10)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLLIElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Tier label */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--ss-purple)',
          margin: 0,
        }}
      >
        {tier}
      </p>

      {/* Tier name */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '28px',
          color: 'var(--ss-navy)',
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {name}
      </p>

      {/* Who fits */}
      <p
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: '14px',
          color: 'rgba(34,25,59,0.60)',
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {who}
      </p>

      {/* Body */}
      <p
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: '16px',
          color: 'var(--ss-navy)',
          lineHeight: 1.6,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {body}
      </p>

      {/* What changes label + benefit line */}
      <div style={{ marginTop: '4px' }}>
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
        <p className="italic-benefit" style={{ fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
          {benefitLine}
        </p>
      </div>
    </li>
  )
}
