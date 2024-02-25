import React, { useState,useEffect} from 'react';
import {useLocation } from "react-router-dom";
import * as productService from "../../services/product"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import fetchProducts, { resetProducts } from "../../actions/products";

const EditProduct = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const {state} = useLocation();
  const { id } = state;

  console.log(id);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState("");
    const [removeimages, setRemoveimages] = useState("");

    useEffect(() => {
      dispatch(fetchProducts({pageNumber,searchQuery }));
    }, []);

    const products = useSelector((store) => store.products.list);
    console.log("pooo",products);
    useEffect(() => {
        const product = products.find((x) =>  x.id === id);
        console.log("ehattt",product);
        setName(product.productName);
        setPrice(product.price);
        setCategory(product.category);
        setRating(product.rating);
        setStock(product.inStock);
        setDescription(product.description);
        setImages(product.images);
        setRemoveimages(product.images);
        console.log('fetched', product);
        console.log('fetched remove images', removeimages);

    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const EditData = {
        product_name: name,
        price: +price,
        category:category,
        rating: +rating,
        in_stock:  +stock,
        description: description,
        images: {added:images,removed:removeimages}
      }
      
        await productService.EditProduct(EditData,id).then(
          (response) => {
            const res = response.details;
            if(!!response.details)
            { 
              toast.error(res.toString(), {
                position: toast.POSITION.TOP_CENTER
              });
            }
            else{
              console.log("Added Product successfully", response);
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
        <div className="form">
          {console.log("hiiii")}
        <h1 className="heading form-head">Update Product</h1>
        <form onSubmit={handleSubmit}>
            <div class="form_group">
                <label for="InputName">Product Name</label>
                <input type="text" class="form_control" id="InputName" aria-describedby="nameHelp" placeholder="Enter Product Name"  value={name}
          onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="form_group">
                <label for="InputDescription">Description</label>
                <input type="text" class="form_control" id="InputDescription" placeholder="Description"  value={description}
          onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div class="form_group">
                <label for="InputPrice">Price</label>
                <input type="number" class="form_control" id="InputPrice" placeholder="Price"  value={price}
          onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div class="form_group">
                <label for="InputCategory">Category</label>
                <select class="form_control" id="InputCategory"  value={category}
          onChange={(e) => setCategory(e.target.value)}>
                <option>men's clothing</option>
                <option>electronics</option>
                <option>women's clothing</option>
                <option>jewelery</option>
                </select>
            </div>
            <div class="form_group">
                <label for="InputRating">Rating</label>
                <select class="form_control" id="InputRating"   value={rating}
          onChange={(e) => setRating(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div class="form_group">
                <label for="InputStock">Stock</label>
                <input type="number" class="form_control" id="InputStock"   value={stock}
          onChange={(e) => setStock(e.target.value)}/>
            </div>
            <div class="form_group">
                <label for="InputImages">Images</label>
                <input type="text" class="form_control" id="InputImages" placeholder="https:......"  value={images}
          onChange={(e) => setImages(e.target.value)}/>
            </div>
            <div class="form-check mb-2">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="form_btn">Submit</button>
        </form>
        <ToastContainer autoClose={4000}/>
        </div>             
    )
}
export default EditProduct;