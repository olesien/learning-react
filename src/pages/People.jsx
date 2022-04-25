import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import SwapiAPI from "../services/SwapiAPI";
import { Spinner } from "react-bootstrap";
import RenderList from "../components/RenderList";

export default function People() {
    const [people, setPeople] = useState();
    const { id } = useParams();

    useEffect(() => {
        const getPeople = async () => {
            const data = await SwapiAPI.getPeople(id);
            setPeople(data);
        };
        getPeople();
    }, [id]);
    return (
        <Container style={{ marginTop: "10px" }}>
            {people ? (
                <Card>
                    <Card.Header>{people.name}</Card.Header>
                    <Card.Body>
                        <h3>Attributes</h3>
                        <Table>
                            <tbody>
                                <tr>
                                    <th>Gender</th>
                                    <td>{people.gender}</td>
                                </tr>
                                <tr>
                                    <th>Birth year</th>
                                    <td>{people.birth_year}</td>
                                </tr>
                                <tr>
                                    <th>Height</th>
                                    <td>{people.height}</td>
                                </tr>
                                <tr>
                                    <th>Mass</th>
                                    <td>{people.mass}</td>
                                </tr>
                                <tr>
                                    <th>Hair color</th>
                                    <td>{people.hair_color}</td>
                                </tr>
                                <tr>
                                    <th>Skin color</th>
                                    <td>{people.skin_color}</td>
                                </tr>
                                <tr>
                                    <th>Eye color</th>
                                    <td>{people.eye_color}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3 style={{ marginTop: "2rem" }}>
                                            Links
                                        </h3>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Characters</th>
                                    <td>
                                        <RenderList
                                            caption="Film"
                                            array={people.films}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </Container>
    );
}
