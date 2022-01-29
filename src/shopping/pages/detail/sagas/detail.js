import { call,put,takeEvery } from "redux-saga/effects";
import * as actions from '../reducers/action';
import { apiShopping } from "../../../services/api";
import { helpers } from "../../../helpers/common";
import { func } from "prop-types";

function* detailSaga({id}) {
    try {
        yield put(actions.loadingGetDetailProduct(true));
        const data = yield call(apiShopping.getAllDataProductsById, parseInt(id));
        if(!helpers.isEmptyObject(data) && data !== undefined){
            yield put(actions.getDataDetailProductSucess(data));

        } else {
            yield put(actions.getDetailProductFail({
                code: 404,
                message: 'Not Found Data'
            }));
        }
    } catch(e) {
        yield put(actions.getDetailProductFail({
            code: 500,
            message: e
        }));
    } finally {
        yield put(actions.loadingGetDetailProduct(false))
    }
}

export function* watchDetailSaga() {
    yield takeEvery(actions.REQUEST_GET_DETAILS_DATA, detailSaga);
}