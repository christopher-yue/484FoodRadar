// frontend/src/routes/Router.js
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginView } from "../views/login/loginView";
import { IndexView } from "../views/index/indexView";
import { SignupView } from "../views/signup/signupView";
import { HomeView } from "../views/home/homeView";
import { AuthContext } from "../components/context/authContext";
import { ReservationView } from "../views/reservations/reservationView";
import { PlaceDetails } from "../views/place/placeDetails";
import { noPageView } from "../views/NoPage/noPageView";
//import { RestaurantSearch } from "../views/restaurantSearch/restaurantSearch";

export const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/home" element={<HomeView />} />
            <Route path="/managereservation" element={<ReservationView />} />
            <Route path="/login" element={<Navigate to="/home" />} />
            <Route path="/signup" element={<Navigate to="/home" />} />
            <Route path="/place/:placeId" element={<PlaceDetails />} />
            <Route path="/404" element={<noPageView />}/>
            {/* add more routes here if needed */}
            <Route path="*" element={<Navigate to="/404" />} />{" "}
            {/* catch all routes that are not defined above */}
          </>
        ) : (
          <>
            <Route path="/" element={<IndexView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/signup" element={<SignupView />} />
            <Route path="/home" element={<Navigate to="/login" />} />

            <Route path="*" element={<NoPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
