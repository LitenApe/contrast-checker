import { h } from 'preact'
import { useContext } from 'preact/hooks'

import InputField from './InputField';
import { ColoursContext } from '../contexts/colours'

const InputForm = () => {
	const {
		foreground,
		setForeground,
		background,
		setBackground
	} = useContext(ColoursContext);

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<InputField
				label="foreground"
				value={foreground}
				onInput={(e) => setForeground(e.target.value)}
			/>
			<InputField
				label="background"
				value={background}
				onInput={(e) => setBackground(e.target.value)}
			/>
		</form>
	)
}

export default InputForm