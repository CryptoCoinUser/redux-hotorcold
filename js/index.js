require('babel-polyfill');

import * as actions from './actions/index';

import hotOrColdReducer from './reducers/index';

import store from './store';

store.dispatch(actions.startNewGame());
console.log(store.getState()); 