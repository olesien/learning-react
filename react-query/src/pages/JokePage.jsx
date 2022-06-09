import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useQuery, useIsFetching } from "react-query";
import { useParams } from "react-router-dom";
import ListJoke from "../components/ListJoke";
import { getJokeByType } from "../services/DadJokesAPI";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const JokePage = () => {
    const isFetching = useIsFetching();
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
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    return (
        <Container className="py-3">
            <h1>Random Dad Joke</h1>
            <Button variant="primary" onClick={updateJokeIndex}>
                Refresh joke
            </Button>

            {(isLoading || isFetching) && (
                <ClipLoader
                    color={"#5833FF"}
                    loading={true}
                    css={override}
                    size={150}
                />
            )}

            {isError && <p>An error occurred: {error.message}</p>}

            {data && <ListJoke joke={data.body[jokeIndex]} />}
        </Container>
    );
};

export default JokePage;
