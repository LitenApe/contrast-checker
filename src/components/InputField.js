import { h } from 'preact'

const InputField = ({ label, ...rest }) => {
    return (
        <label className="input-field">
            <span>{ label }</span>
            <input {...rest} />
        </label>
    );
}

export default InputField;