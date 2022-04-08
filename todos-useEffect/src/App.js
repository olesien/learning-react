import { useEffect, useState } from "react";
import "./style.css";

const App = () => {
    const [todos, setTodos] = useState([
        { title: "React Rocks 🤘🏻!", completed: false },
        { title: "JSX Rocks Even Moar 🤘🏻!", completed: true },
        { title: "Got State?", completed: false },
    ]);

    const [finishedTodos, setFinishedTodos] = useState([]);
    const [unFinishedTodos, setUnFinishedTodos] = useState([]);

    // const addLike = (post) => {
    //     console.log(post);
    //     post.likes++;
    //     setPosts([...posts]);
    // };

    const [todoTitle, setTodoTitle] = useState("");

    const newTodo = (e) => {
        e.preventDefault();
        const newPost = { title: todoTitle, completed: false };
        setTodos([...todos, newPost]);
        setTodoTitle("");
    };

    const toggleTodo = (todo) => {
        todo.completed = !todo.completed;
        setTodos([...todos]);
    };

    useEffect(() => {
        console.log("i'm rendering a side effect");
        //exeucted on each one!

        setFinishedTodos(todos.filter((todo) => todo.completed));

        setUnFinishedTodos(todos.filter((todo) => !todo.completed));
    }, [todos]);

    useEffect(() => {
        document.title = unFinishedTodos.length + " / " + finishedTodos.length;
    }, [finishedTodos, unFinishedTodos]);

    useEffect(() => {
        console.log("First run");
    }, []);

    return (
        <div className="App container">
            <h1>Todos!</h1>
            <p>
                {finishedTodos.length} / {todos.length} todos completed
            </p>
            <form onSubmit={newTodo}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Got moar stuff to do?"
                        onChange={(e) => {
                            setTodoTitle(e.target.value);
                        }}
                        value={todoTitle}
                    />
                    <button type="submit" className="btn btn-primary">
                        Add todo
                    </button>
                </div>
            </form>
            <div className="d-flex flex-row justify-content-center">
                {finishedTodos.length > 0 ? (
                    <div className="finished-todos p-2">
                        <h3>Finished todos</h3>

                        <ul className="list-group">
                            {todos
                                .filter((todo) => todo.completed)
                                .map((todo, index) => (
                                    <li
                                        className={
                                            todo.completed
                                                ? "list-group-item completed"
                                                : "list-group-item not-completed"
                                        }
                                        key={index}
                                    >
                                        <span
                                            onClick={() => {
                                                toggleTodo(todo);
                                            }}
                                        >
                                            {todo.title}
                                        </span>{" "}
                                        <button
                                            onClick={() =>
                                                setTodos(
                                                    todos.filter(
                                                        (oldtodo) =>
                                                            oldtodo !== todo
                                                    )
                                                )
                                            }
                                            className="btn btn-danger"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ) : (
                    <p>No finished todos :(!</p>
                )}

                {unFinishedTodos.length > 0 ? (
                    <div className="unfinished-todos p-2">
                        <h3>unfinished todos</h3>
                        <ul className="list-group">
                            {todos
                                .filter((todo) => !todo.completed)
                                .map((todo, index) => (
                                    <li
                                        className={
                                            todo.completed
                                                ? "list-group-item completed"
                                                : "list-group-item not-completed"
                                        }
                                        key={index}
                                    >
                                        <span
                                            onClick={() => {
                                                toggleTodo(todo);
                                            }}
                                        >
                                            {todo.title}
                                        </span>{" "}
                                        <button
                                            onClick={() =>
                                                setTodos(
                                                    todos.filter(
                                                        (oldtodo) =>
                                                            oldtodo !== todo
                                                    )
                                                )
                                            }
                                            className="btn btn-danger"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ) : (
                    <p>Currently no unfinished todos :)!</p>
                )}
            </div>
        </div>
    );
};

export default App;
