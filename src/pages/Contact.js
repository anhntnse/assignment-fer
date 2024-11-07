import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/contact.css';

function Contact() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {/* Contact Information Section */}
        <Col md={3} className="d-flex align-items-stretch">
          <Card className="p-3 contact-info-card custom-shadow w-100">
            <Card.Body>
              {/* Call To Us */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <FaPhoneAlt size={20} className="text-danger me-2" />
                  <h5 className="mb-0">Call To Us</h5>
                </div>
                <p>We are available 24/7, 7 days a week.</p>
                <p><strong>Phone:</strong> +8801611122222</p>
              </div>
              
              <hr />

              {/* Write To Us */}
              <div className="mt-4">
                <div className="d-flex align-items-center mb-2">
                  <FaEnvelope size={20} className="text-danger me-2" />
                  <h5 className="mb-0">Write To Us</h5>
                </div>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p><strong>Email:</strong> customer@exclusive.com</p>
                <p><strong>Email:</strong> support@exclusive.com</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form Section */}
        <Col md={8} className="d-flex align-items-stretch">
          <Card className="p-4 form-card custom-shadow w-100">
            <Form>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formName">
                    <Form.Control 
                      type="text" 
                      placeholder="Your Name *" 
                      required 
                      className="custom-input"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formEmail">
                    <Form.Control 
                      type="email" 
                      placeholder="Your Email *" 
                      required 
                      className="custom-input"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formPhone">
                    <Form.Control 
                      type="tel" 
                      placeholder="Your Phone *" 
                      required 
                      className="custom-input"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  placeholder="Your Message" 
                  className="custom-input"
                  style={{height: "200px"}}
                />
              </Form.Group>
              <Button variant="danger" type="submit" className="custom-button">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
