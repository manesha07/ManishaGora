export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export function addToFavorite(product) {
  return {
    type: ADD_TO_FAVORITE,
    payload: product,
  };
}

export function removeFromFavorite(product) {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: product,
  };
}
