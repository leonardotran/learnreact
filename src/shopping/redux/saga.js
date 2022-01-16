import {call, all} from 'redux-saga/effects';
import {watchHomeSaga} from '../pages/home/sagas/home';

export default fuction* rootSaga() {
    yield all([
        call(watchHomeSaga)
    ]);
};