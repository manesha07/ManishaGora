import axios from "axios";
import authHeader from "./auth-header";

const register = (email, password,name,username) => {
  return axios
    .post(`http://127.0.0.1:8848/users`, {
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
  return axios
    .post(`http://127.0.0.1:8848/login`, {
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
  return axios
    .post(`http://127.0.0.1:8848/customerlogin`, {
      email,
      password,
    })
    .then((response) => {
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