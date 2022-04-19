import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/Navigation";
import TodoPage from "./pages/TodoPage";
import AddTodo from "./pages/AddTodo";

const App = () => {
    return (
        <>
            <Navigation />
            <Container id="App">
                <Routes>
                    <Route path="/" element={<p>Welcome home</p>} />
                    <Route path="/todos" element={<TodosPage />} />
                    <Route path="/todos/:id" element={<TodoPage />} />
                    <Route path="/addtodo" element={<AddTodo />} />
                </Routes>
            </Container>
        </>
    );
};

export default App;
