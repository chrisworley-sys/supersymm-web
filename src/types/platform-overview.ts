export interface PlatformLayer {
  id: string
  name: string
  descriptor: string
  href: string
}

export interface PlatformConnection {
  from: string
  to: string
  label: string
}
