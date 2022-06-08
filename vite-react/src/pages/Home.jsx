import React from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <Container className="bg-3">
            <Navigation />
            <p>Home</p>
        </Container>
    );
}
