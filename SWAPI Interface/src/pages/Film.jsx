import React from "react";
import { useParams } from "react-router-dom";

export default function Film() {
    const { id } = useParams();
    return <div>Film {id}</div>;
}
