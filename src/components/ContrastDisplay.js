import { h } from 'preact';

import { contrast } from '../utils'

const ContrastDisplay = ({ foreground, background }) => {
    const ratio = parseInt((contrast(foreground, background) * 100), 10) / 100
    let modifiers = 'contrast-window'

    if (ratio > 10) {
        modifiers += ' ok'
    } else if (ratio > 4.5) {
        modifiers += ' warning'
    } else {
        modifiers += ' error'
    }

    return (
        <div className={ modifiers }>
            <span>Contrast Ratio</span>
            <span class="contrast-ratio" aria-live="polite">
                <b>{ ratio }</b> : 1
            </span>
        </div>
    );
};

export default ContrastDisplay;
