import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import ReactRouter4App from './ReactRouter4App';
import Html from './Html';

const serverView = function serverView(req) {

	const context = {};
	let data = {}

	data.children = ReactDOMServer.renderToString(
		<StaticRouter location={req.url} context={context}>
			<ReactRouter4App />
		</StaticRouter>
	);

	return ReactDOMServer.renderToString(<Html {...data} />);

};


module.exports = serverView;
