import { Link } from "react-router-dom";

const TodoListItem = ({ todo, onTitleClick, onDelete }) => {
    return (
        <li className={todo.completed ? "done" : ""}>
            {/* <span
				className="todo-title"
				onClick={() => onTitleClick(todo)}
			>
				{todo.title}
			</span>

			<span
				className="todo-delete"
				onClick={() => onDelete(todo)}
			>🗑</span> */}
            <Link className="todo-title" to={`/todos/${todo.id}`}>
                {todo.title}
            </Link>
        </li>
    );
};

export default TodoListItem;
