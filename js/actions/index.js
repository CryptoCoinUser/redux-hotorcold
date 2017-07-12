/* draft for hot || cold as in https://thinkful-ed.github.io/hot-or-cold-demo/# */

// start new game (after correct or in the middle of guessing)
export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
    type: START_NEW_GAME
});

// save guess in history 
export const PROCESS_GUESS = 'PROCESS_GUESS';
export const processGuess = guess => ({
    type: PROCESS_GUESS,
    guess
});

// give feedback to user (correct, hot, warm, cold...)
export const GIVE_FEEDBACK = 'GIVE_FEEDBACK';
export const giveFeedback = (guess) => ({
    type: GIVE_FEEDBACK,
    guess
});

