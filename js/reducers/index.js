import * as actions from '../actions/index';

export function intBetween(A, B){
    return Math.floor(Math.random() * (B - A)) + 1;
}

const initialHotOrColdState = { 
    the_number: intBetween(1, 10),
    correct: false,
    readyForNextGuess: true, // should be false while giving feedback on last guess
    guesses: [],
    feedback: 'Make Your First Guess'  
};

export const hotOrColdReducer = (state=initialHotOrColdState, action) => {
    console.log(state);    

    if (action.type === actions.START_NEW_GAME) {
        return state;
    }
    else if (action.type === actions.PROCESS_GUESS) {
        return Object.assign({}, state, state.guesses = [...state.guesses, action.guess])
    }
    else if (action.type === actions.GIVE_FEEDBACK) {
        const diff = Math.abs(state.the_number - action.guess);
        let newFeedback;
        switch(diff) {
            case 0: 
                newFeedback = 'You guessed it!';
                state = Object.assign({}, state, state.correct = true);
            case (diff > 0 && diff < 3):
                newFeedback = 'Hot!';
            case (diff > 3 && diff < 6):
                newFeedback = 'Warm!';
            default:
                newFeedback = 'Cold!';
        }

        return Object.assign({}, state, state.feedback = newFeedback);
    }

    return state;
};
