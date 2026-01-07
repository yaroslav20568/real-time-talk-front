import axios, { type InternalAxiosRequestConfig } from 'axios';

const REST_API_URL = process.env.REST_API_URL;

export const apiInstance = axios.create({
  baseURL: REST_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }

    return Promise.reject(error);
  }
);
