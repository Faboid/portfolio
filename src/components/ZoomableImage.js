import { useState } from 'react';
import './ZoomableImage.css';

export default function ZoomableImage({ imagePath, normalStyle }) {

    const [focused, setFocused] = useState(false);
    const fullPath = process.env.PUBLIC_URL + '/images/projects' + imagePath;

    if(!focused) {
        return (
            <img onMouseDown={() => setFocused(true)} className={normalStyle} src={fullPath} alt="view"/>
        );
    }

    return (
        <>
            <img onMouseDown={() => setFocused(true)} className={normalStyle} src={fullPath} alt="view"/>

            <div className='full-screen' onMouseDown={() => setFocused(false)}>
                <div className='img-container'>
                    <img className="full-image" src={fullPath} alt="view"/>
                </div>
            </div>

        </>
    );

}