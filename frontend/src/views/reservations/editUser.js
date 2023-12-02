import React, { useState, useContext } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import UserController from "../../controllers/userController";
import { AuthContext } from "../../components/context/authContext";

export const EditUser = () => {
  const { user } = useContext(AuthContext);
  const userinfo = JSON.parse(localStorage.getItem("user"));

  const [userData, setUserData] = useState({
    firstname: userinfo.firstname, // Use userinfo here
    lastname: userinfo.lastname,   // Use userinfo here
    email: userinfo.email,         // Use userinfo here
    mobile: userinfo.mobile,       // Use userinfo here
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to update user information
      const editResult = await UserController.editUser(user.id, userData);

      if (editResult.success) {
        alert("User updated successfully");
        // Optionally, you can update the user in context or localStorage
        // context.updateUser({ ...user, ...userData });
      } else {
        console.error("Edit user error:", editResult.message);
        alert(`Error: ${editResult.message}`);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An unexpected error occurred during update");
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h2>Edit</h2>
        <input
          type="text"
          name="firstname"
          className="signup-input"
          value={userData.firstname}  // Use userData here
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastname"
          className="signup-input"
          value={userData.lastname}   // Use userData here
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="signup-input"
          value={userData.email}      // Use userData here
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mobile"
          className="signup-input"
          value={userData.mobile}     // Use userData here
          onChange={handleInputChange}
        />
        <button type="submit">Finish edit</button>
      </form>
      <Footer />
    </div>
  );
};
