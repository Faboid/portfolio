import { useEffect, useState } from "react";

export default function useScroll(min, max, decimals) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }

        function handleScroll(e) {
            const alpha = Math.max(min, Math.min(max, window.scrollY / window.innerHeight)).toFixed(decimals);
            setScrollY(alpha);
        }

    }, []);

    return scrollY;

}