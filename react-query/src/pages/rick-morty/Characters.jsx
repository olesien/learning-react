import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import CharacterCard from "../../components/CharacterCard";
import Pagination from "../../components/Pagination";
import { getCharacters } from "../../services/RickMortyAPI";

export default function Characters() {
    const [page, setPage] = useState(1);
    const { data, error, isError, isLoading, isPreviousData } = useQuery(
        ["rm-characters", page],
        getCharacters,
        {
            keepPreviousData: true,
        }
    );

    console.log("data", data);

    return (
        <Container className="py-3">
            <h1>Rick & Morty Characters</h1>

            {isLoading && <p className="my-3">Loading characters...</p>}

            {isError && (
                <Alert variant="danger">
                    <h3>ERROR! DANGER WILL ROBINSON!</h3>
                    <p>{error.message}</p>
                </Alert>
            )}

            {data?.results && (
                <>
                    <Pagination
                        page={page}
                        numPages={data.info.pages}
                        isPreviousData={isPreviousData}
                        hasPreviousPage={data.info.prev}
                        hasNextPage={data.info.next}
                        onNextPage={setPage}
                    />
                    <Row>
                        {data.results.map((character) => (
                            <Col lg={3} md={4} sm={6} key={character.id}>
                                <CharacterCard character={character} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </Container>
    );
}
