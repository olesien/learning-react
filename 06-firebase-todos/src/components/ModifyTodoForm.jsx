import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import {
    doc,
    updateDoc,
    collection,
    addDoc,
    Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import "../../node_modules/react-datetime-picker/dist/DateTimePicker.css";
import "../../node_modules/react-calendar/dist/Calendar.css";
import "../../node_modules/react-clock/dist/Clock.css";
import { useState } from "react";
import Moment from "moment";

const ModifyTodoForm = ({ id, title, date }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [changedTitle, setChangedTitle] = useState(title);
    const [changedDate, setChangedDate] = useState(
        new Date(date.seconds * 1000)
    );
    console.log(changedDate);

    const onModifyTodo = async (data) => {
        // make firestore doc, plz
        console.log(data.title);
        console.log(data.due_date);
        console.log(id);
        console.log(Timestamp.fromDate(new Date(data.due_date)));

        const ref = doc(db, "todos", id);
        await updateDoc(ref, {
            title: data.title,
            deadline: Timestamp.fromDate(new Date(data.due_date)),
        });

        console.log("Todo edited! 💪🏻");
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(onModifyTodo)} noValidate>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Change title</Form.Label>
                <Form.Control
                    {...register("title", {
                        required: "A todo is not a todo without a todo title",
                        minLength: {
                            value: 3,
                            message:
                                "That's too short to be a todo, better do it right now instead!",
                        },
                    })}
                    value={changedTitle}
                    onChange={(e) => {
                        setChangedTitle(e.target.value);
                    }}
                    placeholder="Buy gluten-free bread"
                    type="text"
                />
                {errors.title && (
                    <div className="invalid">{errors.title.message}</div>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="due_date">
                <Form.Label>Due date</Form.Label>
                <Form.Control
                    {...register("due_date", {
                        required:
                            "A due date is required, otherwise it would be procastrinated forever",
                    })}
                    value={changedDate.toLocaleDateString("en-CA")}
                    onChange={(e) => {
                        setChangedDate(new Date(e.target.value));
                    }}
                    type="date"
                />
                {errors.due_date && (
                    <div className="invalid">{errors.due_date.message}</div>
                )}
            </Form.Group>

            <Button variant="success" type="submit">
                Edit
            </Button>
        </Form>
    );
};

export default ModifyTodoForm;
