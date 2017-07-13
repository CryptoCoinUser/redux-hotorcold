import React from 'react';
import {connect} from 'react-redux';


export function Guess(props){
    return (
        <span className="guess">
             {props.index > 0 ? ', ' : ''}{props.guessed_number}
        </span>
    ); 
}

export default connect()(Guess);