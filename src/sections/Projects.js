import projects from '../data/projects.json';
import './Projects.css';
import ProjectsContainer from '../components/ProjectsContainer';

export default function Projects() {

    const sectionHeader = "My Projects";

    return (
        <div id='projects' className="projects">
            <h2  data-content={sectionHeader} className='projects-section-title'>{sectionHeader}</h2>
            <ProjectsContainer projects={projects}/>
        </div>
    );
};



