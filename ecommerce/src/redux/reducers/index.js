import { combineReducers } from "redux";
import { productsReducer } from "./productsReducers";

const reducers = combineReducers({
    products: productsReducer,
});

export default reducers;