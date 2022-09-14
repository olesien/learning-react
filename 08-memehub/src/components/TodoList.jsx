import ListGroup from 'react-bootstrap/ListGroup'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos }) => {
	return (
		<ListGroup>
			{todos.map(todo => (
				<TodoListItem todo={todo} key={todo.id} />
			))}
		</ListGroup>
	)
}

export default TodoList
