import styles from './HomeStyles.module.css'
import homeImg from '../../assets/me-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'


function Home() {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === 'light' ? sun : moon
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark
  const githubIcon = theme === 'light' ? githubLight : githubDark 

    
  return (
    <section id="home" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={homeImg} 
                alt="Profile picture of Vanessa Fenandez"
            />
            <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt='Color mode icon' 
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Vanessa
                <br />
                Fernandez
            </h1>
            <h2>Junior Developer</h2>
            <span>
                <a href='https://linkedin.com' target='_blank'>
                    <img src={linkedinIcon} alt='Linkedin icon' />
                </a>
                <a href='https://github.com' target='_blank'>
                    <img src={githubIcon} alt='GitHub Icon' />
                </a>
            </span>
            <p className={styles.description}>With a passion for developing</p>  
            <a href={CV} download>
                <button className='hover'>Curriculum</button>
            </a>  
        </div>

    </section>
  )
}
export default Home
