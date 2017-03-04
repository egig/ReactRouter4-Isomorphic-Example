import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import ReactRouter4App from './ReactRouter4App';
import Html from './Html';

const serverView = function serverView(req) {

	const context = {}

	return ReactDOMServer.renderToString(
		<Html>
			<StaticRouter location={req.url} context={context}>
				<ReactRouter4App />
			</StaticRouter>
		</Html>
	)

};


module.exports = serverView;
