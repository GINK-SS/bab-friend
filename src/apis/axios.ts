import axios, { AxiosInstance } from 'axios';

export const request: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const formDataRequest: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
