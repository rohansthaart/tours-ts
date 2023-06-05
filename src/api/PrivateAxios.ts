import axios from "axios";

const PrivateAxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export default PrivateAxiosInstance;
