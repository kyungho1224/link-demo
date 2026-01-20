import './ProblemStatement.css'

function ProblemStatement() {
  return (
    <section className="problem-statement">
      <div className="container">
        <h2 className="section-title">이런 고민 있으신가요?</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">😔</div>
            <h3>팔로워가 적어서 협찬을 받을 수 없어요</h3>
            <p>기존 광고 시장은 인기 크리에이터에게만 기회가 주어졌습니다.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">💸</div>
            <h3>수익화 방법을 모르겠어요</h3>
            <p>어떻게 하면 내 콘텐츠로 수익을 낼 수 있을까요?</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">⏰</div>
            <h3>복잡한 협상 과정이 부담스러워요</h3>
            <p>광고주와의 소통과 계약 과정이 번거롭습니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement
