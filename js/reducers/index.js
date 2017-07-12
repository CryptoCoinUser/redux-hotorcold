import * as actions from '../actions/index';

function intBetweenAB(A, B){
    return Math.floor(Math.random() * (B - A)) + 1,
}

const initialHotOrColdState = { 
    the_number: intBetween(1, 10),
    correct: false,
    readyForNextGuess: true, // should be false while giving feedback on last guess
    guesses: []  
};

export const hotOrColdReducer = (state=initialHotOrColdState, action) => {
    console.log(state);    

    if (action.type === actions.START_NEW_GAME) {
        return state;
    }
    else if (action.type === actions.SAVE_GUESS) {
        console.log('todo: SAVE_GUESS')
    }
    else if (action.type === actions.GIVE_FEEDBACK) {
        console.log('todo: GIVE_FEEDBACK')
    }

    return state;
};


