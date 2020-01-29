import { h } from 'preact'

const InputField = ({ label, ...rest }) => {
    return (
        <label class="input-field">
            <span>{ label }</span>
            <input type="text" {...rest} />
        </label>
    );
}

export default InputField;
