import { useState } from 'react';
import GithubMark from '../components/GithubMark';
import projects from '../data/projects.json';
import './Projects.css';

export default function Projects() {

    return (
        <div className="projects">

            <h1>My Projects</h1>

            <div className='projects-wrapper'>
                {projects.map(item => {
                    return <Project key={item.title} project={item}/>;
                })}
            </div>
        </div>
    );
};

function Project({ project}) {

    return (
        <div className='project'>

            <div className='project-text-area'>

                <div className='project-header'>
                    <span className='project-title'>{project.title}</span>
                    <GithubMark link={project.github}/>
                </div>

                <p className='project-description'>{project.description}</p>
                
            </div>

            <div className='project-image-area'>
                <Image image={project.image}/>
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

function Image({ image }) {

    const [focused, setFocused] = useState(false);

    if(!focused) {
        return (
            <img onMouseDown={() => setFocused(true)} className="project-image" src={process.env.PUBLIC_URL + '/images/projects' + image} alt="view"/>
        );
    }

    return (
        <>
            <img onMouseDown={() => setFocused(true)} className="project-image" src={process.env.PUBLIC_URL + '/images/projects' + image} alt="view"/>

            <div className='full-screen' onMouseDown={() => setFocused(false)}>
                <div className='img-container'>
                    <img className="project-image" src={process.env.PUBLIC_URL + '/images/projects' + image} alt="view"/>
                </div>
            </div>

        </>
    );

}