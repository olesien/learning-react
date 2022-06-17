import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import LoadingSpinner from "./LoadingSpinner";

const EditTodoForm = ({
    onSubmit,
    disabled = false,
    todo = false,
    onDelete = false,
}) => {
    // input state
    const [newTitle, setNewTitle] = useState("");
    // input reference
    const newTitleRef = useRef();

    const handleSubmit = (e) => {
        // stop form from submitting
        e.preventDefault();

        // push a new todo to the todos state
        let data = {};
        if (todo) {
            //is edit
            data = { title: newTitle };
        } else {
            data = { title: newTitle, completed: false };
        }

        onSubmit(data);

        // clear newTitle state
        setNewTitle("");
    };

    const handleDelete = () => {
        if (!window.confirm("U SURE BRO?!")) {
            return;
        }

        onDelete();
    };

    // focus on input field when component is mounted
    useEffect(() => {
        newTitleRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="newTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Enter title"
                    required
                    ref={newTitleRef}
                    type="text"
                    value={newTitle}
                    disabled={disabled}
                />
            </Form.Group>

            <div className="d-flex justify-content-between">
                <Button
                    variant="success"
                    type="submit"
                    disabled={!newTitle.length || disabled}
                >
                    Save
                    {disabled && <LoadingSpinner />}
                </Button>
                {!!onDelete && (
                    <Button
                        variant="danger"
                        onClick={handleDelete}
                        disabled={disabled}
                    >
                        Delete
                    </Button>
                )}
            </div>
        </form>
    );
};

export default EditTodoForm;
