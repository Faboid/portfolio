import { useMemo } from "react";
import useScroll from "../hooks/useScroll";
import "./Sunshine.css";

export default function Sunshine({ children }) {
    return (
        <div className="sunshine-container">
            <div className="sunshine">
                <StarsContainer />
                {/*<Sun/>*/}
            </div>

            {children}

            <Obscurer />
        </div>
    );
}

function Obscurer() {
    const obscurerAlpha = useScroll(0, 0.8, 2);
    return <div style={{ "--alpha": obscurerAlpha }} className="sunshine-obscurer"></div>;
}

//function Sun() {
//    return <div className="sun"></div>;
//}

function StarsContainer() {
    let starsAmount = Math.floor((window.innerHeight * window.innerWidth) / 20000);
    starsAmount = Math.max(50, starsAmount);
    starsAmount = Math.min(350, starsAmount);

    return (
        <div className="stars-container">
            {Array(starsAmount)
                .fill(0)
                .map((_, index) => {
                    return <Star key={index} maxSize={0.5} sunPercentageXPos={1} />;
                })}
        </div>
    );
}

function Star({maxSize, sunPercentageXPos}) {

    const seed = useMemo(() => Math.random(), []);

    const [positionX, positionY] = useMemo(() => {
        const positionX = Math.floor(seed * 100);
        const positionY = Math.floor(Math.random() * 100);
        return [positionX, positionY];
    }, [seed]);

    const height = useMemo(() => Math.random() * maxSize, [maxSize]);
    const opacity = useMemo(() => Math.abs(seed - sunPercentageXPos) % 1 + 0.2, [sunPercentageXPos, seed]);

    return (
        <div
            className="star"
            style={{
                left: `${positionX}%`,
                top: `${positionY}%`,
                height: `${height}rem`,
                opacity: opacity
            }}></div>
    );
}
