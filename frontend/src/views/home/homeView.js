// frontend/src/views/home/homeView.js

import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import "./homeView.css";
import GooglePlaces from "../../components/google/googlePlaces";

export const HomeView = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <GooglePlaces />
      </div>
      <Footer />
    </div>
  );
};
