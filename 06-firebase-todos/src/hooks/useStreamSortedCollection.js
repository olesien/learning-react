import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const useStreamSortedCollection = (col, sortCol) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //get refernece to collection
        const ref = collection(db, col);
        const q = query(ref, orderBy(sortCol));
        //subsrcibne to changes in collection

        const unsubscribe = onSnapshot(q, (snapshot) => {
            console.log("new snap");

            const docs = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setData(docs);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return { data, loading };
};

export default useStreamSortedCollection;
