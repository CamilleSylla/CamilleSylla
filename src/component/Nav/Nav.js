import { transform } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const [mobileMenuClick, setMobileMenuClick] = useState(false)
    function Cross() {
        if (mobileMenuClick === false) {
            const top = document.getElementById('top');
            top.style.transform = 'rotate(45deg)';
            top.style.position = "absolute"
            const middle = document.getElementById('middle')
            middle.style.display = "none"
            const bottom = document.getElementById('bottom')
            bottom.style.transform = 'rotate(-45deg)'
            bottom.style.position = "absolute"
            const menu = document.getElementById('navList')
            menu.style.display = "flex"
            const background = document.querySelector('.navContainer')
            
            background.style.height = "100vh"
            background.style.background = "#038c96"
            
            setMobileMenuClick(true)

        } else {
            const top = document.getElementById('top');
            top.style.transform = 'rotate(0deg)';
            top.style.position = "static"
            const middle = document.getElementById('middle')
            middle.style.display = "initial"
            const bottom = document.getElementById('bottom')
            bottom.style.transform = 'rotate(0deg)'
            bottom.style.position = "static"
            const displayMenu = document.getElementById('navList')
            displayMenu.style.display = "none"
            const background = document.querySelector('.navContainer')
            background.style.height = "10vh"
            background.style.background = "transparent"
            setMobileMenuClick(false)
        }

    }

    function Click() {
        const width = window.innerWidth
        console.log(width);
        if (width <= 538) {
            const top = document.getElementById('top');
            top.style.transform = 'rotate(0deg)';
            top.style.position = "static"
            const middle = document.getElementById('middle')
            middle.style.display = "initial"
            const bottom = document.getElementById('bottom')
            bottom.style.transform = 'rotate(0deg)'
            bottom.style.position = "static"
            const displayMenu = document.getElementById('navList')
            displayMenu.style.display = "none"
            const background = document.querySelector('.navContainer')
            background.style.background = "transparent"
            background.style.height = "10vh"
            setMobileMenuClick(false)
        }

    }
    return (
        <div className="navContainer">
            <div id="menuHamburger" onClick={() => Cross()}>
                <span id="top"></span>
                <span id="middle"></span>
                <span id="bottom"></span>
            </div>
            <div id="navList">
                <NavLink to="/" onClick={() => Click()} exact activeStyle={{ color: "#A81549" }}>
                    01 - Home
                </NavLink>
                <NavLink to="/bio" onClick={() => Click()} exact activeStyle={{ color: "#A81549" }}>
                    02 - Bio
                </NavLink>
                <NavLink to="/projects" onClick={() => Click()} exact activeStyle={{ color: "#A81549" }}>
                    03 - Projets
                </NavLink>
                <NavLink to="/technos" onClick={() => Click()} exact activeStyle={{ color: "#A81549" }}>
                    04 - Technos
                </NavLink>
                <NavLink to="/contact" onClick={() => Click()} exact activeStyle={{ color: "#A81549" }}>
                    05 - Contact
                </NavLink>
            </div>
        </div>
    )
}