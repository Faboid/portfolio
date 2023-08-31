import React, { useState } from 'react';
import resume from '../../../data/resume.pdf'
import './ResumeButton.css';

export default function ResumeButton() {

    const [clicked, setClicked] = useState(false);
    let btnClassName = 'resume-button ' + (clicked ? 'clicked' : '');
    
    function onClick(e) {
        setClicked(true);
        const pdfWindow = window.open();
        pdfWindow.location.href = resume;
    }
    
    return (
        <button
            className={btnClassName} 
            disabled={clicked}
            onClick={e => onClick(e)}
            onAnimationEnd={() => setClicked(false)}>Resume</button>
    );
}

