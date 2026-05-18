import type { VerticalConfig } from '@/types/vertical'

export const healthcareConfig: VerticalConfig = {
  seo: {
    title: 'HIPAA-Compliant Marketing for Healthcare Practices | SuperSymm',
    description:
      'Patient-acquisition marketing built for healthcare practices — HIPAA-aware, integrated with your systems, and designed to help the right patients find you.',
    primaryKeyword: 'Healthcare practice marketing',
    canonicalPath: '/solutions/healthcare',
    audienceType: 'Healthcare Practices',
  },

  hero: {
    breadcrumbVertical: 'Healthcare',
    eyebrow: 'Marketing for Healthcare Practices',
    h1Lines: ['You became a provider to provide care.', 'Not to market.'],
    h1AccentPhrase: 'Not to market.',
    heroImage: '/assets/illustrations/healthcare_hero.jpg',
    framingParagraph:
      'SuperSymm helps healthcare practices turn quality care into a steady patient pipeline. We build the digital framework and performance marketing that increases visibility, captures qualified patient demand, and grows your practice — with HIPAA-aware workflows built in.',
  },

  insight: {
    statement:
      'Practices grow on trust and outcomes. We build the system that helps the right patients find you.',
    accentPhrase: 'helps the right patients find you',
  },

  methodology: {
    eyebrow: 'How We Work With Practices',
    h2: 'Built around how practices actually grow.',
    h2AccentPhrase: 'actually grow',
    intro:
      'Three things shape every program we run for a healthcare practice. They\'re the three things that actually determine whether marketing works in a clinical setting.',
    blocks: [
      {
        number: '01',
        headline: 'HIPAA is the first question, not the last.',
        body: 'In healthcare, patient privacy isn\'t a preference — it\'s the law, and it shapes every communication. SuperSymm builds HIPAA-aware workflows into the system: compliant communication handling, consent tracking, and marketing that never puts protected health information at risk. Privacy is the default state, not a review step.',
      },
      {
        number: '02',
        headline: 'Patient acquisition is a trust journey, not a transaction.',
        body: 'People don\'t choose a provider on impulse. They research, they read reviews, they ask their network, and they decide slowly. We build presence and nurture that meets patients across that journey — so when they\'re ready to choose, your practice is the one they trust.',
      },
      {
        number: '03',
        headline: 'The right patients, not just more volume.',
        body: 'The goal isn\'t maximum inquiries — it\'s the right patients for the care you provide. We tune the system to attract patients who match your specialties, your location, and the conditions you\'re built to treat. Better fit means better outcomes and a healthier practice.',
      },
    ],
  },

  capabilities: {
    eyebrow: 'The Platform, For Practices',
    h2: 'Marketing built for practices.',
    h2AccentPhrase: 'built for practices',
    intro:
      'Five capabilities, working as one system — tuned to how practices grow and the privacy rules they operate under.',
    capabilities: [
      {
        benefitHeadline: 'Marketing that runs without taking you from patients',
        featureSubLabel: 'Smart Campaigns',
        body: 'The balance of automation and control: set it and let it run, or step in when a moment calls for your team\'s personal touch. The system handles execution; your time stays with patients.',
      },
      {
        benefitHeadline: 'Every channel pointed at the same goal: patient pipeline',
        featureSubLabel: 'Unified Channels',
        body: 'Search, social, email, and paid run as one program — each channel building visibility and feeding the next, all aimed at qualified patient demand in your area.',
      },
      {
        benefitHeadline: "Get found by the patients you're built to serve",
        featureSubLabel: 'Visibility Engine',
        body: 'Optimized local SEO, paid media, and social work together to put your practice in front of the right patients — for your specialties, your location, and the conditions you treat.',
      },
      {
        benefitHeadline: 'Inquiries that arrive ready for intake',
        featureSubLabel: 'Prospect Enrichment',
        body: 'Patient inquiries come in with context and route to the right location or department. Your intake starts informed, which means a better first experience for the patient and less manual triage for your staff.',
      },
      {
        benefitHeadline: 'HIPAA-aware before anything goes out',
        featureSubLabel: 'Compliance Built In',
        body: 'HIPAA-aware communication handling, consent tracking, and privacy-safe workflows — built into the system, not added after. Protected health information stays protected by default.',
      },
    ],
    engagementParagraph:
      'This isn\'t DIY software. We learn your practice, build the strategy, and launch the system. Then we meet with you regularly to review what\'s working and adjust — while the platform runs the day-to-day and privacy-safe workflows stay in place. You stay focused on care. We handle the rest.',
  },

  integrations: {
    eyebrow: 'Works With Your Stack',
    h2: 'Built to work with the tools your practice already runs.',
    h2AccentPhrase: 'already runs.',
    intro:
      'You\'ve already invested in your systems. SuperSymm connects to them — your scheduling, your CRM, your existing marketing and review tools — so you\'re adding a system, not replacing one.',
    tools: [
      { name: 'HubSpot', logoUrl: 'https://logo.clearbit.com/hubspot.com' },
      { name: 'Salesforce', logoUrl: 'https://logo.clearbit.com/salesforce.com' },
      { name: 'Calendly', logoUrl: 'https://logo.clearbit.com/calendly.com' },
      { name: 'Podium', logoUrl: 'https://logo.clearbit.com/podium.com' },
      { name: 'Birdeye', logoUrl: 'https://logo.clearbit.com/birdeye.com' },
      { name: 'Google Business', logoUrl: 'https://logo.clearbit.com/google.com' },
      { name: 'Mailchimp', logoUrl: 'https://logo.clearbit.com/mailchimp.com' },
      { name: 'Zocdoc', logoUrl: 'https://logo.clearbit.com/zocdoc.com' },
      { name: 'Practice Scheduling', logoUrl: undefined },
    ],
    closingLine:
      "Don't see your tool? Most systems integrate. We'll confirm yours on the first call.",
  },

  faq: {
    eyebrow: 'Common Questions',
    h2: 'Questions practices ask.',
    h2AccentPhrase: 'practices ask.',
    items: [
      {
        question: 'Is SuperSymm HIPAA-compliant?',
        answer:
          'SuperSymm is built with HIPAA-aware workflows for marketing communications — consent tracking, privacy-safe handling, and processes designed to keep protected health information out of marketing systems. For any integration that would involve PHI, a Business Associate Agreement is required and is established during onboarding. We\'ll walk through exactly what\'s in scope on your first call.',
        defaultOpen: true,
      },
      {
        question: 'How do you handle patient information in marketing?',
        answer:
          'The system is designed so that marketing communications don\'t require protected health information. Patient inquiries are handled through privacy-safe workflows, consent is tracked, and PHI is kept out of marketing tooling by design. Where any system touches PHI, it\'s governed by a Business Associate Agreement.',
      },
      {
        question: 'We have multiple locations. Can the system route patients correctly?',
        answer:
          'Yes. The system supports location-specific campaigns and routes inquiries to the right location automatically — based on geography, specialty, or the care the patient is seeking. Each location can run its own pipeline under one connected system.',
      },
      {
        question: 'Can you help with reviews and online reputation?',
        answer:
          'Yes. Reputation is a core part of how patients choose a provider, so review generation and management on the platforms patients actually use is part of the system — handled in a way that stays within platform and privacy rules.',
      },
      {
        question: 'How long until we see new patient inquiries?',
        answer:
          'Most engagements produce qualified inquiries within the first 90 days, though the timeline depends on your specialties, location, and local market. Patient acquisition is a trust-built journey — the system is designed for that timeline.',
      },
      {
        question: 'Do we have to create the content ourselves?',
        answer:
          "No. SuperSymm creates the content — informed by your practice's specialties, your patients, and privacy requirements. You review and approve. You don't write the posts or learn the tools.",
      },
      {
        question: 'Does this work for specialty practices, not just primary care?',
        answer:
          'Yes. The system is tuned to your specialties and the specific patients you serve. Specialty practices often benefit more, because precise targeting matters more when the right patient is narrower.',
      },
      {
        question: 'What does it cost?',
        answer:
          "Engagement pricing is custom to your practice's size and goals. There's no public tier because practices vary widely in what they need. We'll quote you a number after one call.",
      },
    ],
  },

  cta: {
    h2Lines: ['Spend your time on patients.', 'Not on marketing tools.'],
    h2AccentPhrase: 'Not on marketing tools.',
    body: 'You built your practice on trust and outcomes. SuperSymm builds the system that helps the right patients find you — privacy-safe, consistent, and without taking your time away from care.',
    pricingLine:
      'Engagement pricing is custom to your practice and goals.\nWe\'ll quote you a number after one call.',
  },
}
