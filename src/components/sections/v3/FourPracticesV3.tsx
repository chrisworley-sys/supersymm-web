import { Link } from 'react-router-dom'
import { Brain, Target, Zap, TrendingUp } from 'lucide-react'

const practices = [
  {
    number: 'Practice 1',
    Icon: Brain,
    title: 'Business Intelligence Engine',
    body: "The brain. SuperSymm learns your ICP, your differentiators, and your compliance posture — then runs every campaign through that lens. No generic templates. No configuration overhead.",
    link: '/platform',
    linkLabel: 'Learn more →',
  },
  {
    number: 'Practice 2',
    Icon: Target,
    title: 'Lead Generation',
    body: "Captures, scores, and routes prospects against your specific ICP in real time. Hot leads land in your inbox with full context — what they engaged with, when, and why they're ready.",
    link: '/platform/lead-generation',
    linkLabel: 'See how it works →',
  },
  {
    number: 'Practice 3',
    Icon: Zap,
    title: 'Marketing Automation',
    body: "One approval, content distributed across LinkedIn, email, ads, and your blog. Built-in compliance archiving, approval workflows, and audit trails for regulated industries.",
    link: '/platform/marketing-automation',
    linkLabel: 'Explore automation →',
  },
  {
    number: 'Practice 4',
    Icon: TrendingUp,
    title: 'Performance Optimization',
    body: "A/B tests run themselves. Budget shifts toward what's working. Performance data feeds back into the intelligence engine — so the system gets smarter every month.",
    link: '/platform',
    linkLabel: 'See optimization →',
  },
]

export default function FourPracticesV3() {
  return (
    <section className="bg-white" style={{ paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-neutral-400 mb-4">
              The platform.
            </p>
            <h2 className="font-display font-black leading-[1.1] text-ss-neutral-700" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}>
              One system.<br />
              Four practices.<br />
              Connected by your business intelligence.
            </h2>
          </div>

          {/* Right: 2×2 grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {practices.map(({ number, Icon, title, body, link, linkLabel }) => (
                <div
                  key={number}
                  className="bg-white rounded-2xl p-8 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200"
                  style={{ border: '1px solid rgba(31,30,33,0.08)' }}
                >
                  <div className="size-10 rounded-xl bg-ss-purple-100 flex items-center justify-center">
                    <Icon className="size-5 text-ss-purple-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-[12px] uppercase tracking-[0.08em] text-ss-neutral-400 font-medium mb-1">
                      {number}
                    </p>
                    <h3 className="font-display font-bold text-[20px] leading-[1.25] text-ss-neutral-700">
                      {title}
                    </h3>
                  </div>
                  <p className="font-sans text-[16px] leading-[1.6] text-ss-neutral-500 flex-1">
                    {body}
                  </p>
                  <Link
                    to={link}
                    className="font-sans text-sm font-medium text-ss-purple-500 hover:underline"
                  >
                    {linkLabel}
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="font-sans text-[18px] text-ss-neutral-700">
                Each practice makes the others smarter. That's the system.{' '}
                <Link to="/platform" className="text-ss-purple-500 hover:underline">
                  Explore the platform →
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
