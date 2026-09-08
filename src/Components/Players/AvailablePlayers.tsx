import React from 'react';
import type { Iplayer } from '../../Type/PlayerType';
import { FaUserCircle } from 'react-icons/fa';
import PlayerCard from './PlayerCard';

const AvailablePlayers = ({ Players }) => {
    console.log(Players, "availableplayers");
    return (
        <div className='grid grid-cols-3 gap-3 mt-5'>
            {Players.map((player: Iplayer, index:number) => {
                return (
                    <PlayerCard key={index} player={player}></PlayerCard>
                )

            })}

        </div>
    );
};

export default AvailablePlayers;