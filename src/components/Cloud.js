import "./Cloud.css";

export default function Cloud() {

    const spheres = [
        { left: 2, top: 35 },
        { left: 18, top: 2 },
        { left: 40, top: 7 },
        { left: 60, top: 1 },
        { left: 85, top: 8 },
        { left: 99, top: 40 },

        { left: 30, top: 50 },
        { left: 65, top: 45 },

        { left: 10, top: 80 },
        { left: 25, top: 95 },
        { left: 45, top: 90 },
        { left: 70, top: 92 },
        { left: 90, top: 86 },
    ];

    return (
        <div className="cloud">
            {spheres.map((item, index) => {
                return <CloudSphere 
                    key={index} 
                    left={item.left} 
                    top={item.top}
                    />
            })}
        </div>
    );
}

function CloudSphere({ left, top }) {

    const randomDelay = Math.random() * -1 + 's';

    const style = {
        "--startX" : left + '%',
        "--startY" : top + '%',
        "--delay-movement": randomDelay
    }
    
    return <div className="cloud-sphere" style={style}></div>
}