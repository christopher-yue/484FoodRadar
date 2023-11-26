// frontend/src/views/home/homeView.js
import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import "./homeView.css";
import GooglePlaces from "../../components/google/googlePlaces";


export const HomeView = () => {

  // const [userName, setUserName] = useState('');

  // useEffect(() => {
  //   const userId = Cookies.get('refreshToken');

  //   if (userId) {
  //     // Fetch user information from the backend using the retrieved user ID
  //     fetch(`/api/user/${userId}/name`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setUserName(data.name);
  //       })
  //       .catch((error) => console.error('Error fetching user information:', error));
  //   } else {
  //     console.error('User ID not found in local storage.');
  //   }
  // }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <Navbar />
      <div className="welcome-section">
        <h2>Welcome to FoodRadar!</h2>
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
