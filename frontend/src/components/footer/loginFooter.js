import { Link } from "react-router-dom";
import React from "react";
import "./footer.css";

export const LoginFooter = () => {
  return (
    <div>
    <section className="contact" id="contact">
      <div className="contact-info">
        <div className="first-info">
          <h1 style={{color:"white"}}>FoodRadar</h1>
          <p style={{color:"white"}}>(123)-456-7890</p>
          <p style={{color:"white"}}>support@foodradar.com</p>
        </div>
        <div className="second-info">
          <h4>User</h4>
          <p>
            <Link to="/managereservation" style={{color:"white"}}>Profile/Reservations</Link>
          </p>
        </div>

        <div className="third-info">
          <h4>Explore</h4>
          <p>
            <Link to="/searchrestaurant"style={{color:"white"}}>Explore Restaurants</Link>
          </p>
        </div>
      </div>
    </section>
    <p style={{color:"white",backgroundColor:"#4a4e69",textAlign:"center"}}>Copyright @2023. All Rights Reserved. Designed by FoodRadar.</p>
  </div>
  );
};
