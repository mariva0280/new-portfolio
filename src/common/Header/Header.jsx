import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import styles from './HeaderStyles.module.css'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu =()=> {
    setIsMenuOpen(!isMenuOpen)
  }

  const getNextPath =()=> {
    switch (location.pathname) {
      case '/':
        return { path: '/projects', name: 'Projects'}
      case'/projects':
        return { path: '/skills', name: 'Skills'}
      case '/skills':
        return { path: '/contact', name: 'Contact'}
      case '/contact':
        return { path: '/', name: 'Home'}      
      default:
        return { path: '/', name: 'Home'}
    }
  }

  const getPrevPath=()=> {
    switch (location.pathname) {
      case '/':
        return { path: '/contact', name: 'Contact'}
      case '/projects':
        return { path: '/', name: 'Home'}
      case '/skills':
        return { path: '/projects', name: 'Projects'}
      case '/contact':
        return { path: '/skills', name: 'Skills'}
      default:
        return { path: '/', name: 'Home'}   
    }
  }

  const next = getNextPath()
  const prev = getPrevPath()

  return (
    <section id='header' className={styles.container}>
      <Link to={prev.path} className={`${styles.navLink} ${styles.prev}`}>
        {prev.name}
      </Link>
      <div className={styles.nav}>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          <img src={theme === 'light' ? sun : moon} alt='Toogle theme'/>
        </button>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
          <Link to='/' onClick={toggleMenu}>Home</Link>
          <Link to='/projects' onClick={toggleMenu}>Projects</Link>
          <Link to='/skills' onClick={toggleMenu}>Skills</Link>
          <Link to='/contact' onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
      <Link to={next.path} className={`${styles.navLink} ${styles.next}`}>
        {next.name}
      </Link>
    </section>        
  )

}

export default Header
