import Container from "react-bootstrap/Container";
import { useAuthContext } from "../contexts/AuthContext";

const HomePage = () => {
    const { user } = useAuthContext();
    return (
        <Container className="py-3">
            <h1>Welcome!</h1>

            {user ? (
                <p>You are logged in as {user.email}!</p>
            ) : (
                <p>Anonymous haxx0r</p>
            )}
        </Container>
    );
};

export default HomePage;
