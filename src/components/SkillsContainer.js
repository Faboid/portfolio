import './SkillsContainer.css';

export default function SkillsContainer({ skills }) {

    return (
        <div className="skills-container">
            <div className='skills-container-inner'>
                {skills.map((item) => {
                    return <Skill skill={item}/>
                })}
            </div>
        </div>
    );
}

function Skill({ skill }) {
    return (
        <div className="skill">
            <img className="skill-logo" src={process.env.PUBLIC_URL + "/images/logos" + skill.logo} alt="logo"/>
            <span className="skill-name">{skill.name}</span>
        </div>
    );
}