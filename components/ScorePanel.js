export default function ScorePanel({ score, color, onIncrement, onDecrement }) {
    return (
        <div className="container">
            <div className="score">{score}</div>
            <div className="input" onClick={onIncrement}>&nbsp;</div>
            <div className="input" onClick={onDecrement}>&nbsp;</div>
            <div className="flair">&nbsp;</div>
            <style jsx>{`
                div.container {
                    border: 1px solid gray;
                    background-color: white;
                    position: relative;
                }
                div.score {
                    position: absolute;
                    width: 100%;
                    font-family: Mono;
                    font-size: 10em;
                    text-align: center;
                    pointer-events: none;
                    user-select: none;
                }
                div.input {
                    border: 1px solid lightgray;
                    font-size: 5em;
                    user-select: none;
                }
                div.flair {
                    background: ${color};
                    font-size: 2em; 
                }
            `}</style>
        </div>
    );
}