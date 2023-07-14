import './HeaderLink.css';

export default function HeaderLink({ toId, text }) {

    function navigate() {
        const section = document.getElementById(toId);
        section.scrollIntoView({ behavior:'smooth' });
    }

    return (
        <span onClick={navigate} className="header-link">{text}</span>
    );
}