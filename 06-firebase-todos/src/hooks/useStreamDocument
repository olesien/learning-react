import React, { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const useStreamDocument = (col, id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //get refernece to collection
        const ref = doc(db, col, id);

        //subsrcibne to changes in collection

        const unsubscribe = onSnapshot(ref, (snapshot) => {
            console.log("new snap");

            if (!snapshot.exists()) {
                setData(false);
                setLoading(false);
                return;
            }

            setData(snapshot.data());
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return { data, loading };
};

export default useStreamDocument;
