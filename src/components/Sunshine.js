import './Sunshine.css';

export default function Sunshine() {
    return (
        <div className="sunshine">
            <StarsContainer amount={50}/>
            <Sun/>
        </div>
    );
}

//to implement
function Sun() {


    return (
        <div className="sun">

        </div>
    );
}

function StarsContainer({ amount }) {

    return (
        <div className="stars-container">
            {Array(amount).fill(0).map((element, index) => {
                return <Star key={index} maxSize={0.5} sunPercentageXPos={0.8}/>;
            })}
        </div>
    );

}

function Star({ maxSize, sunPercentageXPos }) {

    const randomX = Math.random();
    const positionX = Math.floor(randomX * window.innerWidth);
    const positionY = Math.floor(Math.random() * window.innerHeight);
    const height = Math.random() * maxSize;
    const opacity = Math.abs(randomX - sunPercentageXPos) % 1;

    return (
        <div className="star" style={{ left: `${positionX}px`, top: `${positionY}px`, height: `${height}rem`, opacity: opacity}}>

        </div>
    ); 

}