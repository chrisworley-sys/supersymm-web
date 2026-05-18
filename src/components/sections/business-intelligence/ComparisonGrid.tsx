import type { CSSProperties } from 'react'

const ROWS = [
  {
    label: 'Starting point',
    generic: 'Blank prompt every time',
    supersymm: 'Built on your business context',
    enterprise: 'Configuration screens you fill in',
  },
  {
    label: 'Strategy',
    generic: 'You provide the strategy, it produces output',
    supersymm: 'System generates strategy from intelligence',
    enterprise: 'Strategy lives outside the platform',
  },
  {
    label: 'Audience understanding',
    generic: 'None. You describe the audience each time',
    supersymm: 'Living personas updated continuously',
    enterprise: 'Static segments you build manually',
  },
  {
    label: 'Market context',
    generic: 'Trained on the public internet, no specificity',
    supersymm: 'Continuous competitive and market monitoring',
    enterprise: 'No market intelligence built in',
  },
  {
    label: 'Continuous learning',
    generic: 'No memory between sessions',
    supersymm: 'Performance data feeds back into strategy',
    enterprise: 'Reporting only — no auto-improvement',
  },
  {
    label: 'Setup time',
    generic: 'Minutes per task, every task',
    supersymm: 'One-time onboarding, then continuous value',
    enterprise: 'Weeks of configuration before launch',
  },
]

const cellBase: CSSProperties = {
  padding: '32px 20px',
  fontSize: '15px',
  lineHeight: 1.5,
}

const ssColStyle: CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  borderLeft: '1px solid rgba(255,255,255,0.12)',
  borderRight: '1px solid rgba(255,255,255,0.12)',
}

export default function ComparisonGrid() {
  return (
    <div className="w-full" role="table" aria-label="SuperSymm vs. Generic AI vs. Enterprise Marketing Platforms">

      {/* Column headers */}
      <div
        role="row"
        className="hidden lg:grid"
        style={{ gridTemplateColumns: '30% 40% 30%' }}
      >
        <div
          role="columnheader"
          style={{ padding: '16px 20px 12px', fontSize: '16px', fontFamily: 'Inter, sans-serif', fontWeight: 700, color: 'rgba(255,255,255,0.70)' }}
        >
          Generic AI
          <div style={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
            (ChatGPT, Jasper, etc.)
          </div>
        </div>
        <div
          role="columnheader"
          style={{
            ...ssColStyle,
            padding: '0 20px 12px',
            borderTop: '2px solid #D5F77C',
            paddingTop: '14px',
          }}
        >
          <span style={{ fontSize: '16px', fontFamily: 'Inter, sans-serif', fontWeight: 700, color: 'rgba(255,255,255,1.0)' }}>
            SuperSymm
          </span>
        </div>
        <div
          role="columnheader"
          style={{ padding: '16px 20px 12px', fontSize: '16px', fontFamily: 'Inter, sans-serif', fontWeight: 700, color: 'rgba(255,255,255,0.70)' }}
        >
          Enterprise Platforms
          <div style={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
            (HubSpot, Marketo)
          </div>
        </div>
      </div>

      {/* Mobile column headers */}
      <div
        className="flex lg:hidden items-center justify-between mb-4"
        style={{ padding: '0 0 8px', borderBottom: '1px solid rgba(255,255,255,0.10)' }}
      >
        <span style={{ fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 700, color: 'rgba(255,255,255,0.70)' }}>
          All platforms compared
        </span>
        <span style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#D5F77C', letterSpacing: '0.04em' }}>
          SuperSymm shown first
        </span>
      </div>

      {/* Data rows */}
      {ROWS.map((row, rowIdx) => (
        <div key={row.label}>
          {/* Row label */}
          <div
            role="row"
            style={{
              borderTop: rowIdx === 0 ? '1px solid rgba(255,255,255,0.10)' : 'none',
              padding: '12px 20px 0',
            }}
          >
            <div
              role="rowheader"
              style={{
                fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.68)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {row.label}
            </div>
          </div>

          {/* Desktop cells */}
          <div
            role="row"
            className="hidden lg:grid"
            style={{
              gridTemplateColumns: '30% 40% 30%',
              borderBottom: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            <div
              role="cell"
              style={{
                ...cellBase,
                color: 'rgba(255,255,255,0.80)',
              }}
            >
              {row.generic}
            </div>
            <div
              role="cell"
              style={{
                ...cellBase,
                ...ssColStyle,
                color: 'rgba(255,255,255,1.0)',
                fontWeight: 500,
              }}
            >
              {row.supersymm}
            </div>
            <div
              role="cell"
              style={{
                ...cellBase,
                color: 'rgba(255,255,255,0.80)',
              }}
            >
              {row.enterprise}
            </div>
          </div>

          {/* Mobile cells — SuperSymm first, then others stacked */}
          <div className="flex lg:hidden flex-col" style={{ borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
            {/* SuperSymm first on mobile */}
            <div
              style={{
                ...ssColStyle,
                padding: '16px 20px',
                fontSize: '15px',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,1.0)',
                fontWeight: 500,
                margin: '0 -1px',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#D5F77C', letterSpacing: '0.06em', marginBottom: '4px', textTransform: 'uppercase' }}>
                SuperSymm
              </div>
              {row.supersymm}
            </div>
            {/* Generic AI */}
            <div style={{ padding: '12px 20px', fontSize: '14px', lineHeight: 1.5, color: 'rgba(255,255,255,0.68)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em', marginBottom: '3px', textTransform: 'uppercase' }}>
                Generic AI
              </div>
              {row.generic}
            </div>
            {/* Enterprise */}
            <div style={{ padding: '12px 20px', fontSize: '14px', lineHeight: 1.5, color: 'rgba(255,255,255,0.68)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em', marginBottom: '3px', textTransform: 'uppercase' }}>
                Enterprise Platforms
              </div>
              {row.enterprise}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
