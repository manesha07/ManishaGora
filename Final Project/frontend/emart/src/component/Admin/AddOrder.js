import React, { useState,useEffect } from 'react';
import * as OrderService from "../../services/order";
import * as productService from "../../services/product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddOrder = () => {
    const id = 46;
  const [remarks, setRemarks] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await productService.fetchProductsById(id);
      setPrice(product.price);
      console.log('fetched', product);
    };

    fetchProduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addData = {
      customer_id: +1,
      product_id:+1,
      order_remarks: remarks,
      quantity: +(quantity),
      total: +(quantity),
      status: "pending"
    }

    console.log("addthem",addData);

    try {
      await OrderService.AddOrder(addData).then(
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
            toast.success("Record Added Succesfully", {
              position: toast.POSITION.TOP_CENTER
            },{
              icon: "🚀"
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="heading">Add Order</h1>
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
                setTotal(quantity * price)}}>
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
export default AddOrder;