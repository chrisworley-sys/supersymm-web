import type React from 'react'

export interface TierCardProps {
  tier: 'TIER 1' | 'TIER 2' | 'TIER 3'
  name: string
  who: string
  body: string
  benefitLine: string
}

export interface AudienceProfileProps {
  number: string
  accentColor: string
  title: string
  constraint: string
  body: string
  benefitLine: string
  icon: React.ReactNode
}
