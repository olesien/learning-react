import ListGroup from 'react-bootstrap/ListGroup'

const TodoList = ({ todos, onToggleTodo }) => {
	return (
		<ListGroup role="list">
			{todos.map(todo => {
				const statusClass = todo.completed ? 'completed' : 'not-completed'

				return (
					<ListGroup.Item
						action
						className={`${statusClass} d-flex justify-content-between align-items-center`}
						key={todo.id}
						onClick={() => { onToggleTodo(todo) }}
						role="listitem"
					>
						<span title={todo.id}>{todo.title}</span>
					</ListGroup.Item>
				)
			})}
		</ListGroup>
	)
}

export default TodoList
