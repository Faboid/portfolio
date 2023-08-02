import { useRef } from 'react';
import GithubMark from '../components/GithubMark';
import ZoomableImage from '../components/ZoomableImage';
import projects from '../data/projects.json';
import './Projects.css';

export default function Projects() {

    const sectionHeader = "My Projects";

    return (
        <div id='projects' className="projects">

            <h2  data-content={sectionHeader} className='projects-section-title'>{sectionHeader}</h2>

            <div className='projects-wrapper'>
                {projects.map(item => {
                    return <Project key={item.title} project={item}/>;
                })}
            </div>
        </div>
    );
};

function Project({ project }) {

    const projDiv = useRef(null);

    function updateWhiteCircle(e) {

        const target = projDiv.current;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left + 'px';
        const y = e.clientY - rect.top + 'px';

        target.style.setProperty('--mouse-x', x);
        target.style.setProperty('--mouse-y', y);

    }

    return (
        <div 
            ref={projDiv}
            className='project' 
            onMouseMove={(e) => updateWhiteCircle(e)}
            >

            <div className='project-text-area'>

                <div className='project-header'>
                    <span className='project-title'>{project.title}</span>
                    <GithubMark link={project.github}/>
                </div>

                <p className='project-description'>{project.description}</p>
                
            </div>

            <div className='project-image-area'>
                <ZoomableImage imagePath={project.image} normalStyle="project-image"/>
            </div>

            <div className='project-tech-area'>
                {project.tech.map((element) => {
                    return (
                        <span key={element} className='tech'>{element}</span>
                    );
                })}
            </div>

        </div>
    );
}

