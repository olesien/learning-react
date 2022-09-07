import { useRef, useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
    Alert,
} from "react-bootstrap";

import { useAuthContext } from "../contexts/AuthContext";

const UpdateProfilePage = ({ user }) => {
    console.log(user);
    const { updateName, updateMail, changePassword } = useAuthContext();
    const displayNameRef = useRef(user.displayName);
    const emailRef = useRef(user.email);
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // make sure user has entered the same password in both input fields
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("The passwords does not match");
        }

        if (passwordRef.current.value.length < 5) {
            return setError("Password is too short..");
        }

        setError(null);
        setMessage(null);

        // update user profile
        try {
            // disable update-button while updating is in progress
            setLoading(true);

            // update displayName *ONLY* if it has changed
            if (
                displayNameRef.current.value &&
                displayNameRef.current.value != user.displayName
            ) {
                //changed
                await updateName(displayNameRef.current.value);
            }

            if (
                emailRef.current.value &&
                emailRef.current.value != user.email
            ) {
                //changed
                await updateMail(emailRef.current.value);
            }

            if (passwordRef.current.value) {
                //changed
                await changePassword(passwordRef.current.value);
            }

            // update email *ONLY* if it has changed

            // update password *ONLY* if the user has provided a new password to set

            setMessage("Profile successfully updated");
            setLoading(false);
        } catch (e) {
            console.log(e);
            setError("Error updating profile. Try logging out and in again.");
            setLoading(false);
        }
    };

    return (
        <Container className="py-3 center-y">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Header as="h5">Update Profile</Card.Header>
                        <Card.Body>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && (
                                <Alert variant="success">{message}</Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                {/*
									Fill the displayName and email form fields with their current value!
								*/}
                                <Form.Group id="displayName" className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        ref={displayNameRef}
                                        placeholder={user.displayName}
                                    />
                                </Form.Group>

                                <Form.Group id="email" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        ref={emailRef}
                                        placeholder={user.email}
                                    />
                                </Form.Group>

                                <Form.Group id="password" className="mb-3">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        ref={passwordRef}
                                        autoComplete="new-password"
                                    />
                                </Form.Group>

                                <Form.Group
                                    id="password-confirm"
                                    className="mb-3"
                                >
                                    <Form.Label>
                                        Confirm New Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        ref={passwordConfirmRef}
                                        autoComplete="new-password"
                                    />
                                </Form.Group>

                                <Button disabled={loading} type="submit">
                                    Update
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UpdateProfilePage;
