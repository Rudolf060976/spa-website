import React from 'react';
import { Carousel } from 'react-bootstrap';
import dogpeople from '../../shared/images/dog-people.jpg';
import vacations from '../../shared/images/vacations.jpg';

class Footer extends React.Component {
  
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<img src={dogpeople} className="footer-img-dogpeople" alt="dogs and people" />
					<Carousel.Caption>
						<h3>News: One day in your dogs life</h3>
						<p>Scientists have comprobated that animals help people to be happy.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={vacations} className="footer-img-vacations" alt="vacations" />
					<Carousel.Caption>
						<h3>More News: One vacation day</h3>
						<p>Researchs have allowed to conclude that one day of vacations equals to 5 years of life.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
		
	}
  
}

export default Footer;
