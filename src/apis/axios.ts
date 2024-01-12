import axios, { AxiosInstance } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

export const setAccessToken = (accessToken: string) => {
  request.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export const request: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
