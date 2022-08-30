import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'

const TodoPage = () => {
	const { id } = useParams()

	return (
		<Container className="py-3">

			<div className="d-flex justify-content-between align-items-start mb-3">
				<h1>{id}</h1>

				<Button onClick={() => {}}>Refresh</Button>
			</div>

			<ButtonGroup className="todo-actions">
				<Button variant="primary" onClick={() => {}}>Toggle</Button>
				<Button variant="danger" onClick={() => {}}>Delete</Button>
			</ButtonGroup>

		</Container>
	)
}

export default TodoPage
