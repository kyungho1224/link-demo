import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/creator/Hero'
import Stats from '../components/creator/Stats'
import CampaignList from '../components/creator/CampaignList'
import BrandLogos from '../components/creator/BrandLogos'
import ProblemStatement from '../components/creator/ProblemStatement'
import ServiceStrengths from '../components/creator/ServiceStrengths'
import HowToUse from '../components/creator/HowToUse'
import SuccessStories from '../components/creator/SuccessStories'
import CTA from '../components/creator/CTA'

function CreatorLanding() {
  const navigate = useNavigate()

  const menuItems = [
    { id: 'campaigns', label: '캠페인' },
    { id: 'problem', label: '문제 제기' },
    { id: 'strengths', label: '서비스 강점' },
    { id: 'howto', label: '이용 방법' },
    { id: 'stories', label: '성공 사례' }
  ]

  return (
    <div className="creator-landing">
      <Header 
        currentRole="creator" 
        onRoleChange={() => navigate('/biz')}
        menuItems={menuItems}
      />
      <Hero />
      {/* <Stats /> */}
      <div id="campaigns"><CampaignList /></div>
      <BrandLogos />
      <div id="problem"><ProblemStatement /></div>
      <div id="strengths"><ServiceStrengths /></div>
      <div id="howto"><HowToUse /></div>
      <div id="stories"><SuccessStories /></div>
      <CTA />
    </div>
  )
}

export default CreatorLanding
