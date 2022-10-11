import { combineReducers } from "redux";

import handleCart from "./handleCart";
import productReducer from "./products";
import orderReducer from "./orders";

const rootReducers = combineReducers ({
    products: productReducer,
    orders:orderReducer,
    handleCart: handleCart,
})

export default rootReducers;