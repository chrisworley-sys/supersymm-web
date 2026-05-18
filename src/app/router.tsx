import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import PlatformPage from '@/pages/PlatformPage'
import LeadGenerationPage from '@/pages/LeadGenerationPage'
import MarketingAutomationPage from '@/pages/MarketingAutomationPage'
import SolutionsPage from '@/pages/SolutionsPage'
import FinancialAdvisorsPage from '@/pages/FinancialAdvisorsPage'
import HealthcarePage from '@/pages/HealthcarePage'
import PricingPage from '@/pages/PricingPage'
import AboutPage from '@/pages/AboutPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import NotFoundPage from '@/pages/NotFoundPage'
import HomePageV2 from '@/pages/HomePageV2'
import HomePageV2Video from '@/pages/HomePageV2Video'
//import HomePageV3 from '@/pages/HomePageV3'
import BusinessIntelligencePage from '@/pages/BusinessIntelligencePage'
import CompliancePage from '@/pages/CompliancePage'
import DemoPage from '@/pages/DemoPage'
import ContactPage from '@/pages/ContactPage'


export const router = createBrowserRouter([
  {
    path: '/',
element: <App />,
children: [
  { index: true, element: <HomePageV2Video /> },
  { path: 'platform', element: <PlatformPage /> },
  { path: 'platform/business-intelligence', element: <BusinessIntelligencePage /> },
  { path: 'platform/lead-generation', element: <LeadGenerationPage /> },
  { path: 'platform/marketing-automation', element: <MarketingAutomationPage /> },
  { path: 'platform/compliance', element: <CompliancePage /> },
  { path: 'solutions', element: <SolutionsPage /> },
  { path: 'solutions/financial-advisors', element: <FinancialAdvisorsPage /> },
  { path: 'solutions/healthcare', element: <HealthcarePage /> },
  { path: 'pricing', element: <PricingPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'privacy', element: <PrivacyPage /> },
  { path: 'terms', element: <TermsPage /> },
  { path: '*', element: <NotFoundPage /> },
],
  },
  { path: '/demo', element: <DemoPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/v2', element: <HomePageV2 /> },
  { path: '/v2-video', element: <HomePageV2Video /> },
  //{ path: '/v3', element: <HomePageV3 /> },
])
