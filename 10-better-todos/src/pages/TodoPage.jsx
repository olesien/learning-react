import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TodosAPI from "../services/TodosAPI";

export default function TodoPage() {
    const [todo, setTodo] = useState();
    // Get todo from api
    const getTodo = async (id) => {
        const data = await TodosAPI.getTodo(id);
        console.log(data);
        setTodo(data);
    };
    const params = useParams();

    useEffect(() => {
        getTodo(id);
    }, []);

    const { id } = params;
    return (
        <>
            {todo ? (
                <div>
                    {todo.title}{" "}
                    <p className="status">
                        Status: {todo.completed ? "Completed" : "Not completed"}
                    </p>
                    <Button variant="primary">Mark completed</Button>
                    <Button variant="danger">Delete</Button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
