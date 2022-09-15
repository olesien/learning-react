import Container from "react-bootstrap/Container";
import { useAuthContext } from "../contexts/AuthContext";
import ImageGrid from "../components/ImageGrid";
import UploadImageDropzone from "../components/UploadImageDropzone";
import useMemes from "../hooks/useMemes";

const PersonalMemesPage = () => {
    const { currentUser } = useAuthContext();
    const imagesQuery = useMemes(currentUser, true);

    return (
        <Container className="py-3">
            <h1 className="display-1">😂</h1>

            <p className="display-2">Show me MY memes!</p>

            <UploadImageDropzone currentUser={currentUser} />
            {/* Image Grid */}
            <ImageGrid query={imagesQuery} />
        </Container>
    );
};

export default PersonalMemesPage;
