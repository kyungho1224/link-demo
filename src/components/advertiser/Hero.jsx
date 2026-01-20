import './Hero.css'

function Hero() {
  return (
    <section className="hero advertiser-hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            성과 없는 마케팅,<br />
            <span className="highlight">이제는 끝내세요</span>
          </h1>
          <p className="hero-subtitle">
            투명한 비용과 명확한 성과로<br />
            효율적인 마케팅을 경험하세요.
          </p>
          <div className="hero-buttons">
            <button className="hero-cta primary">기업회원 가입</button>
            <button className="hero-cta secondary">무료 상담 신청</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <span>광고주 이미지</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
