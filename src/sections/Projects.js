import projects from '../data/projects.json';
import './Projects.css';
import ProjectsContainer from '../components/ProjectsContainer';
import Spacer from '../components/Spacer';

export default function Projects() {

    const sectionHeader = "My Projects";

    return (
        <div id='projects' className="projects">
            <h2  data-content={sectionHeader} className='projects-section-title'>{sectionHeader}</h2>
            <Spacer height={"5vh"}/>
            <ProjectsContainer projects={projects}/>
        </div>
    );
};



