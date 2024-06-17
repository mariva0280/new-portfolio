import styles from './ProjectsStyles.module.css'
import hospital from '../../assets/hospital.png'
import car from '../../assets/concesionario.png'
import game from '../../assets/juego.png'
import guess from '../../assets/invitados.png'
import api from '../../assets/openapi.png'
import ProjectCard from './ProjectCard'

function Projects() {    
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={hospital} 
                link='https://github.com/mariva0280/CitasHospital'
                h3='Hospital'
                p='Gestión citas hospital'    
            />

            <ProjectCard 
                src={car} 
                link='https://github.com/mariva0280/vehiculos'
                h3='Concesionario'
                p='Gestión concesionario'    
            />

            <ProjectCard 
                src={api} 
                link='https://github.com/mariva0280/openapiportfolio'
                h3='Open Api'
                p='Diseño Open Api'  
            />

            <ProjectCard 
                src={guess} 
                link='https://github.com/mariva0280/Challenge'
                h3='Invitados'
                p='Gestión invitados'
            />

            <ProjectCard 
                src={game} 
                link='https://github.com/mariva0280/juegoArkanoid'
                h3='Juego'
                p='App juego (en construcción)'  
            />
        </div>
    </section>
  )
}
export default Projects
