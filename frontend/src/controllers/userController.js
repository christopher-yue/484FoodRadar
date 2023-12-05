import axios from "axios";
import UserModel from "../models/userModel";

const apiURL = "https://foodradarbackend.onrender.com";

const UserController = {
  login: async (email, password) => {
    const response = await axios.post(
      `${apiURL}/api/user/login`,
      { email, password },
      { withCredentials: true }
    );

    return response;
  },

  logout: async () => {
    try {
      await axios.get(`${apiURL}/api/user/logout`, { withCredentials: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  },
  signup: async (userData) => {
    try {
      const response = await axios.post(
        `${apiURL}/api/user/register`,
        userData
      );
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Signup failed:", error.response.data);
      return { success: false, message: error.response.data };
    }
  },
  delete: async (userId) => {
    try {
      const response = await axios.delete(`${apiURL}/api/user/${userId}`, {
        withCredentials: true,
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Delete user error:", error);
      return { success: false, message: "An error occurred during delete" };
    }
  },
  editUser: async (userId, authToken, updatedUserData) => {
    try {
      const response = await axios.put(
        `${apiURL}/api/user/edit-user?_id=${userId}`,
        updatedUserData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const newUser = new UserModel(response.data);
      localStorage.setItem("user", JSON.stringify(newUser.data));
      localStorage.setItem("token", newUser.refreshToken);
      return { success: true, data: JSON.stringify(newUser.data) };
    } catch (error) {
      console.error("Edit user error:", error);
      return { success: false, message: "An error occurred during edit" };
    }
  },

  // add more methods here if needed
};

export default UserController;
