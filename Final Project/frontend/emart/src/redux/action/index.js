// For Adding Item to Cart
export const addCart = (product) => {
    console.log("action",product);
    return {
        type: "ADDITEM",
        payload : product
    }
}

// For Deleting Item to Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload : product
    }
}