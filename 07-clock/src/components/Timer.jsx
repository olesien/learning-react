import { useEffect, useState } from "react";
import moment from "moment";

const Timer = () => {
    //console.log(props);
    const [time, setTime] = useState(1);
    const [formattedTime, setFormattedTime] = useState("00:00");
    const [showStop, setShowStop] = useState(true);
    const startTimer = () => {
        return setInterval(() => {
            console.log("updating timer");

            setTime((time) => time + 1);

            console.log(time + 1);
        }, 1000);
    };
    const [timerId, setTimerId] = useState(0);
    // const toggleClock = () => {
    //     setShowClock(!showClock);
    // };

    const toggleTimer = () => {
        if (showStop) {
            //I want to stop it
            clearInterval(timerId);
        } else {
            //I want to start it
            setTimerId(startTimer());
        }
        setShowStop(!showStop);
    };

    const resetTimer = () => {
        setTime(0);
    };

    useEffect(() => {
        setTimerId(startTimer());
    }, []);

    //Set formatted time
    useEffect(() => {
        //console.log(new Date(time * 1000).toLocaleTimeString());
        setFormattedTime(moment(time * 1000).format("mm:ss"));
    }, [time]);

    //vad vill jag göra? En timer som räknar upp. Den ska börja på 1 och räkna upp, vilket fortsätter tills någon klickar på stopp.
    return (
        <>
            <span
                onClick={toggleTimer}
                id="toggle-clock"
                className="btn btn-outline-light m.1"
            >
                {showStop ? "Stop" : "Start"}
            </span>
            <span className="btn btn-outline-light m-1" onClick={resetTimer}>
                Reset
            </span>
            <div className="display-1 text-center">{formattedTime}</div>
        </>
    );
};

export default Timer;
