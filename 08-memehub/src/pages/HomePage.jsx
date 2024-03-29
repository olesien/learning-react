import Container from "react-bootstrap/Container";
import { useAuthContext } from "../contexts/AuthContext";
import ImageGrid from "../components/ImageGrid";
import UploadImageDropzone from "../components/UploadImageDropzone";
import useMemes from "../hooks/useMemes";

const HomePage = () => {
    const { currentUser } = useAuthContext();
    const imagesQuery = useMemes();

    return (
        <Container className="py-3">
            <h1 className="display-1">😂</h1>

            <p className="display-2">Show me dem memes!</p>

            <UploadImageDropzone currentUser={currentUser} />
            {/* Image Grid */}
            <ImageGrid query={imagesQuery} />
        </Container>
    );
};

export default HomePage;
