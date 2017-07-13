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
       

    if (action.type === actions.START_NEW_GAME) {
        console.log('start new game');
        return initialHotOrColdState;
    }
    else if (action.type === actions.PROCESS_GUESS) {
        return {
                ...state,
                guesses: [...state.guesses, action.guess]
            }
    }
    // action that updates the correct state 

    else if (action.type === actions.GIVE_FEEDBACK) {

        const diff = Math.abs(state.the_number - action.guess);
        console.log('reducers/index diff is ' + diff);
        let newFeedback;

        if(diff == 0){ 
            newFeedback = 'You guessed it!';
            state = {
                ...state, 
                correct: true
            };
        }else if(diff > 0 && diff <= 3){
            newFeedback = 'Hot!';
        }else if(diff > 3 && diff <= 6){
            newFeedback = 'Warm!';
        }else if(diff > 6){
            newFeedback = 'Cold!';
        } else{
            newFeedback = 'Error in reducers/index.js: switch statement did not match any case'
        }
        return  {
                    ...state, 
                    feedback: newFeedback
                };

    }

    return state;
};
