import { Link } from 'react-router-dom'
import PageWrapper from '@/components/common/PageWrapper'
import Breadcrumb from '@/components/common/Breadcrumb'

export default function CompliancePage() {
  return (
    <PageWrapper>
      <section className="ss-dark ss-section" style={{ paddingTop: '7rem' }}>
        <div className="ss-container">
          <Breadcrumb
            items={[
              { label: 'Platform', href: '/platform' },
              { label: 'Compliance Hub', href: '/platform/compliance' },
            ]}
          />
          <h1 className="font-display font-black text-h2 text-white mb-6 max-w-3xl">
            Compliance Hub
          </h1>
          <p className="font-sans text-body-lg text-white/70 max-w-2xl mb-10">
            Built-in compliance for SEC/FINRA, HIPAA, and State Bar requirements. Every post,
            email, and ad—archived, approved, and audit-ready.
          </p>
          <p className="font-sans text-body-md text-ss-accent-100 font-medium mb-8">
            Full content coming soon.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/platform/marketing-automation" className="ss-btn-accent">
              See Marketing Automation
            </Link>
            <Link to="/platform" className="ss-btn-ghost-dark">
              Back to Platform Overview
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
