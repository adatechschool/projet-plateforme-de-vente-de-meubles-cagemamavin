import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import Compte from "./Compte";
import "../index.css";

const Header = () => {
  return (
    <header className="bg-[#ddd0c8] p-4 flex justify-between items-center sticky -z-50 top-0">
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
