import React, { useState } from 'react';
import './ResumeButton.css';

export default function ResumeButton() {

    const [clicked, setClicked] = useState(false);
    let btnClassName = 'resume-button ' + (clicked ? 'clicked' : '');
    
    function onClick(e) {
        setClicked(true);
    }
    
    return (
        <button 
            className={btnClassName} 
            disabled={clicked}
            onClick={e => onClick(e)}
            onAnimationEnd={() => setClicked(false)}>Resume</button>
    );
}

