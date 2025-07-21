import { useEffect } from 'react'
import styles from './AllProjectsStyles.module.css'
import projectData from './ProjectData'
import ProjectCard from './ProjectCard'

function AllProjects() {
    useEffect(() => {
        console.log("AllProjects rendered");
      }, []);
    
    return (
        <section id='all-projects' className={styles.container}>
            <h1 className='sectionTitle'> Projects</h1>
            <div className={styles.projectsContainer}>
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        src={project.image}
                        link={project.githubLink}
                        title={project.title}
                        shortDescription={project.shortDescription}
                        summary={project.summary}
                        isEven={index % 2 === 0}
                    />    
                ))}
            </div>
        </section>
    )
}
export default AllProjects