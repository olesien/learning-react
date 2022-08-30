import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import useGetTodos from "../hooks/useGetTodos";

const TodosPage = () => {
    let { todos, loading } = useGetTodos();
    if (loading) {
        return <p>Loading</p>;
    }
    return (
        <Container className="py-3">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <h1>Todos</h1>
                <Button onClick={() => {}}>Refresh</Button>
            </div>

            <ListGroup>
                {todos.length < 1 ? (
                    <p>No todos</p>
                ) : (
                    todos.map((todo, index) => (
                        <ListGroup.Item
                            action
                            as={Link}
                            to={`/todos/${todo.id}`}
                            key={index}
                        >
                            {todo.title}
                        </ListGroup.Item>
                    ))
                )}
            </ListGroup>
        </Container>
    );
};

export default TodosPage;
