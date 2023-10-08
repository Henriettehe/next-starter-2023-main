import React, { useState } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
// Testet litt rundt med å legge til iconer, fra React-bibliotek. Hjelp av ChatGpt for hvordan det kan gjøres :) 

export default function SideMenu({ isOpen, onClose }) {
  const toggleMenu = () => {
    onClose(!isOpen); // Toggle om menyen synes eller ikke 
  };

  return (
    <>
    <div className="flex items-center space-x-2">
      <FaShoppingCart size={24} color="black" />
      <h2 className="text-lg">Handlekurv</h2>
    </div>
    <button className="flex items-center space-x-1">
        <span>Fjern</span>
        <FaTimes size={16} color="red" />
        </button>
    </>
  );
}
