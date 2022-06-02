import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">HOME</Link>
                <div className="collapse navbar-collapse" id="navItems">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">sign in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contents">contents</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;