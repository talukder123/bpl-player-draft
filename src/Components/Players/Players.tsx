import { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../Type/PlayerType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayerProps {
    playersPromise: Promise<Iplayer[]>,
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
}

const Players = ( {playersPromise, coin, setCoin}:PlayerProps) => {
    console.log(playersPromise);
    const Players = use(playersPromise);
    console.log(Players, "Players");

    const [buttonType, setButtonType] = useState("available")

    const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([])

    const handleButton = (type: "available" | "selected") => {
        setButtonType(type);
    }
    

    return (
        
        <div className='container mx-auto'>
            <div className='container mx-auto flex justify-between items-center gap-4'>
                <h2 className='font-bold text-3xl'>
                    {buttonType === "available" ? "Available Players" : "Selected Players" }
                    
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
            {buttonType === "available" ? 
            <AvailablePlayers Players={Players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers> :
            <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayers>
            }
        </div>
    );
};

export default Players;