import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

import { useMutation, useQueryClient } from "react-query";
import useCreateAuthor from "../../hooks/useCreateAuthor";

import BooksAPI from "../../services/BooksAPI";

const CreateAuthorForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const queryClient = useQueryClient();

    const mutation = useCreateAuthor();

    const onCreateAuthor = (data) => {
        console.log("would create author with data:", data);
        mutation.mutate(data);
    };

    // console.log("errors:", errors)

    return (
        <div>
            {mutation.isLoading ? (
                "Adding todo..."
            ) : (
                <>
                    {mutation.isError ? (
                        <div>An error occurred: {mutation.error.message}</div>
                    ) : null}

                    {mutation.isSuccess ? <div>Todo added!</div> : null}

                    <Form onSubmit={handleSubmit(onCreateAuthor)} noValidate>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Author Name</Form.Label>
                            <Form.Control
                                {...register("name", {
                                    required: "You give no name?! I no create!",
                                    minLength: {
                                        value: 5,
                                        message:
                                            "That's no name for an author (enter at least 5 characters)!",
                                    },
                                })}
                                type="text"
                                placeholder="Astrid Lindgren"
                            />
                            {errors.name && (
                                <div className="invalid">
                                    {errors.name.message}
                                </div>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="date_of_birth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                {...register("date_of_birth", {
                                    required:
                                        "Please specify the authors date of birth",
                                })}
                                type="date"
                            />
                            {errors.date_of_birth && (
                                <div className="invalid">
                                    {errors.date_of_birth.message}
                                </div>
                            )}
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Create
                        </Button>
                    </Form>
                </>
            )}
        </div>
    );
};

export default CreateAuthorForm;
