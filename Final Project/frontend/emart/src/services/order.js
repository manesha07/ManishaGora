import axios from "axios";
import config from "../config";
import authHeader from "./auth-header";
import { interpolate, unParseQuery } from "../utils/string";

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const fetchOrders = async (query) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.orders}`;
    const { data } = await axios.get(url);
    return data.data;
  }
  catch (err) {
    return err.response.data
  }
};

export const fetchOrdersById = async (id) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.order}`;
    const { data } = await axios.get(interpolate(url, { id }));
    return data.data[0];
  }
  catch (err) {
    return err.response.data
  }
};

export const AddOrder = async (addData) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.orders}`;
    const { data } = await axios.post(url, addData, { headers: authHeader() }
    );
    return data.data;
  }
  catch (err) {
    return err.response.data;
  }
};

export const EditOrder = async (EditData, id) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.order}`;
    const { data } = await axios.put(interpolate(url, { id }), EditData, { headers: authHeader() }
    );
    return data.data;
  }
  catch (err) {
    return err.response.data;
  }
};

export const deleteOrder = async (id) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.order}`;
    const { data } = await axios.delete(interpolate(url, { id }), { headers: authHeader() });
    return data.data;
  }
  catch (err) {
    return err.response.data;
  }
};
