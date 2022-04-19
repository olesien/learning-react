import React from "react";
import { Container } from "react-bootstrap";
import { Route, Router } from "react-router-dom";
import TodosPage from "./pages/TodosPage";

export default function App() {
    return (
        <Container id="App">
            <Router>
                <Route path="/" element={<p>Welcome home</p>} />
                <Route path="/todos" element={<TodosPage />} />
            </Router>
        </Container>
    );
}
