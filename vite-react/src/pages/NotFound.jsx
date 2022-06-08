import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";

export default function NotFound() {
    return (
        <Container className="bg-3">
            <Navigation />
            <p>Sorry page could not be located</p>
        </Container>
    );
}
