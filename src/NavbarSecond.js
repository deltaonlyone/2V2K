import React from 'react';
import './NavbarSecond.css';

function NavbarSecond(props) {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/" className="nav__brand">Snavvy</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Other</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavbarSecond;