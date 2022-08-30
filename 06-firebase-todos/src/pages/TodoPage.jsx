import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import useGetTodo from "../hooks/useGetTodo";

const TodoPage = () => {
    const { id } = useParams();

    let { todo, loading } = useGetTodo(id);
    if (loading) {
        return <p>Loading</p>;
    }
    console.log(todo);

    return (
        <Container className="py-3">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <h1>{todo.title}</h1>
                <p>{todo.completed ? "completed" : "not completed"}</p>

                <Button onClick={() => {}}>Refresh</Button>
            </div>

            <ButtonGroup className="todo-actions">
                <Button variant="primary" onClick={() => {}}>
                    Toggle
                </Button>
                <Button variant="danger" onClick={() => {}}>
                    Delete
                </Button>
            </ButtonGroup>
        </Container>
    );
};

export default TodoPage;
