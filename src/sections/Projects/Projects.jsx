import styles from './ProjectsStyles.module.css'
import projectData from './ProjectData'
import { Link } from 'react-router-dom'

function Projects() {    

  const mainProjects = projectData.filter(project => project.showInMain)

  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            {mainProjects.map((project, index) => (
              <div key={project.id} className={`${styles.   ProjectCard} ${index % 2 === 0 ? styles.even : styles.odd}`}>
                <a href={project.githubLink} target='_blank' className={styles.imageWrapper}>
                  <img className={`${styles.projectImage} hover`} src={project.image} alt={`${project.title} logo`}/>
                </a>
                <div className={styles.projectDetails}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
              </div>
            ))}    
        </div>
        <Link to="/all-projects" className={styles.viewMore}>
            Ver más
        </Link>
    </section>
  )
}
export default Projects
