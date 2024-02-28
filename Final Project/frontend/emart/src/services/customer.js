import axios from "axios";
import config from "../config";
import authHeader from "./auth-header";
import { interpolate, unParseQuery } from "../utils/string";

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const fetchCustomers = async (query) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.customers}`;
    const { data } = await axios.get(url);
    console.log(data);
    return data.data;
  }
  catch (err) {
    console.log("errcustomer",err)
    return err.response.data
  }
};

export const fetchCustomersById = async (id) => {
  try {
    const url = `${config.apiUrl}${config.endpoints.customer}`;
    const { data } = await axios.get(interpolate(url, { id }));
    return data.data[0];
  }
  catch (err) {
    return err.response.data
  }
};

// export const AddOrder= async(addData) => {
//   try {
//     console.log("inside",addData);
//     const url = `${config.apiUrl}${config.endpoints.orders}`;
//     const {data} = await axios.post(url,addData, { headers: authHeader() }
//     );
//     console.log("Added data",data.data.data);
//     return data.data;
//   }
//    catch (err) {
//     console.log("yehi err",err);
//     return err.response.data;
//   }
// };

// export const EditOrder= async(EditData,id) => {
//   try {
//     const url = `${config.apiUrl}${config.endpoints.order}`;
//     const {data} = await axios.put(interpolate(url, { id }), EditData, { headers: authHeader() }
//     );
//     console.log("edited data",data.data.data);
//     return data.data;
//   }
//    catch (err) {
//      console.log("yehi details",err.response.data.details);
//     return err.response.data;
//   }
// };

// export const deleteOrder = async (id) => {
//   try{
//   const url = `${config.apiUrl}${config.endpoints.order}`;
//   const {data} = await axios.delete(interpolate(url, { id }), { headers: authHeader() });
//   console.log("deleted data",data);
//   return data.data;}
//   catch (err) {
//     console.log("yehi err",err);
//    return err.response.data;
//  }
// };
