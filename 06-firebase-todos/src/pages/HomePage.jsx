import Container from 'react-bootstrap/Container'
import { auth } from '../firebase'

const HomePage = () => {
	return (
		<Container className="py-3">
			<h1>Welcome!</h1>

			{auth.currentUser
				? <p>You are logged in as {auth.currentUser.email}!</p>
				: <p>Anonymous haxx0r</p>
			}
		</Container>
	)
}

export default HomePage
