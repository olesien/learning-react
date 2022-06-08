import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RandomDadJoke from "./pages/RandomDadJoke";
import "./styling/App.scss";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/randomdadjoke" element={<RandomDadJoke />} />
            </Routes>
        </div>
    );
}

export default App;
