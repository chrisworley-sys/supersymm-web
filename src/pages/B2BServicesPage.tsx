// Uses VerticalPage (Option A) — config drives all section rendering.
// statsSection renders as standalone dark section; personas renders after capabilities.
// No compliance capability on this page — capability 5 is Account Intelligence (intentional).
import VerticalPage from '@/components/vertical/VerticalPage'
import { b2bServicesConfig } from '@/content/verticals/b2bServices'

export default function B2BServicesPage() {
  return <VerticalPage config={b2bServicesConfig} />
}
