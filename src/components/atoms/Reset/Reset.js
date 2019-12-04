import React from 'react';
import "./Reset.css";

export const Reset = ({onReset}) => {
    return (
        <button onClick={(e) => onReset(e)} className="reset btn">
            Reset
        </button>
    )
}
