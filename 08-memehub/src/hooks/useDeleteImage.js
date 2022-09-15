import { useState } from "react";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "../firebase";

const useDeleteImage = (currentUser) => {
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);
    const [isMutating, setIsMutating] = useState(false);

    const mutate = async (image) => {
        console.log("starting mutate");
        setError(null);
        setIsError(false);
        setIsMutating(true);

        // run mutation that will delete image from storage and db
        try {
            // get ref to image in db
            const dbRef = doc(db, "memes", image.id);

            //Check if you are owner..
            const docSnap = await getDoc(dbRef);
            console.log("deleting");

            if (!docSnap.exists()) {
                alert("Can't fetch doc");
                return;
            }
            const data = docSnap.data();
            if (data.uid != currentUser.uid) {
                alert("You are not the owner");
                return;
            }
            console.log("really deleting");

            // get ref to image in storage
            const storageRef = ref(storage, image.path);

            // delete image from storage
            await deleteObject(storageRef);

            // delete image from db
            await deleteDoc(dbRef);
        } catch (e) {
            console.log(e);
            setIsError(true);
            setError(e);
        } finally {
            setIsMutating(false);
        }
    };

    return {
        error,
        isError,
        isMutating,
        mutate,
    };
};

export default useDeleteImage;
