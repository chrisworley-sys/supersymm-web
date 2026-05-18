import { Link } from 'react-router-dom'
import PageWrapper from '@/components/common/PageWrapper'

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <section className="ss-dark min-h-screen flex items-center justify-center" style={{ paddingTop: '80px' }}>
        <div className="ss-container text-center">
          <p className="text-ss-accent-100 font-sans text-body-sm font-semibold tracking-widest uppercase mb-4">
            404
          </p>
          <h1 className="font-display font-black text-h2 text-white mb-4">
            Page not found
          </h1>
          <p className="text-white/60 font-sans text-body-lg mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="ss-btn-accent">
            Back to Home
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
