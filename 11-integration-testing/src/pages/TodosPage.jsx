import React, { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoCounter from "../components/TodoCounter";
import TodoList from "../components/TodoList";

const TodosPage = ({ initialTodos }) => {
    const [todos, setTodos] = useState(initialTodos ? initialTodos : []);

    const handleNewTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const handleToggleTodo = (todo) => {
        todo.completed = !todo.completed;
        setTodos([...todos]);
    };

    return (
        <>
            <h1>Todos</h1>

            <AddTodoForm onNewTodo={handleNewTodo} />
            <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
            <TodoCounter
                count={todos.filter((todo) => !todo.completed).length}
            />
        </>
    );
};

export default TodosPage;
