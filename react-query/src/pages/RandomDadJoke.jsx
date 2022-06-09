import React from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { getRandomJoke } from "../services/DadJokesAPI";

export default function RandomDadJoke() {
    const { isLoading, isError, error, data } = useQuery(
        "random-dad-joke",
        getRandomJoke
    );

    console.log(data);

    return (
        <Container className="bg-3">
            <Navigation />
            {isLoading && <p>Dad is thinking about a new joke...</p>}
            {isError && <p>Dad has ran out of jokes</p>}
            {data &&
                data.body.map((joke) => (
                    <div key={joke._id} className="text-center my-5">
                        <p className="h3">{joke.setup}</p>
                        <p className="h4">{joke.punchline}</p>
                    </div>
                ))}
        </Container>
    );
}
