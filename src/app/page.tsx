'use client'; 
import "./globals.css"; 
import Cards from "../../intro/components/Cards";
import SideMenu from "../../intro/components/SideMenu";
import { useState } from "react";

// Føles ikke helt riktig denne? 
export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    // Funnet kode og hentet kode innstallert next-prosjektet + fra page :) 
    <main className="flex min-h-screen flex-col items-center justify-between p-20 gap-5">
      <div className="z-10 max-w-5xl w-full items-center text-sm lg:flex flex-wrap gap-5 p-5">
      <Cards />
    </div>
    {/* Ordnet på aside, så den ligger på siden. Må fikse toggle-evenen, da den overlapper cards*/}
    <aside className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform ease-in-out duration-300 transform translate-x-0">
      <SideMenu isOpen={isMenuOpen} onClose={setIsMenuOpen} />
    </aside>
    </main>
  )
} 

