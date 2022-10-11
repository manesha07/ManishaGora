import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import * as productService from "../services/product";
import * as customerService from "../services/customer";
import Modal from "./Modal/Modal";
import AuthService from "../services/auth-service";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
// For adding order
import * as OrderService from "../services/order";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState(undefined);
  // console.log("pt",products);
  console.log("currenttt", currentUser);
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);
  // State to store count value
  const [count, setCount] = useState(1);
  const [remarks, setRemarks] = useState("");

  const navigate = useNavigate();



  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const product = await productService.fetchProductsById(id);
        setProduct(product);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setProduct(product);
  }, [product]);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  const decrementCount = () => {
    // Update state with incremented value
    setCount(count - 1);
  };

  const handleSubmit = async (e) => {
    const price = product.price;
    e.preventDefault();
    const addData = {
      customer_id: +currentUser.user.id,
      product_id: +id,
      order_remarks: remarks,
      quantity: +(count),
      total: +(count * price),
      status: "pending"
    }

    console.log("addthem", addData);

    try {
      await OrderService.AddOrder(addData).then(
        (response) => {
          const res = response.details;
          if (!!response.details) {
            toast.error(res.toString(), {
              position: toast.POSITION.TOP_CENTER
            });
          }
          else {
            console.log("Added Order successfully", response);
            toast.success("Record Added Succesfully", {
              position: toast.POSITION.TOP_CENTER
            }, {
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

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
        </div>
      </>
    )
  }

  const ShowProduct = () => {
    return (
      <div className='product1-container'>  {console.log("ppp1", product)}
        <div className="product1-img-div clearfix">
          <img className="product1-img" src={product.images} alt={product.productName} />
        </div>
        <div className="product1-content clearfix">
          <h4 className="large-content">{product.category}</h4>
          <h1 className="large-content">{product.productName} </h1>
          <p className="large-content"> Rating {product.rating}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="small-content">
            $ {product.price}
          </h3>
          <p className="small-content"> {product.description}</p>
          <button className="product1-btn product1-buy-btn" onClick={() => {
            if (currentUser) {
              setShow(true)
            }
            else {
              navigate("/customerlogin");
            }

          }} > Buy Now </button>
          <button className="product1-btn product1-btn1" onClick={() => addProduct(product)} > Add to cart </button>

          {/* <NavLink to={`/cart`} className="btn btn-light px-4 py-2 ms-2"> Go to cart </NavLink> */}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {
            <><ShowProduct />
              <Modal title="Checkout" onClose={() => setShow(false)} show={show}>
                <div className="modal-wrapper container">
                  {/* <h3 class="heading">Orders</h3> */}
                  <div className="modal-img">
                    <div className="modal-round-img">
                      <img className="rounded-circle" src={product.images} alt="..." />
                    </div>
                    <p className="large-content modal-content1">{product.productName}</p>
                    <button className="count_btn" onClick={decrementCount}>-</button>
                    <span className="small-content modal-content2">{count}</span>
                    <button className="count_btn" onClick={incrementCount}>+</button>
                  </div>
                  <hr />
                  <div className="container clearfix">
                    <div className="large-content left-total">Total</div>
                    <div className="small-content right-total">Rs.{count * product.price}</div>
                  </div>
                  <hr />
                  <form onSubmit={handleSubmit}>
                    <div class="form_group  mb-3">
                      <label for="InputRemarks">Order Remarks</label>
                      <input type="text" class="form_control" id="InputRemarks" aria-describedby="nameHelp" placeholder="Enter Order remarks" value={remarks}
                        onChange={(e) => setRemarks(e.target.value)} />
                    </div>
                    <button type="submit" class="form_btn"> Checkout</button>
                  </form>
                </div>

              </Modal>
            </>}
        </div>
      </div>
      <ToastContainer autoClose={4000} />
    </div>
  );
}

export default Product;