import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/Navigation";

import Films from "./pages/Films";
import Film from "./pages/Film";
import Peoples from "./pages/Peoples";
import People from "./pages/People";

const App = () => {
    return (
        <>
            <Navigation />
            <Container id="App">
                <Routes>
                    <Route path="/" element={<p>Welcome home</p>} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/film/:id" element={<Film />} />
                    <Route path="/peoples" element={<Peoples />} />
                    <Route path="/people/:id" element={<People />} />
                </Routes>
            </Container>
        </>
    );
};

export default App;
