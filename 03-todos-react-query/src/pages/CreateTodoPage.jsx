import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import CreateTodoForm from "../components/CreateTodoForm";
import ModifyTodoForm from "../components/ModifyTodoForm";
import TodosAPI from "../services/TodosAPI";

const CreateTodoPage = () => {
    const [success, setSuccess] = useState();
    const navigate = useNavigate();

    // Create a new todo in the api
    const createTodo = async (newTodo) => {
        /*
		const res = await TodosAPI.createTodo(newTodo)

		setTimeout(() => {
			navigate('/todos')
		}, 2000)

		if (res) {
			setSuccess(true)
		} else {
			setSuccess(false)
		}
		*/
    };

    return (
        <>
            <h1>Create New Todo</h1>

            {/* <CreateTodoForm
				onSubmit={createTodo}
			/> */}

            {/* <ModifyTodoForm onSubmit={createTodo} /> */}
            {success === true && (
                <Alert variant="success" className="mt-3">
                    Todo created!
                </Alert>
            )}
            {success === false && (
                <Alert variant="warning" className="mt-3">
                    Todo could not be created
                </Alert>
            )}

            <div className="mt-4">
                <Button variant="secondary" onClick={() => navigate(-1)}>
                    Go back
                </Button>
            </div>
        </>
    );
};

export default CreateTodoPage;
