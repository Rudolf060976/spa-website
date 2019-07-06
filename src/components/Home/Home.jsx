import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.scss';
import Robert from '../../shared/images/Robert.jpg';
import Emma from '../../shared/images/Emma.jpg';
import Albert from '../../shared/images/Albert.jpg';

class Home extends React.Component {
		
	render() {
		return (
			<Container>
				<Jumbotron>
					<h2>Welcome to Intelligent Zone website.</h2>
					<p>A simple SPA website with React, React-Router & React-Bootstrap</p>
					<Link to="/about">
						<Button variant="blue-angel">About</Button>
					</Link>
				</Jumbotron>
				<h2>Join our Happy Team</h2>
				<Row>
					<Col xs={12} sm={6} md={4}>
						<Image src={Robert} fluid rounded />
						<h3>Robert</h3>
						<p>If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. Everybody's different. Trees are different. Let them all be individuals.

						</p>
					</Col>
					<Col xs={12} sm={6} md={4}>
						<Image src={Emma} fluid rounded />
						<h3>Emma</h3>
						<p>If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. Everybody's different. Trees are different. Let them all be individuals.

						</p>
					</Col>
					<Col xs={12} sm={6} md={4}>
						<Image src={Albert} fluid rounded />
						<h3>Albert</h3>
						<p>If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. Everybody's different. Trees are different. Let them all be individuals.

						</p>
					</Col>
				</Row>
			</Container>

		);
	}

	
}

export default Home;
