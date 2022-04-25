import ListGroup from "react-bootstrap/ListGroup";

import { getIdFromUrl } from "../funcs";

import { Link } from "react-router-dom";

export default function RenderList({ caption, array }) {
    return (
        <ListGroup>
            {array.map((url, index) => (
                <ListGroup.Item
                    as={Link}
                    key={index}
                    to={`/${
                        caption === "Character" ? "people" : "film"
                    }/${getIdFromUrl(url)}`}
                >
                    {caption + " " + (index + 1)}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
