import React from 'react';
import { Route, Link } from 'react-router-dom'

const ReactRouter4App = function (props) {
	return (
		<html>
			<head><title>Belajar RR4</title></head>
			<body>
				<div id="app">{props.children}</div>
				<script src="/bundle.js"></script>
			</body>
		</html>
	);
};

module.exports = ReactRouter4App;