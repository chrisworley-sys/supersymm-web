export default function LogoLoopAnimation() {
  return (
    <div className="sll-circle">
      <div className="sll-bg-drift" />
      <div className="sll-bg-glint" />

      <div className="sll-mark">
        {/* Layer 1: ghost mark — dim, breathing */}
        <img
          className="sll-mark-base"
          src="/assets/supersym-mark-lime.svg"
          alt=""
          aria-hidden="true"
        />

        {/* Layer 2: stroke-traced skeleton (octagon + two crossed squares) */}
        <svg
          className="sll-mark-trace"
          viewBox="0 0 320 320"
          aria-hidden="true"
        >
          <path
            className="sll-p-octagon"
            d="M 93 0 L 225 0 L 318 93 L 318 225 L 225 318 L 93 318 L 0 225 L 0 93 Z"
          />
          <path
            className="sll-p-sq-a"
            d="M 93 0 L 318 93 L 225 318 L 0 225 Z"
          />
          <path
            className="sll-p-sq-b"
            d="M 225 0 L 318 225 L 93 318 L 0 93 Z"
          />
        </svg>

        {/* Layer 3: shimmer band, masked to the mark shape */}
        <div className="sll-mark-shimmer" />
      </div>
    </div>
  )
}
