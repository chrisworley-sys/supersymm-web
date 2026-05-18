export default function B2BIcon() {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      role="img"
      aria-label="B2B services — two intersecting buildings"
    >
      {/* Left building */}
      <rect x="6" y="20" width="22" height="30" stroke="#22193B" strokeWidth="1.5" fill="rgba(34,25,59,0.06)" rx="2" />
      {/* Left building roof */}
      <polygon points="6,20 17,10 28,20" stroke="#22193B" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Left building windows */}
      <rect x="10" y="26" width="5" height="5" stroke="#22193B" strokeWidth="1.2" fill="none" rx="0.5" />
      <rect x="19" y="26" width="5" height="5" stroke="#22193B" strokeWidth="1.2" fill="none" rx="0.5" />
      <rect x="10" y="36" width="5" height="5" stroke="#22193B" strokeWidth="1.2" fill="none" rx="0.5" />

      {/* Right building — offset, overlapping */}
      <rect x="32" y="24" width="22" height="26" stroke="#66CEB6" strokeWidth="1.5" fill="rgba(102,206,182,0.10)" rx="2" />
      {/* Right building roof */}
      <polygon points="32,24 43,14 54,24" stroke="#66CEB6" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Right building windows */}
      <rect x="36" y="30" width="5" height="5" stroke="#66CEB6" strokeWidth="1.2" fill="none" rx="0.5" />
      <rect x="45" y="30" width="5" height="5" stroke="#66CEB6" strokeWidth="1.2" fill="none" rx="0.5" />
      <rect x="45" y="40" width="5" height="5" stroke="#66CEB6" strokeWidth="1.2" fill="none" rx="0.5" />

      {/* Connection arrow between buildings */}
      <line x1="28" y1="36" x2="32" y2="36" stroke="#22193B" strokeWidth="1.5" />
      <polygon points="31,34 34,36 31,38" fill="#22193B" />
    </svg>
  )
}
