import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import { useState, useEffect } from "react";
import { useThemeContext } from "../contexts/ThemeContextProvider";

const Navigation = () => {
    const { theme, toggleTheme, changeTheme: modifyTheme } = useThemeContext();
    const [radioValue, setRadioValue] = useState("");

    useEffect(() => {
        const localTheme = theme === "light" ? "1" : "2";
        setRadioValue(localTheme);
    }, [theme]);

    const radios = [
        { name: "Light", value: "1" },
        { name: "Dark", value: "2" },
    ];

    const changeTheme = (e) => {
        setRadioValue(e.currentTarget.value);
        modifyTheme(e.currentTarget.value);
    };
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Hacker News
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} end to="/search">
                            Search
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={
                                idx % 2 ? "outline-success" : "outline-danger"
                            }
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={changeTheme}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </Container>
        </Navbar>
    );
};

export default Navigation;
