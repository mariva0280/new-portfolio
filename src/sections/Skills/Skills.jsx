import styles from './SkillsStyles.module.css'
import checkDark from '../../assets/checkmark-dark.svg'
import checkLigth from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
    const { theme } = useTheme()
    const check = theme === 'light' ? checkLigth : checkDark

    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
               <SkillList src={check} skill='HTML'/>
               <SkillList src={check} skill='CSS'/>
               <SkillList src={check} skill='JavaScript'/>
               <SkillList src={check} skill='Node'/>
               <SkillList src={check} skill='Java'/>
            </div>
            <hr />
            <div className={styles.skillList}>
               <SkillList src={check} skill='Tailwind CSS'/>
               <SkillList src={check} skill='SpringBoot'/>
               <SkillList src={check} skill='React'/>
               
            </div>
            <hr />
            <div className={styles.skillList}>
               <SkillList src={check} skill='GitHub'/>
               <SkillList src={check} skill='Api Designer'/>
               <SkillList src={check} skill='MySql'/>
               <SkillList src={check} skill='Mongo DB'/>
            </div>
        </section>
    )
}

export default Skills