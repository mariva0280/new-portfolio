import { useState } from 'react'
import { useTheme } from '../ThemeContext'
import useNavigateAndScroll from '../../hooks/useNavigateAndScroll'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import styles from './HeaderStyles.module.css'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollToSection = useNavigateAndScroll()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = (section) => {
    scrollToSection(section)
    setIsMenuOpen(false)
  }

  return (
    <section id='header' className={styles.container}>
      <div className={styles.nav}>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.     showMenu   : ''}`}>
          <li>
            <button className= {styles.navLink} onClick={ () => handleMenuItemClick('home')}>About me</button>
          </li>
          <li>
            <button className= {styles.navLink} onClick={ () => handleMenuItemClick('skills')}>Skills</button>
          </li>
          <li>
            <button className= {styles.navLink} onClick={ () => handleMenuItemClick('projects')}>Projects</button>
          </li>
          <li>
            <button className= {styles.navLink} onClick={ () => handleMenuItemClick('contact')}>Contact</button>
          </li>
        </ul>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          <img src={theme === 'light' ? sun : moon} alt='Toogle theme'/>
        </button>
        <div className={styles.navToggle} onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>  
    </section>        
  )

}

export default Header
