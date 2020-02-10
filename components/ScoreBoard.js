import { useReducer } from 'react';
import ScorePanel from './ScorePanel';
import Button from './Button';
import Timer from './Timer';

const initialState = {
    isPaused: true,
    secondsRemaining: 300,
    scoreOne: 0,
    scoreTwo: 0,
    isSwitched: false
};

function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE_SCORE_ONE':
            return {...state, scoreOne: state.scoreOne + 1};
        case 'DECREASE_SCORE_ONE':
            return {...state, scoreOne: state.scoreOne <= 0 ? 0 : state.scoreOne - 1};
        case 'INCREASE_SCORE_TWO':
            return {...state, scoreTwo: state.scoreTwo + 1};
        case 'DECREASE_SCORE_TWO':
            return {...state, scoreTwo: state.scoreTwo <= 0 ? 0 : state.scoreTwo - 1};
        case 'PLAY':
            return {...state, isPaused: false};
        case 'PAUSE':
            return {...state, isPaused: true};
        case 'DECREASE_SECONDS_REMAINING':
            return {...state, secondsRemaining: state.secondsRemaining <= 0 ? 0 : state.secondsRemaining - 1}
        case 'SET_SECONDS_REMAINING':
            return {...state, secondsRemaining: action.seconds};
        case 'SWITCH_PANELS':
            return {...state, isSwitched: !state.isSwitched};
        case 'RESET':
            return {...initialState, isSwitched: state.isSwitched};
        default:
            throw new Error();
    }
}

export default function ScoreBoard() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const ScorePanelOne = <ScorePanel score={state.scoreOne}
                                      color="blue"
                                      onIncrement={() => dispatch({type: 'INCREASE_SCORE_ONE'})}
                                      onDecrement={() => dispatch({type: 'DECREASE_SCORE_ONE'})}
                          />;

    const ScorePanelTwo = <ScorePanel score={state.scoreTwo}
                                      color="red"
                                      onIncrement={() => dispatch({type: 'INCREASE_SCORE_TWO'})}
                                      onDecrement={() => dispatch({type: 'DECREASE_SCORE_TWO'})}
                          />;

    return (
        <div className="container">
            <div className="flex-3">
                {state.isSwitched ? ScorePanelTwo : ScorePanelOne}
            </div>
            <div className="controls">
                <Timer isPaused={state.isPaused}
                       secondsRemaining={state.secondsRemaining}
                       dispatch={dispatch}
                />
                &nbsp;
                <div className="container space-evenly">
                    <Button title="Switch" handler={() => dispatch({type: 'SWITCH_PANELS'})} />
                    &nbsp;
                    <Button title="Reset" handler={() => dispatch({type: 'RESET'})} />
                </div>
            </div>
            <div className="flex-3">
                {state.isSwitched ? ScorePanelOne : ScorePanelTwo}
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: row;
                    padding: 0 2vh 0 2vh;
                }
                .space-evenly {
                    justify-content: space-evenly;
                }
                .controls {
                    flex: 3;
                    margin: 0 2vh 0 2vh;
                }
                .flex-3 {
                    flex: 3;
                }
                .flex-4 {
                    flex: 4;
                }
            `}</style>
        </div>
    );
}