import * as productService from "../../services/product";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchProducts, { resetProducts } from "../../actions/products";

const GetProducts = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    dispatch(resetProducts({ }));
    dispatch(fetchProducts({pageNumber,searchQuery }));
  }, []);
  const product = useSelector((store) => store.products.list);
  const navigate = useNavigate();

  const DeleteProduct = async(id) => {
    await productService.deleteProduct(id).then(
      (response) => {
        const res = response;

        // navigate("/dashboard");
        if(!!response.details)
        { 
          toast.error(res.toString(), {
            position: toast.POSITION.TOP_CENTER
          });
        }
        else{
          console.log("DeletedProduct successfully", response);
          toast.success("Deleted Succesfully", {
            position: toast.POSITION.TOP_CENTER
          },{
            icon: "🚀"
          });
          window.location.reload(false);
          dispatch(resetProducts({ }));
          dispatch(fetchProducts({pageNumber,searchQuery }));

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
          // navigate("/home");
        // window.location.reload();

  return (
    <div style={{"overflow-x": "auto"}}>
      <button type="text" class="form_btn"> <a href="/adminaddproduct"> Add </a></button>
      <table class="table">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Description</th>
            <th scope="col">Created At</th>
            <th scope="col">Category</th>
            <th scope="col">Rating</th>
            <th scope="col">Images</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
          {product && product.map((product) => {
     return(<>
         <tr>
      <td>{product.id}</td>
      <td>{product.productName}</td>
      <td>{product.price}</td>
      <td>{product.inStock}</td>
      <td>{product.description}</td>
      <td>{product.createdAt}</td>
      <td>{product.category}</td>
      <td>{product.rating}</td>
      <td><img src={product.images} style={{height:'40px',width:'40px'}} alt={product.productName} /></td>
      <td><span className="Click_text" onClick={()=>navigate("/admineditproduct",{state:{id:product.id}})} > Edit</span></td>
      <td><span className="Click_text" onClick={()=>DeleteProduct(product.id)}>Delete</span></td>
    </tr>
    </>)
  })}
      </table>
  </div>);
}
export default GetProducts;