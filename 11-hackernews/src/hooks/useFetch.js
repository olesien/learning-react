import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (initialUrl = null) => {
    const [url, setUrl] = useState(initialUrl);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const makeReq = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            console.log(response.data);
            setData(response.data);
            setLoading(false);
        } catch (err) {
            // console.log(Object.keys(err));
            // console.log(Object.keys(err.response));
            // console.log(err.response.data.error);
            setError(err);
        }
    }, [url]);

    const refresh = () => {
        makeReq();
    };
    useEffect(() => {
        if (!url) {
            return;
        }

        makeReq();
    }, [url, makeReq]);

    return { loading, data, refresh, error };
};
export default useFetch;
