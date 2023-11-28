import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul className="navmenu">
                    <li><Link to="/signup" onClick={toggleMenu}>Sign Up</Link></li>
                    <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};