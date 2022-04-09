import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/movies';
import {api} from '../services/movies';

function* searchMovieSaga({keyword}){
    try {
        yield put(actions.startSearch(true));
        const data = yield call(api.searchMovies, keyword);
        yield put(actions.searchSuccess(data));
    } catch(error){
        yield put(actions.searchFail(false));
    } finally {
        yield put(actions.startSearch(false));
    }
}

export function* watchMovieSage(){
    yield takeLatest(actions.SEARCH_MOVIES, searchMovieSaga);
}