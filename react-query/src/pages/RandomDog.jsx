import React from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { getRandomDog } from "../services/DogAPI";

export default function RandomDog() {
    const { isLoading, isError, data } = useQuery("random-dog", getRandomDog);

    const prefetchDog = async () => {
        // The results of this query will be cached like a normal query
        await queryClient.prefetchQuery("random-dog", getRandomDog);
        console.log("Prefetched");
    };

    return (
        <Container className="bg-3">
            <Navigation />
            {isLoading && <p>Fetching dog...</p>}
            {isError && <p>The dog ran away</p>}
            {data && <img src={data.message} className=""></img>}
            <button onClick={prefetchDog}>Prefetch</button>
        </Container>
    );
}
