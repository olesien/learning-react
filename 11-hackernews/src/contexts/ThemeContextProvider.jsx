import { useContext } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const changeTheme = (newTheme) => {
        setTheme(newTheme === "1" ? "light" : "dark");
    };

    const values = {
        theme,
        toggleTheme,
        changeTheme,
    };
    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
}
