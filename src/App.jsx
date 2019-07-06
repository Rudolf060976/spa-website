import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Content from './Content';
import CustomNavBar from './components/CustomNavbar/CustomNavbar';
import Footer from './components/Footer/Footer';

class App extends Component {

	render() {

		return (
			<Router>
				<div className="App">
					<CustomNavBar />
					<Container>
						<Content />
					</Container>
					<Container>
						<Footer />
					</Container>
					
				</div>				
			</Router>
			
		);


	}

}

export default App;
