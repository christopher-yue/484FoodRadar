import axios from 'axios';

const apiURL = "http://localhost:8000";

const UserController = {
    login: async (email, password) => {
        const response = await axios.post(
            `${apiURL}/api/user/login`,
            { email, password },
            { withCredentials: true }
        );
        console.log(response.data);
        return response;
    },
    logout: async () => {
        try {
            await axios.get(`${apiURL}/api/user/logout`, { withCredentials: true });
            console.log('User logged out');
        } catch (error) {
            console.error('Logout error:', error);
        }
    },
    signup: async (userData) => {
        try {
            const response = await axios.post(`${apiURL}/api/user/register`, userData);
            return { success: true, data: response.data };
        } catch (error) {
            console.error('Signup failed:', error.response.data);
            return { success: false, message: error.response.data };
        }
    }
    // add more methods here if needed
};

export default UserController;
