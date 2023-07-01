import './Navbar.css';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
    return (
        <div className="navbar">

            <button className='icon-button'>FM</button>
            <div className='nav-headers'>
                <ThemeSwitcher/>
                <NavLinks/>
            </div>

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