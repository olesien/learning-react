import { useEffect, useState } from "react";

import AlertInfo from "../components/AlertInfo";
import TodoList from "../components/TodoList";
import TodosAPI from "../services/TodosAPI";

const TodosPage = () => {
    const [todos, setTodos] = useState([]);
    const [unfinishedTodos, setUnfinishedTodos] = useState([]);
    const [finishedTodos, setFinishedTodos] = useState([]);

    // Get todos from api
    const getTodos = async () => {
        const data = await TodosAPI.getTodos();
        setTodos(data);
    };

    // Delete a todo in the api
    const deleteTodo = async (todo) => {
        await TodosAPI.deleteTodo(todo.id);
        getTodos();
    };

    // Toggle the completed status of a todo in the api
    const toggleTodo = async (todo) => {
        await TodosAPI.updateTodo(todo.id, {
            completed: !todo.completed,
        });
        getTodos();
    };

    // Get todos from api when component is first mounted
    useEffect(() => {
        getTodos();
    }, []);

    // This will only be executed if `todos` have changed since last render,
    // and only AFTER the component has been rendered
    useEffect(() => {
        // Derive unfinishedTodos and finishedTodos from todos state
        setUnfinishedTodos(todos.filter((todo) => !todo.completed));
        setFinishedTodos(todos.filter((todo) => todo.completed));
    }, [todos]);

    // This will only be executed if `finishedTodos` OR `todos` have changed since last render,
    // and only AFTER the component has been rendered
    useEffect(() => {
        document.title = `${finishedTodos.length}/${todos.length} completed`;
    }, [finishedTodos, todos]);

    return (
        <>
            <h1>React Simple Todos</h1>

            {todos.length > 0 && (
                <>
                    {unfinishedTodos.length > 0 && (
                        <TodoList
                            todos={unfinishedTodos}
                            onToggleTodo={toggleTodo}
                            onDeleteTodo={deleteTodo}
                        />
                    )}
                    {unfinishedTodos.length === 0 && (
                        <AlertInfo>
                            <h2>Yeeehaaaaw!</h2>
                            <img
                                src="https://c.tenor.com/cBcdBXtqL8UAAAAC/colin-mochrie-whos-awesome.gif"
                                className="img-fluid"
                                alt="You're awesome!"
                            />
                            <p>
                                You got <strong>nothing</strong> to do.
                            </p>
                        </AlertInfo>
                    )}

                    {finishedTodos.length > 0 && (
                        <>
                            <h2>Completed todos</h2>
                            <TodoList
                                todos={finishedTodos}
                                onToggleTodo={toggleTodo}
                                onDeleteTodo={deleteTodo}
                            />
                        </>
                    )}

                    <p className="status">
                        {finishedTodos.length} av {todos.length} todos
                        avklarade.
                    </p>
                </>
            )}

            {todos.length === 0 && (
                <>
                    <AlertInfo>
                        Move along people, nothing to see here.
                    </AlertInfo>
                </>
            )}
        </>
    );
};

export default TodosPage;
