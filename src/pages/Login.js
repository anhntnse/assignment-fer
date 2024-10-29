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

const Login = () => {
    return (
        <Container className="my-5">
      <Card className="border-0 shadow-sm">
        <Row className="g-0">
          <Col md={6}>
            <Image
              src="https://www.bing.com/images/blob?bcid=S6WfgySMIa0HIm8pOApzK265uDTH.....-I"
              alt="login form"
              className="rounded-start w-100"
            />
          </Col>

          <Col
            md={6}
            className="d-flex flex-column align-items-center justify-content-center py-5"
          >
            <Card.Body className="d-flex flex-column">
              <div className="d-flex flex-row mt-2 align-items-center">
                <span className="h2 mb-0" style={{ letterSpacing: "1px" }}>
                  Login to Exclusive
                </span>
              </div>

              <h5 className="fs-6 fw-normal my-3 pb-3">
                Enter your details below
              </h5>

              <Form>
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
                <Row>
                <Col>
                <Button variant="danger" type="submit" className="mt-2 px-5 py-3">
                  Login
                </Button>
                </Col>
                <Col className="mt-3 m-lg-4">
                <a href="#!" className="small text-danger" style={{textDecoration: "none"}}>
                Forgot password?
              </a>
              </Col>
              </Row>              
              </Form> 
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
    );
}
export default Login;