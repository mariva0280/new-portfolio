import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import styles from './HeaderStyles.module.css'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const themeIcon = theme === 'light' ? sun : moon
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navArrowStyle = {
    color: theme === 'light' ? 'var(--text-color)' : 'white',
    cursor: 'pointer' 
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getNextPath = () => {
    switch (location.pathname) {
      case '/':
        return '/projects'
      case '/projects':
        return '/skills'
      case '/skills':
        return '/contact'
      case '/contact':
        return '/'
      default:
        return '/'
    }
  }

  const getPrevPath = () => {
    switch (location.pathname) {
      case '/':
        return '/contact'
      case '/projects':
        return '/'
      case '/skills':
        return '/projects'
      case '/contact':
        return '/skills'
      default:
        return '/'
    }
  }

  return (
    <section id="header" className={styles.container}>
      <Link to={getPrevPath()} className={`${styles.navArrow} ${styles.prev}`} style={navArrowStyle}>
        {'<'}
        <span className={styles.navText}>Go Back</span>
      </Link>
      <div className={styles.nav}>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          <img src={themeIcon} alt="Toggle theme" />
        </button>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          style={{ color: theme === 'light' ? 'var(--text-color)' : 'white' }}
        >
          &#9776;
        </button>
        <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/skills" onClick={toggleMenu}>Skills</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
      <Link to={getNextPath()} className={`${styles.navArrow} ${styles.next}`} style={navArrowStyle}>
        {'>'}
        <span className={styles.navText}>Next Section</span>
      </Link>
    </section>
  );
}

export default Header
