import {
    FETCH_ORDERS_FULFILLED,
    FETCH_ORDERS_PENDING,
    FETCH_ORDERS_REJECTED,
    RESET_ORDERS,
  } from "../../actions/orders";
  
  const INITIAL_STATE = {
    list: [],
    isLoading: false,
    isNoMore: false,
  };
  
  export default function fetchOrders(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_ORDERS_PENDING:
        return { ...state, isLoading: true };
  
      case FETCH_ORDERS_FULFILLED:
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
  
      case FETCH_ORDERS_REJECTED:
        return { ...state, isLoading: false };
  
      case RESET_ORDERS:
        return INITIAL_STATE;
  
      default:
        return state;
    }
  }
  