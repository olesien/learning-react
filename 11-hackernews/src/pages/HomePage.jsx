import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const HomePage = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <h1>Welcome to Hacker News!</h1>
            Theme is {theme}
            <Button variant="primary" as={Link} to="/search">
                Use the Search, you must
            </Button>
            <Button onClick={handleChangeTheme} variant="success">
                Change Theme
            </Button>
        </>
    );
};

export default HomePage;
