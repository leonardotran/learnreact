import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/index';
import {helper} from '../helpers/common';
import { apiWeather } from '../services/api';
import { SEARCH_REQUEST } from '../actions/types';

// Luon luon su sung generator function cho REDUX SAGA. KO SU DUNG ARROW
// working + watching: thuc thi va theo doi actions. 

//working

function* getDataWeatherFromApi({payload}) {
    // console.log(payload);
    try {
        //tiep nhan action: (requestSearch) tu phia thao tac nguoi dung - tra ve cac action khac

        // bat dau tim kiem - dispatch action cua saga vao store
        yield put(actions.startWeather(true));
        // bao hieu dang di lay data tu api
        yield put(actions.loadingGetDataWeather(true));
        // call data
        const dataWeathers = yield call(apiWeather.getDataWeatherCity, payload.city, payload.lang)
        if(helper.isEmptyObject(dataWeathers)) {
            yield put(actions.getDataWeatherFail({
                code: 404,
                message: 'Not Found Data'
            }))
        } else {
            yield put(actions.getDataWeatherSuccess(dataWeathers))
        }
    } catch(err) {
        yield put(actions.getDataWeatherFail({
            code: 500,
            message: 'err'
        }))
    } finally {
            //ket thuc call API
        yield put(actions.finishGetDataWeather(true));
    }
}


// watching 
export function* watchingGetDataWeatherFromApi() {
    yield takeLatest(SEARCH_REQUEST, getDataWeatherFromApi);

}