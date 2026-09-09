import { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../Type/PlayerType';
import { TbTrash } from 'react-icons/tb';

interface IselectedPlayerCard {
    player: Iplayer
    selectedPlayers: Iplayer[]
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>

    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
}

const SelectedPlayerCard = ({player, selectedPlayers, setSelectedPlayers, coin, setCoin}:IselectedPlayerCard) => {

        const handleRemovePlayer = (player:Iplayer) => {
        const remainingPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.name !== player.name)

        setSelectedPlayers(remainingPlayers)

        const newBalance = coin + player.price
        setCoin(newBalance)
    }



    return (
        <div className='flex gap-4 justify-between items-center border border-gray-400 py-3 px-6 rounded-2xl'>
            <div className='flex gap-4'>
                <img src={player.img} alt={player.name} className='h-20 w-27.5 rounded-2xl' />
                <div>
                    <h2 className='font-bold text-2xl'>{player.name}</h2>
                    <p className='font-semibold text-1xl text-gray-500'>{player.type}</p>
                </div>
            </div>
            <span className='text-red-700 cursor-pointer font-bold border p-5 rounded-2xl' onClick={() => handleRemovePlayer(player)}>
                <TbTrash />
            </span>


        </div>
    );
};

export default SelectedPlayerCard;