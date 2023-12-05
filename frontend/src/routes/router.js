// frontend/src/routes/Router.js
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IndexView } from "../views/index/indexView";
import { HomeView } from "../views/home/homeView";
import { AuthView } from "../views/auth/AuthView";
import { AuthContext } from "../components/context/authContext";
import { ReservationView } from "../views/reservations/reservationView";
import { PlaceDetails } from "../views/place/placeDetails";
import { NoPage } from "../views/NoPage/noPageView";
import {EditUser} from "../views/reservations/editUser";
import { AboutView } from "../views/about/aboutView";

export const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="/managereservation" element={<ReservationView />} />
            <Route path="/edituser" element={<EditUser/>} />
            <Route path="/editprofile" element={<ReservationView />} />
            <Route path="/aboutview" element={<AboutView/>}/>
            
            <Route path="/auth" element={<Navigate to="/home" />} />
            <Route path="/place/:placeId" element={<PlaceDetails />} />
            <Route path="/404" element={<NoPage />} />
            {/* add more routes here if needed */}
            <Route path="*" element={<Navigate to="/404" />} />{" "}
            {/* catch all routes that are not defined above */}
          </>
        ) : (
          <>
            <Route path="/" element={<IndexView />} />
            <Route path="/home" element={<Navigate to="/auth" />} />
            <Route path="/auth" element={<AuthView />} />
            <Route path="/managereservation" element={<Navigate to="/auth" />} />
            <Route path="*" element={<NoPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
