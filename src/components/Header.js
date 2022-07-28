import React from 'react';
import logo from '../images/places-logo.png';

function Header() {
    return (
        <header className="header">
            <a className="logo" href="https://places-buterina.netlify.app/">
                <img className="logo__image" src={logo} alt="Places Logo" />
            </a>
        </header>
    )
}

export default Header;
