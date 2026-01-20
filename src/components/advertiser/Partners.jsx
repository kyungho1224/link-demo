import './Partners.css'

function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <h2 className="section-title">이미 많은 기업이 선택했습니다</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">등록 기업</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">진행 캠페인</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">참여 크리에이터</div>
          </div>
        </div>
        <div className="partner-logos">
          <div className="logo-placeholder">기업 로고 1</div>
          <div className="logo-placeholder">기업 로고 2</div>
          <div className="logo-placeholder">기업 로고 3</div>
          <div className="logo-placeholder">기업 로고 4</div>
        </div>
      </div>
    </section>
  )
}

export default Partners
