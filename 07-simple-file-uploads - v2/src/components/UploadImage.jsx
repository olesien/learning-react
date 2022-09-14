import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import useUploadImage from '../hooks/useUploadImage'

const UploadImage = () => {
	const [image, setImage] = useState(null)
	const [message, setMessage] = useState()
	const uploadImage = useUploadImage()

	const handleFileChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0])
		}
		console.log("File changed!", e.target.files[0])
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		uploadImage.mutate(image)
	}

	const handleReset = () => {
		setImage(null)
		setMessage(null)
	}

	return (
		<>
			{message && <Alert variant={message.type}>{message.msg}</Alert>}

			<Form onSubmit={handleSubmit} onReset={handleReset}>
				<Form.Group controlId="formImage" className="mb-3">
					<Form.Label>Choose image to upload</Form.Label>
					<Form.Control type="file" onChange={handleFileChange} />

					<Form.Text className="text-muted">
						{
							image
								? `${image.name} (${Math.round(image.size/1024)} kB)`
								: 'No image selected'
						}
					</Form.Text>
				</Form.Group>

				<Button type="submit" variant="primary" disabled={uploadImage.isMutating}>Upload</Button>
				<Button type="reset" variant="danger">Reset</Button>
			</Form>

			{uploadImage.uploadProgress !== null && (
				<ProgressBar
					now={uploadImage.uploadProgress}
					label={`${uploadImage.uploadProgress}%`}
					className="my-3"
					animated
					striped
					variant="success"
				/>
			)}
		</>
	)
}

export default UploadImage
