import React, { useRef, useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const ForgotPasswordPage = () => {
	const emailRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState(false)
	const { resetPassword } = useAuthContext()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError(null);
		setMessage(null);

		// try to send the password reset link to the given email
		try {
			setLoading(true)

			// send email
			await resetPassword(emailRef.current.value)

			// show success message
			setMessage("Password reset link successfully sent!")

		} catch (err) {
			setError(err.message)
			setLoading(false)

		} finally {
			setLoading(false)

		}
	}

	return (
		<Container className="py-3 center-y">
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body>
							<Card.Title className="mb-3">Forgot Password?</Card.Title>

							{error && (<Alert variant="danger">{error}</Alert>)}
							{message && (<Alert variant="success">{message}</Alert>)}

							<p>Enter your email address and we will send you a password reset link.</p>

							<p><small><em>Please check your spam-folder if you do not receive the email.</em></small></p>

							<Form onSubmit={handleSubmit}>

								<Form.Group id="email" className="mb-3">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>

								<Button disabled={loading} type="submit">Send password reset email</Button>
							</Form>

						</Card.Body>
					</Card>

					<div className="text-center mt-3">
						Suddenly remembered your password?<br/>
						<Link to="/login">Log In</Link>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default ForgotPasswordPage
