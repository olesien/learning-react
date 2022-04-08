import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(() => {
        return new Date().toLocaleTimeString();
    });
    useEffect(() => {
        const intervalId = setInterval(() => {
            //update time
            const now = new Date().toLocaleTimeString();
            console.log("tick tac", now);
            setTime(now);
        }, 1000);
        //cleanup
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return <div className="display-1 text-center">{time}</div>;
};

export default Clock;
