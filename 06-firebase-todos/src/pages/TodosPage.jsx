import Container from "react-bootstrap/Container";
import CreateTodoForm from "../components/CreateTodoForm";
import TodoList from "../components/TodoList";
import useGetTodos from "../hooks/useGetTodos";
import { collection, orderBy, query } from "firebase/firestore";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { db } from "../firebase";
import { Navigate } from "react-router-dom";

const TodosPage = () => {
    const queryRef = query(collection(db, "todos"), orderBy("title"));
    const { data: todos, isLoading } = useFirestoreQueryData(
        ["todos"],
        queryRef,
        {
            idField: "id",
            subscribe: true,
        }
    );

    return (
        <Container className="py-3">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <h1>Todos</h1>
            </div>

            {isLoading && <p>Loading data...</p>}

            {!isLoading && <TodoList todos={todos} />}

            <hr className="my-4" />

            <h2>Create New Todo</h2>
            <CreateTodoForm />
        </Container>
    );
};

export default TodosPage;
