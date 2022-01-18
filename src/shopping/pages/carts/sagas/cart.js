import {call, put , takeLatest} from 'redux-saga/effects';
import * as action from '../reducers/actions';
import {apiShopping} from '../../../services/api';
import {ADD_PRODUCT_TO_CART} from '../../home/reducers/actions';
function* cartSaga({id}) {
    try {
        yield put(action.startAddToCart(true));
        const data = yield call(apiShopping.getAllDataProductsById,id);
        yield put(action.addToCartSuccess(id,data));
    } catch(e) {
        yield put(action.addToCartFail(e));
    } finally {
        yield put(action.startAddToCart(false));
    }
}

export function* watchCartSaga() {
    yield takeLatest(ADD_PRODUCT_TO_CART, cartSaga);
}

