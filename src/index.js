import React from 'react';
import ReactDOM from 'react-dom';
import Qraved from './ReactRouter4App';
import { BrowserRouter } from 'react-router-dom'

const BasicExample = () => (
	<BrowserRouter>
		<Qraved />
	</BrowserRouter>
);

ReactDOM.render(<BasicExample />, document.getElementById('app'));


