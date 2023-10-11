import React, { useState } from "react";
import { FaShoppingCart, FaTimes, FaCheck } from "react-icons/fa";

// Videre, kanskje lukke hele asiden...?

// Kilder: https://xn--fullstkk-o0a.no/courses/intro-react/13-lift-state  + Google + ChatGpt. 

function SideMenu({ isMenuOpen, toggleMenu }) {

  const [count, setCount] = useState(0); // Setter en state, for counter :)
  const [remove, setRemove] = useState(0); // Lager og setter en state for å fjerne produkter.

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-64 bg-white p-4 transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform ease-in-out duration-300`}
    >
      <button onClick={toggleMenu} className="absolute top-2 right-2">
        {isMenuOpen ? (
          //Hvis meny åpen, hvis grått X-icon. 
          <FaTimes size={24} color="gray" />
        ) : (
          //Hvis lukket, åpne meny  med svart handlekurv. 
          <FaShoppingCart size={24} color="black" />
        )}
      </button>

      <h2 className="text-lg">Handlekurv</h2>

      {isMenuOpen && (
        // Om meny er åpen, vis fjern og legg til iconene samt teksten. 
        <>
          <button className="flex items-center space-x-1" onClick={() => setRemove((remove) => remove - 1)}>
            <span>Fjern {remove}</span>
            <FaTimes size={16} color="red" />
          </button>

          <button className="flex items-center space-x-1" onClick={() => setCount((count) => count + 1)}>
          <span>Legg til {count}</span> 
            <FaCheck size={16} color="green" />
          </button>
        </>
      )}
    </div>
  );
}

export default SideMenu;
