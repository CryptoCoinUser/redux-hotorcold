import * as actions from '../actions/index';

const initialHotOrColdState = { 
    the_number: 0,
    correct: false,
    readyForNextGuess: true, // should be false while giving feedback on last guess
    guesses: [],
    feedback: 'Make Your First Guess',
    repeatNumberError: false,
    fewestGuesses: null
};

export const hotOrColdReducer = (state=initialHotOrColdState, action) => {
       

    if (action.type === actions.START_NEW_GAME) {
        console.log("the_number is " + action.the_number);
        return {
            ...initialHotOrColdState, 
             fewestGuesses: state.fewestGuesses, 
            the_number: action.the_number
        }
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
    else if (action.type === actions.REPEAT_NUMBER_ERROR){
        return  {
            ...state, 
            repeatNumberError: action.repeatNumberFlag
        };
    }


    else if(action.type === actions.FETCH_FEWEST_GUESSES_SUCCESS){
        return {
            ...state,
            fewestGuesses: action.fewestGuesses
        }
    }

    else if(action.type === actions.FETCH_FEWEST_GUESSES_ERROR){
        
    }

    return state;
};
