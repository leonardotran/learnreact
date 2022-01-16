import { combineReducers } from "redux";
import { homeReducer } from "../pages/home/reducers/home";

const rootReducer = combineReducers({
    homeReducer
});

export default rootReducer;