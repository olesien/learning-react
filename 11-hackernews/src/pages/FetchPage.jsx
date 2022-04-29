import useFetch from "../hooks/useFetch";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const FetchPage = () => {
    const { loading, data, refresh, error } = useFetch(
        "https://api.chucknorris.io/jokes/random"
    );
    console.log(data + " " + !loading);
    return (
        <>
            <p>Fetch Page</p>
            {!error ? (
                <p>{data && !loading ? data.value : "Loading..."}</p>
            ) : (
                <p>error.response.data.error</p>
            )}
            <Button variant="success" onClick={refresh}>
                Reload!
            </Button>
        </>
    );
};

export default FetchPage;
