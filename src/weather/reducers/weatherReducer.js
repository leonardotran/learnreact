import * as types from '../actions/types';

const initDefaultState = {
    start: false,
    loading: false,
    weathers: {},
    error: {},
    finish: true
}

const weatherReducer = (state = initDefaultState, action) => {
    switch(action.type) {
        types.START_SEARCH_WEATHER:
            return {
                ...state,
                ...{start: action.payload.start}
            }
        types.LOADING_GET_DATA:
            return {
                ...state,
                ...{start: false, loading: action.payload.start}
            }
        types.SEARCH_WEATHER_SUCCESS:
            return {
                ...state,
                ...{weathers: action.payload.data, error: {}}
            }
        types.SEARCH_WEATHER_FAIL:
            return {
                ...state,
                ...{error: action.payload.error}
            }  
        types.FINISH_SEARCH_WEATHER:
            return {
                ...state,
                ...{loading: false, finish: action.payload.finish}
            }  
        default:
            return state
    }
}