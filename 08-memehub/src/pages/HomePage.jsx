import Container from 'react-bootstrap/Container'
import { useAuthContext } from '../contexts/AuthContext'

const HomePage = () => {
	const { currentUser } = useAuthContext()

	return (
		<Container className="py-3">
			<h1 className="display-1">😂</h1>

			<p className="display-2">Show me dem memes!</p>
		</Container>
	)
}

export default HomePage
