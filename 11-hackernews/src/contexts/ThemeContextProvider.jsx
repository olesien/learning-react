import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const [storedTheme, setStoredTheme] = useLocalStorage("hn_theme");

    const toggleTheme = () => {
        setStoredTheme(theme === "light" ? "dark" : "light");
    };

    const changeTheme = (newTheme) => {
        setStoredTheme(newTheme === "1" ? "light" : "dark");
    };

    // useEffect(() => {
    //   window

    //   return () => {
    //     second
    //   }
    // }, [third])

    useEffect(() => {
        setTheme(storedTheme);
    }, [storedTheme]);

    const values = {
        theme,
        toggleTheme,
        changeTheme,
    };

    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
}
