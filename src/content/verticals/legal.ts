import type { VerticalConfig, StatBlock } from '@/types/vertical'

// Option A: uses VerticalPage with statsSection extension.
// statsSection renders as standalone dark section between methodology and capabilities.
// Integration logos use text-tag treatment (no images) — confirm with Chad before adding logos.

export const legalConfig: VerticalConfig = {
  seo: {
    title: 'Marketing for Law Firms & Legal Professionals | SuperSymm',
    description:
      'Marketing automation built for law firms — state bar advertising rule aware, integrated with your intake process, and designed to fill your pipeline without the compliance risk.',
    primaryKeyword: 'marketing for law firms',
    canonicalPath: '/solutions/legal',
    audienceType: 'Law Firms and Legal Practices',
  },

  hero: {
    breadcrumbVertical: 'Legal Professionals',
    eyebrow: 'Marketing for Law Firms',
    h1Lines: ['You became an attorney to practice law.', 'Not to market.'],
    h1AccentPhrase: 'Not to market.',
    framingParagraph:
      'SuperSymm helps law firms turn legal expertise into a steady client pipeline. We build the digital framework and performance marketing that increases visibility, captures qualified demand, and grows your firm — with state bar advertising rules built into every step.',
    heroImage: '/assets/illustrations/lawyer_hero.jpg',
    // Pinker overlay — more pink/magenta than the FA default
    heroOverlay:
      'linear-gradient(93deg, rgba(22,10,35,0.94) 0%, rgba(80,20,70,0.90) 45%, rgba(160,40,110,0.80) 100%)',
  },

  insight: {
    statement:
      'Law firms grow on results, reputation, and referrals. We build the system that turns your expertise into a pipeline you can predict.',
    accentPhrase: 'turns your expertise into a pipeline you can predict',
  },

  methodology: {
    eyebrow: 'How We Work With Law Firms',
    h2: 'Built around how law firms actually grow.',
    h2AccentPhrase: 'actually grow',
    intro:
      'Three problems keep law firms from growing predictably. Here\'s how we solve each one.',
    blocks: [
      {
        number: '01',
        headline: 'You can\'t market freely — and most tools don\'t know that.',
        body: '',
        // Note: "state bar advertising rule aware" — not "state bar compliant"
        bodyBullets: [
          'State bar advertising rules vary by jurisdiction and restrict solicitation, testimonials, and outcome claims',
          'Generic marketing tools have no concept of bar rule guardrails',
          'SuperSymm builds jurisdiction-aware flagging, required disclaimers, and pre-publish review into the workflow — nothing goes out until it\'s cleared',
        ],
      },
      {
        number: '02',
        headline: 'Your clients decide at very different speeds.',
        body: '',
        bodyBullets: [
          'A criminal defense client decides in hours; an estate planning prospect researches for years',
          'One-size marketing misses both — urgent clients need instant visibility, long-cycle clients need consistent presence',
          'We build nurture that fits every timeline so your firm is visible when it matters, regardless of when the client is ready',
        ],
      },
      {
        number: '03',
        headline: 'More leads isn\'t the goal. The right caseload is.',
        body: '',
        bodyBullets: [
          'A poor-fit matter consumes hours your team can\'t spare and pays below your rate',
          'Generalist lead-gen attracts generalist inquiries',
          'We tune targeting to your practice areas, matter types, and client profiles — so your pipeline fills with work worth your time',
        ],
      },
    ],
  },

  // TODO: Verify all stats before launch — directional figures from industry benchmarks.
  // Confirm with current ABA TechReport, Clio Legal Trends Report, or Thomson Reuters
  // Legal Marketing Trends data. Remove any that cannot be substantiated.
  statsSection: [
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '~75%',
      label: 'of legal consumers research at least three firms before contacting any one',
    },
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '60+%',
      label: 'of new client matters at small firms originate from referrals — but referrals still validate online first',
    },
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '5 min',
      label: 'intake response window where conversion rates drop dramatically',
    },
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '30–90 days',
      label: 'typical research window for non-urgent legal matters',
    },
  ] satisfies StatBlock[],

  capabilities: {
    eyebrow: 'The Platform, For Law Firms',
    h2: 'Built to fill your pipeline, billable hour by billable hour.',
    h2AccentPhrase: 'billable hour by billable hour.',
    intro:
      'Six capabilities, working as one system — tuned to how law firms grow and the state bar rules they operate under.',
    backgroundImages: [
      '/assets/illustrations/lawyer_images/Law-firm.jpg',
      '/assets/illustrations/lawyer_images/rural-lawyer.jpg',
      '/assets/illustrations/lawyer_images/small-business-lawyer.jpg',
    ],
    capabilities: [
      {
        featureSubLabel: 'Smart Campaigns',
        benefitHeadline: 'Marketing that runs while you\'re billing hours',
        body: 'The balance of automation and control: set it and let it run, or step in when a moment calls for your firm\'s voice. The system handles execution; your billable time stays where it pays.',
      },
      {
        featureSubLabel: 'Unified Channels',
        benefitHeadline: 'Every channel pointed at the same goal: your caseload',
        body: 'Search, social, email, and paid run as one program — each channel building visibility and feeding the next, all aimed at qualified inquiries in your practice areas.',
      },
      {
        featureSubLabel: 'Visibility Engine',
        benefitHeadline: 'Get found by the clients you\'re built to serve',
        body: 'Optimized SEO, paid media, and local search work together to put your firm in front of the right prospects — by practice area, jurisdiction, and matter type.',
      },
      {
        featureSubLabel: 'Prospect Enrichment',
        benefitHeadline: 'Inquiries that arrive ready for intake',
        body: 'Leads come in with context — matter type, urgency, source, qualification — so your intake team starts informed and converts at a higher rate.',
      },
      {
        featureSubLabel: 'Compliance Built In',
        benefitHeadline: 'State bar advertising rules handled before anything goes out',
        // Note: "state bar advertising rule aware" — not "state bar compliant"
        body: 'Jurisdiction-aware language flagging, required disclaimer insertion, pre-publish workflows, and full archiving — built in, not bolted on.',
      },
      {
        featureSubLabel: 'Know Your Customer',
        benefitHeadline: 'Know every prospect before the first call',
        body: 'Every inbound inquiry is profiled automatically — matter type, urgency signals, jurisdiction, source — so your intake conversation starts in the right place.',
      },
    ],
  },

  personas: {
    eyebrow: 'Who You\'re Marketing To',
    h2: 'Legal clients don\'t all find you the same way.',
    h2AccentPhrase: 'same way.',
    intro:
      'Different clients arrive with different intent, different timelines, and different stakes. The channels and messages that work for each are not interchangeable.',
    personas: [
      {
        type: 'Prospect with an immediate legal need',
        intent: '"I need an attorney. Today, ideally."',
        description:
          'A specific event just happened — an arrest, a lawsuit served, an injury, a denial. Triaging firms right now, often via Google search on a mobile device. Decision usually closes within hours to days.',
        channels: ['Google search', 'Google Business Profile', 'Mobile-optimized firm website'],
        keyInsight:
          'Conversion lives or dies on intake speed. A five-minute response window beats a fifty-minute one by an order of magnitude. The phone has to be answered or the matter is gone.',
      },
      {
        type: 'Business owner or individual planning a transaction',
        intent: '"We\'re acquiring a competitor next quarter and I need real outside counsel."',
        description:
          'A business or life event is approaching — an acquisition, a formation, a divorce, an estate plan. Higher-value matter, longer consideration window. They\'re comparing two or three firms and validating expertise carefully.',
        channels: ['LinkedIn', 'Content marketing', 'Peer and advisor referrals'],
        keyInsight:
          'They\'re not impressed by traffic-driving content. They want to see specific experience with their exact matter type. A thin "practice areas" page loses the matter; a deep, specific practice page wins it.',
      },
      {
        type: 'Client sent by a current or former client, or by another professional',
        intent: '"[Name] said you were the one I should call."',
        description:
          'Arrives warm via referral. But still validates online before reaching out — a weak website, no reviews, or no attorney bios can break the warm introduction. Your digital presence has to confirm what the referrer said.',
        channels: ['Firm website', 'Google Business Profile reviews', 'Attorney bio pages', 'LinkedIn'],
        keyInsight:
          'Most referred prospects never call the firm\'s main line. They check the website, decide silently, and either reach out directly to the named attorney or move on. The named attorney\'s bio page is the conversion surface.',
      },
      {
        type: 'Prospect who knows they\'ll need legal help eventually',
        intent: '"I\'ll probably need an attorney for this someday. Want to know who I\'d call."',
        description:
          'Not ready yet. Following firm content, reading newsletters, watching how your attorneys present in their field. Will convert in 6–24 months when the actual need arrives. Consistent, expert presence wins.',
        channels: ['LinkedIn content', 'Firm newsletter', 'Retargeting', 'Expert commentary in publications'],
        keyInsight:
          'They\'re building a mental shortlist of "who I\'d call if this happened." The firm that shows up consistently as a credible expert in their field is the firm they call when the moment comes — even years later.',
      },
    ],
  },

  integrations: {
    eyebrow: 'Works With Your Stack',
    h2: 'Built to work with the tools your firm already runs.',
    h2AccentPhrase: 'already runs.',
    intro:
      'You\'ve already invested in your stack. SuperSymm connects to it — your practice management software, your CRM, your intake systems, your existing marketing tools — so you\'re adding a system, not replacing one.',
    // TODO: Confirm with Chad before launch that SuperSymm integrates with each named tool.
    // Using text-tag treatment (no logos) as safe default until integrations are confirmed.
    tools: [
      { name: 'Clio' },
      { name: 'MyCase' },
      { name: 'PracticePanther' },
      { name: 'Lawmatics' },
      { name: 'HubSpot' },
      { name: 'Salesforce' },
      { name: 'Calendly' },
      { name: 'Mailchimp' },
      { name: 'Google Business Profile' },
      { name: 'LinkedIn' },
    ],
    closingLine: "Don't see your tool? Most stacks integrate. We'll confirm yours on the first call.",
  },

  faq: {
    eyebrow: 'Common Questions',
    h2: 'Questions law firms ask.',
    h2AccentPhrase: 'law firms ask.',
    items: [
      {
        // Note: "state bar advertising rule aware" — not "state bar compliant"
        question: 'Is SuperSymm aware of state bar advertising rules?',
        answer:
          'Yes. The platform is built to handle the specific limits law firms operate under — restrictions on solicitation, testimonials, comparative claims, fee references, and outcome statements that vary by jurisdiction. Content runs through a pre-publish review step with jurisdiction-aware language flagging, required disclaimers are inserted automatically where rules require them, and the system maintains the records you\'d need if your state bar ever asked. Your firm\'s own compliance review stays in the loop; the platform just makes it faster.',
        defaultOpen: true,
      },
      {
        question: 'How does this work with our existing intake and compliance review?',
        answer:
          'It integrates with it. SuperSymm doesn\'t replace partner review of client-facing materials — it routes content through whatever review process your firm already uses, with full tracking and archiving. The intake side connects to your existing system, so qualified leads land where your team already works.',
      },
      {
        question: 'We practice in multiple states. Can the system handle different bar rules?',
        answer:
          'Yes. The system is configured for the specific jurisdictions your firm operates in, and content is reviewed against the rules of each. For firms with attorneys licensed in multiple states, the platform tracks which content is appropriate for which jurisdiction.',
      },
      {
        question: 'We focus on a specific practice area — personal injury, family law, business law, etc. Can the system target that?',
        answer:
          'Yes. The system is tuned to your specific practice areas and the matter types your firm wants to attract. Practice-specific targeting outperforms generalist marketing — sharper messaging, higher-fit inquiries, better conversion. Specialty firms often see the strongest performance for exactly this reason.',
      },
      {
        question: 'How long until we see qualified leads?',
        answer:
          'Most engagements produce qualified prospects within the first 90 days, though the timeline depends on your practice areas, your market, and the urgency of the matter types you handle. Urgent-matter practices (criminal defense, personal injury) see leads within days of launch. Long-cycle practices (estate planning, complex transactions) see the system pay off over a longer arc — but the pipeline you build is more predictable.',
      },
      {
        question: 'Do we have to write the content ourselves?',
        answer:
          'No. SuperSymm creates the content — informed by your firm\'s practice areas, your attorneys\' expertise, and the bar rules in your jurisdiction. You review and approve. You don\'t write the posts or learn the tools.',
      },
      {
        question: 'How is this different from a legal directory or a pay-per-lead service?',
        answer:
          'Those generate inquiries by selling you placement in a directory or auctioning leads to multiple firms simultaneously. SuperSymm builds your firm\'s own marketing function — your brand, your pipeline, your relationships. It\'s the difference between renting visibility from someone else\'s platform and owning your own.',
      },
      {
        question: 'What does it cost?',
        answer:
          "Engagement pricing is custom to your firm's size, practice areas, and goals. There's no public tier because law firms vary widely in what they need — solo practitioner, boutique firm with multiple partners, multi-jurisdiction practice. We'll quote you a number after one call.",
      },
    ],
  },

  cta: {
    h2Lines: ['Spend your time on cases.', 'Not on marketing tools.'],
    h2AccentPhrase: 'Not on marketing tools.',
    body: 'You built your firm on expertise and reputation. SuperSymm builds the system that puts that reputation in front of the right clients — within the rules, consistently, and without taking your time away from the practice of law.',
    pricingLine:
      'Engagement pricing is custom to your firm and goals.\nWe\'ll quote you a number after one call.',
  },
}
