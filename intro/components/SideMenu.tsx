import React from "react";
import { FaShoppingCart, FaTimes, FaCheck } from "react-icons/fa";

function SideMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-64 bg-white p-4 transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform ease-in-out duration-300`}
    >
      <button onClick={toggleMenu} className="absolute top-2 right-2">
        {isMenuOpen ? (
          <FaTimes size={24} color="gray" />
        ) : (
          <FaShoppingCart size={24} color="black" />
        )}
      </button>

      <h2 className="text-lg">Handlekurv</h2>

      {isMenuOpen && (
        <>
          <button className="flex items-center space-x-1">
            <span>Fjern</span>
            <FaTimes size={16} color="red" />
          </button>

          <button className="flex items-center space-x-1">
            <span>Legg til</span>
            <FaCheck size={16} color="green" />
          </button>
        </>
      )}
    </div>
  );
}

export default SideMenu;
