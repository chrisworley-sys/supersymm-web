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
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'description', label: 'Description of Service' },
  { id: 'account', label: 'Account Registration' },
  { id: 'acceptable-use', label: 'Acceptable Use' },
  { id: 'subscription', label: 'Subscription & Payment' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'disclaimers', label: 'Disclaimers & Limitations' },
  { id: 'indemnification', label: 'Indemnification' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'changes', label: 'Changes to Terms' },
  { id: 'contact', label: 'Contact Us' },
]

export default function TermsPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="bg-ss-purple-700" style={{ paddingTop: '5rem' }}>
        <div className="ss-container py-16 max-w-5xl">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 mb-6">
            <span className="font-sans text-body-xs text-white/70">Effective Date: May 22, 2026</span>
          </div>
          <h1 className="font-display font-black text-h2 text-white mb-4">Terms of Service</h1>
          <p className="font-sans text-body-lg text-white/70 max-w-2xl">
            Please read these Terms of Service carefully before using SuperSymm. By accessing or using our platform, you agree to be bound by these terms.
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
                These Terms of Service ("Terms") govern your access to and use of the services provided by SuperSymm, Inc. ("SuperSymm," "we," "us," or "our"), including our website at supersymm.com and our software-as-a-service marketing automation platform (collectively, the "Services"). These Terms constitute a binding legal agreement between you and SuperSymm.
              </p>

              <Section id="acceptance" title="Acceptance of Terms">
                <p>By accessing or using our Services, you represent that you are at least 18 years of age, have the authority to enter into these Terms on behalf of yourself or your organization, and agree to be bound by these Terms and our Privacy Policy.</p>
                <p>If you are using the Services on behalf of a company, organization, or other legal entity ("Organization"), you represent and warrant that you have the authority to bind that Organization to these Terms. In that case, "you" and "your" will refer to both you and the Organization.</p>
                <p>If you do not agree to these Terms, you may not access or use our Services.</p>
              </Section>

              <Section id="description" title="Description of Service">
                <p>SuperSymm provides an AI-powered marketing automation platform designed specifically for Registered Investment Advisors (RIAs) and other professional service firms. The Services include, but are not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Business intelligence and market research tools</li>
                  <li>Lead generation and prospect management</li>
                  <li>Multi-channel marketing campaign automation</li>
                  <li>Compliance-aware content creation and review workflows</li>
                  <li>Performance analytics and optimization tools</li>
                </ul>
                <p>We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time with reasonable notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Services.</p>
              </Section>

              <Section id="account" title="Account Registration &amp; Security">
                <p>To access certain features of the Services, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.</p>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
                <p>You may not share your account credentials with others or allow multiple users to access the Services using a single set of credentials, unless expressly permitted by your subscription plan.</p>
                <p>SuperSymm reserves the right to suspend or terminate your account if any information provided during registration or thereafter is inaccurate, incomplete, or in violation of these Terms.</p>
              </Section>

              <Section id="acceptable-use" title="Acceptable Use Policy">
                <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable federal, state, or local law or regulation, including SEC Rules 206(4)-1 and 206(4)-7, FINRA Rule 2210, or any other applicable financial services regulations</li>
                  <li>Send unsolicited commercial messages (spam) or engage in any form of unauthorized marketing</li>
                  <li>Transmit or upload any content that is false, misleading, or constitutes investment advice without proper licensure</li>
                  <li>Infringe the intellectual property, privacy, or other rights of any third party</li>
                  <li>Attempt to gain unauthorized access to any systems or networks connected to the Services</li>
                  <li>Introduce any malware, viruses, or other harmful code into the Services</li>
                  <li>Reverse engineer, decompile, or disassemble any software component of the Services</li>
                  <li>Use the Services in any manner that could damage, disable, or impair our infrastructure</li>
                </ul>
                <p>You acknowledge that you are solely responsible for ensuring your use of the Services complies with all applicable regulatory requirements governing your industry, including any applicable advertising review and recordkeeping requirements.</p>
              </Section>

              <Section id="subscription" title="Subscription &amp; Payment">
                <p>Access to the SuperSymm platform requires a paid subscription. Subscription fees are billed in advance on a monthly or annual basis, as selected at sign-up. All fees are non-refundable except as expressly set forth in these Terms or required by applicable law.</p>
                <p>We reserve the right to change our subscription fees at any time. We will provide you with at least 30 days' notice of any price change. Your continued use of the Services after the price change takes effect constitutes your acceptance of the new pricing.</p>
                <p>If you fail to pay any fees when due, we may suspend or terminate your access to the Services. You are responsible for all taxes, levies, or duties imposed by taxing authorities applicable to your subscription.</p>
                <p>You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period, and you will retain access to the Services through that date.</p>
              </Section>

              <Section id="intellectual-property" title="Intellectual Property">
                <p><strong className="text-ss-neutral-700">SuperSymm's IP:</strong> The Services, including all software, algorithms, content, features, and functionality, are and will remain the exclusive property of SuperSymm and its licensors. Our name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of SuperSymm. You may not use such marks without our prior written permission.</p>
                <p><strong className="text-ss-neutral-700">Your content:</strong> You retain all ownership rights to the data, content, and materials you upload to or create using the Services ("Your Content"). By using the Services, you grant SuperSymm a limited, non-exclusive, royalty-free license to use, process, and store Your Content solely to the extent necessary to provide the Services to you.</p>
                <p><strong className="text-ss-neutral-700">Feedback:</strong> If you provide any feedback, suggestions, or ideas about the Services, you grant SuperSymm a perpetual, irrevocable, royalty-free license to use and incorporate such feedback into our products and services without any obligation to you.</p>
              </Section>

              <Section id="confidentiality" title="Confidentiality">
                <p>Each party agrees to keep confidential any non-public information of the other party that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information ("Confidential Information").</p>
                <p>Each party agrees to: (a) protect the other party's Confidential Information using the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care; (b) use the Confidential Information only as necessary to perform obligations or exercise rights under these Terms; and (c) not disclose the Confidential Information to any third party without the other party's prior written consent.</p>
                <p>These confidentiality obligations do not apply to information that: (i) is or becomes publicly known through no breach of these Terms; (ii) was already known to the receiving party without restriction; (iii) is independently developed by the receiving party without reference to the Confidential Information; or (iv) is required to be disclosed by law or court order.</p>
              </Section>

              <Section id="disclaimers" title="Disclaimers &amp; Limitation of Liability">
                <p><strong className="text-ss-neutral-700">Disclaimer of warranties:</strong> THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. SUPERSYMM DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
                <p><strong className="text-ss-neutral-700">No regulatory advice:</strong> The Services are marketing automation tools and do not constitute legal, compliance, investment, or regulatory advice. You are solely responsible for ensuring your marketing activities comply with all applicable laws and regulations. SuperSymm's compliance features are designed to assist your review processes but are not a substitute for qualified legal or compliance counsel.</p>
                <p><strong className="text-ss-neutral-700">Limitation of liability:</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SUPERSYMM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, EVEN IF SUPERSYMM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL SUPERSYMM'S TOTAL LIABILITY EXCEED THE AMOUNTS PAID BY YOU TO SUPERSYMM DURING THE TWELVE-MONTH PERIOD PRECEDING THE CLAIM.</p>
              </Section>

              <Section id="indemnification" title="Indemnification">
                <p>You agree to defend, indemnify, and hold harmless SuperSymm, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with: (a) your access to or use of the Services; (b) Your Content; (c) your violation of these Terms; or (d) your violation of any applicable law or the rights of any third party.</p>
              </Section>

              <Section id="governing-law" title="Governing Law &amp; Dispute Resolution">
                <p>These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Denton County, Texas, and you consent to the personal jurisdiction of such courts.</p>
                <p>Before initiating any formal legal proceeding, you agree to first attempt to resolve any dispute informally by contacting us at legal@supersymm.com. We will attempt to resolve the dispute within 30 days of receiving notice.</p>
              </Section>

              <Section id="changes" title="Changes to Terms">
                <p>We reserve the right to modify these Terms at any time. When we make material changes, we will notify you by email and/or by posting a prominent notice in the Services prior to the changes taking effect. The updated Terms will be effective as of the date indicated at the top of the policy.</p>
                <p>Your continued use of the Services after the effective date of the revised Terms constitutes your acceptance of the changes. If you do not agree to the new Terms, you must stop using the Services.</p>
              </Section>

              <Section id="contact" title="Contact Us">
                <p>If you have questions about these Terms, please contact us:</p>
                <div className="bg-ss-neutral-100 rounded-xl p-6 mt-4">
                  <p className="font-sans font-semibold text-ss-neutral-700 mb-1">SuperSymm, Inc.</p>
                  <p>Denton, Texas</p>
                  <p className="mt-2">
                    Email:{' '}
                    <a href="mailto:legal@supersymm.com" className="text-ss-purple-500 hover:underline">
                      legal@supersymm.com
                    </a>
                  </p>
                </div>
              </Section>

              <div className="pt-8 border-t border-ss-neutral-200 flex flex-wrap gap-4">
                <Link to="/privacy" className="text-ss-purple-500 hover:underline font-sans text-body-sm">
                  Privacy Policy →
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
