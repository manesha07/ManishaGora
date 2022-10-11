import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {delCart} from '../redux/action/index';


const Cart = () => {
    const store = useSelector((store) => store.handleCart); 
    console.log("estore",store);
    const dispatch =useDispatch();

    const handleClose = (item) => {
        dispatch(delCart(item))
    }
    const CartItems = (cartItem) => {
        console.log("citem",cartItem);
        return (
            cartItem.value.map((cart) => {
                return (
            <div className="" key={cart.id}>
                                    <div className='product1-container'> 
                        <div className="product1-img-div clearfix">
                            <img className="cart-img" src={cart.images} alt={cart.productName}/>
                        </div>
                        <div className="product1-content clearfix">
                            <h4 className="large-content">{cart.category}</h4>
                            <h1 className="large-content">{cart.productName} </h1>
                            <p className="large-content"> Rating {cart.rating}
                                <i className="fa fa-star"></i>
                            </p>
                            <h3 className="small-content">
                                $ {cart.price}
                            </h3>
                             <button className="product1-btn product1-btn1" onClick={()=>handleClose(cart)} > Remove </button>
                        </div>
                    </div>
            </div>
                )
            })
        )
    }


    return(
        <div>
            <CartItems value={store} />
        </div>
    );
}
export default Cart;