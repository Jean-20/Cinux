import axios from 'axios';

const API = "http://localhost:3500" //import.meta.env.VITE_API_URL;



export const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${API}/api/auth/login`, userData);
      return response;
    } catch (error) {
      throw error;
    }
  };

export const logoutUser = () => {
    return axios.post(`${API}/api/auth/logout`);
}   

