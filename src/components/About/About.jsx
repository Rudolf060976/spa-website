import React from 'react';
// eslint-disable-next-line
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.scss';
import dogpeople from '../../shared/images/dog-people.jpg';
import robert from '../../shared/images/Robert.jpg';


class About extends React.Component {
 
	render() {
		return (
			<div>
				<div className="about-img-header">
					<Image src={dogpeople} rounded fluid />				
				</div>
				<Container>
					<Row>
						<Col xs={12} sm={{ span: 8, offset: 1 }}>
							<h2 className="about-h1">Robert the Happy Man</h2>
							<Image src={robert} className="about-img-profile" fluid rounded />
							<p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
 
}

export default About;
