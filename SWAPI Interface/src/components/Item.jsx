import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import { Link } from "react-router-dom";

import { getIdFromUrl } from "../funcs";

export default function Item({ item, type }) {
    console.log(type);
    return (
        <Col>
            <Card>
                <Card.Header as="h5">
                    {type === "Films" ? item.title : item.name}
                </Card.Header>
                <Card.Body>
                    <ListGroup className="list-group-flush">
                        {type === "Films" ? (
                            <>
                                <ListGroupItem>
                                    <strong>Episoder:</strong> {item.episode_id}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <strong>Released</strong>{" "}
                                    {item.release_date}
                                </ListGroupItem>
                                <ListGroupItem>
                                    {item.characters.length}{" "}
                                    <strong>characters</strong>
                                </ListGroupItem>
                            </>
                        ) : (
                            <>
                                <ListGroupItem>
                                    <strong>Gender:</strong> {item.gender}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <strong>Born:</strong> {item.birth_year}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <strong>In:</strong> {item.films.length}{" "}
                                    films
                                </ListGroupItem>
                            </>
                        )}
                    </ListGroup>
                    <Button
                        as={Link}
                        style={{ marginTop: "1rem" }}
                        variant="primary"
                        to={`/${
                            type === "Films" ? "film" : "people"
                        }/${getIdFromUrl(item.url)}`}
                    >
                        Read More
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
