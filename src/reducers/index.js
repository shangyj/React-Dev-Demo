import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';

import reducersGenerate from './reducersGenerate';

import {
  ORDER
} from './../constants/actionTypes';
import initialState from './initialState';

const orders = reducersGenerate(ORDER, initialState.orders);

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  orders
});

export default rootReducer;
