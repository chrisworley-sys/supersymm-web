import type { VerticalConfig } from '@/types/vertical'

export const financialAdvisorsConfig: VerticalConfig = {
  seo: {
    title: 'Marketing for Financial Advisors & RIAs | SuperSymm',
    description:
      'Marketing automation built for RIAs — SEC Marketing Rule compliant, integrated with your compliance review, and designed to turn reputation into pipeline.',
    primaryKeyword: 'Marketing for financial advisors',
    canonicalPath: '/solutions/financial-advisors',
    audienceType: 'Registered Investment Advisors',
  },

  hero: {
    breadcrumbVertical: 'Financial Advisors',
    eyebrow: 'Marketing for Financial Advisors',
    h1Lines: ['You became an advisor to advise.', 'Not to market.'],
    h1AccentPhrase: 'Not to market.',
    framingParagraph:
      'SuperSymm helps RIA firms turn expertise into pipeline. We build the digital framework and performance marketing that increases visibility, captures qualified demand, and grows your book — with SEC compliance built into every step.',
    heroImage: '/assets/illustrations/financial_advisors_hero.jpg',
  },

  insight: {
    statement:
      'Advisory firms grow on reputation, referrals, and hard work. We build the system that scales what already works.',
    accentPhrase: 'scales what already works',
  },

  methodology: {
    eyebrow: 'How We Work With RIAs',
    h2: 'Built around how advisory firms actually grow.',
    h2AccentPhrase: 'actually grow',
    intro:
      'Three things shape every program we run for an RIA. They\'re the three things that actually determine whether marketing works for an advisory firm.',
    blocks: [
      {
        number: '01',
        headline: 'Compliance is the first question, not the last.',
        body: 'For an RIA, the SEC Marketing Rule isn\'t a footnote — it\'s a barrier at every turn. SuperSymm integrates with your compliance review and approval cycle, and builds compliance into the workflow itself: pre-publish review, 5-year archiving, and audit-ready records. Nothing goes out until it\'s cleared.',
      },
      {
        number: '02',
        headline: 'Growth is a long relationship with many quick interactions.',
        body: 'A new client is rarely a single touchpoint. It\'s a referral, a website visit months later, a piece of content, a slow build of trust before anyone books a call. We build nurture that respects that timeline — staying useful and present across the months it takes, so you\'re the firm they call when they\'re ready.',
      },
      {
        number: '03',
        headline: 'The right leads, not just more leads.',
        body: 'Volume isn\'t the goal — fit is. We tune the system to attract prospects who match your firm: the right asset level, the right life stage, the right planning need. The result is fewer wasted conversations and more first meetings that actually go somewhere.',
      },
    ],
  },

  capabilities: {
    eyebrow: 'The Platform, For Advisory Firms',
    h2: 'Enabling advisors build dreams.',
    h2AccentPhrase: 'build dreams',
    intro:
      'Five capabilities, working as one system — tuned to how advisory firms grow and the rules they operate under.',
    backgroundImages: [
      '/assets/illustrations/FA_images/pexels-alexmoliski-27612115.jpg',
      '/assets/illustrations/FA_images/pexels-anastasia-shuraeva-8796064.jpg',
      '/assets/illustrations/FA_images/pexels-thomas-k-268383750-15236907.jpg',
    ],
    capabilities: [
      {
        benefitHeadline: 'Marketing that runs without running your day',
        featureSubLabel: 'Smart Campaigns',
        body: 'The balance of automation and control: set it and let it run, or step in when a moment calls for your personal touch. The system handles the execution; your judgment stays where it matters.',
      },
      {
        benefitHeadline: 'Every channel pointed at the same goal: your pipeline',
        featureSubLabel: 'Unified Channels',
        body: 'Search, social, email, and paid don\'t run as separate efforts. They run as one program, each channel building the audience and feeding the next, all aimed at qualified demand.',
      },
      {
        benefitHeadline: 'Get found by the clients you actually want',
        featureSubLabel: 'Visibility Engine',
        body: 'Optimized SEO, paid media, and social work together to put your firm in front of the right prospects — at the asset level and life stage your practice is built to serve.',
      },
      {
        benefitHeadline: 'Leads that arrive ready for a real conversation',
        featureSubLabel: 'Prospect Enrichment',
        body: 'Leads come in with context — who they are, what they engaged with, why they\'re a fit. Your first conversation starts informed, which is the kind of first impression an advisory relationship is built on.',
      },
      {
        benefitHeadline: 'Compliance handled before anything goes out',
        featureSubLabel: 'Compliance Built In',
        body: 'SEC Marketing Rule alignment, pre-publish approval workflows, testimonial and endorsement handling, and 5-year archiving — integrated with your existing review process, not bolted on after it.',
      },
    ],
  },

  integrations: {
    eyebrow: 'Works With Your Stack',
    h2: 'Built to work with the tools your firm already runs.',
    h2AccentPhrase: 'already runs.',
    intro:
      'You\'ve already invested in your stack. SuperSymm connects to it — your CRM, your compliance archiving, your existing marketing tools — so you\'re adding a system, not replacing one.',
    tools: [
      { name: 'Wealthbox', logoUrl: 'https://logo.clearbit.com/wealthbox.com' },
      { name: 'Redtail', logoUrl: 'https://logo.clearbit.com/redtailtechnology.com' },
      { name: 'Salesforce', logoUrl: 'https://logo.clearbit.com/salesforce.com' },
      { name: 'HubSpot', logoUrl: 'https://logo.clearbit.com/hubspot.com' },
      { name: 'FMG Suite', logoUrl: 'https://logo.clearbit.com/fmgsuite.com' },
      { name: 'Snappy Kraken', logoUrl: 'https://logo.clearbit.com/snappykraken.com' },
      { name: 'Calendly', logoUrl: 'https://logo.clearbit.com/calendly.com' },
      { name: 'Orion', logoUrl: 'https://logo.clearbit.com/orionadvisor.com' },
      { name: 'Black Diamond', logoUrl: 'https://logo.clearbit.com/bdreporting.com' },
      { name: 'Mailchimp', logoUrl: 'https://logo.clearbit.com/mailchimp.com' },
    ],
    closingLine:
      "Don't see your tool? Most stacks integrate. We'll confirm yours on the first call.",
  },

  faq: {
    eyebrow: 'Common Questions',
    h2: 'Questions advisory firms ask.',
    h2AccentPhrase: 'advisory firms ask.',
    items: [
      {
        question: 'Is SuperSymm compliant with the SEC Marketing Rule?',
        answer:
          'Yes. Compliance is built into the workflow, not added after. Content runs through a pre-publish review and approval step before anything is distributed, all communications are archived for the required retention period, and the system produces audit-ready records. We also align with the Marketing Rule\'s requirements around testimonials and endorsements.',
        defaultOpen: true,
      },
      {
        question: 'How does this work with our existing compliance officer and review process?',
        answer:
          'It integrates with it. SuperSymm doesn\'t replace your compliance review — it routes content through it. Your CCO or compliance reviewer approves before anything publishes, and the system keeps the archive and audit trail automatically. The goal is to make your existing process faster, not bypass it.',
      },
      {
        question: 'Does this work for fee-only RIAs, or also commission and hybrid firms?',
        answer:
          'Both. The platform adapts to your firm\'s model and the specific regulatory context you operate under. Fee-only, commission, or hybrid — the compliance configuration is set up for your situation during onboarding.',
      },
      {
        question: 'We have a broker-dealer relationship. Can the system handle that?',
        answer:
          'Yes. For firms with a broker-dealer, the review and archiving workflow is configured to fit that relationship\'s requirements alongside the SEC Marketing Rule. This is part of the onboarding setup.',
      },
      {
        question: 'How long until we see qualified leads?',
        answer:
          'Most engagements produce qualified prospects within the first 90 days, though the exact timeline depends on your firm\'s size, market, and sales cycle. RIA growth is a longer-relationship motion than most industries — the system is built for that timeline, not against it.',
      },
      {
        question: 'Do we have to create the content ourselves?',
        answer:
          'No. SuperSymm creates the content — informed by your firm\'s positioning, your differentiators, and your compliance posture. You review and approve. You don\'t write the posts or learn the tools.',
      },
      {
        question: 'How is this different from FMG Suite or Snappy Kraken?',
        answer:
          'Those are content libraries and scheduling tools — useful, but they stop at publishing. SuperSymm runs the full system: visibility, lead capture, qualification, nurture, and compliance, connected end to end. It\'s the difference between a content tool and a marketing function.',
      },
      {
        question: 'What does it cost?',
        answer:
          'Engagement pricing is custom to your firm\'s size and goals. There\'s no public tier because RIA firms vary widely in what they need. We\'ll quote you a number after one call.',
      },
    ],
  },

  cta: {
    h2Lines: ['Spend your time on clients.', 'Not on marketing tools.'],
    h2AccentPhrase: 'Not on marketing tools.',
    body: 'You built your firm on expertise and trust. SuperSymm builds the system that puts that expertise in front of the right people — compliantly, consistently, and without taking your time away from the work that matters.',
    pricingLine:
      'Engagement pricing is custom to your firm and goals.\nWe\'ll quote you a number after one call.',
  },
}
