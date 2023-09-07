import Navbar from './components/Navbar';
import ResumeButton from './components/ResumeButton';
import './About.css';

export default function About() {
    return (
        <section id='about' className="about">

            <Navbar/>

            <div className="about-text-area">
                <Greetings/>
                <Description/>
            </div>
            
        </section>
    );
}

function Greetings() {
    return (
        <div className='greetings'>
            <div className='greetings-container'>
                <h1 className='greeting-text'>Hello, I'm Fabio.</h1>
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
                        In early 2020, a video on boids introduced me to the beauty of programming. Since then, I've learned how to code games, desktop and web applications.
                    </p>

                    <p className='about-me-text'>
                        My journey has primarily been in the C#/.NET ecosystem, where I've cultivated a robust foundation. Using that foundation, I've lately branched out into web-focused technologies, with learning React as my latest endeavor.
                    </p>
                </div>
            </div>
        </div>
    );
}