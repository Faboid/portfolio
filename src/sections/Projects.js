import GithubMark from '../components/GithubMark';
import projects from '../data/projects.json';
import './Projects.css';

export default function Projects() {

    return (
        <div className="projects">
            <h1>My Projects</h1>

            <div className='projects-wrapper'>
                {projects.map((item, index) => {
                    return <Project key={item.title} project={item} index={index}/>;
                })}
            </div>
        </div>
    );
};

function Project({ project, index }) {

    let order = (index & 1) === 0;
    let classN = "project " + (order ? "" : "mirrored");

    return (
        <div className='project-container'>
            <div className={classN}>

                <img className="project-image" src={process.env.PUBLIC_URL + '/images/projects' + project.image} alt="view"/>

                <div className="project-text">
                    <div className='project-header'>
                        <span className='project-title'>{project.title}</span>
                        <GithubMark link={project.github}/>
                    </div>

                    <p className='project-description'>{project.description}</p>

                    <div>
                        <span className='project-tech-header'>Built with:</span>
                        <div className='project-techs'>
                            {project.tech.map((element, index) => {
                                return <Tech key={index} tech={element}/>;
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function Tech({ tech }) {
    return (
        <div className='tech'>
            <span className='tech-text'>{tech}</span>
        </div>
    );
}