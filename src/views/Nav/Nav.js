import React from "react";
import {
    BrowserRouter as Router,
    Link,
    NavLink
} from "react-router-dom";
import './Nav.scss'
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeclassname="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/user" activeclassname="active">Users</NavLink>
                <NavLink to="/todo" activeclassname="active">Todos</NavLink>
                <NavLink to="/about" activeclassname="active">About</NavLink>
            </div>
        )
    }
}

export default Nav;