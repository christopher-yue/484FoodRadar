import React, { useState, useContext } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import UserController from "../../controllers/userController";
import { AuthContext } from "../../components/context/authContext";
import "./editUser.css";

export const EditUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const userinfo = JSON.parse(localStorage.getItem("user"));

  const [userData, setUserData] = useState({
    firstname: userinfo.firstname,
    lastname: userinfo.lastname,
    email: userinfo.email,
    mobile: userinfo.mobile,
  });

  const [loading, setLoading] = useState(false); //boolean on button

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(
        JSON.stringify(userinfo.token) + " ---------- " + userinfo.id
      );
      const editResult = await UserController.editUser(
        userinfo.id,
        userinfo.token,
        userData // Remove JSON.stringify
      );

      if (editResult.success) {
        setUser(editResult.data);
        console.log("test edit" + editResult.data); //test
        console.log("test user" + user.data); //test
        // localStorage.setItem("user", JSON.stringify(editResult.data));//to update localstorage
        alert("User updated successfully");
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
        <h2>Editing profile</h2>
        <label>First name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={userData.firstname}
          onChange={handleInputChange}
        />
        <label>Last name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={userData.lastname}
          onChange={handleInputChange}
        />
        <label>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <label>Mobile:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={userData.mobile}
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
