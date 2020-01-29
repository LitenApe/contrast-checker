import { h } from 'preact';
import { useContext } from 'preact/hooks';

import { ColoursContext } from '../contexts/colours';

const ContrastDisplay = () => {
    const { ratio } = useContext(ColoursContext)
    let modifiers = 'contrast-window'

    if (ratio > 10) {
        modifiers += ' ok'
    } else if (ratio > 4.5) {
        modifiers += ' warning'
    } else {
        modifiers += ' error'
    }

    return (
        <div class={ modifiers }>
            <span>Contrast Ratio</span>
            <span class="contrast-ratio" aria-live="polite">
                <b>{ ratio }</b> : 1
            </span>
        </div>
    );
};

export default ContrastDisplay;
