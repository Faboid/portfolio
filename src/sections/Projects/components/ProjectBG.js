import { useEffect, useRef, useState } from 'react';
import "./ProjectBG.css";

export default function ProjectBG({ getParentRect, clientX, clientY }) {
    
    const bgRef = useRef(null);
    const [lightX, setLightX] = useState(0);
    const [lightY, setLightY] = useState(0);

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
        <div ref={bgRef} className='project-bg'>
            <div style={{
                "--mouse-x": lightX,
                "--mouse-y": lightY
            }} className='project-light'></div>
        </div>
    );
}
