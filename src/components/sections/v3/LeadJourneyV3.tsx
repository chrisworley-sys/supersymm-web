import { Link } from 'react-router-dom'

const stages = [
  {
    day: 'Day 1',
    title: 'The first touch',
    prospect: "Sarah, a CFO at a 30-person services firm, sees a SuperSymm-generated LinkedIn post in her feed. She clicks through to the article.",
    system: "Captures the visit. Tags Sarah as a new prospect. Adds 10 points to her score.",
  },
  {
    day: 'Day 3',
    title: 'The follow-through',
    prospect: "Sarah opens the follow-up email and clicks to a related blog article.",
    system: "Tracks the engagement. Adds 15 points. Moves Sarah from cold to warm. Adjusts the next email in her sequence based on what she clicked.",
  },
  {
    day: 'Day 7',
    title: 'The signal',
    prospect: "Sarah visits the pricing page. Downloads a case study.",
    system: 'Adds 30 points. Sarah crosses the 50-point threshold. Sales gets an instant alert: "Sarah, CFO, viewed pricing twice this week, downloaded the industry case study, fits ICP."',
  },
  {
    day: 'Day 8',
    title: 'The handoff',
    prospect: "Sales reaches out while Sarah is still actively researching. The conversation starts where her interest started — not with cold introductions.",
    system: "Logs the outreach in CRM. Pauses the automated sequence. Hands the relationship to a human.",
  },
]

export default function LeadJourneyV3() {
  return (
    <section
      className="bg-ss-purple-700"
      style={{ paddingBlock: 'clamp(120px, 14vw, 200px)' }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <div className="text-center mb-16">
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-accent-100 mb-4">
            How a lead actually moves through the system.
          </p>
          <h2 className="font-display font-black leading-[1.1] text-white mb-6 max-w-[760px] mx-auto" style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
            From cold visitor to qualified lead — without anything
            falling through the cracks.
          </h2>
          <p className="font-sans text-[18px] leading-[1.6] max-w-[640px] mx-auto" style={{ color: 'rgba(255,255,255,0.62)' }}>
            Most marketing platforms automate tasks. SuperSymm orchestrates
            relationships. Here's what one prospect's journey looks like
            from first touch to qualified hand-off.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          {/* Day labels */}
          <div className="grid grid-cols-4 mb-4">
            {stages.map(({ day }) => (
              <div key={day} className="text-center">
                <p className="font-display font-bold text-[13px] uppercase tracking-[0.08em] text-white/80">
                  {day}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline line + nodes */}
          <div className="relative h-4 mb-4">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-ss-pink-700 -translate-y-1/2" />
            <div className="grid grid-cols-4 h-full">
              {stages.map(({ day }) => (
                <div key={day} className="flex justify-center items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-ss-pink-700 ring-2 ring-ss-purple-700 relative z-10" />
                </div>
              ))}
            </div>
          </div>

          {/* Stage titles */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            {stages.map(({ day, title }) => (
              <div key={day} className="text-center">
                <p className="font-display font-bold text-[20px] text-white">
                  {title}
                </p>
              </div>
            ))}
          </div>

          {/* Prospect rows */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            {stages.map(({ day, prospect }) => (
              <div key={day}>
                <p className="font-sans text-[11px] uppercase tracking-[0.06em] font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.40)' }}>
                  Prospect
                </p>
                <p className="font-sans text-[15px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.82)' }}>
                  {prospect}
                </p>
              </div>
            ))}
          </div>

          {/* System rows */}
          <div className="grid grid-cols-4 gap-6">
            {stages.map(({ day, system }) => (
              <div
                key={day}
                className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <p className="font-sans text-[11px] uppercase tracking-[0.06em] font-medium text-ss-accent-100 mb-1.5">
                  System
                </p>
                <p className="font-sans text-[15px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {system}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-0">
          {stages.map(({ day, title, prospect, system }, index) => (
            <div key={day} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-ss-pink-700 shrink-0 mt-1.5" />
                {index < stages.length - 1 && (
                  <div className="w-px flex-1 my-2" style={{ background: 'rgba(255,255,255,0.10)' }} />
                )}
              </div>
              <div className="pb-10">
                <p className="font-display font-bold text-[12px] uppercase tracking-[0.08em] mb-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {day}
                </p>
                <p className="font-display font-bold text-[20px] text-white mb-4">
                  {title}
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.06em] font-medium mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      Prospect
                    </p>
                    <p className="font-sans text-[15px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.80)' }}>
                      {prospect}
                    </p>
                  </div>
                  <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <p className="font-sans text-[11px] uppercase tracking-[0.06em] font-medium text-ss-accent-100 mb-1">
                      System
                    </p>
                    <p className="font-sans text-[15px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.62)' }}>
                      {system}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing quote + CTA */}
        <div className="mt-16 text-center max-w-[700px] mx-auto">
          <p
            className="font-serif italic text-[20px] leading-[1.6] mb-10"
            style={{ color: 'rgba(255,255,255,0.80)' }}
          >
            "Without SuperSymm, Sarah is forgotten between Day 1 and Day 7.
            With SuperSymm, every signal is tracked. The timing is right.
            The conversation is real."
          </p>
          <Link
            to="/platform"
            className="inline-flex items-center gap-2 bg-ss-accent-100 text-ss-purple-700 font-sans font-medium text-base px-8 rounded-full hover:bg-ss-accent-200 transition-colors"
            style={{ height: '56px' }}
          >
            See the system in action →
          </Link>
        </div>

      </div>
    </section>
  )
}
