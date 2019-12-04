import React from 'react';
import './Keyboard.css';
import { Reset } from '../../atoms/Reset/Reset';
import { Key } from '../../atoms/Key/Key';


export const Keyboard = ({foundLetters, onKeyClicked, onReset}) => {
    
    // Initialisation of keyboard
    const strLetters = "abcdefghijklmnopqrstuvwxyz";
    let letters = [];
    const letterArray = strLetters.split('');

    letterArray.forEach(l => 
        letters.push(
            <Key key={l} keyValue={l} isFound={foundLetters.includes(l)} onKeyClicked={ (e) => onKeyClicked(e)} />)
        );

    return (
        <div className="keyboard">
            <div className="keyboard__keys">
                { letters }
            </div>
            <div className="keyboard__buttons">
                <Reset onReset={(e) => onReset(e)}/>
            </div>
        </div>
    )
}
