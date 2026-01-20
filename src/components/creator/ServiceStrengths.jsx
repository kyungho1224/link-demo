import './ServiceStrengths.css'

function ServiceStrengths() {
  const strengths = [
    {
      icon: '🚀',
      title: '제한 없는 참여',
      description: '팔로워 수와 관계없이 누구나 캠페인에 참여할 수 있습니다.'
    },
    {
      icon: '📊',
      title: '성과 중심 정산',
      description: '높은 품질의 콘텐츠를 라이브하고 실시간 성과를 측정하며, 그 결과에 따라 투명하게 정산받습니다.'
    },
    {
      icon: '⚡',
      title: '간편한 프로세스',
      description: '복잡한 협상 없이 간단하게 캠페인에 참여하세요.'
    },
    {
      icon: '🌍',
      title: '다국어 지원',
      description: '글로벌 서비스로 다양한 언어를 지원하여 전 세계 캠페인에 참여하세요.'
    },
    {
      icon: '🤖',
      title: 'AI를 통한 페르소나 제공',
      description: '당신의 SNS를 AI가 분석하여 페르소나를 제공합니다. 이를 통해 광고주에게 더 매력적으로 어필할 수 있습니다.'
    },
    {
      icon: '✨',
      title: '효율적인 콘텐츠 기획',
      description: 'AI가 당신의 콘텐츠를 분석해 최적의 기획안을 자동 생성하여 더 효과적인 콘텐츠를 제작할 수 있습니다.'
    }
  ]

  return (
    <section className="service-strengths">
      <div className="container">
        <h2 className="section-title">왜 LinkPlorer인가요?</h2>
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
