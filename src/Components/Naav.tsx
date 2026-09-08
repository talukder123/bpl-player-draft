import React from 'react';
import logo from '../assets/logo.png'

const Naav = () => {
    return (
        <div className=' bg-red-200 px-6 py-4'>
            <nav className=" container mx-auto flex items-center justify-between">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
                <ul className="flex items-center gap-4">
                    <li>HOME</li>
                    <li>FIXTURE</li>
                    <li>PLAYER</li>
                    <li>SCHEDULE</li>
                </ul>

            </nav>
        </div>
    );
};

export default Naav;