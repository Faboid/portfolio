import { useState } from 'react';
import { createPortal } from 'react-dom';
import './ZoomableImage.css';

export default function ZoomableImage({ imagePath, normalStyle }) {

    const [focused, setFocused] = useState(false);
    const fullPath = process.env.PUBLIC_URL + '/images/projects' + imagePath;

    if(!focused) {
        return (
            <img onMouseDown={() => setFocused(true)} className={normalStyle + " clickable-image"} src={fullPath} alt="view"/>
        );
    }

    return (
        <>
            <img onMouseDown={() => setFocused(true)} className={normalStyle + " clicked-image"} src={fullPath} alt="view"/>

            {createPortal(
                <FullImage src={fullPath} onMouseDown={() => setFocused(false)}/>,
                document.body
            )}

        </>
    );

}

function FullImage({ src, onMouseDown }) {
    return (
        <div className='full-screen' onMouseDown={onMouseDown}>
            <div className='img-container'>
                <img className="full-image" src={src} alt="view"/>
            </div>
        </div>
    );
}