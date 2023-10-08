import React, { useState } from 'react';

export default function SideMenu({ isOpen, onClose }) {
  const toggleMenu = () => {
    onClose(!isOpen); // Toggle om menyen synes 
  };

  return (
    <>
      <h2>Handlekurv</h2>
      <button>Hei</button>
    </>
  );
}
