import { useState } from 'react';
import ScorePanel from './ScorePanel';
import Timer from './Timer';

export default function ScoreBoard() {
    const [scoreOne, setScoreOne] = useState(0);
    const [scoreTwo, setScoreTwo] = useState(0);

    return (
        <div className="container">
            <div className="flex-1" />
            <div className="flex-3">
                <ScorePanel
                    score={scoreOne}
                    color="blue"
                    onIncrement={() => setScoreOne(scoreOne + 1)}
                    onDecrement={() => setScoreOne(scoreOne - 1)}
                />
            </div>
            <div className="controls">
                <Timer />
            </div>
            <div className="flex-3">
                <ScorePanel
                    score={scoreTwo}
                    color="red"
                    onIncrement={() => setScoreTwo(scoreTwo + 1)}
                    onDecrement={() => setScoreTwo(scoreTwo - 1)}
                />
            </div>
            <div className="flex-1" />
            <style jsx>{`
                div.container {
                    display: flex;
                    flex-direction: row;
                }
                div.controls {
                    flex: 3;
                    margin: 0 2vh 0 2vh;
                }
                div.flex-3 {
                    flex: 3;
                }
                div.flex-1 {
                    flex: 1;
                }
            `}</style>
        </div>
    );
}