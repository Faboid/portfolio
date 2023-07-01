import React, { useState } from 'react';
import './ResumeButton.css';

export default function ResumeButton() {

    const [clicked, setClicked] = useState(false);
    let btnClassName = 'resume-button ' + (clicked ? 'clicked' : '');

    return (
        <div className='resume-button-container'
            onMouseDown={() => setClicked(true)}
            onAnimationEnd={() => setClicked(false)}
            >
            <button className={btnClassName}>Resume</button>
        </div>
    );
}

