import { useState, useEffect } from "react";

function isJSON(str) {
    try {
        return JSON.parse(str) && !!str;
    } catch (e) {
        return false;
    }
}

const useLocalStorage = (key) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? value : "light";
        } catch (err) {
            console.log("error!");
            console.log(err);
            return "light";
        }
    });
    useEffect(() => {
        window.localStorage.setItem(key, storedValue);
    }, [storedValue, key]);

    return [storedValue, setStoredValue];
};

export default useLocalStorage;
