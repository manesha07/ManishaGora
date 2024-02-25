import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

import fetchProducts, { resetProducts } from "../actions/products";

const Products = () => {
    const dispatch = useDispatch();

    const products = useSelector((store) => store.products.list);
    const isLoading = useSelector((store) => store.products.isLoading);
    const isNoMore = useSelector((store) => store.products.isNoMore);
  
    console.log("sooooo",products);
  
    const inputRef = useRef();
    const [pageNumber, setPageNumber] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState(products);
  
    useEffect(() => {
      dispatch(fetchProducts({pageNumber,searchQuery }));
    }, []);
    
    useEffect(() => {
      setFilter(products);
      },[products]);
  
    function handleSearch() {
      dispatch(resetProducts());
      setSearchQuery(inputRef.current.value);
    }

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                <Skeleton  height={350}/>
                </div>  
                <div className="col-md-3">
                <Skeleton  height={350}/>
                </div> 
                <div className="col-md-3">
                <Skeleton  height={350}/>
                </div>        
                <div className="col-md-3">
                <Skeleton  height={350}/>
                </div>          
            </>
        )
    }

    const filterProduct = (cat) => {
        const filteredList = products.filter((x) =>  x.category === cat);
        setFilter(filteredList);
    }
   

    const ShowProducts = () => {
        return (
            <> 
                <div className="category">
                    <button className="category-btn small-content" onClick={()=>setFilter(products)}>All</button>
                    <button className="category-btn small-content" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="category-btn small-content" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="category-btn small-content" onClick={()=>filterProduct("jewelery")}>Jewellery</button>
                    <button className="category-btn small-content" onClick={()=>filterProduct("electronics")}>Electronics</button>
                    <input ref={inputRef} className="header__input" type="search" />
                    {/* <button className="category-search-btn" onClick={handleSearch}>Search</button> */}
                </div>
                <div className="card-container">
                {filter.map((product) => {
                    console.log("huh",product);
                    return (
                        <>
                                <div className="card" key={product.id}  >
                                <NavLink to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                                    <img src={product.images} className="card_img" alt={product.productName} />
                                        <div className="card_body">
                                            <h5 className="card_title">{product.productName.substring(0,12)}</h5>
                                            <p className="card_text">Rs.{product.price}</p>
                                            {/* <NavLink to={`/products/${product.id}`} className="btn btn-success">Buy Now</NavLink> */}
                                        </div>
                                </NavLink>
                                </div>
                        </>
                    )
                })}
         </div>
            </>
        )
    }

    return (
        <>
            <div className="container products">
                        <h1 className="heading products-head">Latest Products</h1>
                        <hr />
                <div className="products-body">  
                    {<ShowProducts />}
                </div>
            </div>
        </>
    );
}
export default Products;