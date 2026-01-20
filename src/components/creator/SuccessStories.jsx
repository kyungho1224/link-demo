import './SuccessStories.css'

function SuccessStories() {
  const stories = [
    {
      name: '김크리에이터',
      followers: '1,000명',
      earnings: '50만원',
      quote: '팔로워가 적어도 꾸준히 수익을 낼 수 있어서 좋아요!'
    },
    {
      name: '이인플루언서',
      followers: '5,000명',
      earnings: '200만원',
      quote: '성과에 따라 보상을 받아서 공정하다고 느껴요.'
    },
    {
      name: '박콘텐츠',
      followers: '2,500명',
      earnings: '120만원',
      quote: '프로세스가 간단해서 부담 없이 참여할 수 있어요.'
    }
  ]

  return (
    <section className="success-stories">
      <div className="container">
        <h2 className="section-title">실제 크리에이터들의 이야기</h2>
        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-header">
                <div className="story-avatar">{story.name[0]}</div>
                <div className="story-info">
                  <h3>{story.name}</h3>
                  <p className="story-followers">팔로워 {story.followers}</p>
                </div>
              </div>
              <div className="story-earnings">
                <span className="earnings-label">누적 수익</span>
                <span className="earnings-amount">{story.earnings}</span>
              </div>
              <p className="story-quote">"{story.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
