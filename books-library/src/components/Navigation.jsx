import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import useBooks from "../hooks/useBooks";
import useAuthors from "../hooks/useAuthors";

const Navigation = () => {
    const {
        isLoading: booksLoading,
        error: booksError,
        data: books,
    } = useBooks();
    const {
        isLoading: authorsLoading,
        error: authorsError,
        data: authors,
    } = useAuthors();
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    React Template
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} end to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} end to="/books">
                            Books
                            {booksLoading ? "" : <span> ({books.length})</span>}
                        </Nav.Link>
                        <Nav.Link as={NavLink} end to="/authors">
                            Authors
                            {authorsLoading ? (
                                ""
                            ) : (
                                <span> ({authors.length})</span>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
