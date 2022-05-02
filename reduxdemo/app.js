const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;
const axios = require('axios');

const request = 'request';
const success = 'success';
const faliure = 'failure';
const url = 'https://jsonplaceholder.typicode.com/users';

const initialState = {
    loading:false,
    users:[],
    error:''
}

const fetchRequest = () => {
    return {
        type:request,
    };
}
const fetchSuccess = (users) => {
    return {
        type:success,
        payload:users,
    };
}
const fetchFailure = (error) => {
    return {
        type:faliure,
        payload:error,
    };
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case request:
             return {
            ...state,
            loading:true,
        }
        case success:
            return {    
                ...state,
                loading:false,
                users:action.payload,
            }
        case faliure:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default: return state;
    };
}

const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get(url).then(res => {
            const data = res.data;
            dispatch(fetchSuccess(data));
        }).catch(err => {
            dispatch(fetchFailure(err));
        })
    }
}
const store = createStore(reducer,applyMiddleware(thunk));
store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchData());
