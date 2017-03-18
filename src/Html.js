import React from 'react';
import { Route, Link } from 'react-router-dom'

const Html = function (props) {
	return (
		<html>
			<head>
				<title>Belajar RR4</title>
				<link rel="stylesheet" type="text/css" href="/css/common.css"  />
			</head>
			<body>
				<div id="app" dangerouslySetInnerHTML={{__html: props.children}} />
				<script src="/bundle.js"></script>
			</body>
		</html>
	);
};

module.exports = Html;