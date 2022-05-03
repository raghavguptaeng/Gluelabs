import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./productsReducers";

const reducers = combineReducers({
    products: productsReducer,
    eachProduct: selectedProductReducer,
});

export default reducers;