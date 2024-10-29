import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';


const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: "",
    saveInfo: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePlaceOrder = () => {
    console.log(billingDetails);
  };

  return (
    <Container>
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Account</li>
            <li class="breadcrumb-item">My Account</li>
            <li class="breadcrumb-item">Product</li>
            <li class="breadcrumb-item">View Cart</li>
            <li class="breadcrumb-item" style={{ fontWeight: 550 }} aria-current="page">Checkout</li>
          </ol>
        </nav>
      </div>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2>Billing Details</h2>
          <Form className="" style={{ marginTop: 50 }} >
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>First Name<i className="text-danger" style={{}}>*</i> </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={billingDetails.firstName}
                onChange={handleInputChange}
                style={{ backgroundColor: "#F5F5F5" }}
              />
            </Form.Group>

            <Form.Group controlId="formCompanyName" className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={billingDetails.companyName}
                onChange={handleInputChange}
                style={{ backgroundColor: "#F5F5F5" }}
              />
            </Form.Group>

            <Form.Group controlId="formStreetAddress" className="mb-3">
              <Form.Label>Street Address <i className="text-danger">*</i></Form.Label>
              <Form.Control
                type="text"
                name="streetAddress"
                value={billingDetails.streetAddress}
                onChange={handleInputChange}
                style={{ backgroundColor: "#F5F5F5" }}
              />
            </Form.Group>

            <Form.Group controlId="formApartment" className="mb-3">
              <Form.Label>
                Apartment, floor, etc. (optional)
              </Form.Label>
              <Form.Control
                type="text"
                name="apartment"
                value={billingDetails.apartment}
                onChange={handleInputChange}
                style={{ backgroundColor: "#F5F5F5" }}
              />
            </Form.Group>

            <Form.Group controlId="formCity" className="mb-3">
              <Form.Label>Town/City<i className="text-danger">*</i></Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={billingDetails.city}
                onChange={handleInputChange}
                style={{ backgroundColor: "#F5F5F5" }}
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" className="mb-3">
              <Form.Label>Phone Number<i className="text-danger">*</i></Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={billingDetails.phoneNumber}
                onChange={handleInputChange}
                style={{ backgroundColor: "#F5F5F5" }}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address<i className="text-danger">*</i></Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={billingDetails.email}
                onChange={handleInputChange}
                style={{ backgroundColor: "#F5F5F5" }}
              />
            </Form.Group>

            <Form.Group controlId="formSaveInfo" className="mb-3">
              <Form.Check
                type="checkbox"
                label="Save this information for faster check-out next time"
                name="saveInfo"
                checked={billingDetails.saveInfo}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Col>

        <Col md={6}>
          <Card className="mb-3 mt-4" style={{ border: 'none' }}>
            <Card.Body className="" style={{ marginTop: '20' }}>
              <Row>
                <Col className="d-flex justify-content-center align-items-center"><img src={image1} className="" style={{ width: '100%', height: '100px' }} alt="..." /></Col>
                <Col className="align-self-center">LCD Monitor</Col>
                <Col className="align-self-center text-end">$650</Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center align-items-center"><img src={image2} className="" style={{ width: '100px', height: '100px' }} alt="..." /></Col>
                <Col className="align-self-center" >HI Gamepad</Col>
                <Col className="align-self-center text-end">$1100</Col>
              </Row>

              <Row>
                <Col>Subtotal:</Col>
                <Col className="text-end">$1750</Col>
              </Row>
              <hr style={{ borderTop: "2px solid black" }} />
              <Row>
                <Col>Shipping:</Col>
                <Col className="text-end">Free</Col>
              </Row>
              <hr style={{ borderTop: "2px solid black" }} />
              <Row>
                <Col>Total:</Col>
                <Col className="text-end">$1750</Col>
              </Row>
            </Card.Body>
          </Card>

          <Form.Group className="mb-3">

            <Row>
              <div className="d-flex justify-content-between ">
                <Form.Check type="radio" label="Bank" name="paymentMethod" style={{ marginLeft: '15px' }} />
                <div className="d-flex">
                  <img src={image3} style={{ width: '25%', height: '25px' }} alt="..." />
                  <img src={image4} style={{ width: '25%', height: '25px' }} alt="..." />
                  <img src={image6} style={{ width: '25%', height: '25px' }} alt="..." />
                  <img src={image5} style={{ width: '25%', height: '25px' }} alt="..." />
                </div>
              </div>
            </Row>
            <Row style={{ marginLeft: '15px' }}>
              <Form.Check type="radio" label="Cash on delivery" name="paymentMethod" defaultChecked />
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row className="d-flex justify-content-between">
              <Col xs={7} className="align-self-center" >
                <Form.Control type="text" placeholder="Coupon Code" />
              </Col>
              <Col xs={3} className="align-self-center">
                <Button className="mt-0" variant="danger">Apply Coupon</Button>
              </Col>
            </Row>
          </Form.Group>

          <Button variant="danger" onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
