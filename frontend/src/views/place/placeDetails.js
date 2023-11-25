import React, { useEffect, useState } from 'react';
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
            <h1>{place.name}</h1>
            <div className="photos-container">
                {place.photoUrls && place.photoUrls.map((url, index) => (
                    <img key={index} src={url} alt={place.name} />
                ))}
            </div>
            <button className="add-reservation-btn">Add to Reservations</button>
        </div>
    );
};
