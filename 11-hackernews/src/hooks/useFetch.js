import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (initialUrl = null) => {
    const [url, setUrl] = useState(initialUrl);
    const [data, setData] = useState();
    useEffect(() => {
        if (!url) {
            return;
        }

        const makeReq = async () => {
            const response = await axios.get(url);
            console.log(response.data);
            setData(response.data);
        };
        makeReq();
    }, [url]);

    return { data, setUrl };
};
export default useFetch;
