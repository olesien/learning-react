import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import CreateTodoForm from '../components/CreateTodoForm'
import TodoList from '../components/TodoList'
import useGetTodos from '../hooks/useGetTodos'

const TodosPage = () => {
	const { data: todos, loading } = useGetTodos()

	return (
		<Container className="py-3">

			<div className="d-flex justify-content-between align-items-start mb-3">
				<h1>Todos</h1>
			</div>

			{loading && (<p>Loading data...</p>)}

			{!loading && <TodoList todos={todos} />}

			<hr className="my-4" />

			<h2>Create New Todo</h2>
			<CreateTodoForm />

		</Container>
	)
}

export default TodosPage
