import * as productService from "../services/product";

export const RESET_PRODUCTS = "RESET_PRODUCTS";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_PENDING = "FETCH_PRODUCTS_PENDING";
export const FETCH_PRODUCTS_REJECTED = "FETCH_PRODUCTS_REJECTED";
export const FETCH_PRODUCTS_FULFILLED = "FETCH_PRODUCTS_FULFILLED";

// pending , rejected , fulfilled

export default function fetchProducts(params) {
  const { pageNumber: page, searchQuery: product_name } = params;

  return async function (dispatch) {
    dispatch(fetchProductsPending());

    try {
      const data = await productService.fetchProducts({ page, product_name });
      console.log("ptdatra",data);

      dispatch(fetchProductsFulfilled(data));
    } catch (err) {
      dispatch(fetchProductsRejected(err));
    }
  };
}

function fetchProductsFulfilled(products) {
  return {
    type: FETCH_PRODUCTS_FULFILLED,
    payload: products,
  };
}

function fetchProductsRejected(err) {
  return {
    type: FETCH_PRODUCTS_REJECTED,
    payload: err,
  };
}

function fetchProductsPending() {
  return {
    type: FETCH_PRODUCTS_PENDING,
  };
}

export function resetProducts() {
  return {
    type: RESET_PRODUCTS,
  };
}
