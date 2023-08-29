import { useEffect, useState } from "react";


export default function useRotationFromPosition(getRect, clientX, clientY, offset, multiplier) {
    
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    
    //handles 3d rotation based on cursor position relative to the center of the rect
    useEffect(() => {
        
        const target = getRect();
        
        //get distance from top-left
        let x = clientX - target.left;
        let y = clientY - target.top;
        
        //get target size
        let height = target.bottom - target.top;
        let width = target.right - target.left;
        
        //add offset
        x += offset;
        y += offset;
        height += offset * 2;
        width += offset * 2;
        
        //normalize to percentage
        let posX = x / width;
        let posY = y / height;
        
        //check for boundaries
        if(posX < 0 || posX > 1 || posY < 0 || posY > 1) {

            //reset rotation to 0, as it's outside range
            setRotateX(0);
            setRotateY(0);

            return;
        }
        
        //remove 0.5 to move (0, 0) to the center of the proj
        posX -= 0.5;
        posY -= 0.5;
        
        //add multiplier
        posX = -posX * multiplier;
        posY *= multiplier;

        setRotateX(posY);
        setRotateY(posX);
        
    }, [getRect, clientX, clientY, offset, multiplier]);
    
    return [rotateX, rotateY];
    
}