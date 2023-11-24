// googlePlaces.js
import React, { useState, useEffect } from "react";
import "./googlePlaces.css";

const GooglePlaces = () => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [places, setPlaces] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (window.googleMapsScriptLoaded) {
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initAutocomplete`;
    script.async = true;
    document.body.appendChild(script);

    window.initAutocomplete = () => {
      setAutocomplete(
        new window.google.maps.places.Autocomplete(
          document.getElementById("autocomplete"),
          { types: ["geocode"] }
        )
      );
    };

    window.googleMapsScriptLoaded = true;

    return () => {
      document.body.removeChild(script);
      window.googleMapsScriptLoaded = false;
    };
  }, []);

  const handleSearch = () => {
    const place = autocomplete.getPlace();
    console.log(place);

    if (!place.geometry) {
      console.log("Returned place contains no geometry");
      return;
    }

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.nearbySearch(
      {
        location: place.geometry.location,
        radius: "500",
        type: ["restaurant"],
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
        }
      }
    );
  };

  return (
    <div className="google-container">
      <h1>Nearby Restaurants Finder</h1>
      <div className="search-bar-container">
        <input
          type="text"
          id="autocomplete"
          placeholder="Enter location"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="output-grid">
        {places.map((place, index) => (
          <div key={index} className="output-item">
            <p>{place.name}</p>
            {place.photos ? (
              <img src={place.photos[0].getUrl()} alt={place.name} />
            ) : (
              <img src="https://via.placeholder.com/100" alt="Placeholder" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GooglePlaces;
