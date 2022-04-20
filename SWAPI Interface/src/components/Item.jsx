import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ListGroupItem from "react-bootstrap/ListGroupItem";

{
    /* <ListGroupItem>
<strong>Gender:</strong> male
</ListGroupItem>
<ListGroupItem>
<strong>Born:</strong> 19BBY
</ListGroupItem>
<ListGroupItem>
<strong>In:</strong> 4 films
</ListGroupItem> */
}

{
    /* <ListGroupItem>
<strong>Episoder:</strong> 4
</ListGroupItem>
<ListGroupItem>
<strong>Released</strong> 1977-05-25
</ListGroupItem>
<ListGroupItem>
18 <strong>characters</strong>
</ListGroupItem> */
}

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
                    <Button style={{ marginTop: "1rem" }} variant="primary">
                        Read More
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
