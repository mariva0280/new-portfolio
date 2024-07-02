//import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import styles from './HeaderStyles.module.css'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const getNextPath =()=> {
    if(location.pathname === '/projects') {
      return { path: '/', name: 'Home'}
    } else {
      return { path: '/projects', name: 'Projects'}
    }
  }
  const next = getNextPath()

  return (
    <section id='header' className={styles.container}>
      <div className={styles.nav}>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          <img src={theme === 'light' ? sun : moon} alt='Toogle theme'/>
        </button>
      </div>
      <Link to={next.path} className={`${styles.navLink} ${styles.next}`}>
        {next.name}
      </Link>
    </section>        
  )

}

export default Header
