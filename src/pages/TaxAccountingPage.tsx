// Uses VerticalPage (Option A) — config drives all section rendering.
// statsSection renders as standalone dark section; personas renders after capabilities.
import VerticalPage from '@/components/vertical/VerticalPage'
import { taxAccountingConfig } from '@/content/verticals/taxAccounting'

export default function TaxAccountingPage() {
  return <VerticalPage config={taxAccountingConfig} />
}
