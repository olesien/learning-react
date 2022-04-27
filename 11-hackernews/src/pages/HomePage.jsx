import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const HomePage = () => {
    return (
        <>
            <h1>Welcome to Hacker News!</h1>

            <Button variant="primary" as={Link} to="/search">
                Use the Search, you must
            </Button>
        </>
    );
};

export default HomePage;
