import React, { useState } from 'react';
import { FaShoppingCart, FaTimes, FaCheck } from 'react-icons/fa';

//Får ikke helt til denne, trenger litt freshe øyne på denne: 
function SideMenu() {
 // Kilde: Kodedeler, hentet fra Chat og Googlesøk. Men må ha litt hjelp :) 
  const [show, setShow] = useState(false); // State to store products ?? 

  const handleShowMenu = () => {
    setShow(!show);
  };

  // Utseende, og struktur er på topp nå. Mangler logistikken og legge til produkter inn i handlekurven... 
  return (
    <>
    <div className="flex flex-col items-center space-y-2">
      <div className={`fixed top-0 right-0 h-screen w-64 bg-white p-4 transform ${show} 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
      {/* X-icon for å lukke meny */}
      <button onClick={handleShowMenu} className="absolute top-2 right-2" >
        <FaTimes size={24} color="gray" />
      </button>

      <h2 className="text-lg">Handlekurv</h2>
      <FaShoppingCart size={24} color="black" />
      <button className="flex items-center space-x-1">
        <span>Fjern</span>
        <FaTimes size={16} color="red" />
      </button>

        {/* Må se litt nærmere på dette, hvordan få implementert logikken inn i knappene*/}
      <button className="flex items-center space-x-1" >
        <span>Legg til</span>
        <FaCheck size={16} color="green" />
      </button>
        </div>
    </div>
    </>
  );
};

export default SideMenu;
