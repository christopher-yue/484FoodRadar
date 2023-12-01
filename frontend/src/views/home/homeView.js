// frontend/src/views/home/homeView.js
import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import "./homeView.css";
import GooglePlaces from "../../components/google/googlePlaces";


export const HomeView = () => {
  
  const name = JSON.parse(localStorage.getItem("user")).firstname;

  return (
    <div className="fullpage" style={{backgroundColor:"white"}}>
      <Navbar />
      <section className="main-home" id="main-home" style={{backgroundcolor:'white'}}>
       <div className="main-text">
           <h1 style={{marginLeft:"170px",marginBottom:"50px"}}>Welcome to Food Radar {name}</h1>

           <a href="#" className="main-btn">Explore Now <i class='#'></i></a>
       </div>
   </section>

      <div className="home" style={{backgroundColor:"white"}}>
        <GooglePlaces />
      </div>
      <Footer/>
    </div>

  );
};
