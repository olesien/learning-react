import { ReactQueryDevtools } from "react-query/devtools";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import ICanHazDadJokePage from "./pages/ICanHazDadJokePage";
import RandomDadJoke from "./pages/RandomDadJoke";
import RandomDogPage from "./pages/RandomDogPage";
import "./assets/scss/App.scss";
import JokePage from "./pages/JokePage";

import RickMortyCharacters from "./pages/rick-morty/Characters";

const App = () => {
    return (
        <div id="App">
            <Navigation />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/i-can-haz-dad-joke"
                    element={<ICanHazDadJokePage />}
                />
                <Route path="/random-dad-joke" element={<RandomDadJoke />} />
                <Route path="/random-dog" element={<RandomDogPage />} />
                <Route path="/joke/:type" element={<JokePage />} />
                <Route path="*" element={<PageNotFound />} />
                <Route
                    path="rick-morty/characters"
                    element={<RickMortyCharacters />}
                />
            </Routes>

            <ReactQueryDevtools position="bottom-right" />
        </div>
    );
};

export default App;
