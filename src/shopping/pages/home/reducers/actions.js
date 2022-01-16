export const REQUEST_DATA_PRODUCTIONS = Symbol('REQUEST_DATA_PRODUCTIONS');
export const getDataProducts = () => ({
    type: REQUEST_DATA_PRODUCTIONS
});

// sage

export const LOADING_GET_DATA = Symbol('LOADING_GET_DATA');
export const loadingGetdataProduction = (loading) => ({
    type: LOADING_GET_DATA,
    loading: loading
});

export const GET_DATA_PRODUCT_SUCCESS = Symbol('GET_DATA_PRODUCT_SUCCESS');
export const getDataProductSuccess = (data) => ({
    type: GET_DATA_PRODUCT_SUCCESS,
    data: data
});

export const GET_DATA_PRODUCT_FAIL = Symbol('GET_DATA_PRODUCT_FAIL');
export const getDataProductFail = (error) => ({
    type: GET_DATA_PRODUCT_FAIL,
    error
});