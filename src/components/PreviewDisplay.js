import { h, Fragment } from 'preact'
import { useContext } from 'preact/hooks'

import { convertToValidColour } from '../utils'

import { ColoursContext } from '../contexts/colours';

const PreviewDisplay = () => {
    const { foreground, background, ratio } = useContext(ColoursContext)

    const previewStyling = {
		color: convertToValidColour(foreground),
		backgroundColor: convertToValidColour(background),
    }
    
    let modifiersNormalAA = "ok"
    let modifiersNormalAAA = "ok"
    if (ratio < 4.5) {
        modifiersNormalAA = "error"
        modifiersNormalAAA = "error"
    } else if (ratio < 7) {
        modifiersNormalAA = "ok"
        modifiersNormalAAA = "warning"
    }

    let modifiersLargeAA = "ok"
    let modifiersLargeAAA = "ok"
    if (ratio < 3) {
        modifiersLargeAA = "error"
        modifiersLargeAAA = "error"
    } else if (ratio < 4.5) {
        modifiersLargeAA = "ok"
        modifiersLargeAAA = "warning"
    }
    
    return (
        <Fragment>
            <div class="preview-container">
                <span class={modifiersNormalAA}>AA</span>
                <span class={modifiersNormalAAA}>AAA</span>
                <div class="preview" style={previewStyling}>
                    A teddybear is a great companion
                </div>
            </div>

            <div class="preview-container">
                <span class={modifiersLargeAA}>AA</span>
                <span class={modifiersLargeAAA}>AAA</span>
                <div class="preview large" style={previewStyling}>
                    A real bear is a scary friend
                </div>
            </div>
        </Fragment>
    );
}

export default PreviewDisplay;
