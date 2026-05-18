interface QualifyIllustrationProps {
  animationsDisabled?: boolean
}

export default function QualifyIllustration({ animationsDisabled = false }: QualifyIllustrationProps) {
  return (
    <>
      {!animationsDisabled && (
        <style>{`
          @keyframes qual-path-on {
            0%   { opacity: 0.2; }
            100% { opacity: 1; }
          }
          .qual-path-sales  { opacity: 0.2; transition: opacity 200ms; }
          .qual-path-nurture { opacity: 0.2; transition: opacity 200ms; }
          .qual-path-list   { opacity: 0.2; transition: opacity 200ms; }
          .qual-illustration:hover .qual-path-sales   { animation: qual-path-on 0.4s ease 0ms forwards; }
          .qual-illustration:hover .qual-path-nurture  { animation: qual-path-on 0.4s ease 400ms forwards; }
          .qual-illustration:hover .qual-path-list    { animation: qual-path-on 0.4s ease 800ms forwards; }
        `}</style>
      )}
      <svg
        viewBox="0 0 480 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        className="qual-illustration"
        aria-label="Three leads entering a routing system, branching to sales, nurture, or list"
        role="img"
      >
        {/* Incoming lead cards — left stack */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0, ${i * -6})`}>
            <rect x={30 + i * 4} y={148 + i * 4} width="90" height="56" rx="8"
              stroke="#22193B" strokeWidth="1.5"
              fill={i === 0 ? 'white' : 'rgba(34,25,59,0.03)'}
              opacity={i === 0 ? 1 : 0.7 - i * 0.15}
            />
            {i === 0 && (
              <>
                <circle cx="52" cy="166" r="8" stroke="#22193B" strokeWidth="1.2" fill="rgba(103,80,164,0.12)" />
                <rect x="66" y="162" width="42" height="5" rx="2.5" fill="rgba(34,25,59,0.15)" />
                <rect x="66" y="172" width="30" height="5" rx="2.5" fill="rgba(34,25,59,0.10)" />
                <rect x="36" y="183" width="68" height="4" rx="2" fill="rgba(103,80,164,0.15)" />
                <text x="75" y="197" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#6750A4">LEAD</text>
              </>
            )}
          </g>
        ))}

        {/* Arrow from leads to diamond */}
        <line x1="124" y1="176" x2="172" y2="176" stroke="#22193B" strokeWidth="1.5" />
        <polygon points="168,172 176,176 168,180" fill="#22193B" />

        {/* Routing diamond */}
        <polygon
          points="200,152 228,176 200,200 172,176"
          stroke="#22193B"
          strokeWidth="1.5"
          fill="rgba(34,25,59,0.06)"
        />
        <text x="200" y="173" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#22193B">ROUTE</text>
        <text x="200" y="183" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#22193B">& SCORE</text>

        {/* — PATH 1: Sales (top) — purple */}
        <g className="qual-path-sales">
          <path d="M228 176 L252 176 L252 106 L280 106" stroke="#6750A4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <polygon points="276,103 282,106 276,109" fill="#6750A4" />
          {/* Sales person icon */}
          <rect x="282" y="84" width="92" height="44" rx="8" stroke="#6750A4" strokeWidth="1.5" fill="rgba(103,80,164,0.08)" />
          <circle cx="302" cy="98" r="6" stroke="#6750A4" strokeWidth="1.2" fill="none" />
          <path d="M294 116 C294 110 298 107 302 107 C306 107 310 110 310 116" stroke="#6750A4" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <text x="346" y="102" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#6750A4">Sales</text>
          <text x="346" y="116" textAnchor="middle" fontFamily="Roboto, sans-serif" fontSize="9" fill="rgba(103,80,164,0.70)">Contact now</text>
        </g>

        {/* — PATH 2: Nurture (middle) — pink */}
        <g className="qual-path-nurture">
          <line x1="228" y1="176" x2="280" y2="176" stroke="#E977C1" strokeWidth="1.5" />
          <polygon points="276,173 282,176 276,179" fill="#E977C1" />
          {/* Email nurture icon */}
          <rect x="282" y="155" width="92" height="42" rx="8" stroke="#E977C1" strokeWidth="1.5" fill="rgba(233,119,193,0.08)" />
          <path d="M292 167 L328 167 L328 189 L292 189 Z" stroke="#E977C1" strokeWidth="1.2" fill="none" />
          <path d="M292 167 L310 179 L328 167" stroke="#E977C1" strokeWidth="1.2" fill="none" />
          <text x="352" y="174" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#E977C1">Nurture</text>
          <text x="352" y="187" textAnchor="middle" fontFamily="Roboto, sans-serif" fontSize="9" fill="rgba(233,119,193,0.70)">Sequence starts</text>
        </g>

        {/* — PATH 3: List (bottom) — yellow */}
        <g className="qual-path-list">
          <path d="M228 176 L252 176 L252 246 L280 246" stroke="#8DA450" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <polygon points="276,243 282,246 276,249" fill="#8DA450" />
          {/* Database/list icon */}
          <rect x="282" y="224" width="92" height="44" rx="8" stroke="#8DA450" strokeWidth="1.5" fill="rgba(213,247,124,0.15)" />
          <ellipse cx="316" cy="236" rx="18" ry="6" stroke="#8DA450" strokeWidth="1.2" fill="none" />
          <line x1="298" y1="236" x2="298" y2="252" stroke="#8DA450" strokeWidth="1.2" />
          <line x1="334" y1="236" x2="334" y2="252" stroke="#8DA450" strokeWidth="1.2" />
          <ellipse cx="316" cy="252" rx="18" ry="6" stroke="#8DA450" strokeWidth="1.2" fill="none" />
          <text x="358" y="244" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#8DA450">Long-term</text>
          <text x="358" y="257" textAnchor="middle" fontFamily="Roboto, sans-serif" fontSize="9" fill="rgba(141,164,80,0.80)">Added to list</text>
        </g>
      </svg>
    </>
  )
}
