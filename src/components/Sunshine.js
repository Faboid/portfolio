import './Sunshine.css';

export default function Sunshine() {

    return (
        <div className="sunshine">
            <StarsContainer/>
            <Sun/>
        </div>
    );
}

function Sun() {
    return (
        <div className="sun"></div>
    );
}

function StarsContainer() {

    let starsAmount = Math.floor((window.innerHeight * window.innerWidth) / 20000);
    starsAmount = Math.max(50, starsAmount);
    starsAmount = Math.min(350, starsAmount);

    return (
        <div className="stars-container">
            {Array(starsAmount).fill(0).map((_, index) => {
                return <Star key={index} maxSize={0.5} sunPercentageXPos={0.8}/>;
            })}
        </div>
    );

}

function Star({ maxSize, sunPercentageXPos }) {

    const randomX = Math.random();
    const positionX = Math.floor(randomX * 100);
    const positionY = Math.floor(Math.random() * 100);
    const height = Math.random() * maxSize;
    const opacity = Math.abs(randomX - sunPercentageXPos) % 1;

    return (
        <div className="star" style={{ left: `${positionX}%`, top: `${positionY}%`, height: `${height}rem`, opacity: opacity}}>

        </div>
    ); 

}