import styles from './HomeStyles.module.css'
import homeImg from '../../assets/me-img.png'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/Curriculum.pdf'
import { useTheme } from '../../common/ThemeContext'


function Home() {
  const { theme } = useTheme()

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
            <p className={styles.description}>
                I am a professional with extensive experience in various sectors, now focused on programming. Passionate about technology and problem-solving, I am continuously learning to enhance my skills as a developer. My background in management and my ability to work in a team help me tackle new challenges in the IT world.
            </p>  
            <a href={CV} download>
                <button className='hover'>Download CV</button>
            </a>  
        </div>

    </section>
  )
}
export default Home
