import './Underwater.css';

export default function Underwater({ children }) {

    const bubblesAmount = clamp(20, Math.floor(window.innerWidth / 30), 100);
    const maxDelay = Math.floor(window.innerHeight * 100);
    console.log(bubblesAmount);

    function clamp(min, value, max) {
        return Math.min(Math.max(min, value), max);
    }

    return (
        <div className='underwater-container'>
            <div className='underwater'>
                <Bubbles amount={bubblesAmount} maxDelay={maxDelay}/>
            </div>

            {children}
        </div>
    );

}

function Bubbles({ amount, maxDelay }) {

    function generatePosition(index) {
        return (100 / amount) * index + (Math.random() * 5 - 2.5);
    }

    return (
        <div className='bubbles-container'>
            {Array(amount).fill(0).map((_, index) => {
                return <Bubble 
                    key={index} 
                    position={generatePosition(index)}
                    delay={Math.random() * maxDelay}
                    />;
            })}
        </div>
    );

}

function Bubble({ position, delay }) {

    return (
        <div className='bubble' style={{ left: `${position}%`, animationDelay: `${-delay}ms` }}></div>
    );

}