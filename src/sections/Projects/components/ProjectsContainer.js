import { useRef, useState } from 'react';
import useRotationFromPosition from '../hooks/useRotationFromPosition';
import ProjectBG from './ProjectBG';
import GithubMark from '../components/GithubMark';
import ZoomableImage from '../components/ZoomableImage';
import './ProjectsContainer.css';

export default function ProjectsContainer({ projects }) {

    const containerDiv = useRef(null);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    function onMouseMove(e) {
        setMouseX(() => e.clientX);
        setMouseY(() => e.clientY);
    }

    return (
        <div 
            className='projects-container' 
            ref={containerDiv}
            onMouseMove={(e) => onMouseMove(e)}
            >

            {projects.map(item => {
                return <Project 
                    key={item.title} 
                    project={item} 
                    getParentRect={() => containerDiv.current.getBoundingClientRect()} 
                    clientX={mouseX}
                    clientY={mouseY}/>;
            })}
        </div>
    );
}

function Project({ project, getParentRect, clientX, clientY }) {

    const projDiv = useRef(null);
    const [rotateX, rotateY] = useRotationFromPosition(() => projDiv.current.getBoundingClientRect(), clientX, clientY, 15, 5);

    return (
        <div className='project border-shadow-rotation' ref={projDiv} style={{
            "--rotate-x": rotateX,
            "--rotate-y": rotateY
        }}>

            <ProjectBG getParentRect={getParentRect} clientX={clientX} clientY={clientY}/>
            <TextArea githubUrl={project.github} title={project.title} description={project.description}/>
            <ImageArea image={project.image}/>
            <TechArea techs={project.tech}/>

        </div>
    );
}

function TextArea({ githubUrl, title, description }) {
    return (
        <div className='project-text-area'>

            <div className='project-header'>
                <span className='project-title text-shadow-rotation'>{title}</span>
                <span className='github-mark-container'>
                    <GithubMark link={githubUrl}/>
                    <span className='github-mark-shadows'></span>
                </span>
            </div>

            <p className='project-description text-shadow-rotation'>{description}</p>
            
        </div>  
    );
}

function ImageArea({ image }) {
    return (
        <div className='project-image-area'>
            <ZoomableImage imagePath={image} normalStyle="project-image border-shadow-rotation"/>
        </div>
    );
}

function TechArea({ techs }) {
    return (
        <div className='project-tech-area'>
            {techs.map((element) => {
                return (
                    <span key={element} className='tech text-shadow-rotation'>{element}</span>
                );
            })}
        </div>  
    );
}