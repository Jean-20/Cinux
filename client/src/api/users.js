import axios from 'axios';

const API = "http://localhost:3500" //import.meta.env.VITE_API_URL;

export const getUsers = async () => {
    try {
      const response = await axios.get(`${API}/api/peliculas`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };

export const getUser = async (id) => {
    try {
        const response = await axios.get(`${API}/api/usuario/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return [];
    }
}

export const registerUser = (user) => { 
    return axios.post(`${API}/api/usuario`,user);
}

export const deleteUser = (id) => {
    return axios.delete(`${API}/api/usuario/${id}`);
}


export const loginUser = (user) => {
  return axios.post(`${API}/api/auth/login`, user);
};

export const logoutUser = () => {
  return axios.post(`${API}/api/auth/logout`);
};
