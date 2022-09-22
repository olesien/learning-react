import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

import TodosPage from "../TodosPage";

test("todo list is initially empty", () => {
    render(<TodosPage />);
    const listItemsEls = screen.queryAllByRole("listitem");

    expect(listItemsEls.length).toBe(0);
});

test("that we can add a new todo", async () => {
    render(<TodosPage />);

    const inputNewTodoTitle = screen.getByRole("textbox");
    const btnAddNewTodo = screen.getByRole("button", { name: /add/i });

    await UserEvent.type(inputNewTodoTitle, "A New todo");
    await UserEvent.click(btnAddNewTodo);

    const newTodoEl = screen.getByText("A New todo");

    expect(newTodoEl).toBeInTheDocument();
});

test("should render multiple todos", async () => {
    // fix me
    render(<TodosPage />);

    const inputNewTodoTitle = screen.getByRole("textbox");
    const btnAddNewTodo = screen.getByRole("button", { name: /add/i });

    await UserEvent.type(inputNewTodoTitle, "A New todo");
    await UserEvent.click(btnAddNewTodo);

    const newTodoEl = screen.getByText("A New todo");

    expect(newTodoEl).toBeInTheDocument();

    await UserEvent.type(inputNewTodoTitle, "A second todo");
    await UserEvent.click(btnAddNewTodo);

    const newTodoEl2 = screen.getByText("A second todo");

    expect(newTodoEl2).toBeInTheDocument();
});

test("should be able to add to existing list of todos", async () => {
    const initialTodos = [
        {
            id: "e154b842-7d4a-4218-8ef3-c1eeb9ebcbda",
            title: "Todo 1",
            completed: false,
        },
        {
            id: "58969d9d-be66-4cdc-b3e9-dfaaf73b8b77",
            title: "Todo 2",
            completed: true,
        },
        {
            id: "c022c0f7-6c7a-492c-aeb9-e1f0d4a90bb7",
            title: "Todo 3",
            completed: false,
        },
    ];
    render(<TodosPage initialTodos={initialTodos} />);

    const inputNewTodoTitle = screen.getByRole("textbox");
    const btnAddNewTodo = screen.getByRole("button", { name: /add/i });

    await UserEvent.type(inputNewTodoTitle, "A New todo");
    await UserEvent.click(btnAddNewTodo);

    const newTodoEl = screen.getByText("A New todo");

    expect(newTodoEl).toBeInTheDocument();
});

test("counter is updated when a new todo is added", async () => {
    render(<TodosPage />);
    const initialCounter = screen.getByText(/You have 0 todos 🥳!/i);
    expect(initialCounter).toBeInTheDocument();
    const inputNewTodoTitle = screen.getByRole("textbox");
    const btnAddNewTodo = screen.getByRole("button", { name: /add/i });

    await UserEvent.type(inputNewTodoTitle, "A New todo");
    await UserEvent.click(btnAddNewTodo);

    const updatedCounter = screen.getByText(
        /You only have 1 todo left, get on it 🤩!/i
    );
    expect(updatedCounter).toBeInTheDocument();
});

test("a todo changes status when clicked", async () => {
    render(<TodosPage />);
    const initialCounter = screen.getByText(/You have 0 todos 🥳!/i);
    expect(initialCounter).toBeInTheDocument();
    const inputNewTodoTitle = screen.getByRole("textbox");
    const btnAddNewTodo = screen.getByRole("button", { name: /add/i });

    await UserEvent.type(inputNewTodoTitle, "A New todo");
    await UserEvent.click(btnAddNewTodo);

    const updatedCounter = screen.getByText(
        /You only have 1 todo left, get on it 🤩!/i
    );
    expect(updatedCounter).toBeInTheDocument();

    const newTodoEl = screen.getByText("A New todo");
    expect(newTodoEl).toBeInTheDocument();
    await UserEvent.click(newTodoEl);

    const finalCounter = screen.getByText(/You have 0 todos 🥳!/i);
    expect(finalCounter).toBeInTheDocument();
});
