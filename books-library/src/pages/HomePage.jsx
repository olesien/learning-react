import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";

const HomePage = () => {
    return (
        <Container className="py-3">
            <h1>Welcome!</h1>
            <Button
                variant="primary"
                onClick={() => toast("Wow that's a good click!")}
            >
                Click Me
            </Button>
        </Container>
    );
};

export default HomePage;
