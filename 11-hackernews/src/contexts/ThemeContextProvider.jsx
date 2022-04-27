import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const values = {
        theme,
        setTheme,
    };
    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
}
