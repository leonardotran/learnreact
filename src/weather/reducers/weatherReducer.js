import * as types from '../actions/types';

const initDefaultState = {
    start: false,
    loading: false,
    weathers: {},
    error: {},
    finish: true
}

export const weatherReducer = (state = initDefaultState, action) => {
    switch(action.type) {
        case types.START_SEARCH_WEATHER:
            return {
                ...state,
                ...{start: action.payload.start}
            }
        case types.LOADING_GET_DATA:
            return {
                ...state,
                ...{loading: action.payload.start}
            }
        case types.SEARCH_WEATHER_SUCCESS:
            return {
                ...state,
                ...{weathers: action.payload.data, error: {}}
            }
        case types.SEARCH_WEATHER_FAIL:
            return {
                ...state,
                ...{error: action.payload.error}
            }  
        case types.FINISH_SEARCH_WEATHER:
            return {
                ...state,
                ...{loading: false, start: false, finish: action.payload.finish}
            }  
        default:
            return state
    }
}