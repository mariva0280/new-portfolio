import { useState } from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/" className= {styles.navLink} onClick={handleMenuItemClick}>About me</Link>
          </li>
          <li>
            <Link to="#skills" className= {styles.navLink} onClick={handleMenuItemClick}>Skills</Link>
          </li>
          <li>
            <Link to="#projects" className= {styles.navLink} onClick={handleMenuItemClick}>Projects</Link>
          </li>
          <li>
            <Link to="#contact" className= {styles.navLink} onClick={handleMenuItemClick}>Contact</Link>
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
