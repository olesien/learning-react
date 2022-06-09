import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ListJoke from "../components/ListJoke";
import { getJokeByType } from "../services/DadJokesAPI";

const JokePage = () => {
    const { type } = useParams();
    if (!type) {
        return <p>No</p>;
    }

    const { isLoading, isError, error, data } = useQuery(
        ["joke", type],
        getJokeByType
    );

    const [jokeIndex, setJokeIndex] = useState(0);

    const updateJokeIndex = () => {
        const randomizeJoke = () => {
            if (!data) {
                return 0;
            }

            return Math.floor(Math.random() * (data.body.length - 1));
        };
        setJokeIndex(randomizeJoke);
    };

    useEffect(() => {
        updateJokeIndex();
    }, [data]);

    console.log(jokeIndex);

    console.log(data);

    return (
        <Container className="py-3">
            <h1>Random Dad Joke</h1>
            <button onClick={updateJokeIndex}>Refresh joke</button>

            {isLoading && <p>Loading joke...</p>}

            {isError && <p>An error occurred: {error.message}</p>}

            {data && <ListJoke joke={data.body[jokeIndex]} />}
        </Container>
    );
};

export default JokePage;
