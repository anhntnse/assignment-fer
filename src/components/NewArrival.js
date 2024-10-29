import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Product from './Product';
import ProductGrid  from './ProductGrid';

const NewArrival = () => {

  return (
    <Container className="mt-5">
      <h2>New Arrival</h2>
      <ProductGrid/>
    </Container>
  );
};

export default NewArrival;
