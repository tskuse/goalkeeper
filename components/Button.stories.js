import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
    component: SwitchButton,
    title: 'Button'
};

export const SwitchButton = () =>
    <Button title="Switch" handler={action('handler')} />;

export const ResetButton = () =>
    <Button title="Reset" handler={action('handler')} />;