import React from 'react';
import { NavLink, BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';

import './AdminPanel.css';

function AminPanel() {
    return (
        <Container fluid className='mt-5'>
            <Row>
                <Col md={3}>
                    <Nav id='sidebar' style={{ display: 'flex', direction: 'column' }}>
                        <NavLink to={"all-users"} style={{ height: "30px", textDecoration: 'none', color: '#000' }}>
                            Users
                        </NavLink>
                        <NavLink to={"all-products"} className="mt-2" style={{ height: "30px", textDecoration: 'none', color: '#000' }}>
                            Products
                        </NavLink>
                    </Nav>
                </Col>
                <Col md={9}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}

export default AminPanel;