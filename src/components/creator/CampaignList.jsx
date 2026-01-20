import './CampaignList.css'

function CampaignList() {
  const campaigns = [
    {
      id: 1,
      brand: '스타벅스',
      title: '신메뉴 리뷰 캠페인',
      reward: '최대 50만원',
      participants: 120,
      status: '모집중',
      deadline: '2024.12.31',
      category: '푸드&드링크'
    },
    {
      id: 2,
      brand: '나이키',
      title: '운동화 체험 후기',
      reward: '최대 100만원',
      participants: 85,
      status: '진행중',
      deadline: '2024.12.25',
      category: '패션&뷰티'
    },
    {
      id: 3,
      brand: '삼성전자',
      title: '갤럭시 버즈 프로 리뷰',
      reward: '최대 80만원',
      participants: 200,
      status: '모집중',
      deadline: '2025.01.15',
      category: '테크&가전'
    },
    {
      id: 4,
      brand: '올리브영',
      title: '뷰티 제품 체험단',
      reward: '최대 30만원',
      participants: 350,
      status: '진행중',
      deadline: '2024.12.20',
      category: '패션&뷰티'
    },
    {
      id: 5,
      brand: '배달의민족',
      title: '배달 앱 사용 후기',
      reward: '최대 40만원',
      participants: 180,
      status: '모집중',
      deadline: '2025.01.10',
      category: '라이프스타일'
    },
    {
      id: 6,
      brand: '넷플릭스',
      title: '드라마 시청 후기',
      reward: '최대 60만원',
      participants: 95,
      status: '진행중',
      deadline: '2024.12.28',
      category: '엔터테인먼트'
    }
  ]

  return (
    <section className="campaign-list">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">진행중인 캠페인</h2>
          <p className="section-subtitle">지금 바로 참여할 수 있는 캠페인을 확인하세요</p>
        </div>
        <div className="campaigns-grid">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="campaign-card">
              <div className="campaign-header">
                <div className="campaign-brand">{campaign.brand}</div>
                <div className={`campaign-status ${campaign.status === '모집중' ? 'recruiting' : 'ongoing'}`}>
                  {campaign.status}
                </div>
              </div>
              <h3 className="campaign-title">{campaign.title}</h3>
              <div className="campaign-category">{campaign.category}</div>
              <div className="campaign-info">
                <div className="info-item">
                  <span className="info-label">보상</span>
                  <span className="info-value reward">{campaign.reward}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">참여자</span>
                  <span className="info-value">{campaign.participants}명</span>
                </div>
                <div className="info-item">
                  <span className="info-label">마감일</span>
                  <span className="info-value">{campaign.deadline}</span>
                </div>
              </div>
              <button className="campaign-button">참여하기</button>
            </div>
          ))}
        </div>
        <div className="view-more">
          <button className="view-more-button">더 많은 캠페인 보기</button>
        </div>
      </div>
    </section>
  )
}

export default CampaignList
