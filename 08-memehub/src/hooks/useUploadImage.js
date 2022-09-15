import { useState } from "react";
import {
    collection,
    addDoc,
    serverTimestamp,
    doc,
    setDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";

const useUploadImage = (currentUser) => {
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isMutating, setIsMutating] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(null);

    const mutate = async (image) => {
        // reset internal state
        setError(null);
        setIsError(false);
        setIsMutating(true);
        setIsSuccess(false);
        setUploadProgress(null);

        // no image? no upload!
        if (!image) {
            return;
        }

        // create a reference to upload the file to
        const unix = Date.now();
        const fileRef = ref(
            storage,
            `memes/${currentUser.uid}/${unix + "-" + image.name}`
        );

        // upload image to fileRef
        const uploadTask = uploadBytesResumable(fileRef, image);

        // attach upload observer
        uploadTask.on(
            "state_changed",
            (uploadTaskSnapshot) => {
                setUploadProgress(
                    Math.round(
                        (uploadTaskSnapshot.bytesTransferred /
                            uploadTaskSnapshot.totalBytes) *
                            100
                    )
                );
            },
            (e) => {
                console.log("NOT so great success, fail!", e);

                setError(e);
                setIsError(true);
                setIsMutating(false);
            },
            async () => {
                // get download url to the uploaded file
                const url = await getDownloadURL(fileRef);

                // get reference to collection 'images'
                const collectionRef = collection(db, "memes");
                // console.log(collectionRef);
                // const memeDoc = doc(collectionRef, currentUser.uid);
                // const memesRef = collection(db, memeDoc);

                // create document in db for the uploaded file
                await addDoc(collectionRef, {
                    name: image.name,
                    path: fileRef.fullPath,
                    size: image.size,
                    type: image.type,
                    url,
                    uid: currentUser.uid,
                    userRef: doc(db, "users", currentUser.uid),
                    created: serverTimestamp(),
                });

                setIsMutating(false);
                setIsSuccess(true);
                setUploadProgress(null);
            }
        );
    };

    return {
        error,
        isError,
        isMutating,
        isSuccess,
        uploadProgress,
        mutate,
    };
};

export default useUploadImage;
