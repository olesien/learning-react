import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SwapiAPI from "../services/SwapiAPI";

export default function People() {
    const { id } = useParams();
    return <p>People {id}</p>;
}
