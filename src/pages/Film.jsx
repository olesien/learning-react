import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import SwapiAPI from "../services/SwapiAPI";
import { Spinner } from "react-bootstrap";
import RenderList from "../components/RenderList";

export default function Film() {
    const [film, setFilm] = useState();
    const { id } = useParams();

    //Get the film
    useEffect(() => {
        const getFilm = async () => {
            const data = await SwapiAPI.getFilm(id);
            setFilm(data);
        };
        getFilm();
    }, [id]);
    return (
        <Container style={{ marginTop: "10px" }}>
            {film ? (
                <Card>
                    <Card.Header>{film.title}</Card.Header>
                    <Card.Body>
                        <h3>Attributes</h3>
                        <Table>
                            <tbody>
                                <tr>
                                    <th>Episode</th>
                                    <td>{film.episode_id}</td>
                                </tr>
                                <tr>
                                    <th>Director</th>
                                    <td>{film.director}</td>
                                </tr>
                                <tr>
                                    <th>Producer</th>
                                    <td>{film.producer}</td>
                                </tr>
                                <tr>
                                    <th>Release Date</th>
                                    <td>{film.release_date}</td>
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
                                            caption="Character"
                                            array={film.characters}
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
