import React from 'react';
import "./Letter.css";

export const Letter = ({value, isFound}) => {

    let char = '_';
    
    if ( isFound ) {
        char = value;
    }
    return (
        <p className="letter">
            { char }
        </p>
    )
}
