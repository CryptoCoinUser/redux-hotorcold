import * as actions from '../actions/index';

const initialHotOrColdState = { 
    the_number:null,
    correct: false,
    readyForNextGuess: true, // should be false while giving feedback on last guess
    guesses: [],
    min: 1,
    max: 10    
};

export const hotOrColdReducer = (state=initialHotOrColdState, action) => {
    if (action.type === actions.START_NEW_GAME) {
        var randomInteger = Math.floor(Math.random() * (state.max - state.min + 1));
        const newGameState = Object.assign(state, {the_number: randomInteger});
        return newGameState;
    }
    else if (action.type === actions.SAVE_GUESS) {
        console.log('todo: SAVE_GUESS')
    }
    else if (action.type === actions.GIVE_FEEDBACK) {
        console.log('todo: GIVE_FEEDBACK')
    }

    return state;
};