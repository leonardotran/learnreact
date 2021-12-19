import { call, all } from 'redux-saga/effects';
import { watchingGetDataWeatherFromApi } from './weatherSaga';

export default function* rootSaga() {
    yield all([
        call(watchingGetDataWeatherFromApi)
    ])
}