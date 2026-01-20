import './BrandLogos.css'

function BrandLogos() {
  const brands = [
    '스타벅스',
    '나이키',
    '삼성전자',
    '올리브영',
    '배달의민족',
    '넷플릭스',
    '코카콜라',
    '아디다스',
    'LG전자',
    '롯데',
    '신세계',
    '현대'
  ]

  return (
    <section className="brand-logos">
      <div className="container">
        <h2 className="section-title">함께하는 브랜드</h2>
        <p className="section-subtitle">다양한 글로벌 브랜드와 함께 성장하세요</p>
        <div className="logos-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-logo">
              <div className="logo-placeholder">{brand}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandLogos
