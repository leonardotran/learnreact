import { combineReducers } from "redux";
import { homeReducer } from "../pages/home/reducers/home";
import { cartReducer } from "../pages/carts/reducers/cart";

const rootReducer = combineReducers({
    homeReducer,
    cartReducer
});

export default rootReducer;