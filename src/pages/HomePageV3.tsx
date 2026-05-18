import NavV3 from '@/components/sections/v3/NavV3'
import HeroV3 from '@/components/sections/v3/HeroV3'
import ProblemV3 from '@/components/sections/v3/ProblemV3'
import IntelligentSystemV3 from '@/components/sections/v3/IntelligentSystemV3'
import FourPracticesV3 from '@/components/sections/v3/FourPracticesV3'
import LeadJourneyV3 from '@/components/sections/v3/LeadJourneyV3'
import PartnershipV3 from '@/components/sections/v3/PartnershipV3'
import IndustriesV3 from '@/components/sections/v3/IndustriesV3'
import ProofV3 from '@/components/sections/v3/ProofV3'
import FinalInvitationV3 from '@/components/sections/v3/FinalInvitationV3'
import FooterV3 from '@/components/sections/v3/FooterV3'

export default function HomePageV3() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavV3 />
      <main className="flex-1">
        <HeroV3 />
        <ProblemV3 />
        <IntelligentSystemV3 />
        <FourPracticesV3 />
        <LeadJourneyV3 />
        <PartnershipV3 />
        <IndustriesV3 />
        <ProofV3 />
        <FinalInvitationV3 />
      </main>
      <FooterV3 />
    </div>
  )
}
