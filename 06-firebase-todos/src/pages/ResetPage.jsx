import React, { useRef, useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
    Alert,
} from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const ResetPage = () => {
    const emailRef = useRef();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { resetPassword } = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // try to login the user with the specified credentials

        try {
            setLoading(true);
            await resetPassword(emailRef.current.value);
            navigate("/");
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <Container className="py-3">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-3">
                                Reset Password
                            </Card.Title>

                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        ref={emailRef}
                                        required
                                    />
                                </Form.Group>

                                <Button disabled={loading} type="submit">
                                    Send reset mail
                                </Button>
                            </Form>

                            <div className="text-center mt-3">
                                <Link to="/login">Remembered it again?</Link>
                            </div>
                        </Card.Body>
                    </Card>

                    <div className="text-center mt-3">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ResetPage;
