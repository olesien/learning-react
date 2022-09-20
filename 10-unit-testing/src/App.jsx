import Container from 'react-bootstrap/Container'
import LoginForm from './components/LoginForm'
import './assets/scss/App.scss'

const App = () => {
	return (
		<Container className="my-5">
			<LoginForm />
		</Container>
	)
}

export default App
