// frontend/src/views/home/homeView.js

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/buttons/logout/logoutButton";
import { AuthContext } from "../../components/context/authContext";
import { Navbar } from "../../components/navbar/navbar";

export const HomeView = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </div>
  );
};
