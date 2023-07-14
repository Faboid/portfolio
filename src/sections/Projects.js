import GithubMark from '../components/GithubMark';
import ZoomableImage from '../components/ZoomableImage';
import projects from '../data/projects.json';
import './Projects.css';

export default function Projects() {

    return (
        <div id='projects' className="projects">

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

