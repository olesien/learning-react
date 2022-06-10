import { useParams } from "react-router-dom";
import { getCharacter } from "../../services/RickMortyAPI";
import { useQuery } from "react-query";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import RenderList from "../../components/RenderList";

export default function Character() {
    const { characterId } = useParams();
    const {
        data: character,
        error,
        isError,
        isLoading,
    } = useQuery(["rm-character", characterId], getCharacter, {
        keepPreviousData: false,
    });
    console.log(character);
    //return <div>Character {characterId}</div>;

    return (
        <Container style={{ marginTop: "10px" }}>
            {isLoading && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            {character && (
                <Card>
                    <Card.Header>{character.name}</Card.Header>

                    <Card.Body>
                        <h3>Attributes</h3>
                        <Table>
                            <tbody>
                                <tr>
                                    <th>Gender</th>
                                    <td>{character.gender}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{character.status}</td>
                                </tr>
                                <tr>
                                    <th>Species</th>
                                    <td>{character.species}</td>
                                </tr>
                                <tr>
                                    <th>Origin</th>
                                    <td>{character.origin.name}</td>
                                </tr>
                                <tr>
                                    <th>Location</th>
                                    <td>{character.location.name}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3 style={{ marginTop: "2rem" }}>
                                            Links
                                        </h3>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Episodes</th>
                                    <td>
                                        <RenderList
                                            caption="Episode"
                                            array={character.episode}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Card.Img variant="bottom" src={character.image} />
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
}
