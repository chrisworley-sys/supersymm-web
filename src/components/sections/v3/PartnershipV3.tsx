const notCards = [
  {
    label: "Not DIY.",
    line1: "You don't write the prompts.",
    line2: "We do.",
  },
  {
    label: "Not an agency.",
    line1: "Same-day turnarounds.",
    line2: "No retainer hostage situation.",
  },
  {
    label: "Not just software.",
    line1: "Real strategists. Real reviews.",
    line2: "Real accountability.",
  },
]

export default function PartnershipV3() {
  return (
    <section className="bg-white" style={{ paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">

          {/* Left: copy */}
          <div>
            <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-neutral-400 mb-4">
              This isn't software you log into.
            </p>
            <div
              className="w-16 h-px mb-5"
              style={{ background: 'linear-gradient(90deg, #6750A4, #E977C1)' }}
            />
            <h2 className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-8" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
              It's a partnership you run alongside.
            </h2>

            <div className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500 space-y-5">
              <p>
                Most marketing platforms drop a dashboard in your lap and call it done.
                SuperSymm doesn't.
              </p>
              <p>
                You meet with our strategists every quarter to set direction.
                We review what's converting and what's not. We adjust the system
                based on what we're learning in your market and across our portfolio.
              </p>
              <p>
                Between meetings, the platform handles the day-to-day execution —
                content creation, scheduling, lead routing, optimization,
                compliance archiving — and our team is on call when you need
                a real human.
              </p>
              <p>
                You get the leverage of automation, the judgment of a senior marketer,
                and the discipline of a system that learns. Without hiring any of it.
              </p>
            </div>
          </div>

          {/* Right: what this isn't cards */}
          <div className="flex flex-col gap-4">
            {notCards.map(({ label, line1, line2 }) => (
              <div
                key={label}
                className="bg-ss-purple-100 rounded-xl p-6"
              >
                <p className="font-display font-bold text-[13px] uppercase tracking-[0.08em] text-ss-pink-700 mb-2">
                  {label}
                </p>
                <p className="font-sans text-[16px] leading-[1.5] text-ss-neutral-700">
                  {line1}<br />{line2}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
