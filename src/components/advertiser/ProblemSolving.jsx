import './ProblemSolving.css'

function ProblemSolving() {
  return (
    <section className="problem-solving">
      <div className="container">
        <h2 className="section-title">기존 마케팅의 문제점</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">💸</div>
            <h3>비싼 원고료</h3>
            <p>인기 크리에이터의 높은 협찬비로 예산이 부족합니다.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">❓</div>
            <h3>불투명한 비용</h3>
            <p>실제 성과와 관계없이 고정된 비용을 지불해야 합니다.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">⏳</div>
            <h3>복잡한 섭외 과정</h3>
            <p>크리에이터를 찾고 협상하는 과정이 번거롭습니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolving
