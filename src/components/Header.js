import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Col,
  Stack,
  InputGroup,
} from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="border-b shadow-sm">
      <Navbar bg="white" expand="lg" className="py-3">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo/Brand Name */}
          <Col md={2}>
            <Navbar.Brand href="/" className="fw-bold fs-3">
              Exclusive
            </Navbar.Brand>
          </Col>

          {/* Toggle Button for Mobile */}
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>

          <Col md={6}>
            {/* Navigation Links */}
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav className="mx-auto">
                <Stack direction="horizontal" gap={3}>
                  <NavLink
                    to='/'
                    className="fw-semibold md-3"
                    style={{ color: "black", textDecoration: 'none' }}
                  >
                    Home
                  </NavLink>
                  <Nav.Link
                    href="/contact"
                    className="fw-semibold md-3"
                    styple={{ color: "black" }}
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    href="#about"
                    className="fw-semibold md-3"
                    styple={{ color: "black" }}
                  >
                    About
                  </Nav.Link>
                  <NavLink to="/sign-up" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '600' }}>
                    {/* <Nav.Link
                      // href="/sign-up"
                      className="fw-semibold md-3"
                      styple={{ color: "black" }}
                    > */}
                    Sign Up
                    {/* </Nav.Link> */}
                  </NavLink>
                </Stack>
              </Nav>
            </Navbar.Collapse>
          </Col>

          <Col md={4}>
            {/* Search Bar and Icons */}
            <div className="d-flex align-items-center">
              <Form className="d-flex">
                <InputGroup
                  style={{
                    width: "300px",
                    backgroundColor: "#F5F5F5",
                    borderRadius: "5px",
                  }}
                >
                  <FormControl
                    type="search"
                    placeholder="What are you looking for?"
                    aria-label="Search"
                    style={{
                      backgroundColor: "#F5F5F5",
                      border: "none",
                      height: "40px",
                    }} // Loại bỏ đường viền của ô nhập liệu
                  />
                  <InputGroup.Text
                    style={{ backgroundColor: "#F5F5F5", border: "none" }}
                  >
                    <FaSearch style={{ color: "#000" }} />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
              {/* Icons with black color and white border */}
              <Link to="/wish-list">

                <FaRegHeart
                  className="ms-3"
                  style={{ fontSize: "25px", color: "#000" }}
                />
              </Link>{" "}
              {/* Trái tim viền đen */}
              <Link to="/cart">
                <AiOutlineShoppingCart
                  className="ms-4"
                  style={{ fontSize: "25px", color: "#000" }}
                />
              </Link>{" "}
            </div>
          </Col>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
