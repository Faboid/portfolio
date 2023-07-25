import Navbar from '../components/Navbar';
import ResumeButton from '../components/ResumeButton';
import './About.css';

export default function About() {
    return (
        <div id='about' className="about">

            <Navbar/>

            <div className="about-text-area">
                <Greetings/>
                <Description/>
            </div>
            
        </div>
    );
}

function Greetings() {
    return (
        <div className='greetings'>
            <div className='greetings-container'>
                <h1 className='greeting-text'>Hello, I'm Name</h1>
                <ResumeButton/>
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