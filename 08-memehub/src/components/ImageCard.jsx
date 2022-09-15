import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import useDeleteImage from "../hooks/useDeleteImage";
import { useAuthContext } from "../contexts/AuthContext";

const ImageCard = ({ image }) => {
    const [toggler, setToggler] = useState(false);
    const { currentUser } = useAuthContext();
    const deleteImageMutation = useDeleteImage(currentUser);

    return (
        <>
            <FsLightbox toggler={toggler} sources={[<img src={image.url} />]} />
            <Card
                className={`image-card ${
                    deleteImageMutation.isMutating ? "mutating" : ""
                }`}
            >
                <Card.Header>
                    <span className="image-filename" title={image.name}>
                        {image.name}
                    </span>
                    <div className="card-actions">
                        <Button
                            variant="danger"
                            size="sm"
                            disabled={deleteImageMutation.isMutating}
                            onClick={() => deleteImageMutation.mutate(image)}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                    </div>
                </Card.Header>

                <Card.Img
                    variant="top"
                    src={image.url}
                    onClick={() => setToggler(!toggler)}
                />

                <Card.Footer>{Math.round(image.size / 1024)} kB</Card.Footer>
            </Card>
        </>
    );
};

export default ImageCard;
