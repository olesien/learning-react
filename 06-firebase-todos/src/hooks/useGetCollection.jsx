import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

export default function useGetCollection(db, collectionId) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSnapshot = async () => {
            setLoading(true);
            const ref = collection(db, collectionId);
            const snapshot = await getDocs(ref);
            //console.log(snapshot);
            const data = snapshot.docs.map((doc) => {
                // doc.data() is never undefined for query doc snapshots
                return { id: doc.id, ...doc.data() };
            });
            setData(data);
            setLoading(false);
        };
        getSnapshot();
    }, []);
    return { data, loading };
}
