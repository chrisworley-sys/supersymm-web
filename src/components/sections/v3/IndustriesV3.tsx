import { Link } from 'react-router-dom'

const industries = [
  {
    name: 'Financial Advisors',
    badge: 'SEC / FINRA',
    body: "Generate qualified leads while meeting SEC Rule 206(4)-1 requirements. Built-in 5-year archiving, approval workflows, and audit trails.",
    link: '/solutions/financial-advisors',
    linkLabel: 'Learn more →',
  },
  {
    name: 'Healthcare & Legal',
    badge: 'HIPAA / Bar Compliant',
    body: "Patient and client acquisition with HIPAA-compliant communications, state bar advertising rules, and encrypted workflows where required.",
    link: '/solutions',
    linkLabel: 'Learn more →',
  },
  {
    name: 'Professional Services',
    badge: 'Multi-sector',
    body: "Tax, accounting, consulting, and B2B services. Same intelligent system, adapted to your sector's standards and your firm's compliance posture.",
    link: '/solutions',
    linkLabel: 'Learn more →',
  },
]

export default function IndustriesV3() {
  return (
    <section className="bg-ss-purple-100" style={{ paddingBlock: 'clamp(80px, 10vw, 160px)' }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <div className="text-center mb-12">
          <p className="font-sans text-[13px] uppercase tracking-[0.08em] font-medium text-ss-neutral-400 mb-4">
            Built for the firms that hold themselves to a higher standard.
          </p>
          <h2 className="font-display font-black leading-[1.1] text-ss-neutral-700 mb-6" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Industries we serve.
          </h2>
          <p className="font-sans text-[18px] leading-[1.6] text-ss-neutral-500 max-w-[680px] mx-auto">
            SuperSymm is built for professional services firms where marketing matters
            but compliance is non-negotiable. We started with the most regulated industries.
            Now we serve any firm that wants the same discipline applied to their growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map(({ name, badge, body, link, linkLabel }) => (
            <div
              key={name}
              className="bg-white rounded-3xl p-8 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-200"
              style={{ border: '1px solid rgba(31,30,33,0.08)' }}
            >
              <div>
                <p className="font-display font-bold text-[18px] uppercase tracking-[0.04em] text-ss-neutral-700 mb-3">
                  {name}
                </p>
                <span
                  className="inline-flex items-center font-display font-bold text-[11px] uppercase text-ss-purple-500 px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(103,80,164,0.08)',
                    border: '1px solid rgba(103,80,164,0.24)',
                  }}
                >
                  {badge}
                </span>
              </div>

              <p className="font-sans text-[15px] leading-[1.5] text-ss-neutral-500 flex-1">
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

        <p className="text-center font-sans text-[18px] text-ss-neutral-600 mt-10">
          Same system. Different standards. Custom to your sector.
        </p>

      </div>
    </section>
  )
}
