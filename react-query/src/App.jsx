import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RandomDadJoke from "./pages/RandomDadJoke";
import RandomDog from "./pages/RandomDog";
import "./styling/App.scss";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/randomdadjoke" element={<RandomDadJoke />} />
                <Route path="/randomdog" element={<RandomDog />} />
            </Routes>
        </div>
    );
}

export default App;
