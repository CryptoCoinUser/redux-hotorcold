import 'isomorphic-fetch';
/* hot || cold as in https://thinkful-ed.github.io/hot-or-cold-demo/# */

// start new game (after correct or in the middle of guessing)
export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
    type: START_NEW_GAME,
    the_number:  Math.floor((Math.random() * (10 - 1)) + 1)
});

// save guess in history 
export const PROCESS_GUESS = 'PROCESS_GUESS';
export const processGuess = guess => ({
    type: PROCESS_GUESS,
    guess
});

// give feedback to user (correct, hot, warm, cold...)
export const GIVE_FEEDBACK = 'GIVE_FEEDBACK';
export const giveFeedback = guess => ({
    type: GIVE_FEEDBACK,
    guess
});

export const REPEAT_NUMBER_ERROR = 'REPEAT_NUMBER_ERROR';
export const repeatNumberError = repeatNumberFlag => ({
    type: REPEAT_NUMBER_ERROR,
    repeatNumberFlag
});


export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = (fewestGuesses) => ({
    type: FETCH_FEWEST_GUESSES_SUCCESS,
    fewestGuesses
});

export const FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
export const fetchFewestGuessesError = (error) => ({
    type: FETCH_FEWEST_GUESSES_ERROR,
    error
});

export const saveFewestGuesses = (numberOfGuesses) => dispatch => {
    const url = '/fewestGuesses';
    return fetch(url, {
    	method: 'POST',
    	body: JSON.stringify({numberOfGuesses}),
    	headers: {
		    "Content-Type": "application/json"
		  }
    	}

		)
    .then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data => {
        return dispatch(fetchFewestGuessesSuccess(data))
    })
    // .catch(error =>
    //     dispatch(fetchFewestGuessesError(error))
    // );

};

export const fetchFewestGuesses = () => dispatch => {
    const url = '/fewestGuesses';
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data => {
        return dispatch(fetchFewestGuessesSuccess(data))
    })
    .catch(error =>
        dispatch(fetchFewestGuessesError(error))
    );
};