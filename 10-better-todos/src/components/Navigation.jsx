import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Navbar
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/todos">
                        Todos
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/addtodo">
                        Add todo
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
