import React from 'react';
import { Container, Row, Col, Form, Button, Breadcrumb } from 'react-bootstrap';
import '../styles/account.css'
function Account() {
    return (
        <Container className="mt-4">
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>My Account</Breadcrumb.Item>
            </Breadcrumb>
            
            <Row>
                {/* Sidebar */}
                <Col md={3}>
                    <div className="sidebar">
                        <h5 className="mb-4" style={{fontSize: "20px"}}>Manage My Account</h5>
                        <ul className="list-custom">
                            <li><a href="#profile" className="text-danger">My Profile</a></li>
                            <li><a href="#address">Address Book</a></li>
                            <li><a href="#payment">My Payment Options</a></li>
                        </ul>
                        <h5 className="mt-4 mb-4">My Orders</h5>
                        <ul className="list-custom">
                            <li><a href="#returns">My Returns</a></li>
                            <li><a href="#cancellations">My Cancellations</a></li>
                        </ul>
                        <h5 className="mt-4">My Wishlist</h5>
                    </div>
                </Col>
                
                {/* Edit Profile Form */}
                <Col md={9}>
                    <div className="edit-profile">
                        <h5 className="mb-4" style={{color: "#DB4444", paddingLeft: "50px", paddingTop: "30px"}}>Edit Your Profile</h5>
                        <Form style={{padding: "0 50px"}}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Md" className='custom-input' />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Rimel"  className='custom-input' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="rimel1111@gmail.com"  className='custom-input' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Kingston, 5236, United States"  className='custom-input' />
                            </Form.Group>

                            <h5 className="mt-4">Password Changes</h5>
                            <Form.Group className="mb-3" controlId="currentPassword">
                                <Form.Control type="password" placeholder="Current Password"  className='custom-input' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="newPassword">
                                <Form.Control type="password" placeholder="New Password" className='custom-input' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="confirmPassword">
                                <Form.Control type="password" placeholder="Confirm New Password" className='custom-input' />
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <Button variant="light"className="me-2">Cancel</Button>
                                <Button variant="danger">Save Changes</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Account;
