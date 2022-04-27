import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import SearchHackerNews from "./pages/SearchHackerNews";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContextProvider";

import classNames from "classnames";
import FetchPage from "./pages/FetchPage";

const App = () => {
    const { theme } = useContext(ThemeContext);

    const appClasses = classNames({
        app: true,
        "bg-dark": theme === "dark",
        "text-light": theme === "dark",
    });
    return (
        <div id="App" className={appClasses}>
            <Navigation />

            <Container className="py-3">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchHackerNews />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/fetch" element={<FetchPage />} />
                </Routes>
            </Container>
        </div>
    );
};

export default App;
