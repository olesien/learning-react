import React from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { getRandomDadJoke } from "../services/ICanHazDadJokeAPI";

export default function RandomDadJoke() {
    const { isLoading, isError, data } = useQuery(
        "random-dad-joke",
        getRandomDadJoke
    );

    return (
        <Container className="bg-3">
            <Navigation />
            {isLoading && <p>Dad is thinking about a new joke...</p>}
            {isError && <p>Dad has ran out of jokes</p>}
            {data && <p className="h3 text-center my-6">{data.joke}</p>}
        </Container>
    );
}
