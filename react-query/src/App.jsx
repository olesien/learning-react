import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ICanHazDadJoke from "./pages/ICanHazDadJoke";
import RandomDadJoke from "./pages/RandomDadJoke";
import RandomDog from "./pages/RandomDog";
import "./styling/App.scss";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/icanhazdadjoke" element={<ICanHazDadJoke />} />
                <Route path="/random-dad-joke" element={<RandomDadJoke />} />
                <Route path="/randomdog" element={<RandomDog />} />
            </Routes>
        </div>
    );
}

export default App;
