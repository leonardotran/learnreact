
export const START_ADD_CART = Symbol('START_ADD_CART');
export const startAddToCart = (id, start) => ({
    type: START_ADD_CART,
    id,
    start
});

export const ADD_CART_SUCCESS = Symbol('ADD_CART_SUCCESS');
export const addToCartSuccess = (id, data) => ({
    type: ADD_CART_SUCCESS,
    id,
    data
});

export const ADD_CART_FAIL = Symbol('ADD_CART_FAIL');
export const addToCartFail = (error) => ({
    type: ADD_CART_FAIL,
    error
});

export const REMOVE_ITEM_CART = Symbol('REMOVE_ITEM_CART');
export const removeItemCartById = (rowId) => ({
    type: REMOVE_ITEM_CART,
    rowId
});

export const CHANGE_QUANTITY_ITEM_CART = Symbol('CHANGE_QUANTITY_ITEM_CART');
export const changeQuantity = (qty, rowId) => ({
    type: CHANGE_QUANTITY_ITEM_CART,
    qty,
    rowId
})