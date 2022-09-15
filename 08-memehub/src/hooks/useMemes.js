import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query, orderBy, where } from "firebase/firestore";
import { db } from "../firebase";

const useMemes = (currentUser) => {
    // create ref to collection 'images'
    // const path = `images/${currentUser.uid}`
    const imagesRef = collection(db, "memes");

    // sort by created
    let queryRef = query(imagesRef, orderBy("created"));

    if (currentUser) {
        queryRef = query(
            imagesRef,
            orderBy("created"),
            where("uid", "==", currentUser.uid)
        );
    }

    const imagesQuery = useFirestoreQueryData(
        [currentUser ? "memes-personal" : "memes"],
        queryRef,
        {
            idField: "id",
            subscribe: true,
        }
    );

    return imagesQuery;
};

export default useMemes;
