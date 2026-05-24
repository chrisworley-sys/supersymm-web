import PageWrapper from '@/components/common/PageWrapper'
import { Link } from 'react-router-dom'

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-28">
      <h2 className="font-display font-black text-2xl text-ss-neutral-700 mb-4 pb-3 border-b border-ss-neutral-200">
        {title}
      </h2>
      <div className="space-y-4 font-sans text-body-md text-ss-neutral-600 leading-relaxed">
        {children}
      </div>
    </section>
  )
}

const toc = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use Information' },
  { id: 'how-we-share', label: 'How We Share Information' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'your-rights', label: 'Your Privacy Rights' },
  { id: 'cookies', label: 'Cookies & Tracking' },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'contact', label: 'Contact Us' },
]

export default function PrivacyPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="bg-ss-purple-700" style={{ paddingTop: '5rem' }}>
        <div className="ss-container py-16 max-w-5xl">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 mb-6">
            <span className="font-sans text-body-xs text-white/70">Effective Date: May 22, 2026</span>
          </div>
          <h1 className="font-display font-black text-h2 text-white mb-4">Privacy Policy</h1>
          <p className="font-sans text-body-lg text-white/70 max-w-2xl">
            SuperSymm is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our platform or visit our website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="ss-container max-w-5xl">
          <div className="flex gap-16">
            {/* Table of contents — sidebar */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-28">
                <p className="font-sans text-body-xs font-semibold uppercase tracking-widest text-ss-neutral-400 mb-4">
                  On this page
                </p>
                <nav className="space-y-1">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block font-sans text-body-sm text-ss-neutral-500 hover:text-ss-purple-500 transition-colors py-1"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Body */}
            <div className="min-w-0 flex-1">
              <p className="font-sans text-body-md text-ss-neutral-600 leading-relaxed mb-12">
                This Privacy Policy applies to SuperSymm, Inc. ("SuperSymm," "we," "us," or "our") and covers information collected through our website at supersymm.com, our software-as-a-service platform, and any related services (collectively, the "Services"). By using our Services, you agree to the collection and use of information in accordance with this policy.
              </p>

              <Section id="information-we-collect" title="Information We Collect">
                <p><strong className="text-ss-neutral-700">Information you provide directly:</strong> When you register for an account, request a demo, or contact us, we collect information such as your name, email address, company name, job title, phone number, and any other details you choose to share.</p>
                <p><strong className="text-ss-neutral-700">Information collected automatically:</strong> When you use our Services, we automatically collect certain technical information including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits.</p>
                <p><strong className="text-ss-neutral-700">Information from your use of the platform:</strong> If you are a subscriber, we collect data related to your use of the SuperSymm platform, including marketing campaign data, lead information, and performance metrics that you input or that are generated through the platform.</p>
                <p><strong className="text-ss-neutral-700">Information from third parties:</strong> We may receive information about you from third-party services you connect to the SuperSymm platform (such as CRM systems, email providers, or social media platforms) as part of our integration features.</p>
              </Section>

              <Section id="how-we-use" title="How We Use Information">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and improve our Services</li>
                  <li>Process transactions and send related information, including purchase confirmations and invoices</li>
                  <li>Send administrative messages, technical notices, and support communications</li>
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Send marketing communications (where you have opted in or where permitted by law)</li>
                  <li>Monitor and analyze usage patterns and trends to improve user experience</li>
                  <li>Detect, investigate, and prevent fraudulent or unauthorized activity</li>
                  <li>Comply with legal obligations, including applicable financial services regulations</li>
                  <li>Enforce our Terms of Service and other agreements</li>
                </ul>
              </Section>

              <Section id="how-we-share" title="How We Share Information">
                <p>We do not sell your personal information. We may share information in the following circumstances:</p>
                <p><strong className="text-ss-neutral-700">Service providers:</strong> We share information with third-party vendors and service providers that perform services on our behalf, such as cloud hosting, payment processing, analytics, and customer support. These providers are contractually bound to use your information only as directed by us.</p>
                <p><strong className="text-ss-neutral-700">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or prominent notice on our website before your information becomes subject to a different privacy policy.</p>
                <p><strong className="text-ss-neutral-700">Legal requirements:</strong> We may disclose your information if required to do so by law or in response to a valid subpoena, court order, or government request. This may include disclosures to regulatory bodies such as the SEC or FINRA where applicable.</p>
                <p><strong className="text-ss-neutral-700">Protection of rights:</strong> We may disclose information when we believe disclosure is necessary to protect the rights, property, or safety of SuperSymm, our users, or the public.</p>
                <p><strong className="text-ss-neutral-700">With your consent:</strong> We may share information with third parties when you give us explicit consent to do so.</p>
              </Section>

              <Section id="data-security" title="Data Security">
                <p>We implement and maintain industry-standard technical, administrative, and physical security measures designed to protect your information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption of data in transit and at rest, access controls, regular security assessments, and employee training.</p>
                <p>However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
                <p>If you have reason to believe that your interaction with us is no longer secure, please contact us immediately using the information provided in the "Contact Us" section below.</p>
              </Section>

              <Section id="data-retention" title="Data Retention">
                <p>We retain your personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. The criteria we use to determine retention periods include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The duration of your account or subscription with us</li>
                  <li>Our legal obligations (for example, certain financial records must be retained for periods specified by applicable law)</li>
                  <li>Whether there is an ongoing legal claim or investigation that requires us to preserve information</li>
                  <li>Our legitimate business interests, such as fraud prevention and improving our Services</li>
                </ul>
                <p>When we no longer need to retain your information, we will securely delete or anonymize it in accordance with our data retention policies.</p>
              </Section>

              <Section id="your-rights" title="Your Privacy Rights">
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <p><strong className="text-ss-neutral-700">Access and portability:</strong> You may request a copy of the personal information we hold about you in a commonly used, machine-readable format.</p>
                <p><strong className="text-ss-neutral-700">Correction:</strong> You may request that we correct inaccurate or incomplete personal information we hold about you.</p>
                <p><strong className="text-ss-neutral-700">Deletion:</strong> You may request that we delete your personal information, subject to certain exceptions required by law or legitimate business purposes.</p>
                <p><strong className="text-ss-neutral-700">Opt-out of marketing:</strong> You may opt out of receiving marketing communications from us at any time by following the unsubscribe link in any email we send or by contacting us directly.</p>
                <p><strong className="text-ss-neutral-700">California residents:</strong> If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we have collected and to request that we not sell your personal information (we do not sell personal information).</p>
                <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@supersymm.com" className="text-ss-purple-500 hover:underline">privacy@supersymm.com</a>. We will respond to your request within the timeframe required by applicable law.</p>
              </Section>

              <Section id="cookies" title="Cookies &amp; Tracking">
                <p>We use cookies and similar tracking technologies to collect information about your use of our Services. Cookies are small data files stored on your browser or device.</p>
                <p><strong className="text-ss-neutral-700">Essential cookies:</strong> Required for the operation of our Services. They enable core functionality such as user authentication and security.</p>
                <p><strong className="text-ss-neutral-700">Analytics cookies:</strong> Allow us to understand how visitors interact with our website, so we can improve the experience. We use Google Analytics for this purpose. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.</p>
                <p><strong className="text-ss-neutral-700">Marketing cookies:</strong> Used to track visitors across websites to enable us to display relevant advertisements. These are only set where you have given consent.</p>
                <p>You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and some features may not function correctly.</p>
              </Section>

              <Section id="changes" title="Changes to This Policy">
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make material changes, we will notify you by email (if we have your email address) and by posting a prominent notice on our website prior to the changes taking effect.</p>
                <p>The "Effective Date" at the top of this policy indicates when it was last updated. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
              </Section>

              <Section id="contact" title="Contact Us">
                <p>If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
                <div className="bg-ss-neutral-100 rounded-xl p-6 mt-4">
                  <p className="font-sans font-semibold text-ss-neutral-700 mb-1">SuperSymm, Inc.</p>
                  <p>Denton, Texas</p>
                  <p className="mt-2">
                    Email:{' '}
                    <a href="mailto:privacy@supersymm.com" className="text-ss-purple-500 hover:underline">
                      privacy@supersymm.com
                    </a>
                  </p>
                </div>
              </Section>

              <div className="pt-8 border-t border-ss-neutral-200 flex flex-wrap gap-4">
                <Link to="/terms" className="text-ss-purple-500 hover:underline font-sans text-body-sm">
                  Terms of Service →
                </Link>
                <Link to="/platform/compliance" className="text-ss-purple-500 hover:underline font-sans text-body-sm">
                  Compliance Hub →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
