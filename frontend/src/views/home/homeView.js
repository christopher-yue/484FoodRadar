// frontend/src/views/home/homeView.js

import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import "./homeView.css";

export const HomeView = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <h1>Home Page</h1>
      </div>
      <Footer />
    </div>
  );
};
