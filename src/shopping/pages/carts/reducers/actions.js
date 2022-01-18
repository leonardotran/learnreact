
export const START_ADD_CART = Symbol('START_ADD_CART');
export const startAddToCart = (start) => ({
    type: START_ADD_CART,
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