import type { VerticalConfig, StatBlock } from '@/types/vertical'

// Option A: uses VerticalPage with statsSection extension.
// statsSection renders as standalone dark section between methodology and capabilities.
// No compliance capability — capability 5 is "Account Intelligence" (B2B-specific, intentional).
// No regulatory framing anywhere on this page.
// Integration logos use text-tag treatment (no images) — confirm with Chad before adding logos.

export const b2bServicesConfig: VerticalConfig = {
  seo: {
    title: 'Marketing for B2B Services & Consulting Firms | SuperSymm',
    description:
      'Marketing automation for B2B services and consulting firms — built to fill your pipeline with target-account meetings, not generic inquiries.',
    primaryKeyword: 'marketing for B2B consulting firms',
    canonicalPath: '/solutions/b2b-services',
    audienceType: 'B2B Services and Consulting Firms',
  },

  hero: {
    breadcrumbVertical: 'B2B Services',
    eyebrow: 'Marketing for B2B Services & Consulting',
    h1Lines: ['You built your firm to solve hard problems.', 'Not to chase leads.'],
    h1AccentPhrase: 'Not to chase leads.',
    framingParagraph:
      'SuperSymm helps B2B services and consulting firms turn expertise into enterprise pipeline. We build the digital framework and account-based marketing that increases visibility at the accounts you actually want — and fills your calendar with meetings, not generic inquiries.',
    heroImage: '/assets/illustrations/b2b_hero.png',
    // Dark overlay — near-black with a subtle deep-navy tint
    heroOverlay:
      'linear-gradient(93deg, rgba(2,4,10,0.97) 0%, rgba(8,12,24,0.94) 50%, rgba(18,22,40,0.88) 100%)',
  },

  insight: {
    statement:
      'B2B services firms grow on relationships, expertise, and the right rooms. We build the system that gets you into more of them.',
    accentPhrase: 'gets you into more of them',
  },

  methodology: {
    eyebrow: 'How We Work With B2B Services Firms',
    h2: 'Built around how consulting firms actually grow.',
    h2AccentPhrase: 'actually grow',
    intro:
      'Three problems keep B2B services firms from filling their pipeline predictably. Here\'s how we solve each one.',
    blocks: [
      {
        number: '01',
        headline: 'Enterprise buyers won\'t engage firms they haven\'t heard of.',
        body: '',
        bodyBullets: [
          'Most enterprise buyers complete the majority of research before contacting any vendor',
          'Without credibility infrastructure — content, proof points, LinkedIn presence — you\'re invisible before the first call',
          'SuperSymm builds that foundation first, so buyers see your firm as a legitimate option before you ever reach out',
        ],
      },
      {
        number: '02',
        headline: 'A single contact rarely closes the deal.',
        body: '',
        bodyBullets: [
          'B2B services purchases involve 6–10 stakeholders and take months to close',
          'Marketing that reaches only one person at one moment misses the committee',
          'We build multi-stakeholder presence and nurture that keeps your firm visible across the full decision cycle',
        ],
      },
      {
        number: '03',
        headline: 'Generic inbound wastes your senior team\'s time.',
        body: '',
        bodyBullets: [
          'A lead outside your ICP signals the wrong positioning and burns hours on a dead end',
          'Volume isn\'t the goal — target accounts are',
          'We tune the system to your named accounts and lookalikes — by company size, industry, and the roles that buy your service',
        ],
      },
    ],
  },

  // TODO: Verify all stats before launch — directional figures from industry benchmarks.
  // Confirm with current Gartner B2B Buying Journey research, Forrester B2B Marketing
  // reports, or HubSpot/6sense ABM data. Remove any that cannot be substantiated.
  statsSection: [
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '6–10',
      label: 'stakeholders involved in a typical B2B services purchase',
    },
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '~75%',
      label: 'of B2B buyers finish their research before contacting a vendor',
    },
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '60–180 days',
      label: 'typical sales cycle for B2B services engagements',
    },
    {
      // TODO: Verify stat before launch — see brief source notes
      value: '3–5x',
      label: 'lifetime value of account-based vs. one-off project work',
    },
  ] satisfies StatBlock[],

  capabilities: {
    eyebrow: 'The Platform, For B2B Services Firms',
    h2: 'Built to fill your pipeline with the right accounts, on purpose.',
    h2AccentPhrase: 'on purpose.',
    intro:
      'Six capabilities, working as one system — tuned to how B2B services firms grow and the long-cycle, multi-stakeholder reality they operate in.',
    backgroundImages: [
      '/assets/illustrations/b2b_images/6773ba6681dfccbd4f4fb98e_iStock-1197932646(3)(2).jpg',
      '/assets/illustrations/b2b_images/B2B-Digital-Marketing-Agency-scaled-uai-900x563.jpeg',
      '/assets/illustrations/b2b_images/How-to-achieve-effective-B2B-marketing-on-digital-channels-step-by-step-iPROM-Blog-Uros-Koncar-1.png',
      '/assets/illustrations/b2b_images/Meaningful-B2B-Customer-Connections-1.jpg',
      '/assets/illustrations/b2b_images/xl-2018-business-meeting-1.jpg',
    ],
    capabilities: [
      {
        featureSubLabel: 'Smart Campaigns',
        benefitHeadline: "Marketing that runs without taking you off client engagements",
        body: "The balance of automation and control: set it and let it run, or step in when a moment calls for your senior team's voice. The system handles execution; your billable hours stay on engagements.",
      },
      {
        featureSubLabel: 'Unified Channels',
        benefitHeadline: 'Every channel pointed at the same goal: target-account meetings',
        body: 'Search, LinkedIn, content, email, and paid run as one program — each channel reaching different stakeholders at your target accounts, all aimed at the meeting that matters.',
      },
      {
        featureSubLabel: 'Visibility Engine',
        benefitHeadline: "Get found by the accounts you're built to serve",
        body: "Optimized SEO, LinkedIn-led campaigns, account-based paid media, and content work together to surface your firm at the companies and titles you actually want as clients.",
      },
      {
        featureSubLabel: 'Prospect Enrichment',
        benefitHeadline: 'Inquiries that arrive with full account context',
        body: 'Leads come in enriched with firmographic and behavioral context — company, industry, role, recent engagement, account intent signals. Your first conversation starts informed, in the right place.',
      },
      {
        // Intentionally different from other verticals — B2B has no regulatory compliance layer.
        // Account Intelligence replaces "Compliance Built In" to reflect what B2B buyers actually care about.
        featureSubLabel: 'Account Intelligence',
        benefitHeadline: 'Know which accounts are actually moving',
        body: 'Track engagement at the account level, not just the lead level. See which target accounts are heating up across multiple stakeholders before any single person fills out a form.',
      },
      {
        featureSubLabel: 'Know Your Customer',
        benefitHeadline: 'Know every prospect before the first conversation',
        body: 'Every inbound lead is profiled automatically — company, role, intent signals, engagement history, fit against your ICP — so your senior team walks in already up to speed.',
      },
    ],
  },

  personas: {
    eyebrow: "Who You're Marketing To",
    h2: "Enterprise buyers don't all find you the same way.",
    h2AccentPhrase: 'same way.',
    intro:
      'Different stakeholders inside your target accounts arrive with different intent, different urgency, and different reasons they\'re looking. The channels and messages that work for each are not interchangeable.',
    personas: [
      {
        type: 'Decision-maker with budget and timeline',
        intent: '"We have a project starting next quarter. I need three firms to evaluate."',
        description:
          'Has budget, has timeline, has been tasked with picking a firm. Comparing two to four options. Decision usually closes within 60–90 days. Wins on credibility, fit, and how the first conversation goes.',
        channels: ['LinkedIn', 'Firm website', 'Referrals from peers', 'Content'],
        keyInsight:
          "They're going to look at your firm before talking to you. The LinkedIn presence of your senior team and your website's clarity about who you serve are the first interviews — and you're not in the room.",
      },
      {
        type: "Senior individual contributor or director who's identified a need",
        intent: '"I think we should bring in outside help. I need to convince my exec team."',
        description:
          "Sees the problem, believes external help is the answer, but doesn't yet have approval or budget. Researching to build an internal case. Will become your strongest advocate — if you give them the ammunition.",
        channels: ['LinkedIn content', 'Gated research', 'Email subscriptions', 'Peer recommendations'],
        keyInsight:
          "They're not buying from you yet — they're selling you internally. Give them content they can forward to their boss. The firm that produces the best \"case to bring in outside help\" content wins the champion.",
      },
      {
        type: 'Senior buyer sent by a peer or current client',
        intent: '"[Name] said you helped them with something similar. Worth a conversation."',
        description:
          'Arrives warm via referral. But still validates online before reaching out — a weak website, thin team page, or no recognizable case studies can erode the warm intro. Your digital presence has to confirm what the referrer said.',
        channels: ['Firm website', 'LinkedIn', 'Case study pages', 'Team bios'],
        keyInsight:
          "They've already decided to take the call. The digital presence isn't trying to convince them — it's confirming the referrer's judgment so they walk into the meeting confident.",
      },
      {
        type: "Strategic buyer who knows they'll need help eventually",
        intent: '"We\'re not ready yet. But I\'m watching this space and building my shortlist."',
        description:
          'Not ready yet — could be 6 to 24 months out. Following your content, reading your newsletters, watching how your senior team thinks publicly. Will convert when the strategic moment arrives. Consistent expert presence wins.',
        channels: ['LinkedIn thought leadership', 'Firm newsletter', 'Industry events and content', 'Retargeting'],
        keyInsight:
          'They\'re building a mental shortlist of "who I\'d call if this happened." The firm that consistently shows up as a credible thinker in their field is the firm they call when the moment comes — sometimes years later. Don\'t sell. Stay useful and visible.',
      },
    ],
  },

  integrations: {
    eyebrow: 'Works With Your Stack',
    h2: 'Built to work with the tools your firm already runs.',
    h2AccentPhrase: 'already runs.',
    intro:
      "You've already invested in your stack. SuperSymm connects to it — your CRM, your sales engagement tools, your account intelligence platforms, your existing marketing systems — so you're adding a system, not replacing one.",
    // TODO: Confirm with Chad before launch that SuperSymm integrates with each named tool.
    // Using text-tag treatment (no logos) as safe default until integrations are confirmed.
    tools: [
      { name: 'HubSpot' },
      { name: 'Salesforce' },
      { name: 'LinkedIn Sales Navigator' },
      { name: 'Outreach' },
      { name: 'Apollo' },
      { name: 'Clay' },
      { name: '6sense' },
      { name: 'Calendly' },
      { name: 'Mailchimp' },
      { name: 'Google Workspace' },
    ],
    closingLine: "Don't see your tool? Most stacks integrate. We'll confirm yours on the first call.",
  },

  faq: {
    eyebrow: 'Common Questions',
    h2: 'Questions B2B firms ask.',
    h2AccentPhrase: 'B2B firms ask.',
    items: [
      {
        question: 'How does SuperSymm handle our data and our target account list?',
        answer:
          "Your target accounts, your prospect data, and your client information stay yours. We handle data with GDPR and CCPA-aware practices, never share or commingle data between clients, and treat your account targeting strategy as confidential. Where any integration touches sensitive data, we set up the appropriate data processing agreement during onboarding. We can walk through exactly what's in scope on your first call.",
        defaultOpen: true,
      },
      {
        question: 'How does this work with our existing sales team and CRM?',
        answer:
          "It connects to them. SuperSymm doesn't replace your sales motion — it feeds it. Qualified leads route into your CRM with full context, your sales team gets notified with the information they need, and account-level engagement data shows up where your team is already working. The goal is to make your sales team more effective, not give them another tool to learn.",
      },
      {
        question: 'Can the system actually target specific named accounts, or is this just lead-gen?',
        answer:
          'Both. The platform supports account-based campaigns — targeting specific named accounts on LinkedIn and other channels, tracking engagement at the account level across multiple stakeholders, and routing alerts when target accounts heat up. You can run pure ABM, pure inbound, or both at once, depending on your firm\'s mix.',
      },
      {
        question: 'Our sales cycle is 4–6 months. Will the system actually show pipeline impact in a meaningful timeframe?',
        answer:
          "Yes — but the metrics that matter come at different points. Engagement signals (target accounts heating up, content downloads from target titles, LinkedIn engagement) appear within 30–60 days. Qualified meetings appear within 60–120 days. Closed revenue follows your normal sales cycle. The system is built for that timeline; you'll see directional indicators long before the closed-won metric moves.",
      },
      {
        question: 'How long until we see qualified meetings on the calendar?',
        answer:
          "Most engagements produce qualified target-account meetings within the first 90 days, though the timeline depends on your target market, account list, and sales cycle. B2B services is a longer-relationship motion than transactional marketing — the system is designed for that timeline, with leading indicators showing up within the first 30–60 days.",
      },
      {
        question: 'Do we have to create the content ourselves?',
        answer:
          "No. SuperSymm creates the content — informed by your firm's positioning, your senior team's actual expertise, and your target accounts. You review and approve. You don't write the LinkedIn posts, build the case studies, or learn the tools.",
      },
      {
        question: 'How is this different from an ABM platform like 6sense or Demandbase?',
        answer:
          "Those are intent-data platforms — they tell you which accounts are showing buying signals. SuperSymm runs the full marketing function around that intelligence: content, channels, nurture, conversion, and the strategic team to make decisions about it. The intent data is one input. Building the pipeline is the job. You can also run SuperSymm alongside an existing ABM platform — they complement, not replace.",
      },
      {
        question: 'What does it cost?',
        answer:
          "Engagement pricing is custom to your firm's size, target market, and goals. There's no public tier because B2B services firms vary widely in what they need — from a boutique consultancy filling a partner's calendar to a multi-practice firm running multiple ABM motions simultaneously. We'll quote you a number after one call.",
      },
    ],
  },

  cta: {
    h2Lines: ['Spend your time on engagements.', 'Not on chasing leads.'],
    h2AccentPhrase: 'Not on chasing leads.',
    body: 'You built your firm on expertise and outcomes. SuperSymm builds the system that puts that expertise in front of the right accounts — at the right titles, on the right timeline, and without taking your senior team away from the work that closes deals.',
    pricingLine:
      "Engagement pricing is custom to your firm and goals.\nWe'll quote you a number after one call.",
  },
}
