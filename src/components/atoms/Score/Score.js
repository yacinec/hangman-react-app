import React from 'react';
import "./Score.css";

export const Score = ({score}) => {
    return (
        <p className="score">
            Guessed wrong: { score }
        </p>
    )
}
