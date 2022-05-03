import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
    selectedProduct: null,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
}