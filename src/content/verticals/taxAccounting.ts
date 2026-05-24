import type { VerticalConfig, StatBlock } from '@/types/vertical'

// Option A: uses VerticalPage with statsSection extension.
// statsSection renders as standalone dark section between methodology and capabilities.
// Integration logos use text-tag treatment (no images) — confirm with Chad before adding logos.

export const taxAccountingConfig: VerticalConfig = {
  seo: {
    title: 'Marketing for Tax & Accounting Firms | SuperSymm',
    description:
      'Marketing automation built for CPA firms — Circular 230 aware, integrated with your client workflow, designed to fill your pipeline year-round, not just during tax season.',
    primaryKeyword: 'marketing for tax and accounting firms',
    canonicalPath: '/solutions/tax-and-accounting',
    audienceType: 'Tax and Accounting Firms',
  },

  hero: {
    breadcrumbVertical: 'Tax & Accounting',
    eyebrow: 'Marketing for Tax & Accounting Firms',
    h1Lines: ['You became a CPA to solve hard problems.', 'Not to market.'],
    h1AccentPhrase: 'Not to market.',
    framingParagraph:
      'SuperSymm helps tax and accounting firms turn expertise into a steady client pipeline. We build the digital framework and performance marketing that increases visibility, captures qualified demand, and grows your book — year-round, not just during tax season, with professional-conduct rules built in.',
    // heroImage intentionally omitted — dot-grid background renders automatically
  },

  insight: {
    statement:
      'Accounting firms grow on referrals, retention, and reputation. We build the system that turns one tax season\'s wins into next year\'s pipeline.',
    accentPhrase: "turns one tax season's wins into next year's pipeline",
  },

  methodology: {
    eyebrow: 'How We Work With Tax & Accounting Firms',
    h2: 'Built around how accounting firms actually grow.',
    h2AccentPhrase: 'actually grow',
    intro:
      'Three things shape every program we run for a tax or accounting firm. They\'re the three things that actually determine whether marketing works in a seasonal, referral-driven, regulated practice.',
    blocks: [
      {
        number: '01',
        headline: 'Professional conduct rules are the first question, not the last.',
        // Note: "Circular 230 aware" — not "Circular 230 compliant"
        body: 'Tax and accounting firms operate under IRS Circular 230, the AICPA Code of Professional Conduct, and state board of accountancy advertising rules — each with specific limits on solicitation, fee references, claims of expertise, and the use of client information in marketing. SuperSymm integrates with your existing review process and builds these guardrails into the workflow itself: pre-publish review, restricted-language flagging, and full archive records. Nothing goes out until it\'s cleared.',
      },
      {
        number: '02',
        headline: 'A new client is often a multi-year decision.',
        body: 'Businesses don\'t switch CPAs casually. The journey from first awareness to first engagement usually spans months and gets triggered by a specific event — a growth milestone, a frustration with the current accountant, a new investor demanding tighter financials. We build presence and nurture that respects that timeline, so when the trigger hits, your firm is the one already in their consideration set.',
      },
      {
        number: '03',
        headline: 'The right clients, not just more clients.',
        body: 'Volume isn\'t the goal — margin is. A client outside your firm\'s sweet spot consumes hours your team doesn\'t have to spare. We tune the system to attract the businesses, industries, and engagement sizes your firm actually wants — the ones with the work you do best and the revenue that justifies your time.',
      },
    ],
  },

  // TODO: Verify all stats before launch — directional figures from industry benchmarks.
  // Confirm with current AICPA, CPA Practice Advisor, or Accounting Today data.
  // Remove any that cannot be substantiated.
  statsSection: [
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '~75%',
      label: 'of small business owners stay with their accountant 5+ years once selected — making the consideration window the only realistic acquisition opportunity',
    },
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '40%+',
      label: 'of new client acquisitions for small CPA firms come through referrals — but referred prospects still validate online before committing',
    },
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '60+ days',
      label: 'typical research window from first awareness to first conversation with a new accounting firm',
    },
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '3–7x',
      label: 'the lifetime value of a "right-fit" client compared to a price-shopper — making fit-based targeting the single biggest lever',
    },
  ] satisfies StatBlock[],

  capabilities: {
    eyebrow: 'The Platform, For Accounting Firms',
    h2: 'Built to grow your firm year-round, not just in Q1.',
    h2AccentPhrase: 'year-round, not just in Q1',
    intro:
      'Six capabilities, working as one system — tuned to how accounting firms grow and the professional conduct rules they operate under.',
    capabilities: [
      {
        featureSubLabel: 'Smart Campaigns',
        benefitHeadline: 'Marketing that runs without taking you away from client work',
        body: 'The balance of automation and control: set it and let it run, or step in when a moment calls for your team\'s voice. The system handles execution; your billable hours stay where they belong.',
      },
      {
        featureSubLabel: 'Unified Channels',
        benefitHeadline: 'Every channel pointed at the same goal: your pipeline',
        body: 'Search, social, email, and paid run as one program — each channel building visibility and feeding the next, all aimed at qualified inquiries for the work your firm is built to do.',
      },
      {
        featureSubLabel: 'Visibility Engine',
        benefitHeadline: "Get found by the businesses you're built to serve",
        body: 'Optimized SEO, paid media, and social work together to put your firm in front of the right prospects — by industry, revenue size, geography, and the specific services you specialize in.',
      },
      {
        featureSubLabel: 'Prospect Enrichment',
        benefitHeadline: 'Inquiries that arrive ready for a real conversation',
        body: 'Leads come in with context — their business, their needs, what they engaged with, why they\'re a fit. Your first conversation starts informed, not from scratch.',
      },
      {
        featureSubLabel: 'Compliance Built In',
        benefitHeadline: 'Professional conduct rules handled before anything goes out',
        // Note: "Circular 230 aware" — not "Circular 230 compliant"
        body: 'Circular 230 alignment, AICPA conduct guidelines, state board advertising rule checks, pre-publish approval workflows, and full archiving — integrated with your existing review process.',
      },
      {
        featureSubLabel: 'Know Your Customer',
        benefitHeadline: 'Know every prospect before the first call',
        body: 'Every inbound inquiry is profiled automatically — business type, revenue range, services of interest, source — so your team walks into the first conversation already informed.',
      },
    ],
  },

  personas: {
    eyebrow: "Who You're Marketing To",
    h2: "Accounting clients don't all find you the same way.",
    h2AccentPhrase: 'same way.',
    intro:
      'Different businesses arrive with different intent, different timelines, and different reasons they\'re looking. The channels and messages that work for each are not interchangeable.',
    personas: [
      {
        type: 'Business owner actively shopping accountants',
        intent: '"Our current accountant missed something. I need someone who actually pays attention."',
        description:
          'Triggered by a tax surprise, a missed filing, or a sense their current CPA is phoning it in. Comparing two or three firms right now. Decision usually closes within 30–60 days.',
        channels: ['Google search', 'Google Business Profile reviews', 'Firm website'],
        keyInsight:
          "They're not price-shopping — they're trust-shopping. A confident, specific website beats a competitive fee every time.",
      },
      {
        type: 'Small business owner navigating a transition',
        intent: '"We just raised capital and our investor wants real financials. I need a firm that can scale with us."',
        description:
          'A growth event — funding, acquisition, hiring their first finance lead — moved them to action. High intent, narrow window, may not know exactly what they need yet. Your job is to be the educated answer.',
        channels: ['LinkedIn', 'Content marketing', 'Peer referrals'],
        keyInsight:
          "They're often more impressed by educational content that respects their intelligence than by case studies. Lead with insight, not pitch.",
      },
      {
        type: 'Small business owner sent by an existing client',
        intent: '"[Name] said you were great. I\'m just checking you out before I reach out."',
        description:
          'Arrives warm via referral. But still validates online before committing — a weak website, no team page, or zero reviews can break a warm introduction. Your digital presence has to confirm what the referrer said.',
        channels: ['Firm website', 'Google Business Profile reviews', 'LinkedIn'],
        keyInsight:
          "Most referred prospects never book a call. They check the website, decide silently, and disappear. The website is the conversion surface — not the meeting.",
      },
      {
        type: 'Business owner thinking about switching, but not now',
        intent: '"I\'m not happy but I don\'t want to deal with switching right now."',
        description:
          'Not ready yet. Following your content, reading newsletters, watching how your firm shows up. Will convert in 6–12 months when the next pain point hits. Consistent, useful presence wins.',
        channels: ['Email newsletter', 'LinkedIn content', 'Retargeting'],
        keyInsight:
          "Don't sell. Stay useful. The firm that shares the most consistently valuable monthly insight is the firm they call when they finally decide to move.",
      },
    ],
  },

  integrations: {
    eyebrow: 'Works With Your Stack',
    h2: 'Built to work with the tools your firm already runs.',
    h2AccentPhrase: 'already runs.',
    intro:
      "You've already invested in your stack. SuperSymm connects to it — your practice management software, your CRM, your scheduling tools, your existing marketing platforms — so you're adding a system, not replacing one.",
    // TODO: Confirm with Chad before launch that SuperSymm integrates with each named tool.
    // Using text-tag treatment (no logos) as safe default until integrations are confirmed.
    tools: [
      { name: 'QuickBooks Online' },
      { name: 'Xero' },
      { name: 'HubSpot' },
      { name: 'Salesforce' },
      { name: 'Calendly' },
      { name: 'Mailchimp' },
      { name: 'Karbon' },
      { name: 'Canopy' },
      { name: 'Google Business Profile' },
      { name: 'LinkedIn' },
    ],
    closingLine: "Don't see your tool? Most stacks integrate. We'll confirm yours on the first call.",
  },

  faq: {
    eyebrow: 'Common Questions',
    h2: 'Questions accounting firms ask.',
    h2AccentPhrase: 'accounting firms ask.',
    items: [
      {
        // Note: "Circular 230 aware" — not "Circular 230 compliant"
        question: 'Is SuperSymm aware of Circular 230 and AICPA conduct rules?',
        answer:
          "Yes. The platform is built to handle the specific limits accounting firms operate under — restrictions on solicitation language, fee-related claims, expertise claims, and the use of client information in marketing. Content runs through a pre-publish review step, restricted language is flagged automatically, and the system maintains the records you'd need if a state board ever asked. Your firm's review process stays in the loop; the platform just makes it faster.",
        defaultOpen: true,
      },
      {
        question: 'How does this work with our partner-led review process?',
        answer:
          "It integrates with it. SuperSymm doesn't replace partner review — it routes content through it. Whoever signs off on client-facing communication at your firm signs off here too, and the system handles the routing, tracking, and archiving automatically. The goal is to remove the friction, not the oversight.",
      },
      {
        question: 'We get most of our new clients in Q1. Will this actually help us in the off-season?',
        answer:
          "That's exactly what the system is built for. The seasonal pattern most firms experience comes from concentrated marketing in Q1 and silence the rest of the year — which means you only catch the prospects who are actively shopping in February and March. SuperSymm runs the full year, building presence and nurturing prospects through their actual decision timelines, so you're filling your pipeline in October, not just in tax season.",
      },
      {
        question: 'We specialize in a specific industry — construction, dental, restaurants, etc. Can the system target that?',
        answer:
          "Yes. The system is tuned to your specific specialties and the businesses you serve best. Niche-focused targeting actually produces better results than generalist marketing — narrower audience, sharper message, higher fit rate. Specialty practices often see the strongest performance for exactly this reason.",
      },
      {
        question: 'How long until we see qualified leads?',
        answer:
          "Most engagements produce qualified prospects within the first 90 days, though the timeline depends on your firm's specialties, location, and market. Accounting is a longer-relationship motion than most industries — businesses don't switch CPAs on impulse — so the system is built for that timeline. Expect early signals in 30–60 days and a steady pipeline by 90.",
      },
      {
        question: 'Do we have to create the content ourselves?',
        answer:
          "No. SuperSymm creates the content — informed by your firm's positioning, your specialties, your differentiators, and the professional conduct rules you operate under. You review and approve. You don't write the posts or learn the tools.",
      },
      {
        question: 'How is this different from a tax-focused content tool or an industry newsletter service?',
        answer:
          'Those produce content. SuperSymm runs the full system: visibility, lead capture, qualification, nurture, professional conduct review, and the connecting infrastructure that turns content into pipeline. A content tool gives you posts. SuperSymm gives you a marketing function.',
      },
      {
        question: 'What does it cost?',
        answer:
          "Engagement pricing is custom to your firm's size and goals. There's no public tier because accounting firms vary widely in what they need — solo practitioner, regional firm with multiple partners, niche specialty practice. We'll quote you a number after one call.",
      },
    ],
  },

  cta: {
    h2Lines: ['Spend your time on clients.', 'Not on marketing tools.'],
    h2AccentPhrase: 'Not on marketing tools.',
    body: 'You built your firm on expertise and trust. SuperSymm builds the system that puts that expertise in front of the right businesses — professionally, consistently, and without taking your time away from the work that pays.',
    pricingLine:
      "Engagement pricing is custom to your firm and goals.\nWe'll quote you a number after one call.",
  },
}
