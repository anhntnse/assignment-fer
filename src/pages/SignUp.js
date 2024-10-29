import {
    Container,
    Card,
    Row,
    Col,
    Button,
    Form,
    Image,
    FormGroup,
    FormControl,
  } from "react-bootstrap";

const SignUp = () => {
    return (
        <Container className="my-5">
      <Card className="border-0 shadow-sm">
        <Row className="g-0">
          <Col md={6}>
            <Image
              src="https://www.bing.com/images/blob?bcid=S6WfgySMIa0HIm8pOApzK265uDTH.....-I"
              alt="sign up form"
              className="rounded-start w-100"
            />
          </Col>

          <Col
            md={6}
            className="d-flex flex-column align-items-center justify-content-center py-3"
          >
            <Card.Body className="d-flex flex-column">
              <div className="d-flex flex-row mt-2 align-items-center">
                <span className="h2 mb-0" style={{ letterSpacing: "1px" }}>
                  Create an account
                </span>
              </div>

              <h5 className="fs-6 fw-normal my-3 pb-3">
                Enter your details below
              </h5>

              <Form>
                <FormGroup controlId="formName" className="mb-4">
                  <FormControl type="Name" size="md" placeholder="Name" />
                </FormGroup>
                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Control
                    type="email"
                    size="md"
                    placeholder="Email or Phone Number"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Control
                    type="password"
                    size="md"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button variant="danger" type="submit" className="w-100 py-3">
                  Create Account
                </Button>
                <Button variant="outline-secondary" className="w-100 my-3 py-3" style={{color:'black'}}>
                  <img
                    src="https://img.icons8.com/?size=25&id=17949&format=png&color=000000"
                    alt="Google Icon"
                    className="me-2"
                  />
                  Sign up with Google
                </Button>
              </Form>

              <p className="text-center mt-3">
                Already have an account? <a href="/login">Login</a>
              </p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
    );
}

export default SignUp;