import { useState } from 'react';
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
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../config/Config';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    console.log('data: ', { email, password });

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // alert("Login successful!");
      toast.success("Login successful!");
      navigate('/');
      // setEmail('');
      // setPassword('');
    } catch (error) {
      setError(error.message);
    };
  };

  console.log('data: ', { email, password });

  return (
    <Container className="my-5">
      <Card className="border-0 shadow-sm">
        <Row className="g-0">
          <Col md={6}>
            <Image
              src="https://bstats.org/images/i-need-you-to-login.jpg"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Control
                    type="password"
                    size="md"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                {error && <p>{error}</p>}
                <Button variant="danger" className="mt-2 px-5 py-3" onClick={login}>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
export default Login;