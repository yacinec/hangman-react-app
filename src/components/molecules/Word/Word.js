import React from 'react'
import './Word.css';

import { Tips } from '../../atoms/Tips/Tips';
import { Letter } from '../../atoms/Letter/Letter';

export const Word = ({tips, word, foundLetters}) => {
    
    const arrayLetters = [];
    
    word.split('').forEach(l => {
        arrayLetters.push(<Letter key={ Math.random() } value={l} isFound={foundLetters.includes(l)} />);
    });

    return (
        <div className="word">
            <div className="word__tips">
                <Tips value={tips} />
            </div>
            <div className="word__letters">
                { arrayLetters }
            </div>
        </div>
    )
}
