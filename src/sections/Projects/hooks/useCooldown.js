import { useEffect, useState } from "react";


export default function useCooldown(onChange, milliseconds) {
    
    const [cooldown, setCooldown] = useState(false);
    
    useEffect(() => {
        
        setCooldown(() => true);
        
        const cancellationID = setTimeout(() => {
            setCooldown(() => false);
        }, milliseconds);
        
        return () => {
            clearTimeout(cancellationID);
        };
        
    }, [onChange, milliseconds]);
    
    return cooldown;
    
}