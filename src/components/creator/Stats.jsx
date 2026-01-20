import './Stats.css'

function Stats() {
  const stats = [
    {
      number: '50,000+',
      label: '참여 크리에이터',
      icon: '👥'
    },
    {
      number: '100억원+',
      label: '누적 정산 금액',
      icon: '💰'
    },
    {
      number: '10,000+',
      label: '진행 캠페인',
      icon: '📢'
    },
    {
      number: '500+',
      label: '제휴 브랜드',
      icon: '🏢'
    }
  ]

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
