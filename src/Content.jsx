import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import News from './components/News/News';
import './Content.css';

class Content extends React.Component {
 
	render() {
		return (
			<div className="Content">
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/news" component={News} />
			</div>
		);	
	}
}

export default Content;
