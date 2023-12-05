import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import LogoutButton from "../buttons/logout/logoutButton";
import "./navbar.css";

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
    navigate("/auth");
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

      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="navmenu">
          {isLoggedIn ? (
            // Menu for logged in users
            <>
              <li>
                <Link to="/home" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/managereservation" onClick={toggleMenu}>
                  Profile/Manage Reservations
                </Link>
              </li>
              <li>
                <Link to="/aboutview" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
              </li>
            </>
          ) : (
            // Menu for guests (not logged in)
            <>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/auth" onClick={toggleMenu}>
                  Login/Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
