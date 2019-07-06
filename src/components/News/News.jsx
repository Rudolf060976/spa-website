import React from 'react';
// eslint-disable-next-line
import { Container, Col, Row, Image } from 'react-bootstrap';
import './News.scss';
import vacations from '../../shared/images/vacations.jpg';
import news from '../../shared/images/News.jpg';


class News extends React.Component {
 
	render() {
		return (
			<div>
				<div className="news-img-header">
					<Image src={vacations} rounded fluid />				
				</div>
				<Container className="about-container">
					<h2>News</h2>
					<Row>
						<Col xs="12" sm={8} className="about-main-section">
							<p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To </p>
						</Col>
						<Col xs={12} sm={4} className="about-sidebar-section">
							<Image src={news} rounded fluid />
							<h4>Incredible: Taking Pictures is good for health</h4>
							<p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
  
}
export default News;
