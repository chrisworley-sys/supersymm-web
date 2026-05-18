export default function FirmIcon() {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      role="img"
      aria-label="Mid-size firm — three figures connected"
    >
      {/* Center figure head */}
      <circle cx="30" cy="14" r="5.5" stroke="#22193B" strokeWidth="1.5" fill="none" />
      {/* Center figure body */}
      <path d="M22 32 C22 25 26 22 30 22 C34 22 38 25 38 32" stroke="#22193B" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Left figure head */}
      <circle cx="13" cy="20" r="4.5" stroke="#E977C1" strokeWidth="1.5" fill="none" />
      {/* Left figure body */}
      <path d="M7 36 C7 30 10 27 13 27 C16 27 19 30 19 36" stroke="#E977C1" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Right figure head */}
      <circle cx="47" cy="20" r="4.5" stroke="#E977C1" strokeWidth="1.5" fill="none" />
      {/* Right figure body */}
      <path d="M41 36 C41 30 44 27 47 27 C50 27 53 30 53 36" stroke="#E977C1" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Connecting lines between figures */}
      <line x1="19" y1="29" x2="22" y2="27" stroke="#22193B" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="38" y1="27" x2="41" y2="29" stroke="#22193B" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Bottom connecting line */}
      <line x1="13" y1="42" x2="47" y2="42" stroke="#22193B" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="13" cy="42" r="2" fill="#22193B" />
      <circle cx="30" cy="42" r="2" fill="#6750A4" />
      <circle cx="47" cy="42" r="2" fill="#22193B" />
    </svg>
  )
}
