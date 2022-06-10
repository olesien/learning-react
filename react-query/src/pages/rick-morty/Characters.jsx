import { Row, Col, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getCharacters } from "../../services/RickMortyAPI";

export default function Characters() {
    const { data, error, isError, isLoading } = useQuery(
        "rm-characters",
        getCharacters
    );
    console.log(data);
    return (
        <Container className="py-3">
            {isError && <p>Error</p>} {isLoading && <p>Loading</p>}
            {data && (
                <div>
                    <Row xs={1} md={2} className="g-4">
                        {data.results.map((character, index) => (
                            <Col key={index}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src="holder.js/100px160"
                                    />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with
                                            supporting text below as a natural
                                            lead-in to additional content. This
                                            content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </Container>
    );
}
