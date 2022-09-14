import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Alert from 'react-bootstrap/Alert'
import ProgressBar from 'react-bootstrap/ProgressBar'
import classNames from 'classnames'
import useUploadImage from '../hooks/useUploadImage'

const UploadImageDropzone = () => {
	const uploadImage = useUploadImage()

	const onDrop = useCallback((acceptedFiles) => {
		console.log("Got me zum files 😋", acceptedFiles)

		if (!acceptedFiles.length) {
			return
		}

		uploadImage.mutate(acceptedFiles[0])
	}, [])

	const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
		accept: {
			'image/gif': ['.gif'],
			'image/jpeg': ['.jpg', '.jpeg'],
			'image/png': ['.png'],
			'image/webp': ['.webp'],
		},
		onDrop,
	})

	const cssClasses = classNames({
		'drag-accept': isDragAccept,
		'drag-reject': isDragReject,
	})

	return (
		<div {...getRootProps()} id="upload-image-dropzone-wrapper" className={cssClasses}>
			<input {...getInputProps()} />

			{
				isDragActive
					? isDragAccept
						? <p>Drop it like its hot 🔥!</p>
						: <p>We don't want that file 😡!</p>
					: <p>Give me some files 😋!</p>
			}

			{uploadImage.isMutating && (
				<ProgressBar
					animated
					now={uploadImage.uploadProgress}
					label={`${uploadImage.uploadProgress}%`}
					variant="success"
				/>
			)}

			{uploadImage.isError && <Alert variant="warning">{uploadImage.error.message}</Alert>}
			{uploadImage.isSuccess && <Alert variant="success">File uploaded successfully ✨!</Alert>}
		</div>
	)
}

export default UploadImageDropzone
