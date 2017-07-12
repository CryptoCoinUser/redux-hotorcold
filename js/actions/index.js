/* draft for hot || cold as in https://thinkful-ed.github.io/hot-or-cold-demo/# */

// start new game (after correct or in the middle of guessing)
export const START_NEW_GAME = 'START_NEW_GAME';
export const giveFeedback = () => ({
    type: START_NEW_GAME
});

// generate random number (the number)
// export const GENERATE_THE_NUMBER = 'GENERATE_THE_NUMBER';
// export const generateTheNumber = () => ({
//     type: GENERATE_THE_NUMBER
// });

// submit user guess from form
// export const SUBMIT_USER_GUESS = 'SUBMIT_USER_GUESS';
// export const submitUserGuess = guess => ({
//     type: SUBMIT_USER_GUESS,
//     guess
// });

// save guess in history array (optional)
export const SAVE_GUESS = 'SAVE_GUESS';
export const saveGuess = guess => ({
    type: SAVE_GUESS,
    guess
});


// compare guess with the_number (return difference)
// export const COMPARE_GUESS_TO_THE_NUMBER = 'COMPARE_GUESS_TO_THE_NUMBER';
// export const compareGuessToTheNumber = (guess, the_number) => ({
//     type: COMPARE_GUESS_TO_THE_NUMBER,
//     guess,
//     the_number
// });

// give feedback to user (correct, hot, warm, cold...)
export const GIVE_FEEDBACK = 'GIVE_FEEDBACK';
export const giveFeedback = (guess, the_number) => ({
    type: GIVE_FEEDBACK,
    guess,
    the_number
});

