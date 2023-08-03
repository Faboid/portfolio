import { useEffect, useRef, useState } from 'react';
import GithubMark from '../components/GithubMark';
import ZoomableImage from '../components/ZoomableImage';
import './ProjectsContainer.css';


export default function ProjectsContainer({ projects }) {

    const containerDiv = useRef(null);
    const [x, setX] = useState(-2000);
    const [y, setY] = useState(-2000);

    function onMouseMove(e) {

        const target = containerDiv.current;
        const rect = target.getBoundingClientRect();

        setX(() => e.clientX - rect.left);
        setY(() => e.clientY - rect.top);

    }

    return (
        <div 
            className='projects-container' 
            ref={containerDiv}
            onMouseMove={(e) => onMouseMove(e)}
            >

            {projects.map(item => {
                return <Project key={item.title} project={item} getParentRect={() => containerDiv.current.getBoundingClientRect()} lightX={x} lightY={y}/>;
            })}
        </div>
    );
}

function Project({ project, getParentRect, lightX, lightY }) {

    const projLight = useRef(null);

    useEffect(() => {
        const target = projLight.current;
        const rect = target.getBoundingClientRect();
        const parent = getParentRect();

        //calc
        const xDiff = rect.left - parent.left;
        const yDiff = rect.top - parent.top;
        const x = lightX - xDiff + 'px';
        const y = lightY - yDiff + 'px';

        target.style.setProperty('--mouse-x', x);
        target.style.setProperty('--mouse-y', y);

    }, [getParentRect, lightX, lightY]);

    return (
        <div className='project'>

            <div className='project-bg'>
                <div ref={projLight} className='project-light'></div>
            </div>

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