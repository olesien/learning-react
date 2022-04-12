import { useEffect, useRef, useState } from "react";

export default function TodoForm({ setNewTodos }) {
    // input state
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const newTodoTitleRef = useRef(null);

    console.log(newTodoTitleRef);
    const handleFormSubmit = (e) => {
        // stop form from submitting
        e.preventDefault();

        // push a new todo to the todos state
        const newTodo = { title: newTodoTitle, completed: false };
        setNewTodos(newTodo);

        // clear newTodoTitle state
        setNewTodoTitle("");
    };

    // const setTodoTitle = (newTitle) => {
    //     setNewTodoTitle(newTitle);
    // };
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    ref={newTodoTitleRef}
                    className="form-control"
                    placeholder="Todo title"
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                    value={newTodoTitle}
                />
                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </div>
        </form>
    );
}
