import {call, put, takeEvery} from 'redux-saga/effects';
import {
    loadingGetdataProduction,
    getDataProductSuccess,
    getDataProductFail,
    REQUEST_DATA_PRODUCTIONS
} from '../reducers/actions'

import {apiShopping} from '../../../services/api';

function* homeSaga() {
    try {
        yield put(loadingGetdataProduction(true));
        const data = yield call(apiShopping.getAllDataProducts);
        yield put(getDataProductSuccess(data));
    } catch (e) {
        yield put(getDataProductFail(e));
    } finally {
        yield put(loadingGetdataProduction(false));
    }
}

export function* watchHomeSaga() {
    yield takeEvery(REQUEST_DATA_PRODUCTIONS, homeSaga);
}