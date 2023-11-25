import React from "react";
import { LoginNavbar } from "../../components/navbar/loginNavbar";
import { LoginFooter } from "../../components/footer/loginFooter";
import "./indexView.css";
import Filter from "../../images/filter.svg";
import Pin from "../../images/pin.svg";
import Calendar from "../../images/calendar.svg";

export const IndexView = () => {
  return (
    <div className="page">
      <LoginNavbar />
      <div className="head">
        <div className="logo-container">
          <img src="logo.png" alt="FoodRadar Logo" className="logo" />
          <h1>FoodRadar</h1>
        </div>
        <p>Discover the best food options in your area!</p>
      </div>

      <div className="main">
        <section className="hero">
          <h2>Discover Local Delights</h2>
          <p>
            Explore a world of culinary experiences right in your neighborhood.
            From cozy cafes to gourmet restaurants, FoodRadar helps you find the
            perfect dining spot.
          </p>
          <a href="/signup" className="cta-button">
            Get Started
          </a>
        </section>

        <section className="features">
          <div className="feature">
            <img src={Filter} alt="Filter Icon" />
            <h3>Smart Filters</h3>
            <p>
              Refine your search with smart filters such as cuisine, price
              range, and ratings to discover the best options tailored to your
              preferences.
            </p>
          </div>

          <div className="feature">
            <img src={Pin} alt="Location Icon" />
            <h3>Location-Based Search</h3>
            <p>
              Find hidden gems nearby using our location-based search. Uncover
              new flavors and experiences just around the corner.
            </p>
          </div>

          <div className="feature">
            <img src={Calendar} alt="Calendar Icon" />
            <h3>Table Booking</h3>
            <p>
              Secure your spot at your favorite restaurants. With FoodRadar, you
              can easily make and manage reservations for a hassle-free dining
              experience.
            </p>
          </div>
        </section>
      </div>
      <LoginFooter />
    </div>
  );
};
