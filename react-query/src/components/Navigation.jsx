import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    React Query
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown
                            title="Rick & Morty"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item
                                as={NavLink}
                                to="/rick-morty/characters"
                            >
                                Characters
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/i-can-haz-dad-joke">
                            I Can Haz Dad Joke?
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/random-dad-joke">
                            Random Dad Joke
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/random-dog">
                            Random Dog
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/joke/general">
                            General Jokes
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/joke/programming">
                            Programming Jokes
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/joke/knock-knock">
                            Knock knock Jokes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
