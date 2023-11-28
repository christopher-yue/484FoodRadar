// frontend/src/views/home/homeView.js
import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import "./homeView.css";
import GooglePlaces from "../../components/google/googlePlaces";


export const HomeView = () => {
  
  const name = JSON.parse(localStorage.getItem("user")).firstname;

  return (
    <div>
      <Navbar />
      <div className="welcome-section">
        <h2>Welcome to FoodRadar {name}!</h2>
        <p>Explore a variety of restaurants and dishes near you. Find your next delicious meal with FoodRadar.</p>
      </div>
      <div className="location-search-section">
        <h2>Discover the Best Food Near You</h2>
        <p>Input your location below to find restaurants in your area:</p>
      </div>
      <div className="home">
        <GooglePlaces />
      </div>
      <Footer />
    </div>
  );
};
