import { useState } from 'react'
import { useTheme } from '../ThemeContext'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import styles from './HeaderStyles.module.css'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <section id='header' className={styles.container}>
      <div className={styles.nav}>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.     showMenu   : ''}`}>
          <li>
            <a href="#home" className= {styles.navLink} onClick={handleMenuItemClick}>About me</a>
          </li>
          <li>
            <a href="#skills" className= {styles.navLink} onClick={handleMenuItemClick}>Skills</a>
          </li>
          <li>
            <a href="#projects" className= {styles.navLink} onClick={handleMenuItemClick}>Projects</a>
          </li>
          <li>
            <a href="#contact" className= {styles.navLink} onClick={handleMenuItemClick}>Contact</a>
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
