import { useState } from "react";
import {
    Container,
    Form,
    Button,
    ProgressBar,
    Alert,
    Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

import UploadFile from "../components/UploadFile";
import Images from "../components/images";

const HomePage = () => {
    const [showUpload, setShowUpload] = useState(false);

    return (
        <Container className="py-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Images</h1>
                <Button
                    variant="primary"
                    onClick={() => {
                        setShowUpload(!showUpload);
                    }}
                >
                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                </Button>
            </div>

            <div className={`${!showUpload ? "d-none" : ""}`}>
                {/* Upload Image Dropzone */}
                <UploadFile />
                <hr className="my-3" />
            </div>

            {/* Image Grid */}
            <Images />
        </Container>
    );
};

export default HomePage;
