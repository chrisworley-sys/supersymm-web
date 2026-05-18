interface CaptureIllustrationProps {
  animationsDisabled?: boolean
}

export default function CaptureIllustration({ animationsDisabled = false }: CaptureIllustrationProps) {
  return (
    <>
      {!animationsDisabled && (
        <style>{`
          @keyframes cap-fill-1 {
            0%   { width: 0; }
            100% { width: 96px; }
          }
          @keyframes cap-fill-2 {
            0%   { width: 0; }
            100% { width: 80px; }
          }
          @keyframes cap-fill-3 {
            0%   { width: 0; }
            100% { width: 64px; }
          }
          @keyframes cap-arrow-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          .cap-illustration:hover .cap-field-1 { animation: cap-fill-1 0.35s ease 0ms forwards; }
          .cap-illustration:hover .cap-field-2 { animation: cap-fill-2 0.35s ease 200ms forwards; }
          .cap-illustration:hover .cap-field-3 { animation: cap-fill-3 0.35s ease 400ms forwards; }
          .cap-illustration:hover .cap-arrow { animation: cap-arrow-pulse 0.6s ease 700ms 2; }
        `}</style>
      )}
      <svg
        viewBox="0 0 480 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        className="cap-illustration"
        aria-label="Visitor submitting a form, exchanging contact info for value, entering CRM"
        role="img"
      >
        {/* Visitor figure — left side */}
        <circle cx="72" cy="155" r="22" stroke="#22193B" strokeWidth="1.5" fill="rgba(34,25,59,0.06)" />
        {/* head */}
        <circle cx="72" cy="120" r="12" stroke="#22193B" strokeWidth="1.5" fill="none" />
        {/* body */}
        <path d="M56 175 C56 163 64 158 72 158 C80 158 88 163 88 175" stroke="#22193B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* arm pointing right */}
        <path d="M88 155 L108 155" stroke="#22193B" strokeWidth="1.5" strokeLinecap="round" />

        {/* Form card — center */}
        <rect x="118" y="110" width="130" height="160" rx="10" stroke="#22193B" strokeWidth="1.5" fill="white" />
        {/* Form title bar */}
        <rect x="118" y="110" width="130" height="28" rx="10" fill="rgba(103,80,164,0.08)" />
        <rect x="118" y="124" width="130" height="14" fill="rgba(103,80,164,0.08)" />
        <text x="183" y="129" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="11" fill="#6750A4">
          GET STARTED
        </text>

        {/* Form fields */}
        {/* Field 1 label */}
        <text x="130" y="158" fontFamily="Roboto, sans-serif" fontSize="9" fill="rgba(34,25,59,0.50)">Name</text>
        <rect x="130" y="162" width="106" height="12" rx="3" stroke="rgba(34,25,59,0.15)" strokeWidth="1" fill="rgba(34,25,59,0.03)" />
        {/* Field 1 fill bar */}
        <rect x="132" y="164" width="0" height="8" rx="2" fill="rgba(103,80,164,0.20)" className="cap-field-1" />

        {/* Field 2 label */}
        <text x="130" y="185" fontFamily="Roboto, sans-serif" fontSize="9" fill="rgba(34,25,59,0.50)">Email</text>
        <rect x="130" y="189" width="106" height="12" rx="3" stroke="rgba(34,25,59,0.15)" strokeWidth="1" fill="rgba(34,25,59,0.03)" />
        <rect x="132" y="191" width="0" height="8" rx="2" fill="rgba(103,80,164,0.20)" className="cap-field-2" />

        {/* Field 3 label */}
        <text x="130" y="212" fontFamily="Roboto, sans-serif" fontSize="9" fill="rgba(34,25,59,0.50)">Company</text>
        <rect x="130" y="216" width="106" height="12" rx="3" stroke="rgba(34,25,59,0.15)" strokeWidth="1" fill="rgba(34,25,59,0.03)" />
        <rect x="132" y="218" width="0" height="8" rx="2" fill="rgba(103,80,164,0.20)" className="cap-field-3" />

        {/* Submit button */}
        <rect x="130" y="238" width="106" height="22" rx="11" fill="#6750A4" />
        <text x="183" y="253" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="10" fill="white">
          Submit →
        </text>

        {/* Value exchange arrow + gift icon */}
        <g className="cap-arrow">
          <line x1="252" y1="190" x2="296" y2="190" stroke="#22193B" strokeWidth="1.5" strokeDasharray="4 3" />
          <polygon points="292,187 298,190 292,193" fill="#22193B" />
          {/* Gift icon — yellow, above the arrow */}
          <rect x="264" y="170" width="20" height="16" rx="3" stroke="#8DA450" strokeWidth="1.5" fill="rgba(213,247,124,0.30)" />
          <line x1="274" y1="170" x2="274" y2="186" stroke="#8DA450" strokeWidth="1.5" />
          <path d="M267 170 C265 167 268 164 271 166 C272 167 273 169 274 170" stroke="#8DA450" strokeWidth="1.2" fill="none" />
          <path d="M281 170 C283 167 280 164 277 166 C276 167 275 169 274 170" stroke="#8DA450" strokeWidth="1.2" fill="none" />
        </g>

        {/* CRM card — right side */}
        <rect x="306" y="120" width="128" height="150" rx="10" stroke="#22193B" strokeWidth="1.5" fill="rgba(34,25,59,0.04)" />
        <rect x="306" y="120" width="128" height="28" rx="10" fill="rgba(34,25,59,0.08)" />
        <rect x="306" y="134" width="128" height="14" fill="rgba(34,25,59,0.08)" />
        <text x="370" y="129" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="10" fill="#22193B">
          NEW LEAD
        </text>
        {/* Lead entry lines */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="318" y={158 + i * 24} width="10" height="10" rx="5" fill="rgba(103,80,164,0.15)" stroke="#6750A4" strokeWidth="1" />
            <rect x="334" y={160 + i * 24} width={50 + i * 8} height="6" rx="3" fill="rgba(34,25,59,0.08)" />
          </g>
        ))}
        {/* New entry highlight */}
        <rect x="318" y="254" width="100" height="10" rx="3" fill="rgba(103,80,164,0.12)" stroke="#6750A4" strokeWidth="1" strokeDasharray="3 2" />
        <text x="370" y="262" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fill="#6750A4">
          + New contact
        </text>
      </svg>
    </>
  )
}
