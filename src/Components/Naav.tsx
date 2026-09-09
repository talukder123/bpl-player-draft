import React from 'react';
import logo from '../assets/logo.png'
import { FaDollarSign } from 'react-icons/fa';

const Naav = ({ coin }: { coin: number }) => {
    return (
        <div className="sticky top-0 z-50 border-b border-gray-200 bg-transparent shadow-sm backdrop-blur">
            <nav className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <a href="/" className="shrink-0">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-auto sm:h-12"
                    />
                </a>

                {/* Navigation */}
                <ul className="hidden items-center gap-1 md:flex">
                    <li>
                        <a
                            href="#"
                            className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-primary"
                        >
                            HOME
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-primary"
                        >
                            FIXTURE
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm"
                        >
                            PLAYER
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-primary"
                        >
                            SCHEDULE
                        </a>
                    </li>
                </ul>

                {/* Coin */}
                <div className="flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-3 py-2 shadow-sm sm:px-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-white">
                        <FaDollarSign className="text-sm" />
                    </div>

                    <span className="text-sm font-bold text-gray-800 sm:text-base">
                        {coin.toLocaleString()}
                    </span>
                </div>

            </nav>
        </div>
    );
};

export default Naav;