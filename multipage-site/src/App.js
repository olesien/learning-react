import "./App.css";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <h1>My Articles</h1>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
                <Switch>
                    <Route exact={true} path="/">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
