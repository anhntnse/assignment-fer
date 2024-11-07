import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faShippingFast, faHeadset, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css'
function About() {
    return (
        <Container className="my-5">
            {/* Breadcrumb */}
            <Row>
                <Col>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </Col>
            </Row>

            {/* Founder Section */}
            <Row className="text-center mb-5">
                <Col>
                    <h2 className="mb-4">FOUNDER</h2>
                </Col>
            </Row>
            <Row className="text-center">
                {/* Founder 1 */}
                <Col md={4} className="mb-4">
                    <Card className="p-3">
                        <Card.Img 
                            variant="top" 
                            src="https://cdn.tgdd.vn/Files/2022/02/21/1416573/bill-gates-la-ai_1280x860-800-resize.jpg" 
                            alt="Founder 1" 
                            style={{ height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                        />
                        <Card.Body>
                            <div className="d-flex justify-content-center mt-3">
                                <Button className="text-dark mx-2"><FontAwesomeIcon icon={faTwitter} /></Button>
                                <Button className="text-dark mx-2"><FontAwesomeIcon icon={faInstagram} /></Button>
                                <Button className="text-dark mx-2"><FontAwesomeIcon icon={faLinkedin} /></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
                {/* Founder 2 */}
                <Col md={4} className="mb-4">
                    <Card className="p-3">
                        <Card.Img 
                            variant="top" 
                            src="https://cafefcdn.com/203337114487263232/2023/10/7/mark-1696647608632-16966476088691079391471.png" 
                            alt="Founder 2" 
                            style={{ height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                        />
                        <Card.Body>
                            <div className="d-flex justify-content-center mt-3">
                                <Button className="text-dark mx-2"><FontAwesomeIcon icon={faTwitter} /></Button>
                                <Button className="text-dark mx-2"><FontAwesomeIcon icon={faInstagram} /></Button>
                                <Button className="text-dark mx-2"><FontAwesomeIcon icon={faLinkedin} /></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Founder 3 */}
                <Col md={4} className="mb-4">
                    <Card className="p-3">
                        <Card.Img 
                            variant="top" 
                            src="https://tiki.vn/blog/wp-content/uploads/2023/09/jack-ma.jpg" 
                            alt="Founder 3" 
                            style={{ height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                        />
                        <Card.Body>
                            <div className="d-flex justify-content-center mt-3">
                                <Button className="text-dark mx-2"><FontAwesomeIcon icon={faTwitter} /></Button>
                                <Button className="text-dark mx-2"><FontAwesomeIcon icon={faInstagram} /></Button>
                                <Button className="text-dark mx-2"><FontAwesomeIcon icon={faLinkedin} /></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Service Guarantees Section */}
            <Row className="text-center mt-5">
                <Col md={4}>
                    <FontAwesomeIcon icon={faShippingFast} size="2x" className="text-dark mb-3" />
                    <h5>FREE AND FAST DELIVERY</h5>
                    <p>Free delivery for all orders over $140</p>
                </Col>
                <Col md={4}>
                    <FontAwesomeIcon icon={faHeadset} size="2x" className="text-dark mb-3" />
                    <h5>24/7 CUSTOMER SERVICE</h5>
                    <p>Friendly 24/7 customer support</p>
                </Col>
                <Col md={4}>
                    <FontAwesomeIcon icon={faUndoAlt} size="2x" className="text-dark mb-3" />
                    <h5>MONEY BACK GUARANTEE</h5>
                    <p>We return money within 30 days</p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
