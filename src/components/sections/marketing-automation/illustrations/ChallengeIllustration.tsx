export default function ChallengeIllustration() {
  return (
    <svg
      viewBox="0 0 700 215"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}
      aria-hidden="true"
    >
      <defs>
        {/* Venn circles */}
        <radialGradient id="ci-cg1" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#43336D" />
          <stop offset="100%" stopColor="#22193B" />
        </radialGradient>
        <radialGradient id="ci-cg2" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#D4CAEF" />
          <stop offset="100%" stopColor="#ACA1D2" />
        </radialGradient>
        <radialGradient id="ci-cg3" cx="55%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#4B5D9A" />
          <stop offset="100%" stopColor="#354270" />
        </radialGradient>

        {/* Fragmentation dots */}
        <radialGradient id="ci-d1" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#43336D" />
          <stop offset="100%" stopColor="#1B0A20" />
        </radialGradient>
        <radialGradient id="ci-d2" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#4B5D9A" />
          <stop offset="100%" stopColor="#354270" />
        </radialGradient>
        <radialGradient id="ci-d3" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#D4CAEF" />
          <stop offset="100%" stopColor="#ACA1D2" />
        </radialGradient>
        <radialGradient id="ci-d4" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#8978BE" />
          <stop offset="100%" stopColor="#6750A4" />
        </radialGradient>

        {/* Alignment circle */}
        <radialGradient id="ci-ag" cx="38%" cy="33%" r="70%">
          <stop offset="0%" stopColor="#354270" />
          <stop offset="100%" stopColor="#22193B" />
        </radialGradient>

        <clipPath id="ci-aclip">
          <circle cx="575" cy="103" r="66" />
        </clipPath>
      </defs>

      {/* ── VENN DIAGRAM ── */}
      {/* Draw order: c1, c3 (opaque darks), then c2 (lavender overlay) on top */}
      <circle cx="76"  cy="103" r="61" fill="url(#ci-cg1)" />
      <circle cx="183" cy="103" r="61" fill="url(#ci-cg3)" />
      <circle cx="129" cy="103" r="61" fill="url(#ci-cg2)" opacity="0.72" />

      {/* Venn labels */}
      <text x="52"  y="186" textAnchor="middle" fontFamily="Roboto, sans-serif" fontSize="8" letterSpacing="0.1em" fill="#A8A6AC" fontWeight="500">AI SEARCH</text>
      <text x="129" y="186" textAnchor="middle" fontFamily="Roboto, sans-serif" fontSize="8" letterSpacing="0.1em" fill="#A8A6AC" fontWeight="500">SOCIAL</text>
      <text x="208" y="186" textAnchor="middle" fontFamily="Roboto, sans-serif" fontSize="8" letterSpacing="0.1em" fill="#A8A6AC" fontWeight="500">PAID MEDIA</text>

      {/* ── CONNECTOR 1: Venn → Fragmentation ── */}
      <line x1="244" y1="103" x2="278" y2="103" stroke="#CECED1" strokeWidth="1" strokeDasharray="2.5 3.5" />

      {/* ── FRAGMENTATION DOTS ── */}
      {/* Large dark anchor dot */}
      <circle cx="315" cy="113" r="15" fill="url(#ci-d1)" />
      {/* Small dark top-right */}
      <circle cx="338" cy="64"  r="9"  fill="url(#ci-d1)" />
      {/* Medium blue mid-left */}
      <circle cx="296" cy="86"  r="7"  fill="url(#ci-d2)" />
      {/* Light lavender lower */}
      <circle cx="352" cy="135" r="11" fill="url(#ci-d3)" />
      {/* Purple mid-right */}
      <circle cx="363" cy="95"  r="12" fill="url(#ci-d4)" />
      {/* Small blue accent */}
      <circle cx="343" cy="73"  r="6"  fill="url(#ci-d2)" />

      {/* Fragmentation label */}
      <text x="330" y="171" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#5F5D66" fontWeight="600">Fragmentation</text>

      {/* ── CONNECTOR 2: Fragmentation → Alignment (converging) ── */}
      <line x1="393" y1="84"  x2="470" y2="103" stroke="#CECED1" strokeWidth="1" strokeDasharray="2.5 3.5" />
      <line x1="393" y1="123" x2="470" y2="103" stroke="#CECED1" strokeWidth="1" strokeDasharray="2.5 3.5" />

      {/* ── ALIGNMENT CIRCLE ── */}
      <circle cx="575" cy="103" r="66" fill="url(#ci-ag)" />

      {/* Geometric inner pattern — clipped to circle */}
      <g clipPath="url(#ci-aclip)" stroke="#D5F77C" strokeWidth="1.25" strokeLinecap="round" fill="none">
        {/*
          Geometry construction:
          Center C = (575, 103)
          Outer octagon r=53, starting from top (−90°), every 45°
          Inner hexagon r=36, pointy-top (first vertex at top), every 60°
          Two triangles inscribed in hexagon = Star of David
          Center → each hexagon vertex
          Octagon → adjacent hexagon bridge lines
        */}

        {/* Outer octagon: r=53 */}
        {/* V0(575,50) V1(612.47,65.53) V2(628,103) V3(612.47,140.47) V4(575,156) V5(537.53,140.47) V6(522,103) V7(537.53,65.53) */}
        <polygon points="575,50 612.47,65.53 628,103 612.47,140.47 575,156 537.53,140.47 522,103 537.53,65.53" />

        {/* Inner hexagon: r=36, pointy-top */}
        {/* H0(575,67) H1(606.18,85) H2(606.18,121) H3(575,139) H4(543.82,121) H5(543.82,85) */}
        <polygon points="575,67 606.18,85 606.18,121 575,139 543.82,121 543.82,85" />

        {/* Star of David — triangle 1: H0 H2 H4 */}
        <polygon points="575,67 606.18,121 543.82,121" />
        {/* Star of David — triangle 2: H3 H1 H5 */}
        <polygon points="575,139 606.18,85 543.82,85" />

        {/* Center (575,103) to each hexagon vertex */}
        <line x1="575" y1="103" x2="575"    y2="67"  />
        <line x1="575" y1="103" x2="606.18" y2="85"  />
        <line x1="575" y1="103" x2="606.18" y2="121" />
        <line x1="575" y1="103" x2="575"    y2="139" />
        <line x1="575" y1="103" x2="543.82" y2="121" />
        <line x1="575" y1="103" x2="543.82" y2="85"  />

        {/* Octagon → hexagon bridge lines */}
        <line x1="575"    y1="50"     x2="575"    y2="67"  />
        <line x1="612.47" y1="65.53"  x2="606.18" y2="85"  />
        <line x1="628"    y1="103"    x2="606.18" y2="85"  />
        <line x1="628"    y1="103"    x2="606.18" y2="121" />
        <line x1="612.47" y1="140.47" x2="606.18" y2="121" />
        <line x1="575"    y1="156"    x2="575"    y2="139" />
        <line x1="537.53" y1="140.47" x2="543.82" y2="121" />
        <line x1="522"    y1="103"    x2="543.82" y2="121" />
        <line x1="522"    y1="103"    x2="543.82" y2="85"  />
        <line x1="537.53" y1="65.53"  x2="543.82" y2="85"  />
      </g>

      {/* Subtle outer ring accent */}
      <circle cx="575" cy="103" r="66" fill="none" stroke="#D5F77C" strokeWidth="0.7" opacity="0.22" />

      {/* Alignment label */}
      <text x="575" y="196" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#5F5D66" fontWeight="600">Alignment</text>
    </svg>
  )
}
