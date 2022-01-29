export const REQUEST_GET_DETAILS_DATA = Symbol('REQUEST_GET_DETAILS_DATA');
export const requestGetDataProductById = (id) => ({
    type: REQUEST_GET_DETAILS_DATA,
    id
});

//action cua saga

export const LOADING_GET_DETAIL = Symbol('LOADING_GET_DETAIL');
export const loadingGetDetailProduct = (loading) => ({
    type: LOADING_GET_DETAIL,
    loading
})

export const GET_DETAIL_PRODUCT_SUCCESS = Symbol('GET_DETAIL_SUCCESS');
export const getDataDetailProductSucess = (data) => ({
    type: GET_DETAIL_PRODUCT_SUCCESS,
    data
});

export const GET_DETAIL_PRODUCT_FAIL = Symbol('GET_DETAIL_PRODUCT_FAIL');
export const getDetailProductFail = (error) => ({
    type: GET_DETAIL_PRODUCT_FAIL,
    error
})