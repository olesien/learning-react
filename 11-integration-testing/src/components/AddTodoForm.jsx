import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { v4 as uuid } from "uuid";

const AddTodoForm = ({ onNewTodo }) => {
    const inputTitle = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!inputTitle.current.value.length) {
            return;
        }

        // make todo, plz
        onNewTodo({
            id: uuid(),
            title: inputTitle.current.value,
            completed: false,
        });

        inputTitle.current.value = "";
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <FormControl
                    type="text"
                    ref={inputTitle}
                    aria-label="New todo title"
                    placeholder="Enter the new todo here..."
                    required
                />
                <Button type="submit" variant="success">
                    Add
                </Button>
            </InputGroup>
        </Form>
    );
};

export default AddTodoForm;
