import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTodoForm from "../AddTodoForm";

it("renders input field initiallyu empty", () => {
    render(<AddTodoForm />);

    const inputElement = screen.getByRole("textbox");

    expect(inputElement.value).toBe("");
});

//test
test("that you can type in input field", async () => {
    render(<AddTodoForm />);

    const inputElement = screen.getByRole("textbox");

    await userEvent.type(inputElement, "lalala");
    expect(inputElement.value).toBe("lalala");
});

// it("can not type into header", async () => {
//     //render
//     render(<AddTodoForm />);

//     //find
//     const headingElement = screen.getByRole('heading');
//     const prevHeadinbg = headingElement.textContent;

//     //interact
//     await userEvent.type(headingElement, 'My new heading');

//     //assert

// })

it("empties input field after submitting the form", async () => {
    render(<AddTodoForm onNewTodo={() => {}} />);

    const inputElement = screen.getByRole("textbox");
    const btnAddNewTodo = screen.getByRole("button");

    await userEvent.type(inputElement, "A new todo");
    await userEvent.type(btnAddNewTodo, "{Enter}");

    expect(inputElement.value).toBe("");
});
