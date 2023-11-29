import { Link } from "react-router-dom";
import React from "react";
import "./loginFooter.css";

export const LoginFooter = () => {
  return (
    <div className="loginFooter">
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
              <Link to="/managereservation">Profile/Reservations</Link>
            </p>
          </div>

          <div className="third-info">
            <h4>Explore</h4>
            <p>
              <Link to="/home">Explore Restaurants</Link>
            </p>
          </div>

          <div className="second-info">
            <h4>Support</h4>
            <p>support@foodradar.com</p>
          </div>
        </div>
      </section>

      <div className="end-text">
        <p>Copyright @2023. All Rights Reserved. Designed by FoodRadar.</p>
      </div>
    </div>
  );
};
