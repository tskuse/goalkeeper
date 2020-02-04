import { useEffect, useState } from 'react';

function transformToTime(secondsRemaining) {
    const date = new Date(secondsRemaining * 1000);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

export default function Timer() {
    const [isPaused, setPaused] = useState(true);
    const [secondsRemaining, setSecondsRemaining] = useState(300);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setSecondsRemaining(secondsRemaining => secondsRemaining - 1)
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isPaused])

    useEffect(() => {
        if (secondsRemaining <= 0) {
            setPaused(true);
            setSecondsRemaining(0);
        }
    }, [secondsRemaining]);

    return (
        <div className="container">
            <div className="split">
                {transformToTime(secondsRemaining)}
            </div>
            <div className="split"
                 onClick={() => setPaused(!isPaused)}
            >
                {isPaused ? 'Play' : 'Pause'}
            </div>
            <style jsx>{`
                div.container {
                    display: flex;
                    flex-direction: column;
                    background-color: white;
                }
                div.split {
                    flex: 1;
                    text-align: center;
                    font-size: 3em;
                    border: 1px solid gray;
                    user-select: none;
                }
            `}</style>
        </div>
    );
}