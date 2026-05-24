// Uses VerticalPage (Option A) — config drives all section rendering.
// statsSection renders as standalone dark section; personas renders after capabilities.
import VerticalPage from '@/components/vertical/VerticalPage'
import { legalConfig } from '@/content/verticals/legal'

export default function LegalPage() {
  return <VerticalPage config={legalConfig} />
}
