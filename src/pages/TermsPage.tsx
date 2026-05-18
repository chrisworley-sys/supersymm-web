import PageWrapper from '@/components/common/PageWrapper'

export default function TermsPage() {
  return (
    <PageWrapper>
      <section className="ss-light min-h-screen" style={{ paddingTop: '80px' }}>
        <div className="ss-container py-16 max-w-3xl">
          <h1 className="font-display font-black text-h3 text-ss-neutral-700 mb-6">Terms of Service</h1>
          <p className="font-sans text-body-md text-ss-neutral-500">
            {/* TODO: Terms of service content — placeholder */}
            This terms of service is a placeholder. Full terms coming soon.
          </p>
        </div>
      </section>
    </PageWrapper>
  )
}
