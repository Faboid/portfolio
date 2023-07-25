import './Underwater.css';

export default function Underwater({ children }) {

    const bubblesAmount = Math.floor(window.innerWidth / 20);
    const maxDelay = Math.floor(window.innerHeight * 15);

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
        <div className='bubble' style={{ left: `${position}%`, animationDelay: `${delay}ms` }}></div>
    );

}