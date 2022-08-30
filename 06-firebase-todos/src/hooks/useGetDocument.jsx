import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

export default function useGetDocument(db, collectionId, id) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSnapshot = async () => {
            setLoading(true);
            const docRef = doc(db, collectionId, id);
            const docSnap = await getDoc(docRef);
            //console.log(snapshot);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setData(docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            setLoading(false);
        };
        getSnapshot();
    }, []);
    return { data, loading };
}
