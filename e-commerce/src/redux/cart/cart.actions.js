import CartActionsTypes from "./cart.types";
import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionsTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItemFromCart = item => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});