import React, { use } from 'react';
import type { Iplayer } from '../../Type/PlayerType';
import AvailablePlayers from './AvailablePlayers';

interface PlayerProps {
    playersPromise: Promise<Iplayer[]>
}

const Players = ( {playersPromise}:PlayerProps ) => {
    console.log(playersPromise);
    const Players = use(playersPromise);
    console.log(Players, "Players");
    

    return (
        
        <div className='container mx-auto'>
            <div className='container mx-auto flex justify-between items-center gap-4'>
                <h2 className='font-bold text-3xl'>
                    Available Players
                </h2>
                <div>
                    <button className='btn btn-success'>Available</button>
                    <button className='btn'>Seleted</button>
                </div>
            </div>
            <AvailablePlayers Players={Players}></AvailablePlayers>
        </div>
    );
};

export default Players;