import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getRandomJoke } from "../services/DadJokesAPI";

const RandomDadJokePage = () => {
    const { isLoading, isError, error, data } = useQuery(
        "random-dad-joke",
        getRandomJoke
    );

    return (
        <Container className="py-3">
            <h1>Random Dad Joke</h1>

            {isLoading && <p>Loading dad joke...</p>}

            {isError && <p>An error occurred: {error.message}</p>}

            {data && data.body.map((joke) => <ListJoke joke={joke} />)}
        </Container>
    );
};

export default RandomDadJokePage;
