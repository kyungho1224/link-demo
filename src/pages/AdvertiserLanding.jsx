import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/advertiser/Hero'
import ProblemSolving from '../components/advertiser/ProblemSolving'
import ServiceStrengths from '../components/advertiser/ServiceStrengths'
import Process from '../components/advertiser/Process'
import Partners from '../components/advertiser/Partners'
import CTA from '../components/advertiser/CTA'

function AdvertiserLanding() {
  const navigate = useNavigate()

  const menuItems = [
    { id: 'problem', label: '문제 해결' },
    { id: 'strengths', label: '서비스 강점' },
    { id: 'process', label: '프로세스' },
    { id: 'partners', label: '파트너사' }
  ]

  return (
    <div className="advertiser-landing">
      <Header 
        currentRole="advertiser" 
        onRoleChange={() => navigate('/')}
        menuItems={menuItems}
      />
      <Hero />
      <div id="problem"><ProblemSolving /></div>
      <div id="strengths"><ServiceStrengths /></div>
      <div id="process"><Process /></div>
      <div id="partners"><Partners /></div>
      <CTA />
    </div>
  )
}

export default AdvertiserLanding
