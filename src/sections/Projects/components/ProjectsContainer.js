import { useRef, useState } from 'react';
import useRotationFromPosition from '../hooks/useRotationFromPosition';
import ProjectBG from './ProjectBG';
import GithubMark from '../components/GithubMark';
import ZoomableImage from '../components/ZoomableImage';
import './ProjectsContainer.css';
import useCooldown from '../hooks/useCooldown';

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
                return <ProjectHitScan 
                    key={item.title} 
                    project={item} 
                    getParentRect={() => containerDiv.current.getBoundingClientRect()} 
                    clientX={mouseX}
                    clientY={mouseY}/>;
            })}
        </div>
    );
}

function ProjectHitScan({ project, getParentRect, clientX, clientY }) {
    
    const hitscanRef = useRef(null);
    const [rawRotateX, rawRotateY] = useRotationFromPosition(() => hitscanRef.current.getBoundingClientRect(), clientX, clientY, 15, 5);
    
    return (
        <div className='hitscan' ref={hitscanRef}>
            <Project
                project={project}
                getParentRect={getParentRect}
                clientX={clientX}
                clientY={clientY}
                rawRotateX={rawRotateX}
                rawRotateY={rawRotateY}
                />
        </div>  
    );
    
}

function Project({ project, getParentRect, clientX, clientY, rawRotateX, rawRotateY }) {

    const [turned, setTurned] = useState(false);
    const turningSpeed = 1000;
    const turning = useCooldown(turned, Math.max(200, turningSpeed - 100));
    const projClassName = "project border-shadow-rotation " + (turned ? "turned" : "");    
    
    let style;
    if(turning) {
        style = {
            "transition": "transform " + turningSpeed + 'ms',
            "--raw-rotate-x": 0,
            "--raw-rotate-y": 0 
        };
    } else {
        style = {
            "--raw-rotate-x": rawRotateX,
            "--raw-rotate-y": rawRotateY 
        };
    }
    
    return (
        <div className={projClassName} onClick={() => setTurned(prev => !prev)} style={style}>

            <ProjectBG getParentRect={getParentRect} clientX={clientX} clientY={clientY} swapX={turned} turnmilliseconds={turningSpeed}/>
            <FrontProjectCard project={project} turned={turned}/>
            <BackProjectCard project={project} turned={turned}/>

        </div>
    );
}

function FrontProjectCard({ project, turned }) {
    
    //todo - calculate the delay based on the turning speed
    let style = {
        "transitionDelay": "0.2s"
    };
    if(turned) {
        style["opacity"] = "0";
        style["pointerEvents"] = "none";
    }
    
    return (
        <div className='front-project-card' style={style}>
            <TextArea githubUrl={project.github} title={project.title} description={project.description}/>
            <ImageArea image={project.image}/>
            <TechArea techs={project.tech}/>
        </div>  
    );
    
}

function BackProjectCard({ project, turned }) {
    
    //todo - calculate the delay based on the turning speed
    let style = {
        "transitionDelay": "0.2s"
    };
    if(!turned) {
        style["opacity"] = "0";
        style["pointerEvents"] = "none";
    }
    
    return (
        <div className='back-project-card' style={style}>
            <p>
                Test Test Test
            </p>
        </div>  
    );
    
}

function TextArea({ githubUrl, title, description }) {
    return (
        <div className='project-text-area'>
            <ProjectHeader title={title} githubUrl={githubUrl}/>
            <p className='project-description text-shadow-rotation'>{description}</p>
        </div>  
    );
}

function ProjectHeader({ title, githubUrl }) {
    return (
        <div className='project-header'>
            <span className='project-title text-shadow-rotation'>{title}</span>
            <span className='github-mark-container'>
                <GithubMark link={githubUrl}/>
                <span className='github-mark-shadows'></span>
            </span>
        </div>
    );
}

function ImageArea({ image, clickable }) {
    return (
        <div className='project-image-area'>
            <ZoomableImage clickable={clickable} imagePath={image} normalStyle="project-image border-shadow-rotation"/>
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