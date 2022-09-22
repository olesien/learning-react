import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'

const UserPage = () => {
	const { username } = useParams()

	return (
		<>
			<h1>{username}</h1>

			<div className="mt-4">
				<Button as={Link} to={`/users`} variant="secondary">&laquo; Back</Button>
			</div>
		</>
	)
}

export default UserPage
