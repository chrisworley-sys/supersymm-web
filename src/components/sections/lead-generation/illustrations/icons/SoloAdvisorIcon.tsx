export default function SoloAdvisorIcon() {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      role="img"
      aria-label="Solo advisor with compliance shield"
    >
      {/* Figure head */}
      <circle cx="30" cy="16" r="7" stroke="#22193B" strokeWidth="1.5" fill="none" />
      {/* Figure body */}
      <path d="M18 42 C18 32 22 28 30 28 C38 28 42 32 42 42" stroke="#22193B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Compliance shield — bottom right */}
      <path d="M38 38 L38 48 C38 48 43 46 43 42 L43 38 Z" stroke="#6750A4" strokeWidth="1.5" fill="rgba(103,80,164,0.12)" strokeLinejoin="round" />
      {/* Shield check mark */}
      <path d="M39.5 42.5 L41 44 L44 41" stroke="#6750A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
