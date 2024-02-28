import axios from "axios";
import authHeader from "./auth-header";
import config from "../config";

const register = (email, password, name, username) => {
  const url = `${config.apiUrl}${config.endpoints.users}`;
  return axios
    .post(url, {
      email,
      password,
      name,
      username
    })
    .then((response) => {
      if (response.data.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      return response.data;
    });
};

const login = (email, password) => {
  const url = `${config.apiUrl}${config.endpoints.login}`;
  return axios
    .post(url, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      return response.data.data;
    });
};

const customerlogin = (email, password) => {
  const url = `${config.apiUrl}${config.endpoints.customerlogin}`;
  return axios
    .post(url, {
      email,
      password,
    })
    .then((response) => {
      console.log("rescust",response)
      if (response.data.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      return response.data.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  customerlogin,
  logout,
  getCurrentUser,
};

export default authService;