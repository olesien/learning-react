import { useState } from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Search({ makeSearch }) {
    const [search, setSearch] = useState();

    const changeSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
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
