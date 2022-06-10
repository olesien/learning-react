import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { NavLink, useNavigate } from "react-router-dom";

const CharacterCard = ({ character }) => {
    console.log(character);
    let navigate = useNavigate();
    return (
        <Card className="mb-4">
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                    {character.status} - {character.species}
                </Card.Text>
                <Button
                    as={NavLink}
                    to={`/rick-morty/character/${character.id}`}
                    variant="primary"
                >
                    View Character
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CharacterCard;
