import { useState } from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Search({ makeSearch }) {
    //Declare states
    const [search, setSearch] = useState("");

    //Change the current search variable. This is done whenever the input is changed.
    const changeSearch = (e) => {
        setSearch(e.target.value);
    };

    //Whenever enter or Search is pressed.
    const handleSearch = (e) => {
        //Prevent default which is reload page
        e.preventDefault();
        //Make the search. This is done in Films or Peoples
        makeSearch(search);
    };
    return (
        <Form
            onSubmit={handleSearch}
            className="d-flex"
            style={{ padding: "2rem" }}
        >
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={changeSearch}
            />
            <Button type="submit" variant="outline-primary">
                Search
            </Button>
        </Form>
    );
}
