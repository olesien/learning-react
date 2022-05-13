import React, { useEffect, useState } from "react";

const Timer = ({ socket }) => {
    const [timerId, setTimerId] = useState();
    const [timeElapsed, setTimeElapsed] = useState(0);

    let activeTimer = false;

    const handleStartTimerClick = () => {
        console.log("omitting start");
        onStartTimer();
        socket.emit("clock:start");
    };

    const handleStopTimerClick = () => {
        onStopTimer();
        socket.emit("clock:stop");
    };

    const handleResetTimerClick = () => {
        onResetTimer();
        socket.emit("clock:reset");
    };

    const onStartTimer = () => {
        console.log("starting timer");
        console.log(timerId);
        if (activeTimer) {
            return;
        }

        activeTimer = true;
        const intervalId = setInterval(() => {
            setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
        }, 10);

        setTimerId(intervalId);
    };

    const onStopTimer = () => {
        console.log("stop");
        console.log(timerId);
        if (activeTimer) {
            console.log("stopped");
            clearInterval(timerId);
            activeTimer = false;
            setTimerId(null);
        }
    };

    const onResetTimer = () => {
        activeTimer = true;
        setTimeElapsed(0);
    };

    useEffect(() => {
        socket.on("clock:start", onStartTimer);
        socket.on("clock:stop", onStopTimer);
        socket.on("clock:reset", onResetTimer);
    }, []);

    const seconds = Math.floor(timeElapsed / 100)
        .toString()
        .padStart(2, 0);
    const hundredths = (timeElapsed % 100).toString().padStart(2, 0);

    return (
        <div className="display-1 text-center">
            <div className="time-elapsed">
                <pre>
                    {seconds}.{hundredths}
                </pre>
            </div>

            <div className="btn-group" role="group">
                <button
                    onClick={handleStartTimerClick}
                    disabled={timerId}
                    className="btn btn-success"
                >
                    Start
                </button>
                <button
                    onClick={handleStopTimerClick}
                    disabled={!timerId}
                    className="btn btn-warning"
                >
                    Stop
                </button>
                <button
                    onClick={handleResetTimerClick}
                    className="btn btn-danger"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;
