import './Hero.css'

function Hero() {
  return (
    <section className="hero creator-hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            팔로워 수가 적어도<br />
            <span className="highlight">수익을 만들 수 있어요</span>
          </h1>
          <p className="hero-subtitle">
            협찬은 남의 일이라고 생각했나요?<br />
            이제는 누구나 참여할 수 있는 새로운 광고 시장입니다.
          </p>
          <button className="hero-cta">지금 바로 시작하기</button>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <span>크리에이터 이미지</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
