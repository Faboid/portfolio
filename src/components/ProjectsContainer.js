import { useRef } from 'react';
import GithubMark from '../components/GithubMark';
import ZoomableImage from '../components/ZoomableImage';
import './ProjectsContainer.css';


export default function ProjectsContainer({ projects }) {

    return (
        <div className='projects-container'>
            {projects.map(item => {
                return <Project key={item.title} project={item}/>;
            })}
        </div>
    );
}

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