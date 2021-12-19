import { combineReducers } from "redux";
import {weatherReducer} from './weatherReducer';

const rootReducer = combineReducers({
    weatherStore: weatherReducer
});

export default rootReducer;
