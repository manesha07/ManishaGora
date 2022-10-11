import React, { useState,useEffect} from 'react';
import {useLocation } from "react-router-dom";
import * as orderService from "../../services/order";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditOrder = () => {
  // const {state} = useLocation();
  // const { id } = state;
  const id = 46;
  console.log(id);
  const [remarks, setRemarks] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  const [status, setStatus] = useState("");

    useEffect(() => {
      const fetchOrder = async () => {
        const order = await orderService.fetchOrdersById(id);
        setRemarks(order.orderRemarks);
        setQuantity(order.quantity);
        setTotal(order.total);
        setStatus(order.status);        
        console.log('fetched',order);
      };
  
      fetchOrder();
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const EditData = {
        order_remarks: remarks,
        quantity: +(quantity),
        total: +(quantity),
        status: "pending"
      }
        await orderService.EditOrder(EditData,id).then(
          (response) => {
            const res = response.details;
            if(!!response.details)
            { 
              toast.error(res.toString(), {
                position: toast.POSITION.TOP_CENTER
              });
            }
            else{
              console.log("Added Order successfully", response);
              toast.success("Record Edited Succesfully", {
                position: toast.POSITION.TOP_CENTER
              },{
                icon: "🚀"
              });
            }
          },
          (error) => {
            toast.error("Error Notification !", {
              position: toast.POSITION.TOP_CENTER
            });
            console.log(error.response.data.details);
          }
        );
      } 

    return (
        <div>
          {console.log("hiiii")}
        <h1 className="display-4 text-center mt-3">Update Order</h1>
        <form style={{ width: "400px", margin: "auto" }} onSubmit={handleSubmit}>
        <div class="form-group  mb-3">
          <label for="InputRemarks">Order Remarks</label>
          <input type="text" class="form-control" id="InputRemarks" aria-describedby="nameHelp" placeholder="Enter Order remarks" value={remarks}
            onChange={(e) => setRemarks(e.target.value)} />
        </div>
        <div class="form-group mb-3">
          <label for="InputQuantity">Quantity</label>
          <select class="form-control" id="InputQuantity" value={quantity}
            onChange={(e) => {
                setQuantity(e.target.value)
                setTotal(quantity * 1)}}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        <ToastContainer autoClose={4000}/>
        </div>             
    )
}
export default EditOrder;