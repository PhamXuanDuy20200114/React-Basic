import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import './Nav.scss'
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeclassname="active">
                    Home
                </NavLink>
                <NavLink to="/todo" activeclassname="active">Todos</NavLink>
                <NavLink to="/about" activeclassname="active">About</NavLink>
            </div>
        )
    }
}

export default Nav;