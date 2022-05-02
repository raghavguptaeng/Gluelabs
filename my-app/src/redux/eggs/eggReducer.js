import buyEggs from "./eggsAction";
const initEggState = {
    eggs:100,
}

const eggReducer = (state = initEggState, action) => {
    switch(action.type){
        case buyEggs:
            return {
                ...state,
                eggs:state.eggs-1,
            };
        default:return state;
    }
}

export default eggReducer;