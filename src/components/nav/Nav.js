import React from "react";
import './nav.css'

const Nav = () => {
    return (
        <div className="div__navbar">
           <ul className="nav__bar">
            <li className="nav__item">home</li>
            <li className="nav__item">shop</li>
            <li className="nav__item">contact us</li>
            <li className="nav__item">sign in</li>
           </ul>
        </div>
    )
}

export default Nav;