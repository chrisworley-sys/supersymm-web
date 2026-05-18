import { Link } from 'react-router-dom'

function DashboardIllustration() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto select-none">
      {/* Back card */}
      <div
        className="absolute inset-x-6 rounded-2xl"
        style={{
          top: '12px',
          height: '210px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      />
      {/* Middle card */}
      <div
        className="absolute inset-x-3 rounded-2xl"
        style={{
          top: '6px',
          height: '216px',
          background: 'rgba(255,255,255,0.10)',
          border: '1px solid rgba(255,255,255,0.10)',
        }}
      />
      {/* Front card */}
      <div className="relative rounded-2xl bg-white shadow-2xl p-6">
        <div className="flex items-start gap-4 mb-5">
          <div className="flex-1 space-y-2.5">
            <div className="h-2.5 bg-ss-neutral-200 rounded-full w-3/4" />
            <div className="h-2.5 bg-ss-neutral-200 rounded-full w-full" />
            <div className="h-2.5 bg-ss-neutral-200 rounded-full w-5/6" />
          </div>
          <span
            className="shrink-0 inline-flex items-center font-sans font-bold text-[11px] uppercase tracking-wide text-ss-purple-700 px-3 py-1.5 rounded-full whitespace-nowrap"
            style={{ background: '#D5F77C' }}
          >
            ✓ Compliance reviewed
          </span>
        </div>
        <p className="font-sans text-[12px] text-ss-neutral-400 mb-5">
          Scheduled Tuesday 9:42 am
        </p>
        <div className="flex items-center gap-2">
          <button className="flex-1 bg-ss-purple-500 text-white font-sans text-sm font-medium py-2 rounded-lg">
            Approve
          </button>
          <button className="flex-1 font-sans text-sm font-medium py-2 rounded-lg text-ss-neutral-600" style={{ border: '1px solid rgba(31,30,33,0.12)' }}>
            Edit
          </button>
          <button className="flex-1 font-sans text-sm font-medium py-2 rounded-lg text-ss-neutral-400" style={{ border: '1px solid rgba(31,30,33,0.08)' }}>
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default function HeroV3() {
  return (
    <section
      className="bg-ss-purple-700 relative overflow-hidden"
      style={{ paddingBlock: 'clamp(120px, 14vw, 200px)' }}
    >
      {/* Radial glow upper-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(103,80,164,0.35) 0%, transparent 68%)',
        }}
      />

      <div className="mx-auto w-full max-w-[1200px] px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-accent-100 mb-6">
              Marketing operations, engineered.
            </p>

            <h1 className="font-display font-black leading-[1.05] text-white mb-6" style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}>
              An intelligent marketing system<br />
              that learns your business and runs it.
            </h1>

            <p className="font-sans text-[18px] leading-[1.6] mb-10 max-w-[520px]" style={{ color: 'rgba(255,255,255,0.72)' }}>
              SuperSymm connects strategy, execution, and growth into one engine —
              built for regulated industries and run alongside our team.
              You're not buying software. You're building a marketing function.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-ss-accent-100 text-ss-purple-700 font-sans font-medium text-base px-7 rounded-full hover:bg-ss-accent-200 transition-colors"
                style={{ height: '56px' }}
              >
                Get custom pricing →
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center gap-1.5 font-sans font-medium text-base transition-colors"
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                See how it works
              </Link>
            </div>

            <p className="font-sans text-[14px]" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Built for financial advisors, healthcare providers, legal professionals,
              and the firms that hold them to a higher standard.
            </p>
          </div>

          {/* Right: dashboard illustration */}
          <div className="hidden md:block">
            <DashboardIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
