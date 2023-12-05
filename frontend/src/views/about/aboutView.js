import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './aboutView.css';
import logo from './transparentblack.png'

export const AboutView = () => {

    return (
        <div className="fullpage" style={{ backgroundColor: 'whitesmoke' }}>
          <Navbar/>
          <div class="about-section">
            <h1 style={{ color: 'black', fontSize:"40px" }}>FoodRadar</h1>
            <p style={{marginTop:"20px"}}>Welcome to FoodRadar</p>
            <p>Explore restaurants with convenience</p>
          </div>
    
          <h2 style={{ textalign: 'center' }}>About Us</h2>
          <div class="row">
            <div class="column">
              <div class="cardx">
                <img src={logo} alt="" style={{ width: '100%', height: "48%" }} />
                <div className="container1">
                  <h2 style={{ color: "black", marginBottom: "20px" }}>Our Goal</h2>
                  <p style={{ lineHeight: "1.5" }}>The ultimate goal of our platform is to provide our customers with more control and convenience regarding online restaurant navigation and table reservations.
                    Our website features all the restaurants located in a wide range of areas according to their cuisine types. In addition, our customers also do not need to wait in long queues to get a table reservation because we are introducing a new table reservation software, which allows our valued customers to book a table in advance, so they can receive their food quickly.
                  </p>
                </div>
              </div>
            </div>
    
            <div class="column">
              <div class="cardx">
                <img src="https://cdn-icons-png.flaticon.com/512/2504/2504144.png" alt="" style={{ width: '100%', height: "48%" }} />
                <div className="container1">
                  <h2 style={{ color: "black" }}>Explore Features</h2>
                  <ul>
                    <li style={{ marginTop: "20px", marginBottom: "20px" }}>Navigate restaurants</li>
                    <li style={{ marginTop: "20px", marginBottom: "20px" }}>Filter restaurants search based on cuisines</li>
                    <li style={{ marginTop: "20px", marginBottom: "20px" }}>Create a new table reservation at a selected restaurant</li>
                    <li style={{ marginTop: "20px", marginBottom: "20px" }}>Manage and view all the reservations with comfort</li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div class="column">
              <div class="cardx">
                <img src="https://img.freepik.com/premium-photo/contact-us-concept-wood-block-symbol-telephone-mail-address-desk_52701-83.jpg" alt="John" style={{ width: '100%', height: "48%" }} />
                <div className="container1">
                  <h2 style={{ color: "black" }}>Contact Information</h2>
                  <p style={{ marginTop: "20px" }}><strong>Company Name:</strong> FoodRadar</p>
                  <p style={{ marginTop: "20px" }}><strong>Phone Number:</strong> (123)-456-7890</p>
                  <p style={{ marginTop: "20px" }}><strong>Email ID:</strong> Support@Foodradar.Com</p>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
          </div>
    )
}
