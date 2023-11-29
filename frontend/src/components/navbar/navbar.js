import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/authContext";
import LogoutButton from '../buttons/logout/logoutButton';
import './navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("user") != null);
    }, []);

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
                    {isLoggedIn ? (
                        // Menu for logged in users
                        <>
                            <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
                            <li><Link to="/managereservations" onClick={toggleMenu}>Manage Reservations</Link></li>
                            <li><LogoutButton onClick={handleLogout}>Log Out</LogoutButton></li>
                        </>
                    ) : (
                        // Menu for guests (not logged in)
                        <>
                            <li><Link to="/signup" onClick={toggleMenu}>Sign Up</Link></li>
                            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};