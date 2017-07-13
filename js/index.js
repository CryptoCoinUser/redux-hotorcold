require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';

import GuessForm from './components/guess-form';
/*
import * as actions from './actions/index';

import hotOrColdReducer from './reducers/index';
store.dispatch(actions.startNewGame());
store.dispatch(actions.processGuess(1));
store.dispatch(actions.giveFeedback(1));
console.log(store.getState()); 
*/
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
            <GuessForm />
        </Provider>,
        document.getElementById('app')
    )
);