import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import { fbTimestampToDateString } from '../helpers/time'
import classNames from 'classnames'

const TodoListItem = ({ todo }) => {
	return (
		<ListGroup.Item
			action
			as={Link}
			className={classNames({
				'todo-list-item': true,
				'completed': todo.completed,
			})}
			to={`/todos/${todo.id}`}
		>
			<span>{todo.title}</span>
			<span className="due-date">{fbTimestampToDateString(todo.due_date)}</span>
		</ListGroup.Item>
	)
}

export default TodoListItem
