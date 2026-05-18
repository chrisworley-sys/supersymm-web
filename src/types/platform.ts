export interface BreadcrumbItem {
  label: string
  href: string
}

export interface ComparisonTableConfig {
  headers: string[]
  rows: string[][]
  highlightLastColumn?: boolean
}
