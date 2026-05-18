import type React from 'react'

export interface CapabilitySectionProps {
  id: string
  number: string
  title: React.ReactNode
  body: React.ReactNode
  includes: string[]
  illustration: React.ReactNode
  mirrored?: boolean
}

export interface PillarSectionProps {
  id: string
  number: string
  title: string
  body: string[]
  included?: string[]
  insight?: string
  benefitLabel?: string
  benefitLine?: string
  illustration: React.ReactNode
  mirrored?: boolean
  grey?: boolean
}
