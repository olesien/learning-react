import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

import UsersPage from "../UsersPage";
import { MemoryRouter } from "react-router-dom";

test("can get at least one user", async () => {
    render(<UsersPage />, { wrapper: MemoryRouter });

    const listItemEls = await screen.findAllByRole("listitem");

    expect(listItemEls.length).toBeGreaterThan(0);
});
