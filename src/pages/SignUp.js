import { useState } from "react";
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
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore";

import { auth, db } from '../config/Config';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    // console.log('data: ', { name, email, password })
    // console.log('form submitted');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        name: name,
        password: password,
        role: 'GENERAL',
        createdAt: new Date(),
      });

      navigate('/');
      // alert("User registered and stored successfully!");
      // setName('');
      // setEmail('');
      // setPassword('');

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container className="my-5">
      <Card className="border-0 shadow-sm">
        <Row className="g-0">
          <Col md={6}>
            <Image
              src="https://media.makeameme.org/created/its-time-registration.jpg"
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

              <Form onSubmit={signUp}>
                <FormGroup controlId="formName" className="mb-4">
                  <FormControl type="Name" size="md" placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Control
                    type="email"
                    size="md"
                    placeholder="Email"
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

                <Button variant="danger" type="submit" className="w-100 py-3">
                  Create Account
                </Button>
                <Button variant="outline-secondary" className="w-100 my-3 py-3" style={{ color: 'black' }}>
                  <img
                    src="https://img.icons8.com/?size=25&id=17949&format=png&color=000000"
                    alt="Google Icon"
                    className="me-2"
                  />
                  Sign up with Google
                </Button>
              </Form>

              <p className="text-center mt-3">
                Already have an account? <Link to='/login'>Login</Link>
              </p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default SignUp;