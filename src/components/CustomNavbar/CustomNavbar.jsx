import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends React.Component {
  

	render() {
		return (
			<Navbar variant="dark" bg="blue-angel" defaultExpanded collapseOnSelect expand="sm">
				<Navbar.Brand>
					<h2>Intelligent Zone</h2>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav activeKey="/">
						<Nav.Link eventKey={1} as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link eventKey={2} as={Link} to="/about">
							About
						</Nav.Link>
						<Nav.Link eventKey={3} as={Link} to="/news">
								News
						</Nav.Link>						
					</Nav>
				</Navbar.Collapse>
				
			</Navbar>		
		);
	}

}

export default CustomNavbar;
