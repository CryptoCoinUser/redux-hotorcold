require('babel-polyfill');


import * as actions from './actions/index';
import hotOrColdReducer from './reducers/index';

console.log(actions);

hotOrColdReducer();
//hotOrColdReducer(actions.startNewGame;