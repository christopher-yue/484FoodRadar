import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/buttons/logout/logoutButton";
import { AuthContext } from "../../components/context/authContext";
import "./footer.css";

export const Footer = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="footer">
      <section className="contact" id="contact">
        <div className="contact-info">
          <div className="first-info">
            <h1>FoodRadar</h1>
            <p>(123)-456-7890</p>
            <p>support@foodradar.com</p>
          </div>
          <div className="second-info">
            <h4>User</h4>
            <p>
              <Link to="/profile">Profile</Link>
            </p>
            <p>
              <Link to="/managereservation">Reservations</Link>
            </p>
          </div>

          <div className="third-info">
            <h4>Explore</h4>
            <p>
              <Link to="/searchrestaurant">Explore Restaurants</Link>
            </p>
          </div>

          <div className="second-info">
            <h4>Support</h4>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </div>
        </div>
      </section>

      <div className="end-text">
        <p>Copyright @2023. All Rights Reserved. Designed by FoodRadar.</p>
      </div>
    </div>
  );
};
