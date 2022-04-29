const redux = require('redux');
const createStore = redux.createStore;
const combimed = redux.combineReducers;
const BUY_EGGS = 'buy eggs';
const BUY_CHICKEN = 'buy chicken';
function buyEggs() {
  return {
    type:BUY_EGGS,
    info:'buying eggs'
  };
}

function buyChicken() {
  return {
    type:BUY_CHICKEN,
    info:'buying chicken'
  };
}

const eggInitState = {
    eggs:100,
};

const chickenInitState = {
  chicken:10,
}

const eggReducer = (state = eggInitState, action) => {
    switch (action.type) {
        case BUY_EGGS:
        return {
            ...state,
            eggs:state.eggs-1
        };
        default:
            return state;
    }
}

const chickenReducer = (state = chickenInitState,action) =>{
  switch(action.type){
    case BUY_CHICKEN:
      return {
          ...state,
          chicken:state.chicken-1
      };
    default:
      return state;
  }
}

const rootReducer = combimed({
  eggs:eggReducer,
  chicken:chickenReducer
})


// const store = createStore(reducer);
const store = createStore(rootReducer);
console.log(store.getState());
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(buyEggs());
store.dispatch(buyChicken());
store.dispatch(buyChicken());
unsubscribe();



