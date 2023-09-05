import projects from '../../Data/projects.json';
import { ProjectCard } from './ProjectCard';
import './Projects.css'

const Projects = () => {
    return (
        <section className="container" id="projects">
      <h2 className="title">Projects</h2>
      <div className={projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
    )
}

export default Projects