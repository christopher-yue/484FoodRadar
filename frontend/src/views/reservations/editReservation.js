import React, { useState, useContext, useEffect } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import UserController from "../../controllers/userController";
import { AuthContext } from "../../components/context/authContext";

export const EditReservation = () => {
  const { user, setUser } = useContext(AuthContext);
  const reservations = JSON.parse(localStorage.getItem("user.reservations[]"));

  const [userData, setUserData] = useState({
    restaurant: reservations.restaurant,
    location: reservations.location,
    time: reservations.time,
    date: reservations.date,
    numPeople: reservations.numPeople,
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const editResult = await UserController.editUser(user.id, userData);

      if (editResult.success) {
        setUser(editResult.data);
        localStorage.setItem("user", JSON.stringify(editResult.data));
        alert("Profile updated successfully");
      } else {
        console.error("Edit user error:", editResult.message);
        alert(`Error: ${editResult.message}`);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An unexpected error occurred during update");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h2>Edit</h2>
        <input
          type="text"
          name="restaurant"
          value={userData.restaurant}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          value={userData.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="time"
          value={userData.time}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="date"
          value={userData.date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="number of people"
          value={userData.numPeople}
          onChange={handleInputChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Finish Edit"}
        </button>
      </form>
      <Footer />
    </div>
  );
};
