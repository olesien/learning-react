import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Star Wars Encyclopedia
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/films">
                        Films
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/peoples">
                        People
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
