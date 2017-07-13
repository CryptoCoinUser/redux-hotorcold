import React from 'react';
import {connect} from 'react-redux';

import Guess from './guess';
import * as actions from '../actions/index';

export class GuessForm extends React.Component {
    constructor(props) {
        super(props);
        this.startNewGame = this.startNewGame.bind(this);
        this.processGuess = this.processGuess.bind(this);

    }

    startNewGame(){
        this.props.dispatch(actions.startNewGame());
        this.guessInput.value = '';
    }

    processGuess() {
        const guessed_number = this.guessInput.value;

        if (guessed_number === ''){
          return  
        } 
        
        this.props.dispatch(actions.processGuess(guessed_number));

        this.giveFeedback(guessed_number);

        this.guessInput.value = '';
    }

    giveFeedback(props) {
        console.log('guess-form giveFeedback');
        const guessed_number = this.guessInput.value;
        const the_number = this.props.the_number;
        this.props.dispatch(actions.giveFeedback(guessed_number));
    }

    render() {
        // console.log('this.props');
        // console.log(this.props);
        // console.log('this.props');
        console.log("GUESS FORM", this.props);
        const guesses = this.props.guesses.map((repository, i) => {
            const lastGuess = this.props.guesses[i];
            return <Guess guessed_number={lastGuess} key={i} index={i} />;
        });

        return (
            <div className="guess-list">
                <h2 className="feedback">{this.props.feedback}</h2>
                <form>
                    { this.props.correct ? 
                    <p><button type="button" onClick={this.startNewGame}>
                        New Game
                    </button></p>
                    : <p><input type="number" ref={ref => this.guessInput = ref}  />
                        <button type="button" onClick={this.processGuess}>
                        Submit Guess
                    </button></p>
                    }
    
                </form>
                <div className="oldGuesses">
                    <p>Your guesses:</p>
                    {guesses}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    guesses: state.guesses,
    the_number: state.the_number,
    feedback: state.feedback,
    correct: state.correct
});

export default connect(mapStateToProps)(GuessForm);