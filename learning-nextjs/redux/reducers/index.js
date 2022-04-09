import { combineReducers } from "redux";
import { movieReducer } from "./movies";

const rootReducer = combineReducers({
    movie: movieReducer
});

export default rootReducer;