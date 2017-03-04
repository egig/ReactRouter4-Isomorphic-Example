import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter4App from './ReactRouter4App';
import { BrowserRouter } from 'react-router-dom'

const BasicExample = () => (
	<BrowserRouter>
		<ReactRouter4App />
	</BrowserRouter>
);

ReactDOM.render(<BasicExample />, document.getElementById('app'));


