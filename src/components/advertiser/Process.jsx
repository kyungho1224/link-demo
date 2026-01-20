import './Process.css'

function Process() {
  const steps = [
    {
      title: '캠페인 등록',
      description: '캠페인 정보와 예산을 설정하세요'
    },
    {
      title: '크리에이터 매칭',
      description: '자동으로 적합한 크리에이터를 추천받으세요'
    },
    {
      title: '콘텐츠 제작',
      description: '크리에이터가 콘텐츠를 제작하고 SNS에 게시합니다'
    },
    {
      title: '성과 확인',
      description: '실시간 대시보드에서 성과를 확인하고 보상을 지급하세요'
    }
  ]

  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title">간편한 운영 프로세스</h2>
        <div className="process-flow">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="process-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
