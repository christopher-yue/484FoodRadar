import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './googlePlaces.css';
import { fetchPlaces, fetchAutocompleteSuggestions } from '../../controllers/googleAPIController';

const GooglePlaces = () => {
    const [places, setPlaces] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    const navigate = useNavigate();

    const handleInputChange = async (e) => {
        setInputValue(e.target.value);

        if (e.target.value.length > 1) {
            const suggestions = await fetchAutocompleteSuggestions(e.target.value);
            setAutocompleteSuggestions(suggestions);
        } else {
            setAutocompleteSuggestions([]);
        }
    };

    const handleSearch = async () => {
        if (!selectedPlaceId) {
            console.log("No place selected");
            return;
        }

        const fetchedPlaces = await fetchPlaces(selectedPlaceId);
        setPlaces(fetchedPlaces);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion.description);
        setSelectedPlaceId(suggestion.place_id);
        setAutocompleteSuggestions([]);
    };

    const handlePlaceClick = (place) => {
        localStorage.setItem('selectedPlace', JSON.stringify(place));
        navigate(`/place/${place.place_id}`);
    };

    return (
        <div className="google-container">
            <h1 style={{marginTop:"20px",fontSize:"31px"}}>Search Restaurants</h1>
            <div className="search-bar-container">
                <input
                    style={{textAlign:"center",fontWeight:"bolder",fontSize:"18px"}}
                    type="text"
                    id="autocomplete"
                    placeholder="Enter The Geographic Location"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button id="btn" style={{fontSize:"18px"}} onClick={handleSearch}>Search</button>
                {autocompleteSuggestions.length > 0 && (
                    <div className="autocomplete-dropdown">
                        {autocompleteSuggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="autocomplete-item"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion.description}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="output-grid">
                {places.map((place, index) => (
                    <div key={index} className="output-item" onClick={() => handlePlaceClick(place)}>
                        {place.photoUrls && place.photoUrls.length > 0 ? (
                            <img src={place.photoUrls[0]} alt={place.name} />
                        ) : (
                            <img src="https://via.placeholder.com/100" alt="Placeholder" />
                        )}
                        <p>{place.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GooglePlaces;
