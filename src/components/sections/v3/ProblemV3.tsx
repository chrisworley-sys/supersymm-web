const stats = [
  {
    number: '12+',
    label: 'Marketing tools the average firm runs',
    source: 'chiefmartec martech landscape',
    ariaLabel: 'more than twelve',
  },
  {
    number: '<40%',
    label: 'Of martech features actually used',
    source: 'Gartner martech survey',
    ariaLabel: 'less than forty percent',
  },
  {
    number: '6 hrs',
    label: 'Weekly time spent managing tools, not reaching customers',
    source: 'Wrike work management report',
    ariaLabel: 'six hours',
  },
]

export default function ProblemV3() {
  return (
    <section className="bg-white" style={{ paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-neutral-400 mb-5">
          The state of professional services marketing.
        </p>

        {/* Pink accent line */}
        <div className="w-20 h-px bg-ss-pink-700 mb-6" />

        {/* H2 spans left ~2/3 */}
        <div className="max-w-[760px] mb-14">
          <h2 className="font-display font-black leading-[1.1] text-ss-neutral-700" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            This isn't your problem alone.<br />
            It's how marketing got built.
          </h2>
        </div>

        {/* Asymmetric layout: 50% copy | 17% gap | 33% stats */}
        <div className="grid grid-cols-1 md:grid-cols-[50%_17%_33%]">

          {/* Body copy */}
          <div className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500 space-y-5">
            <p>
              The average professional services firm runs marketing across more than
              a dozen disconnected tools. Less than 40% of the features in those tools
              get used. Teams spend more time managing platforms than reaching customers.
              And in regulated industries, every tool you add multiplies your compliance
              surface area.
            </p>
            <p>
              Marketing didn't become harder because the work got harder.
              It became harder because the systems stopped talking to each other.
            </p>
          </div>

          {/* Negative space */}
          <div className="hidden md:block" />

          {/* Stat block */}
          <div className="mt-10 md:mt-0 space-y-8">
            {stats.map(({ number, label, source, ariaLabel }) => (
              <div key={number}>
                <p
                  className="font-display font-black leading-none text-ss-purple-500 mb-1"
                  style={{ fontSize: 'clamp(48px, 5vw, 64px)' }}
                  aria-label={ariaLabel}
                >
                  {number}
                </p>
                <p className="font-sans text-[14px] leading-[1.5] text-ss-neutral-600">
                  {label}
                </p>
                <p className="font-sans text-[12px] text-ss-neutral-400 italic mt-0.5">
                  Source: {source}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
