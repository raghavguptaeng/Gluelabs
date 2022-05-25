import {combineReducers} from 'redux';
import { dataReducer } from './dataReducers';

const reducers = combineReducers(
    {
        setData:dataReducer,
    }
);

export default reducers;