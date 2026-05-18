import Navbar from '@/components/common/Navbar'
import HeroV2 from '@/components/sections/v2/HeroV2'
import ProblemSection from '@/components/sections/v2/ProblemSection'
import PlatformSection from '@/components/sections/v2/PlatformSection'
import FoundationSection from '@/components/sections/v2/FoundationSection'
import LeadJourney from '@/components/sections/v2/LeadJourney'
import HowWeWork from '@/components/sections/v2/HowWeWork'
import IndustriesSection from '@/components/sections/v2/IndustriesSection'
import ServicesSection from '@/components/sections/v2/ServicesSection'
import FinalInvitation from '@/components/sections/v2/FinalInvitation'
import FooterV2 from '@/components/sections/v2/FooterV2'

const panels = [
  ProblemSection,
  PlatformSection,
  FoundationSection,
  LeadJourney,
  HowWeWork,
  IndustriesSection,
  ServicesSection,
  FinalInvitation,
] as const

export default function HomePageV2() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroV2 />
        {panels.map((Section, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              zIndex: i + 2,
              marginTop: '-28px',
              borderRadius: '28px 28px 0 0',
              overflow: 'clip',
              boxShadow: '0 -8px 48px rgba(0,0,0,0.22)',
            }}
          >
            <Section />
          </div>
        ))}
      </main>
      <FooterV2 />
    </div>
  )
}
