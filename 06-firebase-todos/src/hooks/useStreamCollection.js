import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const useStreamCollection = (col) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //get refernece to collection
        const ref = collection(db, col);

        //subsrcibne to changes in collection

        const unsubscribe = onSnapshot(ref, (snapshot) => {
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

export default useStreamCollection;
