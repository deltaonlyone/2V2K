import React from 'react';
import './NavbarSecond.css';

function NavbarSecond(props) {
    return (
        <header>
            <a href="/" className="nav__brand">Snavvy</a>

            <div className="nav__collapsable">

                <a href="#" className="underline-hover">Locations</a>
                <a href="#" className="underline-hover">Map</a>
                <a href="#" className="underline-hover">Photographers</a>


                <div className="toggle-switch">
                    <label className="switch-label">
                        <input type="checkbox" className="checkbox"></input>
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="nav__cta">
                    <button className="buttonNavbar">Sign in</button>
                </div>

            </div>
        </header>
    );
}

export default NavbarSecond;