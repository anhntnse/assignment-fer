import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ProductGrid() {
  return (
    <Container fluid className="p-2" style={{ backgroundColor: '#111', color: '#fff' }}>
      <Row className="h-100">
        <Col md={6} className="d-flex">
          <Card className="flex-fill mb-3" style={{ backgroundColor: '#222', padding: '0.5rem' }}>
            <Card.Body style={{ padding: '0.5rem' }}>
              <Card.Title style={{ fontSize: '1rem' }}>Lenovo</Card.Title>
              <Card.Text style={{ fontSize: '0.875rem' }}>Laptop Lenovo Legion Slim 5</Card.Text>
              <Button variant="light" size="sm">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Row className="mb-3">
            <Col md={12} className="d-flex">
              <Card className="flex-fill" style={{ backgroundColor: '#222', padding: '0.5rem' }}>
                <Card.Body style={{ padding: '0.5rem' }}>
                  <Card.Title style={{ fontSize: '1rem' }}>Women's Collections</Card.Title>
                  <Card.Text style={{ fontSize: '0.875rem' }}>Laptop HP Gaming Victus 16"</Card.Text>
                  <Button variant="light" size="sm">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="d-flex">
              <Card className="flex-fill mb-3" style={{ backgroundColor: '#222', padding: '0.5rem' }}>
                <Card.Body style={{ padding: '0.5rem' }}>
                  <Card.Title style={{ fontSize: '1rem' }}>Surface</Card.Title>
                  <Card.Text style={{ fontSize: '0.875rem' }}>Surface Laptop 4</Card.Text>
                  <Button variant="light" size="sm">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="d-flex">
              <Card className="flex-fill mb-3" style={{ backgroundColor: '#222', padding: '0.5rem' }}>
                <Card.Body style={{ padding: '0.5rem' }}>
                  <Card.Title style={{ fontSize: '1rem' }}>Acer</Card.Title>
                  <Card.Text style={{ fontSize: '0.875rem' }}>Laptop Acer Nitro 16 Phoenix Gaming</Card.Text>
                  <Button variant="light" size="sm">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductGrid;
