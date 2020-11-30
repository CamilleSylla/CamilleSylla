import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {

    return (
        <div className="navContainer">
            <div className="navList">
                <NavLink to="/" exact activeStyle={{color: "#A81549"}}>
                01 - Home
                </NavLink>
                <NavLink to="/technos" exact activeStyle={{color: "#A81549"}}>
                02 - Technos
                </NavLink>
                <NavLink to="/bio" exact activeStyle={{color: "#A81549"}}>
                03 - Bio
                </NavLink>
                <NavLink to="/contact" exact activeStyle={{color: "#A81549"}}>
                04 - Contact
                </NavLink>
            </div>
        </div>
    )
}