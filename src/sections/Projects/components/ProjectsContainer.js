import { useEffect, useRef, useState } from 'react';
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
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    //handle 3d rotation
    useEffect(() => {
        
        const target = projDiv.current;

        //get distance to proj(0, 0)
        const projRect = target.getBoundingClientRect();
        let x = clientX - projRect.left;
        let y = clientY - projRect.top;

        //get proj size
        let height = projRect.bottom - projRect.top;
        let width = projRect.right - projRect.left;

        //set some offset
        const offset = 15; //px
        x += offset;
        y += offset;
        height += offset * 2;
        width += offset * 2; 

        //normalize to percentage
        let posX = x / width;
        let posY = y / height;
        
        //check for boundaries
        if(posX < 0 || posX > 1 || posY < 0 || posY > 1) {

            //reset rotation to 0, as it's outside range
            setRotateX(0);
            setRotateY(0);

            return;
        }

        //remove 0.5 to move (0, 0) to the center of the proj
        posX -= 0.5;
        posY -= 0.5;

        //adjust values
        posX = -posX * 5;
        posY *= 5;

        setRotateX(posY);
        setRotateY(posX);

    }, [clientX, clientY]);

    return (
        <div className='project border-shadow-rotation' ref={projDiv} style={{
            "--rotate-x": rotateX,
            "--rotate-y": rotateY
        }}>

            <ProjectBG getParentRect={getParentRect} clientX={clientX} clientY={clientY}/>

            <div className='project-text-area'>

                <div className='project-header'>
                    <span className='project-title text-shadow-rotation'>{project.title}</span>
                    <span className='github-mark-container'>
                        <GithubMark link={project.github}/>
                        <span className='github-mark-shadows'></span>
                    </span>
                </div>

                <p className='project-description text-shadow-rotation'>{project.description}</p>
                
            </div>

            <div className='project-image-area'>
                <ZoomableImage imagePath={project.image} normalStyle="project-image border-shadow-rotation"/>
            </div>

            <div className='project-tech-area'>
                {project.tech.map((element) => {
                    return (
                        <span key={element} className='tech text-shadow-rotation'>{element}</span>
                    );
                })}
            </div>

        </div>
    );
}