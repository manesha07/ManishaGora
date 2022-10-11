import {
    FETCH_PRODUCTS_FULFILLED,
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_REJECTED,
    RESET_PRODUCTS,
  } from "../../actions/products";
  
  const INITIAL_STATE = {
    list: [],
    isLoading: false,
    isNoMore: false,
  };
  
  export default function fetchProducts(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_PRODUCTS_PENDING:
        return { ...state, isLoading: true };
  
      case FETCH_PRODUCTS_FULFILLED:
        return action.payload.length === 0
          ? {
              ...state,
              isNoMore: true,
              isLoading: false,
            }
          : {
              ...state,
              list: [...state.list, ...action.payload],
              isLoading: false,
            };
  
      case FETCH_PRODUCTS_REJECTED:
        return { ...state, isLoading: false };
  
      case RESET_PRODUCTS:
        return INITIAL_STATE;
  
      default:
        return state;
    }
  }
  