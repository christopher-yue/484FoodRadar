import React, { useContext } from "react";
import "./reservationView.css";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import UserController from "../../controllers/userController";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/authContext";

export const ReservationView = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleEditUser = () => {
    navigate("/edituser");
  };

  const handleDeleteUser = async () => {
    console.log("Deleting user with ID:", user.id);
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      try {
        const deleteResult = await UserController.delete(user.id);

        if (deleteResult.success) {
          alert("User deleted successfully");
          await logout();
          localStorage.removeItem("user");
          navigate("/auth");
        } else {
          console.error("Delete user error:", deleteResult.message);
          alert(`Error: ${deleteResult.message}`);
        }
      } catch (error) {
        console.error("Delete user error:", error);
        alert("An unexpected error occurred during delete");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <section className="user-info">
        <h2>User Profile</h2>
        <div className="user-details">
          <p>
            <strong>First Name:</strong> {user.firstname}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastname}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.mobile}
          </p>
          <button style={{marginTop:"20px"}} onClick={handleEditUser}>Edit Profile Information</button>
          <br></br>
          <button style={{marginTop:"20px"}} onClick={handleDeleteUser}>Delete User</button>
        </div>
      </section>

      <section className="user-info">
        <h2>Reservations</h2>
        {user.reservations && user.reservations.length > 0 ? (
          user.reservations.map((reservation, index) => (
            <div key={index} className="reservation-details">
              <p>
                <strong>Restaurant:</strong> {reservation.restaurant}
              </p>
              <p>
                <strong>Location:</strong> {reservation.location}
              </p>
              <p>
                <strong>Date:</strong> {reservation.date}
              </p>
              <p>
                <strong>Time:</strong> {reservation.time}
              </p>
              <p>
                <strong>Number of People:</strong> {reservation.numPeople}
              </p>
            </div>
          ))
        ) : (
          <p>No reservations found.</p>
        )}
      </section>

      <Footer />
    </div>
  );
};
