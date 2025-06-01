import axios, { AxiosInstance } from "axios";

const $http: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default $http;
