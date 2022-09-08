import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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

import { projectStorage } from "../firebase";

const SignupPage = () => {
    const { setDisplayNameAndPhotoUrl } = useAuthContext();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { signup } = useAuthContext();
    const navigate = useNavigate();
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState(null);

    const handleFileChange = (e) => {
        setThumbnail(null);
        let selected = e.target.files[0];
        console.log(selected);
        if (!selected) {
            setThumbnailError("Please select a file");
        }
        if (!selected.type.includes("image")) {
            setThumbnailError("Selected file must be an image");
        }
        if (selected.size > 100000) {
            return setThumbnailError("Image file size must be less than 100kb");
        }
        setThumbnailError(null);
        setThumbnail(selected);
        console.log("thumbnail updated");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // make sure user has entered the same password in both input fields
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("The passwords does not match");
        }

        setError(null);

        // try to sign up the user with the specified credentials
        try {
            setLoading(true);
            const res = await signup(
                emailRef.current.value,
                passwordRef.current.value
            );
            if (!res) {
                return alert("help");
            }

            if (thumbnail) {
                let photoURL = "";
                console.log(thumbnail);
                //set new thumbnail
                const uploadPath = `thumnbnails/${res.user.uid}/${thumbnail.name}`;
                console.log(uploadPath);
                console.log("before");
                const storageRef = ref(projectStorage, uploadPath);
                console.log("after");
                console.log(storageRef);
                const img = await uploadBytes(storageRef, thumbnail);
                console.log(img);
                console.log(img);

                // const img = await projectStorage
                //     .ref(uploadPath)
                //     .put(thumbnail);
                const fullPath = img.metadata.fullPath;
                photoURL = await getDownloadURL(storageRef);
                console.log(photoURL);
                if (photoURL) {
                    await setDisplayNameAndPhotoUrl("", photoURL);
                    navigate("/");
                }
            }
        } catch (err) {
            console.log(err);
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
                            <Card.Title className="mb-3">Sign Up</Card.Title>

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

                                <Form.Group id="password" className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        ref={passwordRef}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group
                                    id="password-confirm"
                                    className="mb-3"
                                >
                                    <Form.Label>
                                        Password Confirmation
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        ref={passwordConfirmRef}
                                        required
                                    />
                                </Form.Group>
                                {thumbnailError && (
                                    <div className="error">
                                        {thumbnailError}
                                    </div>
                                )}
                                <Form.Group id="profile-img" className="mb-3">
                                    <Form.Label>Profile Thumbnail</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </Form.Group>

                                <Button disabled={loading} type="submit">
                                    Create Account
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    <div className="text-center mt-3">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignupPage;
