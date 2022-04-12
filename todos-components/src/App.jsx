import { useEffect, useState } from "react";
import TodoListItem from "./components/TodoListItem";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
    const [todos, setTodos] = useState([
        { title: "Make coffee", completed: true },
        { title: "Drink coffee", completed: false },
        { title: "Drink MOAR coffee", completed: false },
        { title: "Drink ALL THE coffee", completed: false },
    ]);
    const [unfinishedTodos, setUnfinishedTodos] = useState([]);
    const [finishedTodos, setFinishedTodos] = useState([]);

    const toggleTodo = (todo) => {
        todo.completed = !todo.completed;
        setTodos([...todos]);
    };

    const deleteTodo = (clickedTodo) => {
        setTodos(todos.filter((todo) => todo !== clickedTodo));
    };

    const setNewTodos = (newTodos) => {
        setTodos([...todos, newTodos]);
    };

    // This will only be executed when the component is mounted,
    // and only AFTER the component has been rendered
    useEffect(() => {
        console.log("I'm a newly mounted component 👶🏽");
    }, []);

    // This will only be executed if `todos` have changed since last render,
    // and only AFTER the component has been rendered
    useEffect(() => {
        // Derive unfinishedTodos and finishedTodos from todos state
        console.log("Filtering todos...");
        setUnfinishedTodos(todos.filter((todo) => !todo.completed));
        setFinishedTodos(todos.filter((todo) => todo.completed));
    }, [todos]);

    // This will only be executed if `finishedTodos` OR `todos` have changed since last render,
    // and only AFTER the component has been rendered
    useEffect(() => {
        console.log("Updating page title...");
        document.title = `${finishedTodos.length}/${todos.length} completed`;
    }, [finishedTodos, todos]);

    return (
        <div className="App container">
            <h1>React Simple Todos</h1>

            <div className="mb-3">
                <TodoForm setNewTodos={setNewTodos} />
            </div>

            {todos.length > 0 && (
                <>
                    {unfinishedTodos.length > 0 && (
                        <TodoList
                            list={unfinishedTodos}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    )}

                    {finishedTodos.length > 0 && (
                        <>
                            <h2>Completed todos</h2>
                            <TodoList
                                list={finishedTodos}
                                toggleTodo={toggleTodo}
                                deleteTodo={deleteTodo}
                            />
                        </>
                    )}

                    <p className="status">
                        {finishedTodos.length} av {todos.length} todos
                        avklarade.
                    </p>
                </>
            )}
        </div>
    );
};

export default App;
