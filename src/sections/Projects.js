import projects from '../data/projects.json';
import './Projects.css';

export default function Projects() {

    return (
        <div className="projects">
            <h1>My Projects</h1>
            {projects.map((item, index) => {
                return <Project key={index} project={item} index={index}/>;
            })}
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
                        <span className='title'>{project.title}</span>
                        <span><a href={project.github}>GH</a></span>
                    </div>
                    <p>{project.description}</p>

                    <div className='project-techs'>
                        {project.tech.map((element) => {
                            return <Tech key={element.title} tech={element}/>;
                        })}
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