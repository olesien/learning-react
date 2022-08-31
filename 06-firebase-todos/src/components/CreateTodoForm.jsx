import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import "../../node_modules/react-datetime-picker/dist/DateTimePicker.css";
import "../../node_modules/react-calendar/dist/Calendar.css";
import "../../node_modules/react-clock/dist/Clock.css";
import { useState } from "react";

const CreateTodoForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [value, onChange] = useState(new Date());

    const onCreateTodo = async (data) => {
        // make firestore doc, plz
        await addDoc(collection(db, "todos"), {
            completed: false,
            deadline: value,
            ...data,
        });

        console.log("Todo created! 💪🏻");
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(onCreateTodo)} noValidate>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title of the new todo</Form.Label>
                <Form.Control
                    {...register("title", {
                        required: "A todo is not a todo without a todo title",
                        minLength: {
                            value: 3,
                            message:
                                "That's too short to be a todo, better do it right now instead!",
                        },
                    })}
                    placeholder="Buy gluten-free bread"
                    type="text"
                />
                {errors.title && (
                    <div className="invalid">{errors.title.message}</div>
                )}
            </Form.Group>
            <div>
                <p>Date/time due by</p>{" "}
                <DateTimePicker onChange={onChange} value={value} />
            </div>

            <Button variant="success" type="submit">
                Create
            </Button>
        </Form>
    );
};

export default CreateTodoForm;
