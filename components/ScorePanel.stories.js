import { action } from '@storybook/addon-actions';
import ScorePanel from './ScorePanel';

export default {
    component: ScorePanel,
    title: 'ScorePanel'
}

export const Red = () => (
    <ScorePanel
        score="5"
        color="red"
        onIncrement={action('onIncrement')}
        onDecrement={action('onDecrement')}
    />
);
export const Blue = () => (
    <ScorePanel
        score="0"
        color="blue"
        onIncrement={action('onIncrement')}
        onDecrement={action('onDecrement')}
    />
);