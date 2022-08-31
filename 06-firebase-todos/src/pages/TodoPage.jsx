import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";
import useGetTodo from "../hooks/useGetTodo";
import { toast } from "react-toastify";

import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

import Moment from "moment";

const TodoPage = () => {
    const { id } = useParams();
    const { data: todo, getData, loading } = useGetTodo(id);
    const docRef = doc(db, "todos", id);
    let navigate = useNavigate();
    const onToggle = async () => {
        if (!todo) return;
        await setDoc(
            docRef,
            {
                completed: !todo.completed,
            },
            { merge: true }
        );
    };

    const onDelete = async () => {
        if (!todo) return;
        const notDeleted = await deleteDoc(docRef);
        if (!notDeleted) {
            toast("Document deleted!!");
            navigate(`/todos`);
        }
    };
    const deadline = todo.deadline
        ? new Date(todo.deadline.seconds * 1000)
        : "";
    const formatDate = Moment(deadline).format("DD-MM-YYYY, hh:mm");
    return (
        <Container className="py-3">
            {loading && <p>Loading todo...</p>}

            {!loading && !todo && <p>That's not a todo that exists...</p>}

            {!loading && todo && (
                <>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <h1>{todo.title}</h1>

                        <Button onClick={getData}>Refresh</Button>
                    </div>

                    <p>
                        Status:{" "}
                        <span className="status">
                            {todo.completed ? "Completed" : "Not completed"}
                        </span>
                    </p>

                    <p>
                        Deadline: <span className="deadline">{formatDate}</span>
                    </p>

                    <ButtonGroup className="todo-actions">
                        <Button variant="primary" onClick={onToggle}>
                            Toggle
                        </Button>
                        <Button variant="danger" onClick={onDelete}>
                            Delete
                        </Button>
                    </ButtonGroup>
                </>
            )}
        </Container>
    );
};

export default TodoPage;
