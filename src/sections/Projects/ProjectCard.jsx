import styles from './ProjectsStyles.module.css'
import PropTypes from 'prop-types'

function ProjectCard({ src, link, title, shortDescription, summary, isEven }){
    return (
        <div className={`${styles.projectCard} ${isEven ? styles.even : styles.odd}`}>
            <a href={link} target='_blank' className={styles.imageWrapper}>
                <img className={`${styles.projectImage} hover`} src={src} alt={`${title} logo`}/>
            </a>
            <div className={styles.projectDetails}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.shortDescription}>{shortDescription}</p>
                <p className={styles.summary}>{summary}</p>
            </div>
        </div>        
    )
}

ProjectCard.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    isEven: PropTypes.bool.isRequired,
}


export default ProjectCard