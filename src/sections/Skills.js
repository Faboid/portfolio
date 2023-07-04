import SkillsContainer from "../components/SkillsContainer";
import './Skills.css';

export default function Skills() {

    let skills = getSkills();

    return (
        <div className="skills">
            <h1>My Skills</h1>
            <SkillsContainer skills={skills}/>
        </div>
    );
};

function getSkills() {
    return [
        new Skill("/c-sharp.svg", "C#"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF"),
        new Skill("/logo.svg", "WPF")
    ];
}

class Skill {
    constructor(logo, name) {
        this.logo = logo;
        this.name = name;
    }
}