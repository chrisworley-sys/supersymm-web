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
    stats: [
      {
        stat: '73%',
        label: 'of investors research advisors online before ever contacting a firm',
      },
      {
        stat: '5–7',
        label: 'touchpoints on average before a prospect books a first call with an advisory firm',
      },
      {
        stat: '67%',
        label: 'of RIAs say referrals are their top growth source — but referrals still validate online before calling',
      },
      {
        stat: '90 days',
        label: 'is the typical window to convert an organic search visitor into a qualified prospect',
      },
    ],
  },

  personas: {
    eyebrow: 'Who You\'re Marketing To',
    h2: 'Prospects don\'t all find you the same way.',
    h2AccentPhrase: 'same way.',
    intro:
      'Different prospects arrive with different intent, different timelines, and different trust thresholds. The channels and messages that work for each are not interchangeable.',
    personas: [
      {
        type: 'The Accumulator',
        intent: '"I need someone to help me manage what I\'ve built."',
        description:
          'A business owner, executive, or high earner who has grown wealth but lacks a structured plan. They\'re actively looking and will compare multiple firms before deciding. Strong credentials, clear positioning, and a defined process win here.',
        channels: ['Paid Search', 'LinkedIn Ads', 'SEO Landing Pages', 'Advisor Bio Pages'],
        keyInsight:
          'They\'re comparing firms, not just you. Be the most credible, clearly positioned option in the search results — or you won\'t make the shortlist.',
      },
      {
        type: 'The Transition Prospect',
        intent: '"Something just changed and I need guidance."',
        description:
          'Triggered by a life event — a business sale, inheritance, divorce, retirement, or job change. Motivated and time-sensitive, but likely unfamiliar with how to find a fiduciary advisor. Whoever shows up first in their search with the right message wins.',
        channels: ['Paid Search', 'Google Business Profile', 'Targeted Content', 'Fast-Response Nurture'],
        keyInsight:
          'Timing is everything. They\'re searching with high intent and a short window. Visibility and response speed matter more than brand polish.',
      },
      {
        type: 'The Referred Prospect',
        intent: '"Someone I trust said to call you."',
        description:
          'Arrives warm with strong intent but still validates online before booking. Your website, reviews, and LinkedIn presence are their confidence check. A weak digital presence can undo a trusted referral.',
        channels: ['Practice Website', 'LinkedIn Profile', 'Google Reviews', 'Direct Email Nurture'],
        keyInsight:
          'Referrals close themselves — unless your online presence creates hesitation. The digital handshake has to hold up.',
      },
      {
        type: 'The Long-Cycle Evaluator',
        intent: '"I\'m not ready yet, but I\'m paying attention."',
        description:
          'Researching now, converting later. They follow advisors on LinkedIn, read newsletters, bookmark firm websites, and build a mental shortlist over months. Consistent, high-quality presence wins their eventual first call.',
        channels: ['LinkedIn Organic', 'Email Newsletter', 'Educational Content', 'Retargeting'],
        keyInsight:
          'You can\'t rush this buyer — but you can stay present. The firm that shows up consistently in their feed is the one they call when the moment arrives.',
      },
    ],
  },

  capabilities: {
    eyebrow: 'The Platform, For Advisory Firms',
    h2: 'Enabling advisors to build dreams.',
    h2AccentPhrase: 'build dreams',
    intro:
      'Six capabilities, working as one system — tuned to how advisory firms grow and the rules they operate under.',
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
      {
        benefitHeadline: 'Know every prospect before the first conversation starts',
        featureSubLabel: 'Know Your Customer',
        body: 'Every inbound prospect is profiled automatically — firmographic data, AUM signals, behavioral triggers, and engagement history. Your team walks into every first meeting with the context it takes most advisors months to build.',
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
      { name: 'Wealthbox', logoUrl: '/assets/illustrations/company_Logos/Wealthbox-logo-1024x578.webp' },
      { name: 'Redtail', logoUrl: '/assets/illustrations/company_Logos/redtail%20logo.png' },
      { name: 'Salesforce', logoUrl: 'https://logo.clearbit.com/salesforce.com' },
      { name: 'HubSpot', logoUrl: '/assets/illustrations/company_Logos/png-clipart-logo-hubspot-inc-marketing-asg-capital-group-pty-ltd-brand-marketing-text-orange-thumbnail.png' },
      { name: 'FMG Suite', logoUrl: '/assets/illustrations/company_Logos/fmg_logo.png' },
      { name: 'Snappy Kraken', logoUrl: '/assets/illustrations/company_Logos/snappy_kraken_logo.jpg' },
      { name: 'Calendly', logoUrl: '/assets/illustrations/company_Logos/calendly_logo.png' },
      { name: 'Orion', logoUrl: '/assets/illustrations/company_Logos/orion_logo.png' },
      { name: 'Black Diamond', logoUrl: 'https://logo.clearbit.com/bdreporting.com' },
      { name: 'Mailchimp', logoUrl: '/assets/illustrations/company_Logos/Mailchimp-logo.png' },
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
