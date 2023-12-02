
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
    // You can navigate to the edit page or perform other edit actions here
navigate("/edituser")
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
          <button onClick={handleEditUser}>Edit</button>
          <button onClick={handleDeleteUser}>Delete</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

