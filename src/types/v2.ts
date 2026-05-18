export interface ServiceItem {
  id: number
  number: string
  title: string
  tagline: string
  body: string
  colSpan: 5 | 7 | 12
  approach?: string[]
  outputs?: string[]
}

export interface PillarItem {
  eyebrow: string
  h3Lines: string[]
  body: string[]
}

export interface JourneyStage {
  day: string
  title: string
  prospect: string
  system: string
}

export interface ProcessStep {
  number: string
  label: string
  description: string
}

export interface IndustryCard {
  name: string
  badge: string | null
  body: string
  link: string
}
