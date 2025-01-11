import axios from 'axios';

// Service  for register

const API_URL = 'http://localhost:3000/api';

export const register = async (userData) => {
  console.log('Données envoyées :', userData);
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    console.log('Réponse de l\'API :', response.data);
    return response;
  } catch (error) {
    console.error('Erreur lors de l\'appel API :', error.response || error.message);
    throw error;
  }
};

// Service for login 

export const login = async (credentials) => {
  console.log('Données envoyées ici :', credentials);
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    console.log('Réponses de l\'API :', response.data);

    return {
      success: true,
      token: response.data.token,
      firstName: response.data.firstName,
    };

  } catch (error) {
    console.error('Erreur lors de l\'appel API :', error.response || error.message);
    throw error;
  }
};

// Service for logout

export const logout = () => {
  localStorage.removeItem('token');
};