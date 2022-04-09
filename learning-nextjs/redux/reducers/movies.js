import { defaultConfiguration } from 'express/lib/application';
import { type } from 'express/lib/response';
import * as types from '../actions/movies';

const initDefaultState = {
    loading: false,
    data: {},
    error: null
}

export const movieReducer = (state = initDefaultState, action) => {
    switch(action.type) {
        case type.START_SEARCH_MOVIE:
            return {
                ...state,
                ...{loading: action.start}
            }
        case type.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                ...{data.action.movies, error: null}
            }
        case type.SEARCH_MOVIES_FAIL:
            return {
                ...state,
                ...{error: action.err}
            }
        default:
            return state;
    }
}