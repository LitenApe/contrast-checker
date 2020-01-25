import { h } from 'preact';
import { useState } from 'preact/hooks';

import InputField from './InputField';
import ContrastDisplay from './ContrastDisplay';
import PreviewDisplay from './PreviewDisplay';

const App = () => {
	const [foreground, setForeground] = useState('000')
	const [background, setBackground] = useState('fff')

	return (
		<div id="app">
			<h1>Contrast Ratio Checker</h1>

			<div className="main-content">
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
				<ContrastDisplay
					foreground={foreground}
					background={background}
				/>
			</div>
			<PreviewDisplay
				foreground={foreground}
				background={background}
			/>
		</div>
	);
};

export default App;
