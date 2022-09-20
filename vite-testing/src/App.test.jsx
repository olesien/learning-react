import { render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event";
import { expect, it } from "vitest";
import App from "./App";

it("renders react + vite text", () => {
    //Render the component we want to test
    render(<App />);

    //Find the elements we want to interact with
    const headingElement = screen.getByText(/vite \+ react/i);
    //Interact with said elements

    //Assert that the results are what we expect them to be
    expect(headingElement).toBeInTheDocument();
});

// it("does not render react + vite text", () => {
//     //Render the component we want to test
//     render(<App />);

//     //Find the elements we want to interact with
//     const headingElement = screen.queryByText(/vite \+ react/i);
//     //Interact with said elements

//     //Assert that the results are what we expect them to be
//     expect(headingElement).not.toBeInTheDocument();
// });

it("Increases counter by 1 when clicking counter-button", async () => {
    //Render the component we want to test
    render(<App />);

    //Find the elements we want to interact with
    const counterButton = screen.getByRole("button");
    //Interact with said elements
    await click(counterButton);

    //Assert that the results are what we expect them to be
    expect(counterButton).toHaveTextContent(/count is 1/i);
});
