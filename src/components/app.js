import { h } from 'preact';
import { ColoursProvider } from '../contexts/colours';

import ContrastDisplay from './ContrastDisplay';
import PreviewDisplay from './PreviewDisplay';
import InputForm from './InputForm';

const App = () => {
	return (
		<ColoursProvider>
			<div id="app">
				<h1>Contrast Ratio Checker</h1>
				<div className="main-content">
					<InputForm />
					<ContrastDisplay />
				</div>
				<PreviewDisplay />
			</div>
		</ColoursProvider>
	);
};

export default App;
