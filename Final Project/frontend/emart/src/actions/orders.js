import * as orderService from "../services/order";

export const RESET_ORDERS = "RESET_ORDERS";
export const FETCH_ORDERS = "FETCH_ORDERS";
export const FETCH_ORDERS_PENDING = "FETCH_ORDERS_PENDING";
export const FETCH_ORDERS_REJECTED = "FETCH_ORDERS_REJECTED";
export const FETCH_ORDERS_FULFILLED = "FETCH_ORDERS_FULFILLED";

// pending , rejected , fulfilled

export default function fetchOrders(params) {

  return async function (dispatch) {
    dispatch(fetchOrdersPending());

    try {
      const data = await orderService.fetchOrders();
      console.log("fidata",data);

      dispatch(fetchOrdersFulfilled(data));
    } catch (err) {
      dispatch(fetchOrdersRejected(err));
    }
  };
}

function fetchOrdersFulfilled(orders) {
  return {
    type: FETCH_ORDERS_FULFILLED,
    payload: orders,
  };
}

function fetchOrdersRejected(err) {
  return {
    type: FETCH_ORDERS_REJECTED,
    payload: err,
  };
}

function fetchOrdersPending() {
  return {
    type: FETCH_ORDERS_PENDING,
  };
}

export function resetOrders() {
  return {
    type: RESET_ORDERS,
  };
}
