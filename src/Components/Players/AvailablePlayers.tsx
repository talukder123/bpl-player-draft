import React, { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../Type/PlayerType';
import { FaUserCircle } from 'react-icons/fa';
import PlayerCard from './PlayerCard';

interface IavailablePlayers {
    Players: Iplayer[]
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

const AvailablePlayers = ({ Players, coin, setCoin }:IavailablePlayers) => {
    console.log(Players, "availableplayers");
    return (
        <div className='grid grid-cols-3 gap-3 mt-5'>
            {Players.map((player: Iplayer, index:number) => {
                return (
                    <PlayerCard key={index} player={player} coin={coin} setCoin={setCoin}></PlayerCard>
                )

            })}

        </div>
    );
};

export default AvailablePlayers;