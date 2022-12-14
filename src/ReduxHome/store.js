import { legacy_createStore, combineReducers } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
// import { ecommerceReducer } from '../ReduxHome/ecommerceReducer';
import { ecommerceReducer } from './ecommerceReducer';

export const myStore = () => {
    const state = legacy_createStore(combineReducers({ ecommerceReducer }),
    composeWithDevTools()
    );
    return state;
};


// combineReducer { ecommerceReducer, secondReducer}