import { data_set_action_type } from "../../Components/constants"

const initialState = {
    data: [],
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case data_set_action_type:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}
