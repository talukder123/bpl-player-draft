import React, { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../Type/PlayerType';

interface IselectedPlayers {
    selectedPlayers: Iplayer[]
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}



const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }: IselectedPlayers) => {
    console.log(selectedPlayers);
    return (
        <div>
            {
                selectedPlayers.map((player : Iplayer) => {
                    return player.name
                })
            }
        </div>
    );
};

export default SelectedPlayers;