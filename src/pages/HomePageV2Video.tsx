import Navbar from '@/components/common/Navbar'
import HeroV2Video from '@/components/sections/v2/HeroV2Video'
import PlatformCallouts from '@/components/sections/v2/PlatformCallouts'
import ProblemSection from '@/components/sections/v2/ProblemSection'
import PlatformTeaser from '@/components/sections/v2/PlatformTeaser'
import FoundationSection from '@/components/sections/v2/FoundationSection'
import LeadJourneyTeaser from '@/components/sections/v2/LeadJourneyTeaser'
import HowWeWork from '@/components/sections/v2/HowWeWork'
import IndustriesSection from '@/components/sections/v2/IndustriesSection'
import ServicesSection from '@/components/sections/v2/ServicesSection'
import FinalInvitation from '@/components/sections/v2/FinalInvitation'
import FooterV2 from '@/components/sections/v2/FooterV2'

const panels = [
  ProblemSection,
  PlatformTeaser,
  FoundationSection,
  LeadJourneyTeaser,
  HowWeWork,
  IndustriesSection,
  ServicesSection,
  FinalInvitation,
] as const

export default function HomePageV2Video() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroV2Video />
        {/* Callouts sit flush below the hero with no card stacking */}
        <PlatformCallouts />
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
