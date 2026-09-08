import React, { use, useState } from 'react';
import type { Iplayer } from '../../Type/PlayerType';
import AvailablePlayers from './AvailablePlayers';

interface PlayerProps {
    playersPromise: Promise<Iplayer[]>
}

const Players = ( {playersPromise}:PlayerProps ) => {
    console.log(playersPromise);
    const Players = use(playersPromise);
    console.log(Players, "Players");

    const [buttonType, setButtonType] = useState("available")

    const handleButton = (type: "available" | "selected") => {
        setButtonType(type);
    }
    

    return (
        
        <div className='container mx-auto'>
            <div className='container mx-auto flex justify-between items-center gap-4'>
                <h2 className='font-bold text-3xl'>
                    Available Players
                </h2>
                <div>
                    <button 
                    onClick={() => handleButton("available")}
                    className={`btn ${buttonType === "available" ? 'btn-success' : ""} rounded-r-none`}>Available</button>
                    <button
                    onClick={() => handleButton("selected")}
                    className={`btn ${buttonType === "selected" ? 'btn-success' : ""} rounded-l-none`} >Seleted</button>
                </div>
            </div>
            <AvailablePlayers Players={Players}></AvailablePlayers>
        </div>
    );
};

export default Players;