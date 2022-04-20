import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/Navigation";

import Films from "./pages/Films";
import People from "./pages/People";

const App = () => {
    return (
        <>
            <Navigation />
            <Container id="App">
                <Routes>
                    <Route path="/" element={<p>Welcome home</p>} />
                    <Route path="/films" element={<Films />} />
                    {/* <Route path="/todos/:id" element={<TodoPage />} /> */}
                    <Route path="/people" element={<People />} />
                </Routes>
            </Container>
        </>
    );
};

export default App;
