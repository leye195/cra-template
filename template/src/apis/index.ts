import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const baseURL = "";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

api.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default api;
