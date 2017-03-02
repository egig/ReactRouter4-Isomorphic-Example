import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Qraved from './ReactRouter4App';
import Html from './Html';

const serverView = function serverView(req) {

	const context = {}

	return ReactDOMServer.renderToString(
		<Html>
			<StaticRouter location={req.url} context={context}>
				<Qraved />
			</StaticRouter>
		</Html>
	)

};


module.exports = serverView;
