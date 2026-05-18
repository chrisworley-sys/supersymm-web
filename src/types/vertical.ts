export interface VerticalSEO {
  title: string
  description: string
  primaryKeyword: string
  ogImage?: string
  canonicalPath: string
  audienceType: string
}

export interface VerticalHero {
  breadcrumbVertical: string
  eyebrow: string
  h1Lines: string[]
  h1AccentPhrase: string
  framingParagraph: string
  heroImage?: string
}

export interface VerticalInsight {
  statement: string
  accentPhrase: string
}

export interface MethodologyBlock {
  number: '01' | '02' | '03'
  headline: string
  body: string
}

export interface VerticalMethodology {
  eyebrow: string
  h2: string
  h2AccentPhrase?: string
  intro: string
  blocks: [MethodologyBlock, MethodologyBlock, MethodologyBlock]
}

export interface CapabilityBlock {
  benefitHeadline: string
  featureSubLabel: string
  body: string
}

export interface VerticalCapabilities {
  eyebrow: string
  h2: string
  h2AccentPhrase?: string
  intro: string
  capabilities: [CapabilityBlock, CapabilityBlock, CapabilityBlock, CapabilityBlock, CapabilityBlock]
  engagementParagraph?: string
  backgroundImages?: string[]
}

export interface IntegrationTool {
  name: string
  logoUrl?: string
}

export interface VerticalIntegrations {
  eyebrow: string
  h2: string
  h2AccentPhrase?: string
  intro: string
  tools: IntegrationTool[]
  closingLine: string
}

export interface FAQItem {
  question: string
  answer: string
  defaultOpen?: boolean
}

export interface VerticalFAQSection {
  eyebrow: string
  h2: string
  h2AccentPhrase?: string
  items: FAQItem[]
}

export interface VerticalCTA {
  h2Lines: string[]
  h2AccentPhrase: string
  body: string
  pricingLine: string
}

export interface VerticalConfig {
  seo: VerticalSEO
  hero: VerticalHero
  insight: VerticalInsight
  methodology: VerticalMethodology
  capabilities: VerticalCapabilities
  integrations: VerticalIntegrations
  faq: VerticalFAQSection
  cta: VerticalCTA
}
