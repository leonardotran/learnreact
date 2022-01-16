import {
    LOADING_GET_DATA,
    GET_DATA_PRODUCT_FAIL,
    GET_DATA_PRODUCT_SUCCESS
} from './actions';

const initDefaultState = {
    loading: false,
    listProducts: [],
    error: null
}

export const homeReducer = (state=initDefaultState, action) => {
    switch(action.type) {
        case LOADING_GET_DATA:
            return {
                ...state,
                ...{loading: action.loading}
            }
        case GET_DATA_PRODUCT_SUCCESS:
            return {
                ...state,
                ...{listProducts: action.data, error: null}
            }
        case GET_DATA_PRODUCT_FAIL:
             return {
                 ...state,
                 ...{error: action.error}
             }   
        default:
            return state
    }

}