import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const LogoutPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { logout } = useAuthContext();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                setLoading(true);
                await logout();
                navigate("/");
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        logoutUser();
    }, []);

    return (
        <Container className="py-3">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Log Out</Card.Title>

                            <Card.Text>
                                {error
                                    ? error
                                    : "Please wait while you're being logged out..."}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LogoutPage;
