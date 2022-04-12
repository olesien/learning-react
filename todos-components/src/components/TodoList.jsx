import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ list, toggleTodo, deleteTodo }) {
    return (
        <ul className="todolist">
            {list.map((todo, index) => (
                <TodoListItem
                    key={index}
                    onTitleClick={toggleTodo}
                    onDelete={deleteTodo}
                    todo={todo}
                />
            ))}
        </ul>
    );
}
