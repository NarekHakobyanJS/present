import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
    return(
        <nav className="nav">
            <div className="navLink">
                <NavLink to="/dating">Dating</NavLink>
            </div>
            <div className="navLink">
                <NavLink to="/spa">SPA</NavLink>
            </div>
            <div className="navLink">
                <NavLink to="/node">Node JS</NavLink>
            </div>
            <div className="navLink">
                <NavLink to="/cra">CRA</NavLink>
            </div>
            <div className="navLink">
                <NavLink to="/elements">Elements</NavLink>
            </div>
            
        </nav>
    )
}

export default Nav;