import { Link } from 'react-router-dom'

export default function ProofV3() {
  return (
    <section className="bg-white" style={{ paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">

          {/* Left: headline + intro */}
          <div>
            <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-neutral-400 mb-4">
              What this looks like in the field.
            </p>
            <h2 className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-6" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
              Real campaigns.<br />
              Real results.
            </h2>
            <p className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500">
              We built SuperSymm because we run it ourselves.
              Here's what early engagements have produced.
            </p>
          </div>

          {/* Right: placeholder */}
          <div
            className="rounded-2xl p-10 text-center"
            style={{ border: '1px solid rgba(31,30,33,0.08)' }}
          >
            {/* Upward trend SVG */}
            <svg
              className="w-full max-w-[260px] mx-auto mb-8"
              viewBox="0 0 260 110"
              fill="none"
              aria-hidden="true"
            >
              <polyline
                points="10,95 55,75 100,55 150,32 200,18 250,6"
                stroke="#6750A4"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="250" cy="6" r="4" fill="#6750A4" />
              <circle cx="10" cy="95" r="3" fill="#6750A4" opacity="0.3" />
              <line x1="10" y1="100" x2="250" y2="100" stroke="#CECED1" strokeWidth="1" />
            </svg>

            <h3 className="font-display font-bold text-[22px] text-ss-neutral-700 mb-3">
              Case studies coming Q3 2026
            </h3>
            <p className="font-sans text-[16px] leading-[1.6] text-ss-neutral-500 mb-8 max-w-[380px] mx-auto">
              We're publishing our first detailed case studies in Q3.
              Want to see live engagement metrics during a strategy call?
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-ss-purple-500 text-white font-sans font-medium text-base px-7 py-3 rounded-full hover:bg-ss-purple-600 transition-colors"
            >
              Book a 15-minute walkthrough →
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
