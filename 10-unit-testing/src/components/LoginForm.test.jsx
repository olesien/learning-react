import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe(":(", () => {
    it("does not show loading spinner", () => {
        // Render the LoginForm component
        render(<LoginForm />);

        //     //Find the elements we want to interact with
        const loadingElement = screen.queryByText(/Loading.../i);
        //     //Interact with said elements

        //     //Assert that the results are what we expect them to be
        expect(loadingElement).not.toBeInTheDocument();
    });

    it("renders input fields", () => {
        // Render the LoginForm component
        render(<LoginForm />);
        const emailFields = screen.getAllByRole("textbox", { name: /Email/i });
        expect(emailFields).toHaveLength(2);

        const passwordFields = screen.getAllByText(/Password/);
        expect(passwordFields).toHaveLength(2);
    });

    it("renders input fields initially empty", () => {
        // Render the LoginForm component
        render(<LoginForm />);

        const loadingElement = screen.queryByText(/Loading.../i);

        if (loadingElement) {
            const emailFields = screen.queryAllByRole("textbox", {
                name: /Email/i,
            });
            expect(emailFields).toHaveLength(0);

            const passwordFields = screen.queryAllByText(/Password/);
            expect(passwordFields).toHaveLength(0);
        }
    });
});
