import { useEffect, useState } from "react";
import "./App.css";
// import Clock from "./components/Clock";
import Timer from "./components/Timer";

const App = () => {
    // const [showClock, setShowClock] = useState(true);

    return (
        <div className="container text-center">
            {/* <span
                onClick={toggleClock}
                id="toggle-clock"
                className="btn btn-outline-light"
            >
                {showClock ? "Hide clock" : "Show clock"}
            </span>

            {showClock && (
                <div id="clock-wrapper">
                    <Clock />
                </div>
            )} */}

            <div id="timer-wrapper">
                <Timer />
            </div>
        </div>
    );
};

export default App;
