import { useState } from "react";
import { Form, Button, ProgressBar, Alert, Image } from "react-bootstrap";
import { storage, db } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { collection, addDoc } from "firebase/firestore";

export default function UploadFile() {
    const [thumbnail, setThumbnail] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [thumbnailError, setThumbnailError] = useState(null);
    const [progress, setProgress] = useState(0);
    const handleFileChange = (e) => {
        setThumbnail(null);
        let selected = e.target.files[0];
        console.log(selected);
        if (!selected) {
            setThumbnailError("Please select a file");
            return;
        }
        if (!selected.type.includes("image")) {
            setThumbnailError("Selected file must be an image");
            return;
        }
        setThumbnailError(null);
        setMessage(null);
        setError(null);
        setThumbnail(selected);
        console.log("thumbnail updated");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        setMessage(null);

        // update user profile
        try {
            // disable update-button while updating is in progress
            setLoading(true);

            // update displayName *ONLY* if it has changed

            if (thumbnail) {
                //set new thumbnail
                const uploadPath = `images/${thumbnail.name}`;
                const storageRef = ref(storage, uploadPath);
                const uploadTask = uploadBytesResumable(storageRef, thumbnail);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        setProgress(
                            Math.round(
                                (snapshot.bytesTransferred /
                                    snapshot.totalBytes) *
                                    100
                            )
                        );
                        console.log("Upload is " + progress + "% done");
                        switch (snapshot.state) {
                            case "paused":
                                console.log("Upload is paused");
                                break;
                            case "running":
                                console.log("Upload is running");
                                break;
                        }
                    },
                    (error) => {
                        // Handle unsuccessful uploads
                        setError(error);
                        setLoading(false);
                    },
                    async () => {
                        //Add to firebase
                        const photoURL = await getDownloadURL(storageRef);
                        console.log(photoURL);
                        console.log(storageRef);

                        await addDoc(collection(db, "uploads"), {
                            name: thumbnail.name,
                            path: storageRef.fullPath,
                            size: thumbnail.size,
                            type: thumbnail.type,
                            url: photoURL,
                        });

                        //Done
                        setMessage("Image uploaded");
                        setLoading(false);
                        setProgress(100);
                    }
                );
            }
        } catch (e) {
            console.log(e);
            setError(e.message);
            setLoading(false);
        }
    };
    return (
        <>
            <div className="d-flex justify-content-center my-3">
                {thumbnail ? (
                    <Image src={URL.createObjectURL(thumbnail)} fluid />
                ) : (
                    <></>
                )}
            </div>
            <div>{progress > 0 ? <ProgressBar now={progress} /> : <></>}</div>
            <Form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                {thumbnailError ? (
                    <Alert variant="danger">{thumbnailError}</Alert>
                ) : (
                    ""
                )}
                <Form.Group id="profile-img" className="mb-3">
                    <Form.Label>New Image</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>

                <Button disabled={loading} type="submit">
                    Upload
                </Button>
            </Form>
        </>
    );
}
