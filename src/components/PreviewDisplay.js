import { h, Fragment } from 'preact'

import { convertToValidColour, contrast } from '../utils'

const PreviewDisplay = ({foreground, background}) => {
    const ratio = contrast(foreground, background)

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
            <div className="preview-container">
                <span className={modifiersNormalAA}>AA</span>
                <span className={modifiersNormalAAA}>AAA</span>
                <div className="preview" style={previewStyling}>
                    A teddybear is a great companion
                </div>
            </div>

            <div className="preview-container">
                <span className={modifiersLargeAA}>AA</span>
                <span className={modifiersLargeAAA}>AAA</span>
                <div className="preview large" style={previewStyling}>
                    A real bear is a scary friend
                </div>
            </div>
        </Fragment>
    )
}

export default PreviewDisplay;