import React, { useState, useEffect } from 'react';
import AuthService from "../services/auth-service";
import { useNavigate } from "react-router-dom";

// For adding order
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchProducts, { resetProducts } from "../actions/products";
import fetchOrders, { resetOrders } from "../actions/orders";

const Myorders = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetOrders({}))
    dispatch(fetchOrders({}));
  }, []);

    const orders = useSelector((store) => store.orders?.list);

    useEffect(() => {
      dispatch(resetProducts({}))
      dispatch(fetchProducts({pageNumber,searchQuery }))
    }, []);

    const products = useSelector((store) => store.products?.list);
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState("");
    console.log("currenttt",currentUser);
 


    // useEffect(() => {
      
    // }, []);

    console.log("pt",products);
    console.log("ptfdd",orders);
  
    useEffect(() => {
      const user = AuthService.getCurrentUser();
  
      if (user) {
        setCurrentUser(user);
      }
    }, []);



    const ShowProduct = () => {
      const filter1= Object.values(orders)?.filter((x) =>  x.customerId === 2);
      console.log("fiiii",filter1);
        return (
          <>
          {
          filter1.map((order) => {
            console.log("orderrr",order);
            const product =Object.values(products)?.find((x) =>  x.id === order.productId);
            console.log("whatt",product);
              return (
          <div className="" key={product.id}>
                    <div className='product1-container'> 
                      <div className="product1-img-div clearfix">
                          <img className="cart-img" src={product.images} alt={product.productName}/>
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
                      </div>
                  </div>
          </div>
              )
          })
          }
          </>
        )
    }

    return (<>
            <div className="container">
                <div className="container">
                    { 
                    <><ShowProduct />
                    </>
                  }
                </div>
                <ToastContainer autoClose={4000}/>
            </div>
        </>
    );
}

export default Myorders;