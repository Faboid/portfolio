import Spacer from '../components/Spacer';
import './About.css';

export default function About() {
    return (
        <div className="about">

            <div className='navbar'>
                <button className='icon-button'>FM</button>
                <NavLinks/>
            </div>

            <Spacer height={"10vh"}/>
            <Greetings/>
            <Spacer height={"3vh"}/>
            <Description/>
            <Spacer height={"5vh"}/>

        </div>
    );
}

function NavLinks() {
    return (
        <div className='nav-links'>
            <span className='nav-link'>About</span>
            <span className='nav-link'>Projects</span>
            <span className='nav-link'>Contact</span>
        </div>
    );
}

function Greetings() {
    return (
        <div className='greetings'>
            <div className='greetings-container'>
                <h1 className='greeting-text'>Hello, I'm Name.</h1>
                <button className='resume-button'>Resume</button>
            </div>
        </div>
    );
}

function Description() {
    return (
        <div className='description'>
            <div className='description-container'>
                <h1 className='about-me-title'>About me</h1>
                <div className='about-me-container'>
                    <p className='about-me-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                    </p>
                </div>
            </div>
        </div>
    );
}