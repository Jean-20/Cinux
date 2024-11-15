import axios from 'axios';

const API = "http://localhost:3500"; //import.meta.env.VITE_API_URL

export const getPeliculas = async () => {
  try {
    const response = await axios.get(`${API}/api/peliculas`);
    return response.data;
  } catch (error) {
    console.error('Error fetching peliculas:', error);
    return [];
  }
};

export const getPelicula = async (id) => {
  try {
    const response = await axios.get(`${API}/api/peliculas/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pelicula with id ${id}:`, error);
    return null;
  }
};

export const registerPelicula = async (pelicula) => {
  try {
    const response = await axios.post(`${API}/api/peliculas`, pelicula);
    return response.data;
  } catch (error) {
    console.error('Error registering pelicula:', error);
    return null;
  }
};

export const deletePelicula = async (id) => {
  try {
    const response = await axios.delete(`${API}/api/peliculas/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting pelicula with id ${id}:`, error);
    return null;
  }
};