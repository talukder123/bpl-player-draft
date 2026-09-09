import { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../Type/PlayerType';
import SelectedPlayerCard from './SelectedPlayerCard';

interface IselectedPlayers {
    selectedPlayers: Iplayer[]
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
}

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }: IselectedPlayers) => {

    if (selectedPlayers.length === 0) {
        return (
            <div className="flex justify-center items-center py-20 px-4">
                <p className="text-center text-lg sm:text-xl font-semibold text-gray-500">
                    No players have been selected yet.
                </p>
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 gap-5 mt-20'>
            {
                selectedPlayers.map((player: Iplayer, index: number) => {
                    return (
                        <SelectedPlayerCard key={index} coin={coin} setCoin={setCoin} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayerCard>
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayers;