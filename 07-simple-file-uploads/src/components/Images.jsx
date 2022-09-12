import { useState } from "react";

import useImages from "../hooks/useImages.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { storage, db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

export default function Images() {
    const { data, loading } = useImages();
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    console.log(data);
    if (loading) return <p>Loading...</p>;

    const removeImage = async (img) => {
        console.log("starting removing image");
        setError(null);
        setMessage(null);
        try {
            await deleteDoc(doc(db, "uploads", img.id));

            const imageRef = ref(storage, img.path);

            await deleteObject(imageRef);
            setMessage("Succesfully removed image");
            setError(null);
        } catch (err) {
            setError(err.message);
            setMessage(null);
        }
    };
    return (
        <>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <div style={{ display: "flex", flexFlow: "row wrap" }}>
                {data.map((img) => (
                    <Card style={{ width: "18rem" }} key={img.id}>
                        <Card.Img
                            style={{ padding: "1rem", height: "10rem" }}
                            variant="top"
                            src={img.url}
                        />
                        <Card.Body>
                            <Card.Title>{img.name}</Card.Title>
                            <Button
                                variant="danger"
                                onClick={() => removeImage(img)}
                            >
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}
