import { useEffect, useRef, useState } from 'react';
import "./ProjectBG.css";

export default function ProjectBG({ getParentRect, clientX, clientY, swapX, turnmilliseconds }) {
    
    const bgRef = useRef(null);
    const [lightX, setLightX] = useState(0);
    const [lightY, setLightY] = useState(0);
    
    const bgClass = "project-bg " + (swapX ? "turned" : "");
    
    const bgStyle = {
        "transition": turnmilliseconds + 'ms'
    };

    //handle light
    useEffect(() => {
        const target = bgRef.current;
        const rect = target.getBoundingClientRect();
        const parent = getParentRect();

        //calc
        const x = clientX - parent.left;
        const y = clientY - parent.top;
        const xDiff = rect.left - parent.left;
        const yDiff = rect.top - parent.top;
        const newLightX = x - xDiff + 'px';
        const newLightY = y - yDiff + 'px';

        setLightX(newLightX);
        setLightY(newLightY);

    }, [getParentRect, clientX, clientY]);

    return (
        <div ref={bgRef} className={bgClass} style={bgStyle}>
            <div style={{
                "--mouse-x": lightX,
                "--mouse-y": lightY
            }} className='project-light'></div>
        </div>
    );
}
