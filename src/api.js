
import axios from 'axios';

const baseURL = 'http://20.244.56.144';

export const registerCompany = async (companyData) => {
  const response = await axios.post(`http://20.244.56.144/train/register`, companyData);
  return response.data;
};

export const getAuthorizationToken = async (authData) => {
  const response = await axios.post(`http://20.244.56.144/train/auth`, authData);
  return response.data.token;
};

export const getAllTrains = async (token) => {
  const response = await axios.get(`http://20.244.56.144/train/trains`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
