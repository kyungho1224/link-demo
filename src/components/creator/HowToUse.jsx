import './HowToUse.css'

function HowToUse() {
  const steps = [
    {
      number: '1',
      title: '회원가입 및 SNS 연동',
      description: '간단한 정보 입력 후 SNS 계정을 연동하세요'
    },
    {
      number: '2',
      title: '캠페인 선택 및 계약',
      description: '마음에 드는 캠페인을 선택하고 목표 수치를 설정하세요'
    },
    {
      number: '3',
      title: '콘텐츠 제작 및 성과 정산',
      description: 'SNS에 콘텐츠를 올리고 성과에 따라 자동으로 정산받으세요'
    }
  ]

  return (
    <section className="how-to-use">
      <div className="container">
        <h2 className="section-title">3단계로 시작하세요</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToUse
