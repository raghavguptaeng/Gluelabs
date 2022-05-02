import {createStore} from 'redux';
import eggReducer from './eggs/eggReducer'; 
const store = createStore(eggReducer);
export default store;