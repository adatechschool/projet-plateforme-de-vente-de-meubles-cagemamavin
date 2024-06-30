import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import SearchBar from './SearchBar';
import Cart from './Cart';
import Compte from './Compte';
import '../index.css';

const Header = () => {
    return (
        <header className="bg-[#F0EFEB] p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <HamburgerMenu />
                <div className="text-4xl font-bold font-gistesy">
                    <a href="/home">Móvel</a>
                </div>
                <SearchBar />
            </div>

            <div className="flex items-center space-x-4">
                <Cart />
                <Compte />
            </div>

        </header>
    );
};

export default Header;