import { useEffect } from 'react';

function transformToTime(secondsRemaining) {
    const date = new Date(secondsRemaining * 1000);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

export default function Timer({ isPaused, secondsRemaining, dispatch }) {
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                dispatch({type: 'DECREASE_SECONDS_REMAINING'});
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isPaused])

    useEffect(() => {
        if (secondsRemaining <= 0) {
            dispatch({type: 'PAUSE'});
            dispatch({type: 'SET_SECONDS_REMAINING', seconds: 0});
        }
    }, [secondsRemaining]);

    function handlePlayPause() {
        if (isPaused) {
            dispatch({type: 'PLAY'});
        } else {
            dispatch({type: 'PAUSE'});
        }
    }

    return (
        <div className="container">
            <div className="split">
                {transformToTime(secondsRemaining)}
            </div>
            <div className="split"
                 onClick={handlePlayPause}
                 onTouchStart={handlePlayPause}
                 onTouchEnd={event => event.preventDefault()}
            >
                {isPaused ? 'Play' : 'Pause'}
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    background-color: white;
                    margin: 0 2vh 0 2vh;
                }
                .split {
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