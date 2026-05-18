export default function MultiLocationIcon() {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      role="img"
      aria-label="Multi-location — map pin with multiple markers"
    >
      {/* Primary map pin */}
      <path
        d="M30 8 C24 8 19 13 19 19 C19 27 30 40 30 40 C30 40 41 27 41 19 C41 13 36 8 30 8 Z"
        stroke="#22193B"
        strokeWidth="1.5"
        fill="rgba(34,25,59,0.06)"
      />
      <circle cx="30" cy="19" r="4" stroke="#22193B" strokeWidth="1.5" fill="none" />

      {/* Secondary pin — left */}
      <path
        d="M13 22 C10 22 8 24.5 8 27 C8 31 13 38 13 38 C13 38 18 31 18 27 C18 24.5 16 22 13 22 Z"
        stroke="#D5F77C"
        strokeWidth="1.5"
        fill="rgba(213,247,124,0.20)"
      />
      <circle cx="13" cy="27" r="2.5" stroke="#8DA450" strokeWidth="1.5" fill="none" />

      {/* Secondary pin — right */}
      <path
        d="M47 22 C44 22 42 24.5 42 27 C42 31 47 38 47 38 C47 38 52 31 52 27 C52 24.5 50 22 47 22 Z"
        stroke="#D5F77C"
        strokeWidth="1.5"
        fill="rgba(213,247,124,0.20)"
      />
      <circle cx="47" cy="27" r="2.5" stroke="#8DA450" strokeWidth="1.5" fill="none" />

      {/* Ground baseline */}
      <line x1="8" y1="50" x2="52" y2="50" stroke="#22193B" strokeWidth="1.5" opacity="0.25" />
    </svg>
  )
}
