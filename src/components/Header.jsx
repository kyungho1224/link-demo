import { useEffect, useState } from 'react'
import './Header.css'

function Header({ currentRole, onRoleChange, menuItems = [] }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1>LINKPLORER</h1>
        </div>
        <nav className="nav-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="nav-item"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="header-right">
          <div className="role-toggle">
            <button
              className={`toggle-btn ${currentRole === 'creator' ? 'active' : ''}`}
              onClick={currentRole === 'creator' ? undefined : onRoleChange}
            >
              크리에이터
            </button>
            <button
              className={`toggle-btn ${currentRole === 'advertiser' ? 'active' : ''}`}
              onClick={currentRole === 'advertiser' ? undefined : onRoleChange}
            >
              광고주
            </button>
          </div>
          <button className="login-btn">로그인</button>
        </div>
      </div>
    </header>
  )
}

export default Header
