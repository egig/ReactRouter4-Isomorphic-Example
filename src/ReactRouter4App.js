import React from 'react';
import { Route, Link } from 'react-router-dom'

class Home extends React.Component {

	render() {
		return (<h1>Hello RR4 !</h1>);
	}
}


class About extends React.Component {

	render() {
		return (<h1>About</h1>);
	}
}

class Topics extends React.Component {

	render() {
		return (<h1>Restaurant</h1>);
	}
}

const ReactRouter4App = function (props) {
	return (
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/id/about">About</Link></li>
				<li><Link to="/jakarta/restaurant">Topics</Link></li>
			</ul>

			<hr/>

			<Route exact path="/" component={Home}/>
			<Route path="/:locale(id|en)/about" component={About}/>
			<Route path="/:cityName(jakarta|bali|bandung)/restaurant" component={Topics}/>
		</div>
	);
};

module.exports = ReactRouter4App;