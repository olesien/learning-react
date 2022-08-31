import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Moment from "moment";

const TodoListItem = ({ todo }) => {
    const deadline = todo.deadline
        ? new Date(todo.deadline.seconds * 1000)
        : "";
    const formatDate = Moment(deadline).format("DD-MM-YYYY, hh:mm");
    return (
        <ListGroup.Item
            action
            as={Link}
            className={todo.completed ? "completed" : ""}
            to={`/todos/${todo.id}`}
        >
            {todo.title} due by {formatDate}
        </ListGroup.Item>
    );
};

export default TodoListItem;
