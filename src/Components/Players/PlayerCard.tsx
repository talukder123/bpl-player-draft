import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../Type/PlayerType';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface IplayerCard {
    player: Iplayer
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: Iplayer[]
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: IplayerCard) => {



    const [isSelected, setIsSelected] = useState(false)


    // main functional button of the entire application rn!
    const handleSelectPlayer = () => {

        setIsSelected(true)
        const newCoin = coin - player.price

        if (newCoin >= 0) {
            setCoin(newCoin)
            toast.success(`${player.name} Purchased Successfully`)
        } else {
            toast.error("Not enough coin to purchase")
        }

        setSelectedPlayers([...selectedPlayers, player])

    }


    return (
        // start
        <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl mt-10">

            {/* Player Image */}
            <figure className="relative h-72 overflow-hidden bg-gray-100">
                <img
                    src={player.img}
                    alt={player.name}
                    className="h-full w-full  transition-transform duration-500 group-hover:scale-105"
                />

                {/* Player Type */}
                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
                    {player.type}
                </span>
            </figure>

            {/* Card Body */}
            <div className="space-y-5 p-6">

                {/* Name */}
                <div className="flex items-center gap-2">
                    <FaUserCircle className="text-xl text-gray-500" />
                    <h2 className="text-xl font-bold text-gray-900">
                        {player.name}
                    </h2>
                </div>

                {/* Origin */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                            Origin
                        </p>
                        <p className="mt-1 font-semibold text-gray-700">
                            {player.origin}
                        </p>
                    </div>
                </div>

                <div className="divider my-0"></div>

                {/* Playing Style */}
                <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                        Playing Style
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-gray-50 p-3">
                            <p className="text-xs text-gray-400">Batting</p>
                            <p className="mt-1 text-sm font-semibold text-gray-800">
                                {player.battingStyle}
                            </p>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-3">
                            <p className="text-xs text-gray-400">Bowling</p>
                            <p className="mt-1 text-sm font-semibold text-gray-800">
                                {player.bowlingStyle}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                            Price
                        </p>

                        <p className="text-xl font-bold text-gray-900">
                            {player.price.toLocaleString()} BDT
                        </p>
                    </div>

                    <button
                        onClick={() => handleSelectPlayer()}
                        className={`btn btn-primary rounded-xl px-6 transition-all duration-200 hover:scale-105`}
                        disabled={isSelected}>
                        Choose Player
                    </button>
                </div>

            </div>
        </div>
        // end
    );
};

export default PlayerCard;