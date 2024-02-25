import axios from "axios";
import config from "../config";
import authHeader from "./auth-header";
import { interpolate, unParseQuery } from "../utils/string";

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const fetchProducts = async (query) => {
  const url = `${config.apiUrl}${config.endpoints.products}`;
  const data = await axios.get(url);
  return data.data.data;
};

export const fetchProductsById = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.product}`;
  const data = await axios.get(interpolate(url,{ id }));
  return data.data.data[0];
};

export const AddProduct= async(addData) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.products}`;
    const data = await axios.post(url,addData, { headers: authHeader() }
    );
    return data.data.data;
  }
   catch (err) {
    return err.response.data;
  }
};

export const EditProduct= async(EditData,id) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.product}`;
    const data = await axios.put(interpolate(url, { id }), EditData, { headers: authHeader() }
    );
    return data.data.data;
  }
   catch (err) {
    return err.response.data;
  }
};

export const deleteProduct = async (id) => {
  try{
  const url = `${config.apiUrl}${config.endpoints.product}`;
  const data = await axios.delete(interpolate(url, { id }), { headers: authHeader() });

  return data.data.data;}
  catch (err) {
   return err.response.data;
 }
};
