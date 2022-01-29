import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { homeReducer } from "../pages/home/reducers/home";
import { cartReducer } from "../pages/carts/reducers/cart";

const configPersistCart = {
    key: 'cartReducer',
    storage: storage,
    whitelist: ['dataCart', 'totalMoney', 'totalItems']

}

const rootReducer = combineReducers({
    homeReducer,
    cartReducer: persistReducer(configPersistCart, cartReducer)
});

export default rootReducer;