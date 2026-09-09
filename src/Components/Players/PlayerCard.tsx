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
        <div className="group mt-6 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Player Image — kept same */}
            <figure className="relative h-64 overflow-hidden bg-gray-100 sm:h-72">
                <img
                    src={player.img}
                    alt={player.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Player Type */}
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
                    {player.type}
                </span>
            </figure>

            {/* Card Body */}
            <div className="p-4 sm:p-5">

                {/* Name + Origin */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2">
                        <FaUserCircle className="shrink-0 text-xl text-gray-400" />

                        <h2 className="truncate text-lg font-bold text-gray-900 sm:text-xl">
                            {player.name}
                        </h2>
                    </div>

                    {/* Origin */}
                    <span className="shrink-0 rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                        {player.origin}
                    </span>
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-gray-100"></div>

                {/* Playing Style */}
                <div>
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400">
                        Playing Style
                    </p>

                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                        {/* Batting */}
                        <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                            <p className="text-xs text-gray-400">
                                Batting
                            </p>

                            <p className="mt-1 text-sm font-semibold leading-5 text-gray-800">
                                {player.battingStyle}
                            </p>
                        </div>

                        {/* Bowling */}
                        <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                            <p className="text-xs text-gray-400">
                                Bowling
                            </p>

                            <p className="mt-1 text-sm font-semibold leading-5 text-gray-800">
                                {player.bowlingStyle}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Price + Button */}
                <div className="mt-5 flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Price */}
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                            Price
                        </p>

                        <p className="mt-0.5 text-lg font-bold text-gray-900 sm:text-xl">
                            {player.price.toLocaleString()} USD
                        </p>
                    </div>

                    {/* Button */}
                    <button
                        onClick={() => handleSelectPlayer()}
                        disabled={isSelected}
                        className="btn btn-primary w-full rounded-xl px-5 transition-all duration-200 hover:scale-[1.02] sm:w-auto"
                    >
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;