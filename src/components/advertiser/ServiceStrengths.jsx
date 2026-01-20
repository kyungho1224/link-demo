import './ServiceStrengths.css'

function ServiceStrengths() {
  const strengths = [
    {
      icon: '🎯',
      title: '딱 맞는 인플루언서 조합',
      description: '데이터 기반 AI 매칭으로 브랜드와 가장 잘 어울리는 크리에이터를 추천합니다.'
    },
    {
      icon: '✨',
      title: '효율적인 콘텐츠 기획',
      description: '추천된 인플루언서의 콘텐츠를 분석해 최적의 기획안을 자동 생성합니다.'
    },
    {
      icon: '📊',
      title: '성과 중심 정산',
      description: '높은 품질의 콘텐츠를 라이브하고 실시간 성과를 측정하며, 그 결과에 따라 투명하게 정산합니다.'
    },
    {
      icon: '🌍',
      title: '글로벌 마케팅',
      description: '글로벌 크리에이터 풀을 활용해 해외 시장까지 확장할 수 있습니다.'
    },
    {
      icon: '🤖',
      title: '자동화된 프로세스',
      description: '복잡한 섭외와 관리 과정을 자동화하여 시간을 절약하세요.'
    }
  ]

  return (
    <section className="service-strengths">
      <div className="container">
        <h2 className="section-title">LinkPlorer의 강점</h2>
        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-card">
              <div className="strength-icon">{strength.icon}</div>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceStrengths
