
import { useState } from 'react';
import './Hand.css';

export enum Hands {
    Rock = 'rock',
    Paper = 'paper',
    Scissors = 'scissors'
}

type HandProps = {
    hand: Hands,
    onClick: () => void,
}

export const Hand: React.FC<HandProps> = ({
    hand,
    onClick
}) => {
    return (
        <button className='hand' onClick={onClick}>
            <img 
                style={{ opacity: 0.75 }}
                height={40}
                width={40}
                src={`${process.env.PUBLIC_URL}/assets/icons/${hand}.png`}
                alt={`${hand} icon`} 
            />
            {hand}
        </button>
    );
}