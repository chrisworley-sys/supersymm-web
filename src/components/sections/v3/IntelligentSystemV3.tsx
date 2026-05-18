import { Brain, GitMerge, Users } from 'lucide-react'

const principles = [
  {
    Icon: Brain,
    label: 'Principle 1',
    headline: "One intelligence engine\npowers everything.",
    body: "SuperSymm starts with deep understanding of your business — your buyers, your differentiators, your market position, your compliance posture. That intelligence runs through every piece of content, every campaign, every channel. Generic platforms ask you to configure settings. We learn your business and act on what we learn.",
  },
  {
    Icon: GitMerge,
    label: 'Principle 2',
    headline: "Every component informs\nthe others.",
    body: "SEO insights inform paid strategy. Paid performance reshapes content. Email engagement adjusts lead scoring. Sales conversations surface objections the next campaign answers. This isn't workflow automation — it's connected intelligence that gets smarter with every campaign.",
  },
  {
    Icon: Users,
    label: 'Principle 3',
    headline: "A team behind\nthe system.",
    body: "Software runs the work. Strategists run the thinking. You meet with our team to set direction, review what's working, and adjust based on what we're learning in your market. The system handles execution between meetings. It's not DIY with extra steps. It's a marketing function you don't have to staff.",
  },
]

export default function IntelligentSystemV3() {
  return (
    <section className="bg-ss-purple-100" style={{ paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <div className="mx-auto max-w-[880px] text-center mb-14">
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-purple-500 mb-4">
            How it works.
          </p>
          <h2 className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-6" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            An intelligent system that unifies<br />
            strategy, execution, and growth.
          </h2>
          <p className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500 max-w-[720px] mx-auto">
            SuperSymm isn't another marketing platform. It's a connected engine
            where business intelligence informs strategy, strategy informs execution,
            and execution feeds back into intelligence. One brain. Every campaign.
            Continuous improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map(({ Icon, label, headline, body }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-8 flex flex-col gap-5"
              style={{ border: '1px solid rgba(31,30,33,0.08)' }}
            >
              <div className="size-10 rounded-xl bg-ss-purple-100 flex items-center justify-center">
                <Icon className="size-5 text-ss-purple-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-purple-500 mb-2">
                  {label}
                </p>
                <h3 className="font-display font-bold text-[22px] leading-[1.25] text-ss-neutral-700">
                  {headline.split('\n').map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </h3>
              </div>
              <p className="font-sans text-[16px] leading-[1.6] text-ss-neutral-600 flex-1">
                {body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
