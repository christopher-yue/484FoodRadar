import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { useLocation, useNavigate } from 'react-router-dom';
import './placeDetails.css';

export const PlaceDetails = () => {
    const [place, setPlace] = useState(() => {
        const savedPlace = localStorage.getItem('selectedPlace');
        return savedPlace ? JSON.parse(savedPlace) : null;
    });

    if (!place) {
        return <div>Loading...</div>;
    }

    return (
        <div className="place-details-container">
            <Navbar />
            <h1 style={{marginTop:"20px"}}>{place.name}</h1>
            <div className="photos-container">
                {place.photoUrls && place.photoUrls.map((url, index) => (
                    <img key={index} src={url} alt={place.name} />
                ))}
            </div>
            <div className="data">
                <h1>Table Reservation</h1>
                <input
                className='numPeople'
                type='text'
                placeholder='Number of People'
                />
                <input
                className='date'
                type='date'
                placeholder='Date'
                />
                <input
                className='time'
                type='time'
                placeholder='Time'
                />
            </div>
            <button className="add-reservation-btn">Add to Reservations</button>
            <Footer />
        </div>
    );
};
