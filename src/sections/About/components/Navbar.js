import HeaderLink from './HeaderLink';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">

            <button className='icon-button'>FM</button>
            <div className='nav-headers'>
                <NavLinks/>
            </div>

        </div>
    );
}

function NavLinks() {
    return (
        <div className='nav-links'>
            {/*<HeaderLink toId="about" text="About"/>*/}
            <HeaderLink toId="projects" text="Projects"/>
            <HeaderLink toId="contact" text="Contact"/>
        </div>
    );
}