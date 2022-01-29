import * as types from './action';

const defaultState = {
    loading:false,
    details: {},
    error: null
}

export const detailReducer = (state=defaultState, action) => {
    switch(action.type) {
        case types.LOADING_GET_DETAIL:
            return {
                ...state,
                ...{loading: action.loading}
            }
        case types.GET_DETAIL_PRODUCT_SUCCESS:
            return {
                ...state,
                ...{
                    details: action.data,
                    error: null
                }
            }
        case types.GET_DETAIL_PRODUCT_FAIL:
            return {
                ...state,
                ...{
                    error: action.error
                }
            }
        default:
            return state;
    }
}