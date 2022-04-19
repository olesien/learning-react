import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TodosAPI from "../services/TodosAPI";
import AddNewTodoForm from "../components/AddNewTodoForm";

export default function AddTodo() {
    // Get todo from api
    // Create a new todo in the api
    const createTodo = async (newTodo) => {
        await TodosAPI.createTodo(newTodo);
    };

    return (
        <div className="mb-3">
            <AddNewTodoForm onAddNewTodo={createTodo} />
        </div>
    );
}
