import React, {useState} from 'react';
import './NavbarTopCss.css';

function NavbarExpanded(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);

        const x = document.getElementsByClassName('container_top')[0];
        x.classList.toggle("change");
    };


    return (
        <nav className={`nav ${isExpanded ? 'nav--expanded' : ''}`}>
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

            <button className="nav__collapser" onClick={handleToggle}>
                <div className="container_top">
                    <div id="bar1" className="bars"></div>
                    <div id="bar2" className="bars"></div>
                    <div id="bar3" className="bars"></div>
                </div>

            </button>
        </nav>
    );
}

export default NavbarExpanded;