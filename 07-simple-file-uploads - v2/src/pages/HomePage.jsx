import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import ImageGrid from '../components/ImageGrid'
import UploadImageDropzone from '../components/UploadImageDropzone'
import useImages from '../hooks/useImages'

const HomePage = () => {
	const [showUpload, setShowUpload] = useState(false)
	const imagesQuery = useImages()

	return (
		<Container className="py-3">
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1>Images</h1>
				<Button variant="primary" onClick={() => { setShowUpload(!showUpload) }}>
					<FontAwesomeIcon icon={faCloudUploadAlt} />
				</Button>
			</div>

			<div className={`${!showUpload ? 'd-none' : ''}`}>
				<UploadImageDropzone />
				<hr className="my-3" />
			</div>

			{/* Image Grid */}
			<ImageGrid query={imagesQuery} />
		</Container>
	)
}

export default HomePage
