import React from 'react'
import './Nav.css';
import { Score } from '../../atoms/Score/Score';
import { Title } from '../../atoms/Title/Title';

export const Nav = ({score}) => {
    return (
        <nav>
            <Title />
            <Score score={score} />
        </nav>
    )
}
