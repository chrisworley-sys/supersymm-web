import { Link } from 'react-router-dom'

function OctagonBg() {
  const cx = 300
  const cy = 300
  const sides = 8

  function octagonPoints(r: number) {
    return Array.from({ length: sides }, (_, i) => {
      const angle = (i * Math.PI * 2) / sides - Math.PI / 2
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
    }).join(' ')
  }

  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        width: '600px',
        height: '600px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.08,
      }}
    >
      <polygon points={octagonPoints(240)} fill="none" stroke="#E977C1" strokeWidth="1.5" />
      <polygon points={octagonPoints(160)} fill="none" stroke="#E977C1" strokeWidth="1" />
      <polygon points={octagonPoints(80)} fill="none" stroke="#E977C1" strokeWidth="0.75" />
    </svg>
  )
}

export default function FinalInvitationV3() {
  return (
    <section
      className="bg-ss-purple-700 relative overflow-hidden"
      style={{ paddingBlock: 'clamp(120px, 16vw, 220px)' }}
    >
      <OctagonBg />

      <div className="mx-auto w-full max-w-[1200px] px-6 relative">
        <div className="max-w-[720px] mx-auto text-center">

          <h2 className="font-display font-black leading-[1.1] text-white mb-6" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            You didn't start your firm
            to manage marketing tools.
          </h2>

          <p
            className="font-sans text-[18px] leading-[1.7] mb-10"
            style={{ color: 'rgba(255,255,255,0.88)' }}
          >
            You started it to do the work that matters — for clients, for cases,
            for outcomes that take real expertise. Marketing should support that work,
            not compete with it for your time and attention.
            <br /><br />
            Let's build the system that runs alongside you, so the work that matters
            gets the time it deserves.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-ss-accent-100 text-ss-purple-700 font-sans font-medium text-base px-8 rounded-full hover:bg-ss-accent-200 transition-colors"
              style={{ height: '56px' }}
            >
              Start a conversation →
            </Link>
            <Link
              to="/platform"
              className="inline-flex items-center gap-1.5 font-sans font-medium text-base transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              See the system in action
            </Link>
          </div>

          <p
            className="font-sans text-[14px] italic mb-3"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Engagement pricing is custom to your firm and goals.
            We'll quote you a number after one call.
          </p>

          <p
            className="font-sans text-[13px]"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Month-to-month after onboarding · Quarterly strategy reviews ·
            Compliance archiving included · Real humans, real accountability
          </p>

        </div>
      </div>
    </section>
  )
}
