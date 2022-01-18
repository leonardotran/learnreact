import {call, all} from 'redux-saga/effects';
import {watchHomeSaga} from '../pages/home/sagas/home';
import {watchCartSaga} from '../pages/carts/sagas/cart'

export default function* rootSaga() {
    yield all([
        call(watchHomeSaga),
        call(watchCartSaga)
    ]);
};
